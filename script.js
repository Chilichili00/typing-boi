const STORAGE_KEYS = {
  bestWpm: "gentleTypingTrainer.bestWpm",
  bestAccuracy: "gentleTypingTrainer.bestAccuracy",
  displayName: "gentleTypingTrainer.displayName"
};

// Fill these values with your Supabase Project URL and public anon key.
// The app still works locally when this is left unconfigured.
const SUPABASE_CONFIG = {
  url: "https://ddkzvsqjjbvlyvilutqo.supabase.co",
  anonKey: "sb_publishable_IWvKxRPf0NhvubwnYMwt4g_Q8iAaKku",
  table: "leaderboard"
};

const PRACTICE_TEXTS = {
  beginner: [
    "I take a slow breath and begin with simple words. My fingers can move one key at a time. I do not need to hurry. Every correct letter helps me feel more confident. Small steps are still real progress, and today I am practicing with patience and care.",
    "The morning is quiet, and the room feels calm. I sit up straight, place my hands gently on the keyboard, and look at each word. I type slowly and carefully. When I make a mistake, I fix it and keep going with a kind attitude.",
    "Learning English typing can feel difficult at first, but practice makes it easier. I read the sentence, find the next letter, and press the key. I celebrate each small win. With steady practice, my hands learn where the letters are, and my confidence grows."
  ],
  easy: [
    "Today I am practicing English typing with a calm mind. I choose a comfortable speed and let my fingers learn the keyboard. I do not compare myself with fast typers. My goal is to understand each word, press each key carefully, and keep moving forward. If I make an error, I notice it, breathe, and continue. Every practice session gives me more confidence. Over time, the letters will feel more familiar, and typing will become smoother. I can rest for a moment, then return to the next letter with patience.",
    "A good typing habit starts with patience. I keep my shoulders relaxed and my eyes on the text. I type one word, then the next word, without rushing. The keyboard may feel confusing, but it becomes easier when I practice often. Mistakes are part of learning, not a reason to stop. I can restart, try again, and improve little by little. Each sentence I finish is proof that I am making progress. My hands are learning a quiet rhythm, and that rhythm will help me every day.",
    "English typing is a skill that grows through gentle repetition. Some words are short and easy, while other words need more attention. I can slow down when I need to. I can pause, look carefully, and continue. The important thing is to keep practicing with a positive feeling. When I finish a text, I can be proud of my effort. A steady learner becomes stronger every day. I will keep my focus on the next character and enjoy each small improvement. A calm pace helps me learn without pressure."
  ],
  medium: [
    "When I practice typing, I try to create a peaceful routine. I sit in a comfortable position, place my fingers near the home row, and look at the words before I begin. Speed is useful, but accuracy gives me a better foundation. If I type too quickly, I may feel tense and make more mistakes. If I slow down and stay focused, my hands begin to remember the letters. This kind of practice is not about being perfect. It is about returning to the next character with patience. Each completed paragraph teaches my eyes, hands, and mind to work together. After many small sessions, typing English can start to feel natural. I can also notice which letters are difficult for me and give those letters extra attention. The more I practice, the less I need to search for every key. My movement becomes calmer, my mistakes become easier to correct, and my confidence grows through steady effort. I can practice punctuation, capital letters, and spaces without making them feel scary. Each detail becomes easier when I meet it slowly. The paragraph may be longer, but the work is still only one character at a time.",
    "A slow typer can still become a confident typer. The first step is to remove pressure and make practice feel friendly. I can choose a short text, read it clearly, and type at a speed that feels possible. When a red letter appears, it is only information. It shows me where my attention slipped for a moment. I can correct my rhythm and keep going. Progress often happens quietly. One day I notice that common words feel easier. Another day I realize that my fingers move to the right keys without so much thinking. These small signs matter. They show that steady practice is working. I do not need a perfect session to learn something useful. A few careful minutes can teach my hands a better path across the keyboard. When I return tomorrow, the same words may feel a little more familiar, and that is real improvement. I can keep my eyes soft and my hands relaxed. A steady pace helps me notice the text clearly. This is how longer English practice becomes friendly instead of stressful. Even when the paragraph takes time, I can stay kind to myself and finish with a steady mind.",
    "Typing in English uses many skills at the same time. I need to recognize words, find letters, control my fingers, and keep a calm rhythm. At first this can feel like a lot, especially when the text is long. A helpful way to practice is to focus on one line at a time. I can let the next character guide me instead of worrying about the whole paragraph. Accuracy is more important than rushing. A clear mistake is not failure; it is a chance to learn. With repeated practice, my typing becomes smoother, my confidence grows, and my attention lasts longer. I can use each session to build trust in my own pace. If I stay relaxed, my hands will learn patterns in common words. Slowly, typing becomes less like a test and more like a useful daily skill. I can repeat this practice whenever I have a few quiet minutes. Each return makes the keyboard more familiar. The goal is steady comfort, not pressure. Longer practice gives me time to notice patterns in English. I can see common words, repeated sounds, and familiar endings. These patterns help my fingers move with less hesitation.",
  ],
  hard: [
    "Building typing confidence takes time, especially when English is still becoming familiar. A useful practice session begins with a simple promise: I will move carefully, and I will not judge myself harshly. The keyboard has many keys, and my fingers may not always know where to go. That is normal. I can look at the text, notice the next character, and press the key with intention. When I make a mistake, the best response is calm correction. I do not need to feel embarrassed or frustrated. Every skilled typer once had to learn the same letters, spaces, and punctuation. With regular practice, my eyes begin to read ahead, my hands become more relaxed, and my typing rhythm becomes smoother. The goal is not to become fast in one day. The goal is to make today a little easier than yesterday. If I keep practicing in small sessions, I will slowly build speed, accuracy, and trust in my own ability. Longer texts help me build endurance, but I can still take them one sentence at a time. I can notice repeated words, common endings, and letters that appear often. These patterns make the keyboard feel less random. A calm mistake does not erase my progress. It simply gives me another chance to return to the right key. When I finish a hard practice, I can appreciate the effort it required. That feeling makes the next session easier to begin. I can also notice how my attention changes during a long passage. If my mind wanders, I gently bring it back to the cursor. This teaches patience as well as typing. The more I return, the stronger my focus becomes. A hard text may take longer, but I can treat it as a quiet workout. I finish by staying present, not by rushing.",
    "A long typing exercise can feel challenging, but it can also be a gentle way to train focus. I begin by choosing a comfortable pace. I remind myself that there is no need to race. The words are waiting on the screen, and I can meet them one character at a time. Some letters will be easy, and some combinations will feel unfamiliar. When I notice tension in my hands, I relax my shoulders and breathe. Good typing is not only about finger movement; it is also about attention, patience, and steady rhythm. If an error appears, I can treat it as a small signal instead of a problem. I return to the text and continue. This attitude helps practice feel safe and useful. Over many sessions, I may notice that I make fewer pauses, find keys faster, and read the next word more easily. These improvements are quiet, but they are real. Each finished text is another step toward fluent typing. The hard level gives me space to practice staying steady for longer. I do not need to solve the entire paragraph at once. I only need to follow the cursor, keep my eyes relaxed, and let the next character guide my hands. If I feel tired, I can slow down without quitting. Finishing with patience is a strong result. A longer session also helps me practice recovery. I might make several mistakes, but I can continue without losing confidence. Every return to the next letter is a useful habit. That habit will help me type emails, notes, and messages more easily. The more I practice this recovery, the less a mistake can disturb my rhythm. I can continue calmly until the final word is complete.",
    "Typing is a practical skill, but it is also a confidence skill. When I can type English more comfortably, writing messages, studying, searching, and working online all become easier. The beginning may feel slow because my brain is doing many things at once. It reads the target text, remembers letter shapes, chooses fingers, checks mistakes, and tries to keep moving. This is why patient practice is so important. I can give my brain enough time to learn. I can use clear feedback without making mistakes feel stressful. Green letters show what went well, red letters show what needs attention, and grey letters wait calmly for the next step. The cursor reminds me to focus on only one place. I do not need to finish perfectly to benefit from practice. I only need to keep returning, keep trying, and keep noticing small improvements. With time, the keyboard becomes less confusing and more familiar. A longer passage gives me a chance to practice rhythm, attention, and recovery after errors. I can pause for a breath, relax my fingers, and continue with the next word. This is how a difficult task becomes manageable. Each session adds a little more comfort, and that comfort slowly becomes skill. The hard level is not here to punish me. It is here to give me room to grow. I can finish slowly and still finish well. When I see my progress rise to one hundred percent, I know I stayed with the task. I can remember that effort matters. Even slow typing is useful practice when it is careful and honest. Tomorrow, the same keyboard may feel a little easier."
  ]
};

const FEEDBACK_MESSAGES = [
  "Great job!",
  "Nice progress!",
  "You are getting faster!",
  "Excellent work!",
  "New record!",
  "Keep going!"
];

const state = {
  difficulty: "beginner",
  target: "",
  typed: "",
  startedAt: null,
  timerId: null,
  errors: 0,
  timeUsed: 0,
  completed: false,
  lastTextIndex: -1,
  lastResult: null,
  scoreSubmitted: false,
  leaderboardDifficulty: "beginner",
  submitting: false,
  audioContext: null
};

const elements = {
  difficultySelect: document.querySelector("#difficultySelect"),
  levelLabel: document.querySelector("#levelLabel"),
  wordCount: document.querySelector("#wordCount"),
  nextTextBtn: document.querySelector("#nextTextBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  typingSurface: document.querySelector("#typingSurface"),
  targetText: document.querySelector("#targetText"),
  typingInput: document.querySelector("#typingInput"),
  progressBar: document.querySelector("#progressBar"),
  wpmStat: document.querySelector("#wpmStat"),
  accuracyStat: document.querySelector("#accuracyStat"),
  errorStat: document.querySelector("#errorStat"),
  progressStat: document.querySelector("#progressStat"),
  bestWpm: document.querySelector("#bestWpm"),
  bestAccuracy: document.querySelector("#bestAccuracy"),
  feedbackBox: document.querySelector("#feedbackBox"),
  submitPanel: document.querySelector("#submitPanel"),
  submitMessage: document.querySelector("#submitMessage"),
  submitFields: document.querySelector("#submitFields"),
  displayNameInput: document.querySelector("#displayNameInput"),
  submitScoreBtn: document.querySelector("#submitScoreBtn"),
  leaderboardStatus: document.querySelector("#leaderboardStatus"),
  leaderboardRows: document.querySelector("#leaderboardRows"),
  leaderboardFilterBtns: document.querySelectorAll(".filter-btn"),
  refreshLeaderboardBtn: document.querySelector("#refreshLeaderboardBtn")
};

function startApp() {
  renderBestScores();
  elements.displayNameInput.value = localStorage.getItem(STORAGE_KEYS.displayName) || "";
  chooseRandomText();
  bindEvents();
  loadLeaderboard();
}

function bindEvents() {
  elements.difficultySelect.addEventListener("change", () => {
    state.difficulty = elements.difficultySelect.value;
    state.lastTextIndex = -1;
    chooseRandomText();
  });

  elements.nextTextBtn.addEventListener("click", chooseRandomText);
  elements.restartBtn.addEventListener("click", resetCurrentText);
  elements.typingSurface.addEventListener("click", focusTypingInput);
  elements.typingSurface.addEventListener("focus", focusTypingInput);
  elements.typingInput.addEventListener("input", handleTyping);
  elements.submitScoreBtn.addEventListener("click", submitScore);
  elements.refreshLeaderboardBtn.addEventListener("click", loadLeaderboard);

  elements.leaderboardFilterBtns.forEach((button) => {
    button.addEventListener("click", () => {
      state.leaderboardDifficulty = button.dataset.difficulty;
      updateLeaderboardFilterButtons();
      loadLeaderboard();
    });
  });
}

function chooseRandomText() {
  const texts = PRACTICE_TEXTS[state.difficulty];
  let nextIndex = Math.floor(Math.random() * texts.length);

  if (texts.length > 1) {
    while (nextIndex === state.lastTextIndex) {
      nextIndex = Math.floor(Math.random() * texts.length);
    }
  }

  state.lastTextIndex = nextIndex;
  state.target = texts[nextIndex];
  resetCurrentText();
}

function resetCurrentText() {
  stopTimer();
  state.typed = "";
  state.startedAt = null;
  state.errors = 0;
  state.timeUsed = 0;
  state.completed = false;
  state.lastResult = null;
  state.scoreSubmitted = false;
  state.submitting = false;

  elements.typingInput.disabled = false;
  elements.typingInput.value = "";
  elements.typingInput.maxLength = state.target.length;
  elements.feedbackBox.textContent = "";
  elements.submitPanel.hidden = true;
  elements.submitMessage.textContent = "";
  elements.submitScoreBtn.disabled = false;

  renderTargetText();
  updateStats();
  focusTypingInput();
}

function renderTargetText() {
  elements.targetText.innerHTML = "";

  [...state.target].forEach((character) => {
    const span = document.createElement("span");
    span.className = "char pending";
    span.textContent = character;
    elements.targetText.append(span);
  });

  updateCharacters();
  elements.levelLabel.textContent = getDifficultyName(state.difficulty);
  elements.wordCount.textContent = `${countWords(state.target)} 词`;
}

function handleTyping() {
  if (state.completed) return;

  const previousTyped = state.typed;
  state.typed = elements.typingInput.value.slice(0, state.target.length);

  if (elements.typingInput.value !== state.typed) {
    elements.typingInput.value = state.typed;
  }

  if (state.typed.length > 0) {
    startTimer();
  }

  countNewErrors(previousTyped, state.typed);
  updateCharacters();
  updateStats();

  if (state.typed.length === state.target.length) {
    finishPractice();
  }
}

function countNewErrors(previousTyped, currentTyped) {
  if (currentTyped.length <= previousTyped.length) return;

  let madeError = false;

  for (let index = previousTyped.length; index < currentTyped.length; index += 1) {
    if (currentTyped[index] !== state.target[index]) {
      state.errors += 1;
      madeError = true;
    }
  }

  if (madeError) {
    playSoftErrorSound();
  }
}

function updateCharacters() {
  const characters = elements.targetText.querySelectorAll(".char");

  characters.forEach((span, index) => {
    span.className = "char";

    if (index < state.typed.length) {
      span.classList.add(state.typed[index] === state.target[index] ? "correct" : "incorrect");
    } else {
      span.classList.add("pending");
    }

    if (!state.completed && index === state.typed.length) {
      span.classList.add("current");
    }
  });
}

function startTimer() {
  if (state.startedAt) return;

  state.startedAt = Date.now();
  state.timerId = window.setInterval(updateStats, 1000);
}

function stopTimer() {
  if (!state.timerId) return;

  window.clearInterval(state.timerId);
  state.timerId = null;
}

function finishPractice() {
  state.timeUsed = getElapsedSeconds();
  state.completed = true;
  stopTimer();
  elements.typingInput.disabled = true;
  updateCharacters();
  updateStats();
  state.lastResult = buildScoreResult();
  savePersonalBests();
  showPositiveFeedback();
  handleLeaderboardSubmissionAfterCompletion();
}

function getStats() {
  if (state.typed.length === 0) {
    return { wpm: 0, accuracy: 100, progress: 0 };
  }

  const correctCharacters = [...state.typed].filter((character, index) => {
    return character === state.target[index];
  }).length;

  const elapsedMinutes = Math.max(getElapsedSeconds() / 60, 1 / 60);
  const wpm = (correctCharacters / 5) / elapsedMinutes;
  const accuracy = (correctCharacters / state.typed.length) * 100;
  const progress = (state.typed.length / state.target.length) * 100;

  return { wpm, accuracy, progress };
}

function updateStats() {
  const stats = getStats();

  elements.wpmStat.textContent = Math.round(stats.wpm);
  elements.accuracyStat.textContent = `${Math.round(stats.accuracy)}%`;
  elements.errorStat.textContent = state.errors;
  elements.progressStat.textContent = `${Math.round(stats.progress)}%`;
  elements.progressBar.style.width = `${Math.min(stats.progress, 100)}%`;
}

function savePersonalBests() {
  const stats = getStats();
  const bestWpm = getBestWpm();
  const bestAccuracy = getBestAccuracy();

  if (stats.wpm > bestWpm) {
    localStorage.setItem(STORAGE_KEYS.bestWpm, String(stats.wpm));
  }

  if (stats.accuracy > bestAccuracy) {
    localStorage.setItem(STORAGE_KEYS.bestAccuracy, String(stats.accuracy));
  }

  renderBestScores();
}

function renderBestScores() {
  elements.bestWpm.textContent = Math.round(getBestWpm());
  elements.bestAccuracy.textContent = `${Math.round(getBestAccuracy())}%`;
}

function showPositiveFeedback() {
  const message = FEEDBACK_MESSAGES[Math.floor(Math.random() * FEEDBACK_MESSAGES.length)];
  elements.feedbackBox.textContent = message;
}

function buildScoreResult() {
  const stats = getStats();

  return {
    difficulty: getDifficultyName(state.difficulty),
    wpm: Math.round(Number(stats.wpm)),
    accuracy: Number(stats.accuracy.toFixed(1)),
    errors: Math.round(Number(state.errors)),
    time_used: Math.round(Number(state.timeUsed)),
    completed_at: new Date().toISOString()
  };
}

function handleLeaderboardSubmissionAfterCompletion() {
  const savedName = localStorage.getItem(STORAGE_KEYS.displayName);

  showSubmitPanel();

  if (!state.lastResult || state.lastResult.accuracy < 90 || !isSupabaseConfigured()) {
    return;
  }

  // After the first saved name, eligible scores submit automatically.
  if (savedName) {
    submitScoreWithName(savedName, true);
  }
}

function showSubmitPanel() {
  if (!state.lastResult) return;

  elements.submitPanel.hidden = false;

  // Only accurate tests are eligible for the online leaderboard.
  if (state.lastResult.accuracy < 90) {
    elements.submitFields.hidden = true;
    elements.submitMessage.textContent = "准确率达到 90% 才能提交到在线排行榜。继续练习，你会越来越稳。";
    return;
  }

  if (!isSupabaseConfigured()) {
    elements.submitFields.hidden = true;
    elements.submitMessage.textContent = "在线排行榜还没有配置 Supabase。当前成绩已保存在本地最佳记录中。";
    return;
  }

  elements.submitFields.hidden = false;
  elements.submitScoreBtn.disabled = false;
  elements.submitScoreBtn.textContent = "提交成绩";
  elements.submitMessage.textContent = "成绩符合提交条件，请输入显示名称后提交。";

  if (!localStorage.getItem(STORAGE_KEYS.displayName)) {
    elements.displayNameInput.focus();
  }
}

async function submitScore() {
  if (!state.lastResult || state.submitting) return;

  const displayName = elements.displayNameInput.value.trim().replace(/\s+/g, " ").slice(0, 24);

  if (!displayName) {
    elements.submitMessage.textContent = "请先输入一个显示名称。";
    elements.displayNameInput.focus();
    return;
  }

  if (state.lastResult.accuracy < 90 || !isSupabaseConfigured()) {
    showSubmitPanel();
    return;
  }

  await submitScoreWithName(displayName, false);
}

async function submitScoreWithName(displayName, isAutomatic) {
  if (state.scoreSubmitted || state.submitting) return;

  state.submitting = true;
  elements.submitScoreBtn.disabled = true;
  elements.submitScoreBtn.textContent = isAutomatic ? "自动提交中..." : "提交中...";
  elements.submitMessage.textContent = isAutomatic ? "正在使用已保存的名称自动提交成绩..." : "正在提交到在线排行榜...";

  try {
    localStorage.setItem(STORAGE_KEYS.displayName, displayName);
    // Supabase column types are strict, so normalize numeric values before insert.
    const payload = {
      display_name: displayName,
      difficulty: state.lastResult.difficulty,
      wpm: Math.round(Number(state.lastResult.wpm)),
      accuracy: Number(state.lastResult.accuracy),
      errors: Math.round(Number(state.lastResult.errors)),
      time_used: Math.round(Number(state.lastResult.time_used)),
      completed_at: state.lastResult.completed_at
    };

    console.log("Submitting score:", payload);
    await saveScoreToSupabase(payload);

    state.scoreSubmitted = true;
    elements.submitFields.hidden = true;
    elements.submitScoreBtn.textContent = "已提交";
    elements.submitMessage.textContent = "提交成功！你的成绩已经进入在线排行榜。";

    state.leaderboardDifficulty = state.difficulty;
    updateLeaderboardFilterButtons();
    await loadLeaderboard();
  } catch (error) {
    console.error("Supabase error:", error);
    elements.submitFields.hidden = false;
    elements.displayNameInput.value = displayName;
    elements.submitScoreBtn.disabled = false;
    elements.submitScoreBtn.textContent = "提交成绩";
    elements.submitMessage.textContent = "提交失败，可能网络或后端暂时不可用。练习和本地最佳记录仍然正常。";
  } finally {
    state.submitting = false;
  }
}

async function saveScoreToSupabase(score) {
  const response = await fetch(getSupabaseEndpoint(), {
    method: "POST",
    headers: {
      ...getSupabaseHeaders(),
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(score)
  });

  if (!response.ok) {
    const error = await readSupabaseError(response);
    console.error("Supabase error:", error);
    throw error;
  }
}

async function loadLeaderboard() {
  updateLeaderboardFilterButtons();

  if (!isSupabaseConfigured()) {
    renderEmptyLeaderboard("暂无在线数据");
    elements.leaderboardStatus.textContent = "在线排行榜尚未配置 Supabase。打字练习可以继续离线使用。";
    return;
  }

  elements.leaderboardStatus.textContent = "正在加载排行榜...";

  try {
    const requestUrl = new URL(getSupabaseEndpoint());
    requestUrl.searchParams.set("select", "display_name,difficulty,wpm,accuracy,errors,time_used,completed_at");
    requestUrl.searchParams.set("difficulty", `eq.${getDifficultyName(state.leaderboardDifficulty)}`);
    requestUrl.searchParams.set("order", "accuracy.desc,wpm.desc");
    requestUrl.searchParams.set("limit", "20");

    const response = await fetch(requestUrl, {
      headers: getSupabaseHeaders()
    });

    if (!response.ok) {
      const error = await readSupabaseError(response);
      console.error("Supabase error:", error);
      throw error;
    }

    const scores = await response.json();
    renderLeaderboard(scores);
    elements.leaderboardStatus.textContent = scores.length
      ? `正在显示 ${getDifficultyName(state.leaderboardDifficulty)} 前 ${scores.length} 名`
      : `${getDifficultyName(state.leaderboardDifficulty)} 暂无在线成绩`;
  } catch (error) {
    console.error("Supabase error:", error);
    renderEmptyLeaderboard("暂无在线数据");
    elements.leaderboardStatus.textContent = "无法连接在线排行榜。打字练习和本地最佳记录仍然正常。";
  }
}

function renderLeaderboard(scores) {
  elements.leaderboardRows.innerHTML = "";

  if (!scores.length) {
    renderEmptyLeaderboard("暂无在线数据");
    return;
  }

  scores.forEach((score, index) => {
    const row = document.createElement("tr");
    const cells = [
      index + 1,
      score.display_name || "匿名维维",
      `${formatScoreNumber(score.accuracy)}%`,
      formatScoreNumber(score.wpm),
      score.errors ?? 0,
      formatSeconds(score.time_used),
      formatCompletedAt(score.completed_at)
    ];

    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });

    elements.leaderboardRows.append(row);
  });
}

function renderEmptyLeaderboard(message) {
  elements.leaderboardRows.innerHTML = "";

  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 7;
  cell.textContent = message;
  row.append(cell);
  elements.leaderboardRows.append(row);
}

function updateLeaderboardFilterButtons() {
  elements.leaderboardFilterBtns.forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === state.leaderboardDifficulty);
  });
}

function isSupabaseConfigured() {
  return SUPABASE_CONFIG.url.startsWith("https://")
    && SUPABASE_CONFIG.anonKey.length > 20
    && SUPABASE_CONFIG.table.length > 0;
}

function getSupabaseEndpoint() {
  const encodedTableName = encodeURIComponent(SUPABASE_CONFIG.table);
  return `${SUPABASE_CONFIG.url.replace(/\/$/, "")}/rest/v1/${encodedTableName}`;
}

async function readSupabaseError(response) {
  let details = "";

  try {
    details = await response.text();
  } catch {
    details = "No error body returned";
  }

  return new Error(`Supabase request failed (${response.status}): ${details}`);
}

function getSupabaseHeaders() {
  return {
    "apikey": SUPABASE_CONFIG.anonKey,
    "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`
  };
}

function formatScoreNumber(value) {
  const number = Number(value) || 0;
  return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

function formatSeconds(value) {
  const totalSeconds = Number(value) || 0;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatCompletedAt(value) {
  if (!value) return "-";

  return new Date(value).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function focusTypingInput() {
  if (state.completed) return;
  elements.typingInput.focus({ preventScroll: true });
}

function playSoftErrorSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    state.audioContext = state.audioContext || new AudioContext();

    const oscillator = state.audioContext.createOscillator();
    const gain = state.audioContext.createGain();
    const now = state.audioContext.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(210, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.04, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    oscillator.connect(gain);
    gain.connect(state.audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.13);
  } catch {
    // Typing should continue even when the browser blocks audio.
  }
}

function countWords(text) {
  const words = text.trim().match(/\b[\w'-]+\b/g);
  return words ? words.length : 0;
}

function getDifficultyName(difficulty) {
  const names = {
    beginner: "初级维维",
    easy: "中级维维",
    medium: "高级维维",
    hard: "维维打字宗师"
  };

  return names[difficulty];
}

function getElapsedSeconds() {
  if (state.completed) return state.timeUsed;
  if (!state.startedAt) return 0;
  return Math.max(1, Math.floor((Date.now() - state.startedAt) / 1000));
}

function getBestWpm() {
  return Number(localStorage.getItem(STORAGE_KEYS.bestWpm)) || 0;
}

function getBestAccuracy() {
  return Number(localStorage.getItem(STORAGE_KEYS.bestAccuracy)) || 0;
}

startApp();
