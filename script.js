// ===== TRANSLATIONS =====
const T = {
  de: {
    farbe:'Farbe', grand:'Grand', null:'Null', durch:'Durch.', ramsch:'Ramsch',
    karo:'Karo', herz:'Herz', pik:'Pik', kreuz:'Kreuz',
    faktor:'Faktor', punkte:'Pkt.', festWert:'Fester Wert', verlierer:'Verlierer',
    details:'Details & Modifikatoren',
    buben:'Buben', mit:'mit', ohne:'ohne', bube:'B',  // B = Bube
    koenig:'K', dame:'D',
    zusaetze:'Zusätze (+1 Faktor je)',
    hand:'Hand', schneider:'Schneider', schneiderA:'Schneider anges.',
    schwarz:'Schwarz', schwarzA:'Schwarz anges.', ouvert:'Ouvert',
    ramschExtras:'Ramsch-Extras (×2 je)',
    jungfrau:'Jungfrau', geschoben:'Geschoben',
    verdoppelungen:'Verdoppelungen (×2 je)',
    kontra:'Kontra', re:'Re', bock:'Bock',
    wertKorrektur:'Wert-Korrektur',
    verlorenX2:'Verloren ×2', verlorenHint:'(Vorzeichen wird automatisch gesetzt)',
    eintragen:'Eintragen',
    vormerken:'Vormerken',
    spielerAuswaehlen:'Spieler auswählen · Spieltyp · Eintragen',
    detailsEintragen:'Details eingeben · Eintragen',
    bekommtPunkte:'bekommt die Punkte',
    oeffnen:'Tippen zum Öffnen ↑',
    wert:'Wert', spiel:'Spiel',
    emptyText:'Noch keine Spiele.\nSpielernamen durch Tippen auf Überschrift ändern.',
    modalTitle:'Neu starten?',
    modalText:'Alle Spielstände werden gelöscht. Spielernamen bleiben erhalten.',
    abbrechen:'Abbrechen', loeschen:'Löschen',
    eingetragen:'Eintrag gelöscht', rueckgaengig:'Rückgängig',
    farbenNamen:['Karo','Herz','Pik','Kreuz'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durchmarsch',
    vierterSpieler:'4. Spieler hinzufügen',
    vierterSpielerLoeschen:'4. Spieler entfernen',
    aussetzt:'setzt aus',
    leer:'Leer', leerHint:'Keine Punkte – Runde ohne Spieler',
    leer:'Leer', leerHint:'Keine Punkte – Runde wird notiert ohne Spieler',
    tabStd:'Σ Standard', tabSf:'SF Turnier', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Runde bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
  en: {
    farbe:'Suit', grand:'Grand', null:'Null', durch:'March', ramsch:'Ramsch',
    karo:'Diamonds', herz:'Hearts', pik:'Spades', kreuz:'Clubs',
    faktor:'Factor', punkte:'pts', festWert:'Fixed value', verlierer:'Loser',
    details:'Details & Modifiers',
    buben:'Jacks', mit:'with', ohne:'without', bube:'J',
    koenig:'K', dame:'Q',
    zusaetze:'Extras (+1 factor each)',
    hand:'Hand', schneider:'Schneider', schneiderA:'Schneider declared',
    schwarz:'Schwarz', schwarzA:'Schwarz declared', ouvert:'Ouvert',
    ramschExtras:'Ramsch extras (×2 each)',
    jungfrau:'Virgin', geschoben:'Pushed',
    verdoppelungen:'Doublings (×2 each)',
    kontra:'Contra', re:'Re', bock:'Bock',
    wertKorrektur:'Value correction',
    verlorenX2:'Lost ×2', verlorenHint:'(sign is set automatically)',
    eintragen:'Enter',
    vormerken:'Reserve',
    spielerAuswaehlen:'Select player · Game type · Enter',
    detailsEintragen:'Enter details · Enter',
    bekommtPunkte:'gets the points',
    oeffnen:'Tap to open ↑',
    wert:'Value', spiel:'Game',
    emptyText:'No rounds yet.\nTap column headers to edit player names.',
    modalTitle:'Start over?',
    modalText:'All scores will be deleted. Player names are kept.',
    abbrechen:'Cancel', loeschen:'Delete',
    eingetragen:'Entry deleted', rueckgaengig:'Undo',
    farbenNamen:['Diamonds','Hearts','Spades','Clubs'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'March',
    vierterSpieler:'Add 4th player',
    vierterSpielerLoeschen:'Remove 4th player',
    aussetzt:'sits out',
    leer:'Empty', leerHint:'No points – round without player',
    leer:'Empty', leerHint:'No points – round noted without player',
    tabStd:'Σ Standard', tabSf:'SF Tournament', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze declared',
    speichern:'Save', editieren:'Edit round', abbrechenEdit:'Cancel', weiter:'Next ›',
  },
  fr: {
    farbe:'Couleur', grand:'Grand', null:'Null', durch:'Marche', ramsch:'Ramsch',
    karo:'Carreau', herz:'Cœur', pik:'Pique', kreuz:'Trèfle',
    faktor:'Facteur', punkte:'pts', festWert:'Valeur fixe', verlierer:'Perdant',
    details:'Détails & Modificateurs',
    buben:'Valets', mit:'avec', ohne:'sans', bube:'V',
    koenig:'R', dame:'D',
    zusaetze:'Bonus (+1 facteur chacun)',
    hand:'Main', schneider:'Schneider', schneiderA:'Schneider annoncé',
    schwarz:'Schwarz', schwarzA:'Schwarz annoncé', ouvert:'Ouvert',
    ramschExtras:'Extras Ramsch (×2 chacun)',
    jungfrau:'Vierge', geschoben:'Repoussé',
    verdoppelungen:'Doublements (×2 chacun)',
    kontra:'Contre', re:'Surcontre', bock:'Bock',
    wertKorrektur:'Correction valeur',
    verlorenX2:'Perdu ×2', verlorenHint:'(signe mis automatiquement)',
    eintragen:'Enregistrer',
    vormerken:'Réserver',
    spielerAuswaehlen:'Choisir joueur · Type · Enregistrer',
    detailsEintragen:'Saisir détails · Enregistrer',
    bekommtPunkte:'reçoit les points',
    oeffnen:'Toucher pour ouvrir ↑',
    wert:'Valeur', spiel:'Jeu',
    emptyText:'Aucune manche.\nTouchez les en-têtes pour modifier les noms.',
    modalTitle:'Recommencer ?',
    modalText:'Tous les scores seront supprimés. Les noms sont conservés.',
    abbrechen:'Annuler', loeschen:'Supprimer',
    eingetragen:'Entrée supprimée', rueckgaengig:'Annuler',
    farbenNamen:['Carreau','Cœur','Pique','Trèfle'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durch',
    vierterSpieler:'Ajouter 4e joueur',
    vierterSpielerLoeschen:'Retirer 4e joueur',
    aussetzt:'passe',
    leer:'Vide', leerHint:'Sans points – tour sans joueur',
    tabStd:'Σ Standard', tabSf:'SF Tournoi', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
  es: {
    farbe:'Palo', grand:'Grand', null:'Null', durch:'Marcha', ramsch:'Ramsch',
    karo:'Diamante', herz:'Corazón', pik:'Pica', kreuz:'Trébol',
    faktor:'Factor', punkte:'pts', festWert:'Valor fijo', verlierer:'Perdedor',
    details:'Detalles y Modificadores',
    buben:'Sotas', mit:'con', ohne:'sin', bube:'S',
    koenig:'R', dame:'D',
    zusaetze:'Extras (+1 factor c/u)',
    hand:'Mano', schneider:'Schneider', schneiderA:'Schneider declarado',
    schwarz:'Schwarz', schwarzA:'Schwarz declarado', ouvert:'Ouvert',
    ramschExtras:'Extras Ramsch (×2 c/u)',
    jungfrau:'Virgen', geschoben:'Empujado',
    verdoppelungen:'Dobles (×2 c/u)',
    kontra:'Contra', re:'Redoble', bock:'Bock',
    wertKorrektur:'Corrección valor',
    verlorenX2:'Perdido ×2', verlorenHint:'(signo se pone automáticamente)',
    eintragen:'Anotar',
    vormerken:'Reservar',
    spielerAuswaehlen:'Elegir jugador · Tipo · Anotar',
    detailsEintragen:'Introducir detalles · Anotar',
    bekommtPunkte:'obtiene los puntos',
    oeffnen:'Toca para abrir ↑',
    wert:'Valor', spiel:'Juego',
    emptyText:'Sin rondas aún.\nToca los encabezados para editar nombres.',
    modalTitle:'¿Empezar de nuevo?',
    modalText:'Todas las puntuaciones se borrarán. Los nombres se conservan.',
    abbrechen:'Cancelar', loeschen:'Borrar',
    eingetragen:'Entrada borrada', rueckgaengig:'Deshacer',
    farbenNamen:['Diamantes','Corazones','Picas','Tréboles'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durch',
    vierterSpieler:'Añadir 4º jugador',
    vierterSpielerLoeschen:'Quitar 4º jugador',
    aussetzt:'descansa',
    leer:'Vacío', leerHint:'Sin puntos – ronda sin jugador',
    tabStd:'Σ Estándar', tabSf:'SF Torneo', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
  it: {
    farbe:'Seme', grand:'Grand', null:'Null', durch:'Marcia', ramsch:'Ramsch',
    karo:'Quadri', herz:'Cuori', pik:'Picche', kreuz:'Fiori',
    faktor:'Fattore', punkte:'pt', festWert:'Valore fisso', verlierer:'Perdente',
    details:'Dettagli e Modificatori',
    buben:'Fanti', mit:'con', ohne:'senza', bube:'F',
    koenig:'R', dame:'D',
    zusaetze:'Extra (+1 fattore ciascuno)',
    hand:'Mano', schneider:'Schneider', schneiderA:'Schneider dichiarato',
    schwarz:'Schwarz', schwarzA:'Schwarz dichiarato', ouvert:'Ouvert',
    ramschExtras:'Extra Ramsch (×2 ciascuno)',
    jungfrau:'Vergine', geschoben:'Spinto',
    verdoppelungen:'Raddoppi (×2 ciascuno)',
    kontra:'Contro', re:'Raddoppio', bock:'Bock',
    wertKorrektur:'Correzione valore',
    verlorenX2:'Perso ×2', verlorenHint:'(segno impostato automaticamente)',
    eintragen:'Registra',
    vormerken:'Prenota',
    spielerAuswaehlen:'Scegli giocatore · Tipo · Registra',
    detailsEintragen:'Inserisci dettagli · Registra',
    bekommtPunkte:'ottiene i punti',
    oeffnen:'Tocca per aprire ↑',
    wert:'Valore', spiel:'Gioco',
    emptyText:'Nessuna manche.\nTocca le intestazioni per modificare i nomi.',
    modalTitle:'Ricominciare?',
    modalText:'Tutti i punteggi verranno cancellati. I nomi vengono mantenuti.',
    abbrechen:'Annulla', loeschen:'Elimina',
    eingetragen:'Voce eliminata', rueckgaengig:'Annulla',
    farbenNamen:['Quadri','Cuori','Picche','Fiori'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durch',
    vierterSpieler:'Aggiungi 4° giocatore',
    vierterSpielerLoeschen:'Rimuovi 4° giocatore',
    aussetzt:'passa',
    leer:'Vuoto', leerHint:'Senza punti – turno senza giocatore',
    tabStd:'Σ Standard', tabSf:'SF Torneo', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
  da: {
    farbe:'Farve', grand:'Grand', null:'Null', durch:'March', ramsch:'Ramsch',
    karo:'Ruder', herz:'Hjerter', pik:'Spar', kreuz:'Klør',
    faktor:'Faktor', punkte:'pt', festWert:'Fast værdi', verlierer:'Taber',
    details:'Detaljer & Modifikatorer',
    buben:'Knægte', mit:'med', ohne:'uden', bube:'K',
    koenig:'K', dame:'D',
    zusaetze:'Tillæg (+1 faktor hver)',
    hand:'Hånd', schneider:'Schneider', schneiderA:'Schneider meldt',
    schwarz:'Schwarz', schwarzA:'Schwarz meldt', ouvert:'Ouvert',
    ramschExtras:'Ramsch-ekstra (×2 hver)',
    jungfrau:'Jomfru', geschoben:'Skubbet',
    verdoppelungen:'Fordobling (×2 hver)',
    kontra:'Kontra', re:'Re', bock:'Bock',
    wertKorrektur:'Værdikorrektur',
    verlorenX2:'Tabt ×2', verlorenHint:'(fortegn sættes automatisk)',
    eintragen:'Registrer',
    vormerken:'Reserver',
    spielerAuswaehlen:'Vælg spiller · Spilletype · Registrer',
     detailsEintragen:'Indtast detaljer · Registrer',
    bekommtPunkte:'får point',
    oeffnen:'Tryk for at åbne ↑',
    wert:'Værdi', spiel:'Spil',
    emptyText:'Ingen runder endnu.\nTryk på kolonneoverskrifter for at redigere navne.',
    modalTitle:'Start forfra?',
    modalText:'Alle scores slettes. Spillernavne bevares.',
    abbrechen:'Annuller', loeschen:'Slet',
    eingetragen:'Post slettet', rueckgaengig:'Fortryd',
    farbenNamen:['Ruder','Hjerter','Spar','Klør'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durch',
    vierterSpieler:'Tilføj 4. spiller',
    vierterSpielerLoeschen:'Fjern 4. spiller',
    aussetzt:'sidder over',
    leer:'Tom', leerHint:'Ingen point – runde uden spiller',
    tabStd:'Σ Standard', tabSf:'SF Turnering', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
  th: {
    farbe:'ไพ่สี', grand:'แกรนด์', null:'นัล', durch:'ตีตลอด', ramsch:'แรมช์',
    karo:'โพแดง', herz:'ใจ', pik:'โพดำ', kreuz:'ดอกจิก',
    faktor:'ตัวคูณ', punkte:'แต้ม', festWert:'ค่าคงที่', verlierer:'ผู้แพ้',
    details:'รายละเอียดและตัวปรับ',
    buben:'แจ็ค', mit:'มี', ohne:'ไม่มี', bube:'J',
    koenig:'K', dame:'D',
    zusaetze:'โบนัส (+1 ตัวคูณต่อใบ)',
    hand:'มือ', schneider:'ชไนเดอร์', schneiderA:'ชไนเดอร์ประกาศ',
    schwarz:'ชวาร์ซ', schwarzA:'ชวาร์ซประกาศ', ouvert:'เปิดไพ่',
    ramschExtras:'โบนัสแรมช์ (×2 ต่อรายการ)',
    jungfrau:'บริสุทธิ์', geschoben:'เลื่อน',
    verdoppelungen:'คูณสอง (×2 ต่อรายการ)',
    kontra:'คอนทรา', re:'รี', bock:'บ็อค',
    wertKorrektur:'แก้ไขค่า',
    verlorenX2:'แพ้ ×2', verlorenHint:'(เครื่องหมายถูกตั้งอัตโนมัติ)',
    eintragen:'บันทึก',
    vormerken:'จอง',
    spielerAuswaehlen:'เลือกผู้เล่น · ประเภทเกม · บันทึก',
     detailsEintragen:'กรอกรายละเอียด · บันทึก',
    bekommtPunkte:'ได้รับแต้ม',
    oeffnen:'แตะเพื่อเปิด ↑',
    wert:'ค่า', spiel:'เกม',
    emptyText:'ยังไม่มีรอบ\nแตะหัวคอลัมน์เพื่อแก้ไขชื่อผู้เล่น',
    modalTitle:'เริ่มใหม่?',
    modalText:'คะแนนทั้งหมดจะถูกลบ ชื่อผู้เล่นจะถูกเก็บไว้',
    abbrechen:'ยกเลิก', loeschen:'ลบ',
    eingetragen:'ลบรายการแล้ว', rueckgaengig:'เลิกทำ',
    farbenNamen:['โพแดง','ใจ','โพดำ','ดอกจิก'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durch',
    vierterSpieler:'เพิ่มผู้เล่นที่ 4',
    vierterSpielerLoeschen:'ลบผู้เล่นที่ 4',
    aussetzt:'พัก',
    leer:'ว่าง', leerHint:'ไม่มีคะแนน – รอบที่ไม่มีผู้เล่น',
    tabStd:'Σ มาตรฐาน', tabSf:'SF ทัวร์นาเมนต์', tabBl:'BL เบียร์แลคส์',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
  vi: {
    farbe:'Bài màu', grand:'Grand', null:'Null', durch:'Diễu hành', ramsch:'Ramsch',
    karo:'Rô', herz:'Cơ', pik:'Pích', kreuz:'Nhép',
    faktor:'Hệ số', punkte:'đ', festWert:'Giá trị cố định', verlierer:'Người thua',
    details:'Chi tiết & Điều chỉnh',
    buben:'Bồi', mit:'có', ohne:'không có', bube:'B',
    koenig:'K', dame:'D',
    zusaetze:'Thêm (+1 hệ số mỗi cái)',
    hand:'Tay', schneider:'Schneider', schneiderA:'Schneider đã tuyên bố',
    schwarz:'Schwarz', schwarzA:'Schwarz đã tuyên bố', ouvert:'Lật bài',
    ramschExtras:'Thêm Ramsch (×2 mỗi cái)',
    jungfrau:'Trinh nữ', geschoben:'Đẩy',
    verdoppelungen:'Nhân đôi (×2 mỗi cái)',
    kontra:'Contra', re:'Re', bock:'Bock',
    wertKorrektur:'Sửa giá trị',
    verlorenX2:'Thua ×2', verlorenHint:'(dấu được đặt tự động)',
    eintragen:'Ghi lại',
    vormerken:'Ghi tạm',
    spielerAuswaehlen:'Chọn người chơi · Loại game · Ghi lại',
     detailsEintragen:'Nhập chi tiết · Ghi',
    bekommtPunkte:'nhận điểm',
    oeffnen:'Chạm để mở ↑',
    wert:'Giá trị', spiel:'Trò chơi',
    emptyText:'Chưa có ván nào.\nChạm vào tiêu đề cột để sửa tên người chơi.',
    modalTitle:'Bắt đầu lại?',
    modalText:'Tất cả điểm số sẽ bị xóa. Tên người chơi được giữ lại.',
    abbrechen:'Hủy', loeschen:'Xóa',
    eingetragen:'Đã xóa mục', rueckgaengig:'Hoàn tác',
    farbenNamen:['Rô','Cơ','Pích','Nhép'],
    sf:'SF',
    rgh:'RGH', ramschGHhint:'',
    ramschDurchHint:'Durch',
    vierterSpieler:'Thêm người chơi thứ 4',
    vierterSpielerLoeschen:'Xóa người chơi thứ 4',
    aussetzt:'nghỉ',
    leer:'Trống', leerHint:'Không có điểm – vòng không có người chơi',
    tabStd:'Σ Chuẩn', tabSf:'SF Giải đấu', tabBl:'BL Bierlachs',
    spitze:'Spitze', spitzeA:'Spitze anges.',
    speichern:'Speichern', editieren:'Bearbeiten', abbrechenEdit:'Abbrechen', weiter:'Weiter ›',
  },
};

// ===== STATE =====
let state = { names:['Spieler 1','Spieler 2','Spieler 3'], rounds:[], totals:[0,0,0], lang:'de', has4:false };
let moneySettings = { rate:0, currency:'€' };
let openRoundIdx = -1;
let editRoundIdx = -1; // Index der Runde die gerade editiert wird (-1 = keine) // Index der offenen Runde, -1 = keine
let selectedPlayers=[], sign=1, lastDeleted=null, panelOpen=true, tableView='std';
let lang = 'de';

// Compute current aussetzer index (only relevant with 4 players)
function getAussetzer(){
  if(!state.has4) return -1;
  let idx = 0;
  for(const r of state.rounds){
    if(!r.isRamschGH && r.typeKey!=='rgh') idx = (idx+1) % 4;
  }
  return idx;
}
// Count rounds that advance the rotation (not Ramsch-GH)
function countRegularRounds(){
  return state.rounds.filter(r=>!r.isRamschGH).length;
}

const FARBEN_VALS=[9,10,11,12];
const FARBEN_SYM=['♦','♥','♠','♣'];
const FARBEN_CLS=['suit-d','suit-h','suit-s','suit-c'];
const SUIT_IDX={karo:0,herz:1,pik:2,kreuz:3};

let calc={
  type:'', farbeIdx:0, factor:2, nullVal:23,
  jackCount:1, jackDir:'mit',
  hand:false,schneider:false,schneiderA:false,schwarz:false,schwarzA:false,ouvert:false,
  kontra:false,re:false,bock:false,jungfrau:false,geschoben:0,verloren:false
};

// ===== PERSIST =====
function toggleFont(){
  const html=document.documentElement;
  const LEVELS=['zoom-2','zoom-3','zoom-4'];
  const cur=LEVELS.find(c=>html.classList.contains(c))||'zoom-2';
  const next=LEVELS[(LEVELS.indexOf(cur)+1)%LEVELS.length];
  html.classList.remove('zoom-2','zoom-3','zoom-4');
  html.classList.add(next);
  const labels={'zoom-2':'A','zoom-3':'A+','zoom-4':'A++'};
  document.getElementById('fontBtn').textContent=labels[next];
  try{localStorage.setItem('skat_font',next);}catch(e){}
}

// ===== WAKE LOCK =====
let wakeLockSentinel = null;
async function toggleWakeLock(){
  const btn=document.getElementById('wakeLockBtn');
  if(wakeLockSentinel){
    await wakeLockSentinel.release();
    wakeLockSentinel=null;
    btn.style.opacity='0.4';
  } else {
    try{
      wakeLockSentinel=await navigator.wakeLock.request('screen');
      btn.style.opacity='1';
      wakeLockSentinel.addEventListener('release',()=>{
        wakeLockSentinel=null;
        btn.style.opacity='0.4';
      });
    }catch(e){}
  }
}
// Nur anzeigen wenn Wake Lock verfügbar (https oder localhost)
if('wakeLock' in navigator){
  document.getElementById('wakeLockBtn').style.display='';
}

function save(){try{localStorage.setItem('skat_v4',JSON.stringify(state));}catch(e){}}
function load(){try{const d=localStorage.getItem('skat_v4');if(d)state=JSON.parse(d);}catch(e){}}

// ===== SETTINGS =====
function saveSettings(){
  const r=parseFloat(document.getElementById('moneyRate').value)||0;
  moneySettings.rate=r;
  try{localStorage.setItem('skat_money',JSON.stringify(moneySettings));}catch(e){}
  renderTable();
}
function loadSettings(){
  try{const d=localStorage.getItem('skat_money');if(d)moneySettings=JSON.parse(d);}catch(e){}
}
function setCurrency(c){
  moneySettings.currency=c;
  document.querySelectorAll('.currency-btn').forEach(b=>b.classList.toggle('active',b.dataset.c===c));
  saveSettings();
}
function openSettings(){
  document.getElementById('moneyRate').value=moneySettings.rate||'';
  document.querySelectorAll('.currency-btn').forEach(b=>b.classList.toggle('active',b.dataset.c===moneySettings.currency));
  document.getElementById('settingsModal').classList.add('show');
}
function closeSettings(){document.getElementById('settingsModal').classList.remove('show');}
function closeSettingsOutside(e){if(e.target.id==='settingsModal')closeSettings();}

// ===== LANGUAGE =====
function t(key){ return (T[lang]&&T[lang][key]) || T['de'][key] || key; }

function toggleLangDropdown(e){
  e.stopPropagation();
  document.getElementById('langDropdown').classList.toggle('open');
}
function pickLang(l,e){
  if(e) e.stopPropagation();
  document.getElementById('langDropdown').classList.remove('open');
  setLang(l);
}
// Dropdown schließen bei Klick außerhalb
document.addEventListener('click', ()=>{ const d=document.getElementById('langDropdown'); if(d) d.classList.remove('open'); });
function setLang(l){
  lang=l; state.lang=l; save();
  const flags={'de':'🇩🇪','en':'🇬🇧','fr':'🇫🇷','es':'🇪🇸','it':'🇮🇹','da':'🇩🇰','th':'🇹🇭','vi':'🇻🇳'};
  document.getElementById('langFlag').textContent=flags[l]||'🌐';
  document.getElementById('langCode').textContent=l.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(o=>o.classList.toggle('active',o.dataset.lang===l));
  applyTranslations();
  buildNullBtns();
  buildJackRow();
  renderAll();
  updateCalcUI();
}

function applyTranslations(){
  // data-t elements
  document.querySelectorAll('[data-t]').forEach(el=>{
    const key=el.getAttribute('data-t');
    el.textContent=t(key);
  });
  // Specific elements
  if(editRoundIdx<0) document.getElementById('addBtn').textContent=t('eintragen');
  else document.getElementById('addBtn').textContent=t('speichern');
  document.getElementById('modalTitle').textContent=t('modalTitle');
  document.getElementById('modalText').textContent=t('modalText');
  document.getElementById('modalCancel').textContent=t('abbrechen');
  document.getElementById('modalConfirm').textContent=t('loeschen');
  document.getElementById('toastUndo').textContent=t('rueckgaengig');
  document.getElementById('thVal').textContent=t('wert');
  document.getElementById('thSpiel').textContent=t('spiel');
  const ep=document.getElementById('emptyText');
  ep.innerHTML=t('emptyText').replace('\n','<br>');
  document.getElementById('tab-std').textContent=t('tabStd');
  document.getElementById('tab-sf').textContent=t('tabSf');
  document.getElementById('tab-bl').textContent=t('tabBl');
  updateSummaryBar();
  updateHint();
}

// ===== INIT =====
load();
loadSettings();
// Offene Runde nach dem Laden wiederherstellen
{
  const idx = state.rounds.findIndex(r=>r.open===true);
  if(idx>=0){
    openRoundIdx = idx;
  }
}
try{
  const fp=localStorage.getItem('skat_font');
  const labels={'zoom-2':'A','zoom-3':'A+','zoom-4':'A++'};
  const cls=(fp&&labels[fp])?fp:'zoom-2';
  document.documentElement.classList.add(cls);
  document.getElementById('fontBtn').textContent=labels[cls];
}catch(e){ document.documentElement.classList.add('zoom-2'); }
// ===== THEME =====
function applyTheme(theme){
  const html=document.documentElement;
  if(theme==='light'){
    html.setAttribute('data-theme','light');
    document.getElementById('themeBtn').textContent='🌙';
    document.querySelector('meta[name="theme-color"]').content='#1a3a8f';
  } else {
    html.setAttribute('data-theme','dark');
    document.getElementById('themeBtn').textContent='☀';
    document.querySelector('meta[name="theme-color"]').content='#1a1a2e';
  }
  try{ localStorage.setItem('skat_theme', theme); }catch(e){}
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current==='light' ? 'dark' : 'light');
}
// Init: localStorage > prefers-color-scheme
(function(){
  let theme = null;
  try{ theme=localStorage.getItem('skat_theme'); }catch(e){}
  if(!theme){
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  applyTheme(theme);
  // Auto-Update wenn System-Theme wechselt (nur wenn kein manueller Override)
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e=>{
    try{ if(!localStorage.getItem('skat_theme')) applyTheme(e.matches?'light':'dark'); }catch(ex){}
  });
})();

lang=state.lang||'de';
buildNullBtns();
buildJackRow();
applyTranslations();
renderAll();
updateCalcUI();
document.getElementById('inputPanel').classList.add('open');
// Falls offene Runde existiert: Stage 2 wiederherstellen
if(hasOpenRound()){
  const r = state.rounds[openRoundIdx];
  const sc = r.savedCalc||{};
  calc = {type:sc.type||'', farbeIdx:sc.farbeIdx||0, factor:sc.factor||2,
    nullVal:sc.nullVal||23, jackCount:1, jackDir:'mit',
    hand:sc.hand||false, schneider:false, schneiderA:sc.schneiderA||false,
    schwarz:false, schwarzA:sc.schwarzA||false, ouvert:sc.ouvert||false,
    spitze:false, spitzeA:sc.spitzeA||false,
    kontra:false, re:false, bock:false, jungfrau:sc.jungfrau||false,
    geschoben:sc.geschoben||0, verloren:false};
  const suitType = sc.type==='farbe' ? ['karo','herz','pik','kreuz'][sc.farbeIdx||0] : sc.type;
  setType(suitType||'');
  showStage2();
  updateCalcUI(); updatePlayerBtns(); updatePanelHeight();
}

document.getElementById('resetBtn').addEventListener('click',()=>document.getElementById('resetModal').classList.add('show'));
document.getElementById('undoBtn').addEventListener('click',undoLast);
document.getElementById('toastUndo').onclick=function(){
  if(!lastDeleted)return;
  state.rounds.push(lastDeleted);
  state.totals=[...lastDeleted.totals];
  lastDeleted=null; save(); renderAll(); hideToast();
};

function updatePanelHeight(){
  const h=document.getElementById('inputPanel').offsetHeight;
  document.documentElement.style.setProperty('--panel-h',h+'px');
}
updatePanelHeight();
window.addEventListener('resize',updatePanelHeight);

// ===== PANEL =====
function togglePanel(){
  panelOpen=!panelOpen;
  document.getElementById('inputPanel').classList.toggle('open',panelOpen);
  if(panelOpen && hasOpenRound()){
    // Offene Runde: Stage 2 zeigen
    const r = state.rounds[openRoundIdx];
    const sc = r.savedCalc||{};
    const suitType = sc.type==='farbe' ? ['karo','herz','pik','kreuz'][sc.farbeIdx||0] : sc.type;
    calc = {type:sc.type||'', farbeIdx:sc.farbeIdx||0, factor:sc.factor||2,
      nullVal:sc.nullVal||23, jackCount:sc.jackCount||1, jackDir:sc.jackDir||'mit',
      hand:sc.hand||false, schneider:false, schneiderA:sc.schneiderA||false,
      schwarz:false, schwarzA:sc.schwarzA||false, ouvert:sc.ouvert||false,
      kontra:false, re:false, bock:false, jungfrau:sc.jungfrau||false,
      geschoben:sc.geschoben||0, verloren:false};
    setType(suitType||'');
    showStage2();
    updateCalcUI(); updatePlayerBtns();
  }
  updatePanelHeight();
  if(panelOpen) setTimeout(()=>{ const w=document.getElementById('tableWrap'); w.scrollTop=w.scrollHeight; },60);
}

// ===== NULL BUTTONS =====
function buildNullBtns(){
  const nullVals=[
    {v:23,key:'null'},
    {v:35,key:'nullHand'},
    {v:46,key:'nullOuvert'},
    {v:59,key:'nullOuvertHand'},
    {v:92,key:'revolution'},
  ];
  const nullLabels={
    de:['Null (23)','Null Hand (35)','Null Ouvert (46)','N. Ouvert Hand (59)','Revolution (92)'],
    en:['Null (23)','Null Hand (35)','Null Ouvert (46)','N. Ouvert Hand (59)','Revolution (92)'],
    fr:['Null (23)','Null Main (35)','Null Ouvert (46)','N. Ouvert Main (59)','Révolution (92)'],
    es:['Null (23)','Null Mano (35)','Null Ouvert (46)','N. Ouvert Mano (59)','Revolución (92)'],
    it:['Null (23)','Null Mano (35)','Null Ouvert (46)','N. Ouvert Mano (59)','Rivoluzione (92)'],
  };
  const container=document.getElementById('nullBtns');
  container.innerHTML='';
  (nullLabels[lang]||nullLabels.de).forEach((label,i)=>{
    const v=nullVals[i].v;
    const b=document.createElement('button');
    b.className='null-btn'+(calc.nullVal===v?' active':'');
    b.setAttribute('data-null',v);
    b.textContent=label;
    b.onclick=()=>setNullType(b,v);
    container.appendChild(b);
  });
}

// ===== JACK ROW =====
// Trump ladder labels: index 1-11
// 1-4 = Buben (suit symbols), 5-11 = As,10,K,D,9,8,7
function getTrumpLabels(){
  const j=t('bube')||'B';
  const suits=['♣'+j,'♠'+j,'♥'+j,'♦'+j];
  const k=t('koenig')||'K', d=t('dame')||'D';
  return ['', ...suits, 'A','10',k,d,'9','8','7'];
}

function buildJackRow(){
  const row=document.getElementById('jackRow');
  row.innerHTML=`
    <div class="jack-stepper">
      <button class="jack-btn" id="jackDirBtn" onclick="toggleJackDir()"></button>
      <button class="jack-btn" onclick="stepJack(-1)">−</button>
      <span id="jackNum" style="font-size:17px;font-weight:700;color:var(--text);min-width:16px;text-align:center"></span>
      <button class="jack-btn" onclick="stepJack(1)">+</button>
      <div class="jack-card" id="jackCard"></div>
    </div>`;
  refreshJackRow();
}
function refreshJackRow(){
  const dirBtn=document.getElementById('jackDirBtn');
  const card=document.getElementById('jackCard');
  if(!dirBtn||!card) return;
  dirBtn.textContent=t(calc.jackDir==='mit'?'mit':'ohne');
  dirBtn.classList.toggle('active', calc.jackDir==='mit');
  const labels=getTrumpLabels();
  const maxCount = calc.type==='farbe' ? 11 : 4;
  if(calc.jackCount>maxCount) calc.jackCount=maxCount;
  document.getElementById('jackNum').textContent=calc.jackCount;
  // Kartenliste: einzelne Kärtchen von 1 bis jackCount
  card.innerHTML='';
  for(let i=1; i<=calc.jackCount; i++){
    const pip=document.createElement('span');
    pip.className='jack-pip';
    pip.textContent=labels[i]||i;
    card.appendChild(pip);
  }
}
function stepJack(d){
  const maxCount = calc.type==='farbe' ? 11 : 4;
  calc.jackCount=Math.max(1,Math.min(maxCount,calc.jackCount+d));
  refreshJackRow(); syncFactor(); updateCalcResult();
}
function toggleJackDir(){ calc.jackDir=calc.jackDir==='mit'?'ohne':'mit'; refreshJackRow(); syncFactor(); updateCalcResult(); }
function setJackCount(n){ calc.jackCount=n; refreshJackRow(); syncFactor(); updateCalcResult(); }

// ===== CALC =====
function getFarbeVal(){ return FARBEN_VALS[calc.farbeIdx]; }
function getFarbeName(){ return FARBEN_SYM[calc.farbeIdx]+' '+T[lang].farbenNamen[calc.farbeIdx]; }

function isGHActive(){ return calc.type==='rgh'; }
function isDurchActive(){ return calc.type==='ramsch' && document.getElementById('ramschDurch').classList.contains('active'); }

function computeRaw(){
  if(calc.type==='rgh') return 24*calc.factor;
  if(isDurchActive()) return 120 * Math.pow(2, calc.geschoben);
  if(calc.type==='farbe'||calc.type==='grand') return (calc.type==='grand'?24:getFarbeVal())*calc.factor;
  if(calc.type==='null') return calc.nullVal;
  if(calc.type==='leer') return 0;
  if(calc.type==='ramsch'){
    const base=parseInt(document.getElementById('ramschInput').value)||0;
    let m=Math.pow(2, calc.geschoben);
    if(calc.jungfrau)m*=2;
    if(calc.kontra)m*=2;if(calc.re)m*=2;if(calc.bock)m*=2;
    return base*m;
  }
  return 0;
}

function getFormula(){
  if(calc.type==='rgh') return '🃏 RGH 24×'+calc.factor;
  if(isDurchActive()) return 'Ramsch Durch 120'+(calc.geschoben>0?' ×'+Math.pow(2,calc.geschoben)+' ('+calc.geschoben+'× '+t('geschoben')+')':'');
  if(calc.type==='leer') return '⊘ '+t('leer');
  let p=[];
  if(calc.type==='farbe') p.push(getFarbeName()+' '+getFarbeVal()+'×'+calc.factor);
  else if(calc.type==='grand') p.push('Grand 24×'+calc.factor);
  else if(calc.type==='null') p.push(nullLabel(calc.nullVal));
  else if(calc.type==='ramsch'){
    const base=parseInt(document.getElementById('ramschInput').value)||0;
    p.push(t('ramsch')+' '+base);
    if(calc.jungfrau) p.push('×'+t('jungfrau'));
    if(calc.geschoben>0) p.push('×'+Math.pow(2,calc.geschoben)+' ('+calc.geschoben+'× '+t('geschoben')+')');
    if(calc.kontra)p.push('×'+t('kontra'));if(calc.re)p.push('×'+t('re'));if(calc.bock)p.push('×'+t('bock'));
  }
  if(calc.spitzeA) p.push(t('spitzeA')||'Spitze anges.');
  else if(calc.spitze) p.push(t('spitze')||'Spitze');
  if(calc.type!=='ramsch'){
    if(calc.kontra)p.push('×'+t('kontra'));if(calc.re)p.push('×'+t('re'));if(calc.bock)p.push('×'+t('bock'));
  }
  if(calc.verloren)p.push('×2');
  return p.join(' ');
}

function getShortLabel(){
  if(calc.type==='rgh') return '🃏 RGH';
  if(isDurchActive()) return '👑 RDurch';
  if(calc.type==='farbe'){
    const sym=FARBEN_SYM[calc.farbeIdx], name=T[lang].farbenNamen[calc.farbeIdx];
    return sym+' '+name;
  }
  if(calc.type==='grand') return '🃏 Grand';
  if(calc.type==='null') return nullLabel(calc.nullVal);
  if(calc.type==='ramsch') return '💀 '+t('ramsch');
  if(calc.type==='leer') return '⊘ '+t('leer');
  return '';
}

function labelFromKey(r){
  const k=r.typeKey||'';
  if(!k) return r.label||'';
  if(k==='rgh') return '🃏 RGH';
  if(k==='rdurch') return '👑 RDurch';
  if(k.startsWith('farbe:')){
    const idx=parseInt(k.split(':')[1]);
    return FARBEN_SYM[idx]+' '+T[lang].farbenNamen[idx];
  }
  if(k==='grand') return '🃏 Grand';
  if(k.startsWith('null:')){
    const parts=k.split(':');
    const nv=parseInt(parts[1]), hand=parts[2]==='1', ouvert=parts[3]==='1';
    if(nv===92) return nullLabel(92); // Revolution hat eigenen Namen
    let s=t('null');
    if(ouvert) s+=' '+t('ouvert');
    if(hand) s+=' '+t('hand');
    return s;
  }
  if(k==='ramsch') return '💀 '+t('ramsch');
  if(k==='leer') return '⊘ '+t('leer');
  return r.label||'';
}

function labelFromKeyShort(r){
  // Kurzform für Tabellenspalte – nur Null bekommt andere Kurzform
  const k=r.typeKey||'';
  if(k.startsWith('null:')){
    const nv=parseInt(k.split(':')[1]);
    return nullLabelShort(nv);
  }
  return labelFromKey(r);
}

function getFinalValue(){
  let raw=computeRaw();
  const isRamschOnly = calc.type==='ramsch' && !isDurchActive();
  if(!isRamschOnly){if(calc.kontra)raw*=2;if(calc.re)raw*=2;if(calc.bock)raw*=2;}
  if(calc.verloren)raw*=2;
  return sign*raw;
}

function nullLabel(v){
  const labels={de:{23:'Null',35:'Null Hand',46:'Null Ouvert',59:'Null Ouvert Hand',92:'Revolution'},en:{23:'Null',35:'Null Hand',46:'Null Ouvert',59:'Null Ouvert Hand',92:'Revolution'},fr:{23:'Null',35:'Null Main',46:'Null Ouvert',59:'Null Ouvert Main',92:'Révolution'},es:{23:'Null',35:'Null Mano',46:'Null Ouvert',59:'Null Ouvert Mano',92:'Revolución'},it:{23:'Null',35:'Null Mano',46:'Null Ouvert',59:'Null Ouvert Mano',92:'Rivoluzione'}};
  return(labels[lang]||labels.de)[v]||'Null';
}
function nullLabelShort(v){
  // Kurzform für Tabellenspalte
  const s={23:'Null',35:'NullH',46:'NullO',59:'NullOH',92:'Revol.'};
  return s[v]||'Null';
}

function syncFactor(){
  let f=calc.jackCount+1; // Spiel = +1
  if(calc.hand)f++;
  // Schneider: explizit ODER durch Ansage impliziert
  if(calc.schneider||calc.schneiderA)f++;
  if(calc.schneiderA)f++; // Ansage selbst
  // Schwarz: explizit ODER durch Ansage impliziert
  if(calc.schwarz||calc.schwarzA)f++;
  if(calc.schwarzA)f++; // Ansage selbst
  if(calc.ouvert)f++;
  // Spitze: erreicht ODER angesagt (+1 je)
  if(calc.spitze||calc.spitzeA)f++;
  if(calc.spitzeA)f++; // Ansage selbst
  calc.factor=Math.max(2,f);
  const fv=calc.factor.toString();
  ['factorVal','factorValG','factorValRGH'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=fv;
  });
}

// ===== CALC UI =====
function setType(tp){
  // RGH-Sperre: RGH-Spiele bleiben RGH, andere werden nicht zu RGH
  if(editRoundIdx>=0){
    const origR = state.rounds[editRoundIdx];
    if(origR && origR.isRamschGH && tp!=='rgh') return; // RGH bleibt RGH
    if(origR && !origR.isRamschGH && tp==='rgh') return; // kein Wechsel zu RGH
  }
  // Map suit types to farbe
  const isSuit = tp in SUIT_IDX;
  if(isSuit){ calc.farbeIdx=SUIT_IDX[tp]; calc.type='farbe'; }
  else { calc.type=tp; }
  // Reset Durch if switching away from ramsch
  if(tp!=='ramsch'){
    document.getElementById('ramschDurch').classList.remove('active');
    document.getElementById('calcRamschInputRow').style.display='';
  }
  // Auto-set sign for ramsch/leer
  if(tp==='ramsch' && sign>0){
    sign=-1;
    const b=document.getElementById('signBtn');
    b.textContent='−'; b.className='sign-btn negative';
  } else if(tp!=='ramsch' && tp!=='leer' && sign<0){
    sign=1;
    const b=document.getElementById('signBtn');
    b.textContent='+'; b.className='sign-btn positive';
  }
  // Leer: Spielerauswahl aufheben
  if(tp==='leer'){
    selectedPlayers=[];
  }
  // RGH: Ansagen zurücksetzen, Hand fix setzen
  if(tp==='rgh'){
    calc.schneiderA=false; calc.schwarzA=false; calc.ouvert=false;
    calc.hand=true;
    document.getElementById('dSchneiderA').classList.remove('active');
    document.getElementById('dSchwarzA').classList.remove('active');
    document.getElementById('dOuvert').classList.remove('active');
    document.getElementById('dHand').classList.add('active');
    syncFactor();
  } else if(tp!=='grand' && !isSuit){
    // Wechsel weg von Farbe/Grand: Ansagen zurücksetzen
    calc.hand=false; calc.schneiderA=false; calc.schwarzA=false; calc.ouvert=false;
    ['dHand','dSchneiderA','dSchwarzA','dOuvert'].forEach(id=>document.getElementById(id).classList.remove('active'));
  }

  // Highlight active button (suit types highlight their own button)
  document.querySelectorAll('.type-btn').forEach(b=>b.classList.toggle('active',b.dataset.type===tp));
  const inStage2 = document.getElementById('stage2').style.display!=='none';
  document.getElementById('detailRamsch').style.display=(tp==='ramsch')?'':'none';
  if(tp==='ramsch') document.getElementById('dJungfrau').style.display='';
  document.getElementById('calcFarbe').style.display=(isSuit&&inStage2)?'':'none';
  document.getElementById('calcGrand').style.display=(tp==='grand'&&inStage2)?'':'none';
  document.getElementById('calcRGH').style.display=(tp==='rgh'&&inStage2)?'':'none';
  document.getElementById('calcNull').style.display=tp==='null'?'':'none';
  document.getElementById('calcRamsch').style.display=tp==='ramsch'?'':'none';
  document.getElementById('calcLeer').style.display=tp==='leer'?'':'none';
  // Stage 1: Ansagen nur bei Farbe/Grand (nicht bei RGH – Hand ist fix, keine Ansagen)
  document.getElementById('stage1Ansagen').style.display=(isSuit||tp==='grand')?'':'none';
  // Stage 2 panels (only visible in stage 2)
  const _s2 = document.getElementById('stage2');
  if(_s2 && _s2.style.display!=='none'){
    const _b=document.getElementById('stage2Buben'); if(_b) _b.style.display=(isSuit||tp==='grand'||tp==='rgh')?'':'none';
    const _e=document.getElementById('stage2Erreicht'); if(_e) _e.style.display=(isSuit||tp==='grand'||tp==='rgh')?'':'none';
    const _dr=document.getElementById('detailRamsch'); if(_dr) _dr.style.display=tp==='ramsch'?'':'none';
    const _dn=document.getElementById('detailNormal'); if(_dn) _dn.style.display=(tp===''||tp==='ramsch'||tp==='leer')?'none':'';
  }
  if(isSuit) document.getElementById('baseInfo').textContent=
    FARBEN_VALS[calc.farbeIdx]+'×'+calc.factor+'='+(FARBEN_VALS[calc.farbeIdx]*calc.factor);
  updatePlayerBtns();
  buildJackRow();
  updateCalcResult(); updatePanelHeight();
}

function setFarbe(i){
  calc.farbeIdx=i;
  document.querySelectorAll('.farbe-btn').forEach(b=>b.classList.toggle('active',+b.dataset.fi===i));
  updateCalcResult();
}

function stepGeschoben(d){
  calc.geschoben=Math.max(0,Math.min(3,calc.geschoben+d));
  document.getElementById('geschobenVal').textContent=calc.geschoben;
  updateCalcResult();
}

function stepFactor(d){
  calc.factor=Math.max(2,calc.factor+d);
  document.getElementById('factorVal').textContent=calc.factor;
  document.getElementById('factorValG').textContent=calc.factor;
  // factorValGH entfernt
  updateCalcResult();
}

function setNullType(btn,v){
  calc.nullVal=v;
  document.querySelectorAll('.null-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateCalcResult();
}

function updateAnsagenUI(){
  const h=calc.hand, sA=calc.schneiderA, swA=calc.schwarzA, ov=calc.ouvert;
  // Active: immer aus dem jeweiligen calc-Flag + implizierte Kaskade
  document.getElementById('dHand').classList.toggle('active', h||sA||swA||ov);
  document.getElementById('dSchneiderA').classList.toggle('active', sA||swA||ov);
  const dSwA=document.getElementById('dSchwarzA');
  if(dSwA) dSwA.classList.toggle('active', swA||ov);
  document.getElementById('dOuvert').classList.toggle('active', ov);
  // Implied: Button ist durch höhere Ansage aktiviert, nicht durch eigenes Flag
  // → optisch gedimmt, aber trotzdem antippbar zum eigenständigen Setzen
  document.getElementById('dHand').classList.toggle('implied', !h && (sA||swA||ov));
  document.getElementById('dSchneiderA').classList.toggle('implied', !sA && (swA||ov));
  if(dSwA) dSwA.classList.toggle('implied', !swA && ov);
  // Ouvert nie implied
  document.getElementById('dOuvert').classList.toggle('implied', false);
  const dSpitzeA=document.getElementById('dSpitzeA');
  if(dSpitzeA) dSpitzeA.classList.toggle('active', calc.spitzeA);
}

function toggleOpt(key){
  // Cascade Ansagen
  if(key==='hand'){
    calc.hand=!calc.hand;
    if(!calc.hand){ calc.schneiderA=false; calc.schwarzA=false; calc.ouvert=false; }
  } else if(key==='schneiderA'){
    calc.schneiderA=!calc.schneiderA;
    if(calc.schneiderA){ calc.hand=true; }
    else { calc.schwarzA=false; calc.ouvert=false; } // höhere Ansagen auch deaktivieren
  } else if(key==='schwarzA'){
    calc.schwarzA=!calc.schwarzA;
    if(calc.schwarzA){ calc.hand=true; calc.schneiderA=true; }
    else { calc.ouvert=false; } // Ouvert braucht schwarzA
  } else if(key==='ouvert'){
    calc.ouvert=!calc.ouvert;
    if(calc.ouvert){
      // Ouvert impliziert die gesamte Kaskade
      calc.hand=true; calc.schneiderA=true; calc.schwarzA=true;
    }
    // Beim Deaktivieren: calc-Flags bleiben wie sie sind (manuell gesetzt)
    document.getElementById('dOuvert').classList.toggle('active', calc.ouvert);
  } else if(key==='spitzeA'){
    calc.spitzeA=!calc.spitzeA;
    document.getElementById('dSpitzeA').classList.toggle('active', calc.spitzeA);
  } else if(key==='spitze'){
    calc.spitze=!calc.spitze;
    document.getElementById('dSpitze').classList.toggle('active', calc.spitze);
  } else if(key==='schneider'){
    calc.schneider=!calc.schneider;
    if(!calc.schneider) calc.schwarz=false;
    document.getElementById('dSchneider').classList.toggle('active', calc.schneider);
    const dsw=document.getElementById('dSchwarz'); if(dsw) dsw.classList.toggle('active', calc.schwarz);
  } else if(key==='schwarz'){
    calc.schwarz=!calc.schwarz;
    if(calc.schwarz) calc.schneider=true;
    document.getElementById('dSchneider').classList.toggle('active', calc.schneider);
    const dsw=document.getElementById('dSchwarz'); if(dsw) dsw.classList.toggle('active', calc.schwarz);
  } else {
    calc[key]=!calc[key];
    const el=document.getElementById('d'+key.charAt(0).toUpperCase()+key.slice(1));
    if(el) el.classList.toggle('active',calc[key]);
  }
  updateAnsagenUI();
  syncFactor(); updateCalcResult();
}
function toggleDbl(key){
  calc[key]=!calc[key];
  document.getElementById('d'+key.charAt(0).toUpperCase()+key.slice(1)).classList.toggle('active',calc[key]);
  // Verloren ×2 aktiviert → Vorzeichen auf minus setzen
  if(key==='verloren' && calc[key] && sign>0){
    sign=-1;
    const b=document.getElementById('signBtn');
    b.textContent='−'; b.className='sign-btn negative';
  }
  updateCalcResult();
}
function toggleDetails(){
  // stage2 panels handled by showStage2
  updatePanelHeight();
}

function updateCalcUI(){
  document.getElementById('factorVal').textContent=calc.factor;
  document.getElementById('factorValG').textContent=calc.factor;
  setFarbe(calc.farbeIdx);
  updateCalcResult();
}

function updateSummaryBar(){
  if(hasOpenRound() && !panelOpen){
    // Offene Runde: Zusammenfassung in der Leiste zeigen
    const r = state.rounds[openRoundIdx];
    const sc = r.savedCalc||{};
    const sp=document.getElementById('sumPlayers');
    const names = r.players.map(i=>state.names[i]||('S'+(i+1))).join(' + ');
    sp.innerHTML=`<span>${names}</span>`;
    document.getElementById('sumType').textContent='✏️ '+labelFromKey(r);
    const sv=document.getElementById('sumVal');
    sv.textContent=''; sv.className='sum-val';
    return;
  }
  const names=selectedPlayers.length>0?selectedPlayers.map(i=>state.names[i]).join(' + '):null;
  const sp=document.getElementById('sumPlayers');
  sp.innerHTML=names?`<span>${names}</span>`:(panelOpen?'':t('oeffnen'));
  document.getElementById('sumType').textContent=getShortLabel();
  const val=getFinalValue(), abs=Math.abs(val), pre=sign>0?'+':'−';
  const sv=document.getElementById('sumVal');
  sv.textContent=pre+abs; sv.className='sum-val '+(sign>0?'pos':'neg');
}

function updateHint(){
  const hint=document.getElementById('hint');
  if(editRoundIdx>=0){
    hint.innerHTML=`<span style="color:#4a9eff">✏️ ${t('editieren')} #${editRoundIdx+1}</span> · <span style="cursor:pointer;color:var(--muted)" onclick="cancelEditRound();resetPanel();renderAll()">${t('abbrechenEdit')} ✕</span>`;
    return;
  }
  const inStage2 = document.getElementById('stage2').style.display!=='none';
  if(inStage2){
    // Stage 2: Spieler bereits gewählt, Details eingeben
    const r = hasOpenRound() ? state.rounds[openRoundIdx] : null;
    const names = r ? r.players.map(i=>state.names[i]||('S'+(i+1))).join(' + ') : selectedPlayers.map(i=>state.names[i]||('S'+(i+1))).join(' + ');
    hint.innerHTML=`<span>${names}</span> ${t('bekommtPunkte')} · ${t('detailsEintragen')}`;
    return;
  }
  const aussetzer = state.has4 ? getAussetzer() : -1;
  const ausName = aussetzer>=0 ? (state.names[aussetzer]||('Spieler '+(aussetzer+1))) : '';
  if(selectedPlayers.length===0){
    if(state.has4 && aussetzer>=0){
      hint.innerHTML=`<span style="color:var(--muted)">${ausName} ↪ ${t('aussetzt')}</span> · ${t('spielerAuswaehlen')}`;
    } else {
      hint.innerHTML=t('spielerAuswaehlen');
    }
  } else {
    const names=selectedPlayers.map(i=>state.names[i]||('Spieler '+(i+1))).join(' + ');
    let h=`<span>${names}</span> ${t('bekommtPunkte')}`;
    if(state.has4 && aussetzer>=0) h+=` · <span style="color:var(--muted)">${ausName} ↪ ${t('aussetzt')}</span>`;
    hint.innerHTML=h;
  }
}

function updateCalcResult(){
  const val=getFinalValue(), abs=Math.abs(val), pre=sign>0?'+':'−';
  document.getElementById('calcResult').textContent=pre+abs;
  document.getElementById('calcResult').style.color=sign>0?'var(--green)':'var(--red)';
  document.getElementById('calcFormula').textContent=getFormula();
  if(calc.type==='farbe') document.getElementById('baseInfo').textContent=getFarbeVal()+'×'+calc.factor+'='+(getFarbeVal()*calc.factor);
  if(calc.type==='grand') document.getElementById('grandInfo').textContent='24×'+calc.factor+'='+(24*calc.factor);
  if(calc.type==='rgh') document.getElementById('rghInfo').textContent='24×'+calc.factor+'='+(24*calc.factor);
  updateSummaryBar(); updateHint();
  updatePanelHeight();
}

function setView(v){
  tableView=v;
  document.querySelectorAll('.view-tab').forEach(b=>b.classList.toggle('active',b.id==='tab-'+v));
  renderTable();
}

// Compute SF delta for a single round for player i
function sfDeltaForRound(r, i, n){
  const gegBonus = state.has4 ? 30 : 40;
  const aussetzer = r.aussetzer ?? -1;
  if(r.open===true||r.noPlayer||r.players.length===0) return 0;
  const tk=r.typeKey||r.label||'';
  if(tk==='ramsch'||tk==='rdurch'||tk.includes('💀')||tk.includes('👑')) return 0; // Ramsch/Durch, aber nicht RGH
  const won = r.value > 0;
  if(r.players.includes(i)) return won ? 50 : -50;
  if(i===aussetzer) return 0;
  return won ? 0 : gegBonus;
}

// Compute BL delta for a single round for player i
function blDeltaForRound(r, i, n){
  const aussetzer = r.aussetzer ?? -1;
  if(r.open===true||r.noPlayer||r.players.length===0) return 0;
  if(r.value > 0){
    if(r.players.includes(i)) return 0;
    if(i===aussetzer) return 0;
    return -r.value;
  } else if(r.value < 0){
    if(r.players.includes(i)) return r.value;
    return 0;
  }
  return 0;
}
function computeSF(){
  const n = state.has4 ? 4 : 3;
  const sf = new Array(n).fill(0);
  const gegBonus = state.has4 ? 30 : 40;
  state.rounds.forEach(r=>{
    if(r.open===true||r.noPlayer) return;
    const tk=r.typeKey||r.label||'';
    if(tk==='ramsch'||tk==='rdurch'||tk.includes('💀')||tk.includes('👑')) return; // Ramsch/Durch, aber nicht RGH
    if(r.players.length===0) return;
    const aussetzer = r.aussetzer ?? -1;
    const won = r.value > 0;
    if(won){
      // Alleinspieler gewinnt: +50, Gegenspieler nichts
      r.players.forEach(i=>{ sf[i]+=50; });
    } else {
      // Alleinspieler verliert: -50, Gegenspieler gewinnen: +gegBonus
      r.players.forEach(i=>{ sf[i]-=50; });
      for(let i=0;i<n;i++){ if(!r.players.includes(i)&&i!==aussetzer) sf[i]+=gegBonus; }
    }
  });
  return sf;
}


// ===== BIERLACHS =====
// Nur Minuspunkte zählen.
// Wer Pluspunkte gemacht hätte bekommt 0, wer Minuspunkte bekommt den negativen Wert.
// Ramsch: Verlierer (r.players, r.value < 0) bekommt −Wert, alle anderen 0.
// Normales Spiel gewonnen: Alleinspieler 0, Gegenspieler −Wert.
// Normales Spiel verloren: Alleinspieler −Wert, Gegenspieler 0.
function computeBL(){
  const n = state.has4 ? 4 : 3;
  const bl = new Array(n).fill(0);
  state.rounds.forEach(r=>{
    if(r.noPlayer || r.players.length===0) return;
    const aussetzer = r.aussetzer ?? -1;
    const isRamsch = (r.typeKey==='ramsch') || (!r.isRamschGH && (r.label||'').includes('Ramsch'));
    if(r.value > 0){
      // Gewinner (Alleinspieler) → 0; Verlierer (Gegenspieler) → −Wert
      for(let i=0;i<n;i++){
        if(!r.players.includes(i) && i!==aussetzer) bl[i] -= r.value;
      }
    } else if(r.value < 0){
      // Verlierer → negativer Wert; Gewinner → 0
      r.players.forEach(i=>{ bl[i] += r.value; });
    }
  });
  return bl;
}

function toggleSign(){
  sign*=-1;
  const b=document.getElementById('signBtn');
  b.textContent=sign>0?'+':'−';
  b.className='sign-btn '+(sign>0?'positive':'negative');
  updateCalcResult();
}
function togglePlayer(i){
  const idx=selectedPlayers.indexOf(i);
  if(idx===-1)selectedPlayers.push(i);else selectedPlayers.splice(idx,1);
  updatePlayerBtns(); updateCalcResult();
}

// ===== RENDER =====
function renderAll(){
  updateHeaders(); renderTable(); updatePlayerBtns();
  document.getElementById('undoBtn').style.display=state.rounds.length>0?'flex':'none';
  // Only reset stage visibility if NOT in an active open-round edit session
  if(openRoundIdx < 0 && editRoundIdx < 0){
    document.getElementById('stage1').style.display='';
    document.getElementById('stage2').style.display='none';
  }
  applyTranslations();
}

function updateHeaders(){
  const n = state.has4 ? 4 : 3;
  const aussetzer = getAussetzer();
  for(let i=0;i<4;i++){
    const th=document.getElementById('th'+i);
    const show = i < n;
    th.style.display = show ? '' : 'none';
    if(show && !th.querySelector('.th-edit')){
      const name = state.names[i] || ('Spieler '+(i+1));
      if(state.has4 && i === aussetzer && state.rounds.length === 0){
        // first game, show aussetzer badge
        th.innerHTML = name + '<span class="th-aussetzer-badge">↪ '+t('aussetzt')+'</span>';
      } else if(state.has4 && i === aussetzer){
        th.innerHTML = name + '<span class="th-aussetzer-badge">↪ '+t('aussetzt')+'</span>';
      } else {
        th.textContent = name;
      }
    }
    if(show) document.getElementById('pbtn'+i+'name').textContent = state.names[i]||('Spieler '+(i+1));
    document.getElementById('pbtn'+i).style.display = show ? '' : 'none';
  }
  // 4-player setup in empty state
  const setup = document.getElementById('player4Setup');
  if(state.rounds.length === 0){
    if(!state.has4){
      setup.innerHTML=`<button onclick="add4thPlayer()" style="background:rgba(232,176,75,.15);border:1px dashed var(--accent);color:var(--accent);border-radius:8px;padding:8px 16px;font-family:'Source Code Pro',monospace;font-size:12px;cursor:pointer">+ ${t('vierterSpieler')}</button>`;
    } else {
      setup.innerHTML=`<button onclick="remove4thPlayer()" style="background:rgba(200,75,49,.1);border:1px dashed var(--accent2);color:var(--accent2);border-radius:8px;padding:8px 16px;font-family:'Source Code Pro',monospace;font-size:12px;cursor:pointer">✕ ${t('vierterSpielerLoeschen')}</button>`;
    }
  } else {
    setup.innerHTML='';
  }
}

function add4thPlayer(){
  state.has4=true;
  if(!state.names[3]) state.names[3]='Spieler 4';
  if(state.totals.length<4) state.totals.push(0);
  save(); renderAll();
}
function remove4thPlayer(){
  state.has4=false;
  save(); renderAll();
}

function renderTable(){
  const tbody=document.getElementById('tbody'),tfoot=document.getElementById('tfoot');
  const table=document.getElementById('scoreTable'),empty=document.getElementById('emptyState');
  const n = state.has4 ? 4 : 3;
  const sepEvery = state.has4 ? 4 : 3;
  document.getElementById('th3').style.display = state.has4 ? '' : 'none';
  table.style.display='table';
  const hasTabs = state.rounds.length > 0;
  document.getElementById('viewTabs').style.display = hasTabs ? 'flex' : 'none';
  document.getElementById('tableWrap').classList.toggle('no-tabs', !hasTabs);
  if(state.rounds.length===0){empty.style.display='block';tbody.innerHTML='';tfoot.innerHTML='';return;}
  empty.style.display='none'; tbody.innerHTML='';
  let regCount=0;
  const runSF=new Array(n).fill(0), runBL=new Array(n).fill(0);
  state.rounds.forEach((r,idx)=>{
    if(!r.isRamschGH){
      if(regCount>0 && regCount%sepEvery===0){
        const sep=document.createElement('tr');sep.className='round-sep';
        sep.innerHTML=`<td colspan="${n+3}"></td>`;tbody.appendChild(sep);
      }
      regCount++;
    }
    const tr=document.createElement('tr');
    if(r.isRamschGH) tr.style.opacity='0.75';
    if(r.open){
      tr.classList.add('open-round');
      tr.style.cursor='pointer';
      tr.title='Tippen zum Nachtragen';
      tr.onclick=()=>openRoundForEdit(idx);
    } else if(!r.open && r.value!==null && r.value!==undefined){
      tr.classList.add('editable');
      if(editRoundIdx===idx) tr.classList.add('editing');
      addLongPress(tr, ()=>startEditRound(idx));
    }
    let cells=`<td>${idx+1}</td>`;
    for(let i=0;i<n;i++){
      const isAussetzer = r.aussetzer===i;
      if(tableView==='std'){
        if(r.open===true){
          cells+=`<td><span style="color:var(--border)">·</span></td>`;
        } else if(isAussetzer){
          cells+=`<td class="aussetzer-cell"><span style="font-size:9px;color:var(--muted)">—</span></td>`;
        } else if(r.players.includes(i)){
          const v=r.totals[i]||0, cls=v>0?'pos':v<0?'neg':'zero';
          cells+=`<td><span class="score-val ${cls}">${v}</span></td>`;
        } else {
          cells+=`<td><span style="color:var(--border)">·</span></td>`;
        }
      } else if(tableView==='sf'){
        const d=sfDeltaForRound(r,i,n); runSF[i]+=d;
        const prevTotal = idx>0 ? (state.rounds[idx-1].totals[i]||0) : 0;
        const gameChanged = (r.totals[i]||0) !== prevTotal;
        if(d===0 && !gameChanged){
          cells+=`<td><span style="color:var(--border)">·</span></td>`;
        } else {
          const v=(r.totals[i]||0)+runSF[i], cls=v>0?'pos':v<0?'neg':'zero';
          cells+=`<td><span class="score-val ${cls}">${v}</span></td>`;
        }
      } else {
        const d=blDeltaForRound(r,i,n); runBL[i]+=d;
        if(d===0){
          cells+=`<td><span style="color:var(--border)">·</span></td>`;
        } else {
          const v=runBL[i];
          cells+=`<td><span class="score-val" style="color:var(--text)">${Math.abs(v)}</span></td>`;
        }
      }
    }
    const vc=r.value>0?'pos':r.value<0?'neg':'zero';
    const vs=r.open===true?'✏️':(r.noPlayer?'—':(r.value===0?'±0':r.value));
    cells+=`<td><span class="game-val ${r.open===true?'':r.noPlayer?'':vc}">${vs}</span></td>`;
    const labelStr = r.isRamschGH ? '🃏 RGH' : labelFromKeyShort(r);
    const suitIdx = ['♦','♥','♠','♣'].findIndex(s=>labelStr.startsWith(s));
    const tagCls = suitIdx>=0 ? FARBEN_CLS[suitIdx] : '';
    cells+=`<td><span class="game-type-tag ${tagCls}">${labelStr}</span></td>`;
    tr.innerHTML=cells;tbody.appendChild(tr);
  });
  tfoot.innerHTML='';
  const tr=document.createElement('tr');
  if(tableView!=='std') tr.classList.add('dimmed');
  let cells='<td>Σ</td>';
  for(let i=0;i<n;i++){const v=state.totals[i]||0,cls=v>0?'pos':v<0?'neg':'zero';cells+=`<td><span class="score-val ${cls}">${v}</span></td>`;}
  cells+='<td></td><td></td>';tr.innerHTML=cells;tfoot.appendChild(tr);
  const sfTotals=computeSF();
  const trSF=document.createElement('tr');
  trSF.className='sf-row'+(tableView!=='sf'?' dimmed':'');
  let sfCells=`<td>${t('sf')}</td>`;
  for(let i=0;i<n;i++){
    const base=state.totals[i]||0, delta=sfTotals[i]||0, v=base+delta;
    const cls=v>0?'pos':v<0?'neg':'zero';
    const dsign=delta>=0?'':'-';
    sfCells+=`<td><span class="score-val ${cls}" style="font-size:12px">${v}</span><br><span style="font-size:8px;color:var(--muted)">${dsign}${Math.abs(delta)}</span></td>`;
  }
  sfCells+='<td></td><td></td>';trSF.innerHTML=sfCells;tfoot.appendChild(trSF);
  const blTotals=computeBL();
  const trBL=document.createElement('tr');
  trBL.className='bl-row'+(tableView!=='bl'?' dimmed':'');
  let blCells='<td>BL</td>';
  for(let i=0;i<n;i++){
    const v=blTotals[i]||0;
    blCells+=`<td><span class="score-val" style="font-size:12px;color:var(--text)">${Math.abs(v)}</span></td>`;
  }
  blCells+='<td></td><td></td>';trBL.innerHTML=blCells;tfoot.appendChild(trBL);
  // Money row
  if(moneySettings.rate>0){
    const trM=document.createElement('tr');
    trM.className='money-row';
    const c=moneySettings.currency;
    // Determine decimal places
    let decimals;
    if(c==='Ct'){
      decimals=0;
    } else {
      const s=moneySettings.rate.toString();
      const dot=s.indexOf('.');
      decimals=dot>=0 ? s.length-dot-1 : 0;
    }
    let mCells=`<td>${c}</td>`;
    for(let i=0;i<n;i++){
      let diff=0;
      for(let j=0;j<n;j++) if(j!==i) diff+=(state.totals[i]||0)-(state.totals[j]||0);
      const raw=(diff*moneySettings.rate).toFixed(decimals);
      const display=c==='$' ? c+raw : raw+'\u202f'+c;
      const cls=diff>0?'pos':diff<0?'neg':'zero';
      mCells+=`<td><span class="score-val ${cls}" style="font-size:11px">${display}</span></td>`;
    }
    mCells+='<td></td><td></td>';trM.innerHTML=mCells;tfoot.appendChild(trM);
  }
  setTimeout(()=>{const w=document.getElementById('tableWrap');w.scrollTop=w.scrollHeight;},60);
}

// ===== LONG PRESS =====
function handleTableWrapClick(e){
  if(editRoundIdx < 0) return;
  // Klick irgendwo in die Tabelle (inkl. Zeilen) beendet Edit-Modus
  // Ausnahme: Long-Press auf andere Zeile startet neuen Edit (wird separat behandelt)
  cancelEditRound(); resetPanel(); renderAll();
}

function addLongPress(el, cb){
  let timer=null, moved=false, isTouchDevice=false;
  el.addEventListener('contextmenu', e=>{ e.preventDefault(); e.stopPropagation(); return false; });
  // Touch (Android/iOS)
  el.addEventListener('touchstart', e=>{
    isTouchDevice=true; moved=false;
    timer=setTimeout(()=>{ if(!moved){ cb(); } }, 500);
  }, {passive:true});
  el.addEventListener('touchmove', ()=>{ moved=true; if(timer){clearTimeout(timer);timer=null;} }, {passive:true});
  el.addEventListener('touchend',  ()=>{ if(timer){clearTimeout(timer);timer=null;} });
  el.addEventListener('touchcancel',()=>{ if(timer){clearTimeout(timer);timer=null;} });
  // Mouse (PC) – nur wenn kein Touch
  el.addEventListener('mousedown', e=>{ if(isTouchDevice||e.button!==0) return; moved=false;
    timer=setTimeout(()=>{ if(!moved){ cb(); } }, 500); });
  el.addEventListener('mousemove', ()=>{ moved=true; if(timer){clearTimeout(timer);timer=null;} });
  el.addEventListener('mouseup',   ()=>{ if(timer){clearTimeout(timer);timer=null;} });
  el.addEventListener('mouseleave',()=>{ if(timer){clearTimeout(timer);timer=null;} });
}

// ===== EDIT ROUND =====
function recomputeAllTotals(){
  const n = state.has4 ? 4 : 3;
  let running = new Array(n).fill(0);
  state.rounds.forEach(r=>{
    if(r.open||r.noPlayer||r.value===null||r.value===undefined){ r.totals=[...running]; return; }
    r.players.forEach(i=>{ running[i]+=r.value; });
    r.totals=[...running];
  });
  state.totals=[...running];
}

function startEditRound(idx){
  if(editRoundIdx>=0) cancelEditRound(); // vorherige Edit abbrechen
  if(hasOpenRound()) return; // offene Runde hat Priorität
  const r = state.rounds[idx];
  if(!r||r.open) return;
  editRoundIdx = idx;
  // calc aus gespeicherten Werten wiederherstellen
  const sc = r.savedCalc || {};
  calc = {
    type: sc.type||'', farbeIdx: sc.farbeIdx||0, factor: sc.factor||2,
    nullVal: sc.nullVal||23, jackCount: sc.jackCount||1, jackDir: sc.jackDir||'mit',
    hand: sc.hand||false, schneider: sc.schneider||false, schneiderA: sc.schneiderA||false,
    schwarz: sc.schwarz||false, schwarzA: sc.schwarzA||false, ouvert: sc.ouvert||false,
    spitze: sc.spitze||false, spitzeA: sc.spitzeA||false,
    kontra: sc.kontra||false, re: sc.re||false, bock: sc.bock||false,
    jungfrau: sc.jungfrau||false, geschoben: sc.geschoben||0, verloren: sc.verloren||false
  };
  selectedPlayers = [...(r.players||[])];
  sign = (r.value!==null && r.value<0) ? -1 : 1;
  panelOpen=true;
  document.getElementById('inputPanel').classList.add('open');
  const suitType = sc.type==='farbe' ? ['karo','herz','pik','kreuz'][sc.farbeIdx||0] : (sc.type||'');
  renderAll();
  // RGH-Sperre: Typ-Buttons für inkompatible Typen dimmen
  const isRGHRound = r.isRamschGH;
  document.querySelectorAll('.type-btn').forEach(b=>{
    const blocked = (isRGHRound && b.dataset.type!=='rgh') || (!isRGHRound && b.dataset.type==='rgh');
    b.disabled = blocked;
    b.style.opacity = blocked ? '0.25' : '';
  });
  setType(suitType);
  // Ramsch-Eingabe wiederherstellen
  if(sc.type==='ramsch'){
    const ri=document.getElementById('ramschInput');
    if(ri) ri.value=Math.abs(r.value)||'';
    if(isDurchActive()){
      ri.value='120'; ri.disabled=true; ri.style.opacity='0.5';
    }
  }
  refreshJackRow(); buildNullBtns();
  // Edit immer in Stage 1: Spieler + Typ änderbar
  document.getElementById('stage1').style.display='';
  document.getElementById('stage2').style.display='none';
  // Ansagen-Buttons für Farbe/Grand wiederherstellen
  updateAnsagenUI();
  // Edit-Modus UI
  document.getElementById('addBtn').textContent=t('speichern');
  document.getElementById('addBtn').classList.add('edit-mode');
  document.getElementById('addBtn').style.display='';
  document.getElementById('addBtn').disabled=false;
  document.getElementById('addBtn').style.opacity='';
  document.getElementById('vormerkenBtn').style.display='none';
  updateCalcUI(); updatePlayerBtns(); updateAnsagenUI(); updatePanelHeight();
  renderTable(); // Zeile hervorheben
}

function cancelEditRound(){
  editRoundIdx=-1;
  document.getElementById('addBtn').textContent=t('eintragen');
  document.getElementById('addBtn').classList.remove('edit-mode');
  document.querySelectorAll('.type-btn').forEach(b=>{ b.disabled=false; b.style.opacity=''; });
  renderTable();
}

function saveEditRound(){
  if(editRoundIdx<0) return;
  const idx=editRoundIdx;
  const r=state.rounds[idx];
  const isLeer=calc.type==='leer';
  const isRamschGH=calc.type==='rgh';
  const isRamschDurch=isDurchActive();
  r.players=isLeer?[]:([...selectedPlayers]);
  r.noPlayer=isLeer||selectedPlayers.length===0;
  r.value=isLeer?0:(selectedPlayers.length>0?getFinalValue():0);
  r.label=getShortLabel()||r.label;
  r.typeKey=getTypeKey();
  r.isRamschGH=isRamschGH;
  r.savedCalc={
    type:calc.type, farbeIdx:calc.farbeIdx, nullVal:calc.nullVal,
    hand:calc.hand, schneider:calc.schneider, schneiderA:calc.schneiderA,
    schwarz:calc.schwarz, schwarzA:calc.schwarzA, ouvert:calc.ouvert,
    spitze:calc.spitze, spitzeA:calc.spitzeA,
    kontra:calc.kontra, re:calc.re, bock:calc.bock,
    geschoben:calc.geschoben, jungfrau:calc.jungfrau,
    jackCount:calc.jackCount, jackDir:calc.jackDir, factor:calc.factor,
    verloren:calc.verloren
  };
  recomputeAllTotals();
  editRoundIdx=-1;
  document.querySelectorAll('.type-btn').forEach(b=>{ b.disabled=false; b.style.opacity=''; });
  save();
  resetPanel();
  document.getElementById('addBtn').textContent=t('eintragen');
  document.getElementById('addBtn').classList.remove('edit-mode');
  renderAll();
}

function updatePlayerBtns(){
  const n = state.has4 ? 4 : 3;
  const aussetzer = state.has4 ? getAussetzer() : -1;
  const isLeer = calc.type==='leer';
  const isEditMode = editRoundIdx>=0;
  document.getElementById('playerGrid').classList.toggle('four', state.has4);
  for(let i=0;i<4;i++){
    const btn=document.getElementById('pbtn'+i);
    const show = i < n;
    btn.style.display = show ? '' : 'none';
    if(!show) continue;
    const isAussetzer = (i === aussetzer);
    btn.classList.toggle('selected', selectedPlayers.includes(i));
    btn.disabled = isAussetzer || isLeer;
    btn.style.opacity = (isAussetzer||isLeer) ? '0.35' : '';
    document.getElementById('pbtn'+i+'name').textContent = state.names[i]||('Spieler '+(i+1));
    const v = state.totals[i]||0;
    const pts = document.getElementById('pbtn'+i+'pts');
    pts.textContent = v+' '+t('punkte');
    pts.style.color = v>0?'var(--green)':v<0?'var(--red)':'';
  }
  document.getElementById('signBtn').disabled = isLeer;
  document.getElementById('signBtn').style.opacity = isLeer ? '0.35' : '';
  const needsPlayer = !isLeer && calc.type!=='';
  const noType = calc.type==='';
  const addBtn = document.getElementById('addBtn');
  const vBtn = document.getElementById('vormerkenBtn');
  const inStage2 = document.getElementById('stage2').style.display!=='none';
  if(isEditMode){
    // Edit-Modus Stage 1: Vormerken für Farbe/Grand/Null/RGH, direkt Speichern für Ramsch/Leer
    const isDirectSave = calc.type==='ramsch'||calc.type==='leer';
    if(isDirectSave){
      addBtn.style.display=''; vBtn.style.display='none';
      const ready = calc.type==='leer' || selectedPlayers.length>0;
      addBtn.disabled=!ready; addBtn.style.opacity=ready?'':'0.35';
    } else if(inStage2){
      // Stage 2 im Edit-Modus: Speichern
      addBtn.style.display=''; vBtn.style.display='none';
      const ready = calc.type!=='' && (selectedPlayers.length>0||calc.type==='leer');
      addBtn.disabled=!ready; addBtn.style.opacity=ready?'':'0.35';
    } else {
      // Stage 1 im Edit-Modus: Vormerken führt zu Stage 2
      addBtn.style.display='none'; addBtn.disabled=true;
      const canVormerken = calc.type!=='' && selectedPlayers.length>0;
      vBtn.style.display=canVormerken?'':'none';
      vBtn.disabled=!canVormerken; vBtn.style.opacity=canVormerken?'':'0.35';
      // Vormerken-Text ändern
      vBtn.textContent=t('weiter')||'Weiter ›';
    }
  } else if(inStage2){
    // Stage 2: Eintragen aktiv, kein Vormerken
    addBtn.style.display='';
    const openR = hasOpenRound() ? state.rounds[openRoundIdx] : null;
    const hasPlayer = openR && (openR.noPlayer || openR.players.length>0);
    addBtn.disabled = noType || !hasPlayer;
    addBtn.style.opacity = addBtn.disabled ? '0.35' : '';
    vBtn.style.display='none';
  } else {
    // Stage 1: Leer/Ramsch/Durch direkt eintragbar, sonst Vormerken
    const isRamschDirect = calc.type==='ramsch'; // inkl. Durch
    if(isLeer || isRamschDirect){
      // Direkt Eintragen: Leer braucht keinen Spieler, Ramsch/Durch schon
      addBtn.style.display='';
      const canAdd = isLeer || selectedPlayers.length>0;
      addBtn.disabled=!canAdd;
      addBtn.style.opacity=canAdd?'':'0.35';
      vBtn.style.display='none';
    } else {
      addBtn.style.display='none';
      addBtn.disabled=true;
      const canVormerken = calc.type!=='' && selectedPlayers.length>0;
      vBtn.style.display = canVormerken ? '' : 'none';
      vBtn.disabled = !canVormerken;
      vBtn.style.opacity = canVormerken ? '' : '0.35';
    }
  }
  updateHint();
}

// ===== ZWEISTUFIGE EINGABE =====
function buildSummaryText(){
  const parts = [];
  // Spieler
  const r = hasOpenRound() ? state.rounds[openRoundIdx] : null;
  const playerIdxs = r ? r.players : selectedPlayers;
  const names = playerIdxs.map(i=>state.names[i]||('S'+(i+1))).join(', ');
  if(names) parts.push(names);
  // Spieltyp – typeKey aus offener Runde nehmen falls vorhanden (enthält Hand/Ouvert bei Null)
  const tk = r ? r.typeKey : getTypeKey();
  const lbl = r ? labelFromKey(r) : getShortLabel();
  parts.push(labelFromKey({typeKey: tk, label: lbl}));
  // Ansagen nur bei Farbe/Grand (nicht bei Null – dort ist Hand/Ouvert im Label)
  const isNull = tk && tk.startsWith('null:');
  if(!isNull){
    if(calc.ouvert)          parts.push(t('ouvert'));
    else if(calc.schwarzA)   parts.push(t('schwarzA'));
    else if(calc.schneiderA) parts.push(t('schneiderA'));
    else if(calc.hand)       parts.push(t('hand'));
    if(calc.spitzeA)         parts.push(t('spitzeA')||'Spitze');
  }
  return parts.join(' · ');
}

function showStage2(){
  document.getElementById('stage1').style.display='none';
  document.getElementById('stage2').style.display='';
  document.getElementById('stage2summaryText').textContent=buildSummaryText();
  const isFarbeGrand = calc.type==='farbe'||calc.type==='grand'||calc.type==='rgh';
  const isRamsch = calc.type==='ramsch';
  document.getElementById('stage2Buben').style.display=isFarbeGrand?'':'none';
  document.getElementById('stage2Erreicht').style.display=isFarbeGrand?'':'none';
  // detailRamsch ist in Stage 1, nicht Stage 2
  document.getElementById('detailNormal').style.display=(!isRamsch&&calc.type!=='leer'&&calc.type!=='')?'':'none';
  // Factor stepper now visible in stage2
  document.getElementById('calcFarbe').style.display=(calc.type==='farbe')?'':'none';
  document.getElementById('calcGrand').style.display=(calc.type==='grand')?'':'none';
  document.getElementById('calcRGH').style.display=(calc.type==='rgh')?'':'none';
  // RGH: Kontra/Re/Bock ausblenden
  const isRGH = calc.type==='rgh';
  document.getElementById('dKontra').style.display=isRGH?'none':'';
  document.getElementById('dRe').style.display=isRGH?'none':'';
  document.getElementById('dBock').style.display=isRGH?'none':'';
  // Stage-2-Buttons komplett zurücksetzen bevor neu belegt wird
  ['dSchneider','dSchwarz','dSpitze','dKontra','dRe','dBock','dVerloren'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){ el.classList.remove('active'); el.style.display=''; }
  });
  calc.schneider=false; calc.schwarz=false; calc.spitze=false; calc.kontra=false; calc.re=false; calc.bock=false; calc.verloren=false;
  // Vorbelegung: Schneider/Schwarz aus Ansagen vorbelegen
  // Angesagte Stufen sind implizit aktiv und werden versteckt
  if(isFarbeGrand){
    const sA = calc.schneiderA, swA = calc.schwarzA;
    // Immer aktiv setzen wenn angesagt
    if(sA || swA){ calc.schneider=true; document.getElementById('dSchneider').classList.add('active'); }
    if(swA){ calc.schwarz=true; document.getElementById('dSchwarz').classList.add('active'); }
    // Verstecken was durch Ansage implizit gesetzt ist
    document.getElementById('dSchneider').style.display = sA ? 'none' : '';
    document.getElementById('dSchwarz').style.display = swA ? 'none' : '';
    // Spitze angesagt → Spitze in Stage 2 vorbelegen und verstecken (analog Schneider)
    if(calc.spitzeA){
      calc.spitze=true;
      document.getElementById('dSpitze').classList.add('active');
      document.getElementById('dSpitze').style.display='none';
    }
    // stage2Erreicht komplett verstecken wenn alles implizit
    const allImplied = swA; // bei Schwarz angesagt sind beide versteckt
    if(allImplied) document.getElementById('stage2Erreicht').style.display='none';
  }
  refreshJackRow();
  syncFactor();
  updateCalcResult();
  updatePanelHeight();
}

function backToStage1(){
  if(editRoundIdx>=0){
    // Edit-Modus: zurück zu Stage 1
    document.getElementById('stage2').style.display='none';
    document.getElementById('stage1').style.display='';
    updatePlayerBtns(); updatePanelHeight();
    return;
  }
  if(!hasOpenRound()) return;
  // Offene Runde BEHALTEN – nur zur Stage 1 Ansicht wechseln
  const r = state.rounds[openRoundIdx];
  const sc = r.savedCalc||{};
  // calc aus savedCalc wiederherstellen für Stage 1
  calc = {type:sc.type||'', farbeIdx:sc.farbeIdx||0, factor:sc.factor||2,
    nullVal:sc.nullVal||23, jackCount:sc.jackCount||1, jackDir:sc.jackDir||'mit',
    hand:sc.hand||false, schneider:false, schneiderA:sc.schneiderA||false,
    schwarz:false, schwarzA:sc.schwarzA||false, ouvert:sc.ouvert||false,
    spitze:false, spitzeA:sc.spitzeA||false,
    kontra:false, re:false, bock:false, jungfrau:sc.jungfrau||false,
    geschoben:sc.geschoben||0, verloren:false};
  selectedPlayers = [...r.players];
  document.getElementById('stage2').style.display='none';
  document.getElementById('stage1').style.display='';
  const suitType = sc.type==='farbe' ? ['karo','herz','pik','kreuz'][sc.farbeIdx||0] : sc.type;
  setType(suitType||'');
  // Ansagen-Buttons wiederherstellen
  updateAnsagenUI();
  updatePlayerBtns(); updateCalcUI(); updatePanelHeight();
}

function getTypeKey(){
  const isRamschDurch = isDurchActive();
  if(calc.type==='rgh') return 'rgh';
  if(isRamschDurch) return 'rdurch';
  if(calc.type==='farbe') return 'farbe:'+calc.farbeIdx;
  if(calc.type==='grand') return 'grand';
  if(calc.type==='null'){
    // hand und ouvert aus nullVal ableiten
    const hand = calc.nullVal===35||calc.nullVal===59 ? 1 : 0;
    const ouvert = calc.nullVal===46||calc.nullVal===59 ? 1 : 0;
    return 'null:'+calc.nullVal+':'+hand+':'+ouvert;
  }
  if(calc.type==='ramsch') return 'ramsch';
  if(calc.type==='leer') return 'leer';
  return '';
}

function hasOpenRound(){ 
  // Sync openRoundIdx with actual state
  if(openRoundIdx >= 0 && (!state.rounds[openRoundIdx] || !state.rounds[openRoundIdx].open)){
    openRoundIdx = -1;
  }
  if(openRoundIdx < 0){
    const idx = state.rounds.findIndex(r=>r.open===true);
    if(idx >= 0) openRoundIdx = idx;
  }
  return openRoundIdx >= 0; 
}

function vormerken(){
  // Im Edit-Modus: nur zu Stage 2 wechseln ohne neue offene Runde
  if(editRoundIdx>=0){
    showStage2();
    document.getElementById('addBtn').textContent=t('speichern');
    document.getElementById('addBtn').classList.add('edit-mode');
    document.getElementById('addBtn').style.display='';
    document.getElementById('addBtn').disabled=false;
    document.getElementById('addBtn').style.opacity='';
    document.getElementById('vormerkenBtn').style.display='none';
    updatePanelHeight();
    return;
  }
  const isRamschGH = calc.type==='rgh';
  const isRamschDurch = isDurchActive();
  const isLeer = calc.type==='leer';
  const aussetzer = state.has4 ? getAussetzer() : -1;
  const n = state.has4 ? 4 : 3;
  const typeKey = getTypeKey();
  const savedCalc = {
    type: calc.type, farbeIdx: calc.farbeIdx, nullVal: calc.nullVal,
    hand: calc.hand, schneider: calc.schneider, schneiderA: calc.schneiderA,
    schwarz: calc.schwarz, schwarzA: calc.schwarzA, ouvert: calc.ouvert,
    spitzeA: calc.spitzeA,
    geschoben: calc.geschoben, jungfrau: calc.jungfrau,
    jackCount: calc.jackCount, jackDir: calc.jackDir, factor: calc.factor
  };

  if(hasOpenRound()){
    // Bestehende offene Runde aktualisieren (nach Rückkehr aus Stage 2)
    const r = state.rounds[openRoundIdx];
    r.players = isLeer ? [] : [...selectedPlayers];
    r.label = getShortLabel();
    r.typeKey = typeKey;
    r.noPlayer = isLeer || selectedPlayers.length===0;
    r.isRamschGH = isRamschGH;
    r.savedCalc = savedCalc;
  } else {
    // Neue offene Runde anlegen
    const newTotals = [...state.totals];
    while(newTotals.length < n) newTotals.push(0);
    const round = {
      players: isLeer ? [] : [...selectedPlayers],
      value: null,
      label: getShortLabel(),
      typeKey,
      noPlayer: isLeer || selectedPlayers.length===0,
      isRamschGH, aussetzer,
      totals: [...newTotals],
      open: true,
      savedCalc
    };
    openRoundIdx = state.rounds.length;
    state.rounds.push(round);
  }
  save();
  // Calc für Stufe 2 aus savedCalc der offenen Runde holen
  const sc2 = state.rounds[openRoundIdx].savedCalc;
  selectedPlayers=[]; sign=1;
  calc={type:sc2.type, farbeIdx:sc2.farbeIdx,
    factor:sc2.factor, nullVal:sc2.nullVal,
    jackCount:1, jackDir:'mit',
    hand:sc2.hand, schneider:false, schneiderA:sc2.schneiderA,
    schwarz:false, schwarzA:sc2.schwarzA, ouvert:sc2.ouvert,
    spitze:false, spitzeA:sc2.spitzeA||false,
    kontra:false, re:false, bock:false,
    jungfrau:sc2.jungfrau, geschoben:sc2.geschoben,
    verloren:false};
  // Direkt zu Stage 2 wechseln – Panel bleibt offen
  const suitType = sc2.type==='farbe' ?
    ['karo','herz','pik','kreuz'][sc2.farbeIdx] : sc2.type;
  panelOpen=true;
  document.getElementById('inputPanel').classList.add('open');
  renderAll();
  setType(suitType);
  refreshJackRow(); buildNullBtns();
  showStage2();
  updateCalcUI(); updatePlayerBtns(); updatePanelHeight();
}

function updateStageUI(stage){
  const ind = document.getElementById('stageIndicator');
  if(!ind) return; // Element nicht vorhanden, nichts tun
  if(stage===0){ ind.style.display='none'; }
}

function openRoundForEdit(idx){
  const r = state.rounds[idx];
  if(!r||!r.open) return;
  openRoundIdx = idx;
  // Restore calc from savedCalc
  const sc = r.savedCalc;
  calc = {type:sc.type, farbeIdx:sc.farbeIdx, factor:sc.factor, nullVal:sc.nullVal,
    jackCount:sc.jackCount||1, jackDir:sc.jackDir||'mit',
    hand:sc.hand, schneider:sc.schneider, schneiderA:sc.schneiderA,
    schwarz:sc.schwarz, schwarzA:sc.schwarzA, ouvert:sc.ouvert,
    kontra:false, re:false, bock:false,
    jungfrau:sc.jungfrau, geschoben:sc.geschoben, verloren:false};
  selectedPlayers = [...r.players];
  sign = 1;
  panelOpen=true;
  document.getElementById('inputPanel').classList.add('open');
  const suitType2 = sc.type==='farbe' ? ['karo','herz','pik','kreuz'][sc.farbeIdx] : sc.type;
  setType(suitType2);
  refreshJackRow(); buildNullBtns();
  showStage2();
  updateCalcUI(); updatePlayerBtns(); updatePanelHeight();
}

function cancelOpenRound(){
  if(editRoundIdx>=0){ cancelEditRound(); resetPanel(); renderAll(); return; }
  if(!hasOpenRound()) return;
  state.rounds.splice(openRoundIdx, 1);
  openRoundIdx = -1;
  save();
}


function resetPanel(){
  selectedPlayers=[]; sign=1;
  calc={type:'',farbeIdx:0,factor:2,nullVal:23,jackCount:1,jackDir:'mit',
    hand:false,schneider:false,schneiderA:false,schwarz:false,schwarzA:false,ouvert:false,
    spitze:false,spitzeA:false,kontra:false,re:false,bock:false,jungfrau:false,geschoben:0,verloren:false};
  const ri=document.getElementById('ramschInput'); ri.value=''; ri.disabled=false; ri.style.opacity='';
  document.getElementById('geschobenVal').textContent='0';
  document.getElementById('ramschDurch').classList.remove('active');
  document.getElementById('calcRamschInputRow').style.display='';
  document.getElementById('signBtn').textContent='+';
  document.getElementById('signBtn').className='sign-btn positive';
  document.querySelectorAll('.opt-btn,.dbl-btn').forEach(b=>b.classList.remove('active','implied'));
  document.getElementById('stage1').style.display='';
  document.getElementById('stage2').style.display='none';
  document.getElementById('stage1Ansagen').style.display='none';
  ['stage2Buben','stage2Erreicht','detailRamsch','detailNormal'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.style.display='none';
  });
  editRoundIdx=-1;
  document.getElementById('addBtn').textContent=t('eintragen');
  document.getElementById('addBtn').classList.remove('edit-mode');
  setType(''); setFarbe(0); buildNullBtns(); refreshJackRow();
  panelOpen=false;
  document.getElementById('inputPanel').classList.remove('open');
  updateStageUI(0);
}

function addRound(){
  if(editRoundIdx>=0){ saveEditRound(); return; }
  if(hasOpenRound()){
    // Stufe 2: offene Runde abschließen
    const r = state.rounds[openRoundIdx];
    const n = state.has4 ? 4 : 3;
    const value = r.noPlayer ? 0 : getFinalValue();
    r.value = value;
    r.open = false;
    delete r.open; // sicher entfernen
    // typeKey aus savedCalc nehmen falls calc.type leer
    r.typeKey = getTypeKey() || (r.savedCalc ? r.typeKey : '');
    r.label = getShortLabel() || r.label;
    // Totals neu berechnen
    const base = openRoundIdx > 0 ? [...state.rounds[openRoundIdx-1].totals] : new Array(n).fill(0);
    while(base.length < n) base.push(0);
    if(!r.noPlayer) r.players.forEach(i=>{ base[i]+=value; });
    r.totals = [...base];
    state.totals = [...base];
    openRoundIdx = -1;
    save();
  } else {
    // Normal: direkt eintragen
    const isRamschGH = calc.type==='rgh';
    const isRamschDurch = isDurchActive();
    const isLeer = calc.type==='leer';
    const noPlayer = isLeer || selectedPlayers.length===0;
    const value = isLeer ? 0 : (selectedPlayers.length>0 ? getFinalValue() : 0);
    const label = isLeer ? getShortLabel() : (selectedPlayers.length>0 ? getShortLabel() : '');
    const typeKey = getTypeKey();
    const aussetzer = state.has4 ? getAussetzer() : -1;
    const newTotals=[...state.totals];
    while(newTotals.length < (state.has4?4:3)) newTotals.push(0);
    if(!isLeer) selectedPlayers.forEach(i=>{newTotals[i]+=value;});
    state.rounds.push({players:isLeer?[]:([...selectedPlayers]),value,label,typeKey,noPlayer,isRamschGH,aussetzer,totals:[...newTotals]});
    state.totals=newTotals; save();
  }
  openRoundIdx = -1;
  resetPanel();
  panelOpen = true;
  document.getElementById('inputPanel').classList.add('open');
  renderAll(); updateCalcUI(); updatePanelHeight();
}

function toggleRamschDurch(){
  const btn=document.getElementById('ramschDurch');
  const isDurch=btn.classList.toggle('active');
  // Eingabefeld: bei Durch auf 120 setzen und sperren, sonst freigeben
  const ri=document.getElementById('ramschInput');
  if(isDurch){
    ri.value='120';
    ri.disabled=true;
    ri.style.opacity='0.5';
  } else {
    ri.value='';
    ri.disabled=false;
    ri.style.opacity='';
  }
  // Jungfrau nur bei normalem Ramsch, Geschoben bei beiden
  document.getElementById('dJungfrau').style.display=isDurch?'none':'';
  document.getElementById('detailRamsch').style.display='';
  document.getElementById('detailNormal').style.display='none';
  if(isDurch && sign<0){
    sign=1;
    const b=document.getElementById('signBtn');
    b.textContent='+'; b.className='sign-btn positive';
  } else if(!isDurch && sign>0){
    sign=-1;
    const b=document.getElementById('signBtn');
    b.textContent='−'; b.className='sign-btn negative';
  }
  updateCalcResult(); updatePanelHeight();
}


// ===== UNDO =====
function undoLast(){
  hideToast();
  if(state.rounds.length===0)return;
  lastDeleted=state.rounds.pop();
  if(state.rounds.length===0){
    state.totals=state.has4?[0,0,0,0]:[0,0,0];
  } else {
    state.totals=[...state.rounds[state.rounds.length-1].totals];
  }
  save(); renderAll(); showToast();
}
let toastTimer;
function showToast(){
  document.getElementById('toastText').textContent=t('eingetragen');
  document.getElementById('toast').classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(hideToast,4000);
}
function hideToast(){document.getElementById('toast').classList.remove('show');}

// ===== RESET =====
function closeReset(){
  document.getElementById('resetModal').classList.remove('show');
}
function confirmReset(){
  openRoundIdx=-1;
  state.rounds=[];state.totals=state.has4?[0,0,0,0]:[0,0,0];
  save();resetPanel();renderAll();closeReset();
}

// ===== NAME EDIT =====
function editName(i){
  const th=document.getElementById('th'+i);
  if(th.querySelector('.th-edit'))return;
  const cur=state.names[i];
  th.innerHTML=`<input class="th-edit" id="th-edit-${i}" value="${cur}" maxlength="12">`;
  const inp=document.getElementById('th-edit-'+i);
  inp.focus();inp.select();
  let committed=false;
  function commit(){
    if(committed)return;committed=true;
    const val=inp.value.trim()||('Spieler '+(i+1));
    state.names[i]=val;save();
    th.textContent=val;
    updatePlayerBtns();
  }
  inp.addEventListener('blur',commit);
  inp.addEventListener('keydown',e=>{
    if(e.key==='Enter'){e.preventDefault();inp.blur();}
    if(e.key==='Escape'){committed=true;th.textContent=cur;}
  });
}

// Service Worker registrieren
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
