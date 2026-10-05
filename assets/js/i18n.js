/**
 * Excel Master - Trilingual Translation Engine (i18n)
 * Languages: Gujarati (gu), Hindi (hi), English (en)
 */

const I18N = {
  currentLang: localStorage.getItem('excel_master_lang') || 'gu',
  subscribers: [],

  translations: {
    // English
    en: {
      appName: "Excel Master Pro",
      appTagline: "Ultimate Formulas, Shortcuts, Tables & Practice Suite",
      searchPlaceholder: "Search any formula, shortcut, or function...",
      filterAll: "All",
      tabFormulas: "Formulas & Functions",
      tabShortcuts: "Shortcuts",
      tabCourse: "Excel Course 📚",
      tabExam: "Live Exam ⏱️",
      tabPlayground: "Live Playground",
      tabGenerator: "Formula Helper",
      tabQuiz: "Practice Quiz (10 Random)",
      tabErrors: "Errors Master Guide",
      tabShortcutGame: "Shortcut Trainer 🎮",
      tabPracticeSheets: "Practice Workbooks 📥",
      tabCertificate: "Certificate 🎓",
      tabFavorites: "Favorites",
      tabCheatSheet: "Cheat Sheet",

      // Online Course & Live Exam
      courseTitle: "Excel Master Certified Online Course",
      courseSubtitle: "7 Structured Modules • 100% Practical Learning & Progress Tracker",
      courseProgress: "Course Progress:",
      markComplete: "Mark as Completed ✓",
      completedBadge: "Completed ✓",
      practiceExercise: "Interactive Practice",
      startExamFromCourse: "Take Certification Exam Now →",
      examTitle: "Official Excel Live Certification Exam",
      examSubtitle: "50 Questions • 5 Sections (10 Qs each) • 50-Minute Timer • Passing: 70% (35/50)",
      examInstructions: "Rules: Total 50 questions organized into 5 structured sections of 10 questions each. 50 minutes countdown timer. You can navigate freely between sections. Minimum passing score is 70% (35/50) to unlock certification.",
      examStartBtn: "Start Live 50-Question Exam 🚀",
      examTimeRemaining: "Time Remaining:",
      examSubmitBtn: "Submit Exam",
      examPassedMsg: "Congratulations! You passed the official live exam! 🎉",
      examFailedMsg: "You scored below 70%. Please review the course and retake the exam.",
      unlockCertReq: "Certificate Requirement: (1) Complete all 7 course modules (100%) and (2) Pass the Live Exam with at least 70% score.",
      certLockedStatus: "Certification Requirements Status:",
      courseDoneStatus: "Course 100% Completed",
      coursePendingStatus: "Course Incomplete",
      examPassedStatus: "Live Exam Passed",
      examPendingStatus: "Live Exam Not Passed Yet",

      // Firebase Authentication
      signInBtn: "Sign In",
      signOutBtn: "Sign Out",
      authModalTitle: "Sign in to Excel Master",
      authModalSubtitle: "Sync course progress, exam scores, and verified certificates to the cloud.",
      googleSignIn: "Continue with Google",
      orEmailLabel: "Or continue with Email",
      emailPlaceholder: "Your Email address...",
      passwordPlaceholder: "Password...",
      authSubmitSignIn: "Sign In",
      authSubmitSignUp: "Create Account",
      noAccountText: "Don't have an account? Sign Up",
      alreadyAccountText: "Already have an account? Sign In",
      cloudSyncSuccess: "Your progress and certification status have been synced to the cloud!",
      
      // Categories
      catAll: "All Categories",
      catMath: "Math & Calculation",
      catStats: "Statistical",
      catLookup: "Lookup & Reference",
      catLogical: "Logical",
      catText: "Text & String",
      catDate: "Date & Time",
      catArrays: "Dynamic Arrays (365)",
      catFinance: "Financial",

      // Shortcuts Categories
      scBasic: "General & Basic",
      scNav: "Navigation & Selection",
      scEdit: "Data Entry & Editing",
      scFormat: "Formatting",
      scFormulas: "Formulas & Calculation",
      scRows: "Rows & Columns",
      scFilter: "Filters, Pivot & Charts",

      // Levels
      levelBeginner: "Beginner",
      levelIntermediate: "Intermediate",
      levelAdvanced: "Advanced",

      // Formula detail cards
      syntaxLabel: "Syntax & Arguments:",
      scenarioLabel: "Real-world Scenario:",
      tableExampleLabel: "Interactive Table Example:",
      stepsLabel: "Step-by-Step Guide:",
      resultLabel: "Evaluated Result:",
      formulaAppliedLabel: "Formula Applied in Cell:",
      errorGuideLabel: "Common Errors & Solutions:",
      proTipLabel: "Pro Tip / Best Practice:",
      copyFormula: "Copy Formula",
      copied: "Copied to clipboard!",
      favoriteBtn: "Save Favorite",
      unfavoriteBtn: "Remove Favorite",
      tryInPlayground: "Test in Live Playground",
      voiceListen: "Listen Aloud 🔊",
      voiceStop: "Stop Audio ⏹️",
      evaluateStepByStep: "Evaluate Step-by-Step 🔍",

      // Playground
      playgroundTitle: "Interactive Excel Sandbox",
      playgroundSubtitle: "Enter formulas and real values below to see instant recalculations!",
      formulaBarLabel: "Formula Bar (fx):",
      evalResultLabel: "Output:",
      loadTemplate: "Load Sample Template:",
      templateSales: "Monthly Sales Report",
      templateMarks: "Student Marksheet",
      templateExpense: "Office Expenses",
      templateStaff: "Employee Salaries",
      resetSheet: "Reset Sheet",
      addSheetRow: "Add Row",

      // Helper / Generator
      genTitle: "Smart Formula Helper",
      genSubtitle: "Pick what you want to calculate and get the exact formula instantly!",
      genSelectPrompt: "What do you want to calculate?",
      genInputParam1: "First Parameter / Range:",
      genInputParam2: "Second Parameter / Value:",
      genInputParam3: "Third Parameter / Condition:",
      genResultBtn: "Generate Formula",
      genExplanation: "How this formula works:",
      askAiPrompt: "Or ask in plain words (e.g. 'merge two names', 'calculate 18% GST', 'find salary by employee id')...",
      aiSearchBtn: "Find Formula",

      // Quiz
      quizTitle: "Excel Knowledge Quiz & Challenge",
      quizSubtitle: "Test your Excel skills with real practical interview questions!",
      questionNum: "Question",
      of: "of",
      nextQuestion: "Next Question",
      prevQuestion: "Previous Question",
      finishQuiz: "Finish & See Score",
      quizScoreTitle: "Your Quiz Score",
      retakeQuiz: "Retake Quiz",
      explanationLabel: "Explanation:",
      claimCertBtn: "Claim Certificate 🎓",

      // Shortcut Game
      gameTitle: "Interactive Keyboard Shortcut Trainer",
      gameSubtitle: "Test your muscle memory! Press the actual keys on your physical keyboard to answer.",
      gamePrompt: "Press the keyboard keys for:",
      gameStreak: "Current Streak:",
      gameHighScore: "High Score:",
      gameNextBtn: "Next Shortcut →",
      gameCorrectMsg: "Correct! Outstanding! 🎉",
      gameWrongMsg: "Wrong keys! Try again or see hint. ❌",
      gameHintBtn: "Show Hint",

      // Practice Sheets
      workbooksTitle: "Practice Workbooks & Excel Sheets (.csv)",
      workbooksSubtitle: "Download pre-made real-world datasets with challenges to practice in Microsoft Excel or Google Sheets!",
      downloadWorkbookBtn: "Download Workbook (.csv)",

      // Certificate
      certTitle: "Certificate of Completion",
      certSubtitle: "Official Excel Mastery Assessment",
      certNamePrompt: "Enter your full name to generate certificate:",
      certDownloadBtn: "Download Official Certificate (PNG)",
      certLockedMsg: "Complete the quiz with at least 70% score to unlock your certificate!",

      // Cheat sheet & printing
      printSheet: "Print / Save as PDF",
      shortcutsCount: "Shortcuts Available",
      formulasCount: "Formulas Documented",
      windowsMode: "Windows",
      macMode: "Mac",

      // General UI
      themeToggle: "Toggle Dark/Light Mode",
      langSelect: "Select Language",
      installApp: "Install App",
      emptyFavorites: "No favorites saved yet. Click the star on any formula or shortcut to save it here!",
      noResults: "No matching formulas or shortcuts found.",
      footerText: "Designed for Students, Professionals, Accountants & Data Enthusiasts."
    },

    // Gujarati
    gu: {
      appName: "એક્સેલ માસ્ટર પ્રો",
      appTagline: "સંપૂર્ણ ફોર્મુલા, શોર્ટકટ્સ, ટેબલ ઉદાહરણો અને લાઈવ પ્રેક્ટિસ",
      searchPlaceholder: "કોઈપણ ફોર્મુલા, શોર્ટકટ કે ફંકશન શોધો...",
      filterAll: "બધા",
      tabFormulas: "ફોર્મુલા અને ફંકશન",
      tabShortcuts: "કીબોર્ડ શોર્ટકટ્સ",
      tabCourse: "એક્સેલ ઓનલાઇન કોર્સ 📚",
      tabExam: "લાઈવ એક્ઝામ (પરીક્ષા) ⏱️",
      tabPlayground: "લાઈવ પ્લેગ્રાઉન્ડ",
      tabGenerator: "ફોર્મુલા સહાયક",
      tabQuiz: "પ્રેક્ટિસ ક્વિઝ (૧૦ રેન્ડમ)",
      tabErrors: "એક્સેલ એરર્સ માસ્ટર ગાઈડ",
      tabShortcutGame: "શોર્ટકટ ગેમ 🎮",
      tabPracticeSheets: "પ્રેક્ટિસ શીટ્સ 📥",
      tabCertificate: "સર્ટિફિકેટ 🎓",
      tabFavorites: "મનપસંદ (સેવ કરેલ)",
      tabCheatSheet: "ચીટ શીટ",

      // Online Course & Live Exam
      courseTitle: "એક્સેલ માસ્ટર સર્ટિફાઇડ ઓનલાઇન કોર્સ",
      courseSubtitle: "મૂળભૂતથી લઈને એડવાન્સ્ડ સુધીના ૭ સ્ટ્રક્ચર્ડ મોડ્યુલ્સ • ૧૦૦% પ્રેક્ટિકલ લર્નિંગ",
      courseProgress: "કોર્સ પૂર્ણતા પ્રગતિ:",
      markComplete: "પૂર્ણ તરીકે માર્ક કરો ✓",
      completedBadge: "પૂર્ણ થયેલ ✓",
      practiceExercise: "પ્લેગ્રાઉન્ડમાં પ્રેક્ટિસ કરો",
      startExamFromCourse: "લાઈવ સર્ટિફિકેશન પરીક્ષા આપો →",
      examTitle: "સત્તાવાર એક્સેલ લાઈવ સર્ટિફિકેશન પરીક્ષા",
      examSubtitle: "૫૦ પ્રશ્નો • ૫ સેક્શન (દરેકમાં ૧૦ પ્રશ્નો) • ૫૦ મિનિટ સમય • પાસિંગ માર્ક્સ: ૭૦% (૩૫/૫૦)",
      examInstructions: "પરીક્ષા નિયમો: કુલ ૫૦ પ્રશ્નો છે જે ૧૦-૧૦ પ્રશ્નોના ૫ સેક્શનમાં વહેંચાયેલા છે. કુલ ૫૦ મિનિટનો સમય મળશે. તમે કોઈપણ સેક્શનમાં સરળતાથી નેવિગેટ કરી શકો છો. સર્ટિફિકેટ મેળવવા ઓછામાં ઓછા ૭૦% (૩૫/૫૦ ગુણ) જરૂરી છે.",
      examStartBtn: "૫૦ પ્રશ્નોની લાઈવ પરીક્ષા શરૂ કરો 🚀",
      examTimeRemaining: "બાકી રહેલ સમય:",
      examSubmitBtn: "પરીક્ષા સબમિટ કરો",
      examPassedMsg: "અભિનંદન! તમે સત્તાવાર લાઈવ પરીક્ષા સફળતાપૂર્વક પાસ કરી લીધી છે! 🎉",
      examFailedMsg: "તમારો સ્કોર ૭૦% કરતા ઓછો છે. કૃપા કરીને કોર્સ ફરીથી વાંચો અને ફરીથી પરીક્ષા આપો.",
      unlockCertReq: "સર્ટિફિકેટ શરત: (૧) કોર્સના તમામ ૭ મોડ્યુલ પૂર્ણ (૧૦૦%) કરો અને (૨) લાઈવ પરીક્ષામાં ૭૦%+ માર્ક્સ લાવો.",
      certLockedStatus: "સર્ટિફિકેટ મેળવવાની સ્થિતિ:",
      courseDoneStatus: "કોર્સ ૧૦૦% પૂર્ણ થયેલ છે",
      coursePendingStatus: "કોર્સ હજુ બાકી છે",
      examPassedStatus: "લાઈવ પરીક્ષા પાસ કરેલ છે",
      examPendingStatus: "લાઈવ પરીક્ષા પાસ કરવાની બાકી છે",

      // Firebase Authentication
      signInBtn: "સાઇન ઇન",
      signOutBtn: "લોગ આઉટ",
      authModalTitle: "એક્સેલ માસ્ટરમાં સાઇન ઇન કરો",
      authModalSubtitle: "કોર્સ પ્રગતિ, પરીક્ષા સ્કોર અને સર્ટિફિકેટ ક્લાઉડમાં સુરક્ષિત સેવ કરો.",
      googleSignIn: "Google વડે સાઇન ઇન કરો",
      orEmailLabel: "અથવા ઈમેલ વડે આગળ વધો",
      emailPlaceholder: "તમારું ઈમેલ એડ્રેસ...",
      passwordPlaceholder: "પાસવર્ડ...",
      authSubmitSignIn: "સાઇન ઇન કરો",
      authSubmitSignUp: "નવું ખાતું બનાવો",
      noAccountText: "ખાતું નથી? નવું ખાતું બનાવો",
      alreadyAccountText: "પહેલેથી ખાતું છે? સાઇન ઇન કરો",
      cloudSyncSuccess: "તમારો ડેટા ક્લાઉડ સાથે સફળતાપૂર્વક સિંક થઈ ગયો છે!",

      // Categories
      catAll: "બધી કેટેગરી",
      catMath: "ગણતરી અને મેથ્સ (Math)",
      catStats: "આંકડાકીય (Statistical)",
      catLookup: "લુકઅપ અને રેફરન્સ (Lookup)",
      catLogical: "શરતી અને લોજિકલ (Logical)",
      catText: "ટેક્સ્ટ અને નામ (Text)",
      catDate: "તારીખ અને સમય (Date & Time)",
      catArrays: "ડાયનેમિક એરે (Modern Arrays)",
      catFinance: "નાણાકીય અને વ્યાજ (Financial)",

      // Shortcuts Categories
      scBasic: "સામાન્ય અને મૂળભૂત (General)",
      scNav: "નેવિગેશન અને સિલેક્શન (Navigation)",
      scEdit: "ડેટા એન્ટ્રી અને એડિટિંગ (Data Entry)",
      scFormat: "ફોર્મેટિંગ અને સ્ટાઇલ (Formatting)",
      scFormulas: "ફોર્મુલા અને ગણતરી (Formulas)",
      scRows: "રો અને કોલમ (Rows & Columns)",
      scFilter: "ફિલ્ટર, પિવોટ અને ચાર્ટ્સ (Filters)",

      // Levels
      levelBeginner: "સરળ (Beginner)",
      levelIntermediate: "મધ્યમ (Intermediate)",
      levelAdvanced: "એડવાન્સ્ડ (Advanced)",

      // Formula detail cards
      syntaxLabel: "ફોર્મુલા સિન્ટેક્સ (લખવાની રીત):",
      scenarioLabel: "રોજિંદા કામનું ઉદાહરણ (Scenario):",
      tableExampleLabel: "લાઈવ ટેબલ સમજૂતી:",
      stepsLabel: "પગલાવાર સમજૂતી (Step-by-Step):",
      resultLabel: "પરિણામ (Output):",
      formulaAppliedLabel: "સેલમાં લખાયેલ ફોર્મુલા:",
      errorGuideLabel: "સામાન્ય ભૂલો અને ઉકેલ (Errors & Fix):",
      proTipLabel: "પ્રો ટિપ (મહત્વની ટીપ):",
      copyFormula: "ફોર્મુલા કોપી કરો",
      copied: "સફળતાપૂર્વક કોપી થઈ ગઈ!",
      favoriteBtn: "મનપસંદમાં ઉમેરો",
      unfavoriteBtn: "મનપસંદમાંથી હટાવો",
      tryInPlayground: "પ્લેગ્રાઉન્ડમાં ટેસ્ટ કરો",
      voiceListen: "અવાજ સાંભળો 🔊",
      voiceStop: "અવાજ રોકો ⏹️",
      evaluateStepByStep: "સ્ટેપ-બાય-સ્ટેપ ગણતરી જુઓ 🔍",

      // Playground
      playgroundTitle: "લાઈવ એક્સેલ પ્રેક્ટિસ પ્લેગ્રાઉન્ડ",
      playgroundSubtitle: "નીચેના ટેબલમાં કિંમતો બદલો અને ફોર્મુલા જાતે રન કરીને લાઈવ પરિણામ જુઓ!",
      formulaBarLabel: "ફોર્મુલા બાર (fx):",
      evalResultLabel: "ગણતરીનું પરિણામ:",
      loadTemplate: "સેમ્પલ ટેબલ પસંદ કરો:",
      templateSales: "માસિક વેચાણ રિપોર્ટ (Sales)",
      templateMarks: "વિદ્યાર્થી ગુણપત્રક (Marksheet)",
      templateExpense: "ઓફિસ ખર્ચ હિસાબ (Expenses)",
      templateStaff: "કર્મચારી પગાર યાદી (Salary)",
      resetSheet: "રીસેટ ટેબલ",
      addSheetRow: "નવી રો ઉમેરો",

      // Helper / Generator
      genTitle: "સ્માર્ટ ફોર્મુલા સહાયક (બિલ્ડર)",
      genSubtitle: "તમારે શું ગણતરી કરવી છે તે પસંદ કરો અને સેકન્ડોમાં તૈયાર ફોર્મુલા મેળવો!",
      genSelectPrompt: "તમારે શું ગણવું છે?",
      genInputParam1: "પ્રથમ કોલમ / રેન્જ:",
      genInputParam2: "બીજો પરિમાણ / કિંમત:",
      genInputParam3: "ત્રીજી શરત / માપદંડ:",
      genResultBtn: "ફોર્મુલા તૈયાર કરો",
      genExplanation: "આ ફોર્મુલા કેવી રીતે કામ કરશે:",
      askAiPrompt: "અથવા તમારી સાદી ભાષામાં પૂછો (જેમ કે: 'જીએસટી ગણવો', 'બે નામ જોડવા', 'આઈડી પરથી પગાર શોધવો')...",
      aiSearchBtn: "ફોર્મુલા શોધો",

      // Quiz
      quizTitle: "એક્સેલ ટેસ્ટ અને ઈન્ટરવ્યુ પ્રશ્નોત્તરી",
      quizSubtitle: "પ્રેક્ટિકલ પ્રશ્નો સાથે તમારી એક્સેલ આવડત ચકાસો!",
      questionNum: "પ્રશ્ન",
      of: "માંથી",
      nextQuestion: "આગળનો પ્રશ્ન",
      prevQuestion: "પાછળનો પ્રશ્ન",
      finishQuiz: "પરિણામ જુઓ",
      quizScoreTitle: "તમારું સ્કોર કાર્ડ",
      retakeQuiz: "ફરીથી ક્વિઝ આપો",
      explanationLabel: "સમજૂતી:",
      claimCertBtn: "સર્ટિફિકેટ મેળવો 🎓",

      // Shortcut Game
      gameTitle: "ઇન્ટરેક્ટિવ કીબોર્ડ શોર્ટકટ ગેમ",
      gameSubtitle: "તમારી સ્પીડ ચકાસો! તમારા કીબોર્ડ પરથી સાચી કી દબાવીને જવાબ આપો.",
      gamePrompt: "નીચેની ક્રિયા માટે કીબોર્ડ કી દબાવો:",
      gameStreak: "સળંગ સાચા જવાબો:",
      gameHighScore: "હાઈ સ્કોર:",
      gameNextBtn: "આગળનો શોર્ટકટ →",
      gameCorrectMsg: "વાહ! સાચો જવાબ! શાબાશ! 🎉",
      gameWrongMsg: "ખોટી કી! ફરી પ્રયાસ કરો અથવા હિન્ટ જુઓ. ❌",
      gameHintBtn: "હિન્ટ (મદદ)",

      // Practice Sheets
      workbooksTitle: "ડાઉનલોડ પ્રેક્ટિસ એક્સેલ ફાઈલો (.csv)",
      workbooksSubtitle: "વાસ્તવિક ડેટાસેટ સાથે એક્સેલ પ્રેક્ટિસ ફાઇલો ડાઉનલોડ કરો અને તમારા પોતાના કમ્પ્યુટરમાં એક્સેલ ખોલીને પ્રેક્ટિસ કરો!",
      downloadWorkbookBtn: "ફાઇલ ડાઉનલોડ કરો (.csv)",

      // Certificate
      certTitle: "એક્સેલ માસ્ટરી સર્ટિફિકેટ",
      certSubtitle: "સત્તાવાર એક્સેલ પ્રોફિશિયન્સી સર્ટિફિકેટ",
      certNamePrompt: "સર્ટિફિકેટ પર પ્રિન્ટ કરવા માટે તમારું પૂરું નામ લખો:",
      certDownloadBtn: "સર્ટિફિકેટ ડાઉનલોડ કરો (PNG)",
      certLockedMsg: "સર્ટિફિકેટ અનલોક કરવા માટે ક્વિઝમાં ઓછામાં ઓછા ૭૦% ગુણ મેળવો!",

      // Cheat sheet & printing
      printSheet: "પ્રિન્ટ કરો / PDF સેવ કરો",
      shortcutsCount: "ઉપલબ્ધ શોર્ટકટ્સ",
      formulasCount: "વિગતવાર ફોર્મુલા",
      windowsMode: "Windows કી",
      macMode: "Mac કી",

      // General UI
      themeToggle: "ડાર્ક / લાઈટ મોડ બદલો",
      langSelect: "ભાષા પસંદ કરો",
      installApp: "એપ ઇન્સ્ટોલ કરો",
      emptyFavorites: "હજી સુધી કોઈ ફોર્મુલા સેવ કરી નથી. સ્ટાર આઇકોન દબાવીને ગમે તે ફોર્મુલા અહીં સેવ કરી શકો છો!",
      noResults: "કોઈ મેળ ખાતી ફોર્મુલા કે શોર્ટકટ મળ્યા નથી.",
      footerText: "વિદ્યાર્થીઓ, એકાઉન્ટન્ટ્સ, ઓફિસ કર્મચારીઓ અને એક્સેલ શીખનારાઓ માટે સંપૂર્ણ સહાયક."
    },

    // Hindi
    hi: {
      appName: "एक्सेल मास्टर प्रो",
      appTagline: "फॉर्मूला, शॉर्टकट्स, टेबल उदाहरण और लाइव अभ्यास",
      searchPlaceholder: "कोई भी फॉर्मूला, शॉर्टकट या फ़ंक्शन खोजें...",
      filterAll: "सभी",
      tabFormulas: "फॉर्मूला और फ़ंक्शन",
      tabShortcuts: "कीबोर्ड शॉर्टकट्स",
      tabCourse: "एक्सेल ऑनलाइन कोर्स 📚",
      tabExam: "लाइव परीक्षा ⏱️",
      tabPlayground: "लाइव प्लेग्राउंड",
      tabGenerator: "फॉर्मूला सहायक",
      tabQuiz: "प्रैक्टिस क्विज़ (10 रैंडम)",
      tabErrors: "एक्सेल एरर्स मास्टर गाइड",
      tabShortcutGame: "शॉर्टकट ट्रेनर 🎮",
      tabPracticeSheets: "प्रैक्टिस शीट्स 📥",
      tabCertificate: "सर्टिफिकेट 🎓",
      tabFavorites: "पसंदीदा (सेव किए गए)",
      tabCheatSheet: "चीट शीट",

      // Online Course & Live Exam
      courseTitle: "एक्सेल मास्टर सर्टिफाइड ऑनलाइन कोर्स",
      courseSubtitle: "बुनियादी से एडवांस तक 7 संरचित मॉड्यूल • 100% व्यावहारिक शिक्षण",
      courseProgress: "कोर्स पूर्णता प्रगति:",
      markComplete: "पूर्ण चिह्नित करें ✓",
      completedBadge: "पूर्ण ✓",
      practiceExercise: "प्लेग्राउंड में अभ्यास करें",
      startExamFromCourse: "लाइव प्रमाणन परीक्षा दें →",
      examTitle: "आधिकारिक एक्सेल लाइव सर्टिफिकेशन परीक्षा",
      examSubtitle: "50 प्रश्न • 5 सेक्शन (प्रत्येक में 10 प्रश्न) • 50 मिनट का समय • पासिंग मार्क्स: 70% (35/50)",
      examInstructions: "परीक्षा नियम: कुल 50 प्रश्न 10-10 प्रश्नों के 5 सेक्शन में विभाजित हैं। 50 मिनट का समय मिलेगा। आप किसी भी सेक्शन में आसानी से नेविगेट कर सकते हैं। सर्टिफिकेट के लिए न्यूनतम 70% (35/50 अंक) आवश्यक हैं।",
      examStartBtn: "50 प्रश्नों की लाइव परीक्षा शुरू करें 🚀",
      examTimeRemaining: "शेष समय:",
      examSubmitBtn: "परीक्षा सबमिट करें",
      examPassedMsg: "बधाई हो! आपने आधिकारिक लाइव परीक्षा उत्तीर्ण कर ली है! 🎉",
      examFailedMsg: "आपका स्कोर 70% से कम है। कृपया कोर्स का पुनः अध्ययन करें और दोबारा प्रयास करें।",
      unlockCertReq: "सर्टिफिकेट शर्त: (1) कोर्स के सभी 7 मॉड्यूल पूरे करें (100%) और (2) लाइव परीक्षा में 70%+ अंक लाएं।",
      certLockedStatus: "सर्टिफिकेट पात्रता स्थिति:",
      courseDoneStatus: "कोर्स 100% पूरा हुआ",
      coursePendingStatus: "कोर्स अभी अधूरा है",
      examPassedStatus: "लाइव परीक्षा उत्तीर्ण",
      examPendingStatus: "लाइव परीक्षा उत्तीर्ण होना बाकी है",

      // Firebase Authentication
      signInBtn: "साइन इन",
      signOutBtn: "लॉग आउट",
      authModalTitle: "एक्सेल मास्टर में साइन इन करें",
      authModalSubtitle: "कोर्स प्रगति, परीक्षा स्कोर और प्रमाण पत्र क्लाउड में सुरक्षित रखें।",
      googleSignIn: "Google के साथ जारी रखें",
      orEmailLabel: "या ईमेल द्वारा आगे बढ़ें",
      emailPlaceholder: "आपका ईमेल पता...",
      passwordPlaceholder: "पासवर्ड...",
      authSubmitSignIn: "साइन इन करें",
      authSubmitSignUp: "नया खाता बनाएं",
      noAccountText: "खाता नहीं है? नया बनाएं",
      alreadyAccountText: "पहले से खाता है? साइन इन करें",
      cloudSyncSuccess: "आपका डेटा क्लाउड के साथ सफलतापूर्वक सिंक हो गया है!",

      // Categories
      catAll: "सभी श्रेणियां",
      catMath: "गणित और गणना (Math)",
      catStats: "सांख्यिकी (Statistical)",
      catLookup: "लुकअप और संदर्भ (Lookup)",
      catLogical: "तार्किक और शर्तें (Logical)",
      catText: "टेक्स्ट और नाम (Text)",
      catDate: "तारीख और समय (Date & Time)",
      catArrays: "डायनामिक ऐरे (Modern Arrays)",
      catFinance: "वित्तीय व ब्याज (Financial)",

      // Shortcuts Categories
      scBasic: "सामान्य और मूल (General)",
      scNav: "नेविगेशन और चयन (Navigation)",
      scEdit: "डेटा एंट्री और संपादन (Data Entry)",
      scFormat: "फ़ॉर्मेटिंग और शैली (Formatting)",
      scFormulas: "फॉर्मूला और गणना (Formulas)",
      scRows: "पंक्ति और कॉलम (Rows & Columns)",
      scFilter: "फ़िल्टर, पिवट और चार्ट्स (Filters)",

      // Levels
      levelBeginner: "सरल (Beginner)",
      levelIntermediate: "मध्यम (Intermediate)",
      levelAdvanced: "उन्नत (Advanced)",

      // Formula detail cards
      syntaxLabel: "फॉर्मूला सिंटेक्स (लिखने का तरीका):",
      scenarioLabel: "दैनिक कार्य का उदाहरण (Scenario):",
      tableExampleLabel: "लाइव टेबल द्वारा समझें:",
      stepsLabel: "चरण-दर-चरण विवरण (Step-by-Step):",
      resultLabel: "परिणाम (Output):",
      formulaAppliedLabel: "सेल में लागू किया गया फॉर्मूला:",
      errorGuideLabel: "सामान्य गलतियां और समाधान (Errors & Fix):",
      proTipLabel: "प्रो टिप (विशेष सलाह):",
      copyFormula: "फॉर्मूला कॉपी करें",
      copied: "सफलतापूर्वक कॉपी हो गया!",
      favoriteBtn: "पसंदीदा में जोड़ें",
      unfavoriteBtn: "पसंदीदा से हटाएं",
      tryInPlayground: "प्लेग्राउंड में जांचें",
      voiceListen: "आवाज़ सुनें 🔊",
      voiceStop: "आवाज़ रोकें ⏹️",
      evaluateStepByStep: "स्टेप-बाय-स्टेप गणना देखें 🔍",

      // Playground
      playgroundTitle: "लाइव एक्सेल अभ्यास प्लेग्राउंड",
      playgroundSubtitle: "नीचे टेबल में मान बदलें और फॉर्मूला खुद चलाकर वास्तविक परिणाम देखें!",
      formulaBarLabel: "फॉर्मूला बार (fx):",
      evalResultLabel: "गणना का परिणाम:",
      loadTemplate: "सैंपल टेबल चुनें:",
      templateSales: "मासिक बिक्री रिपोर्ट (Sales)",
      templateMarks: "छात्र अंकतालिका (Marksheet)",
      templateExpense: "कार्यालय खर्च (Expenses)",
      templateStaff: "कर्मचारी वेतन सूची (Salary)",
      resetSheet: "टेबल रीसेट करें",
      addSheetRow: "नई पंक्ति जोड़ें",

      // Helper / Generator
      genTitle: "स्मार्ट फॉर्मूला सहायक (बिल्डर)",
      genSubtitle: "चुनें कि आप क्या गणना करना चाहते हैं और तुरंत तैयार फॉर्मूला पाएं!",
      genSelectPrompt: "आप क्या गणना करना चाहते हैं?",
      genInputParam1: "पहला कॉलम / रेंज:",
      genInputParam2: "दूसरा मान / पैरामीटर:",
      genInputParam3: "तीसरी शर्त / मानदंड:",
      genResultBtn: "फॉर्मूला तैयार करें",
      genExplanation: "यह फॉर्मूला कैसे कार्य करता है:",
      askAiPrompt: "या अपनी सरल भाषा में पूछें (जैसे 'जीएसटी गणना', 'दो नाम जोड़ना', 'आईडी से वेतन ढूंढना')...",
      aiSearchBtn: "फॉर्मूला खोजें",

      // Quiz
      quizTitle: "एक्सेल ज्ञान परीक्षण व इंटरव्यू क्विज़",
      quizSubtitle: "व्यावहारिक प्रश्नों से अपनी एक्सेल दक्षता परखें!",
      questionNum: "प्रश्न",
      of: "का",
      nextQuestion: "अगला प्रश्न",
      prevQuestion: "पिछला प्रश्न",
      finishQuiz: "परिणाम देखें",
      quizScoreTitle: "आपका स्कोर कार्ड",
      retakeQuiz: "फिर से क्विज़ दें",
      explanationLabel: "व्याख्या:",
      claimCertBtn: "सर्टिफिकेट प्राप्त करें 🎓",

      // Shortcut Game
      gameTitle: "इंटरएक्टिव कीबोर्ड शॉर्टकट ट्रेनर",
      gameSubtitle: "अपने कीबोर्ड पर सही शॉर्टकट दबाकर उत्तर दें और अपनी गति बढ़ाएं।",
      gamePrompt: "इस कार्य के लिए कीबोर्ड कुंजियां दबाएं:",
      gameStreak: "लगातार सही उत्तर:",
      gameHighScore: "उच्चतम स्कोर:",
      gameNextBtn: "अगला शॉर्टकट →",
      gameCorrectMsg: "शाबाश! बिल्कुल सही उत्तर! 🎉",
      gameWrongMsg: "गलत कुंजी! पुनः प्रयास करें या संकेत देखें। ❌",
      gameHintBtn: "संकेत देखें",

      // Practice Sheets
      workbooksTitle: "प्रैक्टिस एक्सेल वर्कबुक डाउनलोड (.csv)",
      workbooksSubtitle: "वास्तविक उदाहरणों वाली एक्सेल शीट डाउनलोड करें और अपने कंप्यूटर में अभ्यास करें!",
      downloadWorkbookBtn: "शीट डाउनलोड करें (.csv)",

      // Certificate
      certTitle: "एक्सेल प्रवीणता प्रमाणपत्र",
      certSubtitle: "आधिकारिक एक्सेल मास्टर सर्टिफिकेट",
      certNamePrompt: "सर्टिफिकेट पर लिखने के लिए अपना पूरा नाम दर्ज करें:",
      certDownloadBtn: "सर्टिफिकेट डाउनलोड करें (PNG)",
      certLockedMsg: "सर्टिफिकेट अनलॉक करने के लिए क्विज़ में कम से कम 70% अंक प्राप्त करें!",

      // Cheat sheet & printing
      printSheet: "प्रिंट करें / PDF सेव करें",
      shortcutsCount: "उपलब्ध शॉर्टकट्स",
      formulasCount: "विस्तृत फॉर्मूले",
      windowsMode: "Windows कुंजी",
      macMode: "Mac कुंजी",

      // General UI
      themeToggle: "डार्क / लाइट मोड बदलें",
      langSelect: "भाषा चुनें",
      installApp: "ऐप इंस्टॉल करें",
      emptyFavorites: "अभी तक कोई फॉर्मूला सहेजा नहीं गया है। किसी भी फॉर्मूला पर स्टार दबाकर यहाँ सेव करें!",
      noResults: "कोई मिलता-जुलता फॉर्मूला या शॉर्टकट नहीं मिला।",
      footerText: "छात्रों, लेखाकारों, कार्यालय कर्मचारियों और डेटा विश्लेषकों के लिए संपूर्ण गाइड।"
    }
  },

  /**
   * Translate a key
   */
  t(key) {
    const langObj = this.translations[this.currentLang] || this.translations.gu;
    return langObj[key] || this.translations.en[key] || key;
  },

  /**
   * Set active language and notify subscribers
   */
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('excel_master_lang', lang);
      document.documentElement.lang = lang;
      this.notifySubscribers();
    }
  },

  /**
   * Subscribe to language change events
   */
  subscribe(callback) {
    if (typeof callback === 'function') {
      this.subscribers.push(callback);
    }
  },

  /**
   * Notify all subscribers
   */
  notifySubscribers() {
    this.subscribers.forEach(cb => cb(this.currentLang));
  }
};
