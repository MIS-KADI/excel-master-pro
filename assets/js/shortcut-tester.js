/**
 * Excel Master - Interactive Keyboard Shortcut Trainer & Muscle Memory Game
 * Captures live keydown events and grades keystrokes against target shortcuts.
 */

const ShortcutTrainer = {
  currentChallengeIndex: 0,
  streak: 0,
  highScore: parseInt(localStorage.getItem('excel_master_shortcut_highscore') || '0', 10),
  pressedKeys: new Set(),
  activeChallenge: null,
  isListening: false,
  showHint: false,

  challenges: [
    {
      action: { en: "Save Workbook", gu: "ફાઇલ સેવ કરો", hi: "फ़ाइल सेव करें" },
      keys: ["Control", "s"],
      displayKeys: ["Ctrl", "S"]
    },
    {
      action: { en: "Undo Last Action", gu: "અનડૂ કરો (છેલ્લી ભૂલ પાછી લાવો)", hi: "अंडू करें" },
      keys: ["Control", "z"],
      displayKeys: ["Ctrl", "Z"]
    },
    {
      action: { en: "Select Entire Row", gu: "આખી આડી લાઈન (Row) સિલેક્ટ કરો", hi: "पूरी पंक्ति चुनें" },
      keys: ["Shift", " "],
      displayKeys: ["Shift", "Space"]
    },
    {
      action: { en: "Select Entire Column", gu: "આખી ઊભી કોલમ (Column) સિલેક્ટ કરો", hi: "पूरा कॉलम चुनें" },
      keys: ["Control", " "],
      displayKeys: ["Ctrl", "Space"]
    },
    {
      action: { en: "Lock Cell Reference ($A$1)", gu: "સેલ લોક કરો ($A$1)", hi: "सेल लॉक करें ($A$1)" },
      keys: ["F4"],
      displayKeys: ["F4"]
    },
    {
      action: { en: "Edit Active Cell", gu: "સેલ એડિટ કરો (Edit Cell)", hi: "सेल एडिट करें" },
      keys: ["F2"],
      displayKeys: ["F2"]
    },
    {
      action: { en: "Open Format Cells Dialog", gu: "ફોર્મેટ સેલ્સ બોક્સ ખોલો", hi: "फ़ॉर्मेट सेल्स विंडो खोलें" },
      keys: ["Control", "1"],
      displayKeys: ["Ctrl", "1"]
    },
    {
      action: { en: "Bold Text Toggle", gu: "લખાણ બોલ્ડ (Bold) કરો", hi: "टेक्स्ट बोल्ड करें" },
      keys: ["Control", "b"],
      displayKeys: ["Ctrl", "B"]
    },
    {
      action: { en: "Insert Today's Date", gu: "આજની તારીખ ઉમેરો", hi: "आज की तारीख दर्ज करें" },
      keys: ["Control", ";"],
      displayKeys: ["Ctrl", ";"]
    },
    {
      action: { en: "AutoSum (=SUM)", gu: "ઝડપી ઓટોસમ (AutoSum)", hi: "ऑटो-सम करें" },
      keys: ["Alt", "="],
      displayKeys: ["Alt", "="]
    }
  ],

  init() {
    this.currentChallengeIndex = 0;
    this.activeChallenge = this.challenges[0];
    this.showHint = false;
    this.attachKeyboardListener();
  },

  attachKeyboardListener() {
    if (this.isListening) return;
    this.isListening = true;

    window.addEventListener('keydown', (e) => {
      // Only process when shortcut game tab is active
      if (App.activeTab !== 'shortcutGame') return;

      // Prevent default for common browser intercepts during game
      if ((e.ctrlKey && (e.key === 's' || e.key === 'f' || e.key === 'p' || e.key === 'b')) || e.key === 'F4') {
        e.preventDefault();
      }

      this.handleKeyDown(e);
    });
  },

  handleKeyDown(e) {
    if (!this.activeChallenge) return;

    // Check if the pressed key combo matches
    const target = this.activeChallenge.keys;
    let isMatch = false;

    if (target.length === 1 && target[0] === e.key) {
      isMatch = true;
    } else if (target.length === 2) {
      const modifier = target[0];
      const mainKey = target[1].toLowerCase();

      const modMatch = (modifier === 'Control' && (e.ctrlKey || e.metaKey)) ||
                       (modifier === 'Shift' && e.shiftKey) ||
                       (modifier === 'Alt' && e.altKey);

      const keyMatch = e.key.toLowerCase() === mainKey || 
                       (mainKey === ' ' && e.key === ' ') ||
                       (mainKey === ';' && e.key === ';') ||
                       (mainKey === '=' && (e.key === '=' || e.key === '+'));

      if (modMatch && keyMatch) {
        isMatch = true;
      }
    }

    const feedbackEl = document.getElementById('gameFeedbackMessage');
    const streakEl = document.getElementById('gameStreakDisplay');

    if (isMatch) {
      this.streak++;
      if (this.streak > this.highScore) {
        this.highScore = this.streak;
        localStorage.setItem('excel_master_shortcut_highscore', this.highScore);
      }

      if (feedbackEl) {
        feedbackEl.className = "game-feedback text-green-500 font-bold text-lg animate-bounce";
        feedbackEl.innerText = I18N.t('gameCorrectMsg');
      }

      setTimeout(() => {
        this.nextChallenge();
      }, 900);
    } else if (!['Control', 'Shift', 'Alt', 'Meta'].includes(e.key)) {
      this.streak = 0;
      if (feedbackEl) {
        feedbackEl.className = "game-feedback text-red-500 font-bold text-lg animate-shake";
        feedbackEl.innerText = I18N.t('gameWrongMsg');
      }
    }

    if (streakEl) streakEl.innerText = this.streak;
  },

  nextChallenge() {
    this.currentChallengeIndex = (this.currentChallengeIndex + 1) % this.challenges.length;
    this.activeChallenge = this.challenges[this.currentChallengeIndex];
    this.showHint = false;
    this.renderGame();
  },

  toggleHint() {
    this.showHint = !this.showHint;
    this.renderGame();
  },

  renderGame() {
    const container = document.getElementById('shortcutGameContainer');
    if (!container) return;

    const lang = I18N.currentLang;
    const challenge = this.activeChallenge || this.challenges[0];

    container.innerHTML = `
      <div class="shortcut-game-card text-center p-8 bg-card rounded-2xl border border-border shadow-lg max-w-xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <span class="text-sm font-bold text-muted">${I18N.t('gameStreak')}: <strong id="gameStreakDisplay" class="text-accent text-xl">${this.streak}</strong></span>
          <span class="text-sm font-bold text-muted">${I18N.t('gameHighScore')}: <strong class="text-xl">🏆 ${this.highScore}</strong></span>
        </div>

        <span class="text-xs uppercase font-bold tracking-widest text-muted block mb-2">${I18N.t('gamePrompt')}</span>
        
        <h2 class="text-2xl md:text-3xl font-extrabold text-main mb-6">
          "${challenge.action[lang] || challenge.action.en}"
        </h2>

        <div class="keystroke-listening-box p-6 bg-card-subtle rounded-xl border-2 border-dashed border-accent mb-6">
          <div class="text-4xl mb-2">⌨️</div>
          <p class="text-sm text-muted">Press the keys directly on your keyboard right now!</p>
        </div>

        <div id="gameFeedbackMessage" class="game-feedback mb-6 min-h-[32px] font-bold"></div>

        ${this.showHint ? `
          <div class="hint-box mb-6 p-3 bg-subtle rounded-lg text-sm font-mono text-accent animate-fade-in">
            💡 Target Shortcut: <strong>${challenge.displayKeys.join(' + ')}</strong>
          </div>
        ` : ''}

        <div class="flex items-center justify-center gap-3">
          <button class="btn btn-secondary" onclick="ShortcutTrainer.toggleHint()">
            💡 ${I18N.t('gameHintBtn')}
          </button>
          <button class="btn btn-primary" onclick="ShortcutTrainer.nextChallenge()">
            ${I18N.t('gameNextBtn')}
          </button>
        </div>
      </div>
    `;
  }
};
