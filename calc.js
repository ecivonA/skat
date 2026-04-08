// ===== calc.js =====
// Reine Spielwert-Berechnung. Kein DOM außer isDurchActive() und computeRaw().
// Abhängigkeiten: state, calc, sign, lang (Globals aus app.js), T (aus lang.js)

// ===== KONSTANTEN =====
const FARBEN_VALS = [9, 10, 11, 12];
const FARBEN_SYM  = ['♦', '♥', '♠', '♣'];
const FARBEN_CLS  = ['suit-d', 'suit-h', 'suit-s', 'suit-c'];
const SUIT_IDX    = { karo:0, herz:1, pik:2, kreuz:3 };

// ===== HILFSFUNKTIONEN =====
function getFarbeVal()  { return FARBEN_VALS[calc.farbeIdx]; }
function getFarbeName() { return FARBEN_SYM[calc.farbeIdx] + ' ' + T[lang].farbenNamen[calc.farbeIdx]; }
function isGHActive()   { return calc.type === 'rgh'; }

// Liest DOM (Button-Klasse) – unvermeidbar
function isDurchActive(){
  return calc.type === 'ramsch' &&
    document.getElementById('ramschDurch').classList.contains('active');
}

// ===== NULL-LABELS =====
// nullVal: 23=plain, 35=hand, 46=ouvert, 59=ouvert+hand, 92=revolution
function nullHand(v)   { return v===35||v===59||v===92; }
function nullOuvert(v) { return v===46||v===59||v===92; }
function nullRevol(v)  { return v===92; }

function nullLabel(v){
  if(v===92) return '∅ 🌀 Revolution';
  let s = '∅ Null';
  if(nullOuvert(v)) s += ' 👁';
  if(nullHand(v))   s += ' ✋';
  return s;
}
function nullLabelShort(v){
  if(v===92) return '∅🌀';
  let s = '∅';
  if(nullOuvert(v)) s += '👁';
  if(nullHand(v))   s += '✋';
  return s;
}

// ===== FAKTOR =====
function syncFactor(){
  let f = calc.jackCount + 1;           // Spiel
  if(calc.hand) f++;
  if(calc.schneider || calc.schneiderA) f++;
  if(calc.schneiderA) f++;              // Ansage selbst
  if(calc.schwarz   || calc.schwarzA)  f++;
  if(calc.schwarzA) f++;                // Ansage selbst
  if(calc.ouvert) f++;
  if(calc.spitze || calc.spitzeA) f++;
  if(calc.spitzeA) f++;                 // Ansage selbst
  calc.factor = Math.max(2, f);
  const fv = calc.factor.toString();
  ['factorVal', 'factorValG', 'factorValRGH'].forEach(id => {
    const el = document.getElementById(id); if(el) el.textContent = fv;
  });
}

// ===== ROHER SPIELWERT (vor Verdoppelungen) =====
// Liest DOM: ramschInput.value – unvermeidbar
function computeRaw(){
  if(calc.type === 'rgh') return 24 * calc.factor;
  if(isDurchActive())     return 120 * Math.pow(2, calc.geschoben);
  if(calc.type === 'farbe' || calc.type === 'grand')
    return (calc.type === 'grand' ? 24 : getFarbeVal()) * calc.factor;
  if(calc.type === 'null') return calc.nullVal;
  if(calc.type === 'leer') return 0;
  if(calc.type === 'ramsch'){
    const base = parseInt(document.getElementById('ramschInput').value) || 0;
    let m = Math.pow(2, calc.geschoben);
    if(calc.jungfrau) m *= 2;
    if(calc.kontra)   m *= 2;
    if(calc.re)       m *= 2;
    if(calc.bock)     m *= 2;
    return base * m;
  }
  return 0;
}

// ===== ENDWERT =====
function getFinalValue(){
  let raw = computeRaw();
  const isRamschOnly = calc.type === 'ramsch' && !isDurchActive();
  if(!isRamschOnly){ if(calc.kontra) raw*=2; if(calc.re) raw*=2; if(calc.bock) raw*=2; }
  if(calc.verloren) raw *= 2;
  return sign * raw;
}

// ===== TYPEKEY =====
function getTypeKey(){
  const isRamschDurch = isDurchActive();
  if(calc.type === 'rgh')   return 'rgh';
  if(isRamschDurch)         return 'rdurch';
  if(calc.type === 'farbe') return 'farbe:' + calc.farbeIdx;
  if(calc.type === 'grand') return 'grand';
  if(calc.type === 'null'){
    const hand   = (calc.nullVal === 35 || calc.nullVal === 59) ? 1 : 0;
    const ouvert = (calc.nullVal === 46 || calc.nullVal === 59) ? 1 : 0;
    return 'null:' + calc.nullVal + ':' + hand + ':' + ouvert;
  }
  if(calc.type === 'ramsch') return 'ramsch';
  if(calc.type === 'leer')   return 'leer';
  return '';
}

// ===== LABELS =====
function getShortLabel(){
  if(calc.type === 'rgh')   return '🃏 RGH';
  if(isDurchActive())       return '👑 RDurch';
  if(calc.type === 'farbe'){
    return FARBEN_SYM[calc.farbeIdx] + ' ' + T[lang].farbenNamen[calc.farbeIdx];
  }
  if(calc.type === 'grand') return '🃏 Grand';
  if(calc.type === 'null')  return nullLabel(calc.nullVal);
  if(calc.type === 'ramsch') return '💀 ' + t('ramsch');
  if(calc.type === 'leer')  return '⊘ ' + t('leer');
  return '';
}

function labelFromKey(r){
  const k = r.typeKey || '';
  if(!k) return r.label || '';
  if(k === 'rgh')    return '🃏 RGH';
  if(k === 'rdurch') return '👑 RDurch';
  if(k.startsWith('farbe:')){
    const idx = parseInt(k.split(':')[1]);
    return FARBEN_SYM[idx] + ' ' + T[lang].farbenNamen[idx];
  }
  if(k === 'grand') return '🃏 Grand';
  if(k.startsWith('null:')){
    const parts = k.split(':');
    const nv = parseInt(parts[1]), hand = parts[2]==='1', ouvert = parts[3]==='1';
    if(nv === 92) return nullLabel(92);
    let s = t('null');
    if(ouvert) s += ' ' + t('ouvert');
    if(hand)   s += ' ' + t('hand');
    return s;
  }
  if(k === 'ramsch') return '💀 ' + t('ramsch');
  if(k === 'leer')   return '⊘ ' + t('leer');
  return r.label || '';
}

function labelFromKeyShort(r){
  const k = r.typeKey || '';
  if(k.startsWith('null:')){
    const nv = parseInt(k.split(':')[1]);
    return nullLabelShort(nv);
  }
  return labelFromKey(r);
}

// ===== FORMEL-TEXT (für Anzeige) =====
function getFormula(){
  if(calc.type === 'rgh')    return '🃏 RGH 24×' + calc.factor;
  if(isDurchActive()) return 'Ramsch Durch 120' +
    (calc.geschoben > 0 ? ' ×' + Math.pow(2,calc.geschoben) + ' (' + calc.geschoben + '× ' + t('geschoben') + ')' : '');
  if(calc.type === 'leer') return '⊘ ' + t('leer');
  let p = [];
  if(calc.type === 'farbe')  p.push(getFarbeName() + ' ' + getFarbeVal() + '×' + calc.factor);
  else if(calc.type === 'grand') p.push('Grand 24×' + calc.factor);
  else if(calc.type === 'null')  p.push(nullLabel(calc.nullVal));
  else if(calc.type === 'ramsch'){
    const base = parseInt(document.getElementById('ramschInput').value) || 0;
    p.push(t('ramsch') + ' ' + base);
    if(calc.jungfrau)      p.push('×' + t('jungfrau'));
    if(calc.geschoben > 0) p.push('×' + Math.pow(2,calc.geschoben) + ' (' + calc.geschoben + '× ' + t('geschoben') + ')');
    if(calc.kontra) p.push('×' + t('kontra'));
    if(calc.re)     p.push('×' + t('re'));
    if(calc.bock)   p.push('×' + t('bock'));
  }
  if(calc.spitzeA)       p.push(t('spitzeA') || 'Spitze anges.');
  else if(calc.spitze)   p.push(t('spitze') || 'Spitze');
  if(calc.type !== 'ramsch'){
    if(calc.kontra) p.push('×' + t('kontra'));
    if(calc.re)     p.push('×' + t('re'));
    if(calc.bock)   p.push('×' + t('bock'));
  }
  if(calc.verloren) p.push('×2');
  return p.join(' ');
}

// ===== SEEGER-FABIAN =====
function sfDeltaForRound(r, i, n){
  const gegBonus = state.has4 ? 30 : 40;
  const aussetzer = r.aussetzer ?? -1;
  if(r.open === true || r.noPlayer || r.players.length === 0) return 0;
  const tk = r.typeKey || r.label || '';
  if(tk==='ramsch'||tk==='rdurch'||tk.includes('💀')||tk.includes('👑')) return 0;
  const won = r.value > 0;
  if(r.players.includes(i)) return won ? 50 : -50;
  if(i === aussetzer) return 0;
  return won ? 0 : gegBonus;
}

function computeSF(){
  const n = state.has4 ? 4 : 3;
  const sf = new Array(n).fill(0);
  const gegBonus = state.has4 ? 30 : 40;
  state.rounds.forEach(r => {
    if(r.open === true || r.noPlayer) return;
    const tk = r.typeKey || r.label || '';
    if(tk==='ramsch'||tk==='rdurch'||tk.includes('💀')||tk.includes('👑')) return;
    if(r.players.length === 0) return;
    const aussetzer = r.aussetzer ?? -1;
    const won = r.value > 0;
    if(won){
      r.players.forEach(i => { sf[i] += 50; });
    } else {
      r.players.forEach(i => { sf[i] -= 50; });
      for(let i=0; i<n; i++){
        if(!r.players.includes(i) && i !== aussetzer) sf[i] += gegBonus;
      }
    }
  });
  return sf;
}

// ===== BIERLACHS =====
function blDeltaForRound(r, i, n){
  const aussetzer = r.aussetzer ?? -1;
  if(r.open === true || r.noPlayer || r.players.length === 0) return 0;
  if(r.value > 0){
    if(r.players.includes(i)) return 0;
    if(i === aussetzer) return 0;
    return -r.value;
  } else if(r.value < 0){
    if(r.players.includes(i)) return r.value;
    return 0;
  }
  return 0;
}

function computeBL(){
  const n = state.has4 ? 4 : 3;
  const bl = new Array(n).fill(0);
  state.rounds.forEach(r => {
    if(r.noPlayer || r.players.length === 0) return;
    const aussetzer = r.aussetzer ?? -1;
    if(r.value > 0){
      for(let i=0; i<n; i++){
        if(!r.players.includes(i) && i !== aussetzer) bl[i] -= r.value;
      }
    } else if(r.value < 0){
      r.players.forEach(i => { bl[i] += r.value; });
    }
  });
  return bl;
}
