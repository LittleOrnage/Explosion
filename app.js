const config = window.STORY_CONFIG;
let current = 0;
let answers = Array(config.questions.length).fill(null);
let fromQ4ToQ5 = false;
let q5Timer = null;
let q25Timer = null;
let q25Elements = [];
let grayMask = null;
let wrongCount = 0;
let q25Locked = false;

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

function clearAllEffects() {
  if (current !== 24) stopQ25Effect();
  if (q5Timer) clearTimeout(q5Timer);
  document.querySelectorAll(".float-text,.terror-mask,.fullscreen-love,.start-modal,.q16-modal,.submit-modal,.black-screen,.black-full-text,.end-modal").forEach((el) => el.remove());
  document.documentElement.style.setProperty("background", "#f7f8fa");
  document.body.style.setProperty("background", "#f7f8fa");
  mainBox.style.opacity = "1";
  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

function resetDiary() {
  diaryWrap.innerHTML = "";
  config.diary.forEach((page, index) => {
    const section = document.createElement("section");
    section.className = `diary-page${index === 0 ? " active" : ""}${page.final ? " final-page" : ""}`;
    section.dataset.page = index;
    if (page.date) {
      const date = document.createElement("div");
      date.className = "diary-date";
      date.innerText = page.date;
      section.appendChild(date);
    }
    const content = document.createElement("div");
    content.className = "diary-content";
    content.innerHTML = page.html;
    section.appendChild(content);
    if (index > 0 && !page.final) section.appendChild(pageButton("page-prev", "←", () => showDiaryPage(index - 1)));
    if (index < config.diary.length - 1 && !page.final) section.appendChild(pageButton("page-next", "→", () => showDiaryPage(index + 1)));
    diaryWrap.appendChild(section);
  });
  diaryWrap.style.display = "none";
  const agreeBtn = document.getElementById("agreeBtn");
  if (agreeBtn) agreeBtn.onclick = showDiaryEnding;
}

function pageButton(className, label, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = className;
  btn.innerText = label;
  btn.onclick = onClick;
  return btn;
}

function showDiaryPage(index) {
  diaryWrap.querySelectorAll(".diary-page").forEach((page) => page.classList.toggle("active", Number(page.dataset.page) === index));
  const agreeBtn = document.getElementById("agreeBtn");
  if (agreeBtn) agreeBtn.onclick = showDiaryEnding;
}

function stopQ25Effect() {
  if (q25Timer) clearInterval(q25Timer);
  q25Elements.forEach((el) => el.remove());
  q25Elements = [];
  if (grayMask) grayMask.remove();
  grayMask = null;
  q25Locked = false;
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("locked");
    opt.style.pointerEvents = "auto";
  });
}

function startQ25Effect() {
  if (q25Locked) return;
  stopQ25Effect();
  q25Locked = true;
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.add("locked");
    opt.style.pointerEvents = "none";
  });
  grayMask = document.createElement("div");
  grayMask.className = "q25-gray-mask";
  document.body.appendChild(grayMask);
  q25Timer = setInterval(() => {
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      p.className = "peep-text";
      p.innerText = config.effects.q25[Math.floor(Math.random() * config.effects.q25.length)];
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(p);
      q25Elements.push(p);
    }
  }, 100);
  setTimeout(stopQ25Effect, 5000);
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

function startQ5Effect() {
  if (q5Timer) clearTimeout(q5Timer);
  const effect = config.effects.q5;
  q5Timer = setTimeout(() => {
    if (current !== 4) return;
    const opts = document.querySelectorAll(".option");
    const originalTexts = Array.from(opts).map((o) => o.innerText);
    opts.forEach((o) => (o.style.pointerEvents = "none"));
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    opts.forEach((opt, i) => setTimeout(() => (opt.innerText = effect.replacement), i * effect.stagger));
    setTimeout(() => {
      if (current !== 4) return;
      opts.forEach((o, i) => (o.innerText = originalTexts[i]));
      opts.forEach((o) => (o.style.pointerEvents = "auto"));
      prevBtn.disabled = current === 0;
      nextBtn.disabled = false;
    }, effect.duration);
  }, effect.delay);
}

function startQ8Effect(selectedIndex) {
  document.documentElement.style.setProperty("background", "#d80000", "important");
  document.body.style.setProperty("background", "#d80000", "important");
  mainBox.style.opacity = "0";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  document.querySelectorAll(".option").forEach((o) => (o.style.pointerEvents = "none"));
  const textList = selectedIndex < 2 ? config.effects.q8.aware : config.effects.q8.ignore;
  const created = [];
  const timer = setInterval(() => {
    for (let i = 0; i < 10; i++) {
      const el = document.createElement("div");
      el.className = "float-text";
      el.innerText = Math.random() > 0.5 ? textList[Math.floor(Math.random() * textList.length)] : config.effects.q8.glitch[Math.floor(Math.random() * config.effects.q8.glitch.length)];
      el.style.left = `${50 + (Math.random() - 0.5) * 100}vw`;
      el.style.top = `${50 + (Math.random() - 0.5) * 100}vh`;
      el.style.fontSize = `${12 + Math.random() * 16}px`;
      document.body.appendChild(el);
      created.push(el);
    }
  }, 200);
  setTimeout(() => {
    clearInterval(timer);
    created.forEach((e) => e.remove());
    document.documentElement.style.setProperty("background", "#f7f8fa", "important");
    document.body.style.setProperty("background", "#f7f8fa", "important");
    mainBox.style.opacity = "1";
    prevBtn.disabled = current === 0;
    nextBtn.disabled = false;
    document.querySelectorAll(".option").forEach((o) => (o.style.pointerEvents = "auto"));
    current++;
    renderQuestion();
  }, 5000);
}

function triggerTerror(text, nextQ) {
  const mask = document.createElement("div");
  mask.className = "terror-mask";
  const t = document.createElement("div");
  t.className = "terror-text";
  mask.appendChild(t);
  document.body.appendChild(mask);
  let idx = 0;
  function typeText() {
    if (idx < text.length) {
      t.innerText += text[idx];
      idx++;
      setTimeout(typeText, 80);
      return;
    }
    setTimeout(() => {
      const glitch = setInterval(() => {
        t.innerText = t.innerText.split("").sort(() => Math.random() - 0.5).join("");
      }, 60);
      setTimeout(() => {
        clearInterval(glitch);
        mask.remove();
        current = nextQ;
        renderQuestion();
      }, 600);
    }, 1000);
  }
  typeText();
}

function startLoveTyping() {
  mainBox.style.opacity = "0";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  const el = document.createElement("div");
  el.className = "fullscreen-love";
  document.body.appendChild(el);
  const str = config.unlockPhrase;
  let i = 0;
  const timer = setInterval(() => {
    el.innerText += str[i % str.length];
    i++;
    if (el.innerText.length >= 600) {
      clearInterval(timer);
      setTimeout(() => {
        el.remove();
        mainBox.style.opacity = "1";
        prevBtn.disabled = current === 0;
        nextBtn.disabled = false;
        current++;
        renderQuestion();
      }, 200);
    }
  }, 10);
}

function openQ16Modal() {
  let index = 0;
  const modal = document.createElement("div");
  modal.className = "q16-modal";
  const textEl = document.createElement("div");
  textEl.className = "q16-text";
  textEl.innerText = config.effects.q16[index];
  const btn = document.createElement("button");
  btn.className = "q16-btn";
  btn.type = "button";
  btn.innerText = "继续";
  btn.onclick = () => {
    index++;
    if (index < config.effects.q16.length) {
      textEl.innerText = config.effects.q16[index];
      if (index === config.effects.q16.length - 1) btn.innerText = "关闭";
      return;
    }
    modal.remove();
  };
  modal.append(textEl, btn);
  document.body.appendChild(modal);
}

function blackPunish() {
  const screen = document.createElement("div");
  screen.className = "black-screen";
  screen.innerText = config.final.wrongFirst;
  document.body.appendChild(screen);
  setTimeout(() => {
    screen.innerText = config.final.wrongSecond;
    screen.style.color = "#fff";
    screen.style.textShadow = "0 0 2px #fff, 0 0 5px #fff, 0 0 8px #ddd";
  }, 2000);
  setTimeout(() => {
    screen.remove();
    showInputModal();
  }, 3500);
}

function showInputModal() {
  clearAllEffects();
  const modal = document.createElement("div");
  modal.className = "submit-modal";
  const inner = document.createElement("div");
  inner.className = "submit-modal-inner";
  inner.innerHTML = `
    <div style="margin-bottom: 10px; font-size: 16px; text-align: center;">${config.final.unlockTitle}</div>
    <div class="modal-column">
      <input class="love-input" type="text" id="loveInput" placeholder="${config.final.inputPlaceholder}">
      <button class="submit-btn" id="unlockBtn" type="button">继续</button>
    </div>
  `;
  modal.appendChild(inner);
  document.body.appendChild(modal);
  const input = document.getElementById("loveInput");
  const unlockBtn = document.getElementById("unlockBtn");
  unlockBtn.onclick = () => {
    if (input.value.trim() === config.unlockPhrase) {
      modal.remove();
      mainBox.style.display = "none";
      resetDiary();
      diaryWrap.style.display = "flex";
      return;
    }
    wrongCount++;
    if (wrongCount === 1) {
      modal.remove();
      blackPunish();
    } else {
      unlockBtn.disabled = true;
      unlockBtn.classList.add("locked");
      unlockBtn.style.background = "#ccc";
      unlockBtn.style.color = "#999";
    }
  };
}

function showFinalModal() {
  clearAllEffects();
  mainBox.style.display = "none";
  const modal = document.createElement("div");
  modal.className = "submit-modal";
  const inner = document.createElement("div");
  inner.className = "submit-modal-inner";
  inner.innerHTML = `
    <div style="font-size:16px;font-weight:bold;">${config.final.promptTitle}</div>
    <div style="margin:12px 0;">${config.final.promptBody}</div>
    <button class="submit-btn" id="yesBtn" type="button">${config.final.promptButton}</button>
    <div class="refuse-tip">${config.final.promptTip}</div>
  `;
  modal.appendChild(inner);
  document.body.appendChild(modal);
  document.getElementById("yesBtn").onclick = () => {
    modal.remove();
    showInputModal();
  };
}

function showDiaryEnding() {
  clearAllEffects();
  diaryWrap.style.display = "none";
  const blackFull = document.createElement("div");
  blackFull.className = "black-full-text";
  blackFull.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
      <div class="text-container" style="height:40px;display:flex;align-items:center;justify-content:center;"></div>
      <button class="red-confirm-btn" style="display:none;" type="button">确认</button>
    </div>
  `;
  document.body.appendChild(blackFull);
  const textDom = blackFull.querySelector(".text-container");
  const confirmBtn = blackFull.querySelector(".red-confirm-btn");
  let textIndex = 0;
  function showText() {
    if (textIndex < config.final.diaryEndTexts.length) {
      textDom.innerText = config.final.diaryEndTexts[textIndex];
      textIndex++;
      if (textIndex === config.final.diaryEndTexts.length) setTimeout(() => (confirmBtn.style.display = "block"), 1000);
      setTimeout(showText, 1500);
    }
  }
  showText();
  confirmBtn.onclick = () => {
    blackFull.remove();
    const endModal = document.createElement("div");
    endModal.className = "end-modal";
    endModal.innerHTML = `
      <div style="font-size:16px;font-weight:bold;margin-bottom:15px;">${config.final.restartTitle}</div>
      <div style="color:#666;margin-bottom:16px;">${config.final.restartBody}</div>
      <button class="start-btn" id="restartBtn" type="button">确认</button>
    `;
    document.body.appendChild(endModal);
    document.getElementById("restartBtn").onclick = () => {
      endModal.remove();
      clearAllEffects();
      resetDiary();
      current = 0;
      answers = Array(total).fill(null);
      wrongCount = 0;
      fromQ4ToQ5 = false;
      mainBox.style.display = "none";
      openStartModal();
    };
  };
}

function renderQuestion() {
  clearAllEffects();
  const q = config.questions[current];
  progressEl.innerText = `第 ${current + 1} 题 / 共 ${total} 题`;
  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";
  mainBox.style.opacity = "1";
  q.opt.forEach((item, idx) => {
    const div = document.createElement("button");
    div.type = "button";
    div.className = "option";
    if (answers[current] === idx) div.classList.add("selected");
    div.innerText = item;
    div.onclick = () => chooseOption(div, idx);
    optionsEl.appendChild(div);
  });
  if (current === 4 && fromQ4ToQ5) {
    startQ5Effect();
    fromQ4ToQ5 = false;
  }
  prevBtn.disabled = current === 0;
  nextBtn.innerText = current === total - 1 ? "提交问卷" : "下一题";
}

function chooseOption(div, idx) {
  answers[current] = idx;
  document.querySelectorAll(".option").forEach((opt) => opt.classList.remove("selected"));
  div.classList.add("selected");
  if (current === 24) return startQ25Effect();
  if (current === 2) return triggerTerror(idx < config.effects.q3.happyIndex ? config.effects.q3.sadText : config.effects.q3.happyText, current + 1);
  if (current === 7) return startQ8Effect(idx);
  if (current === 15) return setTimeout(openQ16Modal, 100);
  if (current === 16) {
    if (config.effects.q17.allow.includes(idx)) return startLoveTyping();
    div.classList.add("locked");
    div.innerText = config.effects.q17.lockedText;
    div.onclick = null;
    return;
  }
  if (current === 19) {
    div.innerText = config.effects.q20[idx];
    if (idx !== 3) {
      div.classList.add("locked");
      div.onclick = null;
    }
  }
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
  if (current === 3) fromQ4ToQ5 = true;
  if (current < total - 1) {
    current++;
    renderQuestion();
  } else {
    showFinalModal();
  }
};

function openBgm() {
  bgm.muted = false;
  bgm.volume = 0.6;
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
