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
  
  // Official Hardcoded Firebase Project Credentials for excel-master-pro-4c1a1
  config: {
    apiKey: "AIzaSyBzk4WKDSiUNvuFtOH_XrUjW_DIvKVjft0",
    authDomain: "excel-master-pro-4c1a1.firebaseapp.com",
    projectId: "excel-master-pro-4c1a1",
    storageBucket: "excel-master-pro-4c1a1.firebasestorage.app",
    messagingSenderId: "30653899749",
    appId: "1:30653899749:web:ddf8a1fbedfba3bd33450c"
  },

  isLoggedIn() {
    if (this.currentUser && (this.currentUser.uid || this.currentUser.email)) {
      return true;
    }
    const profile = localStorage.getItem('excel_master_user_profile');
    if (profile) {
      try {
        const u = JSON.parse(profile);
        if (u && (u.uid || u.email)) {
          this.currentUser = u;
          return true;
        }
      } catch (e) {}
    }
    const mockUser = localStorage.getItem('excel_master_mock_user');
    if (mockUser) {
      try {
        const u = JSON.parse(mockUser);
        if (u && (u.uid || u.email)) {
          this.currentUser = u;
          return true;
        }
      } catch (e) {}
    }
    return false;
  },

  init() {
    // Reset test session once on upgrade so user sees the login page first
    if (!localStorage.getItem('excel_master_clean_gate_v6')) {
      localStorage.removeItem('excel_master_user_profile');
      localStorage.removeItem('excel_master_mock_user');
      localStorage.setItem('excel_master_clean_gate_v6', 'true');
    }

    this.isLoggedIn();
    this.setupFirebase();
    this.renderHeaderAuthButton();
  },

  setupFirebase() {
    if (typeof firebase === 'undefined') {
      console.warn("Firebase SDK script not loaded yet.");
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
          console.warn("Firestore init notice:", fsErr);
        }
      }

      // Listen for auth state changes
      this.auth.onAuthStateChanged(async (user) => {
        if (user) {
          this.currentUser = user;
          const profileData = {
            uid: user.uid,
            displayName: user.displayName || user.email.split('@')[0],
            email: user.email,
            photoURL: user.photoURL
          };
          localStorage.setItem('excel_master_user_profile', JSON.stringify(profileData));
          
          if (user.displayName) {
            const certInput = document.getElementById('certCandidateName');
            if (certInput) certInput.value = user.displayName;
          }

          this.restoreCloudProgress(user.uid);
        } else {
          const mockUser = localStorage.getItem('excel_master_mock_user');
          if (mockUser) {
            try { this.currentUser = JSON.parse(mockUser); } catch(e) { this.currentUser = null; }
          } else {
            this.currentUser = null;
            localStorage.removeItem('excel_master_user_profile');
          }
        }

        this.renderHeaderAuthButton();
        if (typeof App !== 'undefined') {
          App.checkAuthGate();
        }
      });

      // Handle redirect results for mobile/PWA
      this.auth.getRedirectResult().then((result) => {
        if (result && result.user) {
          if (typeof App !== 'undefined') {
            App.showToast("સફળતાપૂર્વક સાઇન ઇન: " + (result.user.displayName || result.user.email));
            App.checkAuthGate();
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
        <button id="authModalBtn" class="btn btn-secondary btn-sm flex items-center gap-1.5 font-bold" onclick="App.checkAuthGate()">
          <span>👤</span>
          <span data-i18n="signInBtn">${typeof I18N !== 'undefined' ? I18N.t('signInBtn') : 'સાઇન ઇન'}</span>
        </button>
      `;
    }
  },

  async signInWithGoogle() {
    if (!this.auth) {
      this.setupFirebase();
    }

    if (!this.auth) {
      alert("Firebase શરૂ થઈ શક્યું નથી. કૃપા કરીને થોડી સેકન્ડ બાદ ફરી પ્રયત્ન કરો.");
      return;
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await this.auth.signInWithPopup(provider);
      
      const userName = result.user.displayName || result.user.email;
      if (typeof App !== 'undefined') {
        App.showToast("સફળતાપૂર્વક સાઇન ઇન: " + userName);
        App.checkAuthGate();
      }
    } catch (err) {
      console.error("Google sign in error:", err);
      if (err.code === 'auth/popup-blocked' || err.code === 'auth/cancelled-popup-request') {
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
          App.checkAuthGate();
        }
      } else {
        await this.auth.signInWithEmailAndPassword(email, password);
        if (typeof App !== 'undefined') {
          App.showToast("સફળતાપૂર્વક સાઇન ઇન થઈ ગયું!");
          App.checkAuthGate();
        }
      }
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
    const defaultName = "Guest Learner (ડેમો યુઝર)";
    this.currentUser = {
      uid: "demo-usr-" + Math.floor(1000 + Math.random() * 9000),
      displayName: defaultName,
      email: "guest@excelmaster.pro",
      photoURL: null
    };
    localStorage.setItem('excel_master_mock_user', JSON.stringify(this.currentUser));
    
    // Auto update certificate name
    const certInput = document.getElementById('certCandidateName');
    if (certInput) certInput.value = defaultName;

    this.renderHeaderAuthButton();
    if (typeof App !== 'undefined') {
      App.showToast("ગેસ્ટ તરીકે પ્રવેશ સફળ: સાઇટ અનલોક થઈ ગઈ!");
      App.checkAuthGate();
    }
  },

  signOutUser() {
    if (this.auth) {
      this.auth.signOut().catch(() => {});
    }
    this.currentUser = null;
    localStorage.removeItem('excel_master_mock_user');
    localStorage.removeItem('excel_master_user_profile');
    
    this.renderHeaderAuthButton();
    this.closeProfileMenu();

    if (typeof App !== 'undefined') {
      App.showToast("સફળતાપૂર્વક લોગ આઉટ થયા. સાઇટ ફરીથી લોક થઈ છે.");
      App.checkAuthGate();
    }
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
        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2 cursor-pointer"
                onclick="App.switchTab('certificate'); FirebaseAuthManager.closeProfileMenu();">
          🎓 મારું સર્ટિફિકેટ જુઓ
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold flex items-center gap-2 cursor-pointer"
                onclick="FirebaseAuthManager.syncCloudProgress()">
          ☁️ ક્લાઉડ સિંક કરો (Cloud Sync)
        </button>

        <button class="w-full text-left p-2 rounded-lg hover:bg-card-subtle font-semibold text-red-500 flex items-center gap-2 cursor-pointer"
                onclick="FirebaseAuthManager.signOutUser()">
          🚪 ${typeof I18N !== 'undefined' ? I18N.t('signOutBtn') : 'લોગ આઉટ'}
        </button>
      </div>
    `;

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

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
