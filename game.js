(() => {
  const STORAGE_KEY = "lunaPipSessizSehirFinalSave";
  const STORY = window.STORY;
  const MAX_STAT = 12;
  const $ = (id) => document.getElementById(id);

  const els = {
    startScreen: $("startScreen"), gameScreen: $("gameScreen"), newGameBtn: $("newGameBtn"), continueBtn: $("continueBtn"),
    chapterTitle: $("chapterTitle"), sceneTag: $("sceneTag"), speakerIcon: $("speakerIcon"), speakerName: $("speakerName"), dialogueText: $("dialogueText"),
    choices: $("choices"), skipTypeBtn: $("skipTypeBtn"), menuBtn: $("menuBtn"), closeMenuBtn: $("closeMenuBtn"), sideMenu: $("sideMenu"),
    restartBtn: $("restartBtn"), exportBtn: $("exportBtn"), statList: $("statList"), lunaCard: $("lunaCard"), pipCard: $("pipCard"),
    moodBackdrop: $("moodBackdrop"), musicBtn: $("musicBtn"), warmMusic: $("warmMusic"), sadMusic: $("sadMusic")
  };

  let state = null;
  let typeTimer = null;
  let fullText = "";
  let activeMood = "warm";
  let musicEnabled = true;
  let musicUnlocked = false;

  function createState() {
    return { currentNodeId: STORY.startNodeId, stats: { ...STORY.defaultState }, history: [], completedEnding: null };
  }

  function clamp(num, min, max) { return Math.max(min, Math.min(max, num)); }

  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.currentNodeId || !parsed.stats) return null;
      return { ...createState(), ...parsed, stats: { ...STORY.defaultState, ...parsed.stats } };
    } catch { return null; }
  }

  function showGame() {
    els.startScreen.hidden = true;
    els.startScreen.classList.remove("screen--active");
    els.gameScreen.hidden = false;
    els.gameScreen.classList.add("screen--active");
    window.scrollTo({ top: 0, behavior: "instant" });
    render();
  }

  function setSpeaker(speaker) {
    const normalized = (speaker || "Luna").toLowerCase();
    els.lunaCard.classList.toggle("active", normalized.includes("luna"));
    els.pipCard.classList.toggle("active", normalized.includes("pip"));
    els.speakerIcon.textContent = speaker ? speaker[0].toUpperCase() : "L";
  }

  function getNode() {
    if (state.currentNodeId === "ending") return resolveEnding();
    return STORY.nodes[state.currentNodeId] || STORY.nodes[STORY.startNodeId];
  }

  function resolveEnding() {
    const s = state.stats;
    let key = "slow_message";
    if (s.repair >= 7 && s.boundary >= 6 && (s.warmth + s.trust) >= 7) key = "slow_again";
    else if (s.future >= 5 && s.repair >= 5 && s.boundary >= 4) key = "terrace_talk";
    else if ((s.flower >= 5 || s.memory >= 7) && s.patience >= 5) key = "orchid_care";
    else key = "slow_message";
    state.completedEnding = key;
    return { ...STORY.endings[key], choices: [{ text: "Baştan oyna", next: "__restart" }, { text: "Bu finali kayıtta bırak", next: "__stay" }] };
  }

  function typeText(text) {
    clearInterval(typeTimer);
    fullText = text || "";
    els.dialogueText.textContent = "";
    els.skipTypeBtn.hidden = false;
    let i = 0;
    typeTimer = setInterval(() => {
      i += 2;
      els.dialogueText.textContent = fullText.slice(0, i);
      if (i >= fullText.length) finishType();
    }, 16);
  }

  function finishType() {
    clearInterval(typeTimer);
    els.dialogueText.textContent = fullText;
    els.skipTypeBtn.hidden = true;
  }

  function renderStats() {
    els.statList.innerHTML = "";
    for (const [key, label] of Object.entries(STORY.statLabels)) {
      const value = state.stats[key] || 0;
      const item = document.createElement("div");
      item.className = "stat-item";
      item.innerHTML = `<div class="stat-head"><span>${label}</span><strong>${value}</strong></div><div class="meter"><i style="width:${clamp(value,0,MAX_STAT) / MAX_STAT * 100}%"></i></div>`;
      els.statList.appendChild(item);
    }
  }

  function setMood(mood) {
    activeMood = mood || "warm";
    document.body.dataset.mood = activeMood;
    els.moodBackdrop.classList.remove("mood-warm", "mood-sad", "mood-hope");
    els.moodBackdrop.classList.add(`mood-${activeMood}`);
    updateMusic();
  }

  async function fadeAudio(audio, target, ms = 700) {
    const start = audio.volume;
    const steps = 18;
    const delta = (target - start) / steps;
    for (let i = 1; i <= steps; i++) {
      audio.volume = clamp(start + delta * i, 0, 1);
      await new Promise(r => setTimeout(r, ms / steps));
    }
    if (target === 0) audio.pause();
  }

  async function updateMusic() {
    els.musicBtn.classList.toggle("active", musicEnabled);
    if (!musicEnabled) {
      fadeAudio(els.warmMusic, 0, 350);
      fadeAudio(els.sadMusic, 0, 350);
      return;
    }
    const useSad = activeMood === "sad";
    const on = useSad ? els.sadMusic : els.warmMusic;
    const off = useSad ? els.warmMusic : els.sadMusic;
    try {
      on.volume = on.volume || 0.01;
      await on.play();
      fadeAudio(on, useSad ? 0.72 : 0.55, 700);
      fadeAudio(off, 0, 700);
    } catch {
      musicEnabled = false;
      els.musicBtn.classList.remove("active");
      toast("Tarayıcı ses izni için ilk dokunuşu bekliyor; ekrana dokunduğunda müzik açılacak.");
    }
  }

  function render() {
    const node = getNode();
    els.chapterTitle.textContent = node.chapter || "Sessiz Şehir";
    els.sceneTag.textContent = node.scene || "";
    els.speakerName.textContent = node.speaker || "Luna";
    setSpeaker(node.speaker || "Luna");
    setMood(node.mood || "warm");
    renderStats();
    typeText(node.text || "");
    els.choices.innerHTML = "";
    (node.choices || []).forEach((choice) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = `${choice.text}${choice.hint ? `<small>${choice.hint}</small>` : ""}`;
      btn.addEventListener("click", () => choose(choice));
      els.choices.appendChild(btn);
    });
    save();
  }

  function applyEffects(effects = {}) {
    Object.entries(effects).forEach(([key, value]) => {
      if (!(key in state.stats)) state.stats[key] = 0;
      state.stats[key] = clamp(state.stats[key] + value, 0, MAX_STAT);
    });
  }

  function choose(choice) {
    finishType();
    if (choice.next === "__restart") { startNew(); return; }
    if (choice.next === "__stay") { toast("Final kayıtta tutuldu."); return; }
    applyEffects(choice.effects);
    state.history.push({ node: state.currentNodeId, choice: choice.text });
    state.currentNodeId = choice.next;
    render();
  }

  function startNew() {
    state = createState();
    localStorage.removeItem(STORAGE_KEY);
    showGame();
    musicEnabled = true;
    updateMusic();
  }

  function continueGame() {
    state = load() || createState();
    showGame();
    musicEnabled = true;
    updateMusic();
  }

  function toast(message) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }


  function unlockMusicOnce() {
    if (musicUnlocked) return;
    musicUnlocked = true;
    musicEnabled = true;
    updateMusic();
  }

  function boot() {
    state = load() || createState();
    showGame();
    musicEnabled = true;
    updateMusic();
    document.addEventListener("pointerdown", unlockMusicOnce, { once: true, passive: true });
    document.addEventListener("keydown", unlockMusicOnce, { once: true });
  }

  els.newGameBtn.addEventListener("click", () => { musicEnabled = true; startNew(); });
  els.continueBtn.addEventListener("click", () => { musicEnabled = true; continueGame(); });
  els.skipTypeBtn.addEventListener("click", finishType);
  els.menuBtn.addEventListener("click", () => { els.sideMenu.classList.add("open"); els.sideMenu.setAttribute("aria-hidden", "false"); renderStats(); });
  els.closeMenuBtn.addEventListener("click", () => { els.sideMenu.classList.remove("open"); els.sideMenu.setAttribute("aria-hidden", "true"); });
  els.restartBtn.addEventListener("click", () => { if (confirm("Oyunu baştan başlatmak istiyor musun?")) startNew(); });
  els.exportBtn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(JSON.stringify(state)); toast("Kayıt kodu kopyalandı."); }
    catch { toast("Kopyalama başarısız oldu."); }
  });
  els.musicBtn.addEventListener("click", () => { musicEnabled = !musicEnabled; updateMusic(); });

  if (!load()) els.continueBtn.disabled = true;
  boot();
})();
