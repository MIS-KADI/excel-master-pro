/**
 * Excel Master - Complete Excel Keyboard Shortcuts Database
 * Categorized, searchable, with Windows and Mac key combinations
 * and descriptions in Gujarati, Hindi, and English.
 */

const EXCEL_SHORTCUTS = [
  // ==========================================
  // 1. GENERAL & WORKBOOK SHORTCUTS
  // ==========================================
  {
    id: "sc-save",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "S"],
    keysMac: ["Cmd", "S"],
    action: {
      en: "Save Workbook",
      gu: "ફાઇલ સેવ (સાચવવી)",
      hi: "वर्कबुक सेव करना"
    },
    description: {
      en: "Quickly saves the current changes in the active workbook to avoid data loss.",
      gu: "તમારી એક્સેલ ફાઇલને તુરંત સેવ કરે છે જેથી ડેટા ગુમાવવાનો ડર ન રહે.",
      hi: "सक्रिय वर्कबुक में किए गए बदलावों को तुरंत सुरक्षित (सेव) करता है।"
    }
  },
  {
    id: "sc-saveas",
    category: "scBasic",
    level: "beginner",
    keysWin: ["F12"],
    keysMac: ["Cmd", "Shift", "S"],
    action: {
      en: "Save As (New Name / Format)",
      gu: "સેવ એઝ (નવા નામ કે ફોર્મેટમાં સેવ કરવું)",
      hi: "सेव एज़ (नए नाम या प्रारूप में सहेजना)"
    },
    description: {
      en: "Opens the Save As dialog directly to save file with a new name or as PDF / CSV.",
      gu: "નવા નામે અથવા PDF/CSV ફોર્મેટમાં ફાઇલ સેવ કરવા માટેનું ડાયલોગ બોક્સ સીધું ખોલે છે.",
      hi: "नए नाम या PDF/CSV प्रारूप में फ़ाइल सहेजने के लिए सीधे सेव एज़ विंडो खोलता है।"
    }
  },
  {
    id: "sc-undo",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "Z"],
    keysMac: ["Cmd", "Z"],
    action: {
      en: "Undo Last Action",
      gu: "અનડૂ (છેલ્લી ભૂલ પાછી ખેંચવી)",
      hi: "अंडू (पिछली क्रिया वापस लेना)"
    },
    description: {
      en: "Reverses your last action or mistake immediately.",
      gu: "તમે કરેલી છેલ્લી ક્રિયા કે ભૂલને તરત જ રદ કરીને પહેલા જેવું કરી દે છે.",
      hi: "किए गए पिछले कार्य या गलती को तुरंत पूर्ववत करता है।"
    }
  },
  {
    id: "sc-redo",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "Y"],
    keysMac: ["Cmd", "Y"],
    action: {
      en: "Redo Last Action / Repeat",
      gu: "રીડૂ (છેલ્લી ક્રિયા ફરીથી કરવી)",
      hi: "रीडू (अंतिम क्रिया को दोहराना)"
    },
    description: {
      en: "Redoes the action that was undone, or repeats the last command.",
      gu: "અનડૂ કરેલું પાછું લાવે છે અથવા છેલ્લી ક્રિયા ફરીથી દોહરાવે છે.",
      hi: "अंडू की गई क्रिया को फिर से लागू करता है या अंतिम आदेश दोहराता है।"
    }
  },
  {
    id: "sc-print",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "P"],
    keysMac: ["Cmd", "P"],
    action: {
      en: "Print / Print Preview",
      gu: "પ્રિન્ટ / પ્રિન્ટ પ્રિવ્યૂ",
      hi: "प्रिंट / प्रिंट प्रीव्यू"
    },
    description: {
      en: "Opens the print settings and full page preview dialog.",
      gu: "શીટની પ્રિન્ટ કાઢવા અને પ્રિન્ટ કેવી આવશે તે જોવા માટે.",
      hi: "शीट को प्रिंट करने और पेज का पूर्वावलोकन देखने के लिए।"
    }
  },
  {
    id: "sc-find",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "F"],
    keysMac: ["Cmd", "F"],
    action: {
      en: "Find Text or Number",
      gu: "શોધો (ફાઇન્ડ)",
      hi: "खोजें (फ़ाइंड)"
    },
    description: {
      en: "Searches for any name, value, or text within the entire sheet or workbook.",
      gu: "આખી શીટમાંથી કોઈપણ નામ, નંબર કે શબ્દ ઝડપથી શોધવા માટે.",
      hi: "पूरी शीट में किसी भी नाम, संख्या या शब्द को तुरंत ढूंढने के लिए।"
    }
  },
  {
    id: "sc-replace",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "H"],
    keysMac: ["Cmd", "Shift", "H"],
    action: {
      en: "Find & Replace",
      gu: "શોધો અને બદલો (રિપ્લેસ)",
      hi: "खोजें और बदलें (रिप्लेस)"
    },
    description: {
      en: "Finds text or numbers and replaces them across thousands of cells in 1 second.",
      gu: "કોઈ શબ્દ કે નંબર શોધીને તેની જગ્યાએ નવો શબ્દ હજારો સેલમાં ૧ સેકન્ડમાં બદલવા માટે.",
      hi: "किसी शब्द या संख्या को ढूंढकर उसकी जगह नया शब्द एक सेकंड में बदलने के लिए।"
    }
  },
  {
    id: "sc-new-wb",
    category: "scBasic",
    level: "beginner",
    keysWin: ["Ctrl", "N"],
    keysMac: ["Cmd", "N"],
    action: {
      en: "New Workbook",
      gu: "નવી એક્સેલ ફાઇલ ખોલો",
      hi: "नई वर्कबुक खोलें"
    },
    description: {
      en: "Instantly creates a fresh blank workbook window.",
      gu: "નવી કોરી એક્સેલ ફાઇલ તરત જ શરૂ કરે છે.",
      hi: "तुरंत एक नई खाली एक्सेल फ़ाइल खोलता है।"
    }
  },

  // ==========================================
  // 2. NAVIGATION & SELECTION
  // ==========================================
  {
    id: "sc-sel-row",
    category: "scNav",
    level: "intermediate",
    keysWin: ["Shift", "Space"],
    keysMac: ["Shift", "Space"],
    action: {
      en: "Select Entire Row",
      gu: "આખી આડી લાઈન (Row) સિલેક્ટ કરો",
      hi: "पूरी पंक्ति (Row) का चयन करें"
    },
    description: {
      en: "Instantly highlights the entire current horizontal row across all columns.",
      gu: "તમે જે સેલમાં હોવ તે આખી આડી રો (Row) ને એકસાથે સિલેક્ટ કરે છે.",
      hi: "वर्तमान पंक्ति की पूरी चौड़ाई को एक बार में चुन लेता है।"
    }
  },
  {
    id: "sc-sel-col",
    category: "scNav",
    level: "intermediate",
    keysWin: ["Ctrl", "Space"],
    keysMac: ["Ctrl", "Space"],
    action: {
      en: "Select Entire Column",
      gu: "આખી ઊભી કોલમ (Column) સિલેક્ટ કરો",
      hi: "पूरा कॉलम (Column) चुनें"
    },
    description: {
      en: "Instantly highlights the entire current vertical column from top to bottom.",
      gu: "તમે જે સેલમાં હોવ તે આખી ઊભી કોલમ (A, B, C...) ને એક ક્લિક વગર સિલેક્ટ કરે છે.",
      hi: "वर्तमान कॉलम को ऊपर से नीचे तक एक साथ चुन लेता है।"
    }
  },
  {
    id: "sc-jump-edge",
    category: "scNav",
    level: "intermediate",
    keysWin: ["Ctrl", "Arrow Keys"],
    keysMac: ["Cmd", "Arrow Keys"],
    action: {
      en: "Jump to Edge of Data Block",
      gu: "ડેટાના છેવાડે સીધા કૂદી જવું",
      hi: "डेटा के अंतिम सिरे पर सीधे पहुंचना"
    },
    description: {
      en: "Jumps directly to the last populated cell in that direction without scrolling.",
      gu: "માઉસથી સ્ક્રોલ કર્યા વગર હજારો રો ના અંતમાં કે શરૂઆતમાં ૧ સેકન્ડમાં પહોંચી જાય છે.",
      hi: "बिना स्क्रॉल किए डेटा के सबसे अंतिम या पहले सेल पर तुरंत पहुंचाता है।"
    }
  },
  {
    id: "sc-sel-to-edge",
    category: "scNav",
    level: "intermediate",
    keysWin: ["Ctrl", "Shift", "Arrow Keys"],
    keysMac: ["Cmd", "Shift", "Arrow Keys"],
    action: {
      en: "Select Range to Edge of Data",
      gu: "છેક સુધીનો આખો ડેટા સિલેક્ટ કરવો",
      hi: "डेटा के अंत तक सभी सेल चुनना"
    },
    description: {
      en: "Extends cell selection all the way to the end of continuous data rows/columns.",
      gu: "ઉપરથી નીચે સુધીના હજારો સેલને એકસાથે સિલેક્ટ કરવા માટે જાદુઈ શોર્ટકટ.",
      hi: "शुरुआत से लेकर डेटा के अंत तक के सभी सेलों को तुरंत चुनने का सबसे तेज तरीका।"
    }
  },
  {
    id: "sc-go-home",
    category: "scNav",
    level: "beginner",
    keysWin: ["Ctrl", "Home"],
    keysMac: ["Fn", "Ctrl", "Left"],
    action: {
      en: "Jump to Cell A1",
      gu: "સીધા સેલ A1 (શરૂઆત) માં જવું",
      hi: "सीधे सेल A1 (शुरुआत) पर जाना"
    },
    description: {
      en: "Instantly returns cursor to the very top-left corner of the sheet (Cell A1).",
      gu: "શીટમાં ગમે ત્યાં હોવ, સીધા જ પ્રથમ સેલ A1 માં પહોંચાડી દે છે.",
      hi: "शीट में कहीं भी हों, तुरंत पहले सेल A1 पर पहुंचा देता है।"
    }
  },
  {
    id: "sc-next-sheet",
    category: "scNav",
    level: "intermediate",
    keysWin: ["Ctrl", "Page Down"],
    keysMac: ["Fn", "Cmd", "Down"],
    action: {
      en: "Switch to Next Sheet Tab",
      gu: "આગળની શીટમાં જવું (Next Sheet)",
      hi: "अगली शीट टैब पर जाना"
    },
    description: {
      en: "Toggles to the next worksheet tab on the right without clicking the mouse.",
      gu: "માઉસ અડ્યા વગર આગળની એક્સેલ શીટમાં જવા માટે.",
      hi: "माउस के बिना अगली वर्कशीट पर जाने के लिए।"
    }
  },
  {
    id: "sc-prev-sheet",
    category: "scNav",
    level: "intermediate",
    keysWin: ["Ctrl", "Page Up"],
    keysMac: ["Fn", "Cmd", "Up"],
    action: {
      en: "Switch to Previous Sheet Tab",
      gu: "પાછળની શીટમાં જવું (Prev Sheet)",
      hi: "पिछली शीट टैब पर जाना"
    },
    description: {
      en: "Toggles to the previous worksheet tab on the left.",
      gu: "પાછળની એક્સેલ શીટમાં જવા માટે.",
      hi: "पिछली वर्कशीट पर वापस जाने के लिए।"
    }
  },

  // ==========================================
  // 3. DATA ENTRY & EDITING SHORTCUTS
  // ==========================================
  {
    id: "sc-edit-cell",
    category: "scEdit",
    level: "beginner",
    keysWin: ["F2"],
    keysMac: ["Ctrl", "U"],
    action: {
      en: "Edit Active Cell",
      gu: "સેલ એડિટ કરવો (F2)",
      hi: "सक्रिय सेल को एडिट करना"
    },
    description: {
      en: "Places blinking cursor at end of cell content without overwriting existing data.",
      gu: "સેલમાં લખેલો ડેટા ભૂંસાયા વગર લખાણની છેલ્લે કર્સર મૂકી સુધારો કરવા દે છે.",
      hi: "सेल के पुराने डेटा को मिटाए बिना अंत में कर्सर रखकर सुधार करने की अनुमति देता है।"
    }
  },
  {
    id: "sc-line-break",
    category: "scEdit",
    level: "intermediate",
    keysWin: ["Alt", "Enter"],
    keysMac: ["Opt", "Enter"],
    action: {
      en: "Insert Line Break inside Same Cell",
      gu: "એક જ સેલમાં નવી લાઈન (લાઈન બ્રેક)",
      hi: "एक ही सेल में नई लाइन शुरू करना"
    },
    description: {
      en: "Creates a new line within the same cell (crucial for multiline addresses).",
      gu: "એક જ સેલમાં એડ્રેસ જેવું લાંબુ લખાણ નીચેની નવી લીટીમાં લખવા માટે અતિ ઉપયોગી.",
      hi: "एक ही सेल के अंदर नया पैराग्राफ या लाइन शुरू करने के लिए बेहद जरूरी।"
    }
  },
  {
    id: "sc-fill-down",
    category: "scEdit",
    level: "beginner",
    keysWin: ["Ctrl", "D"],
    keysMac: ["Cmd", "D"],
    action: {
      en: "Fill Down (Copy from cell above)",
      gu: "ફિલ ડાઉન (ઉપરના સેલની વિગત નીચે કોપી કરવી)",
      hi: "फ़िल डाउन (ऊपर वाले सेल की नकल नीचे करना)"
    },
    description: {
      en: "Copies the content or formula from the cell directly above into selected cells.",
      gu: "ઉપરના સેલનું લખાણ કે ફોર્મુલા નીચેના સેલમાં તરત જ ડુપ્લીકેટ કરી દે છે.",
      hi: "ठीक ऊपर वाले सेल के डेटा या फॉर्मूले को नीचे के सेल में तुरंत कॉपी करता है।"
    }
  },
  {
    id: "sc-fill-right",
    category: "scEdit",
    level: "intermediate",
    keysWin: ["Ctrl", "R"],
    keysMac: ["Cmd", "R"],
    action: {
      en: "Fill Right (Copy from left cell)",
      gu: "ફિલ રાઈટ (ડાબી બાજુના સેલની વિગત જમણી બાજુ લાવવી)",
      hi: "फ़िल राइट (बाएं सेल का डेटा दाएं कॉपी करना)"
    },
    description: {
      en: "Copies the formula or value from the cell immediately to the left.",
      gu: "ડાબી બાજુના સેલની ફોર્મુલા કે રકમ જમણી બાજુના સેલમાં કોપી કરે છે.",
      hi: "बाईं ओर के सेल के डेटा को दाईं ओर के सेल में कॉपी करता है।"
    }
  },
  {
    id: "sc-insert-date",
    category: "scEdit",
    level: "beginner",
    keysWin: ["Ctrl", ";"],
    keysMac: ["Cmd", ";"],
    action: {
      en: "Insert Current Date (Static)",
      gu: "આજની તારીખ ઉમેરો (કાયમી ફિક્સ)",
      hi: "वर्तमान तारीख दर्ज करें (स्थिर)"
    },
    description: {
      en: "Inserts today's calendar date as a permanent fixed number that never changes.",
      gu: "આજની તારીખ કાયમી ફિક્સ કિંમત તરીકે સેલમાં દાખલ કરે છે જે ભવિષ્યમાં બદલાતી નથી.",
      hi: "आज की तारीख को स्थायी रूप से दर्ज करता है जो भविष्य में कभी नहीं बदलती।"
    }
  },
  {
    id: "sc-insert-time",
    category: "scEdit",
    level: "intermediate",
    keysWin: ["Ctrl", "Shift", ":"],
    keysMac: ["Cmd", "Shift", ";"],
    action: {
      en: "Insert Current Time (Static)",
      gu: "અત્યારનો સમય ઉમેરો (Time Stamp)",
      hi: "वर्तमान समय दर्ज करें (स्थिर)"
    },
    description: {
      en: "Stamps current system clock time (HH:MM AM/PM) into the cell.",
      gu: "હાલનો ચોક્કસ ઘડિયાળનો સમય સેલમાં ઉમેરે છે.",
      hi: "वर्तमान घड़ी का सही समय सेल में दर्ज करता है।"
    }
  },
  {
    id: "sc-flash-fill",
    category: "scEdit",
    level: "advanced",
    keysWin: ["Ctrl", "E"],
    keysMac: ["Ctrl", "E"],
    action: {
      en: "Flash Fill (Magic Auto-Extraction)",
      gu: "ફ્લેશ ફિલ (ચમત્કારી ઓટો-ડેટા અલગ કરવો)",
      hi: "फ्लैश फिल (जादुई पैटर्न पहचान व डेटा अलग करना)"
    },
    description: {
      en: "Automatically detects patterns and splits/combines first names, last names, or phone numbers.",
      gu: "પહેલા નામ અને અટકને ફોર્મુલા વગર આપોઆપ ઓળખીને અલગ અલગ કોલમમાં સેકન્ડોમાં વહેંચી દે છે.",
      hi: "पैटर्न को पहचानकर बिना फॉर्मूले के नाम और उपनाम को तुरंत अलग-अलग कर देता है।"
    }
  },

  // ==========================================
  // 4. FORMATTING SHORTCUTS
  // ==========================================
  {
    id: "sc-fmt-dlg",
    category: "scFormat",
    level: "beginner",
    keysWin: ["Ctrl", "1"],
    keysMac: ["Cmd", "1"],
    action: {
      en: "Format Cells Dialog Box",
      gu: "ફોર્મેટ સેલ્સ ડાયલોગ બોક્સ ખોલવું",
      hi: "फ़ॉर्मेट सेल्स विंडो खोलना"
    },
    description: {
      en: "The master shortcut to open Number, Alignment, Font, Border, and Fill settings.",
      gu: "નંબર, બોર્ડર, કલર, ફોન્ટ અને અલાઈનમેન્ટ સેટ કરવાનું મુખ્ય માસ્ટર બોક્સ ખોલે છે.",
      hi: "नंबर, बॉर्डर, फॉन्ट, रंग और अलाइनमेंट बदलने की मुख्य मास्टर विंडो खोलता है।"
    }
  },
  {
    id: "sc-bold",
    category: "scFormat",
    level: "beginner",
    keysWin: ["Ctrl", "B"],
    keysMac: ["Cmd", "B"],
    action: {
      en: "Bold Text Toggle",
      gu: "અક્ષરો ઘાટા કરવા (Bold)",
      hi: "अक्षर मोटे करना (Bold)"
    },
    description: {
      en: "Applies or removes bold formatting to text.",
      gu: "પસંદ કરેલ લખાણને ઘાટું (Bold) કરવા અથવા હટાવવા માટે.",
      hi: "चुने गए टेक्स्ट को बोल्ड करने या हटाने के लिए।"
    }
  },
  {
    id: "sc-currency",
    category: "scFormat",
    level: "intermediate",
    keysWin: ["Ctrl", "Shift", "$"],
    keysMac: ["Ctrl", "Shift", "$"],
    action: {
      en: "Apply Currency Format (₹ / $)",
      gu: "ચલણ ફોર્મેટ લાગુ કરવું (રૂપિયા / ડોલર)",
      hi: "मुद्रा प्रारूप लागू करना (₹ / $)"
    },
    description: {
      en: "Formats selected numbers with currency symbol, commas, and two decimals.",
      gu: "નંબરોને રૂપિયાના ચિહ્ન અને અલ્પવિરામ સાથે કરન્સી ફોર્મેટમાં ફેરવે છે.",
      hi: "संख्याओं को मुद्रा चिह्न, अल्पविराम और दो दशमलव स्थानों के साथ प्रारूपित करता है।"
    }
  },
  {
    id: "sc-percent",
    category: "scFormat",
    level: "intermediate",
    keysWin: ["Ctrl", "Shift", "%"],
    keysMac: ["Ctrl", "Shift", "%"],
    action: {
      en: "Apply Percentage Format (%)",
      gu: "ટકાવારી ફોર્મેટ (%) લાગુ કરવું",
      hi: "प्रतिशत प्रारूप (%) लागू करना"
    },
    description: {
      en: "Multiplies by 100 and appends percentage sign (e.g. 0.15 becomes 15%).",
      gu: "દશાંશ સંખ્યાને ટકાવારી (%) માં રૂપાંતરિત કરે છે (0.18 -> 18%).",
      hi: "संख्या को प्रतिशत चिह्न के साथ दिखाता है (0.18 -> 18%)।"
    }
  },
  {
    id: "sc-autofit-col",
    category: "scFormat",
    level: "advanced",
    keysWin: ["Alt", "H", "O", "I"],
    keysMac: ["Opt", "Cmd", "R"],
    action: {
      en: "Auto-Fit Column Width",
      gu: "કોલમની પહોળાઈ લખાણ મુજબ ઓટો-સેટ કરવી",
      hi: "कॉलम की चौड़ाई टेक्स्ट अनुसार स्वतः सेट करना"
    },
    description: {
      en: "Automatically resizes column width so all long text and ### errors are fully visible.",
      gu: "જ્યારે સેલમાં લખાણ મોટું હોવાથી ### દેખાય ત્યારે આખી કોલમને લખાણ મુજબ ઓટો-ફિટ કરે છે.",
      hi: "जब सेल में ### एरर दिखे, तो यह कॉलम को टेक्स्ट की लंबाई अनुसार बिल्कुल सही चौड़ा कर देता है।"
    }
  },

  // ==========================================
  // 5. FORMULAS & CALCULATION SHORTCUTS
  // ==========================================
  {
    id: "sc-autosum",
    category: "scFormulas",
    level: "beginner",
    keysWin: ["Alt", "="],
    keysMac: ["Cmd", "Shift", "T"],
    action: {
      en: "Instant AutoSum (=SUM)",
      gu: "ઝડપી ઓટોસમ (AutoSum = સરવાળો)",
      hi: "त्वरित ऑटो-सम (=SUM फॉर्मूला)"
    },
    description: {
      en: "Automatically detects adjacent numbers and inserts the =SUM() formula instantly.",
      gu: "ઉપર કે ડાબી બાજુ રહેલા નંબરોને આપમેળે પારખીને ૧ સેકન્ડમાં =SUM() ફોર્મુલા લગાવી દે છે.",
      hi: "आस-पास की संख्याओं को पहचानकर तुरंत =SUM() फॉर्मूला लगा देता है।"
    }
  },
  {
    id: "sc-lock-ref",
    category: "scFormulas",
    level: "advanced",
    keysWin: ["F4"],
    keysMac: ["Cmd", "T"],
    action: {
      en: "Lock Cell Reference ($A$1 Absolute)",
      gu: "સેલ લોક કરવો ($A$1 એબ્સોલ્યુટ રેફરન્સ)",
      hi: "सेल को लॉक करना ($A$1 एब्सोल्यूट रेफरेंस)"
    },
    description: {
      en: "Toggles between relative (A1) and absolute ($A$1) references so formulas don't shift when copied.",
      gu: "ફોર્મુલા ડ્રેગ કરતી વખતે સેલ સરકી ન જાય તે માટે $ લગાવીને સેલને ફિક્સ (લોક) કરે છે.",
      hi: "फॉर्मूला कॉपी करते समय सेल का पता खिसके नहीं, इसलिए उसमें $ चिह्न लगाकर लॉक करता है।"
    }
  },
  {
    id: "sc-show-formulas",
    category: "scFormulas",
    level: "intermediate",
    keysWin: ["Ctrl", "`"],
    keysMac: ["Ctrl", "`"],
    action: {
      en: "Show / Hide All Formulas in Sheet",
      gu: "શીટની તમામ ફોર્મુલા એકસાથે જોવી કે છુપાવવી",
      hi: "शीट के सभी फॉर्मूले एक साथ देखना या छिपाना"
    },
    description: {
      en: "Toggles whole sheet between showing computed results and displaying raw formula code.",
      gu: "પરિણામોને બદલે કયા સેલમાં કઈ ફોર્મુલા લખેલી છે તે આખી શીટમાં એકસાથે દર્શાવે છે.",
      hi: "गणना के परिणामों के स्थान पर वास्तविक फॉर्मूले की कोडिंग स्क्रीन पर प्रदर्शित करता है।"
    }
  },
  {
    id: "sc-recalc",
    category: "scFormulas",
    level: "intermediate",
    keysWin: ["F9"],
    keysMac: ["Fn", "F9"],
    action: {
      en: "Recalculate All Workbooks",
      gu: "બધી ફોર્મુલા ફરીથી ગણવી (રી-કેલ્ક્યુલેટ)",
      hi: "सभी फॉर्मूलों की पुनः गणना करना"
    },
    description: {
      en: "Forces recalculation of every formula across all open workbooks.",
      gu: "જો ફોર્મુલાનું પરિણામ આપોઆપ ન બદલાતું હોય તો તમામ ગણતરી તાજી (Recalculate) કરે છે.",
      hi: "सभी खुली वर्कबुक्स में सभी फॉर्मूलों को तुरंत रिफ्रेश और री-कैलकुलेट करता है।"
    }
  },

  // ==========================================
  // 6. ROWS & COLUMNS MANAGEMENT
  // ==========================================
  {
    id: "sc-insert-rc",
    category: "scRows",
    level: "intermediate",
    keysWin: ["Ctrl", "Shift", "+"],
    keysMac: ["Cmd", "Shift", "+"],
    action: {
      en: "Insert New Row or Column",
      gu: "નવી રો કે નવી કોલમ ઉમેરવી",
      hi: "नई पंक्ति या नया कॉलम जोड़ना"
    },
    description: {
      en: "Inserts a new blank row above or a new blank column to the left.",
      gu: "જ્યાં જરૂર હોય ત્યાં નવી ખાલી રો કે નવી કોલમ તાત્કાલિક ઉમેરી દે છે.",
      hi: "चयनित स्थान पर नई खाली पंक्ति या कॉलम तुरंत जोड़ता है।"
    }
  },
  {
    id: "sc-delete-rc",
    category: "scRows",
    level: "intermediate",
    keysWin: ["Ctrl", "-"],
    keysMac: ["Cmd", "-"],
    action: {
      en: "Delete Selected Row or Column",
      gu: "રો કે કોલમ ડિલીટ કરવી",
      hi: "पंक्ति या कॉलम को हटाना (डिलीट करना)"
    },
    description: {
      en: "Instantly deletes the highlighted row, column, or cell block.",
      gu: "સિલેક્ટ કરેલી વધારાની રો કે કોલમને કાયમ માટે હટાવી દે છે.",
      hi: "चुनी गई पंक्ति या कॉलम को तुरंत हटा देता है।"
    }
  },
  {
    id: "sc-hide-row",
    category: "scRows",
    level: "intermediate",
    keysWin: ["Ctrl", "9"],
    keysMac: ["Cmd", "9"],
    action: {
      en: "Hide Current Row",
      gu: "રો છુપાવવી (Hide Row)",
      hi: "पंक्ति को छिपाना (Hide Row)"
    },
    description: {
      en: "Hides the active row from view without deleting any data.",
      gu: "ડેટા ડિલીટ કર્યા વગર તે આડી લાઈનને સ્ક્રીન પરથી અદ્રશ્ય (છુપાવી) કરે છે.",
      hi: "डेटा को मिटाए बिना उस पंक्ति को अस्थायी रूप से छिपा देता है।"
    }
  },
  {
    id: "sc-hide-col",
    category: "scRows",
    level: "intermediate",
    keysWin: ["Ctrl", "0"],
    keysMac: ["Cmd", "0"],
    action: {
      en: "Hide Current Column",
      gu: "કોલમ છુપાવવી (Hide Column)",
      hi: "कॉलम को छिपाना (Hide Column)"
    },
    description: {
      en: "Hides the active column from view.",
      gu: "પસંદ કરેલી ઊભી કોલમને સ્ક્રીન પરથી અદ્રશ્ય કરે છે.",
      hi: "कॉलम को स्क्रीन से छिपा देता है।"
    }
  },

  // ==========================================
  // 7. FILTERS, TABLES & CHARTS
  // ==========================================
  {
    id: "sc-filter-toggle",
    category: "scFilter",
    level: "beginner",
    keysWin: ["Ctrl", "Shift", "L"],
    keysMac: ["Cmd", "Shift", "F"],
    action: {
      en: "Toggle AutoFilter Dropdowns",
      gu: "ફિલ્ટર ચાલુ / બંધ કરવું (AutoFilter)",
      hi: "फ़िल्टर ड्रॉपडाउन ऑन/ऑफ करना"
    },
    description: {
      en: "Adds or removes the dropdown filter arrows on table header rows in 1 second.",
      gu: "ટેબલના હેડરમાં ફિલ્ટર કરવા માટેના તીર (Dropdown Arrows) ૧ સેકન્ડમાં મૂકે છે કે હટાવે છે.",
      hi: "टेबल हेडर पर फ़िल्टर ड्रॉपडाउन तीर तुरंत लगाने या हटाने का सबसे लोकप्रिय शॉर्टकट।"
    }
  },
  {
    id: "sc-create-table",
    category: "scFilter",
    level: "intermediate",
    keysWin: ["Ctrl", "T"],
    keysMac: ["Cmd", "T"],
    action: {
      en: "Convert Range to Official Excel Table",
      gu: "ડેટાને સુંદર એક્સેલ ટેબલમાં ફેરવવો",
      hi: "डेटा को आधिकारिक एक्सेल टेबल में बदलना"
    },
    description: {
      en: "Converts plain cells into a formatted Excel Table with zebra stripes and auto-expansion.",
      gu: "સાદા ડેટાને સુંદર ટેબલમાં ફેરવે છે જેથી નવી રો ઉમેરતા જ ફોર્મુલા આપોઆપ લાગુ પડે.",
      hi: "साधारण डेटा को सुंदर टेबल में बदलता है जिससे नए डेटा पर फॉर्मूले अपने आप लागू होते हैं।"
    }
  },
  {
    id: "sc-instant-chart",
    category: "scFilter",
    level: "intermediate",
    keysWin: ["Alt", "F1"],
    keysMac: ["Fn", "Alt", "F1"],
    action: {
      en: "Create Instant Embedded Column Chart",
      gu: "તરત જ લાઈવ ચાર્ટ (ગ્રાફ) બનાવવો",
      hi: "तुरंत लाइव चार्ट (ग्राफ़) तैयार करना"
    },
    description: {
      en: "Generates an instant visual bar/column chart for selected numbers in 1 click.",
      gu: "સિલેક્ટ કરેલા નંબરોનો ૧ સેકન્ડમાં સુંદર ગ્રાફ (ચાર્ટ) બનાવી દે છે.",
      hi: "चुने गए आंकड़ों का एक क्लिक में सुंदर बार चार्ट बना देता है।"
    }
  }
];
