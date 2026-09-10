// ===== sync.js =====
// Tisch-Sync über Supabase (geteilte Anschreibung für mehrere Geräte).
// Ladereihenfolge: lang.js → calc.js → ui.js → app.js → sync.js
// Voraussetzung in index.html VOR diesem Script:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js"></script>

// ---- Konfiguration: hier eure Projekt-Werte eintragen ----
const SUPABASE_URL      = 'https://eidqeltpncugxljzirub.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_3jpPQnJolSrd-Ppqc8_d5Q_64SrR6sR';
// Der anon-Key darf öffentlich im Code stehen (siehe Absicherung über RLS-Policies,
// supabase-setup.sql). NIEMALS den service_role-Key hier eintragen!

let sb = null;
let currentTable = null;          // { code, isMaster } | null
let realtimeChannel = null;
let viewerReadOnlyActive = false;
let viewerPeekIdx = null;         // Index der Runde, die der Zuschauer gerade rein lesend betrachtet, oder null

// ===== Persistenz der Tisch-Session =====
// Getrennt vom eigentlichen Spielstand (skat_v4): merkt sich nur "welcher Tisch,
// welche Rolle", damit die App nach Reload/Neustart weiß, dass sie Host oder
// Zuschauer war, statt das einfach zu vergessen.
const TABLE_SESSION_KEY='skat_table_session';
function saveTableSession(){
  try{
    if(currentTable) localStorage.setItem(TABLE_SESSION_KEY, JSON.stringify(currentTable));
    else localStorage.removeItem(TABLE_SESSION_KEY);
  }catch(e){}
}
function loadTableSession(){
  try{
    const d=localStorage.getItem(TABLE_SESSION_KEY);
    return d?JSON.parse(d):null;
  }catch(e){ return null; }
}

function sbReady(){ return typeof supabase !== 'undefined'; }

async function sbInit(){
  if(sb) return sb;
  if(!sbReady()){ console.warn('Supabase-Client nicht geladen.'); return null; }
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data:{ session } } = await sb.auth.getSession();
  if(!session){
    const { error } = await sb.auth.signInAnonymously();
    if(error) console.warn('Anonyme Anmeldung fehlgeschlagen:', error.message);
  }
  return sb;
}

function genTableCode(){
  // Ohne leicht verwechselbare Zeichen (0/O, 1/I)
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c='';
  for(let i=0;i<5;i++) c+=chars[Math.floor(Math.random()*chars.length)];
  return c;
}

// ===== Tisch eröffnen (Master) =====
async function createTableSession(){
  const client = await sbInit();
  if(!client) return;
  const { data:userData, error:userErr } = await client.auth.getUser();
  if(userErr || !userData.user){ showSyncError(); return; }

  let code=null, tries=0;
  while(tries<5 && !code){
    const candidate=genTableCode();
    const { error } = await client.from('tables').insert({
      code:candidate, owner_id:userData.user.id, state, status:'open'
    });
    if(!error) code=candidate;
    tries++;
  }
  if(!code){ showSyncError(); return; }

  currentTable={ code, isMaster:true };
  saveTableSession();
  subscribeTable(code);
  renderTableModalContent();
  updateHeaderSyncBadge();
}

// ===== Tisch beitreten (Viewer) =====
async function joinTableSession(rawCode){
  const client = await sbInit();
  if(!client) return;
  const code=(rawCode||'').trim().toUpperCase();
  if(code.length<5){ showJoinError(); return; }

  const { data, error } = await client.from('tables').select('*').eq('code', code).maybeSingle();
  if(error || !data || data.status!=='open'){
    showJoinError();
    // Auch sichtbar machen, wenn das Tisch-Modal gar nicht geöffnet ist (z.B. beim
    // automatischen Beitritt per ?table=CODE-Link) – sonst scheitert der Beitritt
    // unbemerkt und die App zeigt einfach weiter den letzten lokalen Stand.
    showInfoModal(t('tischNichtGefunden'));
    return;
  }

  currentTable={ code, isMaster:false, updatedAt:data.updated_at };
  saveTableSession();
  state = data.state;
  saveLocalOnly();
  renderAll(); updateCalcUI(); updateQueueUI(); applyTranslations();
  subscribeTable(code);
  applyViewerMode(true);
  renderTableModalContent();
  updateHeaderSyncBadge();
  closeTableModal();
}

// ===== Realtime-Abo =====
function subscribeTable(code){
  if(!sb) return;
  if(realtimeChannel){ sb.removeChannel(realtimeChannel); realtimeChannel=null; }
  realtimeChannel = sb.channel('table-'+code)
    .on('postgres_changes',
      { event:'UPDATE', schema:'public', table:'tables', filter:'code=eq.'+code },
      payload => {
        const row=payload.new;
        if(!row) return;
        if(row.status==='closed'){ handleTableClosedRemotely(); return; }
        if(currentTable && !currentTable.isMaster){
          state = row.state;
          currentTable.updatedAt = row.updated_at;
          saveTableSession();
          saveLocalOnly();
          if(viewerPeekIdx !== null){
            // Anschreiber hat währenddessen weitergemacht – Lese-Ansicht schließen,
            // statt veraltete/ungewollt wieder aktivierte Bedienelemente stehen zu lassen.
            closeViewerReadOnly();
          }
          renderAll(); updateCalcUI(); updateQueueUI();
        }
      })
    .subscribe();
}

// ===== Push bei Master-Änderungen (debounced) =====
let pushTimer=null;
function pushStateToTable(){
  if(!currentTable || !currentTable.isMaster || !sb) return;
  clearTimeout(pushTimer);
  pushTimer=setTimeout(async ()=>{
    await sb.from('tables')
      .update({ state, updated_at:new Date().toISOString() })
      .eq('code', currentTable.code);
  }, 250);
}

// save() aus app.js "einwickeln" – zentraler Hook, ohne app.js/ui.js
// an jeder einzelnen Speicherstelle anfassen zu müssen.
if(typeof save === 'function'){
  const _localSave = save;
  window._localSave = _localSave;
  save = function(){
    _localSave();
    pushStateToTable();
  };
}
function saveLocalOnly(){
  if(window._localSave) window._localSave();
}

// ===== Tisch schließen / verlassen =====
async function closeTableSession(){
  if(currentTable && currentTable.isMaster && sb){
    await sb.from('tables').update({ status:'closed' }).eq('code', currentTable.code);
  }
  teardownTableSession();
}
function leaveTableSession(){ teardownTableSession(); }

// Für den Hard-Reset: lokalen Sync-Zustand SOFORT und synchron aufräumen (kein
// await), damit kein Wettlauf mit einem direkt danach neu gestarteten Tisch
// entstehen kann. Das Schließen bei Supabase läuft nur noch nebenher im
// Hintergrund mit, best effort – der lokale Reset wartet nicht darauf.
async function hardResetSyncState(){
  if(currentTable && currentTable.isMaster && sb){
    // Wirklich abwarten statt fire-and-forget – sonst kann das direkt danach
    // folgende localStorage.clear() den Request beenden, bevor er überhaupt
    // abgeschickt wurde. Timeout als Fallback, falls gerade offline.
    try{
      await Promise.race([
        sb.from('tables').update({ status:'closed' }).eq('code', currentTable.code),
        new Promise(resolve=>setTimeout(resolve, 1500))
      ]);
    }catch(e){ console.warn('Tisch-Schließen beim Hard-Reset fehlgeschlagen:', e); }
  }
  if(realtimeChannel && sb){
    try{ sb.removeChannel(realtimeChannel); }catch(e){}
    realtimeChannel=null;
  }
  currentTable=null;
  viewerReadOnlyActive=false;
  saveTableSession();
  updateHeaderSyncBadge();
}

function teardownTableSession(){
  if(realtimeChannel && sb){ sb.removeChannel(realtimeChannel); realtimeChannel=null; }
  const wasViewer = currentTable && !currentTable.isMaster;
  currentTable=null;
  saveTableSession();
  if(wasViewer) applyViewerMode(false);
  updateHeaderSyncBadge();
  renderTableModalContent();
}

function handleTableClosedRemotely(){
  teardownTableSession();
  showInfoModal(t('tischGeschlossenHinweis'));
}

// Leichtgewichtiges Info-Modal im bestehenden Look (nutzt vorhandene
// .modal-overlay/.modal/.btn-confirm-Styles aus style.css) statt native alert().
function showInfoModal(message){
  let el=document.getElementById('syncInfoModal');
  if(!el){
    el=document.createElement('div');
    el.id='syncInfoModal';
    el.className='modal-overlay';
    el.innerHTML=`<div class="modal">
      <h2>ℹ️ <span id="syncInfoModalTitle"></span></h2>
      <p id="syncInfoModalText" style="font-size:13px;color:var(--muted)"></p>
      <div class="modal-btns">
        <button class="btn-confirm" id="syncInfoModalOk"></button>
      </div>
    </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e=>{ if(e.target===el) el.classList.remove('show'); });
    el.querySelector('#syncInfoModalOk').addEventListener('click', ()=>el.classList.remove('show'));
  }
  el.querySelector('#syncInfoModalTitle').textContent=t('hinweis');
  el.querySelector('#syncInfoModalOk').textContent=t('ok');
  el.querySelector('#syncInfoModalText').textContent=message;
  el.classList.add('show');
}

// ===== Viewer-Modus: Eingabe-UI sperren =====
function applyViewerMode(on){
  viewerReadOnlyActive = !!on;
  document.body.classList.toggle('viewer-mode', on);
  const panel=document.getElementById('inputPanel');
  if(panel) panel.style.display = on ? 'none' : '';
  // --panel-h steuert, wo .table-wrap (position:fixed) unten endet. Wird nur von
  // updatePanelHeight() gepflegt, das hier nicht automatisch mitläuft – daher bei
  // ausgeblendetem Panel manuell auf 0 setzen, sonst bleibt eine Lücke unten stehen.
  if(on){
    document.documentElement.style.setProperty('--panel-h','0px');
  } else if(typeof updatePanelHeight==='function'){
    updatePanelHeight();
  }
  const undoBtn=document.getElementById('undoBtn');
  if(undoBtn) undoBtn.style.display = on ? 'none' : '';
  const resetBtn=document.getElementById('resetBtn');
  if(resetBtn) resetBtn.style.display = on ? 'none' : '';
  // Spielernamen bleiben Sache des Anschreibers – Zuschauer dürfen nicht umbenennen
  ['th0','th1','th2','th3'].forEach(id=>{
    const th=document.getElementById(id);
    if(th) th.style.cursor = on ? 'default' : 'pointer';
  });
  // Bock/Pflicht-Ramsch-Buttons (Header + Tab-Leiste) optisch sperren
  ['queueBockBtn','queueRamschBtn','queueBockBtnTab','queueRamschBtnTab'].forEach(id=>{
    const b=document.getElementById(id);
    if(b){ b.style.pointerEvents = on ? 'none' : ''; b.style.opacity = on ? '0.4' : ''; }
  });
}

// editName() (ui.js) im Viewer-Modus wirkungslos machen – gleicher Wrapper-Trick wie bei save().
if(typeof editName === 'function'){
  const _localEditName = editName;
  editName = function(i){
    if(viewerReadOnlyActive) return;
    _localEditName(i);
  };
}

// Spalten-Tausch per langem Druck (ui.js) im Viewer-Modus unterbinden.
if(typeof _beginColDrag === 'function'){
  const _localBeginColDrag = _beginColDrag;
  _beginColDrag = function(idx, x, y){
    if(viewerReadOnlyActive) return;
    _localBeginColDrag(idx, x, y);
  };
}

// Bock-/Pflicht-Ramsch-Queue-Buttons (app.js) im Viewer-Modus unterbinden.
if(typeof toggleQueueBlock === 'function'){
  const _localToggleQueueBlock = toggleQueueBlock;
  toggleQueueBlock = function(tp){
    if(viewerReadOnlyActive) return;
    _localToggleQueueBlock(tp);
  };
}

// ===== Echte Sperre auf Funktionsebene statt nur über disabled=true =====
// disabled=true auf Buttons ist reine Anzeige und kann durch jeden nachfolgenden
// Re-Render (updateCalcUI, renderAll, ...) versehentlich wieder aufgehoben werden
// (genau das war der vorherige Bug). Die eigentliche Sperre gehört daher in die
// Funktionen selbst, die den State/Calc mutieren – Buttons zeigen nur noch den
// Zustand an, entscheiden aber nicht mehr darüber.
function lockForViewer(fnName){
  if(typeof window[fnName] !== 'function') return;
  const original = window[fnName];
  window[fnName] = function(...args){
    if(viewerReadOnlyActive) return;
    return original.apply(this, args);
  };
}
[
  'togglePlayer','setType','toggleOpt','toggleDbl',
  'stepFactor','stepGeschoben','toggleSign','toggleRamschDurch',
  'vormerken','backToStage1','addRound','openUndoConfirm',
  'add4thPlayer','remove4thPlayer'
].forEach(lockForViewer);

// Wird von ui.js beim langen Druck auf eine Zeile aufgerufen (siehe Integrationshinweis).
// Zeigt Stage 1/2 rein lesend, ohne Schreibrechte.
function viewRoundReadOnly(idx){
  if(!viewerReadOnlyActive) return;
  viewerPeekIdx = idx;
  const panel=document.getElementById('inputPanel');
  if(panel) panel.style.display='';

  // startEditRound() weigert sich normalerweise komplett, wenn state gerade eine
  // offene (vorgemerkte) Runde hat – richtig für den Anschreiber (kann nicht
  // rückwirkend etwas Altes bearbeiten, während eine Ansage läuft), aber falsch für
  // die reine Lese-Ansicht: die betrachtete Runde idx ist ja unabhängig davon. Die
  // Sperre für diesen einen, synchronen Aufruf kurz überbrücken.
  const _realHasOpenRound = hasOpenRound;
  hasOpenRound = function(){ return false; };

  // startEditRound() ruft intern u.a. setType() auf – das ist jetzt (richtigerweise)
  // für Zuschauer gesperrt. Diese interne Wiederherstellung ist aber kein Nutzer-
  // Eingriff, sondern nur Anzeige – die Zuschauer-Sperre für diesen einen Aufruf
  // ebenfalls kurz aussetzen. Da JS hier synchron durchläuft, kann währenddessen
  // keine echte Nutzereingabe dazwischenfunken.
  viewerReadOnlyActive = false;
  startEditRound(idx);
  viewerReadOnlyActive = true;

  hasOpenRound = _realHasOpenRound;
  editRoundIdx = -1;     // Schreibmarkierung sofort wieder entfernen
  document.querySelectorAll('#stage1 button, #stage1 input, #stage2 button, #stage2 input')
    .forEach(el=>{ el.disabled=true; });
  const addBtn=document.getElementById('addBtn');
  if(addBtn) addBtn.style.display='none';
  const vmBtn=document.getElementById('vormerkenBtn');
  if(vmBtn) vmBtn.style.display='none';
  showViewerCloseBar();
}
function showViewerCloseBar(){
  let bar=document.getElementById('viewerCloseBar');
  if(!bar){
    bar=document.createElement('div');
    bar.id='viewerCloseBar';
    bar.style.cssText='padding:10px;text-align:center';
    bar.innerHTML=`<button class="btn-cancel" onclick="closeViewerReadOnly()"></button>`;
    document.querySelector('.panel-content').appendChild(bar);
  }
  bar.querySelector('button').textContent=t('ansichtSchliessen');
  bar.style.display='';
}
function closeViewerReadOnly(){
  viewerPeekIdx = null;
  const panel=document.getElementById('inputPanel');
  if(panel) panel.style.display='none';
  document.documentElement.style.setProperty('--panel-h','0px');
  const bar=document.getElementById('viewerCloseBar');
  if(bar) bar.style.display='none';
  document.querySelectorAll('#stage1 button, #stage1 input, #stage2 button, #stage2 input')
    .forEach(el=>{ el.disabled=false; });
}

// ===== Header-Badge =====
function updateHeaderSyncBadge(){
  const suit=document.getElementById('logoSuit');
  if(!suit) return;
  suit.classList.toggle('sync-master', !!(currentTable && currentTable.isMaster));
  suit.classList.toggle('sync-viewer', !!(currentTable && !currentTable.isMaster));
  const logo=document.querySelector('.logo');
  if(logo) logo.title = !currentTable ? ''
    : currentTable.isMaster
      ? 'Tisch '+currentTable.code+' – du bist Anschreiber'
      : 'Tisch '+currentTable.code+' – Zuschauer-Modus';
}

// ===== Modal: Öffnen / Rendern / Schließen =====
function openTableModal(){
  renderTableModalContent();
  const m=document.getElementById('tableModal');
  if(m) m.classList.add('show');
}
function closeTableModal(){
  const m=document.getElementById('tableModal');
  if(m) m.classList.remove('show');
}
function closeTableModalOutside(e){
  if(e.target.id==='tableModal') closeTableModal();
}

function renderTableModalContent(){
  const body=document.getElementById('tableModalBody');
  if(!body) return;

  if(!currentTable){
    body.innerHTML = `
      <p style="font-size:12px;color:var(--muted);margin-bottom:14px">
        ${t('tischIntro')}
      </p>
      <div class="modal-btns" style="flex-direction:column;gap:8px">
        <button class="btn-confirm" onclick="createTableSession()">${t('tischEroeffnen')}</button>
      </div>
      <div style="margin-top:16px;display:flex;gap:8px;align-items:center">
        <input class="settings-input" id="joinCodeInput" maxlength="5" placeholder="${t('tischCodePlatzhalter')}"
               style="text-transform:uppercase;flex:1" oninput="this.value=this.value.toUpperCase()">
        <button class="btn-confirm" onclick="joinTableSession(document.getElementById('joinCodeInput').value)">${t('tischBeitreten')}</button>
      </div>
      <div id="joinErrorMsg" style="display:none;color:var(--red,#e55);font-size:11px;margin-top:6px">
        ${t('tischNichtGefunden')}
      </div>
    `;
    return;
  }

  const qrTarget = window.location.origin + window.location.pathname + '?table=' + currentTable.code;
  body.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:11px;color:var(--muted);margin-bottom:4px">
        ${currentTable.isMaster ? t('tischDuBistAnschreiber') : t('tischDuLiestMit')}
      </div>
      <div style="font-family:'Source Code Pro',monospace;font-size:28px;letter-spacing:4px;margin-bottom:12px">
        ${currentTable.code}
      </div>
      <div id="qrHolder" style="display:flex;justify-content:center;margin-bottom:14px"></div>
      <div class="modal-btns" style="flex-direction:column;gap:8px">
        ${currentTable.isMaster
          ? `<button class="btn-cancel" onclick="closeTableSession()">${t('tischSchliessen')}</button>`
          : `<button class="btn-cancel" onclick="leaveTableSession()">${t('tischVerlassen')}</button>`}
      </div>
    </div>
  `;
  renderQrCode('qrHolder', qrTarget);
}

function renderQrCode(holderId, text){
  const holder=document.getElementById(holderId);
  if(!holder || typeof qrcode==='undefined') return;
  const qr=qrcode(0,'M');
  qr.addData(text);
  qr.make();
  holder.innerHTML=qr.createSvgTag({cellSize:5, margin:2});
}

function showSyncError(){ showInfoModal(t('tischFehlerErstellen')); }
function showJoinError(){
  const el=document.getElementById('joinErrorMsg');
  if(el) el.style.display='';
}

// ===== Tisch-Session nach Reload/Neustart wiederherstellen =====
async function restoreTableSessionIfAny(){
  const saved=loadTableSession();
  if(!saved) return;
  const client=await sbInit();
  if(!client) return; // z.B. offline – Session bleibt gespeichert, nächster Start versucht es erneut

  let data=null, error=null;
  try{
    const res=await client.from('tables').select('*').eq('code', saved.code).maybeSingle();
    data=res.data; error=res.error;
  }catch(e){ error=e; }

  if(error){
    // Netzwerk-/Serverproblem: Session NICHT verwerfen, App läuft lokal normal weiter,
    // nächster Start versucht erneut anzudocken.
    return;
  }
  if(!data || data.status!=='open'){
    // Tisch existiert nicht mehr oder wurde geschlossen, während die App zu war
    const wasClosed = data && data.status==='closed';
    currentTable=null;
    saveTableSession();
    if(wasClosed) showInfoModal(t('tischGeschlossenHinweis'));
    return;
  }

  currentTable={ code:saved.code, isMaster:saved.isMaster, updatedAt:data.updated_at };
  if(!currentTable.isMaster){
    // Nur übernehmen, wenn der frisch geholte Stand wirklich nicht älter ist als
    // der zuletzt bekannte – sonst könnte ein Wettlauf (z.B. verzögerter Push,
    // kurz danach direkt ein Reload) einen neueren lokalen Stand überschreiben.
    const localTime = saved.updatedAt ? new Date(saved.updatedAt).getTime() : 0;
    const freshTime  = data.updated_at ? new Date(data.updated_at).getTime() : 0;
    if(freshTime >= localTime){
      state = data.state;
      saveLocalOnly();
      renderAll(); updateCalcUI(); updateQueueUI(); applyTranslations();
    }
    applyViewerMode(true);
  }
  saveTableSession();
  // Master: state ist bereits die lokale Quelle der Wahrheit, nichts überschreiben –
  // nur wieder andocken, damit z.B. ein Fernschließen künftig ankäme.
  subscribeTable(currentTable.code);
  updateHeaderSyncBadge();
}

// ===== Beim Start: entweder per ?table=CODE beitreten, oder alte Session wiederherstellen =====
(function initSyncOnLoad(){
  window.addEventListener('load', ()=>{
    setTimeout(async ()=>{
      const params=new URLSearchParams(window.location.search);
      const code=params.get('table');
      if(code){
        await joinTableSession(code);   // expliziter QR-/Link-Beitritt hat Vorrang
      } else {
        await restoreTableSessionIfAny();
      }
    }, 300);
  });
})();
