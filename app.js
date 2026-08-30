// ==================== DICTIONARY & ANATOMY DATA ====================
const heartAnatomy = {
  "svc": {
    "nameEN": "Superior Vena Cava",
    "nameTH": "ซูพีเรียเวนาคาวา (หลอดเลือดดำใหญ่ส่วนบน)",
    "descEN": "Carries oxygen-poor blood from the upper body (head, neck, arms) back to the right atrium.",
    "descTH": "นำเลือดดำที่มีออกซิเจนต่ำจากร่างกายส่วนบน (ศีรษะ คอ แขน) กลับเข้าสู่หัวใจห้องบนขวา",
    "blood": "deoxygenated"
  },
  "ivc": {
    "nameEN": "Inferior Vena Cava",
    "nameTH": "อินฟีเรียเวนาคาวา (หลอดเลือดดำใหญ่ส่วนล่าง)",
    "descEN": "Carries oxygen-poor blood from the lower body (trunk, legs, abdomen) back to the right atrium.",
    "descTH": "นำเลือดดำที่มีออกซิเจนต่ำจากร่างกายส่วนล่าง (ลำตัว ขา อวัยวะในช่องท้อง) กลับเข้าสู่หัวใจห้องบนขวา",
    "blood": "deoxygenated"
  },
  "ra": {
    "nameEN": "Right Atrium",
    "nameTH": "หัวใจห้องบนขวา",
    "descEN": "Receives oxygen-poor blood from the body and pumps it to the right ventricle through the tricuspid valve.",
    "descTH": "รับเลือดดำจากหลอดเลือดเวนาคาวาทั้งสองเส้น และส่งต่อให้หัวใจห้องล่างขวาผ่านลิ้นหัวใจไตรคัสปิด",
    "blood": "deoxygenated"
  },
  "tricuspid": {
    "nameEN": "Tricuspid Valve",
    "nameTH": "ลิ้นหัวใจไตรคัสปิด",
    "descEN": "A three-cusp valve that prevents oxygen-poor blood from flowing back from the right ventricle into the right atrium.",
    "descTH": "ลิ้นหัวใจกั้นระหว่างห้องบนขวาและล่างขวา ป้องกันไม่ให้เลือดดำไหลย้อนกลับห้องบนขวา",
    "blood": "mixed"
  },
  "rv": {
    "nameEN": "Right Ventricle",
    "nameTH": "หัวใจห้องล่างขวา",
    "descEN": "Pumps oxygen-poor blood to the lungs through the pulmonary valve and pulmonary artery.",
    "descTH": "สูบฉีดเลือดดำที่มีออกซิเจนต่ำไปยังปอดทั้งสองข้างเพื่อฟอกเลือด ผ่านหลอดเลือดแดงพัลโมนารี",
    "blood": "deoxygenated"
  },
  "pulmonary-valve": {
    "nameEN": "Pulmonary Valve",
    "nameTH": "ลิ้นหัวใจพัลโมนารี",
    "descEN": "Separates the right ventricle from the pulmonary artery, preventing blood from returning to the ventricle.",
    "descTH": "ลิ้นหัวใจที่กั้นระหว่างห้องล่างขวากับหลอดเลือดแดงพัลโมนารี ป้องกันเลือดไหลย้อนกลับเข้าห้องล่างขวา",
    "blood": "mixed"
  },
  "pulmonary-artery": {
    "nameEN": "Pulmonary Artery",
    "nameTH": "หลอดเลือดแดงพัลโมนารี",
    "descEN": "Carries oxygen-poor blood from the right ventricle to the lungs (the only artery carrying oxygen-poor blood).",
    "descTH": "หลอดเลือดแดงที่นำเลือดดำที่มีออกซิเจนต่ำจากห้องล่างขวาไปยังปอด (เป็นหลอดเลือดแดงชนิดเดียวที่บรรจุเลือดดำ)",
    "blood": "deoxygenated"
  },
  "pulmonary-veins": {
    "nameEN": "Pulmonary Veins",
    "nameTH": "หลอดเลือดดำพัลโมนารี",
    "descEN": "Carry oxygen-rich blood from the lungs back to the left atrium (the only veins carrying oxygen-rich blood).",
    "descTH": "หลอดเลือดดำที่นำเลือดแดงที่ผ่านการฟอกแล้วจากปอดเข้าสู่ห้องบนซ้าย (เป็นหลอดเลือดดำชนิดเดียวที่บรรจุเลือดแดง)",
    "blood": "oxygenated"
  },
  "la": {
    "nameEN": "Left Atrium",
    "nameTH": "หัวใจห้องบนซ้าย",
    "descEN": "Receives oxygen-rich blood from the lungs and pumps it into the left ventricle.",
    "descTH": "รับเลือดแดงที่ฟอกแล้วจากปอดผ่านหลอดเลือดดำพัลโมนารี และส่งต่อให้หัวใจห้องล่างซ้าย",
    "blood": "oxygenated"
  },
  "mitral": {
    "nameEN": "Mitral Valve",
    "nameTH": "ลิ้นหัวใจไมตรัล / ไบคัสปิด",
    "descEN": "A two-cusp valve that prevents blood from flowing back from the left ventricle into the left atrium.",
    "descTH": "ลิ้นหัวใจกั้นระหว่างห้องบนซ้ายและล่างซ้าย มีสองแฉก ป้องกันเลือดแดงไหลย้อนกลับเข้าห้องบนซ้าย",
    "blood": "mixed"
  },
  "lv": {
    "nameEN": "Left Ventricle",
    "nameTH": "หัวใจห้องล่างซ้าย",
    "descEN": "The thickest muscular chamber; pumps oxygen-rich blood through the aortic valve to the aorta and the rest of the body.",
    "descTH": "ห้องหัวใจที่มีผนังหนาที่สุด สูบฉีดเลือดแดงที่มีออกซิเจนสูงผ่านหลอดเลือดเอออร์ตาไปเลี้ยงร่างกาย",
    "blood": "oxygenated"
  },
  "aortic-valve": {
    "nameEN": "Aortic Valve",
    "nameTH": "ลิ้นหัวใจเอออร์ติก",
    "descEN": "Separates the left ventricle from the aorta, preventing blood from flowing backward into the ventricle.",
    "descTH": "ลิ้นหัวใจที่กั้นห้องล่างซ้ายกับหลอดเลือดแดงเอออร์ตา ป้องกันเลือดไหลย้อนกลับเข้าห้องล่างซ้าย",
    "blood": "mixed"
  },
  "aorta": {
    "nameEN": "Aorta",
    "nameTH": "หลอดเลือดแดงเอออร์ตา",
    "descEN": "The body's largest artery; distributes oxygen-rich blood from the left ventricle to systemic circulation.",
    "descTH": "หลอดเลือดแดงที่ใหญ่ที่สุดในร่างกาย รับเลือดแดงแรงดันสูงจากห้องล่างซ้ายและแจกจ่ายไปเลี้ยงส่วนต่างๆ ของร่างกาย",
    "blood": "oxygenated"
  },
  "septum": {
    "nameEN": "Heart Septum",
    "nameTH": "ผนังกั้นห้องหัวใจ",
    "descEN": "The muscular wall dividing the left and right chambers, keeping oxygenated and deoxygenated blood separated.",
    "descTH": "ผนังกล้ามเนื้อแบ่งหัวใจฝั่งซ้ายและขวา ป้องกันไม่ให้เลือดแดงและเลือดดำผสมกัน",
    "blood": "mixed"
  }
};

const UI_TEXT = {
  th: {
    studyMode: "โหมดเรียนรู้ (Study)",
    practiceMode: "ฝึกซ้อม (Practice)",
    timeAttackMode: "จับเวลา (Time Attack)",
    infoTitleDefault: "กรุณาเลือกโครงสร้างหัวใจ",
    infoDescDefault: "แตะที่ป้ายชี้จุดสีเหลืองบนภาพหัวใจเพื่อเรียนรู้ชื่อ หน้าที่การทำงาน และทิศทางการไหลเวียนโลหิต",
    hintLabel: "ป้ายคำศัพท์ (Anatomical Labels)",
    hintDesc: "ลากป้ายคำศัพท์ไปวางที่จุดวงกลม หรือคลิกเลือกป้ายแล้วคลิกจุดวงกลมเป้าหมายบนรูป",
    structureLabel: "โครงสร้าง (Structure):",
    functionLabel: "หน้าที่ (Function):",
    successMsg: "ถูกต้อง!",
    victoryTitle: "ยอดเยี่ยมมาก! สำเร็จแล้ว!",
    victoryDesc: "คุณจับคู่โครงสร้างหัวใจครบทั้ง 14 ส่วนเรียบร้อย",
    playAgain: "เล่นอีกครั้ง",
    leaderboardTitle: "ตารางคะแนนสูงสุด (Leaderboard)"
  },
  en: {
    studyMode: "Study Mode",
    practiceMode: "Practice Mode",
    timeAttackMode: "Time Attack Mode",
    infoTitleDefault: "Please select a heart structure",
    infoDescDefault: "Tap on any yellow node on the heart diagram to learn its name, function, and blood flow type.",
    hintLabel: "Anatomical Labels",
    hintDesc: "Drag labels to their target nodes, or click a label then click the target node on the diagram.",
    structureLabel: "Structure:",
    functionLabel: "Function:",
    successMsg: "Correct!",
    victoryTitle: "Excellent! You Did It!",
    victoryDesc: "You have successfully matched all 14 parts of the heart anatomy.",
    playAgain: "Play Again",
    leaderboardTitle: "Leaderboard"
  }
};

// ==================== AUDIO SYNTHESIZER ====================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(type) {
  initAudio();
  if (!audioCtx || audioCtx.state === 'suspended') {
    audioCtx?.resume();
  }
  
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  const now = audioCtx.currentTime;
  
  if (type === 'success') {
    // Beautiful dual tone chime
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    gainNode.gain.setValueAtTime(0.12, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'error') {
    // Buzzer
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.2);
    gainNode.gain.setValueAtTime(0.15, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc.start(now);
    osc.stop(now + 0.25);
  } else if (type === 'victory') {
    // Chime Fanfare: C5 -> E5 -> G5 -> C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const dur = 0.12;
    notes.forEach((freq, idx) => {
      const noteOsc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();
      noteOsc.connect(noteGain);
      noteGain.connect(audioCtx.destination);
      
      noteOsc.type = 'triangle';
      noteOsc.frequency.setValueAtTime(freq, now + idx * dur);
      noteGain.gain.setValueAtTime(0.12, now + idx * dur);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + (idx + 1.2) * dur);
      
      noteOsc.start(now + idx * dur);
      noteOsc.stop(now + (idx + 2) * dur);
    });
  } else if (type === 'select') {
    // Quiet high pop
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5
    gainNode.gain.setValueAtTime(0.05, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    osc.start(now);
    osc.stop(now + 0.06);
  }
}

// ==================== APP STATE ====================
let currentLang = 'th'; // 'th' or 'en'
let currentGameMode = 'study'; // 'study', 'practice', 'time_attack'
let score = 0;
let timeElapsed = 0; // seconds
let timerInterval = null;
let totalAttempts = 0;
let correctMatches = 0;
let comboCount = 0;

let selectedLabelCard = null; // Touch/Tap-to-match memory
let selectedAnchorDot = null;

// QR Code instance
let qrcodeInstance = null;

// Local Config IP Cache
let localServerUrl = window.location.origin;

// ==================== DOM ELEMENTS ====================
const elGameMode = document.getElementById('game-mode');
const elLangToggle = document.getElementById('lang-toggle');
const elLangText = document.getElementById('lang-text');
const elModeBadge = document.getElementById('mode-badge');
const elBtnLeaderboard = document.getElementById('btn-leaderboard');
const elBtnMobileShare = document.getElementById('btn-mobile-share');

const elInfoPanel = document.getElementById('info-panel');
const elInfoTitle = document.getElementById('info-title');
const elInfoBloodType = document.getElementById('info-blood-type');
const elInfoDesc = document.getElementById('info-desc');
const elInfoStructName = document.getElementById('info-struct-name');
const elInfoStructFunc = document.getElementById('info-struct-func');

const elDeckPanel = document.getElementById('deck-panel');
const elLabelsDeck = document.getElementById('labels-deck');

const elHudTimer = document.getElementById('hud-timer');
const elHudAccuracy = document.getElementById('hud-accuracy');
const elHudScore = document.getElementById('hud-score');
const elHudProgress = document.getElementById('hud-progress');
const elBtnReset = document.getElementById('btn-reset');

// Modals
const modalVictory = document.getElementById('modal-victory');
const modalLeaderboard = document.getElementById('modal-leaderboard');
const modalMobileShare = document.getElementById('modal-mobile-share');

// Victory Modal elements
const elResultMode = document.getElementById('result-mode');
const elResultScore = document.getElementById('result-score');
const elResultTime = document.getElementById('result-time');
const elResultAccuracy = document.getElementById('result-accuracy');
const elLboardRegisterBox = document.getElementById('leaderboard-register-box');
const elPlayerNameInput = document.getElementById('player-name-input');
const elBtnSubmitScore = document.getElementById('btn-submit-score');
const elBtnVictoryReplay = document.getElementById('btn-victory-replay');
const elBtnVictoryClose = document.getElementById('btn-victory-close');

// Other controls
const elLeaderboardBody = document.getElementById('leaderboard-body');
const elBtnClearLboard = document.getElementById('btn-clear-leaderboard');
const elBtnLboardClose = document.getElementById('btn-leaderboard-close');
const elLocalUrlText = document.getElementById('local-url-text');
const elBtnMobileClose = document.getElementById('btn-mobile-close');

const svgHeart = document.getElementById('heart-svg');
const anchorDots = document.querySelectorAll('.anchor-dot');
const anatomicalParts = document.querySelectorAll('.anatomical-part');

// ==================== DICTIONARIES TRANSLATOR ====================
function getLabelText(partId) {
  const data = heartAnatomy[partId];
  if (!data) return '';
  return currentLang === 'th' ? data.nameTH.split(' (')[0] : data.nameEN;
}

function updateUILanguage() {
  const t = UI_TEXT[currentLang];
  
  // Header buttons
  elLangText.textContent = currentLang === 'th' ? 'EN' : 'ไทย';
  
  // HUD Label
  document.querySelectorAll('.hud-label').forEach(label => {
    if (label.innerHTML.includes('เวลา') || label.innerHTML.includes('Time')) {
      label.innerHTML = `<i class="fa-solid fa-clock"></i> ${currentLang === 'th' ? 'เวลา' : 'Time'}`;
    } else if (label.innerHTML.includes('ความแม่นยำ') || label.innerHTML.includes('Accuracy')) {
      label.innerHTML = `<i class="fa-solid fa-crosshairs"></i> ${currentLang === 'th' ? 'ความแม่นยำ' : 'Accuracy'}`;
    } else if (label.innerHTML.includes('คะแนน') || label.innerHTML.includes('Score')) {
      label.innerHTML = `<i class="fa-solid fa-star"></i> ${currentLang === 'th' ? 'คะแนน' : 'Score'}`;
    } else if (label.innerHTML.includes('ความคืบหน้า') || label.innerHTML.includes('Progress')) {
      label.innerHTML = `${currentLang === 'th' ? 'ความคืบหน้า' : 'Progress'}`;
    }
  });

  elBtnReset.querySelector('span').textContent = currentLang === 'th' ? 'เริ่มใหม่' : 'Restart';
  elBtnMobileShare.querySelector('span').textContent = currentLang === 'th' ? 'เล่นบนมือถือ' : 'Play on Mobile';

  // Badges & Dropdowns
  elModeBadge.textContent = t[`${currentGameMode}Mode`] || currentGameMode;
  
  // Update Info Panel
  if (currentGameMode === 'study') {
    elInfoTitle.textContent = t.infoTitleDefault;
    elInfoDesc.textContent = t.infoDescDefault;
    elInfoStructName.parentNode.querySelector('.detail-label').textContent = t.structureLabel;
    elInfoStructFunc.parentNode.querySelector('.detail-label').textContent = t.functionLabel;
    
    // Clear info variables
    elInfoStructName.textContent = '-';
    elInfoStructFunc.textContent = '-';
  } else {
    // Game Deck instructions
    elDeckPanel.querySelector('h3').textContent = t.hintLabel;
    elDeckPanel.querySelector('.deck-hint').textContent = t.hintDesc;
  }

  // Reload Cards if they are active
  if (currentGameMode !== 'study') {
    renderCardsDeck();
  }
}

// ==================== INTERACTIVE ANATOMY LOGIC ====================

// Highlight associated SVG overlay circle
function highlightPart(partId, active) {
  const partEl = document.getElementById(`part-${partId}`);
  if (!partEl) return;
  
  if (active) {
    partEl.classList.add('glowing');
    const color = heartAnatomy[partId].blood === 'oxygenated' ? 'rgba(239, 68, 68, 0.85)' : 
                  heartAnatomy[partId].blood === 'deoxygenated' ? 'rgba(37, 99, 235, 0.85)' : 
                  'rgba(251, 191, 36, 0.85)';
    const fillColor = heartAnatomy[partId].blood === 'oxygenated' ? 'rgba(239, 68, 68, 0.15)' : 
                      heartAnatomy[partId].blood === 'deoxygenated' ? 'rgba(37, 99, 235, 0.15)' : 
                      'rgba(251, 191, 36, 0.15)';
    partEl.setAttribute('stroke', color);
    partEl.setAttribute('stroke-width', '3');
    partEl.setAttribute('stroke-dasharray', '4 2');
    partEl.setAttribute('fill', fillColor);
    partEl.style.filter = `drop-shadow(0 0 8px ${color})`;
  } else {
    partEl.classList.remove('glowing');
    partEl.setAttribute('stroke', 'none');
    partEl.setAttribute('fill', 'none');
    partEl.style.filter = 'none';
  }
}

function handleAnchorClick(e) {
  const anchor = e.currentTarget;
  const partId = anchor.dataset.part;
  
  initAudio(); // Resume audio on interaction

  if (currentGameMode === 'study') {
    playSound('select');
    // Highlight
    anchorDots.forEach(d => d.classList.remove('selected'));
    anchor.classList.add('selected');
    
    // Highlight SVG Path
    anatomicalParts.forEach(p => p.style.filter = 'none');
    highlightPart(partId, true);
    
    // Fill Info Panel
    const data = heartAnatomy[partId];
    if (data) {
      elInfoTitle.textContent = currentLang === 'th' ? data.nameTH.split(' (')[0] : data.nameEN;
      elInfoStructName.textContent = currentLang === 'th' ? data.nameTH : `${data.nameEN}`;
      elInfoStructFunc.textContent = currentLang === 'th' ? data.descTH : data.descEN;
      
      // Blood Type badge
      elInfoBloodType.className = `info-badge ${data.blood}`;
      if (data.blood === 'oxygenated') {
        elInfoBloodType.textContent = currentLang === 'th' ? 'เลือดแดง (Ox)' : 'Oxygenated';
      } else if (data.blood === 'deoxygenated') {
        elInfoBloodType.textContent = currentLang === 'th' ? 'เลือดดำ (Deox)' : 'Deoxygenated';
      } else {
        elInfoBloodType.textContent = currentLang === 'th' ? 'ลิ้น / ผนัง' : 'Structure';
      }
    }
  } else {
    // Matching Game modes
    if (anchor.classList.contains('correct')) return; // Already matched
    
    if (selectedLabelCard) {
      // We have a card selected, try matching!
      tryMatch(selectedLabelCard.dataset.part, partId, anchor);
    } else {
      // No card selected, select the anchor instead!
      anchorDots.forEach(d => d.classList.remove('selected'));
      anchor.classList.add('selected');
      selectedAnchorDot = anchor;
      playSound('select');
    }
  }
}

// Check matching
function tryMatch(cardPartId, anchorPartId, anchorElement) {
  totalAttempts++;
  
  if (cardPartId === anchorPartId) {
    // Success match!
    correctMatches++;
    comboCount++;
    playSound('success');
    
    // Score updates
    let addedPoints = 100;
    if (currentGameMode === 'time_attack') {
      const comboBonus = Math.min((comboCount - 1) * 20, 100); // combo x20 max +100
      addedPoints += comboBonus;
    }
    score += addedPoints;
    
    // Visual Updates
    anchorElement.classList.remove('selected', 'incorrect');
    anchorElement.classList.add('correct');
    
    // Clear selections
    const matchingCard = document.querySelector(`.label-card[data-part="${cardPartId}"]`);
    if (matchingCard) {
      matchingCard.classList.remove('selected');
      matchingCard.classList.add('correct');
    }

    selectedLabelCard = null;
    selectedAnchorDot = null;
    anchorDots.forEach(d => d.classList.remove('selected'));
    
    // Update Score UI
    updateHudStats();
    
    // Check Victory condition
    if (correctMatches === 14) {
      triggerVictory();
    }
  } else {
    // Incorrect match
    comboCount = 0;
    playSound('error');
    
    if (currentGameMode === 'time_attack') {
      score = Math.max(score - 25, 0); // Lose 25 points
    }
    
    // Visual error indication
    anchorElement.classList.add('incorrect');
    setTimeout(() => {
      anchorElement.classList.remove('incorrect');
    }, 800);
    
    // Deselect
    if (selectedLabelCard) {
      selectedLabelCard.classList.remove('selected');
      selectedLabelCard = null;
    }
    if (selectedAnchorDot) {
      selectedAnchorDot.classList.remove('selected');
      selectedAnchorDot = null;
    }
    
    updateHudStats();
  }
}

// HUD updates
function updateHudStats() {
  // Accuracy
  let accPercent = 100;
  if (totalAttempts > 0) {
    accPercent = Math.round((correctMatches / totalAttempts) * 100);
  }
  elHudAccuracy.textContent = `${accPercent}%`;
  
  // Score
  elHudScore.textContent = score.toLocaleString();
  
  // Progress
  const progressPercent = Math.round((correctMatches / 14) * 100);
  elHudProgress.textContent = `${progressPercent}%`;
  elHudProgress.style.width = `${progressPercent}%`;
}

// ==================== LABELS DECK & CARDS ====================
function renderCardsDeck() {
  elLabelsDeck.innerHTML = '';
  
  // Pick all IDs and shuffle them
  const parts = Object.keys(heartAnatomy);
  
  // Durstenfeld Shuffle
  for (let i = parts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [parts[i], parts[j]] = [parts[j], parts[i]];
  }
  
  parts.forEach(partId => {
    const card = document.createElement('div');
    card.className = 'label-card';
    card.draggable = true;
    card.dataset.part = partId;
    
    // Bilingual text representation
    card.textContent = getLabelText(partId);
    
    // Check if it is already matched (during mid-game language toggle)
    const correspondingAnchor = document.querySelector(`.anchor-dot[data-part="${partId}"]`);
    if (correspondingAnchor && correspondingAnchor.classList.contains('correct')) {
      card.classList.add('correct');
    }
    
    // Drag events
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    
    // Tap events for mobile
    card.addEventListener('click', handleCardClick);
    
    elLabelsDeck.appendChild(card);
  });
}

// Card touch click handler
function handleCardClick(e) {
  const card = e.currentTarget;
  if (card.classList.contains('correct')) return;
  
  playSound('select');
  initAudio();
  
  if (selectedLabelCard === card) {
    // Tap again to deselect
    card.classList.remove('selected');
    selectedLabelCard = null;
  } else {
    // Highlight selection
    if (selectedLabelCard) {
      selectedLabelCard.classList.remove('selected');
    }
    card.classList.add('selected');
    selectedLabelCard = card;
    
    // If an anchor was already selected before tapping this card:
    if (selectedAnchorDot) {
      tryMatch(card.dataset.part, selectedAnchorDot.dataset.part, selectedAnchorDot);
    }
  }
}

// Drag & Drop event handlers
function handleDragStart(e) {
  initAudio();
  if (currentGameMode === 'study') {
    e.preventDefault();
    return;
  }
  
  const card = e.currentTarget;
  if (card.classList.contains('correct')) {
    e.preventDefault();
    return;
  }
  
  card.classList.add('dragging');
  e.dataTransfer.setData('text/plain', card.dataset.part);
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

// Attach Drag listeners to SVG Anchor dots
function setupSvgDragTargets() {
  anchorDots.forEach(anchor => {
    anchor.addEventListener('dragover', (e) => {
      e.preventDefault(); // Required to allow drop
      e.dataTransfer.dropEffect = 'move';
    });
    
    anchor.addEventListener('dragenter', (e) => {
      e.preventDefault();
      if (!anchor.classList.contains('correct')) {
        anchor.classList.add('selected');
      }
    });
    
    anchor.addEventListener('dragleave', () => {
      if (selectedAnchorDot !== anchor) {
        anchor.classList.remove('selected');
      }
    });
    
    anchor.addEventListener('drop', (e) => {
      e.preventDefault();
      anchor.classList.remove('selected');
      
      const cardPartId = e.dataTransfer.getData('text/plain');
      const anchorPartId = anchor.dataset.part;
      
      if (cardPartId) {
        tryMatch(cardPartId, anchorPartId, anchor);
      }
    });
  });
}

// ==================== GAME LOOPS & TIMERS ====================
function switchMode(newMode) {
  currentGameMode = newMode;
  elModeBadge.textContent = UI_TEXT[currentLang][`${newMode}Mode`];
  
  // Stop existing timer
  stopTimer();
  
  // Reset stats
  score = 0;
  timeElapsed = 0;
  totalAttempts = 0;
  correctMatches = 0;
  comboCount = 0;
  selectedLabelCard = null;
  selectedAnchorDot = null;
  
  // UI Panels toggle
  if (newMode === 'study') {
    elInfoPanel.classList.remove('hide');
    elDeckPanel.classList.add('hide');
    svgHeart.classList.add('study-active');
  } else {
    elInfoPanel.classList.add('hide');
    elDeckPanel.classList.remove('hide');
    svgHeart.classList.remove('study-active');
    
    // Generate label deck cards
    renderCardsDeck();
    
    if (newMode === 'time_attack') {
      startTimer();
    }
  }
  
  // Reset SVG elements state
  anchorDots.forEach(anchor => {
    anchor.className = 'anchor-dot';
  });
  anatomicalParts.forEach(part => {
    part.style.filter = 'none';
  });
  
  updateHudStats();
  updateUILanguage();
}

function startTimer() {
  timeElapsed = 0;
  elHudTimer.textContent = '00:00';
  
  timerInterval = setInterval(() => {
    timeElapsed++;
    const min = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
    const sec = (timeElapsed % 60).toString().padStart(2, '0');
    elHudTimer.textContent = `${min}:${sec}`;
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// ==================== VICTORY STATE ====================
function triggerVictory() {
  stopTimer();
  playSound('victory');
  
  // Confetti trigger
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.55 }
    });
  }
  
  // Set modal details
  const t = UI_TEXT[currentLang];
  document.querySelector('#modal-victory h2').textContent = t.victoryTitle;
  document.querySelector('#modal-victory p').textContent = t.victoryDesc;
  
  elResultMode.textContent = t[`${currentGameMode}Mode`] || currentGameMode;
  elResultScore.textContent = score.toLocaleString();
  
  // Format Time
  const min = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
  const sec = (timeElapsed % 60).toString().padStart(2, '0');
  elResultTime.textContent = `${min}:${sec}`;
  
  // Format Accuracy
  let accPercent = 100;
  if (totalAttempts > 0) {
    accPercent = Math.round((correctMatches / totalAttempts) * 100);
  }
  elResultAccuracy.textContent = `${accPercent}%`;
  
  // Show Leaderboard registration block ONLY for Time Attack mode
  if (currentGameMode === 'time_attack') {
    elLboardRegisterBox.classList.remove('hide');
    elPlayerNameInput.value = '';
  } else {
    elLboardRegisterBox.classList.add('hide');
  }
  
  // Display Victory Overlay
  modalVictory.classList.add('open');
}

// ==================== LEADERBOARD (LOCAL STORAGE) ====================
function getLeaderboard() {
  const data = localStorage.getItem('cardiomatch_leaderboard');
  return data ? JSON.parse(data) : [];
}

function saveLeaderboard(leaderboard) {
  localStorage.setItem('cardiomatch_leaderboard', JSON.stringify(leaderboard));
}

function registerScore() {
  const name = elPlayerNameInput.value.trim() || (currentLang === 'th' ? 'ผู้เล่นทั่วไป' : 'Guest');
  const leaderboard = getLeaderboard();
  
  const min = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
  const sec = (timeElapsed % 60).toString().padStart(2, '0');
  
  const newEntry = {
    name: name,
    score: score,
    time: `${min}:${sec}`,
    timestamp: Date.now()
  };
  
  leaderboard.push(newEntry);
  // Sort descending
  leaderboard.sort((a, b) => b.score - a.score);
  
  // Save Top 10
  saveLeaderboard(leaderboard.slice(0, 10));
  
  // Transition to Leaderboard modal
  modalVictory.classList.remove('open');
  showLeaderboard();
}

function showLeaderboard() {
  const leaderboard = getLeaderboard();
  elLeaderboardBody.innerHTML = '';
  
  if (leaderboard.length === 0) {
    const emptyRow = `
      <tr>
        <td colspan="4" style="text-align:center; color: var(--text-muted)">
          ${currentLang === 'th' ? 'ไม่มีข้อมูลคะแนนสูงสุด' : 'No records yet'}
        </td>
      </tr>
    `;
    elLeaderboardBody.innerHTML = emptyRow;
  } else {
    leaderboard.forEach((entry, index) => {
      // Gold, Silver, Bronze trophy indicators
      let trophy = '';
      if (index === 0) trophy = '<i class="fa-solid fa-trophy" style="color: #fbbf24"></i> ';
      else if (index === 1) trophy = '<i class="fa-solid fa-trophy" style="color: #cbd5e1"></i> ';
      else if (index === 2) trophy = '<i class="fa-solid fa-trophy" style="color: #b45309"></i> ';
      
      const row = `
        <tr>
          <td>${trophy}${index + 1}</td>
          <td>${escapeHTML(entry.name)}</td>
          <td class="text-glowing">${entry.score.toLocaleString()}</td>
          <td>${entry.time}</td>
        </tr>
      `;
      elLeaderboardBody.innerHTML += row;
    });
  }
  
  modalLeaderboard.classList.add('open');
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// ==================== MOBILE SHARING QR CODE ====================
function fetchLocalIpConfig() {
  // Query dynamic config file written by start-server.py
  fetch('config.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.url) {
        localServerUrl = data.url;
        elLocalUrlText.textContent = localServerUrl;
        generateQrCode(localServerUrl);
      }
    })
    .catch(() => {
      // Fallback
      localServerUrl = window.location.origin;
      elLocalUrlText.textContent = localServerUrl;
      generateQrCode(localServerUrl);
    });
}

function generateQrCode(url) {
  const qrContainer = document.getElementById('qrcode-box');
  qrContainer.innerHTML = '';
  
  if (typeof QRCode === 'function') {
    qrcodeInstance = new QRCode(qrContainer, {
      text: url,
      width: 180,
      height: 180,
      colorDark : "#05080f",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.M
    });
  } else {
    // Text fallback if QRCode CDN is blocked or slow
    qrContainer.innerHTML = `<a href="${url}" target="_blank" style="color:#090d16; font-size: 0.85rem">${url}</a>`;
  }
}

// ==================== EVENT BINDING & INIT ====================
function setupEventListeners() {
  // Mode selection
  elGameMode.addEventListener('change', (e) => {
    switchMode(e.target.value);
  });
  
  // Language button toggle
  elLangToggle.addEventListener('click', () => {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    updateUILanguage();
  });
  
  // Restart / Reset
  elBtnReset.addEventListener('click', () => {
    playSound('select');
    switchMode(currentGameMode);
  });
  
  // Anchor dots
  anchorDots.forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
  });
  
  // Leaderboard modal buttons
  elBtnLeaderboard.addEventListener('click', () => {
    playSound('select');
    showLeaderboard();
  });
  
  elBtnClearLboard.addEventListener('click', () => {
    if (confirm(currentLang === 'th' ? 'ต้องการล้างสถิติคะแนนทั้งหมดหรือไม่?' : 'Are you sure you want to clear all records?')) {
      saveLeaderboard([]);
      showLeaderboard();
    }
  });
  
  elBtnLboardClose.addEventListener('click', () => {
    modalLeaderboard.classList.remove('open');
  });
  
  // Victory modal buttons
  elBtnSubmitScore.addEventListener('click', registerScore);
  elPlayerNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      registerScore();
    }
  });
  
  elBtnVictoryReplay.addEventListener('click', () => {
    modalVictory.classList.remove('open');
    switchMode(currentGameMode);
  });
  
  elBtnVictoryClose.addEventListener('click', () => {
    modalVictory.classList.remove('open');
  });

  // Mobile sharing buttons
  elBtnMobileShare.addEventListener('click', () => {
    playSound('select');
    fetchLocalIpConfig();
    modalMobileShare.classList.add('open');
  });

  elBtnMobileClose.addEventListener('click', () => {
    modalMobileShare.classList.remove('open');
  });

  // Close modals when clicking overlay background
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });
  
  // Initialize drag zones
  setupSvgDragTargets();
}

// Initialise Application
function init() {
  setupEventListeners();
  switchMode('study'); // start with Study Mode
  fetchLocalIpConfig(); // cache local server configs
}

// Run!
window.addEventListener('DOMContentLoaded', init);
