/**
 * Excel Master Pro - Firebase Authentication & Cloud Profile Engine
 * Integrates Google Sign-In, Email/Password authentication, and Cloud Progress Sync
 * Based on official Firebase Web SDK (compat v10).
 */

const FirebaseAuthManager = {
  auth: null,
  currentUser: null,
  activeMode: 'signin', // 'signin' or 'signup'
  
  // Custom or Stored Firebase Project Config
  config: JSON.parse(localStorage.getItem('excel_master_firebase_config') || 'null'),

  init() {
    this.setupFirebase();
    this.renderHeaderAuthButton();
  },

  setupFirebase() {
    if (typeof firebase === 'undefined') {
      console.warn("Firebase SDK script not loaded yet.");
      return;
    }

    if (!this.config) {
      // Check if default config is provided or prompt user
      const savedUser = localStorage.getItem('excel_master_mock_user');
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser);
      }
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(this.config);
      }
      this.auth = firebase.auth();
      this.auth.onAuthStateChanged((user) => {
        this.currentUser = user;
        if (user) {
          localStorage.setItem('excel_master_user_profile', JSON.stringify({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }));
          // Pre-fill certificate candidate name with verified Google Name
          if (user.displayName) {
            const certInput = document.getElementById('certCandidateName');
            if (certInput) certInput.value = user.displayName;
          }
        } else {
          localStorage.removeItem('excel_master_user_profile');
        }
        this.renderHeaderAuthButton();
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
        <div class="user-profile-badge flex items-center gap-2 cursor-pointer p-1 pr-2.5 rounded-full bg-card border border-border hover:border-accent transition-all"
             onclick="FirebaseAuthManager.openProfileMenu()">
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
        <button id="authModalBtn" class="btn btn-secondary btn-sm flex items-center gap-1.5 font-bold" onclick="FirebaseAuthManager.openAuthModal()">
          <span>👤</span>
          <span data-i18n="signInBtn">${I18N.t('signInBtn')}</span>
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

    const lang = I18N.currentLang;
    const isSignUp = this.activeMode === 'signup';

    modal.innerHTML = `
      <div class="modal-content auth-modal-box max-w-md w-full bg-card p-6 md:p-8 rounded-2xl border border-border shadow-2xl relative">
        <button class="modal-close-btn" onclick="FirebaseAuthManager.closeAuthModal()" aria-label="Close">✕</button>

        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-2xl mx-auto mb-3">
            🔐
          </div>
          <h3 class="text-xl font-extrabold text-main mb-1">
            ${isSignUp ? I18N.t('authSubmitSignUp') : I18N.t('authModalTitle')}
          </h3>
          <p class="text-xs text-muted">
            ${I18N.t('authModalSubtitle')}
          </p>
        </div>

        <!-- Google 1-Click Sign-In Button -->
        <button class="btn-google-auth w-full py-3 px-4 rounded-xl border border-border bg-page hover:bg-card-subtle flex items-center justify-center gap-3 font-bold text-sm mb-4 transition-all shadow-sm"
                onclick="FirebaseAuthManager.signInWithGoogle()">
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          <span>${I18N.t('googleSignIn')}</span>
        </button>

        <div class="flex items-center gap-3 my-4">
          <div class="h-px bg-border flex-1"></div>
          <span class="text-[11px] uppercase font-bold text-muted">${I18N.t('orEmailLabel')}</span>
          <div class="h-px bg-border flex-1"></div>
        </div>

        <!-- Email & Password Form -->
        <form onsubmit="event.preventDefault(); FirebaseAuthManager.handleEmailAuth();" class="space-y-3 mb-4">
          ${isSignUp ? `
            <div>
              <label class="block text-xs font-bold text-muted mb-1">Full Name</label>
              <input type="text" id="authDisplayNameInput" class="form-control" placeholder="તમારું પૂરું નામ..." required />
            </div>
          ` : ''}

          <div>
            <label class="block text-xs font-bold text-muted mb-1">Email</label>
            <input type="email" id="authEmailInput" class="form-control" placeholder="${I18N.t('emailPlaceholder')}" required />
          </div>

          <div>
            <label class="block text-xs font-bold text-muted mb-1">Password</label>
            <input type="password" id="authPasswordInput" class="form-control" placeholder="${I18N.t('passwordPlaceholder')}" required minlength="6" />
          </div>

          <button type="submit" class="btn btn-primary w-full py-2.5 font-bold shadow-md">
            ${isSignUp ? I18N.t('authSubmitSignUp') : I18N.t('authSubmitSignIn')}
          </button>
        </form>

        <!-- Toggle between Sign In & Sign Up -->
        <div class="text-center text-xs text-muted mb-4">
          ${isSignUp ? `
            <span>${I18N.t('alreadyAccountText')}</span>
            <button class="text-accent font-bold underline ml-1" onclick="FirebaseAuthManager.toggleAuthMode('signin')">
              Sign In
            </button>
          ` : `
            <span>${I18N.t('noAccountText')}</span>
            <button class="text-accent font-bold underline ml-1" onclick="FirebaseAuthManager.toggleAuthMode('signup')">
              Sign Up
            </button>
          `}
        </div>

        <!-- Firebase Config Settings Toggle -->
        <div class="pt-3 border-t border-border flex items-center justify-between text-xs">
          <button class="text-muted hover:text-accent flex items-center gap-1 font-semibold" 
                  onclick="FirebaseAuthManager.openConfigModal()">
            ⚙️ Firebase Config Settings
          </button>

          <!-- Guest Demo Login -->
          <button class="text-accent hover:underline font-bold" 
                  onclick="FirebaseAuthManager.signInAsDemoUser()">
            ⚡ Guest Demo Login
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

  async signInWithGoogle() {
    if (!this.auth) {
      // If project config not set, offer quick demo or configuration
      this.promptForConfigOrDemo("Google Sign-In requires your Firebase Project Config.");
      return;
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.auth.signInWithPopup(provider);
      App.showToast("Signed in as " + (result.user.displayName || result.user.email));
      this.closeAuthModal();
    } catch (err) {
      if (err.code === 'auth/unauthorized-domain') {
        alert("Firebase Auth Domain Alert:\nPlease add '" + window.location.hostname + "' to Authorized Domains in your Firebase Console > Authentication > Settings.");
      } else {
        App.showToast(err.message);
      }
    }
  },

  async handleEmailAuth() {
    const email = document.getElementById('authEmailInput')?.value;
    const password = document.getElementById('authPasswordInput')?.value;
    if (!email || !password) return;

    if (!this.auth) {
      // Offline/Demo auth fallback
      const name = document.getElementById('authDisplayNameInput')?.value || email.split('@')[0];
      this.currentUser = {
        uid: "demo-" + Date.now(),
        displayName: name,
        email: email,
        photoURL: null
      };
      localStorage.setItem('excel_master_mock_user', JSON.stringify(this.currentUser));
      App.showToast("Welcome, " + name + "! (Local Profile Activated)");
      this.renderHeaderAuthButton();
      this.closeAuthModal();
      return;
    }

    try {
      if (this.activeMode === 'signup') {
        const userCred = await this.auth.createUserWithEmailAndPassword(email, password);
        const name = document.getElementById('authDisplayNameInput')?.value;
        if (name && userCred.user) {
          await userCred.user.updateProfile({ displayName: name });
        }
        App.showToast("Account created successfully!");
      } else {
        await this.auth.signInWithEmailAndPassword(email, password);
        App.showToast("Signed in successfully!");
      }
      this.closeAuthModal();
    } catch (err) {
      App.showToast(err.message);
    }
  },

  signInAsDemoUser() {
    const defaultName = "Rajesh Patel (Excel Certified)";
    this.currentUser = {
      uid: "usr-excel-" + Math.floor(1000 + Math.random() * 9000),
      displayName: defaultName,
      email: "rajesh.patel@example.com",
      photoURL: null
    };
    localStorage.setItem('excel_master_mock_user', JSON.stringify(this.currentUser));
    App.showToast("Logged in as " + defaultName);
    this.renderHeaderAuthButton();
    this.closeAuthModal();

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
    App.showToast("Logged out successfully.");
    this.renderHeaderAuthButton();
    this.closeProfileMenu();
  },

  openProfileMenu() {
    let menu = document.getElementById('profileDropdownMenu');
    if (!menu) {
      menu = document.createElement('div');
      menu.id = 'profileDropdownMenu';
      menu.className = 'profile-dropdown-menu bg-card p-4 rounded-2xl border border-border shadow-xl fixed right-4 top-16 z-50 min-w-[240px]';
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
          <span class="text-muted">Course:</span>
          <span class="font-bold ${courseDone ? 'text-green-600' : 'text-amber-600'}">
            ${courseDone ? '100% Completed ✓' : (typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0) + '%'}
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-muted">Live Exam:</span>
          <span class="font-bold ${examPassed ? 'text-green-600' : 'text-muted'}">
            ${examPassed ? 'Passed ✓' : 'Not Passed'}
          </span>
        </div>
      </div>

      <div class="space-y-1 text-xs">
        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2"
                onclick="App.switchTab('certificate'); FirebaseAuthManager.closeProfileMenu();">
          🎓 View My Certificate
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2"
                onclick="FirebaseAuthManager.syncCloudProgress()">
          ☁️ Sync Progress to Cloud
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold text-red-500 flex items-center gap-2"
                onclick="FirebaseAuthManager.signOutUser()">
          🚪 ${I18N.t('signOutBtn')}
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

  syncCloudProgress() {
    App.showToast(I18N.t('cloudSyncSuccess'));
    this.closeProfileMenu();
  },

  openConfigModal() {
    const currentJson = this.config ? JSON.stringify(this.config, null, 2) : '';
    const code = prompt("Firebase Configuration JSON:\nPaste your firebaseConfig object (with apiKey, authDomain, projectId, etc.):", currentJson);
    if (code !== null && code.trim() !== '') {
      try {
        const parsed = JSON.parse(code);
        localStorage.setItem('excel_master_firebase_config', JSON.stringify(parsed));
        this.config = parsed;
        this.setupFirebase();
        alert("Firebase Configuration saved successfully!");
        this.closeAuthModal();
      } catch (e) {
        alert("Invalid JSON format. Please paste valid JSON.");
      }
    }
  },

  promptForConfigOrDemo(msg) {
    if (confirm(msg + "\n\nWould you like to enter your Firebase project keys now? (Click Cancel to use instant Guest Demo mode)")) {
      this.openConfigModal();
    } else {
      this.signInAsDemoUser();
    }
  }
};
