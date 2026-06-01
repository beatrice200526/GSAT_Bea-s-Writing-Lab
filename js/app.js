// ── State ────────────────────────────────────────────────────────────────────
let activeSection      = 'home';
let activeGrammarTab   = 'transitions';
let timer              = null;
let timerSeconds       = 0;
let timerRunning       = false;
let selectedTimerMin   = 40;
let currentQuestion    = null;

// Flashcard state
let fcDeckId    = 'vocab-upgrade';
let fcIndex     = 0;
let fcFlipped   = false;
let fcOrder     = [];   // shuffled index array

// ── Navigation ───────────────────────────────────────────────────────────────
function navigate(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(section)?.classList.add('active');
  document.querySelector(`[data-section="${section}"]`)?.classList.add('active');
  activeSection = section;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (section === 'practice')      renderQuestions();
  if (section === 'writing-guide') renderWritingGuide();
  if (section === 'flashcards')    initFlashcards();
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navigate(link.dataset.section));
});

// ── Modals ───────────────────────────────────────────────────────────────────
function openModal(id)  { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
  });
});

// ── Question Bank ────────────────────────────────────────────────────────────
function makeQuestionCard(q) {
  return `
    <div class="question-card" onclick="openQuestion(${q.id})">
      <div class="card-header">
        <span class="card-year-main">${q.year}</span>
        ${q.type ? `<span class="card-type">${q.type}</span>` : ''}
      </div>
      <div class="card-footer">
        <span class="card-time-badge">⏱ ${q.timeMin} 分鐘</span>
        <button class="start-btn">開始練習</button>
      </div>
    </div>
  `;
}

function renderQuestions() {
  const grid = document.getElementById('questionGrid');
  const gakuso = questions.filter(q => q.exam === '學測');
  const shikao = questions.filter(q => q.exam === '指考');

  grid.innerHTML = `
    <div class="exam-section-block">
      <div class="exam-section-header">
        <div class="exam-section-line"></div>
        <h3 class="exam-section-title">學測英文作文</h3>
        <div class="exam-section-line"></div>
      </div>
      <div class="question-subgrid">
        ${gakuso.map(makeQuestionCard).join('')}
      </div>
      <div class="exam-resource-bar">
        <span>更多歷年試題資源：</span>
        <a href="https://www.ceec.edu.tw/xmfile?xsmsid=0J052424829869345634" target="_blank" rel="noopener">
          前往大考中心下載歷年學測試題 ↗
        </a>
      </div>
    </div>

    <div class="exam-section-block">
      <div class="exam-section-header">
        <div class="exam-section-line"></div>
        <h3 class="exam-section-title">指考英文作文</h3>
        <div class="exam-section-line"></div>
      </div>
      <div class="question-subgrid">
        ${shikao.map(makeQuestionCard).join('')}
      </div>
      <div class="exam-resource-bar">
        <span>更多歷年試題資源：</span>
        <a href="https://www.ceec.edu.tw/xmfile?xsmsid=0J052427633128416650" target="_blank" rel="noopener">
          前往大考中心下載歷年指考試題 ↗
        </a>
      </div>
    </div>
  `;
}

// ── Practice Modal ───────────────────────────────────────────────────────────
function openQuestion(id) {
  const q = questions.find(x => x.id === id);
  if (!q) return;
  currentQuestion = q;

  document.getElementById('modalTitle').textContent = q.year;
  document.getElementById('modalMeta').textContent =
    q.exam === '指考'
      ? `${q.year} ・ 建議作答時間 ${q.timeMin} 分鐘`
      : `${q.year} ・ ${q.type} ・ 建議作答時間 ${q.timeMin} 分鐘`;

  document.getElementById('promptBox').innerHTML =
    (q.image ? `<img src="${q.image}" class="prompt-question-img" alt="${q.year} 題目圖片">` : '');

  // Reset timer to question's default duration
  selectedTimerMin = q.timeMin || 40;
  stopTimer();
  timerSeconds = selectedTimerMin * 60;
  timerRunning = false;
  updateTimerChoiceUI();
  document.getElementById('toggleTimerBtn').textContent = '開始計時';
  updateTimerDisplay();

  openModal('practiceModal');
}

// ── Timer ────────────────────────────────────────────────────────────────────
function setTimerDuration(min) {
  if (timerRunning) return;
  selectedTimerMin = min;
  timerSeconds = min * 60;
  updateTimerChoiceUI();
  updateTimerDisplay();
  document.getElementById('toggleTimerBtn').textContent = '開始計時';
}

function updateTimerChoiceUI() {
  document.getElementById('timer40Btn').classList.toggle('active', selectedTimerMin === 40);
  document.getElementById('timer45Btn').classList.toggle('active', selectedTimerMin === 45);
}

function startTimer() {
  if (timer) clearInterval(timer);
  timerRunning = true;
  timer = setInterval(() => {
    timerSeconds = Math.max(0, timerSeconds - 1);
    updateTimerDisplay();
    if (timerSeconds === 0) {
      stopTimer();
      document.getElementById('toggleTimerBtn').textContent = '時間到！';
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
  timerRunning = false;
}

function toggleTimer() {
  if (timerRunning) {
    stopTimer();
    document.getElementById('toggleTimerBtn').textContent = '繼續計時';
  } else {
    if (timerSeconds === 0) {
      timerSeconds = selectedTimerMin * 60;
      updateTimerDisplay();
    }
    startTimer();
    document.getElementById('toggleTimerBtn').textContent = '暫停計時';
  }
}

function resetTimer() {
  stopTimer();
  timerSeconds = selectedTimerMin * 60;
  document.getElementById('toggleTimerBtn').textContent = '開始計時';
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m  = Math.floor(timerSeconds / 60);
  const s  = timerSeconds % 60;
  const el = document.getElementById('timerDisplay');
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  el.className = 'timer-main';
  if (timerSeconds <= 300 && timerSeconds > 60) el.classList.add('warning');
  if (timerSeconds <= 60)                        el.classList.add('danger');
}

// ── Essays (範文欣賞) ─────────────────────────────────────────────────────────
const essayReferences = {
  gakuso: [
    { year: 115, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0Q077622448864496628', type: '主題式寫作' },
    { year: 114, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0P086574209329404252', type: '看圖寫作' },
    { year: 113, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0O089336014967309929', type: '主題式寫作' },
    { year: 112, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0N089635234967309929', type: '主題式寫作' },
    { year: 111, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0M090357391698958860', type: '看圖寫作' },
    { year: 110, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0L089568109203251304', type: '看圖寫作' },
    { year: 109, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0K084424073464370939', type: '看圖寫作' },
    { year: 108, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J109557470003759624', type: '看圖寫作' },
    { year: 107, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J074533073108869775', type: '看圖寫作' },
    { year: 106, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J073643235922952636', type: '看圖寫作' },
    { year: 105, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J073587054183172606', type: '主題式寫作' },
    { year: 104, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J073552678885145053', type: '主題式寫作' },
    { year: 103, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J073518045491907814', type: '看圖寫作' },
    { year: 102, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J072645157497857819', type: '看圖寫作' },
    { year: 101, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071624926253508127&sid=0J072612250064246536', type: '信函寫作' }
  ],
  shikao: [
    { year: 110, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071646661300229964&sid=0L273543232281594239' },
    { year: 109, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071646661300229964&sid=0K238387152838202727' },
    { year: 108, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071646661300229964&sid=0J242385882171227536' },
    { year: 107, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071646661300229964&sid=0J078584184402770688' },
    { year: 106, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071646661300229964&sid=0J078528581270649160' },
    { year: 105, url: 'https://www.ceec.edu.tw/xmdoc/cont?xsmsid=0J071646661300229964&sid=0J078499112500703930' }
  ]
};

function makeEssayCard(r, examLabel) {
  return `
    <div class="ref-card">
      <div class="ref-card-year-pill">${r.year} ${examLabel}</div>
      ${r.type ? `<div class="ref-card-type">${r.type}</div>` : ''}
      <div class="ref-card-subtitle">英文作文佳作</div>
      <a class="ref-card-link" href="${r.url}" target="_blank" rel="noopener">前往大考中心 ↗</a>
    </div>
  `;
}

function renderEssays() {
  document.getElementById('essayGrid').innerHTML = `
    <div class="essay-exam-section">
      <div class="exam-section-header">
        <div class="exam-section-line"></div>
        <h3 class="exam-section-title">學測英文作文佳作</h3>
        <div class="exam-section-line"></div>
      </div>
      <div class="ref-subgrid">
        ${essayReferences.gakuso.map(r => makeEssayCard(r, '學測')).join('')}
      </div>
      <div class="exam-resource-bar">
        <span>更多佳作資源：</span>
        <a href="https://www.ceec.edu.tw/xmdoc?xsmsid=0J071624926253508127" target="_blank" rel="noopener">
          前往大考中心學測英文作文佳作專區 ↗
        </a>
      </div>
    </div>

    <div class="essay-exam-section">
      <div class="exam-section-header">
        <div class="exam-section-line"></div>
        <h3 class="exam-section-title">指考英文作文佳作</h3>
        <div class="exam-section-line"></div>
      </div>
      <div class="ref-subgrid">
        ${essayReferences.shikao.map(r => makeEssayCard(r, '指考')).join('')}
      </div>
      <div class="exam-resource-bar">
        <span>更多佳作資源：</span>
        <a href="https://www.ceec.edu.tw/xmdoc?xsmsid=0J071646661300229964" target="_blank" rel="noopener">
          前往大考中心指考英文作文佳作專區 ↗
        </a>
      </div>
    </div>
  `;
}

function openEssay(id) {
  const e = modelEssays.find(x => x.id === id);
  if (!e) return;
  document.getElementById('essayModalTitle').textContent = `${e.title}（${e.score}/20 分）`;
  document.getElementById('essayModalBody').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.6rem;margin-bottom:1.25rem">
      ${[['內容',e.scoreBreakdown.content],['組織',e.scoreBreakdown.organization],
         ['語言',e.scoreBreakdown.language],['字彙',e.scoreBreakdown.vocab]].map(([l,v]) => `
        <div style="text-align:center;background:#f8fafc;padding:0.6rem;border-radius:8px;border:1px solid #e2e8f0">
          <div style="font-size:0.75rem;color:#64748b">${l}</div>
          <div style="font-size:1.3rem;font-weight:800;color:#1d4ed8">${v}<span style="font-size:0.75rem;font-weight:400;color:#94a3b8">/5</span></div>
        </div>`).join('')}
    </div>
    <div class="essay-full"><div class="essay-body-text">${e.essay}</div></div>
    <div class="annotation-list">
      <h4>💡 寫作亮點解析</h4>
      ${e.annotations.map((a,i) => `
        <div class="annotation-item">
          <div class="annotation-num">${i+1}</div>
          <div class="annotation-text">
            <strong>「${a.sentence}」</strong><br>${a.note}
          </div>
        </div>`).join('')}
    </div>`;
  openModal('essayModal');
}

// ── Grammar ──────────────────────────────────────────────────────────────────
function renderGrammarTabs() {
  const grammarGroup = grammarLessons.filter(l => l.category === 'grammar');
  const topicGroup   = grammarLessons.filter(l => l.category === 'topic');

  const makeTabs = arr => arr.map(l => `
    <button class="grammar-tab ${l.id === activeGrammarTab ? 'active' : ''}"
      onclick="switchGrammarTab('${l.id}')">${l.name}</button>
  `).join('');

  document.getElementById('grammarTabs').innerHTML = `
    <div class="grammar-tab-group">
      <div class="grammar-tab-group-label">文法句型</div>
      <div class="grammar-tab-row">${makeTabs(grammarGroup)}</div>
    </div>
    <div class="grammar-tab-group">
      <div class="grammar-tab-group-label">依據不同寫作主題的架構句型</div>
      <div class="grammar-tab-row">${makeTabs(topicGroup)}</div>
    </div>
  `;
  renderGrammarLesson();
}

function switchGrammarTab(id) {
  activeGrammarTab = id;
  document.querySelectorAll('.grammar-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[onclick="switchGrammarTab('${id}')"]`)?.classList.add('active');
  renderGrammarLesson();
}

function renderGrammarLesson() {
  const lesson = grammarLessons.find(l => l.id === activeGrammarTab);
  if (!lesson) return;

  const patternsHtml = lesson.patterns.map(p => `
    <div class="pattern-card">
      <div class="pattern-name">${p.name}</div>
      <div class="pattern-formula">${p.formula}</div>
      ${p.examples.map(ex => `
        <div class="pattern-example">
          <div class="en">${ex.en}</div>
          <div class="zh">${ex.zh}</div>
        </div>`).join('')}
      ${p.tip ? `<div class="pattern-tip">💡 ${p.tip}</div>` : ''}
    </div>`).join('');

  const vocabHtml = lesson.vocab.length ? `
    <div class="vocab-grid">
      ${lesson.vocab.map(v => `
        <div class="vocab-item">
          <div class="vocab-word">${v.word}</div>
          <div class="vocab-cn">${v.cn}</div>
          <div class="vocab-example">${v.example}</div>
        </div>`).join('')}
    </div>` : '';

  document.getElementById('grammarContent').innerHTML = `
    <div class="grammar-lesson active">
      <h3>${lesson.name}</h3>
      <p class="lesson-intro">${lesson.intro}</p>
      ${patternsHtml ? `<div class="pattern-list">${patternsHtml}</div>` : ''}
      ${vocabHtml}
    </div>`;
}

// ── Flashcards ───────────────────────────────────────────────────────────────
function getFcDeck()  { return flashcardDecks.find(d => d.id === fcDeckId); }
function getFcCard()  { return getFcDeck().cards[fcOrder[fcIndex]]; }

function initFlashcards() {
  // Build ordered index array (sequential on first load)
  const deck = getFcDeck();
  if (fcOrder.length !== deck.cards.length || fcDeckId !== fcDeckId) {
    fcOrder = deck.cards.map((_, i) => i);
  }
  fcIndex   = 0;
  fcFlipped = false;
  renderFcDeckTabs();
  renderFcCard();
}

function renderFcDeckTabs() {
  document.getElementById('fcDeckTabs').innerHTML = flashcardDecks.map(d => `
    <button class="fc-deck-tab ${d.id === fcDeckId ? 'active' : ''}"
      onclick="switchFcDeck('${d.id}')">
      <span class="fc-deck-icon">${d.icon}</span> ${d.name}
      <span class="fc-deck-count">${d.cards.length}</span>
    </button>
  `).join('');
}

function renderFcCard() {
  const deck = getFcDeck();
  const card = getFcCard();

  // Unflip
  fcFlipped = false;
  const el = document.getElementById('fcCard');
  el.classList.remove('flipped');

  // Front face
  document.getElementById('fcFront').innerHTML = `
    <div class="fc-front-sub">${card.frontSub || ''}</div>
    <div class="fc-front-term">${card.front}</div>
    <div class="fc-front-tap">點擊翻面 ↕</div>
  `;

  // Back face
  document.getElementById('fcBack').innerHTML = `
    ${card.backNote ? `<div class="fc-back-note">${card.backNote}</div>` : ''}
    <div class="fc-back-answer">${card.back}</div>
    ${card.example  ? `<div class="fc-back-example">"${card.example}"</div>` : ''}
  `;

  // Progress
  const total = deck.cards.length;
  const cur   = fcIndex + 1;
  document.getElementById('fcProgressFill').style.width  = `${(cur / total) * 100}%`;
  document.getElementById('fcProgressLabel').textContent = `${cur} / ${total}`;
  document.getElementById('fcHint').textContent = '點擊卡片查看答案 ↕';
}

function flipFlashcard() {
  fcFlipped = !fcFlipped;
  document.getElementById('fcCard').classList.toggle('flipped', fcFlipped);
  document.getElementById('fcHint').textContent = fcFlipped ? '點擊翻回正面 ↕' : '點擊卡片查看答案 ↕';
}

function nextCard() {
  fcIndex = (fcIndex + 1) % getFcDeck().cards.length;
  renderFcCard();
}

function prevCard() {
  fcIndex = (fcIndex - 1 + getFcDeck().cards.length) % getFcDeck().cards.length;
  renderFcCard();
}

function switchFcDeck(id) {
  fcDeckId = id;
  fcOrder  = getFcDeck().cards.map((_, i) => i);
  fcIndex  = 0;
  renderFcDeckTabs();
  renderFcCard();
}

function shuffleDeck() {
  const n = getFcDeck().cards.length;
  fcOrder = Array.from({length: n}, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcOrder[i], fcOrder[j]] = [fcOrder[j], fcOrder[i]];
  }
  fcIndex = 0;
  renderFcCard();
}

// Keyboard navigation for flashcards
document.addEventListener('keydown', e => {
  if (activeSection !== 'flashcards') return;
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft')  prevCard();
  if (e.key === ' ') { e.preventDefault(); flipFlashcard(); }
});

// ── Standalone Timer (Practice section) ──────────────────────────────────────
let saTimerSeconds  = 40 * 60;
let saSelectedMin   = 40;
let saTimer         = null;
let saTimerRunning  = false;

function setSaTimerDuration(min) {
  if (saTimerRunning) return;
  saSelectedMin   = min;
  saTimerSeconds  = min * 60;
  document.getElementById('saTimer40Btn').classList.toggle('active', min === 40);
  document.getElementById('saTimer45Btn').classList.toggle('active', min === 45);
  document.getElementById('saToggleTimerBtn').textContent = '開始計時';
  updateSaTimerDisplay();
}

function updateSaTimerDisplay() {
  const el = document.getElementById('saTimerDisplay');
  if (!el) return;
  const m = Math.floor(saTimerSeconds / 60);
  const s = saTimerSeconds % 60;
  el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  el.className = 'timer-main';
  if (saTimerSeconds <= 300 && saTimerSeconds > 60) el.classList.add('warning');
  if (saTimerSeconds <= 60)                         el.classList.add('danger');
}

function toggleSaTimer() {
  if (saTimerRunning) {
    clearInterval(saTimer); saTimer = null; saTimerRunning = false;
    document.getElementById('saToggleTimerBtn').textContent = '繼續計時';
  } else {
    if (saTimerSeconds === 0) { saTimerSeconds = saSelectedMin * 60; updateSaTimerDisplay(); }
    saTimerRunning = true;
    saTimer = setInterval(() => {
      saTimerSeconds = Math.max(0, saTimerSeconds - 1);
      updateSaTimerDisplay();
      if (saTimerSeconds === 0) {
        clearInterval(saTimer); saTimer = null; saTimerRunning = false;
        document.getElementById('saToggleTimerBtn').textContent = '時間到！';
      }
    }, 1000);
    document.getElementById('saToggleTimerBtn').textContent = '暫停計時';
  }
}

function resetSaTimer() {
  clearInterval(saTimer); saTimer = null; saTimerRunning = false;
  saTimerSeconds = saSelectedMin * 60;
  document.getElementById('saToggleTimerBtn').textContent = '開始計時';
  updateSaTimerDisplay();
}

function navigateToTimer() {
  navigate('practice');
  setTimeout(() => {
    const el = document.getElementById('practiceTimerSection');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 150);
}

// ── Writing Guide ─────────────────────────────────────────────────────────────
function renderWritingGuide() {
  const gsat = writingGuides.filter(g => g.exam === '學測');
  const jce  = writingGuides.filter(g => g.exam === '指考');

  function makeCards(arr) {
    return arr.map(g => {
      const structHtml = g.structure.map(s => `<li>${s}</li>`).join('');
      const tipsHtml   = g.tips.map(t => `<li>${t}</li>`).join('');
      const promptHtml = g.prompt
        ? `<div class="wg-prompt"><div class="wg-section-title">📝 原題摘要</div><div class="wg-prompt-text">${g.prompt.replace(/\n/g, '<br>')}</div></div>`
        : '';
      const vocabHtml  = g.vocab
        ? `<div class="wg-vocab"><span class="wg-vocab-label">💡 詞彙 / 句型</span>${g.vocab}</div>`
        : '';
      return `
        <div class="wg-card" id="wg-${g.relatedQId}">
          <button class="wg-header" onclick="toggleGuideCard(this)">
            <div class="wg-header-left">
              <span class="wg-year">${g.year}</span>
              <span class="wg-type">${g.typeIcon} ${g.type}</span>
            </div>
            <span class="wg-arrow">›</span>
          </button>
          <div class="wg-body" style="display:none">
            ${promptHtml}
            <div class="wg-section">
              <div class="wg-section-title">📐 建議段落結構</div>
              <ol class="wg-list">${structHtml}</ol>
            </div>
            <div class="wg-section">
              <div class="wg-section-title">🎯 拿高分策略</div>
              <ul class="wg-list">${tipsHtml}</ul>
            </div>
            ${vocabHtml}
          </div>
        </div>`;
    }).join('');
  }

  document.getElementById('writingGuideContent').innerHTML = `
    <div class="wg-group">
      <div class="wg-group-label">學測（學科能力測驗）</div>
      ${makeCards(gsat)}
    </div>
    <div class="wg-group">
      <div class="wg-group-label">指考（大學指定科目考試）</div>
      ${makeCards(jce)}
    </div>`;
}

function toggleGuideCard(btn) {
  const body  = btn.nextElementSibling;
  const arrow = btn.querySelector('.wg-arrow');
  const isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
  btn.classList.toggle('open', !isOpen);
}

// ── Init ─────────────────────────────────────────────────────────────────────
renderQuestions();
renderEssays();
renderGrammarTabs();
renderWritingGuide();
