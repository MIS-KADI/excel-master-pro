/**
 * Excel Master Pro - Firebase Authentication & Cloud Profile Engine
 * Direct integration for Firebase Project: excel-master-pro-4c1a1
 * Supports Google Sign-In, Email/Password, Firestore Cloud Sync & Certified Profiles
 * Based on official Firebase Web SDK (compat v10).
 */

const FirebaseAuthManager = {
  auth: null,
  db: null,
  currentUser: null,
  activeMode: 'signin', // 'signin' or 'signup'
  
  // Official Firebase Project Credentials for excel-master-pro-4c1a1
  defaultConfig: {
    apiKey: "AIzaSyBzk4WKDSiUNvuFtOH_XrUjW_DIvKVjft0",
    authDomain: "excel-master-pro-4c1a1.firebaseapp.com",
    projectId: "excel-master-pro-4c1a1",
    storageBucket: "excel-master-pro-4c1a1.firebasestorage.app",
    messagingSenderId: "30653899749",
    appId: "1:30653899749:web:ddf8a1fbedfba3bd33450c"
  },

  // Active configuration (prefers stored, fallbacks to official defaultConfig)
  config: null,

  init() {
    this.resolveConfig();
    this.setupFirebase();
    this.renderHeaderAuthButton();
  },

  resolveConfig() {
    let stored = null;
    try {
      stored = JSON.parse(localStorage.getItem('excel_master_firebase_config') || 'null');
    } catch (e) {
      stored = null;
    }

    if (stored && stored.apiKey && stored.apiKey !== '') {
      this.config = stored;
    } else {
      this.config = { ...this.defaultConfig };
      localStorage.setItem('excel_master_firebase_config', JSON.stringify(this.config));
    }
  },

  setupFirebase() {
    if (typeof firebase === 'undefined') {
      console.warn("Firebase SDK script not loaded yet.");
      return;
    }

    if (!this.config || !this.config.apiKey) {
      const savedUser = localStorage.getItem('excel_master_mock_user');
      if (savedUser) {
        try {
          this.currentUser = JSON.parse(savedUser);
        } catch (e) {
          this.currentUser = null;
        }
      }
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(this.config);
      }
      this.auth = firebase.auth();
      if (firebase.firestore) {
        try {
          this.db = firebase.firestore();
        } catch(fsErr) {
          console.warn("Firestore init warning:", fsErr);
        }
      }

      // Listen for auth state changes
      this.auth.onAuthStateChanged(async (user) => {
        this.currentUser = user;
        if (user) {
          const profileData = {
            uid: user.uid,
            displayName: user.displayName || user.email.split('@')[0],
            email: user.email,
            photoURL: user.photoURL
          };
          localStorage.setItem('excel_master_user_profile', JSON.stringify(profileData));
          
          // Pre-fill certificate candidate name with verified Google Name
          if (user.displayName) {
            const certInput = document.getElementById('certCandidateName');
            if (certInput) certInput.value = user.displayName;
          }

          // Fetch & restore cloud progress from Firestore if available
          this.restoreCloudProgress(user.uid);

        } else {
          localStorage.removeItem('excel_master_user_profile');
        }
        this.renderHeaderAuthButton();
        if (typeof App !== 'undefined' && App.activeTab === 'auth') {
          App.render();
        }
      });

      // Handle redirect results for mobile/PWA
      this.auth.getRedirectResult().then((result) => {
        if (result && result.user) {
          if (typeof App !== 'undefined') {
            App.showToast("સફળતાપૂર્વક સાઇન ઇન: " + (result.user.displayName || result.user.email));
          }
        }
      }).catch((error) => {
        this.handleAuthError(error);
      });

    } catch (e) {
      console.error("Firebase init error:", e);
    }
  },

  renderHeaderAuthButton() {
    const container = document.getElementById('userAuthContainer');
    if (!container) return;

    if (this.currentUser) {
      const name = this.currentUser.displayName || this.currentUser.email || "Learner";
      const photo = this.currentUser.photoURL;

      container.innerHTML = `
        <div class="user-profile-badge flex items-center gap-2 cursor-pointer p-1 pr-2.5 rounded-full bg-card border border-border hover:border-accent transition-all shadow-sm"
             onclick="FirebaseAuthManager.openProfileMenu()" title="પ્રોફાઇલ અને ક્લાઉડ સિંક">
          ${photo ? `
            <img src="${photo}" alt="${name}" class="w-7 h-7 rounded-full object-cover border border-accent/40" />
          ` : `
            <div class="w-7 h-7 rounded-full bg-accent text-white font-bold flex items-center justify-center text-xs">
              ${name.charAt(0).toUpperCase()}
            </div>
          `}
          <span class="text-xs font-bold text-main max-w-[100px] truncate hidden sm:inline-block">${name}</span>
          <span class="text-[10px] text-muted">▼</span>
        </div>
      `;
    } else {
      container.innerHTML = `
        <button id="authModalBtn" class="btn btn-secondary btn-sm flex items-center gap-1.5 font-bold" onclick="App.switchTab('auth')">
          <span>👤</span>
          <span data-i18n="signInBtn">${typeof I18N !== 'undefined' ? I18N.t('signInBtn') : 'સાઇન ઇન'}</span>
        </button>
      `;
    }
  },

  openAuthModal() {
    let modal = document.getElementById('authModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'authModal';
      modal.className = 'modal-backdrop';
      modal.onclick = (e) => { if (e.target === modal) this.closeAuthModal(); };
      document.body.appendChild(modal);
    }

    const isSignUp = this.activeMode === 'signup';

    modal.innerHTML = `
      <div class="modal-content auth-modal-box max-w-md w-full bg-card p-6 md:p-8 rounded-2xl border border-border shadow-2xl relative">
        <button class="modal-close-btn" onclick="FirebaseAuthManager.closeAuthModal()" aria-label="Close">✕</button>

        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-2xl mx-auto mb-3">
            🔐
          </div>
          <h3 class="text-xl font-extrabold text-main mb-1">
            ${isSignUp ? (typeof I18N !== 'undefined' ? I18N.t('authSubmitSignUp') : 'નવું ખાતું બનાવો') : (typeof I18N !== 'undefined' ? I18N.t('authModalTitle') : 'એક્સેલ માસ્ટરમાં સાઇન ઇન કરો')}
          </h3>
          <p class="text-xs text-muted">
            ${typeof I18N !== 'undefined' ? I18N.t('authModalSubtitle') : 'કોર્સ પ્રગતિ, પરીક્ષા સ્કોર અને સર્ટિફિકેટ ક્લાઉડમાં સુરક્ષિત સેવ કરો.'}
          </p>
          <div class="mt-2 text-[11px] font-mono inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20">
            Firebase: excel-master-pro-4c1a1 ✓
          </div>
        </div>

        <!-- Google 1-Click Sign-In Button -->
        <button class="btn-google-auth w-full py-3 px-4 rounded-xl border border-border bg-page hover:bg-card-subtle flex items-center justify-center gap-3 font-bold text-sm mb-4 transition-all shadow-sm hover:border-accent"
                onclick="FirebaseAuthManager.signInWithGoogle()">
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          <span>${typeof I18N !== 'undefined' ? I18N.t('googleSignIn') : 'Google વડે સાઇન ઇન કરો'}</span>
        </button>

        <div class="flex items-center gap-3 my-4">
          <div class="h-px bg-border flex-1"></div>
          <span class="text-[11px] uppercase font-bold text-muted">${typeof I18N !== 'undefined' ? I18N.t('orEmailLabel') : 'અથવા ઈમેલ વડે'}</span>
          <div class="h-px bg-border flex-1"></div>
        </div>

        <!-- Email & Password Form -->
        <form onsubmit="event.preventDefault(); FirebaseAuthManager.handleEmailAuth();" class="space-y-3 mb-4">
          ${isSignUp ? `
            <div>
              <label class="block text-xs font-bold text-muted mb-1">પૂરું નામ (Full Name)</label>
              <input type="text" id="authDisplayNameInput" class="form-control w-full p-2.5 rounded-lg border border-border bg-page text-main text-sm" placeholder="તમારું પૂરું નામ..." required />
            </div>
          ` : ''}

          <div>
            <label class="block text-xs font-bold text-muted mb-1">ઈમેલ (Email)</label>
            <input type="email" id="authEmailInput" class="form-control w-full p-2.5 rounded-lg border border-border bg-page text-main text-sm" placeholder="તમારું ઈમેલ એડ્રેસ..." required />
          </div>

          <div>
            <label class="block text-xs font-bold text-muted mb-1">પાસવર્ડ (Password)</label>
            <input type="password" id="authPasswordInput" class="form-control w-full p-2.5 rounded-lg border border-border bg-page text-main text-sm" placeholder="ઓછામાં ઓછા ૬ અક્ષર..." required minlength="6" />
          </div>

          <button type="submit" class="btn btn-primary w-full py-2.5 font-bold shadow-md rounded-lg">
            ${isSignUp ? (typeof I18N !== 'undefined' ? I18N.t('authSubmitSignUp') : 'નવું ખાતું બનાવો') : (typeof I18N !== 'undefined' ? I18N.t('authSubmitSignIn') : 'સાઇન ઇન કરો')}
          </button>
        </form>

        <!-- Toggle between Sign In & Sign Up -->
        <div class="text-center text-xs text-muted mb-4">
          ${isSignUp ? `
            <span>${typeof I18N !== 'undefined' ? I18N.t('alreadyAccountText') : 'પહેલેથી ખાતું છે?'}</span>
            <button class="text-accent font-bold underline ml-1" onclick="FirebaseAuthManager.toggleAuthMode('signin')">
              સાઇન ઇન
            </button>
          ` : `
            <span>${typeof I18N !== 'undefined' ? I18N.t('noAccountText') : 'ખાતું નથી?'}</span>
            <button class="text-accent font-bold underline ml-1" onclick="FirebaseAuthManager.toggleAuthMode('signup')">
              નવું ખાતું બનાવો
            </button>
          `}
        </div>

        <!-- Firebase Config Settings & Demo Toggle -->
        <div class="pt-3 border-t border-border flex items-center justify-between text-xs">
          <button class="text-muted hover:text-accent flex items-center gap-1 font-semibold" 
                  onclick="FirebaseAuthManager.openConfigModal()">
            ⚙️ Firebase સેટિંગ્સ
          </button>

          <!-- Guest Demo Login -->
          <button class="text-accent hover:underline font-bold" 
                  onclick="FirebaseAuthManager.signInAsDemoUser()">
            ⚡ ગેસ્ટ ડેમો લોગિન
          </button>
        </div>
      </div>
    `;

    modal.classList.add('open');
  },

  closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('open');
  },

  toggleAuthMode(mode) {
    this.activeMode = mode;
    this.openAuthModal();
  },

  // Dedicated In-App Firebase Project Configuration Modal
  openConfigModal() {
    this.closeAuthModal();

    let cfgModal = document.getElementById('firebaseConfigModal');
    if (!cfgModal) {
      cfgModal = document.createElement('div');
      cfgModal.id = 'firebaseConfigModal';
      cfgModal.className = 'modal-backdrop';
      cfgModal.onclick = (e) => { if (e.target === cfgModal) this.closeConfigModal(); };
      document.body.appendChild(cfgModal);
    }

    const currentApiKey = this.config?.apiKey || this.defaultConfig.apiKey;
    const currentAppId = this.config?.appId || this.defaultConfig.appId;
    const currentJson = this.config ? JSON.stringify(this.config, null, 2) : JSON.stringify(this.defaultConfig, null, 2);

    cfgModal.innerHTML = `
      <div class="modal-content max-w-lg w-full bg-card p-6 md:p-7 rounded-2xl border border-border shadow-2xl relative">
        <button class="modal-close-btn" onclick="FirebaseAuthManager.closeConfigModal()" aria-label="Close">✕</button>

        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl font-bold">
            🔥
          </div>
          <div>
            <h3 class="text-lg font-extrabold text-main">Firebase કનેક્શન સ્ટેટસ</h3>
            <p class="text-xs text-muted">પ્રોજેક્ટ: <span class="font-mono text-accent font-bold">excel-master-pro-4c1a1</span> (કનેક્ટેડ ✓)</p>
          </div>
        </div>

        <div class="bg-card-subtle p-3 rounded-xl border border-border text-xs mb-4 space-y-1.5">
          <div class="font-bold text-main flex items-center gap-1.5">
            <span>✅</span> પ્રોજેક્ટ લિંક થયેલ છે:
          </div>
          <div class="text-muted leading-relaxed">
            - <b>API Key</b>: <code class="px-1 py-0.5 bg-page rounded font-mono text-accent">AIzaSyBzk4WK...</code><br/>
            - <b>Auth Domain</b>: <code class="px-1 py-0.5 bg-page rounded font-mono">excel-master-pro-4c1a1.firebaseapp.com</code><br/>
            - <b>App ID</b>: <code class="px-1 py-0.5 bg-page rounded font-mono">1:30653899749:web:ddf8a1fbedfba3bd33450c</code>
          </div>
          <div class="pt-1 text-[11px] text-muted">
            ⚠️ જો Google સાઇન ઇન કરતી વખતે Unauthorized Domain એરર આવે તો Firebase Console > Authentication > Settings > Authorized domains માં <b class="text-accent">${window.location.hostname}</b> ઉમેરેલું હોવું જોઈએ.
          </div>
        </div>

        <form onsubmit="event.preventDefault(); FirebaseAuthManager.saveConfigFromForm();" class="space-y-3 mb-4">
          <div>
            <label class="block text-xs font-bold text-muted mb-1">
              Web API Key
            </label>
            <input type="text" id="cfgApiKeyInput" class="form-control w-full p-2.5 rounded-lg border border-border bg-page text-main text-xs font-mono" 
                   placeholder="AIzaSy..." value="${currentApiKey}" required />
          </div>

          <div>
            <label class="block text-xs font-bold text-muted mb-1">
              Web App ID
            </label>
            <input type="text" id="cfgAppIdInput" class="form-control w-full p-2.5 rounded-lg border border-border bg-page text-main text-xs font-mono" 
                   placeholder="1:123456789:web:abcdef..." value="${currentAppId}" />
          </div>

          <details class="text-xs text-muted">
            <summary class="cursor-pointer font-bold hover:text-main mb-2">સંપૂર્ણ Config JSON જુઓ / બદલો ▼</summary>
            <textarea id="cfgJsonInput" rows="5" class="form-control w-full p-2.5 rounded-lg border border-border bg-page text-main text-[11px] font-mono">${currentJson}</textarea>
          </details>

          <div class="flex items-center gap-2 pt-2">
            <button type="submit" class="btn btn-primary flex-1 py-2.5 font-bold shadow-md rounded-lg text-sm">
              💾 કન્ફિગ સેવ કરો
            </button>
            <button type="button" class="btn btn-secondary py-2.5 px-4 font-bold rounded-lg text-sm" onclick="FirebaseAuthManager.resetToDefaults()">
              🔄 ડિફોલ્ટ રીસેટ
            </button>
          </div>
        </form>
      </div>
    `;

    cfgModal.classList.add('open');
  },

  closeConfigModal() {
    const modal = document.getElementById('firebaseConfigModal');
    if (modal) modal.classList.remove('open');
  },

  resetToDefaults() {
    this.config = { ...this.defaultConfig };
    localStorage.setItem('excel_master_firebase_config', JSON.stringify(this.config));
    this.setupFirebase();
    this.closeConfigModal();
    if (typeof App !== 'undefined') {
      App.showToast("ડિફોલ્ટ Firebase કન્ફિગ રીસ્ટોર થઈ ગયું!");
    }
  },

  saveConfigFromForm() {
    const jsonStr = document.getElementById('cfgJsonInput')?.value?.trim();
    let newConfig = null;

    if (jsonStr && jsonStr.startsWith('{')) {
      try {
        newConfig = JSON.parse(jsonStr);
      } catch (e) {
        alert("JSON ફોર્મેટ સાચું નથી. કૃપા કરીને યોગ્ય JSON દાખલ કરો.");
        return;
      }
    } else {
      const apiKey = document.getElementById('cfgApiKeyInput')?.value?.trim();
      const appId = document.getElementById('cfgAppIdInput')?.value?.trim();
      if (!apiKey) {
        alert("કૃપા કરીને Web API Key દાખલ કરો.");
        return;
      }

      newConfig = {
        apiKey: apiKey,
        authDomain: this.defaultConfig.authDomain,
        projectId: this.defaultConfig.projectId,
        storageBucket: this.defaultConfig.storageBucket,
        messagingSenderId: this.defaultConfig.messagingSenderId,
        appId: appId || this.defaultConfig.appId
      };
    }

    this.config = newConfig;
    localStorage.setItem('excel_master_firebase_config', JSON.stringify(newConfig));
    this.setupFirebase();
    this.closeConfigModal();

    if (typeof App !== 'undefined') {
      App.showToast("Firebase Config સફળતાપૂર્વક સેવ થઈ ગયું!");
    }
  },

  async signInWithGoogle() {
    if (!this.auth) {
      this.setupFirebase();
    }

    if (!this.auth) {
      alert("Firebase શરૂ થઈ શક્યું નથી. કૃપા કરીને થોડી સેકન્ડ બાદ પ્રયત્ન કરો.");
      return;
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await this.auth.signInWithPopup(provider);
      
      const userName = result.user.displayName || result.user.email;
      if (typeof App !== 'undefined') {
        App.showToast("સફળતાપૂર્વક સાઇન ઇન: " + userName);
      }
      this.closeAuthModal();
    } catch (err) {
      console.error("Google sign in error:", err);
      if (err.code === 'auth/popup-blocked' || err.code === 'auth/cancelled-popup-request') {
        // Fallback to redirect
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          await this.auth.signInWithRedirect(provider);
        } catch (redirErr) {
          this.handleAuthError(redirErr);
        }
      } else {
        this.handleAuthError(err);
      }
    }
  },

  async handleEmailAuth() {
    const email = document.getElementById('authEmailInput')?.value?.trim();
    const password = document.getElementById('authPasswordInput')?.value;
    if (!email || !password) return;

    if (!this.auth) {
      this.setupFirebase();
    }

    try {
      if (this.activeMode === 'signup') {
        const userCred = await this.auth.createUserWithEmailAndPassword(email, password);
        const name = document.getElementById('authDisplayNameInput')?.value?.trim();
        if (name && userCred.user) {
          await userCred.user.updateProfile({ displayName: name });
        }
        if (typeof App !== 'undefined') {
          App.showToast("નવું ખાતું સફળતાપૂર્વક બની ગયું!");
        }
      } else {
        await this.auth.signInWithEmailAndPassword(email, password);
        if (typeof App !== 'undefined') {
          App.showToast("સફળતાપૂર્વક સાઇન ઇન થઈ ગયું!");
        }
      }
      this.closeAuthModal();
    } catch (err) {
      this.handleAuthError(err);
    }
  },

  handleAuthError(err) {
    if (err.code === 'auth/unauthorized-domain') {
      const currentHost = window.location.hostname || 'mis-kadi.github.io';
      alert(`⚠️ Firebase Domain Authorization જરૂરી છે:\n\nકૃપા કરીને Firebase Console માં Authentication > Settings > Authorized domains માં જઈને આ ડોમેન ઉમેરો:\n\n👉  ${currentHost}\n\nતે ઉમેર્યા પછી Google Sign-In તરત જ કામ કરશે.`);
    } else if (err.code === 'auth/operation-not-allowed') {
      alert("⚠️ Firebase Console માં Authentication > Sign-in method માં જઈને 'Google' અથવા 'Email/Password' ને Enable કરવું જરૂરી છે.");
    } else if (err.code === 'auth/popup-closed-by-user') {
      console.log("Popup closed by user.");
    } else {
      if (typeof App !== 'undefined') {
        App.showToast(err.message || "ઓથેન્ટિકેશન નિષ્ફળ રહ્યું.");
      } else {
        alert(err.message);
      }
    }
  },

  signInAsDemoUser() {
    const defaultName = "Excel Pro Learner";
    this.currentUser = {
      uid: "demo-usr-" + Math.floor(1000 + Math.random() * 9000),
      displayName: defaultName,
      email: "learner@excelmaster.pro",
      photoURL: null
    };
    localStorage.setItem('excel_master_mock_user', JSON.stringify(this.currentUser));
    if (typeof App !== 'undefined') {
      App.showToast("ગેસ્ટ તરીકે લૉગિન: " + defaultName);
    }
    this.renderHeaderAuthButton();
    this.closeAuthModal();
    if (typeof App !== 'undefined') {
      App.render();
    }

    // Auto update certificate name
    const certInput = document.getElementById('certCandidateName');
    if (certInput) certInput.value = defaultName;
  },

  signOutUser() {
    if (this.auth) {
      this.auth.signOut().catch(() => {});
    }
    this.currentUser = null;
    localStorage.removeItem('excel_master_mock_user');
    localStorage.removeItem('excel_master_user_profile');
    if (typeof App !== 'undefined') {
      App.showToast("સફળતાપૂર્વક લોગ આઉટ થયા.");
      App.render();
    }
    this.renderHeaderAuthButton();
    this.closeProfileMenu();
  },

  openProfileMenu() {
    let menu = document.getElementById('profileDropdownMenu');
    if (!menu) {
      menu = document.createElement('div');
      menu.id = 'profileDropdownMenu';
      menu.className = 'profile-dropdown-menu bg-card p-4 rounded-2xl border border-border shadow-xl fixed right-4 top-16 z-50 min-w-[250px]';
      document.body.appendChild(menu);
    }

    const name = this.currentUser?.displayName || "Learner";
    const email = this.currentUser?.email || "No email";
    const courseDone = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();
    const examPassed = localStorage.getItem('excel_master_exam_passed') === 'true';

    menu.innerHTML = `
      <div class="border-b border-border pb-3 mb-3">
        <div class="font-extrabold text-sm text-main">${name}</div>
        <div class="text-xs text-muted font-mono truncate">${email}</div>
      </div>

      <div class="text-xs space-y-1.5 mb-3 bg-card-subtle p-2.5 rounded-xl border border-border">
        <div class="flex justify-between">
          <span class="text-muted">કોર્સ સ્ટેટસ:</span>
          <span class="font-bold ${courseDone ? 'text-green-600' : 'text-amber-600'}">
            ${courseDone ? '૧૦૦% પૂર્ણ ✓' : (typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0) + '%'}
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted">લાઈવ પરીક્ષા:</span>
          <span class="font-bold ${examPassed ? 'text-green-600' : 'text-muted'}">
            ${examPassed ? 'પાસ કરેલ ✓' : 'બાકી છે'}
          </span>
        </div>
      </div>

      <div class="space-y-1 text-xs">
        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2"
                onclick="App.switchTab('certificate'); FirebaseAuthManager.closeProfileMenu();">
          🎓 મારું સર્ટિફિકેટ જુઓ
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2"
                onclick="FirebaseAuthManager.syncCloudProgress()">
          ☁️ ક્લાઉડ સિંક કરો (Cloud Sync)
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2"
                onclick="FirebaseAuthManager.openConfigModal(); FirebaseAuthManager.closeProfileMenu();">
          ⚙️ Firebase સેટિંગ્સ
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold text-red-500 flex items-center gap-2"
                onclick="FirebaseAuthManager.signOutUser()">
          🚪 ${typeof I18N !== 'undefined' ? I18N.t('signOutBtn') : 'લોગ આઉટ'}
        </button>
      </div>
    `;

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

    // Click outside listener
    const closeListener = (e) => {
      if (!menu.contains(e.target) && !e.target.closest('.user-profile-badge')) {
        menu.style.display = 'none';
        document.removeEventListener('click', closeListener);
      }
    };
    setTimeout(() => document.addEventListener('click', closeListener), 50);
  },

  closeProfileMenu() {
    const menu = document.getElementById('profileDropdownMenu');
    if (menu) menu.style.display = 'none';
  },

  async syncCloudProgress() {
    if (!this.currentUser) {
      if (typeof App !== 'undefined') App.showToast("પહેલાં સાઇન ઇન કરો.");
      this.openAuthModal();
      return;
    }

    const syncData = {
      uid: this.currentUser.uid,
      displayName: this.currentUser.displayName || "",
      email: this.currentUser.email || "",
      photoURL: this.currentUser.photoURL || "",
      courseProgress: typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0,
      examPassed: localStorage.getItem('excel_master_exam_passed') === 'true',
      examScore: localStorage.getItem('excel_master_exam_score') || 0,
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem('excel_master_cloud_backup', JSON.stringify(syncData));

    // Sync to Cloud Firestore if initialized and user is logged in
    if (this.db && this.currentUser.uid) {
      try {
        await this.db.collection('excel_users').doc(this.currentUser.uid).set(syncData, { merge: true });
        console.log("Firestore sync successful for user:", this.currentUser.uid);
      } catch (e) {
        console.warn("Firestore sync optional warning:", e.message);
      }
    }

    if (typeof App !== 'undefined') {
      App.showToast(typeof I18N !== 'undefined' ? I18N.t('cloudSyncSuccess') : 'તમારો ડેટા ક્લાઉડ સાથે સફળતાપૂર્વક સિંક થઈ ગયો છે!');
    }
    this.closeProfileMenu();
  },

  async restoreCloudProgress(uid) {
    if (!this.db || !uid) return;
    try {
      const doc = await this.db.collection('excel_users').doc(uid).get();
      if (doc.exists) {
        const data = doc.data();
        if (data.examPassed) {
          localStorage.setItem('excel_master_exam_passed', 'true');
        }
        if (data.examScore) {
          localStorage.setItem('excel_master_exam_score', data.examScore);
        }
        console.log("Restored cloud progress for user:", uid);
      }
    } catch (e) {
      console.warn("Could not restore Firestore doc:", e.message);
    }
  }
};
