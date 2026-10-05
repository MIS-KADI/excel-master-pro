/**
 * Excel Master Pro - Core Application Orchestrator
 * Routing, Dynamic Translations, Search, Filtering, Bookmarks, Modals, Theme & PWA
 */

const App = {
  activeTab: 'formulas',
  activeCategory: 'all',
  currentSearchQuery: '',
  selectedPlatform: 'win', // 'win' or 'mac'
  favorites: JSON.parse(localStorage.getItem('excel_master_favorites') || '[]'),
  deferredInstallPrompt: null,

  init() {
    this.initTheme();
    this.initLanguage();
    this.initNavigation();
    this.initSearch();
    this.initPWA();
    if (typeof FirebaseAuthManager !== 'undefined') {
      FirebaseAuthManager.init();
    }
    
    // Check if user is logged in before unlocking site
    this.checkAuthGate();

    // Subscribe to translation updates
    I18N.subscribe(() => {
      this.updateStaticUIText();
      if (typeof FirebaseAuthManager !== 'undefined') {
        FirebaseAuthManager.renderHeaderAuthButton();
      }
      this.checkAuthGate();
    });
  },

  /**
   * Authentication Gateway (Auth Wall)
   * The site opens ONLY after login!
   */
  checkAuthGate() {
    const isLogged = typeof FirebaseAuthManager !== 'undefined' && FirebaseAuthManager.isLoggedIn();
    const appShell = document.getElementById('appShellWrapper');
    const mobileNav = document.getElementById('mobileBottomNav');
    const gateway = document.getElementById('authGatewayScreen');

    if (!isLogged) {
      // User is NOT logged in: Lock the site & show Auth Gateway
      if (appShell) appShell.classList.add('hidden');
      if (mobileNav) mobileNav.classList.add('hidden');
      if (gateway) {
        gateway.classList.remove('hidden');
        this.renderAuthGateway(gateway);
      }
    } else {
      // User IS logged in: Unlock full site
      if (gateway) gateway.classList.add('hidden');
      if (appShell) appShell.classList.remove('hidden');
      if (mobileNav) mobileNav.classList.remove('hidden');
      this.render();
      if (typeof FirebaseAuthManager !== 'undefined') {
        FirebaseAuthManager.renderHeaderAuthButton();
      }
    }
  },

  /**
   * Theme Management: Light / Dark Mode
   */
  initTheme() {
    const savedTheme = localStorage.getItem('excel_master_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.setTheme(savedTheme);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
      });
    }
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('excel_master_theme', theme);
    const icon = document.getElementById('themeToggleIcon');
    if (icon) {
      icon.innerText = theme === 'dark' ? '☀️' : '🌙';
    }
  },

  /**
   * Language Management: Trilingual Switching
   */
  initLanguage() {
    const select = document.getElementById('langSelect');
    if (select) {
      select.value = I18N.currentLang;
      select.addEventListener('change', (e) => {
        I18N.setLanguage(e.target.value);
      });
    }
    this.updateStaticUIText();
  },

  updateStaticUIText() {
    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerText = I18N.t(key);
    });

    // Update search placeholder
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.placeholder = I18N.t('searchPlaceholder');
    }

    // Update page title
    document.title = `${I18N.t('appName')} - ${I18N.t('appTagline')}`;
  },

  /**
   * Navigation & Tabs
   */
  initNavigation() {
    // Desktop Nav Items
    document.querySelectorAll('.sidebar .nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
        this.closeMobileSidebar();
      });
    });

    // Mobile Bottom Nav Items
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Mobile Hamburger
    const menuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Backdrop click to close sidebar
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 900 && 
          sidebar && 
          sidebar.classList.contains('open') && 
          !sidebar.contains(e.target) && 
          !menuBtn.contains(e.target)) {
        this.closeMobileSidebar();
      }
    });
  },

  closeMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.remove('open');
  },

  switchTab(tab) {
    this.activeTab = tab;

    // Update Desktop Nav Active
    document.querySelectorAll('.sidebar .nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    // Update Mobile Nav Active
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    // Reset Category
    this.activeCategory = 'all';

    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Search Engine
   */
  initSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentSearchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }
  },

  /**
   * PWA Setup
   */
  initPWA() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredInstallPrompt = e;
      const installBtn = document.getElementById('pwaInstallBtn');
      if (installBtn) installBtn.classList.remove('hidden');
    });

    const installBtn = document.getElementById('pwaInstallBtn');
    if (installBtn) {
      installBtn.addEventListener('click', () => {
        if (this.deferredInstallPrompt) {
          this.deferredInstallPrompt.prompt();
          this.deferredInstallPrompt.userChoice.then(() => {
            this.deferredInstallPrompt = null;
            installBtn.classList.add('hidden');
          });
        }
      });
    }
  },

  /**
   * Main Render Switcher
   */
  render() {
    const container = document.getElementById('mainContentBody');
    if (!container) return;

    if (this.activeTab === 'formulas') {
      this.renderFormulasView(container);
    } else if (this.activeTab === 'shortcuts') {
      this.renderShortcutsView(container);
    } else if (this.activeTab === 'course') {
      this.renderCourseView(container);
    } else if (this.activeTab === 'exam') {
      this.renderExamView(container);
    } else if (this.activeTab === 'playground') {
      this.renderPlaygroundView(container);
    } else if (this.activeTab === 'generator') {
      this.renderGeneratorView(container);
    } else if (this.activeTab === 'quiz') {
      this.renderQuizView(container);
    } else if (this.activeTab === 'errors') {
      this.renderErrorsView(container);
    } else if (this.activeTab === 'shortcutGame') {
      this.renderShortcutGameView(container);
    } else if (this.activeTab === 'practiceSheets') {
      this.renderPracticeSheetsView(container);
    } else if (this.activeTab === 'certificate') {
      this.renderCertificateView(container);
    } else if (this.activeTab === 'auth') {
      this.renderAuthView(container);
    } else if (this.activeTab === 'favorites') {
      this.renderFavoritesView(container);
    } else if (this.activeTab === 'cheatsheet') {
      this.renderCheatSheetView(container);
    }
  },

  /**
   * 1. Render Formulas & Functions View
   */
  renderFormulasView(container) {
    const lang = I18N.currentLang;
    const categories = [
      { id: "all", label: I18N.t('catAll') },
      { id: "lookup", label: I18N.t('catLookup') },
      { id: "math", label: I18N.t('catMath') },
      { id: "stats", label: I18N.t('catStats') },
      { id: "logical", label: I18N.t('catLogical') },
      { id: "text", label: I18N.t('catText') },
      { id: "date", label: I18N.t('catDate') },
      { id: "arrays", label: I18N.t('catArrays') },
      { id: "finance", label: I18N.t('catFinance') }
    ];

    // Filter by category and search
    const filtered = EXCEL_FORMULAS.filter(f => {
      const matchCat = this.activeCategory === 'all' || f.category === this.activeCategory;
      if (!matchCat) return false;

      if (!this.currentSearchQuery) return true;
      const q = this.currentSearchQuery;

      const nameMatch = f.name.toLowerCase().includes(q);
      const syntaxMatch = f.syntax.toLowerCase().includes(q);
      const sumEn = (f.summary.en || "").toLowerCase();
      const sumGu = (f.summary.gu || "").toLowerCase();
      const sumHi = (f.summary.hi || "").toLowerCase();
      const scenEn = (f.scenario.en || "").toLowerCase();
      const scenGu = (f.scenario.gu || "").toLowerCase();
      const scenHi = (f.scenario.hi || "").toLowerCase();

      return nameMatch || syntaxMatch || sumEn.includes(q) || sumGu.includes(q) || sumHi.includes(q) ||
             scenEn.includes(q) || scenGu.includes(q) || scenHi.includes(q);
    });

    let html = `
      <div class="section-header">
        <h2 class="section-title">${I18N.t('tabFormulas')}</h2>
        <p class="section-subtitle">${I18N.t('appTagline')}</p>
      </div>

      <div class="filter-pills-bar">
        ${categories.map(c => `
          <button class="pill-btn ${this.activeCategory === c.id ? 'active' : ''}" 
                  onclick="App.setCategory('${c.id}')">
            ${c.label}
          </button>
        `).join('')}
      </div>
    `;

    if (filtered.length === 0) {
      html += `
        <div class="text-center py-12 text-muted">
          <p class="text-xl">🔍 ${I18N.t('noResults')}</p>
        </div>
      `;
    } else {
      html += `
        <div class="formulas-grid">
          ${filtered.map(f => {
            const isFav = this.favorites.includes(f.id);
            const levelLabel = f.difficulty === 'beginner' 
              ? I18N.t('levelBeginner') 
              : (f.difficulty === 'intermediate' ? I18N.t('levelIntermediate') : I18N.t('levelAdvanced'));

            return `
              <div class="formula-card">
                <div>
                  <div class="formula-card-top">
                    <span class="formula-name">${f.name}</span>
                    <div class="formula-badges">
                      <span class="badge badge-${f.difficulty}">${levelLabel}</span>
                      <button class="btn-star ${isFav ? 'favorited' : ''}" 
                              title="${I18N.t('favoriteBtn')}"
                              onclick="App.toggleFavorite('${f.id}')">
                        ★
                      </button>
                    </div>
                  </div>

                  <div class="formula-syntax-box">${this.escapeHtml(f.syntax)}</div>
                  <p class="formula-summary">${f.summary[lang] || f.summary.en}</p>
                </div>

                <div class="formula-card-footer">
                  <button class="btn btn-secondary btn-sm" onclick="App.copyText('${this.escapeHtml(f.syntax)}')">
                    📋 ${I18N.t('copyFormula')}
                  </button>
                  <button class="btn btn-primary btn-sm" onclick="App.openFormulaModal('${f.id}')">
                    📊 ${I18N.t('tableExampleLabel').replace(':', '')} →
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = html;
  },

  setCategory(cat) {
    this.activeCategory = cat;
    this.render();
  },

  /**
   * 2. Render Keyboard Shortcuts View
   */
  renderShortcutsView(container) {
    const lang = I18N.currentLang;
    const categories = [
      { id: "all", label: I18N.t('filterAll') },
      { id: "scBasic", label: I18N.t('scBasic') },
      { id: "scNav", label: I18N.t('scNav') },
      { id: "scEdit", label: I18N.t('scEdit') },
      { id: "scFormat", label: I18N.t('scFormat') },
      { id: "scFormulas", label: I18N.t('scFormulas') },
      { id: "scRows", label: I18N.t('scRows') },
      { id: "scFilter", label: I18N.t('scFilter') }
    ];

    const filtered = EXCEL_SHORTCUTS.filter(s => {
      const matchCat = this.activeCategory === 'all' || s.category === this.activeCategory;
      if (!matchCat) return false;

      if (!this.currentSearchQuery) return true;
      const q = this.currentSearchQuery;

      const actEn = (s.action.en || "").toLowerCase();
      const actGu = (s.action.gu || "").toLowerCase();
      const actHi = (s.action.hi || "").toLowerCase();
      const descEn = (s.description.en || "").toLowerCase();
      const descGu = (s.description.gu || "").toLowerCase();
      const descHi = (s.description.hi || "").toLowerCase();
      const keysStr = [...s.keysWin, ...s.keysMac].join(' ').toLowerCase();

      return actEn.includes(q) || actGu.includes(q) || actHi.includes(q) ||
             descEn.includes(q) || descGu.includes(q) || descHi.includes(q) ||
             keysStr.includes(q);
    });

    let html = `
      <div class="section-header flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 class="section-title">${I18N.t('tabShortcuts')}</h2>
          <p class="section-subtitle">${filtered.length} ${I18N.t('shortcutsCount')}</p>
        </div>

        <div class="flex items-center gap-2 bg-card p-1 rounded-xl border border-border">
          <button class="pill-btn ${this.selectedPlatform === 'win' ? 'active' : ''}" 
                  onclick="App.setPlatform('win')">
            🪟 ${I18N.t('windowsMode')}
          </button>
          <button class="pill-btn ${this.selectedPlatform === 'mac' ? 'active' : ''}" 
                  onclick="App.setPlatform('mac')">
            🍎 ${I18N.t('macMode')}
          </button>
        </div>
      </div>

      <div class="filter-pills-bar">
        ${categories.map(c => `
          <button class="pill-btn ${this.activeCategory === c.id ? 'active' : ''}" 
                  onclick="App.setCategory('${c.id}')">
            ${c.label}
          </button>
        `).join('')}
      </div>
    `;

    if (filtered.length === 0) {
      html += `
        <div class="text-center py-12 text-muted">
          <p class="text-xl">🔍 ${I18N.t('noResults')}</p>
        </div>
      `;
    } else {
      html += `
        <div class="shortcuts-grid">
          ${filtered.map(s => {
            const isFav = this.favorites.includes(s.id);
            const keys = this.selectedPlatform === 'mac' ? s.keysMac : s.keysWin;

            return `
              <div class="shortcut-card">
                <div>
                  <div class="shortcut-header">
                    <h3 class="shortcut-action-title">${s.action[lang] || s.action.en}</h3>
                    <button class="btn-star ${isFav ? 'favorited' : ''}" 
                            title="${I18N.t('favoriteBtn')}"
                            onclick="App.toggleFavorite('${s.id}')">
                      ★
                    </button>
                  </div>
                  <p class="shortcut-desc mt-2">${s.description[lang] || s.description.en}</p>
                </div>

                <div class="shortcut-footer">
                  <div class="kbd-wrap">
                    ${keys.map((k, idx) => `
                      <kbd>${k}</kbd>
                      ${idx < keys.length - 1 ? '<span class="kbd-plus">+</span>' : ''}
                    `).join('')}
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="App.copyText('${keys.join(' + ')}')">
                    📋
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = html;
  },

  setPlatform(plat) {
    this.selectedPlatform = plat;
    this.render();
  },

  /**
   * 3. Render Live Playground
   */
  renderPlaygroundView(container) {
    const lang = I18N.currentLang;

    let html = `
      <div class="section-header">
        <h2 class="section-title">${I18N.t('playgroundTitle')}</h2>
        <p class="section-subtitle">${I18N.t('playgroundSubtitle')}</p>
      </div>

      <!-- Controls bar: Template Picker & Actions -->
      <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
        <div class="flex items-center gap-2">
          <label class="text-sm font-bold text-muted">${I18N.t('loadTemplate')}</label>
          <select class="form-control" style="width: auto;" onchange="ExcelPlayground.loadTemplate(this.value)">
            <option value="sales" ${ExcelPlayground.selectedTemplate === 'sales' ? 'selected' : ''}>${I18N.t('templateSales')}</option>
            <option value="marks" ${ExcelPlayground.selectedTemplate === 'marks' ? 'selected' : ''}>${I18N.t('templateMarks')}</option>
            <option value="expense" ${ExcelPlayground.selectedTemplate === 'expense' ? 'selected' : ''}>${I18N.t('templateExpense')}</option>
            <option value="staff" ${ExcelPlayground.selectedTemplate === 'staff' ? 'selected' : ''}>${I18N.t('templateStaff')}</option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <button class="btn btn-secondary btn-sm" onclick="ExcelPlayground.loadTemplate(ExcelPlayground.selectedTemplate)">
            🔄 ${I18N.t('resetSheet')}
          </button>
        </div>
      </div>

      <!-- Excel Formula Bar -->
      <div class="excel-formula-bar-container">
        <span class="excel-cell-name-box" id="activeCellBadge">C7</span>
        <span class="excel-fx-icon">fx</span>
        <input type="text" 
               id="playgroundFormulaInput" 
               class="excel-formula-input" 
               value="=SUM(C2:C6)" 
               oninput="ExcelPlayground.evaluateCurrentFormula()" />
        <div class="badge badge-beginner" id="playgroundOutputBadge">
          Calculating...
        </div>
      </div>

      <!-- Interactive Grid Holder -->
      <div id="playgroundGridContainer"></div>

      <!-- Quick formula suggestion pills -->
      <div class="mt-4">
        <span class="text-xs font-bold uppercase text-muted block mb-2">⚡ Quick Test Formulas:</span>
        <div class="flex gap-2 flex-wrap">
          <button class="pill-btn" onclick="App.testFormulaInPlayground('=SUM(C2:C6)')">=SUM(C2:C6)</button>
          <button class="pill-btn" onclick="App.testFormulaInPlayground('=AVERAGE(C2:C6)')">=AVERAGE(C2:C6)</button>
          <button class="pill-btn" onclick="App.testFormulaInPlayground('=MAX(C2:C6)')">=MAX(C2:C6)</button>
          <button class="pill-btn" onclick="App.testFormulaInPlayground('=MIN(C2:C6)')">=MIN(C2:C6)</button>
          <button class="pill-btn" onclick="App.testFormulaInPlayground('=COUNT(C2:C6)')">=COUNT(C2:C6)</button>
          <button class="pill-btn" onclick="App.testFormulaInPlayground('=ROUND(C2*18%, 2)')">=ROUND(C2*18%, 2)</button>
        </div>
      </div>
    `;

    container.innerHTML = html;
    ExcelPlayground.loadTemplate(ExcelPlayground.selectedTemplate);
  },

  testFormulaInPlayground(formula) {
    ExcelPlayground.setFormulaBar(formula);
    ExcelPlayground.evaluateCurrentFormula();
  },

  /**
   * 4. Render Formula Generator / Helper
   */
  renderGeneratorView(container) {
    let html = `
      <div class="section-header text-center max-w-2xl mx-auto mb-6">
        <h2 class="section-title">${I18N.t('genTitle')}</h2>
        <p class="section-subtitle">${I18N.t('genSubtitle')}</p>
      </div>
      <div id="generatorContainer"></div>
    `;
    container.innerHTML = html;
    FormulaGenerator.renderGenerator();
  },

  /**
   * 5. Render Quiz & Knowledge Challenge
   */
  renderQuizView(container) {
    let html = `
      <div class="section-header text-center max-w-2xl mx-auto mb-6">
        <h2 class="section-title">${I18N.t('quizTitle')}</h2>
        <p class="section-subtitle">${I18N.t('quizSubtitle')}</p>
      </div>
      <div id="quizContainer"></div>
    `;
    container.innerHTML = html;
    QuizEngine.renderQuiz();
  },

  /**
   * 6. Render Favorites (Saved)
   */
  renderFavoritesView(container) {
    const lang = I18N.currentLang;
    const favFormulas = EXCEL_FORMULAS.filter(f => this.favorites.includes(f.id));
    const favShortcuts = EXCEL_SHORTCUTS.filter(s => this.favorites.includes(s.id));

    let html = `
      <div class="section-header">
        <h2 class="section-title">${I18N.t('tabFavorites')}</h2>
        <p class="section-subtitle">${favFormulas.length + favShortcuts.length} Items Saved</p>
      </div>
    `;

    if (favFormulas.length === 0 && favShortcuts.length === 0) {
      html += `
        <div class="text-center py-16 text-muted">
          <div class="text-5xl mb-3">⭐</div>
          <p class="text-lg max-w-md mx-auto">${I18N.t('emptyFavorites')}</p>
        </div>
      `;
    } else {
      if (favFormulas.length > 0) {
        html += `
          <h3 class="text-lg font-bold mb-4 text-accent">📘 ${I18N.t('tabFormulas')} (${favFormulas.length})</h3>
          <div class="formulas-grid mb-8">
            ${favFormulas.map(f => `
              <div class="formula-card">
                <div>
                  <div class="formula-card-top">
                    <span class="formula-name">${f.name}</span>
                    <button class="btn-star favorited" onclick="App.toggleFavorite('${f.id}')">★</button>
                  </div>
                  <div class="formula-syntax-box">${this.escapeHtml(f.syntax)}</div>
                  <p class="formula-summary">${f.summary[lang] || f.summary.en}</p>
                </div>
                <div class="formula-card-footer">
                  <button class="btn btn-secondary btn-sm" onclick="App.copyText('${this.escapeHtml(f.syntax)}')">
                    📋 ${I18N.t('copyFormula')}
                  </button>
                  <button class="btn btn-primary btn-sm" onclick="App.openFormulaModal('${f.id}')">
                    📊 Details →
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      if (favShortcuts.length > 0) {
        html += `
          <h3 class="text-lg font-bold mb-4 text-accent">⌨️ ${I18N.t('tabShortcuts')} (${favShortcuts.length})</h3>
          <div class="shortcuts-grid">
            ${favShortcuts.map(s => {
              const keys = this.selectedPlatform === 'mac' ? s.keysMac : s.keysWin;
              return `
                <div class="shortcut-card">
                  <div>
                    <div class="shortcut-header">
                      <h4 class="shortcut-action-title">${s.action[lang] || s.action.en}</h4>
                      <button class="btn-star favorited" onclick="App.toggleFavorite('${s.id}')">★</button>
                    </div>
                    <p class="shortcut-desc mt-2">${s.description[lang] || s.description.en}</p>
                  </div>
                  <div class="shortcut-footer">
                    <div class="kbd-wrap">
                      ${keys.map((k, idx) => `
                        <kbd>${k}</kbd>
                        ${idx < keys.length - 1 ? '<span class="kbd-plus">+</span>' : ''}
                      `).join('')}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }
    }

    container.innerHTML = html;
  },

  /**
   * 7. Render Cheat Sheet & Print View
   */
  renderCheatSheetView(container) {
    const lang = I18N.currentLang;

    let html = `
      <div class="section-header flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 class="section-title">📄 ${I18N.t('tabCheatSheet')}</h2>
          <p class="section-subtitle">${I18N.t('appTagline')}</p>
        </div>
        <button class="btn btn-primary" onclick="window.print()">
          🖨️ ${I18N.t('printSheet')}
        </button>
      </div>

      <div class="cheat-sheet-print-container space-y-6">
        <div class="bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h3 class="text-xl font-bold mb-4 text-accent">⚡ Top 10 Everyday Excel Formulas</h3>
          <div class="overflow-x-auto">
            <table class="excel-sheet-table">
              <thead>
                <tr class="excel-th-row">
                  <th class="excel-header-label">Formula</th>
                  <th class="excel-header-label">Syntax</th>
                  <th class="excel-header-label">Purpose / Scenario</th>
                </tr>
              </thead>
              <tbody>
                ${EXCEL_FORMULAS.slice(0, 10).map(f => `
                  <tr>
                    <td class="excel-cell font-bold text-accent">${f.name}</td>
                    <td class="excel-cell font-mono text-xs">${this.escapeHtml(f.syntax)}</td>
                    <td class="excel-cell text-sm">${f.summary[lang] || f.summary.en}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h3 class="text-xl font-bold mb-4 text-accent">⌨️ Essential Keyboard Shortcuts Quick Reference</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${EXCEL_SHORTCUTS.slice(0, 16).map(s => `
              <div class="p-3 bg-card-subtle rounded-lg flex items-center justify-between">
                <span class="text-sm font-semibold">${s.action[lang] || s.action.en}</span>
                <div class="kbd-wrap">
                  ${s.keysWin.map(k => `<kbd>${k}</kbd>`).join(' + ')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  /**
   * 8. Render Excel Errors Master Guide
   */
  renderErrorsView(container) {
    const lang = I18N.currentLang;

    let html = `
      <div class="section-header">
        <h2 class="section-title">⚠️ ${I18N.t('tabErrors')}</h2>
        <p class="section-subtitle">Complete diagnostics, root causes, and instant fixes for all Excel error codes.</p>
      </div>

      <div class="space-y-6">
        ${EXCEL_ERRORS.map(err => `
          <div class="error-master-card bg-card p-6 rounded-2xl border border-border shadow-sm mb-6">
            <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
              <div class="flex items-center gap-3">
                <span class="text-xl font-mono font-extrabold px-3 py-1 rounded-lg bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                  ${err.code}
                </span>
                <h3 class="text-lg font-bold text-main">${err.title[lang] || err.title.en}</h3>
              </div>
            </div>

            <p class="text-sm text-muted mb-4 font-medium">${err.meaning[lang] || err.meaning.en}</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <!-- Causes -->
              <div class="p-4 bg-card-subtle rounded-xl border border-border">
                <h4 class="text-xs font-bold uppercase text-red-500 mb-2">❌ Common Causes:</h4>
                <ul class="text-xs space-y-1.5 list-disc pl-4 text-muted">
                  ${(err.causes[lang] || err.causes.en).map(c => `<li>${c}</li>`).join('')}
                </ul>
              </div>

              <!-- Instant Fix -->
              <div class="p-4 bg-highlight rounded-xl border border-border">
                <h4 class="text-xs font-bold uppercase text-accent mb-2">✅ How to Fix:</h4>
                <p class="text-xs text-main font-medium mb-3">${err.fixExplanation[lang] || err.fixExplanation.en}</p>
                <div class="flex items-center justify-between gap-2 p-2 bg-card rounded-lg border border-border">
                  <code class="text-xs font-mono font-bold text-accent">${this.escapeHtml(err.fixedFormula)}</code>
                  <button class="btn btn-secondary btn-sm" onclick="App.copyText('${this.escapeHtml(err.fixedFormula)}')">
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  },

  /**
   * 9. Render Shortcut Keystroke Trainer Game
   */
  renderShortcutGameView(container) {
    let html = `
      <div class="section-header text-center max-w-xl mx-auto mb-6">
        <h2 class="section-title">🎮 ${I18N.t('gameTitle')}</h2>
        <p class="section-subtitle">${I18N.t('gameSubtitle')}</p>
      </div>
      <div id="shortcutGameContainer"></div>
    `;
    container.innerHTML = html;
    ShortcutTrainer.init();
    ShortcutTrainer.renderGame();
  },

  /**
   * 10. Render Practice Workbooks Exporter (.csv)
   */
  renderPracticeSheetsView(container) {
    const lang = I18N.currentLang;

    let html = `
      <div class="section-header">
        <h2 class="section-title">📥 ${I18N.t('workbooksTitle')}</h2>
        <p class="section-subtitle">${I18N.t('workbooksSubtitle')}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${PracticeExporter.datasets.map(ds => `
          <div class="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
            <div>
              <div class="text-4xl mb-3">📁</div>
              <h3 class="text-lg font-bold mb-2 text-main">${ds.title[lang] || ds.title.en}</h3>
              <p class="text-xs text-muted mb-4">${ds.practiceGoal[lang] || ds.practiceGoal.en}</p>
            </div>
            <div>
              <button class="btn btn-primary w-full" onclick="PracticeExporter.download('${ds.id}')">
                📥 ${I18N.t('downloadWorkbookBtn')}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  },

  /**
   * Render Online Structured Course (7 Progressive Modules)
   */
  renderCourseView(container) {
    const lang = I18N.currentLang;
    const progress = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0;
    const completedCount = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.completedModules.length : 0;
    const totalCount = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.modules.length : 7;
    const isFinished = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();

    let html = `
      <div class="section-header">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 class="section-title">📚 ${I18N.t('courseTitle')}</h2>
            <p class="section-subtitle">${I18N.t('courseSubtitle')}</p>
          </div>
          ${isFinished ? `
            <button class="btn btn-primary font-bold shadow-lg" onclick="App.switchTab('exam')">
              ⏱️ ${I18N.t('startExamFromCourse')}
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Course Progress Dashboard -->
      <div class="bg-card p-6 rounded-2xl border border-border shadow-sm mb-8">
        <div class="flex items-center justify-between flex-wrap gap-4 mb-3">
          <div>
            <span class="text-xs uppercase font-bold text-accent">${I18N.t('courseProgress')}</span>
            <h3 class="text-xl font-extrabold text-main">
              ${completedCount} of ${totalCount} Modules Completed (${progress}%)
            </h3>
          </div>
          <div>
            <span class="badge ${isFinished ? 'badge-beginner' : 'badge-intermediate'} text-sm font-bold">
              ${isFinished ? '🎉 Course Completed!' : 'In Progress'}
            </span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-card-subtle rounded-full h-3.5 border border-border overflow-hidden">
          <div class="bg-accent h-3.5 rounded-full transition-all duration-500" style="width: ${progress}%;"></div>
        </div>
      </div>

      <!-- 7 Module Cards -->
      <div class="space-y-6">
        ${EXCEL_COURSE.modules.map(mod => {
          const isDone = EXCEL_COURSE.isCompleted(mod.id);
          const lessonsList = mod.lessons[lang] || mod.lessons.en;

          return `
            <div class="course-module-card bg-card p-6 rounded-2xl border ${isDone ? 'border-green-500/50' : 'border-border'} shadow-sm transition-all mb-6">
              <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div class="flex items-center gap-3">
                  <span class="w-10 h-10 rounded-xl font-bold flex items-center justify-center text-base ${isDone ? 'bg-green-600 text-white' : 'bg-accent/10 text-accent'}">
                    ${isDone ? '✓' : mod.number}
                  </span>
                  <div>
                    <span class="text-xs uppercase font-bold text-muted">Module ${mod.number} • ⏱️ ${mod.duration}</span>
                    <h3 class="text-lg font-bold text-main">${mod.title[lang] || mod.title.en}</h3>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button class="btn ${isDone ? 'btn-secondary text-green-600 font-bold' : 'btn-primary btn-sm'}" 
                          onclick="EXCEL_COURSE.toggleComplete('${mod.id}')">
                    ${isDone ? '✓ ' + I18N.t('completedBadge') : I18N.t('markComplete')}
                  </button>
                </div>
              </div>

              <p class="text-sm text-muted mb-4 font-medium">${mod.summary[lang] || mod.summary.en}</p>

              <!-- Lessons List -->
              <div class="p-4 bg-card-subtle rounded-xl border border-border mb-4">
                <h4 class="text-xs uppercase font-bold text-accent mb-2">📖 Curriculum Topics & Hands-on:</h4>
                <ul class="text-xs space-y-2 list-disc pl-4 text-main">
                  ${lessonsList.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>

              <!-- Module Action Footer -->
              <div class="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-border">
                <div class="flex items-center gap-2">
                  <span class="text-xs text-muted">Interactive Demo Formula:</span>
                  <code class="text-xs font-mono font-bold text-accent bg-card px-2 py-1 rounded border border-border">
                    ${this.escapeHtml(mod.practiceFormula)}
                  </code>
                </div>

                <button class="btn btn-secondary btn-sm" onclick="App.practiceModuleInPlayground('${mod.practiceTemplate}', '${this.escapeHtml(mod.practiceFormula)}')">
                  🧪 ${I18N.t('practiceExercise')} →
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Bottom completion footer -->
      <div class="mt-8 p-6 bg-highlight rounded-2xl border border-border text-center">
        <h3 class="text-xl font-extrabold text-main mb-2">તમામ ૭ મોડ્યુલ પૂર્ણ કર્યા બાદ સર્ટિફિકેશન પરીક્ષા આપો</h3>
        <p class="text-sm text-muted mb-4">પરીક્ષામાં ૧૦ પ્રશ્નો હશે અને પાસ થવા ૭૦% માર્ક્સ મેળવવા જરૂરી છે.</p>
        <button class="btn btn-primary px-8 py-3 text-base font-bold shadow-md" onclick="App.switchTab('exam')">
          🚀 Go to Live Exam Section
        </button>
      </div>
    `;

    container.innerHTML = html;
  },

  practiceModuleInPlayground(template, formula) {
    this.switchTab('playground');
    setTimeout(() => {
      ExcelPlayground.loadTemplate(template);
      this.testFormulaInPlayground(formula);
    }, 100);
  },

  /**
   * Render Live Timed Exam
   */
  renderExamView(container) {
    let html = `
      <div class="section-header text-center max-w-xl mx-auto mb-6">
        <h2 class="section-title">⏱️ ${I18N.t('tabExam')}</h2>
        <p class="section-subtitle">${I18N.t('examSubtitle')}</p>
      </div>
      <div id="examContainer"></div>
    `;
    container.innerHTML = html;
    LiveExamEngine.renderExamInterface();
  },

  /**
   * 11. Render Certificate View (Gated)
   */
  renderCertificateView(container) {
    CertificateGenerator.renderCertificatePage(container);
  },

  /**
   * Detail Modal with Full Interactive Table & Explanations
   */
  openFormulaModal(formulaId) {
    const f = EXCEL_FORMULAS.find(item => item.id === formulaId);
    if (!f) return;

    const modalBackdrop = document.getElementById('formulaModal');
    const modalBody = document.getElementById('modalBody');
    if (!modalBackdrop || !modalBody) return;

    const lang = I18N.currentLang;
    const headers = f.table.headers[lang] || f.table.headers.en;
    const steps = f.steps[lang] || f.steps.en;
    const proTip = f.proTip ? (f.proTip[lang] || f.proTip.en) : null;
    const speechText = `${f.name}. ${f.summary[lang] || f.summary.en}. Scenario: ${f.scenario[lang] || f.scenario.en}`;

    let html = `
      <div class="flex items-center justify-between border-b border-border pb-4 mb-4 flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <span class="text-2xl font-extrabold text-accent font-mono">${f.name}</span>
          <span class="badge badge-${f.difficulty}">${f.difficulty.toUpperCase()}</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Voice Narration Speaker Button -->
          <button id="voiceNarrationBtn" class="btn btn-secondary btn-sm" onclick="VoiceAssistant.toggleSpeech('${this.escapeHtml(speechText)}')">
            🔊 ${I18N.t('voiceListen')}
          </button>

          <!-- Step-by-Step Evaluator Button -->
          <button class="btn btn-secondary btn-sm" onclick="ExcelPlayground.openEvaluatorModal('${this.escapeHtml(f.table.formulaApplied)}')">
            🔍 ${I18N.t('evaluateStepByStep')}
          </button>
        </div>
      </div>

      <div class="mb-4">
        <label class="text-xs uppercase font-bold text-muted block mb-1">${I18N.t('syntaxLabel')}</label>
        <div class="excel-formula-bar-container">
          <span class="excel-fx-icon">fx</span>
          <span class="font-mono text-sm font-bold text-accent">${this.escapeHtml(f.syntax)}</span>
          <button class="btn btn-secondary btn-sm ml-auto" onclick="App.copyText('${this.escapeHtml(f.syntax)}')">
            📋 ${I18N.t('copyFormula')}
          </button>
        </div>
      </div>

      <div class="p-3 bg-card-subtle rounded-xl mb-4 border border-border">
        <h4 class="text-xs uppercase font-bold text-accent mb-1">🎯 ${I18N.t('scenarioLabel')}</h4>
        <p class="text-sm">${f.scenario[lang] || f.scenario.en}</p>
      </div>

      <!-- Real Visual Excel Table -->
      <div class="mb-4">
        <h4 class="text-sm font-bold mb-2">📊 ${I18N.t('tableExampleLabel')}</h4>
        <div class="excel-sheet-wrapper">
          <table class="excel-sheet-table">
            <thead>
              <tr>
                <th class="excel-corner-cell"></th>
                ${f.table.columns.map(c => `<th class="excel-col-header">${c}</th>`).join('')}
              </tr>
              <tr class="excel-th-row">
                <th class="excel-row-num">1</th>
                ${headers.map(h => `<th class="excel-header-label">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${f.table.rows.map((rowVals, rIdx) => {
                const rowNum = rIdx + 2;
                return `
                  <tr>
                    <td class="excel-row-num">${rowNum}</td>
                    ${rowVals.map((val, cIdx) => {
                      const coord = `${f.table.columns[cIdx]}${rowNum}`;
                      const isHighlighted = f.table.highlightCells && f.table.highlightCells.includes(coord);
                      return `
                        <td class="excel-cell ${isHighlighted ? 'highlight-target' : ''}">
                          ${val}
                        </td>
                      `;
                    }).join('')}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div class="p-3 bg-card-subtle rounded-xl border border-border flex items-center justify-between flex-wrap gap-2">
          <div>
            <span class="text-xs font-bold text-muted block">${I18N.t('formulaAppliedLabel')}</span>
            <code class="font-mono text-sm font-bold text-accent">${this.escapeHtml(f.table.formulaApplied)}</code>
          </div>
          <div>
            <span class="text-xs font-bold text-muted block">${I18N.t('resultLabel')}</span>
            <span class="badge badge-beginner text-sm">${f.table.evaluatedResult}</span>
          </div>
        </div>
      </div>

      <!-- Step by step timeline -->
      <div class="mb-4">
        <h4 class="text-sm font-bold mb-2">📝 ${I18N.t('stepsLabel')}</h4>
        <div class="steps-timeline">
          ${steps.map((st, i) => `
            <div class="step-item">
              <span class="step-badge">${i + 1}</span>
              <span class="step-text">${st}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Common Errors -->
      ${f.commonErrors && f.commonErrors.length > 0 ? `
        <div class="mb-4">
          <h4 class="text-sm font-bold mb-2 text-danger">⚠️ ${I18N.t('errorGuideLabel')}</h4>
          ${f.commonErrors.map(err => `
            <div class="error-card">
              <span class="error-badge">${err.error}</span>
              <p class="text-xs mb-1"><strong>Reason:</strong> ${err.reason[lang] || err.reason.en}</p>
              <p class="text-xs text-accent"><strong>Solution:</strong> ${err.fix[lang] || err.fix.en}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Pro Tip -->
      ${proTip ? `
        <div class="protip-card">
          <span class="protip-icon">💡</span>
          <div>
            <h5 class="text-xs uppercase font-bold text-accent mb-1">${I18N.t('proTipLabel')}</h5>
            <p class="text-xs">${proTip}</p>
          </div>
        </div>
      ` : ''}
    `;

    modalBody.innerHTML = html;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeFormulaModal() {
    const modalBackdrop = document.getElementById('formulaModal');
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  /**
   * Favorites bookmark toggle
   */
  toggleFavorite(id) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(item => item !== id);
      this.showToast(I18N.t('unfavoriteBtn'));
    } else {
      this.favorites.push(id);
      this.showToast(I18N.t('favoriteBtn'));
    }
    localStorage.setItem('excel_master_favorites', JSON.stringify(this.favorites));
    this.render();
  },

  /**
   * Clipboard Copy Helper with Toast
   */
  copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(I18N.t('copied'));
    });
  },

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  },

  /**
   * 14. Dedicated Login & Sign Up Page
   */
  renderAuthView(container) {
    const isUserLoggedIn = typeof FirebaseAuthManager !== 'undefined' && FirebaseAuthManager.currentUser;
    const mode = typeof FirebaseAuthManager !== 'undefined' ? FirebaseAuthManager.activeMode : 'signin';

    if (isUserLoggedIn) {
      const user = FirebaseAuthManager.currentUser;
      const name = user.displayName || user.email?.split('@')[0] || "Learner";
      const email = user.email || "No email";
      const photo = user.photoURL;
      const courseProgress = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0;
      const isCourseFinished = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();
      const examPassed = localStorage.getItem('excel_master_exam_passed') === 'true';

      container.innerHTML = `
        <div class="auth-page-wrapper max-w-3xl mx-auto py-6 px-4">
          <!-- Profile Header Card -->
          <div class="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md mb-6 relative overflow-hidden">
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              ${photo ? `
                <img src="${photo}" alt="${this.escapeHtml(name)}" class="w-20 h-20 rounded-2xl object-cover border-2 border-accent shadow-md" />
              ` : `
                <div class="w-20 h-20 rounded-2xl bg-accent text-white font-extrabold flex items-center justify-center text-3xl shadow-md">
                  ${name.charAt(0).toUpperCase()}
                </div>
              `}

              <div class="flex-1 text-center sm:text-left">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-600 border border-green-500/20 mb-2">
                  <span>✓</span> વેરિફાઇડ એકાઉન્ટ (Firebase Active)
                </div>
                <h2 class="text-2xl font-black text-main">${this.escapeHtml(name)}</h2>
                <p class="text-sm text-muted font-mono">${this.escapeHtml(email)}</p>
                <p class="text-[11px] text-light font-mono mt-1">UID: ${user.uid || 'local-user'}</p>
              </div>

              <div class="flex flex-col gap-2 w-full sm:w-auto">
                <button class="btn btn-secondary btn-sm flex items-center justify-center gap-1.5 font-bold"
                        onclick="FirebaseAuthManager.syncCloudProgress()">
                  <span>☁️</span> ક્લાઉડ સિંક કરો
                </button>
                <button class="btn btn-sm border border-red-500/30 text-red-500 hover:bg-red-500/10 flex items-center justify-center gap-1.5 font-bold"
                        onclick="FirebaseAuthManager.signOutUser(); App.render();">
                  <span>🚪</span> લોગ આઉટ
                </button>
              </div>
            </div>
          </div>

          <!-- Learning & Certification Overview Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <!-- Course Card -->
            <div class="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-muted">ઓનલાઇન કોર્સ</span>
                  <span class="px-2 py-0.5 rounded text-xs font-bold ${isCourseFinished ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'}">
                    ${isCourseFinished ? '૧૦૦% પૂર્ણ ✓' : courseProgress + '% પ્રગતિ'}
                  </span>
                </div>
                <h3 class="font-extrabold text-main text-lg mb-2">એક્સેલ માસ્ટર કોર્સ</h3>
                <p class="text-xs text-muted mb-4">૭ પ્રેક્ટિકલ મોડ્યુલ્સ સાથે એક્સેલની ઊંડાણપૂર્વક તાલીમ.</p>
                <div class="w-full bg-subtle rounded-full h-2.5 overflow-hidden mb-4">
                  <div class="bg-accent h-full rounded-full transition-all" style="width: ${courseProgress}%"></div>
                </div>
              </div>
              <button class="btn btn-secondary w-full py-2 text-xs font-bold" onclick="App.switchTab('course')">
                ${isCourseFinished ? 'કોર્સ પુનરાવર્તન કરો ↗' : 'કોર્સ આગળ ધપાવો ↗'}
              </button>
            </div>

            <!-- Exam & Certificate Card -->
            <div class="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-muted">સર્ટિફિકેશન સ્થિતિ</span>
                  <span class="px-2 py-0.5 rounded text-xs font-bold ${examPassed ? 'bg-green-500/10 text-green-600' : 'bg-subtle text-muted'}">
                    ${examPassed ? 'પાસ કરેલ ✓' : 'બાકી છે'}
                  </span>
                </div>
                <h3 class="font-extrabold text-main text-lg mb-2">લાઈવ પરીક્ષા & સર્ટિફિકેટ</h3>
                <p class="text-xs text-muted mb-4">
                  ${examPassed ? `તમે ૫૦ પ્રશ્નોની પરીક્ષા પાસ કરી લીધી છે! તમારો સત્તાવાર ગોલ્ડ-સીલ સર્ટિફિકેટ તૈયાર છે.` : `૫૦ પ્રશ્નોની લાઈવ પરીક્ષા આપીને ૭૦%+ માર્ક્સ સાથે ગોલ્ડ-સીલ સર્ટિફિકેટ અનલોક કરો.`}
                </p>
              </div>
              ${examPassed ? `
                <button class="btn btn-primary w-full py-2 text-xs font-bold" onclick="App.switchTab('certificate')">
                  🎓 મારું સર્ટિફિકેટ ડાઉનલોડ કરો ↗
                </button>
              ` : `
                <button class="btn btn-primary w-full py-2 text-xs font-bold" onclick="App.switchTab('exam')">
                  ⏱️ લાઈવ પરીક્ષા શરૂ કરો ↗
                </button>
              `}
            </div>
          </div>

          <!-- Firebase Cloud Sync Card -->
          <div class="bg-card-subtle border border-border rounded-xl p-5 text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🔥</span>
              <div>
                <div class="font-bold text-main">Google Firebase પ્રોજેક્ટ: <span class="font-mono text-accent">excel-master-pro-4c1a1</span></div>
                <div>તમારો તમામ ડેટા સુરક્ષિત રીતે ગૂગલ ફાયરબેસ ક્લાઉડ સાથે જોડાયેલો છે.</div>
              </div>
            </div>
            <span class="text-xs font-bold text-green-600 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 shrink-0">
              કનેક્ટેડ ✓
            </span>
          </div>
        </div>
      `;
      return;
    }

    // Guest / Not Logged In View: Full Login & Signup Page
    const isSignUp = mode === 'signup';

    container.innerHTML = `
      <div class="auth-page-wrapper max-w-xl mx-auto py-8 px-4">
        <!-- Brand Header -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-3xl mx-auto mb-3 shadow-inner">
            🔐
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-main tracking-tight">
            ${isSignUp ? 'નવું એકાઉન્ટ બનાવો (Sign Up)' : 'એક્સેલ માસ્ટરમાં સાઇન ઇન કરો (Sign In)'}
          </h2>
          <p class="text-xs md:text-sm text-muted mt-1 max-w-md mx-auto">
            કોર્સ પ્રગતિ, ક્વિઝ સ્કોર, લાઈવ પરીક્ષા પરિણામ અને ગોલ્ડ-સીલ સર્ટિફિકેટ તમારા નામ સાથે સેવ રાખવા માટે લૉગિન કરો.
          </p>
          <div class="mt-2 text-[11px] font-mono inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20">
            🔥 Firebase Project: excel-master-pro-4c1a1
          </div>
        </div>

        <!-- Auth Card -->
        <div class="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
          <!-- Mode Tabs (Sign In / Sign Up) -->
          <div class="flex border-b border-border mb-6">
            <button class="flex-1 py-3 text-center text-sm font-extrabold transition-all border-b-2 ${!isSignUp ? 'border-accent text-accent' : 'border-transparent text-muted hover:text-main'}"
                    onclick="FirebaseAuthManager.activeMode='signin'; App.render();">
              🔑 સાઇન ઇન (Sign In)
            </button>
            <button class="flex-1 py-3 text-center text-sm font-extrabold transition-all border-b-2 ${isSignUp ? 'border-accent text-accent' : 'border-transparent text-muted hover:text-main'}"
                    onclick="FirebaseAuthManager.activeMode='signup'; App.render();">
              📝 નવું એકાઉન્ટ (Sign Up)
            </button>
          </div>

          <!-- Google 1-Click Sign-In (Recommended) -->
          <div class="mb-5">
            <button class="btn-google-auth w-full py-3.5 px-4 rounded-xl border-2 border-border bg-page hover:bg-card-subtle flex items-center justify-center gap-3 font-extrabold text-sm transition-all shadow-sm hover:border-accent hover:shadow-md cursor-pointer"
                    onclick="FirebaseAuthManager.signInWithGoogle()">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Google વડે 1-ક્લિકમાં સાઇન ઇન કરો</span>
            </button>
            <p class="text-[11px] text-center text-muted mt-1.5">કોઈ પાસવર્ડ યાદ રાખવાની જરૂર નથી • સુરક્ષિત ગૂગલ વેરિફિકેશન</p>
          </div>

          <div class="flex items-center gap-3 my-5">
            <div class="h-px bg-border flex-1"></div>
            <span class="text-xs uppercase font-bold text-muted">અથવા ઈમેલ વડે</span>
            <div class="h-px bg-border flex-1"></div>
          </div>

          <!-- Email & Password Form -->
          <form onsubmit="event.preventDefault(); App.handleAuthPageSubmit();" class="space-y-4">
            ${isSignUp ? `
              <div>
                <label class="block text-xs font-bold text-muted mb-1.5">પૂરું નામ (Full Name) <span class="text-red-500">*</span></label>
                <input type="text" id="pageAuthDisplayName" class="form-control w-full p-3 rounded-xl border border-border bg-page text-main text-sm"
                       placeholder="દા.ત. રમેશભાઈ પટેલ" required />
                <span class="text-[11px] text-muted">આ નામ તમારા સત્તાવાર સર્ટિફિકેટમાં પ્રિન્ટ થશે.</span>
              </div>
            ` : ''}

            <div>
              <label class="block text-xs font-bold text-muted mb-1.5">ઈમેલ એડ્રેસ (Email Address) <span class="text-red-500">*</span></label>
              <input type="email" id="pageAuthEmail" class="form-control w-full p-3 rounded-xl border border-border bg-page text-main text-sm"
                     placeholder="yourname@gmail.com" required />
            </div>

            <div>
              <label class="block text-xs font-bold text-muted mb-1.5">પાસવર્ડ (Password) <span class="text-red-500">*</span></label>
              <div class="relative">
                <input type="password" id="pageAuthPassword" class="form-control w-full p-3 pr-10 rounded-xl border border-border bg-page text-main text-sm"
                       placeholder="ઓછામાં ઓછા ૬ અક્ષર..." minlength="6" required />
                <button type="button" class="absolute right-3 top-3 text-muted hover:text-main text-sm cursor-pointer"
                        onclick="const p = document.getElementById('pageAuthPassword'); p.type = p.type === 'password' ? 'text' : 'password';">
                  👁️
                </button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary w-full py-3.5 rounded-xl font-extrabold text-sm shadow-md mt-2">
              ${isSignUp ? '📝 નવું ખાતું બનાવો (Create Account)' : '🚀 સાઇન ઇન કરો (Sign In)'}
            </button>
          </form>

          <!-- Toggle Link -->
          <div class="text-center text-xs text-muted mt-5 pt-4 border-t border-border">
            ${isSignUp ? `
              <span>પહેલેથી ખાતું છે?</span>
              <button class="text-accent font-bold underline ml-1 cursor-pointer" onclick="FirebaseAuthManager.activeMode='signin'; App.render();">
                સાઇન ઇન કરો
              </button>
            ` : `
              <span>નવા યુઝર છો?</span>
              <button class="text-accent font-bold underline ml-1 cursor-pointer" onclick="FirebaseAuthManager.activeMode='signup'; App.render();">
                મફતમાં નવું ખાતું બનાવો
              </button>
            `}
          </div>

          <!-- Instant Demo / Guest Login -->
          <div class="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
            <span class="text-muted">ઝડપી ટેસ્ટિંગ લૉગિન:</span>
            <button class="text-accent hover:underline font-bold cursor-pointer" onclick="FirebaseAuthManager.signInAsDemoUser(); App.render();">
              ⚡ ગેસ્ટ ડેમો તરીકે લૉગિન
            </button>
          </div>
        </div>

        <!-- Security Badge -->
        <div class="text-center text-xs text-muted mt-6 flex items-center justify-center gap-2">
          <span>🔒 256-bit SSL</span> •
          <span>Google Firebase Auth (excel-master-pro-4c1a1)</span>
        </div>
      </div>
    `;
  },

  handleAuthPageSubmit() {
    const email = document.getElementById('pageAuthEmail')?.value?.trim();
    const password = document.getElementById('pageAuthPassword')?.value;
    const displayName = document.getElementById('pageAuthDisplayName')?.value?.trim();

    if (!email || !password) return;

    if (!FirebaseAuthManager.auth) {
      FirebaseAuthManager.setupFirebase();
    }

    if (!FirebaseAuthManager.auth) {
      this.showToast("Firebase સેવા શરૂ થઈ શકી નથી.");
      return;
    }

    if (FirebaseAuthManager.activeMode === 'signup') {
      FirebaseAuthManager.auth.createUserWithEmailAndPassword(email, password)
        .then(async (userCred) => {
          if (displayName && userCred.user) {
            await userCred.user.updateProfile({ displayName: displayName });
          }
          App.showToast("નવું ખાતું સફળતાપૂર્વક બની ગયું!");
          App.checkAuthGate();
        })
        .catch(err => {
          FirebaseAuthManager.handleAuthError(err);
        });
    } else {
      FirebaseAuthManager.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          App.showToast("સફળતાપૂર્વક સાઇન ઇન થઈ ગયું!");
          App.checkAuthGate();
        })
        .catch(err => {
          FirebaseAuthManager.handleAuthError(err);
        });
    }
  },

  /**
   * Dedicated Fullscreen Auth Gateway Screen
   * Shown when user is not logged in (Site opens only after login)
   */
  renderAuthGateway(container) {
    const mode = typeof FirebaseAuthManager !== 'undefined' ? FirebaseAuthManager.activeMode : 'signin';
    const isSignUp = mode === 'signup';

    container.innerHTML = `
      <div class="auth-gateway-card">
        <!-- Top Toolbar: Lang & Theme Switchers -->
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-border text-xs">
          <div class="flex items-center gap-2">
            <img src="./assets/icons/icon.svg" alt="Logo" class="w-6 h-6" />
            <span class="font-extrabold text-main">Excel Master Pro</span>
          </div>
          <div class="flex items-center gap-2">
            <select class="p-1 px-2 rounded-lg bg-subtle border border-border text-xs font-semibold cursor-pointer"
                    onchange="I18N.setLanguage(this.value)">
              <option value="gu" ${I18N.currentLang === 'gu' ? 'selected' : ''}>ગુજરાતી</option>
              <option value="hi" ${I18N.currentLang === 'hi' ? 'selected' : ''}>हिन्दी</option>
              <option value="en" ${I18N.currentLang === 'en' ? 'selected' : ''}>English</option>
            </select>
            <button class="w-7 h-7 rounded-lg bg-subtle border border-border flex items-center justify-center cursor-pointer text-xs"
                    onclick="App.setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')">
              ${document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        <!-- Header -->
        <div class="text-center mb-6">
          <div class="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-3xl mx-auto mb-3 shadow-inner">
            🔐
          </div>
          <h2 class="text-2xl font-black text-main tracking-tight">
            ${isSignUp ? 'નવું ખાતું બનાવો (Sign Up)' : 'સાઇન ઇન કરો (Sign In)'}
          </h2>
          <p class="text-xs text-muted mt-1 leading-relaxed">
            એક્સેલ ફોર્મુલા, ૭ મોડ્યુલ કોર્સ, લાઈવ પરીક્ષા અને ગોલ્ડ-સીલ સર્ટિફિકેટ અનલોક કરવા માટે લૉગિન કરો.
          </p>
          <div class="mt-2 text-[10px] font-mono inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20">
            🔥 Firebase: excel-master-pro-4c1a1
          </div>
        </div>

        <!-- Mode Toggle Tabs -->
        <div class="flex border-b border-border mb-5">
          <button class="auth-tab-btn ${!isSignUp ? 'active' : ''}"
                  onclick="FirebaseAuthManager.activeMode='signin'; App.checkAuthGate();">
            🔑 સાઇન ઇન (Sign In)
          </button>
          <button class="auth-tab-btn ${isSignUp ? 'active' : ''}"
                  onclick="FirebaseAuthManager.activeMode='signup'; App.checkAuthGate();">
            📝 નવું ખાતું (Sign Up)
          </button>
        </div>

        <!-- Google 1-Click Sign In (Official & Recommended) -->
        <div class="mb-5">
          <button class="btn-google-auth w-full py-3.5 px-4 rounded-xl border-2 border-border bg-page hover:bg-card-subtle flex items-center justify-center gap-3 font-extrabold text-sm transition-all shadow-sm hover:border-accent hover:shadow-md cursor-pointer"
                  onclick="FirebaseAuthManager.signInWithGoogle()">
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Google વડે 1-ક્લિકમાં સાઇન ઇન કરો</span>
          </button>
          <p class="text-[11px] text-center text-muted mt-1.5">કોઈ પાસવર્ડ યાદ રાખવાની જરૂર નથી • ૧-ક્લિક પ્રવેશ</p>
        </div>

        <div class="flex items-center gap-3 my-4">
          <div class="h-px bg-border flex-1"></div>
          <span class="text-xs uppercase font-bold text-muted">અથવા ઈમેલ વડે</span>
          <div class="h-px bg-border flex-1"></div>
        </div>

        <!-- Email & Password Form -->
        <form onsubmit="event.preventDefault(); App.handleGatewayAuthSubmit();" class="space-y-3.5">
          ${isSignUp ? `
            <div>
              <label class="block text-xs font-bold text-muted mb-1">પૂરું નામ (Full Name) <span class="text-red-500">*</span></label>
              <input type="text" id="gatewayDisplayName" class="form-control w-full p-3 rounded-xl border border-border bg-page text-main text-sm"
                     placeholder="દા.ત. રમેશભાઈ પટેલ" required />
              <span class="text-[10px] text-muted">આ નામ તમારા સત્તાવાર સર્ટિફિકેટમાં પ્રિન્ટ થશે.</span>
            </div>
          ` : ''}

          <div>
            <label class="block text-xs font-bold text-muted mb-1">ઈમેલ એડ્રેસ (Email) <span class="text-red-500">*</span></label>
            <input type="email" id="gatewayEmail" class="form-control w-full p-3 rounded-xl border border-border bg-page text-main text-sm"
                   placeholder="yourname@gmail.com" required />
          </div>

          <div>
            <label class="block text-xs font-bold text-muted mb-1">પાસવર્ડ (Password) <span class="text-red-500">*</span></label>
            <div class="relative">
              <input type="password" id="gatewayPassword" class="form-control w-full p-3 pr-10 rounded-xl border border-border bg-page text-main text-sm"
                     placeholder="ઓછામાં ઓછા ૬ અક્ષર..." minlength="6" required />
              <button type="button" class="absolute right-3 top-3 text-muted hover:text-main text-sm cursor-pointer"
                      onclick="const p = document.getElementById('gatewayPassword'); p.type = p.type === 'password' ? 'text' : 'password';">
                👁️
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-full py-3.5 rounded-xl font-extrabold text-sm shadow-md mt-2">
            ${isSignUp ? '📝 નવું ખાતું બનાવો (Create Account)' : '🚀 સાઇન ઇન કરો (Sign In)'}
          </button>
        </form>

        <!-- Toggle Switcher -->
        <div class="text-center text-xs text-muted mt-5 pt-3 border-t border-border">
          ${isSignUp ? `
            <span>પહેલેથી ખાતું છે?</span>
            <button class="text-accent font-bold underline ml-1 cursor-pointer" onclick="FirebaseAuthManager.activeMode='signin'; App.checkAuthGate();">
              સાઇન ઇન કરો
            </button>
          ` : `
            <span>નવા યુઝર છો?</span>
            <button class="text-accent font-bold underline ml-1 cursor-pointer" onclick="FirebaseAuthManager.activeMode='signup'; App.checkAuthGate();">
              મફતમાં નવું ખાતું બનાવો
            </button>
          `}
        </div>

        <!-- Instant Guest Access (Direct Site Unlock) -->
        <div class="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
          <span class="text-muted">ઝડપી ટેસ્ટિંગ પ્રવેશ:</span>
          <button class="text-accent hover:underline font-bold cursor-pointer flex items-center gap-1"
                  onclick="FirebaseAuthManager.signInAsDemoUser()">
            <span>⚡</span> ગેસ્ટ તરીકે સાઇટ ખોલો
          </button>
        </div>

        <!-- Security Footer -->
        <div class="text-center text-[11px] text-muted mt-5 flex items-center justify-center gap-2">
          <span>🔒 Google Firebase Secured</span> •
          <span>Project: <b class="font-mono text-accent">excel-master-pro-4c1a1</b></span>
        </div>
      </div>
    `;
  },

  handleGatewayAuthSubmit() {
    const email = document.getElementById('gatewayEmail')?.value?.trim();
    const password = document.getElementById('gatewayPassword')?.value;
    const displayName = document.getElementById('gatewayDisplayName')?.value?.trim();

    if (!email || !password) return;

    if (!FirebaseAuthManager.auth) {
      FirebaseAuthManager.setupFirebase();
    }

    if (!FirebaseAuthManager.auth) {
      this.showToast("Firebase સેવા શરૂ થઈ શકી નથી.");
      return;
    }

    if (FirebaseAuthManager.activeMode === 'signup') {
      FirebaseAuthManager.auth.createUserWithEmailAndPassword(email, password)
        .then(async (userCred) => {
          if (displayName && userCred.user) {
            await userCred.user.updateProfile({ displayName: displayName });
          }
          App.showToast("નવું ખાતું સફળતાપૂર્વક બની ગયું!");
          App.checkAuthGate();
        })
        .catch(err => {
          FirebaseAuthManager.handleAuthError(err);
        });
    } else {
      FirebaseAuthManager.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          App.showToast("સફળતાપૂર્વક સાઇન ઇન થઈ ગયું!");
          App.checkAuthGate();
        })
        .catch(err => {
          FirebaseAuthManager.handleAuthError(err);
        });
    }
  },

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
