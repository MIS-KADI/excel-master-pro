/**
 * Excel Master - Online Course Engine & Curriculum
 * 7 Structured Modules from Beginner to Advanced with Interactive Practice & Progress Tracking.
 */

const EXCEL_COURSE = {
  // Course State saved in localStorage
  completedModules: JSON.parse(localStorage.getItem('excel_master_course_progress') || '[]'),

  modules: [
    {
      id: "mod-1",
      number: 1,
      duration: "45 mins",
      title: {
        en: "Excel Essentials, Interface & Cell Referencing",
        gu: "એક્સેલ પાયાનું જ્ઞાન, ઇન્ટરફેસ અને સેલ લોકિંગ ($A$1)",
        hi: "एक्सेल मूल बातें, इंटरफ़ेस और सेल लॉकिंग ($A$1)"
      },
      summary: {
        en: "Learn the core layout of Excel, differences between Relative (A1) and Absolute ($A$1) references, and master auto-fill shortcuts.",
        gu: "એક્સેલનું મૂળભૂત માળખું, સાદા સેલ અને લોક કરેલા સેલ ($A$1) વચ્ચેનો તફાવત, અને ઓટોફિલ શોર્ટકટ્સ શીખો.",
        hi: "एक्सेल का बुनियादी लेआउट, सामान्य सेल और लॉक सेल ($A$1) का अंतर और ऑटो-फिल सीखें।"
      },
      lessons: {
        en: [
          "Understanding Rows (1,2,3), Columns (A,B,C), Name Box, and Formula Bar.",
          "How formulas work: Starting with the equal sign (=).",
          "Relative vs Absolute Referencing: Using F4 to lock rows and columns ($A$1).",
          "Fast Data Entry: Ctrl + D (Fill Down), Ctrl + R (Fill Right), and Ctrl + ; (Today's Date)."
        ],
        gu: [
          "રો (૧,૨,૩), કોલમ (A,B,C), નેમ બોક્સ અને ફોર્મુલા બારની સમજૂતી.",
          "ફોર્મુલા કેવી રીતે શરૂ થાય: હંમેશા બરાબરની નિશાની (=) થી.",
          "સેલ રેફરન્સ અને લોકિંગ: F4 કી દબાવીને સેલને ફિક્સ કરવો ($A$1).",
          "ઝડપી ડેટા એન્ટ્રી: Ctrl + D (ફિલ ડાઉન), Ctrl + R (ફિલ રાઇટ), અને Ctrl + ; (આજની તારીખ)."
        ],
        hi: [
          "पंक्तियाँ, कॉलम, नेम बॉक्स और फ़ॉर्मूला बार की समझ।",
          "फ़ॉर्मूला हमेशा बराबर के चिह्न (=) से शुरू होता है।",
          "F4 दबाकर सेल एड्रेस को लॉक करना ($A$1)।",
          "त्वरित डेटा एंट्री: Ctrl + D, Ctrl + R और Ctrl + ; (आज की तारीख)।"
        ]
      },
      practiceTemplate: "sales",
      practiceFormula: "=SUM(C2:C6)"
    },
    {
      id: "mod-2",
      number: 2,
      duration: "50 mins",
      title: {
        en: "Essential Math & Statistical Functions",
        gu: "મૂળભૂત ગણતરી અને આંકડાશાસ્ત્ર (SUM, AVERAGE, ROUND)",
        hi: "गणित और सांख्यिकी फ़ंक्शंस (SUM, AVERAGE, ROUND)"
      },
      summary: {
        en: "Master daily calculation tools: SUM, AVERAGE, COUNT, COUNTA, MAX, MIN, and rounding off invoice decimals.",
        gu: "દૈનિક હિસાબના ફોર્મુલા: સરવાળો (SUM), સરેરાશ (AVERAGE), ગણતરી (COUNT/COUNTA), મોટા-નાના નંબરો (MAX/MIN) અને રાઉન્ડ ફિગર (ROUND).",
        hi: "दैनिक गणना के प्रमुख फ़ॉर्मूले: SUM, AVERAGE, COUNT, MAX, MIN और दशमलव राउंड करना।"
      },
      lessons: {
        en: [
          "SUM and AutoSum (Alt + =): Instant total calculation.",
          "AVERAGE: Arithmetic mean calculation, handling blank cells.",
          "COUNT vs COUNTA: Counting numeric cells vs non-empty cells.",
          "MAX and MIN: Finding top and bottom values in seconds.",
          "ROUND, ROUNDUP, ROUNDDOWN: Rounding decimals for clean bills."
        ],
        gu: [
          "SUM અને ઓટોસમ (Alt + =): એક ક્લિકમાં કુલ સરવાળો કરવો.",
          "AVERAGE: સરેરાશ ગણતરી અને ખાલી સેલની કાળજી રાખવી.",
          "COUNT અને COUNTA: માત્ર નંબર ગણવા અને ખાલી ન હોય તેવા તમામ સેલ ગણવા.",
          "MAX અને MIN: સૌથી મોટી અને સૌથી નાની રકમ સેકન્ડોમાં શોધવી.",
          "ROUND અને ROUNDUP: બિલમાં પોઈન્ટ પછીના પૈસાને રાઉન્ડ ફિગર કરવા."
        ],
        hi: [
          "SUM और ऑटो-सम (Alt + =): तुरंत कुल योग करना।",
          "AVERAGE: औसत निकालना और खाली सेल संभालना।",
          "COUNT बनाम COUNTA: केवल संख्या गिनना बनाम भरा हुआ सेल गिनना।",
          "MAX और MIN: सबसे बड़ा और सबसे छोटा मान खोजना।",
          "ROUND: बिलों में दशमलव को राउंड ऑफ करना।"
        ]
      },
      practiceTemplate: "expense",
      practiceFormula: "=SUM(C2:C6)"
    },
    {
      id: "mod-3",
      number: 3,
      duration: "60 mins",
      title: {
        en: "Lookup Mastery: VLOOKUP, XLOOKUP & INDEX/MATCH",
        gu: "લુકઅપ માસ્ટરી: VLOOKUP, XLOOKUP અને INDEX + MATCH",
        hi: "लुकअप मास्टरी: VLOOKUP, XLOOKUP और INDEX + MATCH"
      },
      summary: {
        en: "Search and retrieve data across tables seamlessly. Learn why XLOOKUP and INDEX/MATCH replace older VLOOKUP limitations.",
        gu: "ટેબલમાંથી ડેટા શોધવાની કળા. XLOOKUP અને INDEX+MATCH કેમ VLOOKUP કરતા વધુ પાવરફુલ છે તે ઉદાહરણ સાથે સમજો.",
        hi: "टेबल में से डेटा खोजना। समझें कि XLOOKUP और INDEX/MATCH पुराने VLOOKUP से बेहतर क्यों हैं।"
      },
      lessons: {
        en: [
          "VLOOKUP syntax: lookup_value, table, col_index, FALSE for exact match.",
          "Limitations of VLOOKUP: Cannot search to the left, column deletion breaks index.",
          "XLOOKUP: The modern champion that works left, right, up, down with automatic exact matching.",
          "INDEX + MATCH: The classic flexible combination for high-performance large spreadsheets."
        ],
        gu: [
          "VLOOKUP લખવાની રીત: શું શોધવું, ક્યાં શોધવું, કોલમ નંબર, અને 0 (FALSE).",
          "VLOOKUP ની મર્યાદા: ડાબી બાજુ લુકઅપ કરી શકતું નથી.",
          "XLOOKUP: નવું સુપર-ફોર્મુલા જે ડાબે કે જમણે ગમે ત્યાંથી એરર વગર ડેટા લાવે છે.",
          "INDEX + MATCH: લાખો ડેટામાં ફાસ્ટ અને ક્યારેય ન તૂટતી જોડી."
        ],
        hi: [
          "VLOOKUP सिंटेक्स: मान, टेबल, कॉलम इंडेक्स और 0 (FALSE)।",
          "VLOOKUP की सीमा: बाईं ओर नहीं खोज सकता।",
          "XLOOKUP: आधुनिक और सबसे शक्तिशाली फ़ंक्शन जो किसी भी दिशा में काम करता है।",
          "INDEX + MATCH: बड़े डेटाबेस के लिए सबसे भरोसेमंद तरीका।"
        ]
      },
      practiceTemplate: "sales",
      practiceFormula: '=XLOOKUP("North", B2:B6, C2:C6, "Not Found")'
    },
    {
      id: "mod-4",
      number: 4,
      duration: "55 mins",
      title: {
        en: "Logical Conditions, Multi-Criteria & Error Handling",
        gu: "શરતી નિર્ણય, બહુવિધ શરતો અને એરર હેન્ડલિંગ (IF, IFS, IFERROR)",
        hi: "तार्किक निर्णय और एरर हैंडलिंग (IF, IFS, IFERROR)"
      },
      summary: {
        en: "Automate decisions with IF and IFS statements. Learn how to cleanly hide calculation errors with IFERROR and IFNA.",
        gu: "શરત મુજબ આપમેળે નિર્ણય લેવો (પાસ/નાપાસ, બોનસ પાત્રતા). IFERROR થી એરરો છુપાવીને રિપોર્ટ સુંદર બનાવવો.",
        hi: "IF और IFS से स्वचालित निर्णय लें। IFERROR से सभी एरर छिपाकर साफ़ रिपोर्ट बनाएं।"
      },
      lessons: {
        en: [
          "Simple IF: IF(condition, value_if_true, value_if_false).",
          "Multiple conditions with IFS: Eliminating nested IF headaches.",
          "Combining conditions: AND() (all must be true) vs OR() (any can be true).",
          "SUMIF and SUMIFS: Adding only when specific criteria are satisfied.",
          "COUNTIF and COUNTIFS: Counting items meeting one or multiple criteria.",
          "IFERROR: Shielding your spreadsheet from #N/A, #DIV/0!, #VALUE!."
        ],
        gu: [
          "સાદો IF: =IF(શરત, સાચું હોય તો શું, ખોટું હોય તો શું).",
          "નેસ્ટેડ IF ની ઝંઝટ વગર IFS વાપરીને ગ્રેડિંગ (A, B, C, Fail) નક્કી કરવું.",
          "AND (બધી શરતો સાચી) અને OR (બેમાંથી એક સાચી) નો ઉપયોગ.",
          "SUMIF અને SUMIFS: શરત મુજબ સરવાળો કરવો.",
          "COUNTIF અને COUNTIFS: શરત મુજબ સેલની સંખ્યા ગણવી.",
          "IFERROR: #N/A કે #DIV/0! જેવી એરરોને છુપાવીને 0 કે સુંદર મેસેજ દર્શાવવો."
        ],
        hi: [
          "सरल IF फ़ंक्शन का उपयोग।",
          "IFS का उपयोग करके ग्रेडिंग सिस्टम बनाना।",
          "AND और OR का संयोजन।",
          "SUMIF और SUMIFS द्वारा सशर्त योग करना।",
          "COUNTIF और COUNTIFS द्वारा गिनती करना।",
          "IFERROR से एरर्स को संभालना।"
        ]
      },
      practiceTemplate: "marks",
      practiceFormula: '=IF(C2>=35, "Pass", "Fail")'
    },
    {
      id: "mod-5",
      number: 5,
      duration: "50 mins",
      title: {
        en: "Text Cleaning, Formatting & String Extraction",
        gu: "ટેક્સ્ટ સાફ કરવી, નામ જોડવા અને અલગ કરવા (TEXTJOIN, TRIM)",
        hi: "टेक्स्ट की सफाई और नाम जोड़ना व अलग करना (TEXTJOIN, TRIM)"
      },
      summary: {
        en: "Clean messy data from external software: remove rogue spaces with TRIM, merge names with TEXTJOIN, extract codes with LEFT/MID/RIGHT.",
        gu: "સોફ્ટવેરમાંથી આવતો અસ્તવ્યસ્ત ડેટા સાફ કરવો: વધારાની સ્પેસ હટાવવી (TRIM), નામો જોડવા (TEXTJOIN), અને કોડ અલગ કરવા (LEFT/MID/RIGHT).",
        hi: "अव्यवस्थित डेटा साफ़ करना: अतिरिक्त स्पेस हटाना (TRIM), नाम जोड़ना (TEXTJOIN) और कोड अलग करना।"
      },
      lessons: {
        en: [
          "TRIM: Removing invisible leading and trailing spaces that break lookups.",
          "PROPER, UPPER, LOWER: Standardizing casing for customer names and PAN/GST codes.",
          "TEXTJOIN: Merging multiple cells with delimiters and skipping blanks automatically.",
          "LEFT, RIGHT, MID: Extracting state codes, middle names, or suffixes.",
          "TEXTSPLIT: Splitting comma-separated lists across columns in 1 second."
        ],
        gu: [
          "TRIM: સેલની આગળ-પાછળ રહેલી અદ્રશ્ય સ્પેસ સાફ કરવી જેથી VLOOKUP માં એરર ન આવે.",
          "PROPER, UPPER, LOWER: નામોને ટાઈટલ કેસમાં ફેરવવા કેપિટલ/સ્મોલ કરવા.",
          "TEXTJOIN: અલગ અલગ સેલને અલ્પવિરામ કે સ્પેસ સાથે જોડીને આખું સરનામું બનાવવું.",
          "LEFT, RIGHT, MID: જીએસટી નંબર માંથી રાજ્ય કોડ કે પાન નંબર અલગ કરવા.",
          "TEXTSPLIT: એક જ સેલના લખાણને અલગ અલગ કોલમમાં વહેંચી દેવું."
        ],
        hi: [
          "TRIM: अतिरिक्त खाली जगह हटाना।",
          "PROPER, UPPER, LOWER: नाम और कोड्स का केस सही करना।",
          "TEXTJOIN: कई सेलों को एक साथ जोड़ना।",
          "LEFT, RIGHT, MID: टेक्स्ट का कोई विशिष्ट भाग अलग करना।",
          "TEXTSPLIT: टेक्स्ट को अलग-अलग सेल में बांटना।"
        ]
      },
      practiceTemplate: "staff",
      practiceFormula: '=UPPER(A2)'
    },
    {
      id: "mod-6",
      number: 6,
      duration: "55 mins",
      title: {
        en: "Dates, Calendars, Working Days & Financial EMI",
        gu: "તારીખ, કેલેન્ડર, કામકાજના દિવસો અને લોન EMI (DATEDIF, PMT)",
        hi: "तारीख, कैलेंडर, कार्य दिवस और लोन EMI (DATEDIF, PMT)"
      },
      summary: {
        en: "Handle dates accurately: calculate exact age/experience with DATEDIF, official working days with NETWORKDAYS, and loan monthly EMI with PMT.",
        gu: "જન્મતારીખ પરથી ચોક્કસ ઉંમર (DATEDIF), રજાઓ બાદ કરી કામકાજના દિવસો (NETWORKDAYS) અને લોનનો માસિક હપ્તો (PMT) ગણવો.",
        hi: "उम्र की सही गणना (DATEDIF), कार्य दिवस निकालना (NETWORKDAYS) और लोन की ईएमआई (PMT) निकालना।"
      },
      lessons: {
        en: [
          "TODAY() vs NOW(): Live dynamic dates and timestamps.",
          "DATEDIF: Calculating exact age in years ('Y'), months ('M'), and days ('D').",
          "NETWORKDAYS & NETWORKDAYS.INTL: Workday calculations excluding weekends & holidays.",
          "EDATE & EOMONTH: Maturity dates and billing month-end deadlines.",
          "PMT: Calculating monthly loan installments (Principal + Interest).",
          "FV: Future maturity value of SIP investments and recurring deposits."
        ],
        gu: [
          "TODAY() અને NOW(): આજની લાઈવ તારીખ અને ઘડિયાળનો સમય.",
          "DATEDIF: જન્મતારીખ પરથી ચોક્કસ પૂર્ણ થયેલ ઉંમર (વર્ષ, મહિના, દિવસ) શોધવી.",
          "NETWORKDAYS: શનિ-રવિ અને તહેવારોની રજાઓ બાદ કરી પગાર માટેના કામના દિવસો ગણવા.",
          "EDATE અને EOMONTH: EMI ની નિયત તારીખ અને મહિનાનો છેલ્લો દિવસ શોધવો.",
          "PMT: હોમ લોન કે કાર લોનનો દર મહિને ભરવાનો થતો હપ્તો (EMI) ગણવો.",
          "FV: મ્યુચ્યુઅલ ફંડ SIP કે PPF નું ભવિષ્યમાં કેટલું ફંડ બનશે તે શોધવું."
        ],
        hi: [
          "TODAY() और NOW() का उपयोग।",
          "DATEDIF: सही उम्र और अनुभव वर्षों में निकालना।",
          "NETWORKDAYS: सप्ताहांत और छुट्टियों को छोड़कर कार्य दिवस गिनना।",
          "EDATE और EOMONTH: नियत तिथियां और माह का अंतिम दिन।",
          "PMT: मासिक लोन किस्त (EMI) की सही गणना।",
          "FV: भविष्य का निवेश मूल्य (SIP परिपक्वता)।"
        ]
      },
      practiceTemplate: "staff",
      practiceFormula: '=PMT(10%/12, 5*12, -500000)'
    },
    {
      id: "mod-7",
      number: 7,
      duration: "65 mins",
      title: {
        en: "Modern Excel 365 Dynamic Arrays & Data Analysis",
        gu: "આધુનિક એક્સેલ ૩૬૫ ડાયનેમિક એરે અને ડેટા એનાલિસિસ (UNIQUE, FILTER, VSTACK)",
        hi: "आधुनिक एक्सेल 365 डायनामिक ऐरे और डेटा विश्लेषण (UNIQUE, FILTER, VSTACK)"
      },
      summary: {
        en: "Master modern spill formulas that revolutionize Excel: UNIQUE, FILTER, SORT, VSTACK, and fast keyboard navigation.",
        gu: "આજના આધુનિક એક્સેલની સૌથી પાવરફુલ ફોર્મુલા: UNIQUE (ડુપ્લીકેટ હટાવવા), FILTER (લાઈવ ફિલ્ટર), SORT, VSTACK (ટેબલ જોડવા).",
        hi: "आधुनिक एक्सेल के स्पिल फॉर्मूले: UNIQUE, FILTER, SORT, VSTACK और डेटा विश्लेषण।"
      },
      lessons: {
        en: [
          "Spill behavior: How one formula populates dozens of cells dynamically (#SPILL! fixes).",
          "UNIQUE: Extracting clean distinct master lists automatically.",
          "FILTER: Building live dynamic reports without copying and pasting.",
          "SORT & SORTBY: Sorting tables automatically from highest to lowest.",
          "VSTACK & HSTACK: Stacking multi-branch tables into a single master sheet.",
          "LET: Accelerating formula calculation speeds by 2x with local variables."
        ],
        gu: [
          "સ્પિલ (Spill) ફોર્મુલાની સમજ: એક જ ફોર્મુલાથી હજારો સેલમાં ડેટા ફેલાઈ જવો.",
          "UNIQUE: કોઈપણ કોલમમાંથી ડુપ્લીકેટ આપોઆપ હટાવીને યુનિક લિસ્ટ બનાવવું.",
          "FILTER: કોપી-પેસ્ટ કર્યા વગર માત્ર ચોક્કસ શરત વાળો ડેટા આપોઆપ નવી જગ્યાએ લાવવો.",
          "SORT: સૌથી વધુથી ઓછા વેચાણ મુજબ લીડરબોર્ડ ઓટોમેટિક સોર્ટ કરવું.",
          "VSTACK: અલગ અલગ શાખા કે મહિનાના ટેબલોને એકબીજાની નીચે જોડી દેવા.",
          "LET: ભારે ફાઈલોની ગણતરી બમણી ઝડપી બનાવવી."
        ],
        hi: [
          "स्पिल फॉर्मूले की कार्यप्रणाली और #SPILL! का समाधान।",
          "UNIQUE: बिना डुप्लिकेट के विशिष्ट सूची तैयार करना।",
          "FILTER: गतिशील रूप से रिपोर्ट तैयार करना।",
          "SORT: डेटा को स्वतः क्रमबद्ध करना।",
          "VSTACK: कई टेबलों को एक साथ जोड़ना।"
        ]
      },
      practiceTemplate: "sales",
      practiceFormula: '=UNIQUE(B2:B6)'
    }
  ],

  /**
   * Check if a module is completed
   */
  isCompleted(moduleId) {
    return this.completedModules.includes(moduleId);
  },

  /**
   * Toggle completion state of a module
   */
  toggleComplete(moduleId) {
    if (this.isCompleted(moduleId)) {
      this.completedModules = this.completedModules.filter(id => id !== moduleId);
      App.showToast("Module marked incomplete");
    } else {
      this.completedModules.push(moduleId);
      App.showToast(I18N.t('completedBadge'));
    }
    localStorage.setItem('excel_master_course_progress', JSON.stringify(this.completedModules));
    App.render();
  },

  /**
   * Get overall percentage (0 - 100%)
   */
  getProgress() {
    const total = this.modules.length;
    const completed = this.completedModules.length;
    return Math.round((completed / total) * 100);
  },

  /**
   * Check if entire course is 100% finished
   */
  isCourseFinished() {
    return this.completedModules.length === this.modules.length;
  }
};
