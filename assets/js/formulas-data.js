/**
 * Excel Master - Complete Formulas & Functions Database
 * Full explanations, real-world scenarios, interactive tables, step-by-step guides,
 * common error solutions, and pro tips in Gujarati, Hindi, and English.
 */

const EXCEL_FORMULAS = [
  // ==========================================
  // 1. LOOKUP & REFERENCE FUNCTIONS
  // ==========================================
  {
    id: "xlookup",
    name: "XLOOKUP",
    category: "lookup",
    difficulty: "intermediate",
    syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
    summary: {
      en: "Modern and most powerful replacement for VLOOKUP, HLOOKUP, and INDEX/MATCH. Works in any direction (left or right) and avoids errors cleanly.",
      gu: "VLOOKUP અને HLOOKUP નું આધુનિક અને સૌથી પાવરફુલ ફોર્મુલા. આ ડાબે કે જમણે કોઈપણ દિશામાં ડેટા શોધી શકે છે અને એરર વગર સુરક્ષિત પરિણામ આપે છે.",
      hi: "VLOOKUP और HLOOKUP का आधुनिक और सबसे शक्तिशाली विकल्प। यह बाएं या दाएं किसी भी दिशा में डेटा खोज सकता है और बिना किसी एरर के सुरक्षित परिणाम देता है।"
    },
    scenario: {
      en: "Finding an employee's salary and department instantly using their Employee ID (even if the return column is to the left of the ID column).",
      gu: "કર્મચારીના એમ્પ્લોઈ ID (Emp ID) પરથી તેનો પગાર અને વિભાગ તરત જ શોધવો (પછી ભલે પગારની કોલમ ID ની ડાબી બાજુ કેમ ન હોય).",
      hi: "कर्मचारी की आईडी (Emp ID) के आधार पर उसका वेतन और विभाग तुरंत खोजना (भले ही वेतन वाला कॉलम आईडी के बाईं ओर ही क्यों न हो)।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Emp ID", "Employee Name", "Department", "Salary (₹)"],
        gu: ["એમ્પ્લોઈ ID", "કર્મચારીનું નામ", "વિભાગ (Dept)", "પગાર (Salary ₹)"],
        hi: ["कर्मचारी ID", "कर्मचारी का नाम", "विभाग (Dept)", "वेतन (Salary ₹)"]
      },
      rows: [
        ["EMP101", "Rajesh Patel", "Sales", "45,000"],
        ["EMP102", "Priya Sharma", "Finance", "62,000"],
        ["EMP103", "Amit Verma", "IT Support", "52,000"],
        ["EMP104", "Sneha Joshi", "Marketing", "48,000"],
        ["EMP105", "Vikas Mehta", "HR", "55,000"]
      ],
      targetCell: "F2",
      formulaApplied: '=XLOOKUP("EMP103", A2:A6, D2:D6, "Not Found")',
      evaluatedResult: "52,000",
      highlightCells: ["A4", "D4"]
    },
    steps: {
      en: [
        "1. Write =XLOOKUP(",
        "2. First parameter: Give what you are searching (e.g. \"EMP103\" or cell reference).",
        "3. Second parameter: Select the column where the ID exists (A2:A6).",
        "4. Third parameter: Select the column you want as the output (D2:D6).",
        "5. Fourth parameter (optional): Enter custom text if not found (e.g. \"Not Found\").",
        "6. Press Enter! It immediately returns ₹52,000 without needing column index numbers."
      ],
      gu: [
        "૧. સેલમાં =XLOOKUP( લખો.",
        "૨. પહેલી આર્ગ્યુમેન્ટ: તમે જે શોધવા માંગો છો તે લખો (જેમ કે \"EMP103\" અથવા સેલ સિલેક્ટ કરો).",
        "૩. બીજી આર્ગ્યુમેન્ટ: આઈડી જે કોલમમાં છે તે રેન્જ સિલેક્ટ કરો (A2:A6).",
        "૪. ત્રીજી આર્ગ્યુમેન્ટ: તમારે જે જવાબ જોઈએ છે તે કોલમ સિલેક્ટ કરો (D2:D6 - પગાર).",
        "૫. ચોથી આર્ગ્યુમેન્ટ: જો આઈડી ન મળે તો શું લખવું (જેમ કે \"Not Found\").",
        "૬. એન્ટર દબાવો! કોઈપણ કોલમ નંબર ગણ્યા વગર સીધો જ 52,000 જવાબ મળશે."
      ],
      hi: [
        "१. सेल में =XLOOKUP( लिखें।",
        "२. पहला पैरामीटर: जो मान खोजना है वह लिखें (जैसे \"EMP103\" या सेल चुनें)।",
        "३. दूसरा पैरामीटर: वह कॉलम रेंज चुनें जहाँ आईडी मौजूद है (A2:A6)।",
        "४. तीसरा पैरामीटर: वह कॉलम रेंज चुनें जिसका परिणाम चाहिए (D2:D6 - वेतन)।",
        "५. चौथा पैरामीटर (वैकल्पिक): यदि आईडी न मिले तो क्या संदेश दिखे (जैसे \"Not Found\")।",
        "६. Enter दबाएं! बिना कॉलम नंबर गिने तुरंत सही परिणाम मिल जाएगा।"
      ]
    },
    commonErrors: [
      {
        error: "#N/A",
        reason: {
          en: "The searched value does not exist in the lookup array.",
          gu: "શોધવામાં આવેલ વેલ્યુ તે રેન્જમાં ઉપલબ્ધ નથી.",
          hi: "खोजी गई वैल्यू उस रेंज में मौजूद नहीं है।"
        },
        fix: {
          en: "Use the fourth parameter of XLOOKUP: =XLOOKUP(..., ..., ..., \"Record Not Found\") to show a clean message.",
          gu: "XLOOKUP ના ચોથા પેરામીટરમાં \"Not Found\" ઉમેરી દો, જેથી એરરને બદલે સારો મેસેજ દેખાય.",
          hi: "XLOOKUP के चौथे पैरामीटर में \"डेटा नहीं मिला\" लिख दें जिससे साफ़ संदेश दिखे।"
        }
      },
      {
        error: "#VALUE!",
        reason: {
          en: "Lookup array and Return array do not have the same number of rows/height.",
          gu: "Lookup Array અને Return Array ની રો (લંબાઈ) સરખી નથી (દા.ત. A2:A6 સાથે D2:D10).",
          hi: "Lookup Array और Return Array की पंक्तियाँ (लंबाई) समान नहीं हैं।"
        },
        fix: {
          en: "Ensure both ranges have matching start and end rows (e.g. A2:A6 and D2:D6).",
          gu: "બંને રેન્જની રો સંખ્યા સરખી રાખો (જેમ કે A2:A6 સાથે D2:D6).",
          hi: "दोनों रेंज की शुरुआत और समाप्ति पंक्ति एक समान रखें।"
        }
      }
    ],
    proTip: {
      en: "XLOOKUP performs exact match by default (unlike VLOOKUP which defaults to approximate). It can also return multiple columns at once (e.g. =XLOOKUP(\"EMP103\", A2:A6, B2:D6)).",
      gu: "XLOOKUP બાય ડિફોલ્ટ એક્ઝેક્ટ મેચ કરે છે (જ્યારે VLOOKUP માં છેલ્લે 0 લખવો પડતો હતો). આ ઉપરાંત XLOOKUP એકસાથે એકથી વધુ કોલમ પણ પરિણામ તરીકે આપી શકે છે!",
      hi: "XLOOKUP डिफ़ॉल्ट रूप से सटीक मिलान (Exact Match) करता है। साथ ही यह एक साथ कई कॉलम (जैसे नाम, विभाग और वेतन तीनों) एक ही फॉर्मूले से लौटा सकता है!"
    }
  },

  {
    id: "vlookup",
    name: "VLOOKUP",
    category: "lookup",
    difficulty: "beginner",
    syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    summary: {
      en: "Vertical Lookup - Searches for a value in the leftmost column of a table and returns a value in the same row from a specified column.",
      gu: "વર્ટિકલ લુકઅપ - ટેબલની સૌથી પહેલી (ડાબી) કોલમમાં મૂલ્ય શોધીને તે જ લાઈનમાં આગળની કોઈપણ કોલમમાંથી કિંમત મેળવે છે.",
      hi: "वर्टिकल लुकअप - टेबल के सबसे बाएं कॉलम में मान ढूंढकर उसी पंक्ति के किसी अन्य कॉलम से मान प्राप्त करता है।"
    },
    scenario: {
      en: "Looking up product price in an inventory table by Product Code.",
      gu: "પ્રોડક્ટ કોડ (Product Code) દાખલ કરીને ગોડાઉન કે સ્ટોક લિસ્ટમાંથી પ્રોડક્ટનો ભાવ (Price) મેળવવો.",
      hi: "उत्पाद कोड (Product Code) दर्ज करके स्टॉक लिस्ट से उस उत्पाद की कीमत (Price) प्राप्त करना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Product Code", "Product Name", "Category", "Unit Price (₹)"],
        gu: ["પ્રોડક્ટ કોડ", "પ્રોડક્ટનું નામ", "કેટેગરી", "કિંમત (₹)"],
        hi: ["प्रोडक्ट कोड", "प्रोडक्ट का नाम", "श्रेणी", "कीमत (₹)"]
      },
      rows: [
        ["PRD-01", "Wireless Mouse", "Electronics", "450"],
        ["PRD-02", "Mechanical Keyboard", "Electronics", "1,850"],
        ["PRD-03", "USB-C Hub", "Accessories", "1,200"],
        ["PRD-04", "Laptop Stand", "Accessories", "750"],
        ["PRD-05", "Noise Cancelling Headset", "Audio", "3,400"]
      ],
      targetCell: "F2",
      formulaApplied: '=VLOOKUP("PRD-03", A2:D6, 4, FALSE)',
      evaluatedResult: "1,200",
      highlightCells: ["A4", "D4"]
    },
    steps: {
      en: [
        "1. Type =VLOOKUP(",
        "2. lookup_value: What to find (e.g. \"PRD-03\").",
        "3. table_array: Full data range starting with the lookup column (A2:D6).",
        "4. col_index_num: The column number from which to fetch data (Unit Price is column 4).",
        "5. range_lookup: Put FALSE or 0 for exact match.",
        "6. Press Enter to get ₹1,200."
      ],
      gu: [
        "૧. =VLOOKUP( લખો.",
        "૨. lookup_value: જે શોધવું હોય તે (દા.ત. \"PRD-03\").",
        "૩. table_array: આખું ટેબલ સિલેક્ટ કરો જ્યાં પહેલી કોલમ પ્રોડક્ટ કોડ હોય (A2:D6).",
        "૪. col_index_num: તમારે જે કોલમનો જવાબ જોઈએ તેનો નંબર લખો (અહીં કિંમત 4થી કોલમમાં છે તેથી 4).",
        "૫. range_lookup: એક્ઝેક્ટ મેચ માટે 0 અથવા FALSE લખો.",
        "૬. એન્ટર કરો અને જવાબ 1,200 મળશે."
      ],
      hi: [
        "१. =VLOOKUP( लिखें।",
        "२. lookup_value: जो मान खोजना है (जैसे \"PRD-03\")।",
        "३. table_array: पूरी टेबल रेंज चुनें जिसमें पहला कॉलम कोड हो (A2:D6)।",
        "४. col_index_num: जिस कॉलम का मान चाहिए उसका नंबर लिखें (कीमत चौथे कॉलम में है इसलिए 4)।",
        "५. range_lookup: सटीक मिलान के लिए 0 या FALSE लिखें।",
        "६. Enter दबाएं और परिणाम 1,200 प्राप्त करें।"
      ]
    },
    commonErrors: [
      {
        error: "#N/A",
        reason: {
          en: "Value not found or lookup column is not the 1st column of the range.",
          gu: "શોધવામાં આવેલ કોડ મળ્યો નથી અથવા શોધવાની કોલમ ટેબલની ડાબી બાજુએ પ્રથમ નથી.",
          hi: "मान नहीं मिला या लुकअप कॉलम टेबल में सबसे बाईं ओर नहीं है।"
        },
        fix: {
          en: "Wrap in IFERROR: =IFERROR(VLOOKUP(...), \"Not Available\").",
          gu: "આગળ IFERROR લગાવો: =IFERROR(VLOOKUP(...), \"મળ્યું નથી\").",
          hi: "IFERROR का प्रयोग करें: =IFERROR(VLOOKUP(...), \"उपलब्ध नहीं\")।"
        }
      },
      {
        error: "#REF!",
        reason: {
          en: "col_index_num is greater than the total number of columns selected in table_array.",
          gu: "તમે સિલેક્ટ કરેલી કોલમ કરતા મોટો કોલમ નંબર લખ્યો છે (દા.ત. ટેબલમાં 4 કોલમ છે ને તમે 5 લખ્યું).",
          hi: "चुने गए टेबल में कुल कॉलम से बड़ा कॉलम नंबर दर्ज कर दिया गया है।"
        },
        fix: {
          en: "Check total columns selected and use the correct column index.",
          gu: "ટેબલની સાચી કોલમ સંખ્યા તપાસીને સાચો નંબર લખો.",
          hi: "टेबल में कुल कॉलम गिनकर सही इंडेक्स नंबर डालें।"
        }
      }
    ],
    proTip: {
      en: "Always use FALSE or 0 at the end for exact match; otherwise, VLOOKUP might return an incorrect approximate value if data is unsorted!",
      gu: "હંમેશા છેલ્લે 0 અથવા FALSE જ લખો, જેથી ડેટા સોર્ટ કરેલો ન હોય તો પણ સાચો જવાબ મળે.",
      hi: "हमेशा अंत में 0 या FALSE ही लिखें ताकि बिना क्रमबद्ध डेटा में भी सटीक परिणाम मिले।"
    }
  },

  {
    id: "index-match",
    name: "INDEX + MATCH",
    category: "lookup",
    difficulty: "advanced",
    syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
    summary: {
      en: "The dynamic duo of Excel. Performs left lookups, 2-way matrix lookups, and doesn't break when columns are inserted or deleted.",
      gu: "એક્સેલની સૌથી લોકપ્રિય અને લવચીક જોડી. ડાબી બાજુ લુકઅપ કરી શકે છે અને નવી કોલમ ઉમેરવાથી ફોર્મુલા તૂટતી નથી.",
      hi: "एक्सेल का सबसे लचीला और भरोसेमंद संयोजन। यह बाईं ओर भी लुकअप कर सकता है और नए कॉलम जोड़ने पर टूटता नहीं है।"
    },
    scenario: {
      en: "Finding an employee name (Column A) using their phone number or email (Column C) — which VLOOKUP cannot do!",
      gu: "કર્મચારીના મોબાઈલ નંબર કે ઈમેલ (કોલમ C) પરથી તેનું નામ (કોલમ A) શોધવું - જે VLOOKUP થી શક્ય નથી કારણ કે નામ ડાબી બાજુ છે!",
      hi: "कर्मचारी के फोन नंबर (कॉलम C) से उसका नाम (कॉलम A) खोजना - जो VLOOKUP से संभव नहीं क्योंकि नाम बाईं ओर है!"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Full Name", "City", "Mobile Number", "Designation"],
        gu: ["પૂરું નામ", "શહેર", "મોબાઈલ નંબર", "હોદ્દો (Post)"],
        hi: ["पूरा नाम", "शहर", "मोबाइल नंबर", "पद (Designation)"]
      },
      rows: [
        ["Haresh Patel", "Ahmedabad", "9898011223", "Branch Manager"],
        ["Meena Desai", "Surat", "9876543210", "Senior Accountant"],
        ["Kavita Shah", "Vadodara", "9426055443", "HR Executive"],
        ["Chirag Modi", "Rajkot", "9909012345", "IT Admin"],
        ["Bhavik Soni", "Bhavnagar", "9825067890", "Sales Officer"]
      ],
      targetCell: "F2",
      formulaApplied: '=INDEX(A2:A6, MATCH("9426055443", C2:C6, 0))',
      evaluatedResult: "Kavita Shah",
      highlightCells: ["A4", "C4"]
    },
    steps: {
      en: [
        "1. Write =INDEX(",
        "2. First give the Return Range (where your answer lies, A2:A6).",
        "3. Type comma, then MATCH(",
        "4. In MATCH, give lookup_value (\"9426055443\"), then lookup_range (C2:C6), then 0 for exact match.",
        "5. Close both brackets: )) and hit Enter!",
        "6. MATCH finds row index 3, and INDEX fetches \"Kavita Shah\" from row 3 of column A."
      ],
      gu: [
        "૧. =INDEX( લખો.",
        "૨. પહેલા તમારે જે જવાબ જોઈએ છે તે લિસ્ટ સિલેક્ટ કરો (નામ A2:A6).",
        "૩. અલ્પવિરામ કરી MATCH( લખો.",
        "૪. MATCH માં જે નંબર શોધવો હોય તે લખો (\"9426055443\"), નંબરની કોલમ સિલેક્ટ કરો (C2:C6), અને છેલ્લે 0 લખો.",
        "૫. બંને કૌંસ બંધ કરો: )) અને એન્ટર કરો.",
        "૬. MATCH રો નંબર 3 આપશે, અને INDEX રો 3 માંથી સીધું નામ \"Kavita Shah\" મેળવી લેશે."
      ],
      hi: [
        "१. =INDEX( लिखें।",
        "२. सबसे पहले परिणाम वाली रेंज चुनें (नाम का कॉलम A2:A6)।",
        "३. कॉमा लगाकर MATCH( लिखें।",
        "४. MATCH में जो मोबाइल नंबर खोजना है (\"9426055443\"), मोबाइल की रेंज (C2:C6) और 0 लिखें।",
        "५. दोनों ब्रैकेट बंद करें: )) और Enter दबाएं।",
        "६. तुरंत सटीक नाम \"Kavita Shah\" प्राप्त हो जाएगा।"
      ]
    },
    commonErrors: [
      {
        error: "#N/A",
        reason: {
          en: "MATCH did not find the specified lookup value.",
          gu: "MATCH ફંકશનને આપેલ મોબાઈલ નંબર રેન્જમાં મળ્યો નથી.",
          hi: "MATCH फ़ंक्शन को दिया गया मोबाइल नंबर रेंज में नहीं मिला।"
        },
        fix: {
          en: "Check formatting (e.g. text vs number) or use TRIM.",
          gu: "મોબાઈલ નંબર ટેક્સ્ટ છે કે નંબર તે ચેક કરો અથવા સ્પેસ હટાવો.",
          hi: "मोबाइल नंबर टेक्स्ट है या संख्या, जांचें और स्पेस हटाएं।"
        }
      }
    ],
    proTip: {
      en: "INDEX/MATCH uses significantly less memory than VLOOKUP on large datasets (100,000+ rows) because it only references two columns instead of the entire table grid.",
      gu: "ખૂબ મોટા ડેટા (લાખો રો) માં INDEX/MATCH એ VLOOKUP કરતા 3 ગણું ઝડપી કામ કરે છે કારણ કે તે આખું ટેબલ લોડ કરવાને બદલે માત્ર બે જ કોલમ પ્રોસેસ કરે છે.",
      hi: "बड़े डेटाबेस में INDEX/MATCH, VLOOKUP से काफी तेज चलता है क्योंकि यह पूरी टेबल लोड करने के बजाय केवल दो कॉलम को प्रोसेस करता है।"
    }
  },

  // ==========================================
  // 2. MATH & STATISTICAL FUNCTIONS
  // ==========================================
  {
    id: "sum",
    name: "SUM",
    category: "math",
    difficulty: "beginner",
    syntax: "=SUM(number1, [number2], ...)",
    summary: {
      en: "Adds all numbers in a range of cells quickly and accurately.",
      gu: "પસંદ કરેલ સેલ રેન્જના તમામ નંબરોનો કુલ સરવાળો (Total) કરે છે.",
      hi: "चुने गए सेल रेंज की सभी संख्याओं का कुल जोड़ (Total) निकालता है।"
    },
    scenario: {
      en: "Calculating total sales revenue or total monthly expenses.",
      gu: "દુકાન કે ઓફિસના આખા મહિનાના કુલ વેચાણ કે ખર્ચનો સરવાળો કરવો.",
      hi: "दुकान या कार्यालय के पूरे महीने की कुल बिक्री या खर्च का कुल जोड़ करना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Month", "Category", "Amount (₹)"],
        gu: ["મહિનો", "ખર્ચ વિગત", "રકમ (₹)"],
        hi: ["महीना", "खर्च विवरण", "राशि (₹)"]
      },
      rows: [
        ["January", "Office Rent", "25,000"],
        ["January", "Electricity Bill", "6,500"],
        ["January", "Internet & Telecom", "2,400"],
        ["January", "Stationery & Supplies", "4,100"],
        ["January", "Staff Refreshments", "3,800"]
      ],
      targetCell: "C7",
      formulaApplied: "=SUM(C2:C6)",
      evaluatedResult: "41,800",
      highlightCells: ["C2", "C3", "C4", "C5", "C6"]
    },
    steps: {
      en: [
        "1. Click the cell below the numbers (C7).",
        "2. Press shortcut Alt + = or type =SUM(C2:C6)",
        "3. Press Enter to get total amount 41,800."
      ],
      gu: [
        "૧. નંબરોની નીચેના સેલ (C7) માં ક્લિક કરો.",
        "૨. શોર્ટકટ કી Alt + = દબાવો અથવા =SUM(C2:C6) લખો.",
        "૩. એન્ટર દબાવો, કુલ રકમ 41,800 તરત જ આવી જશે."
      ],
      hi: [
        "१. संख्याओं के नीचे वाले सेल (C7) पर क्लिक करें।",
        "२. शॉर्टकट Alt + = दबाएं या =SUM(C2:C6) लिखें।",
        "३. Enter दबाएं, कुल जोड़ 41,800 तुरंत आ जाएगा।"
      ]
    },
    commonErrors: [
      {
        error: "Incorrect Sum (Zero result)",
        reason: {
          en: "Numbers are stored as text (often imported from software).",
          gu: "નંબરો ટેક્સ્ટ ફોર્મેટમાં સંગ્રહાયેલા છે (જેમ કે સોફ્ટવેરમાંથી એક્સપોર્ટ કરેલ ડેટા).",
          hi: "संख्याएं टेक्स्ट फ़ॉर्मेट में हैं।"
        },
        fix: {
          en: "Convert text to number using VALUE() or Multiply by 1.",
          gu: "તેને નંબર ફોર્મેટમાં કન્વર્ટ કરો અથવા VALUE(C2) વાપરો.",
          hi: "डेटा को नंबर फ़ॉर्मेट में बदलें या VALUE() फ़ंक्शन का उपयोग करें।"
        }
      }
    ],
    proTip: {
      en: "Press Alt + = (Windows) or Cmd + Shift + T (Mac) anywhere next to or below numbers to insert AutoSum instantly.",
      gu: "નંબરોની નીચે માત્ર Alt અને = (બરાબરની નિશાની) દબાવવાથી ઓટોમેટિક SUM ફોર્મુલા લાગી જાય છે!",
      hi: "संख्याओं के नीचे Alt + = दबाने से तुरंत AutoSum फॉर्मूला लग जाता है!"
    }
  },

  {
    id: "sumif",
    name: "SUMIF",
    category: "math",
    difficulty: "beginner",
    syntax: "=SUMIF(range, criteria, [sum_range])",
    summary: {
      en: "Adds numbers in a range that meet one specific condition.",
      gu: "કોઈ ચોક્કસ એક શરતના આધારે જ સરવાળો કરે છે (દા.ત. માત્ર 'અમદાવાદ' શહેરનું વેચાણ).",
      hi: "किसी एक विशेष शर्त के आधार पर ही संख्याओं का जोड़ करता है (जैसे केवल 'दिल्ली' शहर की बिक्री)।"
    },
    scenario: {
      en: "Calculating total sales made exclusively by the 'Electronics' department.",
      gu: "સ્ટોરમાં માત્ર 'Electronics' વિભાગ દ્વારા થયેલ કુલ વેચાણનો સરવાળો કરવો.",
      hi: "स्टोर में केवल 'Electronics' विभाग द्वारा की गई कुल बिक्री का जोड़ निकालना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Salesperson", "Category", "Sale Amount (₹)"],
        gu: ["સેલ્સમેન", "કેટેગરી (વિભાગ)", "વેચાણ રકમ (₹)"],
        hi: ["विक्रेता", "श्रेणी (विभाग)", "बिक्री राशि (₹)"]
      },
      rows: [
        ["Ramesh", "Electronics", "35,000"],
        ["Suresh", "Clothing", "22,000"],
        ["Mahesh", "Electronics", "48,000"],
        ["Dinesh", "Groceries", "15,000"],
        ["Naresh", "Electronics", "29,000"]
      ],
      targetCell: "E2",
      formulaApplied: '=SUMIF(B2:B6, "Electronics", C2:C6)',
      evaluatedResult: "1,12,000",
      highlightCells: ["B2", "B4", "B6", "C2", "C4", "C6"]
    },
    steps: {
      en: [
        "1. Type =SUMIF(",
        "2. range: Select category column where condition applies (B2:B6).",
        "3. criteria: Enter condition in quotes (\"Electronics\").",
        "4. sum_range: Select column with numbers to add (C2:C6).",
        "5. Press Enter. It adds only 35000 + 48000 + 29000 = 1,12,000."
      ],
      gu: [
        "૧. =SUMIF( લખો.",
        "૨. range: જ્યાં શરત ચકાસવાની છે તે કોલમ પસંદ કરો (B2:B6).",
        "૩. criteria: ડબલ કોટ્સમાં શરત લખો (\"Electronics\").",
        "૪. sum_range: જે રકમનો સરવાળો કરવો છે તે કોલમ પસંદ કરો (C2:C6).",
        "૫. એન્ટર દબાવો. માત્ર ઇલેક્ટ્રોનિક્સનો સરવાળો 1,12,000 મળશે."
      ],
      hi: [
        "१. =SUMIF( लिखें।",
        "२. range: शर्त वाला कॉलम चुनें (B2:B6)।",
        "३. criteria: उद्धरण चिह्नों में शर्त लिखें (\"Electronics\")।",
        "४. sum_range: जोड़ने वाली संख्याओं का कॉलम चुनें (C2:C6)।",
        "५. Enter दबाएं। इलेक्ट्रॉनिक्स का कुल योग 1,12,000 प्राप्त होगा।"
      ]
    },
    commonErrors: [
      {
        error: "Criteria format mismatch",
        reason: {
          en: "Typing criteria with symbols without quotes, e.g. >500 instead of \">500\".",
          gu: "શરતમાં કોટ્સ વગર >500 લખવું.",
          hi: "शर्त में उद्धरण चिह्नों के बिना >500 लिखना।"
        },
        fix: {
          en: "Always enclose operators in quotes: \">500\" or \">=\" & D1.",
          gu: "ઓપરેટરને હંમેશા ડબલ કોટ્સમાં લખો: \">500\".",
          hi: "ऑपरेटर को हमेशा कोट्स में रखें: \">500\"।"
        }
      }
    ],
    proTip: {
      en: "You can use wildcards like \"*Phone*\" to sum all products containing the word Phone!",
      gu: "તમે વાઇલ્ડકાર્ડ વાપરી શકો છો, જેમ કે \"*Phone*\" લખવાથી જે પ્રોડક્ટમાં Phone શબ્દ હશે તે તમામનો સરવાળો થશે!",
      hi: "आप वाइल्डकार्ड का उपयोग कर सकते हैं, जैसे \"*Phone*\" से उन सभी का जोड़ होगा जिनमें Phone शब्द आता है!"
    }
  },

  {
    id: "sumifs",
    name: "SUMIFS",
    category: "math",
    difficulty: "intermediate",
    syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
    summary: {
      en: "Adds values based on multiple conditions across different columns simultaneously.",
      gu: "એક કરતા વધારે શરતો (Multiple Conditions) પૂરી થતી હોય ત્યારે જ સરવાળો કરે છે.",
      hi: "एक से अधिक शर्तों के आधार पर विभिन्न कॉलमों से संख्याओं का जोड़ करता है।"
    },
    scenario: {
      en: "Finding total sales in 'North' region made specifically for 'Laptops'.",
      gu: "'North' વિસ્તારમાં માત્ર 'Laptops' નું જ કુલ કેટલું વેચાણ થયું તે શોધવું (બે શરતો: North + Laptop).",
      hi: "'North' क्षेत्र में केवल 'Laptop' की कुल कितनी बिक्री हुई यह ज्ञात करना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Region", "Product", "Sales Rep", "Sales (₹)"],
        gu: ["વિસ્તાર (Region)", "પ્રોડક્ટ", "સેલ્સમેન", "વેચાણ (₹)"],
        hi: ["क्षेत्र (Region)", "प्रोडक्ट", "विक्रेता", "बिक्री (₹)"]
      },
      rows: [
        ["North", "Laptop", "Anand", "95,000"],
        ["South", "Laptop", "Biren", "82,000"],
        ["North", "Printer", "Chetan", "18,000"],
        ["North", "Laptop", "Deepak", "1,15,000"],
        ["West", "Laptop", "Elesh", "74,000"]
      ],
      targetCell: "F2",
      formulaApplied: '=SUMIFS(D2:D6, A2:A6, "North", B2:B6, "Laptop")',
      evaluatedResult: "2,10,000",
      highlightCells: ["A2", "A5", "B2", "B5", "D2", "D5"]
    },
    steps: {
      en: [
        "1. Notice SUMIFS has sum_range FIRST! Type =SUMIFS(D2:D6, ...",
        "2. Add first condition range: A2:A6, \"North\"",
        "3. Add second condition range: B2:B6, \"Laptop\"",
        "4. Close bracket and press Enter: 95,000 + 1,15,000 = 2,10,000."
      ],
      gu: [
        "૧. ખાસ યાદ રાખો: SUMIFS માં જેનો સરવાળો કરવાનો છે તે કોલમ પહેલા આવે છે! =SUMIFS(D2:D6, ...",
        "૨. પહેલી શરત: વિસ્તાર કોલમ A2:A6, \"North\"",
        "૩. બીજી શરત: પ્રોડક્ટ કોલમ B2:B6, \"Laptop\"",
        "૪. કૌંસ બંધ કરી એન્ટર કરો: 95,000 + 1,15,000 = 2,10,000."
      ],
      hi: [
        "१. ध्यान दें: SUMIFS में जोड़ने वाला कॉलम (sum_range) सबसे पहले लिखा जाता है! =SUMIFS(D2:D6, ...",
        "२. पहली शर्त: क्षेत्र वाला कॉलम A2:A6, \"North\"",
        "३. दूसरी शर्त: प्रोडक्ट वाला कॉलम B2:B6, \"Laptop\"",
        "४. Enter दबाएं: 95,000 + 1,15,000 = 2,10,000।"
      ]
    },
    commonErrors: [
      {
        error: "#VALUE!",
        reason: {
          en: "Criteria ranges have different shapes/lengths than sum_range.",
          gu: "શરતની રેન્જ અને સરવાળાની રેન્જની રો સાઇઝ સરખી નથી (દા.ત. D2:D6 સાથે A2:A10).",
          hi: "क्राइटेरिया रेंज और सम रेंज का आकार समान नहीं है।"
        },
        fix: {
          en: "Make sure all ranges start and end on the exact same row (e.g. Row 2 to 6).",
          gu: "બધી રેન્જ એક જ રો થી શરૂ અને પૂરી થવી જોઈએ.",
          hi: "सभी रेंज की प्रारंभिक और अंतिम पंक्ति एक जैसी रखें।"
        }
      }
    ],
    proTip: {
      en: "SUMIFS can take up to 127 pairs of range and criteria! You can filter by Date ranges too: \">=01/01/2026\", \"<=31/01/2026\".",
      gu: "SUMIFS માં તમે તારીખોની રેન્જ પણ શરત તરીકે મૂકી શકો છો, જેમ કે જાન્યુઆરી મહિનાનું વેચાણ: \">=01/01/2026\", \"<=31/01/2026\".",
      hi: "SUMIFS में आप दिनांक की शर्तें भी लगा सकते हैं, जैसे महीने की शुरुआत और समाप्ति तिथि।"
    }
  },

  {
    id: "subtotal",
    name: "SUBTOTAL",
    category: "math",
    difficulty: "intermediate",
    syntax: "=SUBTOTAL(function_num, ref1, [ref2], ...)",
    summary: {
      en: "Calculates total or average for filtered rows only, automatically skipping hidden or filtered-out rows.",
      gu: "ફિલ્ટર કરેલા ડેટા માટે ખાસ ફોર્મુલા - જ્યારે તમે ડેટા ફિલ્ટર કરો ત્યારે છુપાયેલી (Hidden) રો ને બાદ કરી માત્ર દેખાતી રો નો જ સરવાળો આપે છે.",
      hi: "फ़िल्टर किए गए डेटा के लिए विशेष फ़ंक्शन - यह छिपी हुई या फ़िल्टर की गई पंक्तियों को छोड़कर केवल दिखने वाली पंक्तियों का योग देता है।"
    },
    scenario: {
      en: "Showing dynamic total on an invoice or sales list that recalculates when dropdown filters are applied.",
      gu: "જ્યારે તમે એક્સેલમાં ફિલ્ટર (Filter) લગાવો ત્યારે નીચે આપમેળે માત્ર ફિલ્ટર થયેલ આઈટમોનો જ સાચો સરવાળો દેખાય તે માટે.",
      hi: "जब एक्सेल में फ़िल्टर लगाया जाए तो केवल स्क्रीन पर दिखने वाले डेटा का ही स्वचालित योग प्रदर्शित करना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Invoice No", "Item Description", "Amount (₹)"],
        gu: ["બિલ નંબર", "સામાન વિગત", "રકમ (₹)"],
        hi: ["बिल नंबर", "सामान विवरण", "राशि (₹)"]
      },
      rows: [
        ["INV-101", "Monitor 24 inch", "12,500"],
        ["INV-102", "SSD 1TB", "6,200"],
        ["INV-103", "RAM 16GB", "4,100"],
        ["INV-104", "UPS 1000VA", "5,500"]
      ],
      targetCell: "C6",
      formulaApplied: "=SUBTOTAL(109, C2:C5)",
      evaluatedResult: "28,300",
      highlightCells: ["C2", "C3", "C4", "C5"]
    },
    steps: {
      en: [
        "1. In summary row, type =SUBTOTAL(",
        "2. Function number: Use 109 (109 means SUM while ignoring manually hidden and filtered rows).",
        "3. Type comma, then select amount range: C2:C5",
        "4. Press Enter. Now try filtering the table — the total adjusts dynamically!"
      ],
      gu: [
        "૧. નીચેના સેલમાં =SUBTOTAL( લખો.",
        "૨. Function number: 109 લખો (109 એટલે સરવાળો જે ફિલ્ટર કરેલી રો ને ગણતો નથી).",
        "૩. અલ્પવિરામ કરી રકમની રેન્જ સિલેક્ટ કરો: C2:C5",
        "૪. એન્ટર કરો. હવે ટેબલમાં કોઈપણ ફિલ્ટર લગાવો - ટોટલ આપમેળે બદલાઈ જશે!"
      ],
      hi: [
        "१. =SUBTOTAL( लिखें।",
        "२. फंक्शन नंबर: 109 दर्ज करें (109 फ़िल्टर और हिडन पंक्तियों को छोड़कर योग करता है)।",
        "३. कॉमा लगाकर राशि वाली रेंज चुनें: C2:C5",
        "४. Enter दबाएं। अब डेटा फ़िल्टर करने पर भी कुल योग अपने आप अपडेट होगा!"
      ]
    },
    commonErrors: [
      {
        error: "Hidden rows still included in total",
        reason: {
          en: "Using single digit function_num (e.g. 9) instead of three-digit (109). 9 includes manually hidden rows.",
          gu: "109 ને બદલે માત્ર 9 વાપરવું. 9 મેન્યુઅલી છુપાવેલ રો ને પણ ગણી લે છે.",
          hi: "109 की जगह सिर्फ 9 लिखना। 9 मैन्युअल रूप से छिपाई गई पंक्तियों को भी जोड़ लेता है।"
        },
        fix: {
          en: "Always use 109 for SUM, 101 for AVERAGE, 103 for COUNTA.",
          gu: "સરવાળા માટે હંમેશા 109 નો જ ઉપયોગ કરો.",
          hi: "योग के लिए हमेशा 109 का ही उपयोग करें।"
        }
      }
    ],
    proTip: {
      en: "SUBTOTAL never includes other SUBTOTAL cells inside its range, completely eliminating accidental double-counting in multi-level reports!",
      gu: "SUBTOTAL ફોર્મુલા પોતાની રેન્જમાં રહેલા બીજા SUBTOTAL ને બે વાર ગણતી નથી, તેથી ડબલ કાઉન્ટિંગની ભૂલ ક્યારેય થતી નથી!",
      hi: "SUBTOTAL अपनी रेंज में मौजूद किसी अन्य SUBTOTAL को दोबारा नहीं जोड़ता, जिससे दोहरी गिनती की गलती से बचा जा सकता है!"
    }
  },

  {
    id: "countif",
    name: "COUNTIF",
    category: "stats",
    difficulty: "beginner",
    syntax: "=COUNTIF(range, criteria)",
    summary: {
      en: "Counts the number of cells that meet a given condition (e.g. count how many students passed).",
      gu: "કોઈ ચોક્કસ શરત ધરાવતા સેલની સંખ્યા ગણે છે (દા.ત. કેટલા વિદ્યાર્થીઓ 'Pass' થયા).",
      hi: "दी गई शर्त को पूरा करने वाले सेलों की संख्या गिनता है (जैसे कितने छात्र 'Pass' हुए)।"
    },
    scenario: {
      en: "Attendance register: Counting how many days an employee was 'Present' (P) or 'Absent' (A).",
      gu: "હાજરી પત્રક: મહિના દરમિયાન કર્મચારી કેટલા દિવસ હાજર (P) અને કેટલા દિવસ ગેરહાજર (A) રહ્યો તે ગણવું.",
      hi: "उपस्थिति रजिस्टर: महीने में कर्मचारी कितने दिन उपस्थित (P) और कितने दिन अनुपस्थित (A) रहा यह गिनना।"
    },
    table: {
      columns: ["A", "B", "C", "D", "E"],
      headers: {
        en: ["Date", "Day", "Punch In", "Status", "Remarks"],
        gu: ["તારીખ", "વાર", "સમય", "હાજરી સ્થિતિ", "નોંધ"],
        hi: ["तारीख", "दिन", "समय", "उपस्थिति स्थिति", "टिप्पणी"]
      },
      rows: [
        ["01-Oct", "Mon", "09:15 AM", "Present", "On time"],
        ["02-Oct", "Tue", "09:30 AM", "Present", "On time"],
        ["03-Oct", "Wed", "--:-- --", "Absent", "Sick Leave"],
        ["04-Oct", "Thu", "09:10 AM", "Present", "On time"],
        ["05-Oct", "Fri", "--:-- --", "Absent", "Casual Leave"]
      ],
      targetCell: "G2",
      formulaApplied: '=COUNTIF(D2:D6, "Present")',
      evaluatedResult: "3",
      highlightCells: ["D2", "D3", "D5"]
    },
    steps: {
      en: [
        "1. Type =COUNTIF(",
        "2. Select range to check: D2:D6",
        "3. Type comma, then criteria in quotes: \"Present\"",
        "4. Close bracket and press Enter: Output is 3."
      ],
      gu: [
        "૧. =COUNTIF( લખો.",
        "૨. હાજરી કોલમ રેન્જ સિલેક્ટ કરો: D2:D6",
        "૩. અલ્પવિરામ કરી શરત લખો: \"Present\"",
        "૪. કૌંસ બંધ કરી એન્ટર કરો: જવાબ 3 મળશે."
      ],
      hi: [
        "१. =COUNTIF( लिखें।",
        "२. उपस्थिति वाला कॉलम चुनें: D2:D6",
        "३. कॉमा लगाकर शर्त लिखें: \"Present\"",
        "४. Enter दबाएं: परिणाम 3 आएगा।"
      ]
    },
    commonErrors: [
      {
        error: "0 count returned",
        reason: {
          en: "Trailing spaces in data cells (e.g. \"Present \" with space).",
          gu: "સેલમાં શબ્દ પછી વધારાની સ્પેસ રહી ગઈ હોય (દા.ત. \"Present \").",
          hi: "सेल में शब्द के अंत में खाली स्पेस छूट जाना।"
        },
        fix: {
          en: "Use wildcard: =COUNTIF(D2:D6, \"*Present*\") or clean data using TRIM.",
          gu: "વાઇલ્ડકાર્ડ વાપરો: =COUNTIF(D2:D6, \"*Present*\") અથવા TRIM થી સ્પેસ હટાવો.",
          hi: "वाइल्डकार्ड का प्रयोग करें: =COUNTIF(D2:D6, \"*Present*\")।"
        }
      }
    ],
    proTip: {
      en: "To count cells greater than 50: =COUNTIF(C2:C20, \">50\"). To count cells that are NOT blank: =COUNTIF(C2:C20, \"<>\").",
      gu: "50 થી મોટી સંખ્યાઓ ગણવા: =COUNTIF(C2:C20, \">50\"). ખાલી ન હોય તેવા સેલ ગણવા: =COUNTIF(C2:C20, \"<>\").",
      hi: "50 से बड़ी संख्याएं गिनने के लिए: =COUNTIF(C2:C20, \">50\") लिखें।"
    }
  },

  {
    id: "countifs",
    name: "COUNTIFS",
    category: "stats",
    difficulty: "intermediate",
    syntax: "=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
    summary: {
      en: "Counts the number of rows that satisfy multiple criteria at the same time.",
      gu: "એકસાથે બે કે તેથી વધુ શરતો પૂરી કરતા હોય તેવા સેલની સંખ્યા ગણે છે.",
      hi: "एक साथ कई शर्तों को पूरा करने वाली पंक्तियों की कुल संख्या गिनता है।"
    },
    scenario: {
      en: "Counting how many female candidates scored more than 80 marks in an exam.",
      gu: "પરીક્ષામાં 80 થી વધુ ગુણ મેળવનાર મહિલા ઉમેદવારો (Female + Marks > 80) ની સંખ્યા શોધવી.",
      hi: "परीक्षा में 80 से अधिक अंक लाने वाली महिला उम्मीदवारों (Female + Marks > 80) की संख्या ज्ञात करना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Student Name", "Gender", "Marks", "Result"],
        gu: ["વિદ્યાર્થી નામ", "જાતિ (Gender)", "ગુણ (Marks)", "પરિણામ"],
        hi: ["विद्यार्थी का नाम", "लिंग (Gender)", "अंक (Marks)", "परिणाम"]
      },
      rows: [
        ["Rina Patel", "Female", "88", "Distinction"],
        ["Karan Shah", "Male", "92", "Distinction"],
        ["Pooja Dave", "Female", "74", "First Class"],
        ["Dhara Joshi", "Female", "84", "Distinction"],
        ["Sanjay Trivedi", "Male", "65", "First Class"]
      ],
      targetCell: "F2",
      formulaApplied: '=COUNTIFS(B2:B6, "Female", C2:C6, ">=80")',
      evaluatedResult: "2",
      highlightCells: ["B2", "B5", "C2", "C5"]
    },
    steps: {
      en: [
        "1. Type =COUNTIFS(",
        "2. First criteria range: Gender column (B2:B6), then criteria \"Female\"",
        "3. Second criteria range: Marks column (C2:C6), then criteria \">=80\"",
        "4. Press Enter. It counts Rina (88) and Dhara (84) -> Output: 2."
      ],
      gu: [
        "૧. =COUNTIFS( લખો.",
        "૨. પહેલી શરત રેન્જ: જેન્ડર કોલમ (B2:B6), પછી શરત \"Female\"",
        "૩. બીજી શરત રેન્જ: માર્ક્સ કોલમ (C2:C6), પછી શરત \">=80\"",
        "૪. એન્ટર દબાવો. રીના (88) અને ધારા (84) એમ 2 જવાબ મળશે."
      ],
      hi: [
        "१. =COUNTIFS( लिखें।",
        "२. पहली शर्त रेंज: लिंग कॉलम (B2:B6), फिर शर्त \"Female\"",
        "३. दूसरी शर्त रेंज: अंक कॉलम (C2:C6), फिर शर्त \">=80\"",
        "४. Enter दबाएं। रीना (88) और धारा (84) मिलाकर कुल परिणाम 2 मिलेगा।"
      ]
    },
    commonErrors: [
      {
        error: "#VALUE!",
        reason: {
          en: "Criteria ranges do not have identical length/rows.",
          gu: "શરત રેન્જ 1 અને રેન્જ 2 ની લંબાઈ સરખી નથી.",
          hi: "दोनों क्राइटेरिया रेंज की लंबाई बराबर नहीं है।"
        },
        fix: {
          en: "Make sure all criteria ranges cover the same row numbers (B2:B6 and C2:C6).",
          gu: "બંને રેન્જ સમાન રો સુધી પસંદ કરો.",
          hi: "दोनों रेंज की पंक्तियाँ समान रखें।"
        }
      }
    ],
    proTip: {
      en: "Use cell references with comparison operators: =COUNTIFS(B2:B6, E1, C2:C6, \">=\" & E2).",
      gu: "સેલ રેફરન્સ સાથે ઓપરેટર વાપરવા માટે & ચિહ્ન વાપરો: \">=\" & E2.",
      hi: "सेल संदर्भ के साथ ऑपरेटर जोड़ने के लिए & का उपयोग करें: \">=\" & E2।"
    }
  },

  // ==========================================
  // 3. LOGICAL FUNCTIONS
  // ==========================================
  {
    id: "if",
    name: "IF",
    category: "logical",
    difficulty: "beginner",
    syntax: "=IF(logical_test, [value_if_true], [value_if_false])",
    summary: {
      en: "Evaluates a condition and returns one value if TRUE, and another value if FALSE.",
      gu: "શરતી નિર્ણય - જો આપેલી શરત સાચી પડે તો એક જવાબ અને ખોટી પડે તો બીજો જવાબ આપે છે.",
      hi: "तार्किक निर्णय - यदि शर्त सत्य है तो एक मान लौटाता है और असत्य होने पर दूसरा मान लौटाता है।"
    },
    scenario: {
      en: "Pass / Fail evaluation: If marks are 35 or above, display 'Pass', otherwise display 'Fail'.",
      gu: "વિદ્યાર્થી પરિણામ: જો ગુણ 35 કે તેથી વધુ હોય તો 'Pass', નહીંતર 'Fail' દર્શાવવું.",
      hi: "छात्र परीक्षा परिणाम: यदि अंक 35 या अधिक हैं तो 'Pass', अन्यथा 'Fail' दिखाना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Student Name", "Total Score", "Final Status"],
        gu: ["વિદ્યાર્થીનું નામ", "મેળવેલ ગુણ", "પરિણામ (Status)"],
        hi: ["छात्र का नाम", "कुल अंक", "परिणाम (Status)"]
      },
      rows: [
        ["Akash Patel", "78", "Pass"],
        ["Bhavin Shah", "31", "Fail"],
        ["Chetna Trivedi", "62", "Pass"],
        ["Dipen Rana", "34", "Fail"],
        ["Ekta Dave", "89", "Pass"]
      ],
      targetCell: "C2",
      formulaApplied: '=IF(B2>=35, "Pass", "Fail")',
      evaluatedResult: "Pass",
      highlightCells: ["B2", "C2"]
    },
    steps: {
      en: [
        "1. In result cell (C2), type =IF(",
        "2. logical_test: Check if marks are >= 35 (B2>=35)",
        "3. value_if_true: \"Pass\"",
        "4. value_if_false: \"Fail\"",
        "5. Press Enter and drag down for all students."
      ],
      gu: [
        "૧. પરિણામના સેલ (C2) માં =IF( લખો.",
        "૨. શરત ચકાસો: શું ગુણ 35 કે વધુ છે? (B2>=35)",
        "૩. જો સાચું હોય તો શું આપવું: \"Pass\"",
        "૪. જો ખોટું હોય તો શું આપવું: \"Fail\"",
        "૫. એન્ટર દબાવો અને નીચેના સેલમાં ડ્રેગ કરી લો."
      ],
      hi: [
        "१. परिणाम वाले सेल (C2) में =IF( लिखें।",
        "२. शर्त जांचें: क्या अंक 35 या उससे अधिक हैं? (B2>=35)",
        "३. यदि सत्य हो तो मान: \"Pass\"",
        "४. यदि असत्य हो तो मान: \"Fail\"",
        "५. Enter दबाएं और नीचे तक ड्रैग करें।"
      ]
    },
    commonErrors: [
      {
        error: "Returns 0 or FALSE instead of text",
        reason: {
          en: "Omitted the value_if_false parameter.",
          gu: "જો શરત ખોટી પડે ત્યારે શું દર્શાવવું તે પેરામીટર લખવાનું ભૂલી ગયા.",
          hi: "value_if_false पैरामीटर लिखना भूल जाना।"
        },
        fix: {
          en: "Always supply both true and false values: =IF(condition, \"Yes\", \"No\").",
          gu: "હંમેશા સાચો અને ખોટો બંને વિકલ્પ લખો: =IF(શરત, \"Yes\", \"No\").",
          hi: "हमेशा सत्य और असत्य दोनों विकल्प प्रदान करें।"
        }
      }
    ],
    proTip: {
      en: "Calculate Sales Commission using IF: =IF(B2>=100000, B2*10%, B2*5%) — pays 10% for high performers and 5% otherwise!",
      gu: "સેલ્સ કમિશન ગણવા: =IF(B2>=100000, B2*10%, B2*5%) — ૧ લાખથી વધુ વેચાણ પર 10% અને અન્યથા 5% કમિશન!",
      hi: "कमीशन गणना: =IF(B2>=100000, B2*10%, B2*5%) — 1 लाख से अधिक बिक्री पर 10% और अन्यथा 5%!"
    }
  },

  {
    id: "ifs",
    name: "IFS",
    category: "logical",
    difficulty: "intermediate",
    syntax: "=IFS(condition1, value1, [condition2, value2], ...)",
    summary: {
      en: "Checks multiple conditions without messy nested IF statements (e.g. A, B, C, D grading).",
      gu: "ગૂંચવણભર્યા નેસ્ટેડ IF વગર એકસાથે અનેક શરતો ચકાસે છે (જેમ કે ગ્રેડ A, B, C, D નક્કી કરવા).",
      hi: "बिना जटिल नेस्टेड IF के एक साथ कई शर्तों की जांच करता है (जैसे ग्रेडिंग सिस्टम A, B, C, D)।"
    },
    scenario: {
      en: "Assigning student letter grades: >=90 (A+), >=80 (A), >=70 (B), >=50 (C), Else Fail.",
      gu: "વિદ્યાર્થી ગ્રેડ નક્કી કરવા: 90 કે વધુ હોય તો A+, 80 કે વધુ હોય તો A, 70 કે વધુ હોય તો B, 50 કે વધુ હોય તો C, નહીંતર Fail.",
      hi: "छात्रों को ग्रेड देना: >=90 (A+), >=80 (A), >=70 (B), >=50 (C), अन्यथा Fail।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Student Name", "Percentage (%)", "Grade"],
        gu: ["વિદ્યાર્થી નામ", "ટકાવારી (%)", "ગ્રેડ (Grade)"],
        hi: ["विद्यार्थी का नाम", "प्रतिशत (%)", "ग्रेड (Grade)"]
      },
      rows: [
        ["Aditi Rao", "94", "A+"],
        ["Bharat Patel", "82", "A"],
        ["Chirag Suthar", "73", "B"],
        ["Devang Joshi", "58", "C"],
        ["Farhan Khan", "42", "Fail"]
      ],
      targetCell: "C2",
      formulaApplied: '=IFS(B2>=90, "A+", B2>=80, "A", B2>=70, "B", B2>=50, "C", TRUE, "Fail")',
      evaluatedResult: "A+",
      highlightCells: ["B2", "C2"]
    },
    steps: {
      en: [
        "1. Type =IFS(",
        "2. Add condition and result pairs in descending order:",
        "   B2>=90, \"A+\",",
        "   B2>=80, \"A\",",
        "   B2>=70, \"B\",",
        "   B2>=50, \"C\",",
        "   TRUE, \"Fail\"",
        "3. TRUE acts as the default 'else' fallback. Hit Enter!"
      ],
      gu: [
        "૧. =IFS( લખો.",
        "૨. શરતો ઉતરતા ક્રમમાં જોડી તરીકે લખો:",
        "   B2>=90, \"A+\",",
        "   B2>=80, \"A\",",
        "   B2>=70, \"B\",",
        "   B2>=50, \"C\",",
        "   TRUE, \"Fail\"",
        "૩. છેલ્લે TRUE લખવાથી બાકી વધેલા તમામ માટે ડિફોલ્ટ 'Fail' લાગુ પડશે. એન્ટર કરો!"
      ],
      hi: [
        "१. =IFS( लिखें।",
        "२. शर्तों को घटते क्रम में जोड़ियों के रूप में लिखें:",
        "   B2>=90, \"A+\",",
        "   B2>=80, \"A\",",
        "   B2>=70, \"B\",",
        "   B2>=50, \"C\",",
        "   TRUE, \"Fail\"",
        "३. अंत में TRUE डिफ़ॉल्ट 'else' का कार्य करता है। Enter दबाएं!"
      ]
    },
    commonErrors: [
      {
        error: "#N/A",
        reason: {
          en: "None of the conditions evaluated to TRUE and no default TRUE fallback was provided.",
          gu: "આપેલી કોઈપણ શરત સાચી ન પડી અને છેલ્લે TRUE ડિફોલ્ટ વિકલ્પ લખ્યો નહોતો.",
          hi: "कोई भी शर्त सत्य नहीं हुई और डिफ़ॉल्ट TRUE विकल्प नहीं दिया गया था।"
        },
        fix: {
          en: "Always add TRUE, \"Default Value\" as the final pair in IFS.",
          gu: "IFS માં છેલ્લે હંમેશા TRUE, \"ડિફોલ્ટ મૂલ્ય\" અવશ્ય લખો.",
          hi: "IFS के अंत में हमेशा TRUE, \"डिफ़ॉल्ट मान\" अवश्य जोड़ें।"
        }
      }
    ],
    proTip: {
      en: "Always order conditions from highest to lowest threshold when checking numbers with >= to avoid premature matches.",
      gu: "સંખ્યાઓની ચકાસણી વખતે હંમેશા સૌથી મોટી સંખ્યાથી શરૂ કરી નાની તરફ જાઓ (90 -> 80 -> 70), જેથી સાચો ગ્રેડ મળે.",
      hi: "संख्याओं की जांच करते समय हमेशा सबसे बड़ी से सबसे छोटी की ओर क्रम रखें।"
    }
  },

  {
    id: "iferror",
    name: "IFERROR",
    category: "logical",
    difficulty: "beginner",
    syntax: "=IFERROR(value, value_if_error)",
    summary: {
      en: "Catches and cleanly hides ugly Excel errors (#N/A, #DIV/0!, #VALUE!, #REF!) and shows friendly text.",
      gu: "એક્સેલની કદરૂપી એરરો (#N/A, #DIV/0!, #VALUE!) છુપાવીને તેના બદલે સુંદર મેસેજ કે 0 દર્શાવે છે.",
      hi: "एक्सेल की सभी एरर्स (#N/A, #DIV/0!, #VALUE!) को छुपाकर साफ-सुथरा संदेश या शून्य दिखाता है।"
    },
    scenario: {
      en: "Calculating price per unit: When sales quantity is 0, regular division gives #DIV/0! error. IFERROR prevents this.",
      gu: "પ્રતિ નંગ કિંમત શોધતી વખતે જો જથ્થો 0 હોય તો સામાન્ય રીતે #DIV/0! ની એરર આવે છે, જેને IFERROR રોકીને 0 બતાવે છે.",
      hi: "प्रति नग मूल्य निकालते समय यदि मात्रा 0 हो तो #DIV/0! एरर आती है, जिसे IFERROR रोककर 0 दिखाता है।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Product", "Total Revenue (₹)", "Units Sold"],
        gu: ["પ્રોડક્ટ", "કુલ આવક (₹)", "વેચાયેલ નંગ"],
        hi: ["उत्पाद", "कुल आय (₹)", "बेची गई इकाइयाँ"]
      },
      rows: [
        ["Desktop PC", "1,50,000", "5"],
        ["Webcam HD", "0", "0"],
        ["Gaming Mouse", "45,000", "30"]
      ],
      targetCell: "D3",
      formulaApplied: "=IFERROR(B3/C3, 0)",
      evaluatedResult: "0",
      highlightCells: ["B3", "C3"]
    },
    steps: {
      en: [
        "1. Write =IFERROR(",
        "2. Put the risky formula: B3/C3 (0 divided by 0)",
        "3. Type comma, then what to show if error occurs: 0 (or \"No Sales\")",
        "4. Close bracket and press Enter: Clean 0 instead of ugly #DIV/0!."
      ],
      gu: [
        "૧. =IFERROR( લખો.",
        "૨. અંદર ગણતરી લખો: B3/C3 (0 ભાગ્યા 0)",
        "૩. અલ્પવિરામ કરી એરર આવે તો શું બતાવવું તે લખો: 0 અથવા \"વેચાણ નથી\"",
        "૪. કૌંસ બંધ કરો અને એન્ટર દબાવો: #DIV/0! એરરને બદલે સ્વચ્છ 0 દેખાશે."
      ],
      hi: [
        "१. =IFERROR( लिखें।",
        "२. गणना लिखें: B3/C3 (0 से भाग)",
        "३. कॉमा लगाकर एरर आने पर दिखने वाला मान लिखें: 0 या \"कोई बिक्री नहीं\"",
        "४. Enter दबाएं: एरर की जगह साफ 0 दिखेगा।"
      ]
    },
    commonErrors: [
      {
        error: "Hiding legitimate bugs",
        reason: {
          en: "Wrapping an entire complex formula in IFERROR might hide a formula typo (#NAME?).",
          gu: "આખી ફોર્મુલા પર IFERROR લગાવવાથી સ્પેલિંગની ભૂલ પણ છુપાઈ જઈ શકે છે.",
          hi: "पूरी जटिल गणना पर IFERROR लगाने से फ़ॉर्मूले की वास्तविक स्पेलिंग त्रुटि छुप सकती है।"
        },
        fix: {
          en: "Only wrap specific lookup or division steps where missing data is expected.",
          gu: "જ્યાં ડેટા ખૂટવાની કે 0 આવવાની સંભાવના હોય ત્યાં જ IFERROR વાપરો.",
          hi: "केवल वहीं उपयोग करें जहाँ डेटा न मिलने या शून्य से भाग होने की संभावना हो।"
        }
      }
    ],
    proTip: {
      en: "Combine with VLOOKUP: =IFERROR(VLOOKUP(A2, Data!A:B, 2, FALSE), \"Not Found\") — instant professional polish!",
      gu: "VLOOKUP સાથે વાપરો: =IFERROR(VLOOKUP(A2, Data!A:B, 2, FALSE), \"મળ્યું નથી\") — પ્રોફેશનલ રિપોર્ટ તૈયાર!",
      hi: "VLOOKUP के साथ जोड़ें: =IFERROR(VLOOKUP(A2, Data!A:B, 2, FALSE), \"उपलब्ध नहीं\")।"
    }
  },

  // ==========================================
  // 4. TEXT & STRING FUNCTIONS
  // ==========================================
  {
    id: "textjoin",
    name: "TEXTJOIN",
    category: "text",
    difficulty: "beginner",
    syntax: "=TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)",
    summary: {
      en: "Merges multiple cells with a customizable separator (comma, space, hyphen) and automatically skips empty cells.",
      gu: "અલગ અલગ સેલની વિગતોને અલ્પવિરામ, સ્પેસ કે ડેશ જેવા ચિહ્ન સાથે જોડે છે અને ખાલી સેલને આપોઆપ બાકાત રાખે છે.",
      hi: "कॉमा, स्पेस या डैश जैसे विभाजक (Delimiter) के साथ कई सेलों को जोड़ता है और खाली सेलों को छोड़ देता है।"
    },
    scenario: {
      en: "Combining City, State, and Pincode into a full single address string.",
      gu: "ગામ/શહેર, જિલ્લો અને પિનકોડ જોડીને એક જ સેલમાં સંપૂર્ણ સરનામું તૈયાર કરવું.",
      hi: "शहर, राज्य और पिनकोड को मिलाकर एक ही सेल में पूरा पता तैयार करना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Street", "City", "State", "Pincode"],
        gu: ["સોસાયટી / વિસ્તાર", "શહેર", "રાજ્ય", "પીનકોડ"],
        hi: ["सड़क / इलाका", "शहर", "राज्य", "पिनकोड"]
      },
      rows: [
        ["102, Shivalik Plaza", "Ahmedabad", "Gujarat", "380015"],
        ["B-404, Titan Heights", "Surat", "Gujarat", "395007"],
        ["Shop 12, Galaxy Mall", "Vadodara", "Gujarat", "390001"]
      ],
      targetCell: "E2",
      formulaApplied: '=TEXTJOIN(", ", TRUE, A2:D2)',
      evaluatedResult: "102, Shivalik Plaza, Ahmedabad, Gujarat, 380015",
      highlightCells: ["A2", "B2", "C2", "D2"]
    },
    steps: {
      en: [
        "1. Type =TEXTJOIN(",
        "2. delimiter: Give separator in quotes, e.g. \", \"",
        "3. ignore_empty: Put TRUE so empty cells are skipped",
        "4. Select cell range to merge: A2:D2",
        "5. Press Enter! Full combined string is ready."
      ],
      gu: [
        "૧. =TEXTJOIN( લખો.",
        "૨. delimiter: બે શબ્દો વચ્ચે શું રાખવું છે તે લખો, જેમ કે \", \"",
        "૩. ignore_empty: ખાલી સેલ સ્કીપ કરવા TRUE લખો.",
        "૪. જોડવાની તમામ સેલ રેન્જ સિલેક્ટ કરો: A2:D2",
        "૫. એન્ટર કરો! આખું સરનામું સુંદર રીતે જોડાઈ જશે."
      ],
      hi: [
        "१. =TEXTJOIN( लिखें।",
        "२. delimiter: सेपरेटर उद्धरण चिह्नों में दें, जैसे \", \"",
        "३. ignore_empty: खाली सेल छोड़ने के लिए TRUE लिखें।",
        "४. जोड़ने वाली रेंज चुनें: A2:D2",
        "५. Enter दबाएं! पूरा पता तैयार हो जाएगा।"
      ]
    },
    commonErrors: [
      {
        error: "#NAME?",
        reason: {
          en: "TEXTJOIN is available in Excel 2019, 2021, and Microsoft 365. Not available in older Excel 2013.",
          gu: "TEXTJOIN એક્સેલ 2019, 2021 અને 365 માં જ છે, જૂના 2013 વર્ઝનમાં ઉપલબ્ધ નથી.",
          hi: "यह फ़ंक्शन Excel 2019/365 में उपलब्ध है, बहुत पुराने संस्करण में नहीं।"
        },
        fix: {
          en: "In older Excel, use =A2 & \", \" & B2 & \", \" & C2 & \", \" & D2.",
          gu: "જૂના વર્ઝનમાં & નો ઉપયોગ કરો: =A2 & \", \" & B2 & \", \" & C2.",
          hi: "पुराने संस्करण में & का उपयोग करें।"
        }
      }
    ],
    proTip: {
      en: "To combine items with a line break inside a single cell: =TEXTJOIN(CHAR(10), TRUE, A2:A10) and enable 'Wrap Text'!",
      gu: "એક જ સેલમાં નવી લાઈનમાં શબ્દો જોડવા: =TEXTJOIN(CHAR(10), TRUE, A2:D2) અને 'Wrap Text' ચાલુ કરો!",
      hi: "एक ही सेल में नई लाइन से जोड़ने के लिए: =TEXTJOIN(CHAR(10), TRUE, A2:D2) और Wrap Text ऑन करें!"
    }
  },

  {
    id: "proper-upper-lower",
    name: "PROPER / UPPER / LOWER",
    category: "text",
    difficulty: "beginner",
    syntax: "=PROPER(text)  |  =UPPER(text)  |  =LOWER(text)",
    summary: {
      en: "Changes text casing. PROPER capitalizes the first letter of each word (Title Case), UPPER makes all capitals, and LOWER makes all small.",
      gu: "અક્ષરોનું કેસ બદલવા - PROPER થી દરેક શબ્દનો પહેલો અક્ષર કેપિટલ થાય છે, UPPER થી બધા કેપિટલ અને LOWER થી બધા સ્મોલ થાય છે.",
      hi: "टेक्स्ट का केस बदलना - PROPER प्रत्येक शब्द का पहला अक्षर बड़ा (Title Case) करता है, UPPER सभी बड़े और LOWER सभी छोटे करता है।"
    },
    scenario: {
      en: "Cleaning messy customer names (e.g. 'rAJESH pATEL' -> 'Rajesh Patel').",
      gu: "ગ્રાહકોના આડાઅવળા લખાયેલા નામોને સાફ કરી વ્યવસ્થિત ટાઇટલ કેસ ('Rajesh Patel') માં ફેરવવા.",
      hi: "अव्यवस्थित लिखे नामों को सही प्रारूप ('Rajesh Patel') में बदलना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Raw Input Name", "Formula Used", "Cleaned Result"],
        gu: ["અસ્તવ્યસ્ત નામ", "ફોર્મુલા", "સાફ થયેલ પરિણામ"],
        hi: ["कच्चा इनपुट नाम", "फ़ॉर्मूला", "स्वच्छ परिणाम"]
      },
      rows: [
        ["mUKESH aMBANI", "=PROPER(A2)", "Mukesh Ambani"],
        ["pan card number", "=UPPER(A3)", "PAN CARD NUMBER"],
        ["INFO@COMPANY.COM", "=LOWER(A4)", "info@company.com"]
      ],
      targetCell: "C2",
      formulaApplied: "=PROPER(A2)",
      evaluatedResult: "Mukesh Ambani",
      highlightCells: ["A2", "C2"]
    },
    steps: {
      en: [
        "1. In clean column, type =PROPER(A2)",
        "2. Press Enter: 'mUKESH aMBANI' instantly becomes 'Mukesh Ambani'.",
        "3. Drag down to clean the entire list."
      ],
      gu: [
        "૧. બાજુના સેલમાં =PROPER(A2) લખો.",
        "૨. એન્ટર દબાવો: 'mUKESH aMBANI' તરત જ 'Mukesh Ambani' બની જશે.",
        "૩. નીચે સુધી ડ્રેગ કરો."
      ],
      hi: [
        "१. =PROPER(A2) लिखें।",
        "२. Enter दबाएं: नाम तुरंत सही केस में बदल जाएगा।",
        "३. नीचे तक ड्रैग करें।"
      ]
    },
    commonErrors: [
      {
        error: "Names like McDonald become Mcdonald",
        reason: {
          en: "PROPER capitalizes after spaces and punctuation only.",
          gu: "PROPER માત્ર સ્પેસ પછીના અક્ષરને કેપિટલ કરે છે.",
          hi: "PROPER केवल स्पेस के बाद वाले अक्षर को कैपिटल करता है।"
        },
        fix: {
          en: "Use SUBSTITUTE or manual correction for special names like McDonald or O'Connor.",
          gu: "આવા ખાસ નામો માટે SUBSTITUTE વાપરી સુધારો કરવો.",
          hi: "ऐसे विशेष नामों के लिए SUBSTITUTE का उपयोग करें।"
        }
      }
    ],
    proTip: {
      en: "Combine with TRIM to eliminate rogue spaces at the same time: =PROPER(TRIM(A2)).",
      gu: "TRIM સાથે જોડીને વધારાની સ્પેસ પણ એકસાથે હટાવી દો: =PROPER(TRIM(A2)).",
      hi: "अतिरिक्त स्पेस हटाने के लिए TRIM के साथ प्रयोग करें: =PROPER(TRIM(A2))।"
    }
  },

  {
    id: "trim",
    name: "TRIM",
    category: "text",
    difficulty: "beginner",
    syntax: "=TRIM(text)",
    summary: {
      en: "Removes all unwanted leading, trailing, and excessive middle spaces from text, leaving only single spaces between words.",
      gu: "ટેક્સ્ટની આગળ, પાછળ કે વચ્ચે રહેલી બધી વધારાની અનિચ્છનીય સ્પેસ દૂર કરે છે, જેનાથી VLOOKUP ની એરર અટકે છે.",
      hi: "टेक्स्ट के आगे, पीछे और बीच की सभी अतिरिक्त खाली जगह (Spaces) को हटाता है जिससे VLOOKUP एरर नहीं आती।"
    },
    scenario: {
      en: "Fixing copied data from ERP/Web where invisible trailing spaces cause lookup formulas to fail with #N/A.",
      gu: "વેબસાઇટ કે ટેલી/સોફ્ટવેરમાંથી કોપી કરેલા ડેટાની પાછળ રહેલી સ્પેસ સાફ કરવી જેથી VLOOKUP માં #N/A એરર ન આવે.",
      hi: "सॉफ्टवेयर से निकाले गए डेटा में नाम के पीछे छूटी खाली स्पेस हटाना ताकि लुकअप में रुकावट न आए।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Dirty Input", "Formula", "Clean Output"],
        gu: ["સ્પેસ વાળો ડેટા", "ફોર્મુલા", "સ્વચ્છ પરિણામ"],
        hi: ["अतिरिक्त स्पेस वाला डेटा", "फ़ॉर्मूला", "स्वच्छ आउटपुट"]
      },
      rows: [
        ['"   Rajesh   Patel   "', "=TRIM(A2)", '"Rajesh Patel"'],
        ['"9898012345   "', "=TRIM(A3)", '"9898012345"'],
        ['"  GSTIN24AAACG... "', "=TRIM(A4)", '"GSTIN24AAACG..."']
      ],
      targetCell: "C2",
      formulaApplied: "=TRIM(A2)",
      evaluatedResult: "Rajesh Patel",
      highlightCells: ["A2", "C2"]
    },
    steps: {
      en: [
        "1. In clean cell, type =TRIM(A2)",
        "2. Hit Enter: All spaces at start and end are removed, and double spaces reduced to one.",
        "3. Copy and Paste as Values to permanently clean the source."
      ],
      gu: [
        "૧. સ્વચ્છ સેલમાં =TRIM(A2) લખો.",
        "૨. એન્ટર કરો: આગળ-પાછળની બધી સ્પેસ ગાયબ થઈ જશે અને શબ્દો વચ્ચે ફક્ત એક જ સ્પેસ રહેશે.",
        "૩. કોપી કરી Paste as Values કરી લો."
      ],
      hi: [
        "१. =TRIM(A2) लिखें।",
        "२. Enter दबाएं: आगे-पीछे की अतिरिक्त जगह तुरंत साफ हो जाएगी।",
        "३. कॉपी करके Paste as Values कर लें।"
      ]
    },
    commonErrors: [
      {
        error: "Non-breaking spaces (ASCII 160) not removed",
        reason: {
          en: "Web pages often use non-breaking spaces (&nbsp;) which standard TRIM cannot delete.",
          gu: "વેબસાઇટ માંથી કોપી કરેલ ડેટામાં &nbsp; સ્પેસ હોઈ શકે છે જેને સાદો TRIM હટાવી શકતો નથી.",
          hi: "वेबसाइट से कॉपी डेटा में नॉन-ब्रेकिंग स्पेस हो सकती है जिसे सामान्य TRIM नहीं हटा पाता।"
        },
        fix: {
          en: "Use nested formula: =TRIM(CLEAN(SUBSTITUTE(A2, CHAR(160), \" \"))).",
          gu: "સુધારેલ ફોર્મુલા વાપરો: =TRIM(CLEAN(SUBSTITUTE(A2, CHAR(160), \" \"))).",
          hi: "यह फॉर्मूला लगाएं: =TRIM(CLEAN(SUBSTITUTE(A2, CHAR(160), \" \")))।"
        }
      }
    ],
    proTip: {
      en: "Always apply TRIM on key lookup IDs when receiving Excel sheets from external clients!",
      gu: "બહારથી આવતી ફાઈલોમાં VLOOKUP લગાવતા પહેલા હંમેશા ID કોલમ પર TRIM લગાવી દો!",
      hi: "बाहरी एक्सेल शीट पर काम करते समय हमेशा लुकअप कॉलम पर TRIM लगा लें!"
    }
  },

  // ==========================================
  // 5. DATE & TIME FUNCTIONS
  // ==========================================
  {
    id: "datedif",
    name: "DATEDIF",
    category: "date",
    difficulty: "intermediate",
    syntax: '=DATEDIF(start_date, end_date, "unit")  // unit: "Y", "M", "D", "YM", "MD"',
    summary: {
      en: "Calculates the difference between two dates in completed Years, Months, or Days. Essential for calculating exact Age and Work Experience.",
      gu: "બે તારીખો વચ્ચેનો તફાવત પૂર્ણ વર્ષ (Years), મહિના (Months) કે દિવસોમાં ગણે છે. ઉંમર (Age) અને નોકરીનો અનુભવ શોધવા માટે સૌથી ઉત્તમ.",
      hi: "दो तारीखों के बीच पूरे वर्ष, महीने या दिनों का अंतर निकालता है। उम्र (Age) और कार्य अनुभव की गणना के लिए सबसे उपयोगी।"
    },
    scenario: {
      en: "Calculating employee exact completed age in Years from Date of Birth (DOB) and Today.",
      gu: "જન્મતારીખ (DOB) પરથી આજની તારીખ સુધીની ચોક્કસ ઉંમર (Age) વર્ષમાં શોધવી.",
      hi: "जन्म तिथि (DOB) से आज तक की सही उम्र (Age) वर्षों में निकालना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Employee Name", "Date of Birth", "As of Date", "Completed Age (Yrs)"],
        gu: ["કર્મચારીનું નામ", "જન્મતારીખ (DOB)", "આજની તારીખ", "પૂર્ણ થયેલ ઉંમર (વર્ષ)"],
        hi: ["कर्मचारी का नाम", "जन्म तिथि (DOB)", "आज की तारीख", "पूर्ण उम्र (वर्ष)"]
      },
      rows: [
        ["Jayesh Patel", "15-Aug-1995", "01-Jan-2026", "30"],
        ["Pooja Dave", "22-Nov-1998", "01-Jan-2026", "27"],
        ["Sunil Mehta", "10-May-1980", "01-Jan-2026", "45"]
      ],
      targetCell: "D2",
      formulaApplied: '=DATEDIF(B2, C2, "Y")',
      evaluatedResult: "30",
      highlightCells: ["B2", "C2", "D2"]
    },
    steps: {
      en: [
        "1. In result cell, write =DATEDIF(",
        "2. start_date: Date of birth cell (B2)",
        "3. end_date: Today's date or reference date (C2 or TODAY())",
        "4. unit: Put \"Y\" in quotes for full years, \"M\" for months, or \"D\" for days",
        "5. Press Enter to get exact age: 30."
      ],
      gu: [
        "૧. પરિણામના સેલમાં =DATEDIF( લખો.",
        "૨. start_date: જન્મતારીખ વાળો સેલ (B2)",
        "૩. end_date: આજની તારીખ (C2 અથવા TODAY())",
        "૪. unit: વર્ષ માટે \"Y\", મહિના માટે \"M\" અથવા દિવસ માટે \"D\" લખો.",
        "૫. એન્ટર દબાવો: પૂર્ણ વર્ષ 30 આવી જશે."
      ],
      hi: [
        "१. =DATEDIF( लिखें।",
        "२. start_date: जन्मतिथि (B2)",
        "३. end_date: आज की तारीख (C2 या TODAY())",
        "४. unit: वर्षों के लिए \"Y\" लिखें।",
        "५. Enter दबाएं: सही उम्र 30 प्राप्त होगी।"
      ]
    },
    commonErrors: [
      {
        error: "#NUM!",
        reason: {
          en: "start_date is greater/later than end_date.",
          gu: "શરૂઆતની તારીખ અંતિમ તારીખ કરતા પછીની (મોટી) છે.",
          hi: "प्रारंभिक तिथि अंतिम तिथि से बाद की है।"
        },
        fix: {
          en: "Ensure start_date comes chronologically before end_date.",
          gu: "પહેલા જૂની તારીખ અને પછી નવી તારીખ લખો.",
          hi: "पहले पुरानी तारीख और बाद में नई तारीख रखें।"
        }
      }
    ],
    proTip: {
      en: "Calculate exact 'X Years, Y Months, Z Days' format: =DATEDIF(B2, TODAY(), \"Y\") & \" Yrs \" & DATEDIF(B2, TODAY(), \"YM\") & \" Mos \" & DATEDIF(B2, TODAY(), \"MD\") & \" Days\"!",
      gu: "વર્ષ, મહિના અને દિવસ ત્રણેય સાથે દર્શાવવા: =DATEDIF(B2, TODAY(), \"Y\") & \" વર્ષ \" & DATEDIF(B2, TODAY(), \"YM\") & \" મહિના \" & DATEDIF(B2, TODAY(), \"MD\") & \" દિવસ\"!",
      hi: "वर्ष, महीने और दिन एक साथ दिखाने के लिए तीनों यूनिट्स (Y, YM, MD) को & से जोड़ें!"
    }
  },

  {
    id: "networkdays",
    name: "NETWORKDAYS",
    category: "date",
    difficulty: "intermediate",
    syntax: "=NETWORKDAYS(start_date, end_date, [holidays])",
    summary: {
      en: "Calculates total working days between two dates, automatically excluding Saturdays, Sundays, and a custom list of company holidays.",
      gu: "શનિ-રવિની રજાઓ અને તહેવારોની રજાઓ આપોઆપ બાદ કરીને બે તારીખો વચ્ચેના કુલ કામકાજના દિવસો (Working Days) ગણે છે.",
      hi: "शनिवार, रविवार और छुट्टियों को स्वतः हटाकर दो तारीखों के बीच कार्य दिवसों (Working Days) की कुल संख्या निकालता है।"
    },
    scenario: {
      en: "Payroll: Calculating payable working days for employee salary in a specific month after excluding official holidays.",
      gu: "પગાર ગણતરી (Payroll): મહિનામાં જાહેર રજાઓ અને શનિ-રવિ બાદ કરતા કર્મચારીના ખરેખર કામકાજના કેટલા દિવસ થાય છે તે ગણવું.",
      hi: "वेतन गणना: महीने में सरकारी छुट्टियों और सप्ताहांत को हटाकर वास्तविक कार्य दिवसों की गणना करना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Start Date", "End Date", "Public Holidays", "Working Days"],
        gu: ["શરૂઆતની તારીખ", "છેલ્લી તારીખ", "જાહેર રજાઓ", "કામકાજના દિવસો"],
        hi: ["प्रारंभिक तिथि", "अंतिम तिथि", "सार्वजनिक अवकाश", "कार्य दिवस"]
      },
      rows: [
        ["01-Jan-2026", "31-Jan-2026", "26-Jan-2026", "21"],
        ["01-Feb-2026", "28-Feb-2026", "None", "20"]
      ],
      targetCell: "D2",
      formulaApplied: "=NETWORKDAYS(A2, B2, C2)",
      evaluatedResult: "21",
      highlightCells: ["A2", "B2", "C2", "D2"]
    },
    steps: {
      en: [
        "1. Type =NETWORKDAYS(",
        "2. start_date: First day of month (A2)",
        "3. end_date: Last day of month (B2)",
        "4. holidays: Select cells containing holiday dates (C2)",
        "5. Press Enter: Gives 21 actual working days."
      ],
      gu: [
        "૧. =NETWORKDAYS( લખો.",
        "૨. start_date: મહિનાની ૧લી તારીખ (A2)",
        "૩. end_date: મહિનાની છેલ્લી તારીખ (B2)",
        "૪. holidays: જાહેર રજાઓની તારીખ વાળો સેલ સિલેક્ટ કરો (C2)",
        "૫. એન્ટર દબાવો: ચોખ્ખા 21 કામકાજના દિવસ મળશે."
      ],
      hi: [
        "१. =NETWORKDAYS( लिखें।",
        "२. start_date: महीने की पहली तारीख (A2)",
        "३. end_date: महीने की अंतिम तारीख (B2)",
        "४. holidays: छुट्टियों की तारीख वाला सेल चुनें (C2)",
        "५. Enter दबाएं: कुल 21 कार्य दिवस प्राप्त होंगे।"
      ]
    },
    commonErrors: [
      {
        error: "#VALUE!",
        reason: {
          en: "Dates are formatted as invalid text strings.",
          gu: "તારીખ ટેક્સ્ટ સ્વરૂપે છે જેથી એક્સેલ તેને ઓળખી શકતું નથી.",
          hi: "तारीख मान्य डेट फ़ॉर्मेट में नहीं है।"
        },
        fix: {
          en: "Use DATE(year, month, day) or ensure system date format matches.",
          gu: "તારીખને સાચા ડેટ ફોર્મેટમાં ફેરવો અથવા DATE(2026, 1, 1) વાપરો.",
          hi: "तारीख को सही दिनांक प्रारूप में बदलें।"
        }
      }
    ],
    proTip: {
      en: "If your company works on Saturdays (only Sunday off), use =NETWORKDAYS.INTL(A2, B2, 11, C2) where 11 specifies Sunday-only weekend!",
      gu: "જો તમારી ઓફિસમાં શનિવારે કામ ચાલુ રહેતું હોય અને માત્ર રવિવારે જ રજા હોય, તો =NETWORKDAYS.INTL(A2, B2, 11, C2) વાપરો!",
      hi: "यदि केवल रविवार की छुट्टी रहती है तो =NETWORKDAYS.INTL(A2, B2, 11, C2) का उपयोग करें!"
    }
  },

  // ==========================================
  // 6. MODERN DYNAMIC ARRAYS (EXCEL 365 / 2021)
  // ==========================================
  {
    id: "unique",
    name: "UNIQUE",
    category: "arrays",
    difficulty: "beginner",
    syntax: "=UNIQUE(array, [by_col], [exactly_once])",
    summary: {
      en: "Extracts an instant list of distinct values from a column, completely removing duplicates automatically.",
      gu: "કોઈપણ કોલમમાંથી ડુપ્લીકેટ (વારંવાર આવતા) નામો હટાવીને માત્ર એક જ વાર આવતી યુનિક યાદી ઓટોમેટિક તૈયાર કરે છે.",
      hi: "कॉलम से डुप्लिकेट प्रविष्टियों को हटाकर केवल अद्वितीय (Unique) मानों की स्वचालित सूची तैयार करता है।"
    },
    scenario: {
      en: "Creating a clean master list of all unique cities where sales occurred from a list of 10,000 invoices.",
      gu: "હજારો બિલોના લિસ્ટમાંથી આપણા ગ્રાહકો કયા કયા શહેરોના છે તેનું શુદ્ધ અને ડુપ્લીકેટ વગરનું યુનિક લિસ્ટ બનાવવું.",
      hi: "हजारों बिलों में से उन सभी विशिष्ट शहरों की सूची निकालना जहाँ हमारी बिक्री हुई है।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Customer Name", "City (With Duplicates)", "Unique City Output"],
        gu: ["ગ્રાહક નામ", "શહેર (ડુપ્લીકેટ સાથે)", "યુનિક શહેર પરિણામ"],
        hi: ["ग्राहक नाम", "शहर (डुप्लिकेट सहित)", "अद्वितीय शहर परिणाम"]
      },
      rows: [
        ["Ajay", "Ahmedabad", "Ahmedabad"],
        ["Bina", "Surat", "Surat"],
        ["Chirag", "Ahmedabad", "Vadodara"],
        ["Dhara", "Vadodara", "Rajkot"],
        ["Elesh", "Surat", ""],
        ["Falguni", "Rajkot", ""]
      ],
      targetCell: "C2",
      formulaApplied: "=UNIQUE(B2:B7)",
      evaluatedResult: "Ahmedabad, Surat, Vadodara, Rajkot (Spilled)",
      highlightCells: ["B2", "B3", "B4", "B5", "B6", "B7"]
    },
    steps: {
      en: [
        "1. Click empty column cell (C2)",
        "2. Type =UNIQUE(B2:B7)",
        "3. Press Enter: Result automatically spills down into multiple cells without duplicates!"
      ],
      gu: [
        "૧. ખાલી સેલ (C2) માં ક્લિક કરો.",
        "૨. =UNIQUE(B2:B7) લખો.",
        "૩. એન્ટર દબાવો: તમામ ડુપ્લીકેટ હટીને નીચે આપોઆપ સ્પિલ થઈને લિસ્ટ તૈયાર થઈ જશે!"
      ],
      hi: [
        "१. खाली सेल (C2) पर क्लिक करें।",
        "२. =UNIQUE(B2:B7) लिखें।",
        "३. Enter दबाएं: सभी डुप्लिकेट नाम हटकर स्वचालित रूप से लिस्ट स्पिल हो जाएगी!"
      ]
    },
    commonErrors: [
      {
        error: "#SPILL!",
        reason: {
          en: "Cells directly below the formula cell contain existing data or text, blocking the spilled array.",
          gu: "ફોર્મુલાની નીચેના સેલમાં પહેલેથી કોઈ લખાણ કે કિંમત લખેલી છે જેથી લિસ્ટ નીચે ફેલાઈ શકતું નથી.",
          hi: "फॉर्मूले के नीचे वाले सेलों में पहले से कुछ लिखा है जिससे रिजल्ट फैल नहीं पा रहा।"
        },
        fix: {
          en: "Clear all data from the cells beneath the UNIQUE formula to give it room to spill.",
          gu: "નીચેના સેલ ખાલી (Delete) કરી દો, પરિણામ આપમેળે આવી જશે.",
          hi: "नीचे के सेलों को खाली कर दें।"
        }
      }
    ],
    proTip: {
      en: "Combine with SORT to get an alphabetized unique list in one go: =SORT(UNIQUE(B2:B100))!",
      gu: "સોર્ટ સાથે જોડીને મૂળાક્ષર (A to Z) ક્રમમાં ગોઠવાયેલ લિસ્ટ મેળવો: =SORT(UNIQUE(B2:B100))!",
      hi: "A से Z क्रम में अद्वितीय सूची पाने के लिए SORT के साथ प्रयोग करें: =SORT(UNIQUE(B2:B100))!"
    }
  },

  {
    id: "filter",
    name: "FILTER",
    category: "arrays",
    difficulty: "intermediate",
    syntax: "=FILTER(array, include, [if_empty])",
    summary: {
      en: "Dynamically filters a table and outputs all matching rows into a new location based on criteria you specify.",
      gu: "આખા ટેબલને ડાયનેમિકલી ફિલ્ટર કરીને શરત મુજબની તમામ રો (હારમાળા) નવી જગ્યાએ આપોઆપ પ્રદર્શિત કરે છે.",
      hi: "पूरी टेबल को गतिशील रूप से फ़िल्टर करके शर्त पूरी करने वाली सभी पंक्तियों को नई जगह दिखाता है।"
    },
    scenario: {
      en: "Pulling a live mini-report of all sales where Amount > 50,000 without manually copying and pasting.",
      gu: "મેન્યુઅલી કોપી-પેસ્ટ કર્યા વગર માત્ર 50,000 થી વધુ વેચાણ ધરાવતા તમામ સોદાઓનું અલગ લાઈવ ટેબલ બનાવવું.",
      hi: "बिना कॉपी-पेस्ट किए 50,000 से अधिक की सभी बिक्री पंक्तियों की अलग से स्वचालित रिपोर्ट तैयार करना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Client Name", "State", "Contract Value (₹)"],
        gu: ["ગ્રાહક નામ", "રાજ્ય", "કોન્ટ્રાક્ટ મૂલ્ય (₹)"],
        hi: ["ग्राहक नाम", "राज्य", "अनुबंध मूल्य (₹)"]
      },
      rows: [
        ["Alpha Infotech", "Gujarat", "85,000"],
        ["Beta Logistics", "Maharashtra", "34,000"],
        ["Gamma Exports", "Gujarat", "1,20,000"],
        ["Delta Textiles", "Rajasthan", "42,000"],
        ["Omega Pharma", "Gujarat", "95,000"]
      ],
      targetCell: "E2",
      formulaApplied: '=FILTER(A2:C6, B2:B6="Gujarat", "No Records")',
      evaluatedResult: "All 3 Gujarat rows spilled dynamically",
      highlightCells: ["A2", "A4", "A6", "B2", "B4", "B6", "C2", "C4", "C6"]
    },
    steps: {
      en: [
        "1. Type =FILTER(",
        "2. array: Full source data to pull (A2:C6)",
        "3. include: Filtering condition: B2:B6=\"Gujarat\"",
        "4. if_empty: Fallback message: \"No Records\"",
        "5. Press Enter. All rows for Gujarat instantly populate across columns E, F, G!"
      ],
      gu: [
        "૧. =FILTER( લખો.",
        "૨. array: આખો મૂળ ડેટા પસંદ કરો (A2:C6)",
        "૩. include: શરત લખો: B2:B6=\"Gujarat\"",
        "૪. if_empty: જો કોઈ રેકોર્ડ ન મળે તો: \"No Records\"",
        "૫. એન્ટર દબાવો. ગુજરાતના ત્રણેય ગ્રાહકોની આખી વિગત તરત જ નવી જગ્યાએ ગોઠવાઈ જશે!"
      ],
      hi: [
        "१. =FILTER( लिखें।",
        "२. array: पूरा स्रोत डेटा चुनें (A2:C6)",
        "३. include: फ़िल्टर शर्त: B2:B6=\"Gujarat\"",
        "४. if_empty: कोई रिकॉर्ड न मिलने पर: \"No Records\"",
        "५. Enter दबाएं। गुजरात की सभी पंक्तियाँ तुरंत प्रदर्शित हो जाएंगी!"
      ]
    },
    commonErrors: [
      {
        error: "#CALC!",
        reason: {
          en: "No rows matched the condition and if_empty argument was omitted.",
          gu: "શરત મુજબ કોઈ ડેટા મળ્યો નથી અને છેલ્લે if_empty મેસેજ લખ્યો નહોતો.",
          hi: "कोई डेटा शर्त से मेल नहीं खाया और if_empty विकल्प नहीं दिया गया।"
        },
        fix: {
          en: "Always supply the third argument: =FILTER(..., ..., \"No Data\").",
          gu: "છેલ્લે હંમેશા \"No Data\" લખો.",
          hi: "तीसरे पैरामीटर में \"डेटा नहीं मिला\" अवश्य लिखें।"
        }
      }
    ],
    proTip: {
      en: "Multiple conditions: Use * for AND, and + for OR: =FILTER(A2:C6, (B2:B6=\"Gujarat\") * (C2:C6>90000)).",
      gu: "એકથી વધુ શરતો માટે AND માટે * અને OR માટે + વાપરો: =FILTER(A2:C6, (B2:B6=\"Gujarat\") * (C2:C6>90000)).",
      hi: "एकाधिक शर्तों के लिए AND के लिए * और OR के लिए + का प्रयोग करें।"
    }
  },

  // ==========================================
  // 7. FINANCIAL FUNCTIONS
  // ==========================================
  {
    id: "pmt",
    name: "PMT",
    category: "finance",
    difficulty: "intermediate",
    syntax: "=PMT(rate, nper, pv, [fv], [type])",
    summary: {
      en: "Calculates the exact monthly installment (EMI) for a loan based on constant payments and a fixed interest rate.",
      gu: "હોમ લોન, કાર લોન કે પર્સનલ લોન માટે દર મહિને ભરવાનો થતો હપ્તો (EMI) ની ચોક્કસ ગણતરી કરે છે.",
      hi: "होम लोन या कार लोन के लिए प्रति माह भुगतान की जाने वाली समान मासिक किस्त (EMI) की सटीक गणना करता है।"
    },
    scenario: {
      en: "Calculating monthly EMI on a ₹5,00,000 car loan at 10.5% annual interest for 5 years (60 months).",
      gu: "રૂ. 5,00,000 ની કાર લોન પર 10.5% વાર્ષિક વ્યાજ દરે 5 વર્ષ (60 મહિના) માટે દર મહિને કેટલો હપ્તો (EMI) આવે તે શોધવું.",
      hi: "5,00,000 रुपये के कार लोन पर 10.5% वार्षिक ब्याज दर से 5 वर्षों (60 माह) के लिए मासिक ईएमआई निकालना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Parameter", "Value", "Notes"],
        gu: ["વિગત (Parameter)", "કિંમત (Value)", "સમજૂતી નોંધ"],
        hi: ["विवरण (Parameter)", "मान (Value)", "टिप्पणी"]
      },
      rows: [
        ["Loan Amount (PV)", "₹ 5,00,000", "Principal Borrowed"],
        ["Annual Interest Rate", "10.50%", "Divide by 12 for monthly rate"],
        ["Tenure (Years)", "5", "Multiply by 12 = 60 months"],
        ["Monthly EMI Output", "₹ 10,747", "=PMT(B3/12, B4*12, -B2)"]
      ],
      targetCell: "B5",
      formulaApplied: "=PMT(10.5%/12, 5*12, -500000)",
      evaluatedResult: "₹ 10,747",
      highlightCells: ["B2", "B3", "B4", "B5"]
    },
    steps: {
      en: [
        "1. Write =PMT(",
        "2. rate: Annual rate divided by 12 for monthly -> 10.5%/12",
        "3. nper: Total months -> 5*12 (or 60)",
        "4. pv: Loan amount with negative sign -> -500000 (negative so result displays as positive cash flow)",
        "5. Press Enter: Exact monthly EMI is ₹10,747."
      ],
      gu: [
        "૧. =PMT( લખો.",
        "૨. rate: વાર્ષિક વ્યાજ દરને 12 વડે ભાગો -> 10.5%/12",
        "૩. nper: કુલ મહિના -> 5*12 (એટલે કે 60)",
        "૪. pv: લોનની રકમ આગળ માઇનસ (-) લગાવો -> -500000 (જેથી EMI ધન સંખ્યામાં આવે)",
        "૫. એન્ટર દબાવો: દર મહિનાનો હપ્તો ₹ 10,747 આવશે."
      ],
      hi: [
        "१. =PMT( लिखें।",
        "२. rate: वार्षिक ब्याज दर को 12 से भाग दें -> 10.5%/12",
        "३. nper: कुल महीने -> 5*12 = 60",
        "૪. pv: लोन राशि के आगे माइनस (-) लगाएं -> -500000",
        "५. Enter दबाएं: मासिक ईएमआई ₹ 10,747 प्राप्त होगी।"
      ]
    },
    commonErrors: [
      {
        error: "Absurdly huge EMI figure",
        reason: {
          en: "Forgot to divide annual interest rate by 12 or forgot to multiply years by 12.",
          gu: "વાર્ષિક વ્યાજ દરને 12 વડે ભાગવાનું અથવા વર્ષને મહિનામાં (ગુણ્યા 12) ફેરવવાનું ભૂલી જવું.",
          hi: "वार्षिक ब्याज दर को 12 से भाग देना या वर्षों को 12 से गुणा करना भूल जाना।"
        },
        fix: {
          en: "Always ensure interest rate and time periods are both in MONTHS.",
          gu: "વ્યાજ દર અને સમયગાળો બંને માસિક (Monthly) એકમમાં રાખો.",
          hi: "हमेशा दर और समय दोनों को मासिक इकाइयों में रखें।"
        }
      }
    ],
    proTip: {
      en: "Use PPMT to see how much of each EMI goes toward the loan principal, and IPMT to see how much goes toward pure interest!",
      gu: "EMI માંથી મુદ્દલ કેટલી કપાય છે તે જાણવા PPMT અને વ્યાજ કેટલું કપાય છે તે જાણવા IPMT ફોર્મુલા વાપરી શકાય!",
      hi: "मूलधन जानने के लिए PPMT और शुद्ध ब्याज जानने के लिए IPMT फ़ॉर्मूले का प्रयोग करें!"
    }
  },

  // ==========================================
  // 8. STATISTICAL: AVERAGE & AVERAGEIF
  // ==========================================
  {
    id: "average",
    name: "AVERAGE",
    category: "stats",
    difficulty: "beginner",
    syntax: "=AVERAGE(number1, [number2], ...)",
    summary: {
      en: "Calculates the mathematical mean (average) of a group of numbers, automatically ignoring text.",
      gu: "આપેલ સંખ્યાઓની સરેરાશ (Average) ની ગણતરી કરે છે અને ટેક્સ્ટને આપોઆપ અવગણે છે.",
      hi: "संख्याओं के समूह का अंकगणितीय औसत (Mean) निकालता है और टेक्स्ट को छोड़ देता है।"
    },
    scenario: {
      en: "Finding the average monthly sales or student class average mark.",
      gu: "વિદ્યાર્થીઓના વર્ગની સરેરાશ ટકાવારી અથવા દુકાનનું સરેરાશ દૈનિક વેચાણ શોધવું.",
      hi: "कक्षा के विद्यार्थियों का औसत अंक या दुकान की औसत दैनिक बिक्री ज्ञात करना।"
    },
    table: {
      columns: ["A", "B"],
      headers: {
        en: ["Student Name", "Exam Marks (Out of 100)"],
        gu: ["વિદ્યાર્થીનું નામ", "પરીક્ષા ગુણ (૧૦૦ માંથી)"],
        hi: ["छात्र का नाम", "परीक्षा अंक (100 में से)"]
      },
      rows: [
        ["Aryan Patel", "85"],
        ["Bhoomi Joshi", "92"],
        ["Chintan Shah", "74"],
        ["Drashti Dave", "89"],
        ["Ekansh Trivedi", "65"]
      ],
      targetCell: "B7",
      formulaApplied: "=AVERAGE(B2:B6)",
      evaluatedResult: "81",
      highlightCells: ["B2", "B3", "B4", "B5", "B6"]
    },
    steps: {
      en: [
        "1. Click the target cell below numbers (B7).",
        "2. Type =AVERAGE(B2:B6)",
        "3. Press Enter: Gives 81 (total 405 divided by 5)."
      ],
      gu: [
        "૧. પરિણામના સેલ (B7) માં ક્લિક કરો.",
        "૨. =AVERAGE(B2:B6) લખો.",
        "૩. એન્ટર દબાવો: સરેરાશ 81 આવશે (કુલ 405 ભાગ્યા 5)."
      ],
      hi: [
        "१. B7 सेल पर क्लिक करें।",
        "२. =AVERAGE(B2:B6) लिखें।",
        "३. Enter दबाएं: औसत 81 प्राप्त होगा।"
      ]
    },
    commonErrors: [
      {
        error: "#DIV/0!",
        reason: {
          en: "All cells in the range are blank or contain only text strings.",
          gu: "પસંદ કરેલ તમામ સેલ ખાલી છે અથવા માત્ર અક્ષરો (ટેક્સ્ટ) છે.",
          hi: "रेंज के सभी सेल खाली हैं या उनमें केवल टेक्स्ट है।"
        },
        fix: {
          en: "Ensure the range contains at least one numeric value.",
          gu: "રેન્જમાં ઓછામાં ઓછો એક નંબર હોવો જરૂરી છે.",
          hi: "रेंज में कम से कम एक संख्या अवश्य होनी चाहिए।"
        }
      }
    ],
    proTip: {
      en: "AVERAGE ignores empty cells, but it DOES count cells containing 0! If 0 should not lower the average, use AVERAGEIF(B2:B6, \">0\").",
      gu: "AVERAGE ખાલી સેલ ગણતું નથી, પણ જો સેલમાં 0 લખેલું હોય તો તેને ગણે છે! જો 0 ને બાદ કરવો હોય તો =AVERAGEIF(B2:B6, \">0\") વાપરો.",
      hi: "AVERAGE खाली सेलों को छोड़ देता है, लेकिन 0 लिखे सेल को जोड़ता है! यदि 0 छोड़ना हो तो =AVERAGEIF(B2:B6, \">0\") का प्रयोग करें।"
    }
  },

  // ==========================================
  // 9. STATISTICAL: MAX, MIN, LARGE, SMALL
  // ==========================================
  {
    id: "max-min",
    name: "MAX & MIN",
    category: "stats",
    difficulty: "beginner",
    syntax: "=MAX(range)  |  =MIN(range)",
    summary: {
      en: "MAX finds the highest numeric value in a range; MIN finds the lowest numeric value.",
      gu: "MAX સૌથી મોટો નંબર (સૌથી વધુ કિંમત) શોધે છે અને MIN સૌથી નાનો નંબર (સૌથી ઓછી કિંમત) શોધે છે.",
      hi: "MAX सबसे बड़ी संख्या खोजता है और MIN सबसे छोटी संख्या ढूंढता है।"
    },
    scenario: {
      en: "Finding the top highest sales figure and lowest expense in a quarterly review.",
      gu: "ત્રિમાસિક હિસાબમાં સૌથી વધુ વેચાણ (Highest Sales) અને સૌથી ઓછો ખર્ચ (Lowest Expense) શોધવો.",
      hi: "तिमाही समीक्षा में सबसे अधिक बिक्री और सबसे कम खर्च का पता लगाना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Sales Representative", "Zone", "Quarterly Sales (₹)"],
        gu: ["સેલ્સમેન", "ઝોન", "ત્રિમાસિક વેચાણ (₹)"],
        hi: ["विक्रेता", "ज़ोन", "तिमाही बिक्री (₹)"]
      },
      rows: [
        ["Rohan Mehta", "North", "4,20,000"],
        ["Sonal Varma", "West", "6,80,000"],
        ["Tushar Joshi", "South", "3,10,000"],
        ["Urvi Shah", "East", "5,40,000"]
      ],
      targetCell: "C6",
      formulaApplied: "=MAX(C2:C5)",
      evaluatedResult: "6,80,000 (Min: 3,10,000)",
      highlightCells: ["C3", "C4"]
    },
    steps: {
      en: [
        "1. For highest sales: =MAX(C2:C5) -> 6,80,000",
        "2. For lowest sales: =MIN(C2:C5) -> 3,10,000"
      ],
      gu: [
        "૧. સૌથી વધુ વેચાણ માટે: =MAX(C2:C5) -> 6,80,000",
        "૨. સૌથી ઓછા વેચાણ માટે: =MIN(C2:C5) -> 3,10,000"
      ],
      hi: [
        "१. अधिकतम बिक्री के लिए: =MAX(C2:C5) -> 6,80,000",
        "२. न्यूनतम बिक्री के लिए: =MIN(C2:C5) -> 3,10,000"
      ]
    },
    commonErrors: [
      {
        error: "Returns 0 unexpectedly",
        reason: {
          en: "Numbers are stored as text.",
          gu: "સંખ્યાઓ ટેક્સ્ટ સ્વરૂપે સંગ્રહાયેલી છે.",
          hi: "संख्याएं टेक्स्ट के रूप में संग्रहित हैं।"
        },
        fix: {
          en: "Select cells, click warning diamond icon -> Convert to Number.",
          gu: "સેલ પસંદ કરી 'Convert to Number' પર ક્લિક કરો.",
          hi: "सेल चुनकर 'Convert to Number' करें।"
        }
      }
    ],
    proTip: {
      en: "Need the 2nd or 3rd highest? Use =LARGE(C2:C5, 2)! Need the 2nd lowest? Use =SMALL(C2:C5, 2)!",
      gu: "જો બીજા કે ત્રીજા નંબરની સૌથી મોટી રકમ શોધવી હોય તો =LARGE(C2:C5, 2) વાપરો! તેવી જ રીતે નાની રકમ માટે =SMALL વાપરો!",
      hi: "यदि दूसरी या तीसरी सबसे बड़ी संख्या चाहिए तो =LARGE(C2:C5, 2) और सबसे छोटी के लिए =SMALL का उपयोग करें!"
    }
  },

  // ==========================================
  // 10. MATH: ROUND, ROUNDUP, ROUNDDOWN
  // ==========================================
  {
    id: "round",
    name: "ROUND / ROUNDUP / ROUNDDOWN",
    category: "math",
    difficulty: "beginner",
    syntax: "=ROUND(number, num_digits)  |  =ROUNDUP(number, num_digits)  |  =ROUNDDOWN(number, num_digits)",
    summary: {
      en: "Rounds a number to a specified number of decimal places (e.g. 2 decimals for currency, or 0 for whole rupees).",
      gu: "દશાંશ ચિહ્ન (પોઈન્ટ) પછીના આંકડાઓને નિયત દશાંશ સુધી અથવા પૂર્ણ રૂપિયામાં રાઉન્ડ ફિગર (Round Figure) કરે છે.",
      hi: "दशमलव के बाद के अंकों को इच्छित स्थानों तक या पूरे रुपयों में राउंड फिगर (पूर्णांक) बनाता है।"
    },
    scenario: {
      en: "Billing & GST calculation: Rounding off GST amounts like ₹ 1,452.78 to whole rupees ₹ 1,453.",
      gu: "જીએસટી અને બિલિંગ: બિલની રકમ જેમ કે રૂ. 1,452.78 ને રાઉન્ડ ફિગર કરી રૂ. 1,453 કરવી.",
      hi: "बिलिंग और जीएसटी: दशमलव राशि 1,452.78 को पूर्ण रुपए 1,453 में राउंड ऑफ करना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Raw Amount (₹)", "Formula Applied", "Rounded Result (₹)"],
        gu: ["મૂળ રકમ (₹)", "લાગુ કરેલ ફોર્મુલા", "રાઉન્ડ ફિગર પરિણામ (₹)"],
        hi: ["मूल राशि (₹)", "लागू फ़ॉर्मूला", "राउंड फिगर परिणाम (₹)"]
      },
      rows: [
        ["1452.78", "=ROUND(A2, 0)", "1,453"],
        ["1452.34", "=ROUND(A3, 0)", "1,452"],
        ["987.1234", "=ROUND(A4, 2)", "987.12"],
        ["124.10", "=ROUNDUP(A5, 0)", "125"]
      ],
      targetCell: "C2",
      formulaApplied: "=ROUND(A2, 0)",
      evaluatedResult: "1,453",
      highlightCells: ["A2", "C2"]
    },
    steps: {
      en: [
        "1. In result cell, type =ROUND(A2, 0)",
        "2. 0 means round to nearest whole integer with zero decimals.",
        "3. Press Enter: 1452.78 rounds up to 1453."
      ],
      gu: [
        "૧. સેલમાં =ROUND(A2, 0) લખો.",
        "૨. 0 એટલે દશાંશ વગર પૂર્ણાંક સંખ્યામાં ફેરવવું.",
        "૩. એન્ટર દબાવો: 1452.78 નું 1453 થઈ જશે."
      ],
      hi: [
        "१. =ROUND(A2, 0) लिखें।",
        "२. 0 का अर्थ है बिना दशमलव के निकटतम पूर्णांक बनाना।",
        "३. Enter दबाएं: 1452.78 बदलकर 1453 हो जाएगा।"
      ]
    },
    commonErrors: [
      {
        error: "Formatting vs Rounding issue",
        reason: {
          en: "Using the Ribbon decrease decimals button only changes visual display, but keeps full decimals in background calculations!",
          gu: "રિબન બટનથી દશાંશ ઘટાડવાથી માત્ર દેખાવ બદલાય છે, પાછળની વાસ્તવિક ગણતરીમાં પોઈન્ટ રહે જ છે!",
          hi: "रिबन बटन से दशमलव हटाने पर सिर्फ दृश्य बदलता है, वास्तविक गणना में दशमलव बना रहता है!"
        },
        fix: {
          en: "Always use the =ROUND() formula so that sum totals match the printed invoice precisely.",
          gu: "હિસાબમાં સાચો મેળ બેસાડવા હંમેશા =ROUND() ફોર્મુલા જ વાપરો.",
          hi: "बिल में सटीक जोड़ के लिए हमेशा =ROUND() फॉर्मूला ही प्रयोग करें।"
        }
      }
    ],
    proTip: {
      en: "Round to nearest multiple of 10 or 100: Use negative digits! =ROUND(1452, -1) gives 1450; =ROUND(1452, -2) gives 1500!",
      gu: "નજીકના 10 કે 100 ના ગુણાંકમાં રાઉન્ડ કરવા માટે માઇનસ વાપરો: =ROUND(1452, -1) -> 1450, =ROUND(1452, -2) -> 1500!",
      hi: "निकटतम 10 या 100 में राउंड करने के लिए ऋणात्मक संख्या दें: =ROUND(1452, -1) -> 1450, =ROUND(1452, -2) -> 1500!"
    }
  },

  // ==========================================
  // 11. TEXT: LEFT, RIGHT, MID & LEN
  // ==========================================
  {
    id: "left-right-mid",
    name: "LEFT / RIGHT / MID",
    category: "text",
    difficulty: "intermediate",
    syntax: "=LEFT(text, [num_chars])  |  =RIGHT(text, [num_chars])  |  =MID(text, start_num, num_chars)",
    summary: {
      en: "Extracts a specific portion of text from the beginning (LEFT), end (RIGHT), or middle (MID) of a cell string.",
      gu: "સેલમાં રહેલા લખાણમાંથી શરૂઆતના અક્ષરો (LEFT), પાછળના અક્ષરો (RIGHT) કે વચ્ચેથી અમુક અક્ષરો (MID) કાપીને અલગ કરે છે.",
      hi: "सेल के टेक्स्ट में से शुरुआत के अक्षर (LEFT), अंत के अक्षर (RIGHT) या बीच के अक्षर (MID) काटकर अलग करता है।"
    },
    scenario: {
      en: "Extracting PAN number middle 4 letters or extracting State Code from GSTIN (first 2 digits, e.g. '24' for Gujarat).",
      gu: "જીએસટી નંબર (GSTIN) માંથી આગળના ૨ આંકડા પરથી રાજ્ય કોડ અલગ કરવો (જેમ કે ગુજરાત માટે '24').",
      hi: "जीएसटी नंबर (GSTIN) में से पहले दो अंक निकालकर राज्य कोड अलग करना (जैसे गुजरात के लिए '24')।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["GSTIN Number", "Formula Used", "Extracted Code"],
        gu: ["જીએસટી નંબર (GSTIN)", "ફોર્મુલા", "અલગ થયેલ કોડ"],
        hi: ["जीएसटी नंबर", "लागू फ़ॉर्मूला", "निकाला गया कोड"]
      },
      rows: [
        ["24AAACG1234F1Z5", "=LEFT(A2, 2)", "24 (Gujarat)"],
        ["27BBBDH5678K1Z2", "=LEFT(A3, 2)", "27 (Maharashtra)"],
        ["24AAACG1234F1Z5", "=MID(A2, 3, 10)", "AAACG1234F (PAN)"],
        ["24AAACG1234F1Z5", "=RIGHT(A2, 3)", "1Z5 (Suffix)"]
      ],
      targetCell: "C2",
      formulaApplied: "=LEFT(A2, 2)",
      evaluatedResult: "24",
      highlightCells: ["A2", "C2"]
    },
    steps: {
      en: [
        "1. For first 2 characters: =LEFT(A2, 2) -> 24",
        "2. For PAN (characters starting at position 3 for length 10): =MID(A2, 3, 10) -> AAACG1234F",
        "3. For last 3 characters: =RIGHT(A2, 3) -> 1Z5"
      ],
      gu: [
        "૧. આગળના ૨ અક્ષર માટે: =LEFT(A2, 2) -> 24",
        "૨. વચ્ચેના પાન કાર્ડ માટે (૩જા અક્ષરથી શરૂ કરી ૧૦ અક્ષર): =MID(A2, 3, 10) -> AAACG1234F",
        "૩. પાછળના ૩ અક્ષર માટે: =RIGHT(A2, 3) -> 1Z5"
      ],
      hi: [
        "१. शुरुआत के २ अक्षरों के लिए: =LEFT(A2, 2) -> 24",
        "२. पैन नंबर के लिए (तीसरे अक्षर से १० अक्षर): =MID(A2, 3, 10) -> AAACG1234F",
        "३. अंत के ३ अक्षरों के लिए: =RIGHT(A2, 3) -> 1Z5"
      ]
    },
    commonErrors: [
      {
        error: "Numbers returned as Text string",
        reason: {
          en: "LEFT, RIGHT, and MID always return text data type, even if the extracted characters are digits.",
          gu: "આ ફંકશનોથી અલગ થયેલા નંબરો ટેક્સ્ટ સ્વરૂપે આવે છે, જેના પર સીધો સરવાળો થતો નથી.",
          hi: "निकाले गए अंक टेक्स्ट प्रारूप में होते हैं।"
        },
        fix: {
          en: "Convert to number by multiplying by 1 or using =VALUE(LEFT(A2, 2)).",
          gu: "આગળ VALUE લગાવી દો: =VALUE(LEFT(A2, 2)) અથવા * 1 કરો.",
          hi: "=VALUE(LEFT(A2, 2)) का प्रयोग करें।"
        }
      }
    ],
    proTip: {
      en: "Combine with LEN and FIND to extract dynamic first names: =LEFT(A2, FIND(\" \", A2) - 1) — extracts first name regardless of length!",
      gu: "FIND સાથે જોડીને ગમે તેટલા લાંબા નામમાંથી માત્ર પ્રથમ નામ અલગ કરો: =LEFT(A2, FIND(\" \", A2) - 1)!",
      hi: "FIND के साथ जोड़कर किसी भी नाम में से सिर्फ पहला नाम अलग करें: =LEFT(A2, FIND(\" \", A2) - 1)!"
    }
  },

  // ==========================================
  // 12. DATE: TODAY & NOW
  // ==========================================
  {
    id: "today-now",
    name: "TODAY & NOW",
    category: "date",
    difficulty: "beginner",
    syntax: "=TODAY()  |  =NOW()",
    summary: {
      en: "TODAY returns the current date; NOW returns the current date and precise timestamp. Both update automatically every time the sheet recalculates.",
      gu: "TODAY આજની તારીખ આપે છે અને NOW આજની તારીખ સાથે વર્તમાન સમય (Time) પણ આપે છે. જ્યારે શીટ ખોલો ત્યારે આપોઆપ અપડેટ થાય છે.",
      hi: "TODAY आज की वर्तमान तारीख और NOW तारीख के साथ वर्तमान समय भी दिखाता है। यह हमेशा स्वतः अपडेट होता है।"
    },
    scenario: {
      en: "Calculating overdue invoice days: =TODAY() - Due_Date tells how many days a payment is delayed.",
      gu: "પેન્ડિંગ બિલોના બાકી દિવસો ગણવા: =TODAY() - બિલની તારીખ લખવાથી બિલ કેટલા દિવસ મોડું થયું છે તે લાઈવ દેખાય છે.",
      hi: "बकाया बिलों के दिन निकालना: =TODAY() - बिल की तारीख से पता चलता है कि भुगतान में कितने दिन की देरी हुई है।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Function", "Syntax", "Live Result Output"],
        gu: ["ફંકશન", "લખવાની રીત", "લાઈવ પરિણામ"],
        hi: ["फ़ंक्शन", "लिखने का तरीका", "लाइव परिणाम"]
      },
      rows: [
        ["Current Date", "=TODAY()", "Today's Date (e.g. 05-Oct-2026)"],
        ["Date & Time", "=NOW()", "05-Oct-2026 11:15 AM"],
        ["Days Overdue", "=TODAY() - A4", "18 Days Overdue"]
      ],
      targetCell: "C2",
      formulaApplied: "=TODAY()",
      evaluatedResult: "05-Oct-2026",
      highlightCells: ["C2", "C3"]
    },
    steps: {
      en: [
        "1. Write =TODAY() in cell (leave brackets empty).",
        "2. Press Enter to get today's date.",
        "3. For timestamp: Type =NOW()"
      ],
      gu: [
        "૧. સેલમાં =TODAY() લખો (કૌંસ ખાલી રાખો).",
        "૨. એન્ટર દબાવો: આજની તારીખ આવી જશે.",
        "૩. સમય સાથે લાવવા માટે =NOW() લખો."
      ],
      hi: [
        "१. सेल में =TODAY() लिखें (ब्रैकेट खाली रखें)।",
        "२. Enter दबाएं: आज की तारीख आ जाएगी।",
        "३. समय के लिए =NOW() लिखें।"
      ]
    },
    commonErrors: [
      {
        error: "Static date expected but date changed tomorrow",
        reason: {
          en: "TODAY() is volatile; it recalculates tomorrow and updates to tomorrow's date.",
          gu: "TODAY() વોલેટાઈલ છે, આવતીકાલે ફાઈલ ખોલશો તો આવતીકાલની તારીખ આવી જશે.",
          hi: "TODAY() स्वतः अपडेट होता है, इसलिए कल खुलने पर कल की तारीख दिखाएगा।"
        },
        fix: {
          en: "To freeze current date permanently as static value, press keyboard shortcut: Ctrl + ;",
          gu: "જો તારીખ કાયમી ફિક્સ રાખવી હોય તો કીબોર્ડ શોર્ટકટ દબાવો: Ctrl + ; (સેમિકોલન).",
          hi: "स्थिर तारीख दर्ज करने के लिए कीबोर्ड शॉर्टकट दबाएं: Ctrl + ;"
        }
      }
    ],
    proTip: {
      en: "Add or subtract days easily: =TODAY() + 30 calculates the exact payment deadline 30 days from now!",
      gu: "તારીખમાં દિવસો ઉમેરવા સરળ છે: =TODAY() + 30 લખવાથી આજથી ૩૦ દિવસ પછીની તારીખ આપોઆપ આવી જશે!",
      hi: "दिन जोड़ना आसान है: =TODAY() + 30 लिखने से आज से ३० दिन बाद की तारीख मिल जाएगी!"
    }
  },

  // ==========================================
  // 13. MODERN ARRAYS: SORT & SEQUENCE
  // ==========================================
  {
    id: "sort",
    name: "SORT",
    category: "arrays",
    difficulty: "intermediate",
    syntax: "=SORT(array, [sort_index], [sort_order], [by_col])",
    summary: {
      en: "Sorts the contents of a range or array dynamically without touching the original raw data.",
      gu: "મૂળ ડેટાને છેડ્યા વગર નવી જગ્યાએ ડેટાને ચડતા (A-Z) કે ઉતરતા (Z-A) ક્રમમાં આપોઆપ સોર્ટ કરે છે.",
      hi: "मूल डेटा को बदले बिना नई जगह पर डेटा को आरोही (A-Z) या अवरोही (Z-A) क्रम में स्वतः क्रमबद्ध करता है।"
    },
    scenario: {
      en: "Displaying a live leaderboard of salespeople sorted automatically from highest sales to lowest.",
      gu: "સૌથી વધુ વેચાણ કરનાર સેલ્સમેન સૌથી ઉપર આવે તેવું ઓટોમેટિક સોર્ટ થતું લાઈવ લીડરબોર્ડ બનાવવું.",
      hi: "उच्चतम बिक्री करने वाले विक्रेताओं का स्वतः क्रमबद्ध होने वाला लाइव लीडरबोर्ड तैयार करना।"
    },
    table: {
      columns: ["A", "B"],
      headers: {
        en: ["Salesperson", "Revenue (₹)"],
        gu: ["સેલ્સમેન", "કુલ વેચાણ (₹)"],
        hi: ["विक्रेता", "कुल बिक्री (₹)"]
      },
      rows: [
        ["Jayesh", "42,000"],
        ["Mehul", "98,000"],
        ["Paresh", "65,000"],
        ["Tarun", "81,000"]
      ],
      targetCell: "D2",
      formulaApplied: "=SORT(A2:B5, 2, -1)",
      evaluatedResult: "Mehul (98k), Tarun (81k), Paresh (65k), Jayesh (42k)",
      highlightCells: ["A2", "B5"]
    },
    steps: {
      en: [
        "1. In clean destination cell (D2), type =SORT(",
        "2. array: Select table (A2:B5)",
        "3. sort_index: Column 2 (Revenue)",
        "4. sort_order: -1 for descending (highest to lowest), 1 for ascending",
        "5. Press Enter: Clean sorted ranking spills down instantly!"
      ],
      gu: [
        "૧. ખાલી સેલ (D2) માં =SORT( લખો.",
        "૨. array: આખું ટેબલ પસંદ કરો (A2:B5)",
        "૩. sort_index: કોલમ 2 (વેચાણ રકમ)",
        "૪. sort_order: સૌથી વધુ રકમ ઉપર રાખવા -1 લખો (ઉતરતો ક્રમ)",
        "૫. એન્ટર દબાવો: સોર્ટ થયેલું લીડરબોર્ડ તરત જ ગોઠવાઈ જશે!"
      ],
      hi: [
        "१. =SORT( लिखें।",
        "२. array: टेबल रेंज चुनें (A2:B5)",
        "३. sort_index: कॉलम 2 (बिक्री राशि)",
        "४. sort_order: घटते क्रम के लिए -1 लिखें",
        "५. Enter दबाएं: क्रमबद्ध टेबल तुरंत तैयार हो जाएगी!"
      ]
    },
    commonErrors: [
      {
        error: "#SPILL!",
        reason: {
          en: "Destination cells are blocked by existing text or numbers.",
          gu: "જ્યાં સોર્ટ થઈને લિસ્ટ આવવાનું છે તે સેલમાં પહેલાથી કોઈ કિંમત લખેલી છે.",
          hi: "परिणाम वाले सेलों में पहले से कुछ लिखा हुआ है।"
        },
        fix: {
          en: "Delete any data in the spill zone.",
          gu: "નીચેના સેલ ખાલી કરી દો.",
          hi: "नीचे के सेलों को खाली करें।"
        }
      }
    ],
    proTip: {
      en: "Combine FILTER and SORT: =SORT(FILTER(A2:B50, B2:B50>50000), 2, -1) — filters AND sorts in a single lightning-fast formula!",
      gu: "FILTER અને SORT બંને સાથે વાપરો: 50,000 થી વધુ વેચાણ ફિલ્ટર પણ થશે અને સૌથી વધુથી ઓછા ક્રમમાં સોર્ટ પણ થઈ જશે!",
      hi: "FILTER और SORT एक साथ मिलाकर एकल फ़ॉर्मूले से फ़िल्टर और सॉर्ट दोनों करें!"
    }
  },

  // ==========================================
  // 14. MODERN EXCEL 365: TEXTSPLIT
  // ==========================================
  {
    id: "textsplit",
    name: "TEXTSPLIT",
    category: "text",
    difficulty: "advanced",
    syntax: "=TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])",
    summary: {
      en: "Splits a single text string into multiple adjacent cells across columns or rows using a delimiter (comma, space, dash) without Text to Columns wizard.",
      gu: "એક જ સેલમાં લખેલા લખાણને અલ્પવિરામ કે સ્પેસના આધારે અલગ અલગ કોલમ કે રો માં આપોઆપ વહેંચી દે છે.",
      hi: "एक ही सेल के टेक्स्ट को कॉमा या स्पेस के आधार पर अलग-अलग कॉलम या पंक्तियों में स्वतः विभाजित कर देता है।"
    },
    scenario: {
      en: "Splitting a comma-separated list of tags, skills, or full address into separate cells dynamically.",
      gu: "એક સેલમાં લખેલા ગ્રાહકના સરનામા કે સ્કિલ્સ (\"Excel, Python, Accounting\") ને અલગ અલગ સેલમાં વહેંચવું.",
      hi: "\"Excel, Python, Accounting\" जैसी कॉमा से अलग की गई सूची को अलग-अलग सेल में बांटना।"
    },
    table: {
      columns: ["A", "B", "C", "D"],
      headers: {
        en: ["Input Text", "Extracted 1", "Extracted 2", "Extracted 3"],
        gu: ["મૂળ લખાણ", "અલગ ભાગ ૧", "અલગ ભાગ ૨", "અલગ ભાગ ૩"],
        hi: ["मूल टेक्स्ट", "पहला भाग", "दूसरा भाग", "तीसरा भाग"]
      },
      rows: [
        ["Rajesh, Patel, Ahmedabad", "Rajesh", "Patel", "Ahmedabad"],
        ["Sales, Marketing, HR", "Sales", "Marketing", "HR"]
      ],
      targetCell: "B2",
      formulaApplied: '=TEXTSPLIT(A2, ", ")',
      evaluatedResult: "Rajesh | Patel | Ahmedabad (Spilled across B2:D2)",
      highlightCells: ["A2", "B2", "C2", "D2"]
    },
    steps: {
      en: [
        "1. In cell B2, write =TEXTSPLIT(",
        "2. text: Select raw text cell (A2)",
        "3. col_delimiter: Provide delimiter in quotes: \", \"",
        "4. Press Enter: The text immediately spills into B2, C2, and D2 horizontally!"
      ],
      gu: [
        "૧. સેલ B2 માં =TEXTSPLIT( લખો.",
        "૨. text: મૂળ લખાણ વાળો સેલ સિલેક્ટ કરો (A2)",
        "૩. col_delimiter: છૂટું પાડવાનું ચિહ્ન આપો: \", \"",
        "૪. એન્ટર કરો: લખાણ આપમેળે B2, C2 અને D2 માં વહેંચાઈ જશે!"
      ],
      hi: [
        "१. =TEXTSPLIT( लिखें।",
        "२. मूल टेक्स्ट वाला सेल चुनें (A2)।",
        "३. विभाजक (Delimiter) उद्धरण चिह्नों में दें: \", \"",
        "४. Enter दबाएं: टेक्स्ट तुरंत अलग-अलग सेल में विभाजित हो जाएगा!"
      ]
    },
    commonErrors: [
      {
        error: "#SPILL!",
        reason: {
          en: "Cells to the right are occupied by text.",
          gu: "જમણી બાજુના સેલમાં પહેલાથી કોઈ લખાણ છે.",
          hi: "दाईं ओर के सेल खाली नहीं हैं।"
        },
        fix: {
          en: "Clear cells B2:D2 to allow the formula to spill.",
          gu: "જમણી બાજુના સેલ ખાલી કરી દો.",
          hi: "दाएं सेल खाली करें।"
        }
      }
    ],
    proTip: {
      en: "Want to split across rows downwards instead of columns? Use row_delimiter: =TEXTSPLIT(A2, , \", \")!",
      gu: "જો આડી કોલમને બદલે ઊભી રો માં લિસ્ટ નીચે ફેલાવવું હોય તો: =TEXTSPLIT(A2, , \", \") વાપરો!",
      hi: "कॉलम के बजाय पंक्तियों में नीचे फैलाने के लिए: =TEXTSPLIT(A2, , \", \") का प्रयोग करें!"
    }
  },

  // ==========================================
  // 15. MODERN EXCEL 365: VSTACK & HSTACK
  // ==========================================
  {
    id: "vstack",
    name: "VSTACK / HSTACK",
    category: "arrays",
    difficulty: "advanced",
    syntax: "=VSTACK(array1, [array2], ...)  |  =HSTACK(array1, [array2], ...)",
    summary: {
      en: "Vertically (VSTACK) or horizontally (HSTACK) combines multiple tables or ranges into a single unified master dataset.",
      gu: "અલગ અલગ શીટ કે ટેબલના ડેટાને એકબીજાની નીચે (ઊભા VSTACK) કે બાજુમાં (આડા HSTACK) જોડીને એક મોટો માસ્ટર ડેટા બનાવે છે.",
      hi: "अलग-अलग शीट्स या टेबल्स के डेटा को एक दूसरे के नीचे (VSTACK) जोड़कर एक मास्टर टेबल बनाता है।"
    },
    scenario: {
      en: "Consolidating sales tables from 3 different branch sheets (Ahmedabad, Surat, Vadodara) into one master report.",
      gu: "૩ અલગ અલગ શાખાઓ (અમદાવાદ, સુરત, વડોદરા) ના સેલ્સ રિપોર્ટને એક જ ક્લિકમાં એક મોટા માસ્ટર લિસ્ટમાં ભેગા કરવા.",
      hi: "तीन अलग-अलग शाखाओं के डेटा को कॉपी-पेस्ट किए बिना एक ही मास्टर रिपोर्ट में जोड़ना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Branch", "Quarter", "Consolidated Revenue (₹)"],
        gu: ["શાખા", "ક્વાર્ટર", "કુલ એકત્રિત વેચાણ (₹)"],
        hi: ["शाखा", "तिमाही", "कुल एकीकृत बिक्री (₹)"]
      },
      rows: [
        ["Ahmedabad", "Q1", "1,20,000"],
        ["Ahmedabad", "Q2", "1,45,000"],
        ["Surat", "Q1", "95,000"],
        ["Surat", "Q2", "1,10,000"]
      ],
      targetCell: "A6",
      formulaApplied: "=VSTACK(Sheet1!A2:C3, Sheet2!A2:C3)",
      evaluatedResult: "All 4 rows combined dynamically into one table",
      highlightCells: ["A2", "A5"]
    },
    steps: {
      en: [
        "1. In master sheet, type =VSTACK(",
        "2. Select first table range: Sheet1!A2:C3",
        "3. Type comma, then select second table range: Sheet2!A2:C3",
        "4. Press Enter: Both tables are instantly stacked on top of each other without copy-pasting!"
      ],
      gu: [
        "૧. માસ્ટર શીટમાં =VSTACK( લખો.",
        "૨. પહેલી શાખાનું ટેબલ સિલેક્ટ કરો: Sheet1!A2:C3",
        "૩. અલ્પવિરામ કરી બીજી શાખાનું ટેબલ સિલેક્ટ કરો: Sheet2!A2:C3",
        "૪. એન્ટર દબાવો: બંને ટેબલ આપોઆપ એકબીજાની નીચે જોડાઈને માસ્ટર લિસ્ટ બની જશે!"
      ],
      hi: [
        "१. =VSTACK( लिखें।",
        "२. पहली शीट की टेबल चुनें: Sheet1!A2:C3",
        "३. दूसरी शीट की टेबल चुनें: Sheet2!A2:C3",
        "४. Enter दबाएं: दोनों टेबल बिना कॉपी-पेस्ट के एक साथ जुड़ जाएंगी!"
      ]
    },
    commonErrors: [
      {
        error: "#VALUE!",
        reason: {
          en: "Tables have mismatched column counts.",
          gu: "જોડાતા ટેબલોમાં કોલમની સંખ્યા અલગ અલગ હોય.",
          hi: "दोनों टेबल्स में कॉलम की संख्या समान न होना।"
        },
        fix: {
          en: "Ensure both ranges cover the same number of columns.",
          gu: "બંને ટેબલમાં સરખી સંખ્યામાં કોલમ સિલેક્ટ કરો.",
          hi: "दोनों टेबलों में कॉलम की संख्या समान रखें।"
        }
      }
    ],
    proTip: {
      en: "Combine with FILTER to stack only active records: =VSTACK(FILTER(Table1, Table1[Status]=\"Active\"), FILTER(Table2, Table2[Status]=\"Active\"))!",
      gu: "FILTER સાથે વાપરીને માત્ર એક્ટિવ રેકોર્ડ્સ જ એકઠા કરો: =VSTACK(FILTER(Sheet1!A2:C10, ...), FILTER(Sheet2!A2:C10, ...))!",
      hi: "FILTER के साथ जोड़कर केवल सक्रिय रिकॉर्ड्स को एकीकृत करें!"
    }
  },

  // ==========================================
  // 16. MODERN EXCEL 365: LET
  // ==========================================
  {
    id: "let",
    name: "LET",
    category: "arrays",
    difficulty: "advanced",
    syntax: "=LET(name1, value1, [name2, value2], ..., calculation)",
    summary: {
      en: "Assigns names to calculation results inside a formula. Improves formula readability and speeds up calculation by calculating repeated values only once.",
      gu: "ફોર્મુલાની અંદર વેરિએબલ (નામ) બનાવીને ગણતરી ઝડપી અને વાંચવામાં સરળ બનાવે છે. એકની એક ગણતરી વારંવાર થવાને બદલે એક જ વાર થાય છે.",
      hi: "फ़ॉर्मूले के अंदर गणना परिणामों को नाम देता है। इससे फ़ॉर्मूला पढ़ना आसान होता है और स्पीड बहुत तेज हो जाती है।"
    },
    scenario: {
      en: "Calculating a complex tax tier or bonus without typing the same VLOOKUP formula 3 times.",
      gu: "જટિલ ગણતરીમાં એક જ VLOOKUP વારંવાર ટાઈપ કર્યા વગર તેને એક નામ (જેમ કે 'Sales') આપીને ઝડપી ગણતરી કરવી.",
      hi: "जटिल गणनाओं में एक ही लुकअप को बार-बार दोहराने से बचना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Employee Name", "Sales (₹)", "Final Bonus (₹)"],
        gu: ["કર્મચારીનું નામ", "વેચાણ (₹)", "કુલ બોનસ (₹)"],
        hi: ["कर्मचारी का नाम", "बिक्री (₹)", "कुल बोनस (₹)"]
      },
      rows: [
        ["Jayesh Patel", "1,20,000", "12,000"],
        ["Meena Desai", "45,000", "2,250"]
      ],
      targetCell: "C2",
      formulaApplied: "=LET(s, B2, IF(s>=100000, s*10%, s*5%))",
      evaluatedResult: "12,000",
      highlightCells: ["B2", "C2"]
    },
    steps: {
      en: [
        "1. Write =LET(",
        "2. Define variable: s, B2 (meaning 's' stands for sales in cell B2)",
        "3. Write calculation using 's': IF(s>=100000, s*10%, s*5%)",
        "4. Close bracket and press Enter: Clean, fast, and super easy to read!"
      ],
      gu: [
        "૧. =LET( લખો.",
        "૨. વેરિએબલ બનાવો: s, B2 (એટલે કે 's' ની કિંમત B2 છે)",
        "૩. હવે 's' નો ઉપયોગ કરીને ગણતરી લખો: IF(s>=100000, s*10%, s*5%)",
        "૪. એન્ટર દબાવો: ફોર્મુલા વાંચવામાં સરળ અને સુપરફાસ્ટ બની જાય છે!"
      ],
      hi: [
        "१. =LET( लिखें।",
        "२. वेरिएबल नाम दें: s, B2",
        "३. 's' का उपयोग करके गणना लिखें: IF(s>=100000, s*10%, s*5%)",
        "४. Enter दबाएं: फॉर्मूला तेज और पढ़ने में आसान बन जाता है!"
      ]
    },
    commonErrors: [
      {
        error: "#NAME?",
        reason: {
          en: "LET is available in Excel 2021 and Microsoft 365 only.",
          gu: "LET ફોર્મુલા એક્સેલ 2021 અને 365 માં જ છે.",
          hi: "LET फ़ंक्शन Excel 2021 और 365 में ही उपलब्ध है।"
        },
        fix: {
          en: "In older Excel, use standard nested IF without LET.",
          gu: "જૂના એક્સેલમાં સાદો IF વાપરો.",
          hi: "पुराने संस्करण में सामान्य IF का प्रयोग करें।"
        }
      }
    ],
    proTip: {
      en: "LET can make complex workbooks calculate up to 2x faster by caching repeated function calls!",
      gu: "LET ફોર્મુલા વાપરવાથી મોટી અને ભારે એક્સેલ ફાઇલો બમણી ઝડપથી કેલ્ક્યુલેટ થાય છે!",
      hi: "LET के प्रयोग से भारी एक्सेल शीट दोगुनी गति से प्रोसेस होती हैं!"
    }
  },

  // ==========================================
  // 17. DATE & TIME: EDATE & EOMONTH
  // ==========================================
  {
    id: "edate-eomonth",
    name: "EDATE & EOMONTH",
    category: "date",
    difficulty: "intermediate",
    syntax: "=EDATE(start_date, months)  |  =EOMONTH(start_date, months)",
    summary: {
      en: "EDATE calculates exact maturity or due date after N months; EOMONTH calculates the last day of the month after N months.",
      gu: "EDATE નિયત મહિના પછીની ચોક્કસ તારીખ (જેમ કે લોન EMI કે વીમા પોલિસી મેચ્યોરિટી) આપે છે, અને EOMONTH મહિનાનો છેલ્લો દિવસ આપે છે.",
      hi: "EDATE नियत महीनों के बाद की तारीख और EOMONTH महीने का अंतिम दिन निकालता है।"
    },
    scenario: {
      en: "Calculating invoice payment due date (exactly 3 months later) and billing month end date.",
      gu: "બિલની છેલ્લી તારીખ (બરાબર ૩ મહિના પછી) અથવા મહિનાનો છેલ્લો દિવસ (GST રિટર્ન ડેટ) ગણવી.",
      hi: "बिल भुगतान की नियत तारीख (3 महीने बाद) या महीने का अंतिम दिन ज्ञात करना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["Invoice Date", "Formula Applied", "Computed Due Date"],
        gu: ["બિલ તારીખ", "ફોર્મુલા", "ચુકવણીની છેલ્લી તારીખ"],
        hi: ["बिल तारीख", "फ़ॉर्मूला", "अंतिम देय तारीख"]
      },
      rows: [
        ["15-Jan-2026", "=EDATE(A2, 3)", "15-Apr-2026 (+3 Mos)"],
        ["15-Jan-2026", "=EOMONTH(A2, 0)", "31-Jan-2026 (Month End)"],
        ["15-Jan-2026", "=EOMONTH(A2, 1)", "28-Feb-2026 (Next Month End)"]
      ],
      targetCell: "C2",
      formulaApplied: "=EDATE(A2, 3)",
      evaluatedResult: "15-Apr-2026",
      highlightCells: ["A2", "C2"]
    },
    steps: {
      en: [
        "1. For same day after 3 months: =EDATE(A2, 3) -> 15-Apr-2026",
        "2. For last day of current month: =EOMONTH(A2, 0) -> 31-Jan-2026",
        "3. For last day of next month: =EOMONTH(A2, 1) -> 28-Feb-2026"
      ],
      gu: [
        "૧. ૩ મહિના પછી તે જ તારીખ માટે: =EDATE(A2, 3) -> 15-Apr-2026",
        "૨. ચાલુ મહિનાના છેલ્લા દિવસ માટે: =EOMONTH(A2, 0) -> 31-Jan-2026",
        "૩. આવતા મહિનાના છેલ્લા દિવસ માટે: =EOMONTH(A2, 1) -> 28-Feb-2026"
      ],
      hi: [
        "१. 3 महीने बाद की तारीख: =EDATE(A2, 3) -> 15-Apr-2026",
        "२. इसी महीने का अंतिम दिन: =EOMONTH(A2, 0) -> 31-Jan-2026",
        "३. अगले महीने का अंतिम दिन: =EOMONTH(A2, 1) -> 28-Feb-2026"
      ]
    },
    commonErrors: [
      {
        error: "Output appears as a raw number like 46128",
        reason: {
          en: "Cell is formatted as General or Number instead of Date.",
          gu: "સેલનું ફોર્મેટ ડેટ (તારીખ) ને બદલે નંબર છે.",
          hi: "सेल का फ़ॉर्मेट डेट के बजाय नंबर है।"
        },
        fix: {
          en: "Press Ctrl + Shift + # to apply Short Date format instantly!",
          gu: "શોર્ટકટ કી Ctrl + Shift + # દબાવીને તારીખ ફોર્મેટ લાગુ કરો!",
          hi: "Ctrl + Shift + # दबाकर तुरंत डेट फ़ॉर्मेट लागू करें!"
        }
      }
    ],
    proTip: {
      en: "Find the 1st day of next month: =EOMONTH(A2, 0) + 1 — clean and foolproof!",
      gu: "આવતા મહિનાની ૧લી તારીખ શોધવા: =EOMONTH(A2, 0) + 1 — ક્યારેય ભૂલ નહીં થાય!",
      hi: "अगले महीने की 1 तारीख के लिए: =EOMONTH(A2, 0) + 1 लिखें!"
    }
  },

  // ==========================================
  // 18. FINANCIAL: FV (Future Value)
  // ==========================================
  {
    id: "fv",
    name: "FV (Future Value)",
    category: "finance",
    difficulty: "intermediate",
    syntax: "=FV(rate, nper, [pmt], [pv], [type])",
    summary: {
      en: "Calculates the future value of an investment or SIP based on periodic constant payments and a fixed interest rate.",
      gu: "મ્યુચ્યુઅલ ફંડ SIP, PPF કે ફિક્સ ડિપોઝિટ (FD) રોકાણનું ભવિષ્યમાં પાકતી મુદતે કેટલું મૂલ્ય (Future Value) થશે તેની ચોક્કસ ગણતરી કરે છે.",
      hi: "म्यूचुअल फंड SIP या पीपीएफ निवेश का भविष्य में मिलने वाला कुल परिपक्वता मूल्य (Future Value) निकालता है।"
    },
    scenario: {
      en: "Calculating maturity value of a ₹5,00,000 fund with ₹5,000 monthly SIP invested for 10 years at 12% expected annual return.",
      gu: "દર મહિને રૂ. 5,000 ની SIP માં 12% વાર્ષિક રિટર્ન મુજબ 10 વર્ષ પછી પાકતી મુદતે કુલ કેટલા રૂપિયા મળશે તે શોધવું.",
      hi: "5,000 रुपये की मासिक SIP पर 12% वार्षिक रिटर्न के हिसाब से 10 वर्षों बाद कुल कितना फंड बनेगा यह निकालना।"
    },
    table: {
      columns: ["A", "B", "C"],
      headers: {
        en: ["SIP Parameter", "Value", "Notes"],
        gu: ["રોકાણ પરિમાણ", "કિંમત", "સમજૂતી"],
        hi: ["निवेश विवरण", "मान", "टिप्पणी"]
      },
      rows: [
        ["Monthly SIP (PMT)", "₹ 5,000", "Monthly Outflow"],
        ["Expected Annual Return", "12.00%", "Divide by 12 for monthly rate"],
        ["Tenure (Years)", "10", "Multiply by 12 = 120 months"],
        ["Maturity Fund Value", "₹ 11,61,695", "=FV(12%/12, 10*12, -5000)"]
      ],
      targetCell: "B5",
      formulaApplied: "=FV(12%/12, 10*12, -5000)",
      evaluatedResult: "₹ 11,61,695",
      highlightCells: ["B2", "B3", "B4", "B5"]
    },
    steps: {
      en: [
        "1. Write =FV(",
        "2. rate: Monthly return rate -> 12%/12",
        "3. nper: Total months -> 10*12 (120)",
        "4. pmt: Monthly investment amount with negative sign -> -5000",
        "5. Press Enter: Expected maturity wealth is ₹ 11,61,695!"
      ],
      gu: [
        "૧. =FV( લખો.",
        "૨. rate: માસિક વળતર દર -> 12%/12",
        "૩. nper: કુલ મહિના -> 10*12 (120 મહિના)",
        "૪. pmt: દર મહિને જમા થતી રકમ માઇનસમાં -> -5000",
        "૫. એન્ટર દબાવો: 10 વર્ષ પછી ₹ 11,61,695 નું મોટું ફંડ મળશે!"
      ],
      hi: [
        "१. =FV( लिखें।",
        "२. rate: मासिक रिटर्न दर -> 12%/12",
        "३. nper: कुल महीने -> 10*12 = 120",
        "४. pmt: मासिक निवेश राशि माइनस में -> -5000",
        "५. Enter दबाएं: परिपक्वता पर कुल ₹ 11,61,695 प्राप्त होंगे!"
      ]
    },
    commonErrors: [
      {
        error: "Result is negative",
        reason: {
          en: "Forgot to put a minus sign (-) before PMT or PV.",
          gu: "PMT કે PV ની આગળ માઇનસ (-) નિશાની મૂકવાનું ભૂલી ગયા.",
          hi: "निवेश राशि के आगे माइनस (-) न लगाना।"
        },
        fix: {
          en: "Pass -5000 so the future cash flow returns as a positive balance.",
          gu: "-5000 લખો જેથી પરિણામ પ્લસમાં આવે.",
          hi: "-5000 लिखें ताकि आउटपुट धनात्मक रहे।"
        }
      }
    ],
    proTip: {
      en: "Total amount you invested: 5,000 * 120 = 6,00,000; Pure wealth gain from compounding = ₹ 5,61,695!",
      gu: "તમારું કુલ રોકાણ: 6,00,000; જ્યારે વ્યાજ અને ચક્રવૃદ્ધિ નફો = ₹ 5,61,695!",
      hi: "कुल निवेश: 6,00,000; चक्रवृद्धि ब्याज से शुद्ध लाभ = ₹ 5,61,695!"
    }
  }
];


