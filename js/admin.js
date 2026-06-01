// ═══════════════════════════════════════════════════════════════════════════
//  ADMIN PANEL  ·  內容管理
// ═══════════════════════════════════════════════════════════════════════════

// ── Admin password ────────────────────────────────────────────────────────
// ★ 在此修改管理員密碼（部署後記得更換）
const ADMIN_PASSWORD = 'teacher2024';

// ── Storage helpers (content + permissions) ───────────────────────────────
const ACMS = {
  // Content
  getQ: () => JSON.parse(localStorage.getItem('wpa_content_questions') || 'null'),
  setQ: d  => localStorage.setItem('wpa_content_questions', JSON.stringify(d)),
  getE: () => JSON.parse(localStorage.getItem('wpa_content_essays')   || 'null'),
  setE: d  => localStorage.setItem('wpa_content_essays',   JSON.stringify(d)),
  getG: () => JSON.parse(localStorage.getItem('wpa_content_grammar')  || 'null'),
  setG: d  => localStorage.setItem('wpa_content_grammar',  JSON.stringify(d)),
  // Admin permissions
  getAdmins:   ()       => JSON.parse(localStorage.getItem('wpa_admins') || '[]'),
  setAdmins:   arr      => localStorage.setItem('wpa_admins', JSON.stringify(arr)),
  isAdmin:     user     => !!user && ACMS.getAdmins().includes(user),
  addAdmin:    user     => { const a = ACMS.getAdmins(); if (!a.includes(user)) { a.push(user); ACMS.setAdmins(a); } },
  removeAdmin: user     => ACMS.setAdmins(ACMS.getAdmins().filter(u => u !== user)),
};

// ── Boot: load custom content, override globals ───────────────────────────
(function initAdminData() {
  const q = ACMS.getQ(), e = ACMS.getE(), g = ACMS.getG();
  if (q) questions      = q;
  if (e) modelEssays    = e;
  if (g) grammarLessons = g;
  if (q || e || g) { renderQuestions(); renderEssays(); renderGrammarTabs(); }

  updateAdminNavVisibility();
})();

// ── Permission helpers ────────────────────────────────────────────────────
function updateAdminNavVisibility() {
  const li  = document.querySelector('.admin-nav-link')?.closest('li');
  const btn = document.getElementById('adminAuthBtn');
  const isAdm = ACMS.isAdmin(currentUser);
  if (li)  li.style.display  = isAdm ? ''     : 'none';
  if (btn) btn.style.display = isAdm ? 'none' : '';
}

// ── Override updateUserUI to refresh admin visibility on user switch ───────
// Use window assignment (not function declaration) to avoid hoisting issues.
const _coreUpdateUserUI = updateUserUI;
window.updateUserUI = function() {
  _coreUpdateUserUI();
  updateAdminNavVisibility();
};

// ── Override navigate() ───────────────────────────────────────────────────
const _coreNavigate = navigate;
window.navigate = function(section) {
  if (section === 'admin') {
    if (!ACMS.isAdmin(currentUser)) {
      alert('此功能需要管理員權限');
      return;
    }
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById('admin').classList.add('active');
    document.querySelector('[data-section="admin"]')?.classList.add('active');
    activeSection = 'admin';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderAdminSection();
    return;
  }
  _coreNavigate(section);
};

// ── State ─────────────────────────────────────────────────────────────────
let adminTab = 'questions';
let editingQ  = null;
let editingE  = null;
let editingG  = null;

// ── Utilities ─────────────────────────────────────────────────────────────
function escapeHtml(s) {
  return (s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function nextId(arr) {
  return Math.max(0, ...arr.map(x => x.id)) + 1;
}

// ─────────────────────────────────────────────────────────────────────────
//  ADMIN SECTION RENDER
// ─────────────────────────────────────────────────────────────────────────
function renderAdminSection() {
  document.querySelector('[data-atab="questions"]').innerHTML =
    `📝 練習題目 <span class="admin-badge">${questions.length}</span>`;
  document.querySelector('[data-atab="essays"]').innerHTML =
    `🏆 高分範文 <span class="admin-badge">${modelEssays.length}</span>`;
  document.querySelector('[data-atab="grammar"]').innerHTML =
    `📚 文法教學 <span class="admin-badge">${grammarLessons.length}</span>`;
  document.querySelector('[data-atab="users"]').innerHTML =
    `👥 使用者 <span class="admin-badge">${STORAGE.getUsers().length}</span>`;

  document.querySelectorAll('.admin-tab-btn').forEach(t =>
    t.classList.toggle('active', t.dataset.atab === adminTab));

  renderAdminContent();
}

function switchAdminTab(tab) {
  adminTab = tab;
  document.querySelectorAll('.admin-tab-btn').forEach(t =>
    t.classList.toggle('active', t.dataset.atab === tab));
  renderAdminContent();
}

function renderAdminContent() {
  const el = document.getElementById('adminContent');
  if      (adminTab === 'questions') el.innerHTML = buildQList();
  else if (adminTab === 'essays')    el.innerHTML = buildEList();
  else if (adminTab === 'grammar')   el.innerHTML = buildGList();
  else if (adminTab === 'users')     el.innerHTML = buildUserList();
}

// ─────────────────────────────────────────────────────────────────────────
//  QUESTIONS TAB
// ─────────────────────────────────────────────────────────────────────────
function buildQList() {
  return `
    <div class="admin-list-hdr">
      <span class="admin-list-count">${questions.length} 道題目</span>
      <button class="btn-primary" style="font-size:0.83rem;padding:0.38rem 1rem"
        onclick="openQEdit(null)">＋ 新增題目</button>
    </div>
    <div class="admin-list">
      ${questions.map(q => `
        <div class="admin-row">
          <div class="admin-row-info">
            <span class="card-year">${escapeHtml(q.year)}</span>
            <span class="card-type">${escapeHtml(q.type)}</span>
            <span class="admin-row-title">${escapeHtml(q.title)}</span>
          </div>
          <div class="admin-row-actions">
            <button class="btn-outline admin-action-btn"
              onclick="openQEdit(${q.id})">✏️ 編輯</button>
            <button class="admin-del-btn"
              onclick="deleteQuestion(${q.id})">🗑</button>
          </div>
        </div>`).join('')}
    </div>`;
}

function openQEdit(id) {
  editingQ = id ? questions.find(q => q.id === id) : null;
  const q  = editingQ;
  document.getElementById('qEditTitle').textContent    = q ? '編輯題目' : '新增題目';
  document.getElementById('qYear').value               = q?.year        || '';
  document.getElementById('qType').value               = q?.type        || '看圖寫作';
  document.getElementById('qTitle').value              = q?.title       || '';
  document.getElementById('qDesc').value               = q?.desc        || '';
  document.getElementById('qPrompt').value             = q?.prompt      || '';
  document.getElementById('qWordMin').value            = q?.wordMin     || 120;
  document.getElementById('qWordSuggest').value        = q?.wordSuggest || '150–180';
  document.getElementById('qTimeMin').value            = q?.timeMin     || 40;
  document.getElementById('qTags').value               = (q?.tags || []).join(', ');
  openModal('qEditModal');
}

function saveQuestion() {
  const year        = document.getElementById('qYear').value.trim();
  const type        = document.getElementById('qType').value;
  const title       = document.getElementById('qTitle').value.trim();
  const desc        = document.getElementById('qDesc').value.trim();
  const prompt      = document.getElementById('qPrompt').value.trim();
  const wordMin     = parseInt(document.getElementById('qWordMin').value)     || 120;
  const wordSuggest = document.getElementById('qWordSuggest').value.trim()    || '150–180';
  const timeMin     = parseInt(document.getElementById('qTimeMin').value)     || 40;
  const tags        = document.getElementById('qTags').value
                        .split(',').map(t => t.trim()).filter(Boolean);
  if (!title || !prompt) { alert('請填寫「題目標題」與「完整題目說明」'); return; }

  const obj = {
    id: editingQ?.id || nextId(questions),
    year, type, title, desc, prompt, wordMin, wordSuggest, timeMin, tags
  };
  if (editingQ) {
    questions[questions.findIndex(q => q.id === editingQ.id)] = obj;
  } else {
    questions.push(obj);
  }
  ACMS.setQ(questions);
  closeModal('qEditModal');
  renderAdminSection();
  renderQuestions();
  showAdminToast('題目已儲存');
}

function deleteQuestion(id) {
  const q = questions.find(x => x.id === id);
  if (!confirm(`確定要刪除「${q?.title}」？`)) return;
  questions = questions.filter(q => q.id !== id);
  ACMS.setQ(questions);
  renderAdminSection();
  renderQuestions();
}

// ─────────────────────────────────────────────────────────────────────────
//  ESSAYS TAB
// ─────────────────────────────────────────────────────────────────────────
function buildEList() {
  return `
    <div class="admin-list-hdr">
      <span class="admin-list-count">${modelEssays.length} 篇範文</span>
      <button class="btn-primary" style="font-size:0.83rem;padding:0.38rem 1rem"
        onclick="openEEdit(null)">＋ 新增範文</button>
    </div>
    <div class="admin-list">
      ${modelEssays.map(e => `
        <div class="admin-row">
          <div class="admin-row-info">
            <span class="admin-score-pill">🏆 ${e.score}/20</span>
            <span class="admin-row-title">${escapeHtml(e.title)}</span>
          </div>
          <div class="admin-row-actions">
            <button class="btn-outline admin-action-btn"
              onclick="openEEdit(${e.id})">✏️ 編輯</button>
            <button class="admin-del-btn"
              onclick="deleteEssay(${e.id})">🗑</button>
          </div>
        </div>`).join('')}
    </div>`;
}

function openEEdit(id) {
  editingE = id ? modelEssays.find(e => e.id === id) : null;
  const e  = editingE;
  document.getElementById('eEditTitle').textContent = e ? '編輯範文' : '新增範文';
  document.getElementById('eTitle').value           = e?.title || '';
  document.getElementById('eTags').value            = (e?.tags || []).join(', ');
  document.getElementById('eEssay').value           = e?.essay || '';
  document.getElementById('eRelatedQ').innerHTML =
    `<option value="0">（無對應題目）</option>` +
    questions.map(q =>
      `<option value="${q.id}" ${e?.relatedQId === q.id ? 'selected' : ''}>
        ${escapeHtml(q.title)}</option>`
    ).join('');
  document.getElementById('eScoreContent').value = e?.scoreBreakdown?.content      ?? 5;
  document.getElementById('eScoreOrg').value     = e?.scoreBreakdown?.organization ?? 5;
  document.getElementById('eScoreLang').value    = e?.scoreBreakdown?.language     ?? 5;
  document.getElementById('eScoreVocab').value   = e?.scoreBreakdown?.vocab        ?? 5;
  updateEssayScore();
  document.getElementById('annotationsContainer').innerHTML =
    (e?.annotations || []).map(a => buildAnnotationRow(a)).join('');
  openModal('eEditModal');
}

function buildAnnotationRow(a) {
  return `
    <div class="annotation-edit-row">
      <input type="text" class="ann-input ann-sentence"
        value="${escapeHtml(a?.sentence || '')}" placeholder="佳句片段（英文原句）">
      <input type="text" class="ann-input ann-note"
        value="${escapeHtml(a?.note || '')}" placeholder="解析說明（繁體中文）">
      <button class="ann-remove-btn"
        onclick="this.closest('.annotation-edit-row').remove()">✕</button>
    </div>`;
}

function addAnnotation() {
  document.getElementById('annotationsContainer')
    .insertAdjacentHTML('beforeend', buildAnnotationRow({}));
}

function updateEssayScore() {
  const total = ['eScoreContent','eScoreOrg','eScoreLang','eScoreVocab']
    .reduce((sum, id) => sum + (parseInt(document.getElementById(id)?.value) || 0), 0);
  const el = document.getElementById('eScoreTotal');
  if (el) el.textContent = total;
}

function saveEssay() {
  const title = document.getElementById('eTitle').value.trim();
  const essay = document.getElementById('eEssay').value.trim();
  if (!title || !essay) { alert('請填寫「範文標題」與「範文內容」'); return; }

  const relatedQId   = parseInt(document.getElementById('eRelatedQ').value)      || 0;
  const content      = parseInt(document.getElementById('eScoreContent').value)  || 0;
  const organization = parseInt(document.getElementById('eScoreOrg').value)      || 0;
  const language     = parseInt(document.getElementById('eScoreLang').value)     || 0;
  const vocab        = parseInt(document.getElementById('eScoreVocab').value)    || 0;
  const score        = content + organization + language + vocab;
  const tags         = document.getElementById('eTags').value
                         .split(',').map(t => t.trim()).filter(Boolean);
  const annotations  = Array.from(
    document.querySelectorAll('#annotationsContainer .annotation-edit-row')
  ).map(row => ({
    sentence: row.querySelector('.ann-sentence').value.trim(),
    note:     row.querySelector('.ann-note').value.trim()
  })).filter(a => a.sentence || a.note);
  const preview = essay.replace(/\n+/g, ' ').substring(0, 140) + '...';

  const obj = {
    id: editingE?.id || nextId(modelEssays),
    title, relatedQId, score,
    scoreBreakdown: { content, organization, language, vocab },
    tags, preview, essay, annotations
  };
  if (editingE) {
    modelEssays[modelEssays.findIndex(e => e.id === editingE.id)] = obj;
  } else {
    modelEssays.push(obj);
  }
  ACMS.setE(modelEssays);
  closeModal('eEditModal');
  renderAdminSection();
  renderEssays();
  showAdminToast('範文已儲存');
}

function deleteEssay(id) {
  const e = modelEssays.find(x => x.id === id);
  if (!confirm(`確定要刪除「${e?.title}」？`)) return;
  modelEssays = modelEssays.filter(e => e.id !== id);
  ACMS.setE(modelEssays);
  renderAdminSection();
  renderEssays();
}

// ─────────────────────────────────────────────────────────────────────────
//  GRAMMAR TAB
// ─────────────────────────────────────────────────────────────────────────
function buildGList() {
  return `
    <div class="admin-list-hdr">
      <span class="admin-list-count">${grammarLessons.length} 個單元</span>
      <span style="font-size:0.81rem;color:var(--text-muted)">
        如需新增文法單元，請先「匯出 data.js」後手動新增再匯入
      </span>
    </div>
    <div class="admin-list">
      ${grammarLessons.map(g => `
        <div class="admin-row">
          <div class="admin-row-info">
            <span class="admin-row-title">${escapeHtml(g.name)}</span>
            <span style="font-size:0.78rem;color:var(--text-muted)">
              ${g.patterns.length} 個句型 · ${g.vocab.length} 個詞彙
            </span>
          </div>
          <div class="admin-row-actions">
            <button class="btn-outline admin-action-btn"
              onclick="openGEdit('${g.id}')">✏️ 編輯</button>
          </div>
        </div>`).join('')}
    </div>`;
}

function openGEdit(id) {
  editingG = grammarLessons.find(l => l.id === id);
  if (!editingG) return;
  document.getElementById('gEditTitle').textContent = '編輯文法單元';
  document.getElementById('gId').value              = editingG.id;
  document.getElementById('gName').value            = editingG.name;
  document.getElementById('gIntro').value           = editingG.intro;
  document.getElementById('gPatterns').value        = JSON.stringify(editingG.patterns, null, 2);
  document.getElementById('gVocab').value           = JSON.stringify(editingG.vocab,    null, 2);
  openModal('gEditModal');
}

function saveGrammar() {
  const id    = document.getElementById('gId').value.trim();
  const name  = document.getElementById('gName').value.trim();
  const intro = document.getElementById('gIntro').value.trim();
  if (!name) { alert('請填寫單元名稱'); return; }

  let patterns, vocab;
  try   { patterns = JSON.parse(document.getElementById('gPatterns').value || '[]'); }
  catch { alert('「句型列表」JSON 格式錯誤，請修正後再儲存'); return; }
  try   { vocab    = JSON.parse(document.getElementById('gVocab').value    || '[]'); }
  catch { alert('「詞彙列表」JSON 格式錯誤，請修正後再儲存'); return; }

  const idx = grammarLessons.findIndex(l => l.id === id);
  if (idx !== -1) grammarLessons[idx] = { id, name, intro, patterns, vocab };
  ACMS.setG(grammarLessons);
  closeModal('gEditModal');
  renderAdminSection();
  renderGrammarTabs();
  switchGrammarTab(id);
  showAdminToast('文法單元已儲存');
}

// ─────────────────────────────────────────────────────────────────────────
//  USERS TAB
// ─────────────────────────────────────────────────────────────────────────
function buildUserList() {
  const users  = STORAGE.getUsers();
  const admins = ACMS.getAdmins();

  if (users.length === 0) {
    return '<div class="empty-state">目前沒有任何使用者</div>';
  }

  return `
    <div class="admin-list-hdr">
      <span class="admin-list-count">${users.length} 位使用者</span>
      <span style="font-size:0.81rem;color:var(--text-muted)">
        只有管理員可以進入此頁面
      </span>
    </div>
    <div class="admin-list">
      ${users.map(u => {
        const isAdm    = admins.includes(u);
        const isSelf   = u === currentUser;
        const onlyAdm  = admins.length === 1 && isAdm;
        const wCount   = STORAGE.getWritings(u).length;
        return `
          <div class="admin-row">
            <div class="admin-row-info">
              <span class="admin-row-title">${escapeHtml(u)}</span>
              ${isAdm
                ? '<span class="admin-role-pill">👑 管理員</span>'
                : '<span class="user-role-pill">一般使用者</span>'}
              ${isSelf ? '<span class="admin-self-tag">（目前登入）</span>' : ''}
              <span style="font-size:0.78rem;color:var(--text-muted)">${wCount} 篇作文</span>
            </div>
            <div class="admin-row-actions">
              ${isAdm
                ? `<button class="btn-outline admin-action-btn"
                     onclick="toggleAdmin('${escapeHtml(u)}', false)"
                     ${onlyAdm ? 'disabled title="至少須保留一位管理員"' : ''}>
                     移除管理員
                   </button>`
                : `<button class="btn-outline admin-action-btn"
                     onclick="toggleAdmin('${escapeHtml(u)}', true)">
                     設為管理員
                   </button>`
              }
              <button class="admin-del-btn"
                onclick="deleteUser('${escapeHtml(u)}')"
                ${isSelf ? 'disabled title="無法刪除目前登入的使用者"' : ''}>🗑</button>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

function toggleAdmin(username, makeAdmin) {
  if (makeAdmin) {
    ACMS.addAdmin(username);
    showAdminToast(`「${username}」已設為管理員`);
  } else {
    if (ACMS.getAdmins().length <= 1) {
      alert('至少須保留一位管理員，無法移除');
      return;
    }
    ACMS.removeAdmin(username);
    showAdminToast(`「${username}」的管理員權限已移除`);
  }
  updateAdminNavVisibility();
  renderAdminSection();
}

function deleteUser(username) {
  if (username === currentUser) {
    alert('無法刪除目前登入的使用者\n請先切換到其他使用者，再刪除此帳號');
    return;
  }
  const wCount = STORAGE.getWritings(username).length;
  const msg = wCount > 0
    ? `確定要刪除使用者「${username}」？\n\n此操作將同時刪除他的 ${wCount} 篇作文紀錄，且無法復原。`
    : `確定要刪除使用者「${username}」？\n\n此操作無法復原。`;
  if (!confirm(msg)) return;

  STORAGE.setUsers(STORAGE.getUsers().filter(u => u !== username));
  localStorage.removeItem(`wpa_w_${username}`);
  ACMS.removeAdmin(username);

  renderAdminSection();
  showAdminToast(`使用者「${username}」已刪除`);
}

// ─────────────────────────────────────────────────────────────────────────
//  EXPORT & RESET
// ─────────────────────────────────────────────────────────────────────────
function adminExportDataJS() {
  const s = obj => JSON.stringify(obj, null, 2);
  const content =
`let questions = ${s(questions)};

let modelEssays = ${s(modelEssays)};

let grammarLessons = ${s(grammarLessons)};
`;
  const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'data.js'; a.click();
  URL.revokeObjectURL(url);
  setTimeout(() => alert(
    '✓ data.js 已下載！\n\n' +
    '請將下載的檔案取代 js/data.js，讓變更在所有裝置上生效。\n\n' +
    '提示：即使不替換檔案，目前的修改也已自動儲存在此瀏覽器中，重新整理後仍會保留。'
  ), 150);
}

function adminResetDefaults() {
  if (!confirm(
    '確定要還原為預設值嗎？\n\n' +
    '這將清除管理面板中的所有修改（題目、範文、文法教學），\n' +
    '但不會影響使用者的作文練習紀錄。\n\n' +
    '建議先點「匯出 data.js」備份後再還原。'
  )) return;
  localStorage.removeItem('wpa_content_questions');
  localStorage.removeItem('wpa_content_essays');
  localStorage.removeItem('wpa_content_grammar');
  location.reload();
}

// ─────────────────────────────────────────────────────────────────────────
//  ADMIN PASSWORD AUTHENTICATION
// ─────────────────────────────────────────────────────────────────────────
function showAdminPasswordModal() {
  if (ACMS.isAdmin(currentUser)) return;
  document.getElementById('adminPwInput').value = '';
  document.getElementById('adminPwError').textContent = '';
  document.getElementById('adminPwModal').style.display = 'flex';
  setTimeout(() => document.getElementById('adminPwInput').focus(), 50);
}

function confirmAdminPassword() {
  const pw = document.getElementById('adminPwInput').value;
  if (pw === ADMIN_PASSWORD) {
    ACMS.addAdmin(currentUser);
    closeModal('adminPwModal');
    updateAdminNavVisibility();
    showAdminToast(`「${currentUser}」已升級為管理員`);
  } else {
    document.getElementById('adminPwError').textContent = '密碼錯誤，請再試一次';
    document.getElementById('adminPwInput').select();
  }
}

// ── Toast feedback ────────────────────────────────────────────────────────
function showAdminToast(msg) {
  const t = document.getElementById('saveToast');
  t.textContent   = '✓ ' + msg;
  t.style.display = 'block';
  t.classList.add('toast-show');
  setTimeout(() => {
    t.classList.remove('toast-show');
    setTimeout(() => { t.style.display = 'none'; t.textContent = '✓ 作文已儲存'; }, 300);
  }, 2000);
}
