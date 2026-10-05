/**
 * Excel Master - Dedicated Excel Errors Master Guide
 * Detailed diagnostics, causes, and instant fixes for all Excel error codes.
 */

const EXCEL_ERRORS = [
  {
    id: "err-na",
    code: "#N/A",
    title: {
      en: "Value Not Available",
      gu: "મૂલ્ય ઉપલબ્ધ નથી (Not Available)",
      hi: "मान उपलब्ध नहीं है (Not Available)"
    },
    meaning: {
      en: "Excel cannot find the referenced value in the lookup range (most common with VLOOKUP, XLOOKUP, MATCH).",
      gu: "તમે શોધવા મૂકેલી વિગત એક્સેલને તે લિસ્ટમાં મળી નથી (VLOOKUP, XLOOKUP કે MATCH માં સૌથી વધુ જોવા મળે છે).",
      hi: "एक्सेल को लुकअप रेंज में वह मान नहीं मिल सका जो खोजा जा रहा था।"
    },
    causes: {
      en: [
        "Typo in the lookup value or search code.",
        "Invisible leading/trailing spaces in cells.",
        "Number formatted as Text (e.g. '101' as text looking for 101 as number).",
        "The item genuinely does not exist in the source table."
      ],
      gu: [
        "શોધવાના કોડ કે નામમાં સ્પેલિંગની ભૂલ હોવી.",
        "સેલની આગળ કે પાછળ અદ્રશ્ય સ્પેસ (Space) રહી ગઈ હોય.",
        "નંબર ટેક્સ્ટ ફોર્મેટમાં હોય અને ફોર્મુલા સાદો નંબર શોધતી હોય.",
        "તે આઈડી કે પ્રોડક્ટ ખરેખર લિસ્ટમાં હાજર જ ન હોય."
      ],
      hi: [
        "लुकअप वैल्यू या स्पेलिंग में गलती होना।",
        "सेल में आगे या पीछे खाली स्पेस छूटी होना।",
        "संख्या का टेक्स्ट प्रारूप में होना।",
        "डेटा टेबल में वास्तव में वह रिकॉर्ड मौजूद न होना।"
      ]
    },
    badFormula: '=VLOOKUP("EMP999", A2:D50, 4, FALSE)',
    fixedFormula: '=IFERROR(VLOOKUP("EMP999", A2:D50, 4, FALSE), "Not Found")',
    fixExplanation: {
      en: "Wrap with IFERROR or IFNA to show friendly text like 'Not Found' instead of #N/A. Also apply TRIM() to remove spaces.",
      gu: "ફોર્મુલાની આગળ IFERROR લગાવી દો જેથી #N/A ને બદલે 'મળ્યું નથી' જેવો સ્વચ્છ મેસેજ દેખાય. સ્પેસ હટાવવા TRIM() વાપરો.",
      hi: "IFERROR या IFNA का प्रयोग करें ताकि एरर के बदले 'उपलब्ध नहीं' जैसा साफ़ संदेश दिखे।"
    }
  },
  {
    id: "err-value",
    code: "#VALUE!",
    title: {
      en: "Wrong Data Type in Calculation",
      gu: "ખોટો ડેટા પ્રકાર (ટેક્સ્ટ અને નંબરનો મેળ ન બેસવો)",
      hi: "डेटा प्रकार की त्रुटि (टेक्स्ट और संख्या का बेमेल)"
    },
    meaning: {
      en: "Occurs when a formula expects a number but finds letters, words, or incompatible array dimensions.",
      gu: "જ્યારે ફોર્મુલા નંબરની અપેક્ષા રાખતી હોય પણ સેલમાં અક્ષરો (ટેક્સ્ટ) લખેલા હોય.",
      hi: "जब फ़ॉर्मूला संख्या की अपेक्षा करता है लेकिन सेल में टेक्स्ट या शब्द लिखे होते हैं।"
    },
    causes: {
      en: [
        "Adding text to a number directly: =A1 + B1 where B1 contains 'Pending'.",
        "Ranges in SUMIFS or XLOOKUP have different row lengths (e.g. A2:A10 vs B2:B20).",
        "Invalid date passed to DATE functions."
      ],
      gu: [
        "નંબર અને ટેક્સ્ટનો સીધો સરવાળો કરવો: =A1 + B1 (જ્યાં B1 માં 'Pending' લખેલું હોય).",
        "SUMIFS કે XLOOKUP માં બંને રેન્જની સાઈઝ અલગ હોય (દા.ત. A2:A10 સાથે B2:B20).",
        "અમાન્ય તારીખ ફોર્મેટ હોવું."
      ],
      hi: [
        "संख्या और टेक्स्ट को सीधे जोड़ना: =A1 + B1 (जहाँ B1 में शब्द लिखा हो)।",
        "SUMIFS में दोनों रेंज की लंबाई समान न होना।",
        "दिनांक का गलत प्रारूप होना।"
      ]
    },
    badFormula: '=A2 + B2  // B2 is "N/A" text',
    fixedFormula: '=SUM(A2, B2)  // SUM automatically ignores text words!',
    fixExplanation: {
      en: "Use =SUM(A2, B2) instead of the plus operator (+), because SUM automatically ignores text without throwing #VALUE!.",
      gu: "+ નિશાનીને બદલે =SUM(A2, B2) વાપરો, કારણ કે SUM ફંકશન ટેક્સ્ટને આપોઆપ અવગણીને સાચો જવાબ આપે છે.",
      hi: "+ के स्थान पर =SUM(A2, B2) का प्रयोग करें क्योंकि SUM टेक्स्ट को स्वतः छोड़ देता है।"
    }
  },
  {
    id: "err-div0",
    code: "#DIV/0!",
    title: {
      en: "Division by Zero",
      gu: "શૂન્ય (0) વડે ભાગાકારની ભૂલ",
      hi: "शून्य (0) से भाग देने की त्रुटि"
    },
    meaning: {
      en: "Math violation: A number is being divided by zero or by an empty blank cell.",
      gu: "ગણિતનો નિયમ: કોઈપણ સંખ્યાને શૂન્ય (0) કે ખાલી સેલ વડે ભાગી શકાતી નથી.",
      hi: "गणितीय नियम: किसी संख्या को शून्य (0) या खाली सेल से भाग नहीं दिया जा सकता।"
    },
    causes: {
      en: [
        "Divider cell contains 0 (zero units sold, zero expense).",
        "Divider cell is empty blank (Excel treats blank as 0 in division).",
        "AVERAGE applied to a range containing only empty cells."
      ],
      gu: [
        "ભાગાકાર કરવા વાળો સેલ 0 ધરાવે છે.",
        "તે સેલ સાવ ખાલી હોય (એક્સેલ ખાલી સેલને 0 ગણે છે).",
        "ખાલી સેલ પર AVERAGE લગાવવી."
      ],
      hi: [
        "भाजक सेल में 0 लिखा होना।",
        "भाजक सेल का खाली होना (एक्सेल खाली सेल को 0 मानता है)।",
        "खाली रेंज पर AVERAGE लगाना।"
      ]
    },
    badFormula: '=B2 / C2  // When C2 is 0',
    fixedFormula: '=IF(C2=0, 0, B2/C2)  OR  =IFERROR(B2/C2, 0)',
    fixExplanation: {
      en: "Use IF to check if denominator is 0 before dividing: =IF(C2=0, 0, B2/C2).",
      gu: "ભાગાકાર કરતા પહેલા શરત મૂકો: =IF(C2=0, 0, B2/C2) અથવા =IFERROR(B2/C2, 0).",
      hi: "भाग देने से पहले जांचें: =IF(C2=0, 0, B2/C2) या IFERROR का प्रयोग करें।"
    }
  },
  {
    id: "err-ref",
    code: "#REF!",
    title: {
      en: "Invalid Cell Reference",
      gu: "રેફરન્સ ડિલીટ થઈ ગયો (ખોટો સેલ સંદર્ભ)",
      hi: "अमान्य सेल संदर्भ (सेल डिलीट हो जाना)"
    },
    meaning: {
      en: "A row, column, or sheet that the formula was referencing has been deleted permanently.",
      gu: "ફોર્મુલા જે સેલ, રો કે આખી શીટ સાથે જોડાયેલી હતી તે ડિલીટ થઈ ગઈ છે.",
      hi: "फ़ॉर्मूले में उपयोग किया गया सेल, पंक्ति या शीट स्थायी रूप से डिलीट कर दी गई है।"
    },
    causes: {
      en: [
        "User deleted an entire column or row used in the formula.",
        "Cutting and pasting cells over referenced cells.",
        "VLOOKUP col_index_num is larger than total columns in table."
      ],
      gu: [
        "ફોર્મુલા જે રો કે કોલમ વાપરતી હતી તેને આખી ડિલીટ કરી દેવી.",
        "સેલને કટ કરી અન્ય જગ્યાએ મૂકવો.",
        "VLOOKUP માં ટેબલની કુલ કોલમ કરતા મોટો નંબર લખવો."
      ],
      hi: [
        "फ़ॉर्मूले में प्रयुक्त कॉलम या पंक्ति को डिलीट कर देना।",
        "VLOOKUP में टेबल के कुल कॉलम से बड़ा नंबर लिखना।"
      ]
    },
    badFormula: '=A2 + #REF!  // Column B was deleted',
    fixedFormula: 'Press Ctrl + Z immediately, or update the formula reference to an existing cell.',
    fixExplanation: {
      en: "Immediately press Ctrl + Z to undo the deletion. If already saved, retype the correct surviving cell reference.",
      gu: "જો ભૂલથી ડિલીટ થઈ ગયું હોય તો તરત જ Ctrl + Z દબાવો, અથવા ફોર્મુલામાં સાચો સેલ ફરીથી પસંદ કરો.",
      hi: "तुरंत Ctrl + Z दबाकर वापस लाएं या फॉर्मूले में सही सेल पुनः चुनें।"
    }
  },
  {
    id: "err-name",
    code: "#NAME?",
    title: {
      en: "Unrecognized Function Name or Missing Quotes",
      gu: "ફોર્મુલાના સ્પેલિંગમાં ભૂલ કે ડબલ કોટ્સ ભૂલી જવું",
      hi: "फ़ॉर्मूले की स्पेलिंग में गलती या कोट्स न लगाना"
    },
    meaning: {
      en: "Excel does not recognize what you typed. Usually a misspelled function name or missing text quotation marks.",
      gu: "એક્સેલ તમે લખેલું ફંકશન ઓળખી શકતું નથી. ફંકશનનો સ્પેલિંગ ખોટો છે અથવા ટેક્સ્ટ આગળ ડબલ કોટ્સ નથી.",
      hi: "एक्सेल आपके लिखे फ़ंक्शन को पहचान नहीं पा रहा। स्पेलिंग गलत है या कोट्स छूट गए हैं।"
    },
    causes: {
      en: [
        "Typo in function: =VLOKUP() instead of =VLOOKUP(), =SMU() instead of =SUM().",
        "Writing text condition without quotes: =IF(A2=Yes, ...) instead of \"Yes\".",
        "Missing colon in range: =SUM(A1 A10) instead of A1:A10."
      ],
      gu: [
        "ફોર્મુલાના સ્પેલિંગમાં ભૂલ: =SMU() ને બદલે =SUM(), =VLOKUP() ને બદલે =VLOOKUP().",
        "શબ્દને ડબલ કોટ્સ વગર લખવો: =IF(A2=Yes) ને બદલે =IF(A2=\"Yes\").",
        "રેન્જ વચ્ચે બે ટપકાં (:) ન મૂકવા: A1 A10 ને બદલે A1:A10."
      ],
      hi: [
        "फ़ंक्शन की स्पेलिंग गलत होना: =SUM की जगह =SMU लिखना।",
        "शब्द को बिना उद्धरण चिह्नों के लिखना: =IF(A2=\"Yes\")।",
        "रेंज में कोलन (:) छूट जाना।"
      ]
    },
    badFormula: '=IF(A2=Pass, 1, 0)  // Missing quotes around Pass',
    fixedFormula: '=IF(A2="Pass", 1, 0)',
    fixExplanation: {
      en: "Always enclose plain text words in double quotes (\" \") and double check formula spelling.",
      gu: "હંમેશા શબ્દોને ડબલ કોટ્સ (\" \") ની અંદર જ લખો અને ફોર્મુલાનો સાચો સ્પેલિંગ ચકાસો.",
      hi: "हमेशा शब्दों को डबल कोट्स (\" \") में रखें और स्पेलिंग जांचें।"
    }
  },
  {
    id: "err-spill",
    code: "#SPILL!",
    title: {
      en: "Spill Range is Blocked",
      gu: "સ્પિલ રેન્જ બ્લોક છે (નીચે લખાણ આડે આવે છે)",
      hi: "स्पिल रेंज ब्लॉक है (नीचे जगह न होना)"
    },
    meaning: {
      en: "A dynamic array formula (like UNIQUE, FILTER, SORT) needs multiple cells to output its result, but the cells below are occupied.",
      gu: "UNIQUE, FILTER કે SORT જેવી નવી ફોર્મુલા પોતાનો જવાબ નીચેના સેલમાં ફેલાવવા માંગે છે, પણ નીચે પહેલેથી લખાણ છે.",
      hi: "डायनामिक ऐरे फ़ॉर्मूले (जैसे UNIQUE, FILTER) का परिणाम नीचे फैलने के लिए खाली जगह मांगता है।"
    },
    causes: {
      en: [
        "Cells in the spill trajectory contain existing data, text, or even a single space.",
        "Merged cells exist in the output path."
      ],
      gu: [
        "ફોર્મુલાની નીચેના સેલમાં જૂનો ડેટા કે સ્પેસ પડી હોય.",
        "નીચે મર્જ કરેલા (Merged) સેલ હોય."
      ],
      hi: [
        "नीचे वाले सेलों में पहले से कुछ लिखा होना या स्पेस होना।",
        "नीचे मर्ज किए गए सेल मौजूद होना।"
      ]
    },
    badFormula: '=UNIQUE(A2:A100)  // When cell C5 directly below contains "Total"',
    fixedFormula: 'Select the blocked cells below and press Delete to clear them!',
    fixExplanation: {
      en: "Simply click the dotted blue spill border and clear/delete all data in the cells beneath.",
      gu: "ફોર્મુલાની નીચે જે સેલ આડે આવતા હોય તેને સિલેક્ટ કરી ડિલીટ (ખાલી) કરી દો, લિસ્ટ આપમેળે ફેલાઈ જશે.",
      hi: "नीचे के सेलों को खाली (Delete) कर दें, परिणाम अपने आप फैल जाएगा।"
    }
  },
  {
    id: "err-hash",
    code: "#####",
    title: {
      en: "Column Too Narrow or Negative Date",
      gu: "કોલમ સાંકડી છે (અથવા માઇનસ તારીખ)",
      hi: "कॉलम की चौड़ाई कम होना या ऋणात्मक तारीख"
    },
    meaning: {
      en: "The cell is not wide enough to display the full number, or the cell contains a negative date.",
      gu: "સેલમાં રહેલો નંબર મોટો હોવાથી કોલમમાં સમાતો નથી, અથવા તારીખ માઇનસમાં છે.",
      hi: "कॉलम इतना चौड़ा नहीं है कि पूरी संख्या दिख सके, या तारीख ऋणात्मक है।"
    },
    causes: {
      en: [
        "Column width is too small for large numbers or currency figures.",
        "Subtracting a newer date from an older date formatted as date."
      ],
      gu: [
        "મોટી રકમ કે ચલણ માટે કોલમની પહોળાઈ ઓછી પડવી.",
        "તારીખ ઋણ (માઇનસ) માં પરિણામ આપતી હોય."
      ],
      hi: [
        "बड़ी संख्याओं के लिए कॉलम की चौड़ाई कम होना।"
      ]
    },
    badFormula: '10-digit number inside 30px width column',
    fixedFormula: 'Double click column divider OR press Alt + H + O + I',
    fixExplanation: {
      en: "Double-click the line between column headers (e.g. between C and D) to auto-fit width, or press Alt + H + O + I.",
      gu: "કોલમ હેડરની વચ્ચેની લાઈન પર માઉસથી ડબલ-ક્લિક કરો અથવા શોર્ટકટ Alt + H + O + I દબાવો.",
      hi: "कॉलम बॉर्डर पर डबल क्लिक करें या Alt + H + O + I दबाकर ऑटो-फिट करें।"
    }
  }
];
