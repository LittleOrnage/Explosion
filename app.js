const config = window.STORY_CONFIG;

let current = 0;
let answers = Array(config.questions.length).fill(null);
let selectedScores = Array(config.questions.length).fill(null);
let stats = {};
let q25Timer = null;
let q25Elements = [];
let grayMask = null;
let logs = [];

const total = config.questions.length;
const mainBox = document.getElementById("mainBox");
const diaryWrap = document.getElementById("diaryWrap");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const optionsEl = document.getElementById("options");
const questionEl = document.getElementById("question");
const progressEl = document.getElementById("progress");
const titleEl = document.getElementById("surveyTitle");
const bgm = document.getElementById("bgm");

titleEl.innerText = config.title;

const logPanel = document.createElement("aside");
logPanel.className = "system-log";
logPanel.innerHTML = "<div class='system-log-title'>SYSTEM LOG</div><div id='logLines'></div>";
document.body.appendChild(logPanel);

function addStats(score = {}) {
  Object.entries(score).forEach(([key, value]) => {
    stats[key] = (stats[key] || 0) + value;
  });
}

function removeStats(score = {}) {
  Object.entries(score).forEach(([key, value]) => {
    stats[key] = (stats[key] || 0) - value;
    if (stats[key] === 0) delete stats[key];
  });
}

function applyChoice(index, optionIndex, score = {}) {
  if (selectedScores[index]) removeStats(selectedScores[index]);
  selectedScores[index] = score;
  answers[index] = optionIndex;
  addStats(score);
}

function addLog(text) {
  if (!text) return;
  logs.push(text);
  if (logs.length > 6) logs = logs.slice(-6);
  renderLogs();
}

function renderLogs() {
  const lines = document.getElementById("logLines");
  lines.innerHTML = logs.map((line) => `<div class="log-line">${line}</div>`).join("");
  logPanel.classList.toggle("visible", current >= 10 || logs.length > 0);
}

function clearAllEffects() {
  if (current !== 24) stopPeepEffect();
  document.querySelectorAll(".float-text,.terror-mask,.fullscreen-love,.start-modal,.q16-modal,.submit-modal,.black-screen,.black-full-text,.end-modal,.corner-whisper,.profile-modal").forEach((el) => el.remove());
  document.documentElement.style.setProperty("background", "#f7f8fa");
  document.body.style.setProperty("background", "#f7f8fa");
  mainBox.style.opacity = "1";
  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

function stopPeepEffect() {
  if (q25Timer) clearInterval(q25Timer);
  q25Timer = null;
  q25Elements.forEach((el) => el.remove());
  q25Elements = [];
  if (grayMask) grayMask.remove();
  grayMask = null;
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("locked");
    opt.style.pointerEvents = "auto";
  });
}

function startPeepEffect() {
  stopPeepEffect();
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.add("locked");
    opt.style.pointerEvents = "none";
  });
  grayMask = document.createElement("div");
  grayMask.className = "q25-gray-mask";
  document.body.appendChild(grayMask);
  q25Timer = setInterval(() => {
    for (let i = 0; i < 12; i++) {
      const p = document.createElement("div");
      p.className = "peep-text";
      p.innerText = config.peepTexts[Math.floor(Math.random() * config.peepTexts.length)];
      p.style.left = `${Math.random() * 92}vw`;
      p.style.top = `${Math.random() * 92}vh`;
      document.body.appendChild(p);
      q25Elements.push(p);
    }
  }, 140);
  setTimeout(stopPeepEffect, 4200);
}

function openStartModal() {
  clearAllEffects();
  mainBox.style.display = "none";
  let idx = 0;
  const modal = document.createElement("div");
  modal.className = "start-modal";
  const textDom = document.createElement("div");
  textDom.className = "start-text";
  textDom.innerHTML = `<b style="font-size:16px;">${config.startSlides[idx]}</b>`;
  const redTip = document.createElement("div");
  redTip.className = "tiny-red-tip";
  redTip.innerText = config.warning;
  const btnDom = document.createElement("button");
  btnDom.className = "start-btn";
  btnDom.type = "button";
  btnDom.innerText = "继续";
  btnDom.onclick = () => {
    idx++;
    if (idx < config.startSlides.length) {
      textDom.innerHTML = `<b style="font-size:16px;">${config.startSlides[idx]}</b>`;
      if (idx === config.startSlides.length - 1) btnDom.innerText = "进入";
      return;
    }
    modal.remove();
    mainBox.style.display = "flex";
    renderQuestion();
  };
  modal.append(textDom, redTip, btnDom);
  document.body.appendChild(modal);
}

function showProfileModal() {
  const modal = document.createElement("div");
  modal.className = "profile-modal";
  modal.innerHTML = `<div class="profile-inner">${config.profileHtml}<button class="submit-btn" type="button" id="closeProfile">关闭资料</button></div>`;
  document.body.appendChild(modal);
  document.getElementById("closeProfile").onclick = () => modal.remove();
}

function showCornerWhisper(text) {
  const corner = document.createElement("div");
  corner.className = "corner-whisper";
  corner.innerText = text;
  document.body.appendChild(corner);
}

function renderQuestion() {
  clearAllEffects();
  const q = config.questions[current];
  progressEl.innerText = q.progressOverride || `第 ${current + 1} 题 / ${config.progressTotalLabel}`;
  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";
  mainBox.style.opacity = "1";
  if (q.log) addLog(q.log);
  if (q.corner) showCornerWhisper(q.corner);
  if (q.silenceBgm) bgm.pause();
  if (q.peep) setTimeout(startPeepEffect, 300);

  q.opt.forEach((item, idx) => {
    const div = document.createElement("button");
    div.type = "button";
    div.className = `option ${item.className || ""}`;
    if (answers[current] === idx) div.classList.add("selected");
    div.innerText = item.text;
    if (item.hoverText) {
      div.dataset.original = item.text;
      div.dataset.hover = item.hoverText;
      div.addEventListener("mouseenter", () => (div.innerText = item.hoverText));
      div.addEventListener("mouseleave", () => (div.innerText = item.text));
    }
    if (current === 13 && idx === 3) {
      div.addEventListener("mouseenter", () => optionsEl.classList.add("dim-others"));
      div.addEventListener("mouseleave", () => optionsEl.classList.remove("dim-others"));
    }
    div.onclick = () => chooseOption(div, idx, item);
    optionsEl.appendChild(div);
  });

  prevBtn.disabled = current === 0;
  nextBtn.innerText = current === total - 1 ? "提交选择" : "下一题";
}

function chooseOption(div, idx, item) {
  if (item.blockedText) {
    div.innerText = item.blockedText;
    div.classList.add("locked");
    addLog(item.blockedText);
    applyChoice(current, idx, item.score);
    return;
  }

  applyChoice(current, idx, item.score);
  document.querySelectorAll(".option").forEach((opt) => opt.classList.remove("selected"));
  div.classList.add("selected");
  addLog(`你选择了：${current >= 18 && idx !== 3 ? "第 0 名队友" : item.text.replace(/^[A-D]\.\s*/, "")}`);

  if (config.questions[current].profile) showProfileModal();
  if (current === total - 1) {
    showFinalResult(idx);
  }
}

function computeEnding(finalIndex) {
  if (stats.loop >= 5) return config.endings.loop;
  if (stats.escape >= 5 || finalIndex === 2) return config.endings.escape;
  if (stats.truth >= 5 || finalIndex === 3) return config.endings.truth;
  if (stats.depend >= 9 || finalIndex === 1) return config.endings.only;
  return config.endings.perfect;
}

function showFinalResult(finalIndex) {
  clearAllEffects();
  mainBox.style.display = "none";
  const modal = document.createElement("div");
  modal.className = "black-full-text result-screen";
  const key = ["A", "B", "C", "D"][finalIndex];
  const lines = config.finalLines[key];
  const ending = computeEnding(finalIndex);
  modal.innerHTML = `<div class="result-lines"></div><button class="red-confirm-btn" style="display:none;" type="button">查看测评报告</button>`;
  document.body.appendChild(modal);
  const resultLines = modal.querySelector(".result-lines");
  const btn = modal.querySelector(".red-confirm-btn");
  let i = 0;
  function showLine() {
    if (i < lines.length) {
      const div = document.createElement("div");
      div.innerText = lines[i];
      resultLines.appendChild(div);
      i++;
      setTimeout(showLine, 900);
      return;
    }
    btn.style.display = "block";
  }
  showLine();
  btn.onclick = () => showEnding(modal, ending);
}

function showEnding(container, ending) {
  container.className = "submit-modal";
  container.innerHTML = `
    <div class="submit-modal-inner ending-report">
      <div class="fake-report">
        <div>你的最佳队伍构成为：</div>
        <div class="strike">前排 1，治疗 1，魔法 1，辅助 1</div>
        <div class="strike">斥候 1，军师 1，公会伙伴 1</div>
        <div class="final-recommend">推荐队友：我</div>
      </div>
      <div style="font-size:16px;font-weight:bold;margin:18px 0 12px;">${ending.title}</div>
      <div style="line-height:1.9;color:#333;">${ending.body}</div>
      <button class="submit-btn" id="restartBtn" type="button">重新测评</button>
    </div>
  `;
  document.getElementById("restartBtn").onclick = () => {
    container.remove();
    current = 0;
    answers = Array(total).fill(null);
    selectedScores = Array(total).fill(null);
    stats = {};
    logs = [];
    renderLogs();
    mainBox.style.display = "none";
    openStartModal();
  };
}

prevBtn.onclick = () => {
  clearAllEffects();
  if (current > 0) {
    current--;
    renderQuestion();
  }
};

nextBtn.onclick = () => {
  clearAllEffects();
  if (current < total - 1) {
    current++;
    renderQuestion();
  } else {
    showFinalResult(answers[current] ?? 0);
  }
};

function resetDiary() {
  diaryWrap.innerHTML = "";
  diaryWrap.style.display = "none";
}

function openBgm() {
  bgm.muted = false;
  bgm.volume = 0.45;
  bgm.play().catch(() => {});
  document.removeEventListener("click", openBgm);
  document.removeEventListener("touchstart", openBgm);
}

resetDiary();
bgm.muted = true;
bgm.play().catch(() => {});
document.addEventListener("click", openBgm);
document.addEventListener("touchstart", openBgm);
openStartModal();
