/**
 * Excel Master - Complete Question Bank, Randomized Practice Quiz & 50-Question Live Exam Engine
 * 50 Questions Organized Across 5 Structured Sections (10 Questions Each):
 * - Section 1: Excel Essentials & Referencing (Q1 to Q10)
 * - Section 2: Math & Statistical Functions (Q11 to Q20)
 * - Section 3: Logical Conditions & Lookups (Q21 to Q30)
 * - Section 4: Text, Date & Time Functions (Q31 to Q40)
 * - Section 5: Dynamic Arrays, Shortcuts & Diagnostics (Q41 to Q50)
 */

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const EXCEL_EXAM_SECTIONS = [
  {
    id: 1,
    title: {
      gu: "સેક્શન ૧: એક્સેલ પાયાનું જ્ઞાન અને સેલ રેફરન્સિંગ",
      hi: "सेक्शन 1: एक्सेल मूल बातें और सेल लॉकिंग",
      en: "Section 1: Excel Essentials & Cell Referencing"
    },
    shortTitle: {
      gu: "સેક્શન ૧ (૧-૧૦)",
      hi: "सेक्शन 1 (1-10)",
      en: "Sec 1 (1-10)"
    },
    range: [0, 9]
  },
  {
    id: 2,
    title: {
      gu: "સેક્શન ૨: મૂળભૂત ગણતરી અને મેથ્સ ફોર્મુલા",
      hi: "सेक्शन 2: गणित और सांख्यिकी फ़ंक्शंस",
      en: "Section 2: Math & Statistical Functions"
    },
    shortTitle: {
      gu: "સેક્શન ૨ (૧૧-૨૦)",
      hi: "सेक्शन 2 (11-20)",
      en: "Sec 2 (11-20)"
    },
    range: [10, 19]
  },
  {
    id: 3,
    title: {
      gu: "સેક્શન ૩: લોજિકલ શરતો અને લુકઅપ માસ્ટરી",
      hi: "सेक्शन 3: लॉजिकल शर्तें और लुकअप मास्टरी",
      en: "Section 3: Logical Conditions & Lookup Mastery"
    },
    shortTitle: {
      gu: "સેક્શન ૩ (૨૧-૩૦)",
      hi: "सेक्शन 3 (21-30)",
      en: "Sec 3 (21-30)"
    },
    range: [20, 29]
  },
  {
    id: 4,
    title: {
      gu: "સેક્શન ૪: ટેક્સ્ટ, તારીખ અને સમય ફંકશન્સ",
      hi: "सेक्शन 4: टेक्स्ट, दिनांक और समय फ़ंक्शंस",
      en: "Section 4: Text, Date & Time Functions"
    },
    shortTitle: {
      gu: "સેક્શન ૪ (૩૧-૪૦)",
      hi: "सेक्शन 4 (31-40)",
      en: "Sec 4 (31-40)"
    },
    range: [30, 39]
  },
  {
    id: 5,
    title: {
      gu: "સેક્શન ૫: મોડર્ન એરેઝ, શોર્ટકટ્સ અને એરર સોલ્યુશન્સ",
      hi: "सेक्शन 5: मॉडर्न ऐरे, शॉर्टकट्स और एरर समाधान",
      en: "Section 5: Modern Dynamic Arrays, Shortcuts & Diagnostics"
    },
    shortTitle: {
      gu: "સેક્શન ૫ (૪૧-૫૦)",
      hi: "सेक्शन 5 (41-50)",
      en: "Sec 5 (41-50)"
    },
    range: [40, 49]
  }
];

const EXCEL_QUESTION_BANK = [
  {
    "id": 1,
    "section": 1,
    "domain": "Basics & Lookup",
    "question": {
      "en": "Which formula is the modern replacement for VLOOKUP that can search both left and right?",
      "gu": "VLOOKUP ના આધુનિક વિકલ્પ તરીકે કયું ફોર્મુલા વપરાય છે જે ડાબી અને જમણી બંને બાજુ ડેટા શોધી શકે છે?",
      "hi": "VLOOKUP के आधुनिक विकल्प के रूप में कौन सा फ़ॉर्मूला उपयोग किया जाता है जो बाएं और दाएं दोनों ओर खोज सकता है?"
    },
    "options": [
      {
        "text": "HLOOKUP",
        "correct": false
      },
      {
        "text": "XLOOKUP",
        "correct": true
      },
      {
        "text": "SEARCH",
        "correct": false
      },
      {
        "text": "LOOKUP2",
        "correct": false
      }
    ],
    "explanation": {
      "en": "XLOOKUP works in all directions, exact matches by default, and never breaks when columns are inserted.",
      "gu": "XLOOKUP એ નવું અને સૌથી પાવરફુલ ફોર્મુલા છે જે ડાબે કે જમણે ગમે ત્યાંથી ડેટા મેળવી શકે છે.",
      "hi": "XLOOKUP आधुनिक फ़ंक्शन है जो बिना कॉलम इंडेक्स के किसी भी दिशा में लुकअप कर सकता है।"
    }
  },
  {
    "id": 2,
    "section": 1,
    "domain": "Basics & Locking",
    "question": {
      "en": "What keyboard shortcut locks a cell reference ($A$1) into an absolute reference?",
      "gu": "સેલ રેફરન્સને લોક કરવા ($A$1 એબ્સોલ્યુટ બનાવવા) કઈ કીબોર્ડ શોર્ટકટ વપરાય છે?",
      "hi": "सेल रेफरेंस को लॉक करने ($A$1 एब्सोल्यूट बनाने) के लिए कौन सी कीबोर्ड कुंजी दबाई जाती है?"
    },
    "options": [
      {
        "text": "F2",
        "correct": false
      },
      {
        "text": "F4",
        "correct": true
      },
      {
        "text": "F9",
        "correct": false
      },
      {
        "text": "Ctrl + L",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Pressing F4 adds dollar signs ($) to lock the row and column coordinates.",
      "gu": "F4 દબાવવાથી સેલની આગળ $ ની નિશાની લાગી જાય છે જેથી ફોર્મુલા ડ્રેગ કરતી વખતે સેલ ખસતો નથી.",
      "hi": "F4 दबाने से सेल एड्रेस में $ चिह्न लग जाता है जिससे सेल लॉक हो जाता है।"
    }
  },
  {
    "id": 3,
    "section": 1,
    "domain": "Basics & Editing",
    "question": {
      "en": "How do you insert a line break inside the exact same cell while typing text?",
      "gu": "એક જ સેલમાં લખતી વખતે નવી લાઈન (લાઈન બ્રેક) પાડવા માટે કઈ શોર્ટકટ કી વપરાય છે?",
      "hi": "एक ही सेल में टाइप करते समय नई लाइन शुरू करने के लिए कौन सा शॉर्टकट दबाया जाता है?"
    },
    "options": [
      {
        "text": "Ctrl + Enter",
        "correct": false
      },
      {
        "text": "Alt + Enter",
        "correct": true
      },
      {
        "text": "Shift + Space",
        "correct": false
      },
      {
        "text": "Tab + Enter",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Alt + Enter inserts an in-cell line break (carriage return).",
      "gu": "Alt + Enter દબાવવાથી સેલમાંથી બહાર નીકળ્યા વગર તે જ સેલમાં નીચેની નવી લાઈન શરૂ થાય છે.",
      "hi": "Alt + Enter से उसी सेल के अंदर नया पैराग्राफ या पंक्ति शुरू होती है।"
    }
  },
  {
    "id": 4,
    "section": 1,
    "domain": "Basics & Selection",
    "question": {
      "en": "Which keyboard shortcut selects the entire column in an Excel worksheet?",
      "gu": "એક્સેલ વર્કશીટમાં આખી કોલમ (Entire Column) એકસાથે સિલેક્ટ કરવા કઈ શોર્ટકટ કી વપરાય છે?",
      "hi": "एक्सेल वर्कशीट में पूरे कॉलम (Entire Column) को एक साथ चुनने के लिए कौन सा शॉर्टकट है?"
    },
    "options": [
      {
        "text": "Shift + Space",
        "correct": false
      },
      {
        "text": "Ctrl + Space",
        "correct": true
      },
      {
        "text": "Ctrl + C",
        "correct": false
      },
      {
        "text": "Alt + Space",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Ctrl + Space selects the entire current column, while Shift + Space selects the entire row.",
      "gu": "Ctrl + Space થી આખી કોલમ સિલેક્ટ થાય છે, જ્યારે Shift + Space થી આખી રો સિલેક્ટ થાય છે.",
      "hi": "Ctrl + Space से पूरा कॉलम चुना जाता है, और Shift + Space से पूरी पंक्ति चुनी जाती है।"
    }
  },
  {
    "id": 5,
    "section": 1,
    "domain": "Basics & Selection",
    "question": {
      "en": "Which shortcut selects the entire row (Entire Row) in Excel?",
      "gu": "એક્સેલમાં આખી રો (Entire Row) એકસાથે સિલેક્ટ કરવા કઈ કીબોર્ડ શોર્ટકટ વપરાય છે?",
      "hi": "एक्सेल में पूरी पंक्ति (Entire Row) का चयन करने के लिए कौन सी कुंजी दबाई जाती है?"
    },
    "options": [
      {
        "text": "Ctrl + Space",
        "correct": false
      },
      {
        "text": "Shift + Space",
        "correct": true
      },
      {
        "text": "Ctrl + R",
        "correct": false
      },
      {
        "text": "Alt + Enter",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Shift + Space selects the entire row where the active cell is located.",
      "gu": "Shift + Space કી દબાવવાથી એક્ટિવ સેલ વાળી આખી રો સિલેક્ટ થઈ જાય છે.",
      "hi": "Shift + Space दबाने से वर्तमान सेल वाली पूरी पंक्ति चयनित हो जाती है।"
    }
  },
  {
    "id": 6,
    "section": 1,
    "domain": "Basics & Autofill",
    "question": {
      "en": "What shortcut quickly copies down the value or formula from the cell directly above?",
      "gu": "ઉપરના સેલનું ફોર્મુલા કે લખાણ સીધું નીચેના સેલમાં કોપી (Fill Down) કરવા કઈ શોર્ટકટ વપરાય છે?",
      "hi": "ऊपर के सेल का फॉर्मूला या टेक्स्ट तुरंत नीचे भरने (Fill Down) के लिए कौन सा शॉर्टकट है?"
    },
    "options": [
      {
        "text": "Ctrl + F",
        "correct": false
      },
      {
        "text": "Ctrl + D",
        "correct": true
      },
      {
        "text": "Ctrl + R",
        "correct": false
      },
      {
        "text": "Ctrl + Shift + D",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Ctrl + D fills down from the cell above, and Ctrl + R fills right from the cell on the left.",
      "gu": "Ctrl + D થી ઉપરના સેલનો ડેટા નીચે ભરાય છે (Fill Down), અને Ctrl + R થી ડાબી બાજુનો ડેટા જમણી બાજુ આવે છે.",
      "hi": "Ctrl + D से ऊपर का डेटा नीचे भर जाता है, और Ctrl + R से बायां डेटा दाईं ओर भरता है।"
    }
  },
  {
    "id": 7,
    "section": 1,
    "domain": "Basics & Editing",
    "question": {
      "en": "Which function key enters Edit Mode for the currently selected cell without using the mouse?",
      "gu": "માઉસ વગર સિલેક્ટ કરેલા સેલની અંદર એડિટિંગ કરવા માટે કઈ ફંકશન કી વપરાય છે?",
      "hi": "माउस के बिना वर्तमान सेल में संपादन (Edit Mode) शुरू करने के लिए कौन सी फंक्शन कुंजी दबाते हैं?"
    },
    "options": [
      {
        "text": "F1",
        "correct": false
      },
      {
        "text": "F2",
        "correct": true
      },
      {
        "text": "F5",
        "correct": false
      },
      {
        "text": "F7",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Pressing F2 opens in-cell editing and places the cursor at the end of cell contents.",
      "gu": "F2 દબાવવાથી સેલ એડિટ મોડમાં ખુલે છે અને કર્સર છેલ્લે આવી જાય છે.",
      "hi": "F2 दबाने से सेल एडिट मोड में आ जाता है और कर्सर अंत में पहुंच जाता है।"
    }
  },
  {
    "id": 8,
    "section": 1,
    "domain": "Basics & Formulas",
    "question": {
      "en": "Which keyboard shortcut toggles showing formulas instead of calculated values across the sheet?",
      "gu": "શીટમાં પરિણામના બદલે તમામ ફોર્મુલા એકસાથે જોવા (Show Formulas) કઈ શોર્ટકટ વપરાય છે?",
      "hi": "शीट में परिणामों के स्थान पर सभी फॉर्मूले एक साथ देखने के लिए कौन सा शॉर्टकट उपयोग होता है?"
    },
    "options": [
      {
        "text": "Ctrl + F9",
        "correct": false
      },
      {
        "text": "Ctrl + ` (Grave Accent)",
        "correct": true
      },
      {
        "text": "Shift + F3",
        "correct": false
      },
      {
        "text": "Alt + F1",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Ctrl + ` toggles between formula view and regular value view across the entire sheet.",
      "gu": "Ctrl + ` દબાવવાથી શીટના તમામ સેલમાં લખેલા સાચા ફોર્મુલા દેખાઈ આવે છે.",
      "hi": "Ctrl + ` दबाने से पूरे शीट के फॉर्मूले दिखाई देने लगते हैं।"
    }
  },
  {
    "id": 9,
    "section": 1,
    "domain": "Basics & Sheets",
    "question": {
      "en": "Which shortcut inserts a brand new worksheet instantly into the active workbook?",
      "gu": "વર્કબુકમાં તાત્કાલિક નવી વર્કશીટ (New Worksheet) ઉમેરવા માટે કઈ શોર્ટકટ કી વપરાય છે?",
      "hi": "वर्कबुक में तुरंत नई वर्कशीट जोड़ने के लिए कौन सा शॉर्टकट उपयोग किया जाता है?"
    },
    "options": [
      {
        "text": "Ctrl + N",
        "correct": false
      },
      {
        "text": "Shift + F11",
        "correct": true
      },
      {
        "text": "Alt + N",
        "correct": false
      },
      {
        "text": "Ctrl + Tab",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Shift + F11 instantly inserts a new worksheet. (Ctrl + N creates a whole new workbook).",
      "gu": "Shift + F11 થી વર્તમાન ફાઇલમાં નવી શીટ ઉમેરાય છે, જ્યારે Ctrl + N થી આખી નવી ફાઇલ ખુલે છે.",
      "hi": "Shift + F11 से नई वर्कशीट जुड़ती है, जबकि Ctrl + N से नई वर्कबुक बनती है।"
    }
  },
  {
    "id": 10,
    "section": 1,
    "domain": "Basics & Referencing",
    "question": {
      "en": "In formula =$A1, which part of the cell coordinate is locked?",
      "gu": "ફોર્મુલા =$A1 માં સેલનો કયો ભાગ લોક (ફિક્સ) થયેલો છે?",
      "hi": "फ़ॉर्मूला =$A1 में सेल का कौन सा भाग लॉक (स्थिर) है?"
    },
    "options": [
      {
        "text": "Row 1 only",
        "correct": false
      },
      {
        "text": "Column A only",
        "correct": true
      },
      {
        "text": "Both Row and Column",
        "correct": false
      },
      {
        "text": "Neither is locked",
        "correct": false
      }
    ],
    "explanation": {
      "en": "The dollar sign ($) before 'A' locks Column A, while Row 1 remains free to change when dragged.",
      "gu": "$ જેની આગળ હોય તે લોક થાય. $A1 માં કોલમ A લોક છે, જ્યારે રો 1 મુક્ત રહે છે.",
      "hi": "डॉलर चिह्न ($) 'A' के आगे है, इसलिए केवल कॉलम A लॉक है।"
    }
  },
  {
    "id": 11,
    "section": 2,
    "domain": "Math & Calculations",
    "question": {
      "en": "Which formula calculates total sales while ignoring hidden or filtered rows?",
      "gu": "ફિલ્ટર કરેલી કે છુપાયેલી રો ને બાદ કરી માત્ર દેખાતી રો નો સરવાળો કરવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "फ़िल्टर की गई या छिपी हुई पंक्तियों को छोड़कर केवल दिखने वाली पंक्तियों का योग करने के लिए क्या उपयोग होता है?"
    },
    "options": [
      {
        "text": "=SUM(A2:A10)",
        "correct": false
      },
      {
        "text": "=SUBTOTAL(109, A2:A10)",
        "correct": true
      },
      {
        "text": "=TOTAL(A2:A10)",
        "correct": false
      },
      {
        "text": "=FILTERSUM(A2:A10)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "SUBTOTAL with function number 109 sums visible filtered rows and automatically ignores hidden ones.",
      "gu": "SUBTOTAL(109, ...) એ ફિલ્ટર કરેલા ડેટામાં છુપાયેલી રો ને ગણ્યા વગર સાચો સરવાળો આપે છે.",
      "hi": "SUBTOTAL(109, ...) फ़िल्टर की गई छिपी हुई पंक्तियों को अनदेखा करके सही योग देता है।"
    }
  },
  {
    "id": 12,
    "section": 2,
    "domain": "Math & Calculations",
    "question": {
      "en": "Which formula calculates total amount for sales where Region in column B equals 'Gujarat'?",
      "gu": "કોલમ B માં Region 'Gujarat' હોય તેવા જ તમામ વેચાણનો સરવાળો કરવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "कॉलम B में Region 'Gujarat' होने पर ही कुल बिक्री जोड़ने के लिए कौन सा फ़ॉर्मूला सही है?"
    },
    "options": [
      {
        "text": "=SUM(B2:B10, \"Gujarat\")",
        "correct": false
      },
      {
        "text": "=SUMIF(B2:B10, \"Gujarat\", C2:C10)",
        "correct": true
      },
      {
        "text": "=COUNTIF(B2:B10, \"Gujarat\")",
        "correct": false
      },
      {
        "text": "=IF(B2:B10=\"Gujarat\", SUM(C2:C10))",
        "correct": false
      }
    ],
    "explanation": {
      "en": "SUMIF(range, criteria, sum_range) adds values in sum_range that satisfy the given condition.",
      "gu": "SUMIF(શરતી_રેન્જ, 'શરત', સરવાળા_રેન્જ) ચોક્કસ શરત મુજબ સરવાળો કરે છે.",
      "hi": "SUMIF दी गई शर्त के आधार पर योग निकालने के लिए आदर्श फ़ंक्शन है।"
    }
  },
  {
    "id": 13,
    "section": 2,
    "domain": "Math & Calculations",
    "question": {
      "en": "Which formula sums values based on MULTIPLE conditions across multiple columns?",
      "gu": "એકથી વધુ શરતો (દા.ત. શહેર 'Surat' અને પ્રોડક્ટ 'Laptop') હોય ત્યારે સરવાળો કરવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "एक से अधिक शर्तों के आधार पर योग करने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?"
    },
    "options": [
      {
        "text": "=SUMIF_MULTI()",
        "correct": false
      },
      {
        "text": "=SUMIFS()",
        "correct": true
      },
      {
        "text": "=TOTALS()",
        "correct": false
      },
      {
        "text": "=ANDSUM()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "SUMIFS supports multiple criteria pairs: SUMIFS(sum_range, criteria_range1, criteria1, ...).",
      "gu": "SUMIFS ફોર્મુલા એક સાથે અનેક કોલમ્સની શરતો ચકાસીને સાચો સરવાળો કરે છે.",
      "hi": "SUMIFS फ़ंक्शन कई शर्तों के आधार पर डेटा का योग करने के लिए बनाया गया है।"
    }
  },
  {
    "id": 14,
    "section": 2,
    "domain": "Statistical",
    "question": {
      "en": "What is the key difference between COUNT and COUNTA functions?",
      "gu": "COUNT અને COUNTA ફંકશન વચ્ચેનો મુખ્ય તફાવત શું છે?",
      "hi": "COUNT और COUNTA फ़ंक्शन में क्या मुख्य अंतर है?"
    },
    "options": [
      {
        "text": "Both count text and numbers equally",
        "correct": false
      },
      {
        "text": "COUNT counts only numbers; COUNTA counts all non-empty cells (numbers + text)",
        "correct": true
      },
      {
        "text": "COUNTA counts only blank cells",
        "correct": false
      },
      {
        "text": "COUNT adds numbers together",
        "correct": false
      }
    ],
    "explanation": {
      "en": "COUNT only tallies numeric values, while COUNTA counts any cell that is not empty.",
      "gu": "COUNT માત્ર સંખ્યા ગણે છે, જ્યારે COUNTA નામ, ટેક્સ્ટ અને નંબર તમામ ભરેલા સેલ ગણે છે.",
      "hi": "COUNT केवल अंकों की गिनती करता है, जबकि COUNTA सभी भरे हुए सेलों को गिनता है।"
    }
  },
  {
    "id": 15,
    "section": 2,
    "domain": "Statistical",
    "question": {
      "en": "Which formula counts how many times the word 'Passed' appears in column D?",
      "gu": "કોલમ D માં 'Passed' શબ્દ કેટલી વાર આવ્યો છે તેની સંખ્યા ગણવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "कॉलम D में 'Passed' शब्द कितनी बार आया है, यह गिनने के लिए कौन सा फ़ॉर्मूला सही है?"
    },
    "options": [
      {
        "text": "=FIND(D2:D20, \"Passed\")",
        "correct": false
      },
      {
        "text": "=COUNTIF(D2:D20, \"Passed\")",
        "correct": true
      },
      {
        "text": "=COUNT(D2:D20=\"Passed\")",
        "correct": false
      },
      {
        "text": "=SUMIF(D2:D20, \"Passed\")",
        "correct": false
      }
    ],
    "explanation": {
      "en": "COUNTIF(range, criteria) counts the number of cells within a range that meet the given condition.",
      "gu": "COUNTIF ફોર્મુલા ચોક્કસ શરત ધરાવતા સેલની કુલ સંખ્યા ગણી આપે છે.",
      "hi": "COUNTIF फ़ंक्शन किसी शर्त को पूरा करने वाले सेलों की संख्या गिनता है।"
    }
  },
  {
    "id": 16,
    "section": 2,
    "domain": "Math & Calculations",
    "question": {
      "en": "How do you round a number in cell A1 to exactly 2 decimal places?",
      "gu": "સેલ A1 માં રહેલા આંકડાને ૨ દશાંશ સ્થળ (2 Decimal places) સુધી રાઉન્ડ કરવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "सेल A1 की संख्या को ठीक 2 दशमलव स्थानों तक राउंड करने का सही फ़ॉर्मूला क्या है?"
    },
    "options": [
      {
        "text": "=FIX(A1, 2)",
        "correct": false
      },
      {
        "text": "=ROUND(A1, 2)",
        "correct": true
      },
      {
        "text": "=DECIMAL(A1, 2)",
        "correct": false
      },
      {
        "text": "=TRUNC2(A1)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=ROUND(A1, 2) mathematically rounds the number to two decimal places.",
      "gu": "=ROUND(A1, 2) થી પોઇન્ટ પછી માત્ર બે આંકડા રહે અને ગાણિતિક રાઉન્ડિંગ થાય છે.",
      "hi": "=ROUND(A1, 2) संख्या को 2 दशमलव स्थानों तक सही ढंग से राउंड करता है।"
    }
  },
  {
    "id": 17,
    "section": 2,
    "domain": "Statistical",
    "question": {
      "en": "Which formula finds the 2nd highest salary from a range of salaries (C2:C20)?",
      "gu": "પગારની યાદી (C2:C20) માંથી બીજા નંબરનો સૌથી મોટો પગાર (2nd Highest) શોધવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "वेतन सूची (C2:C20) में से दूसरा सबसे अधिक वेतन (2nd Highest) खोजने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=MAX(C2:C20, 2)",
        "correct": false
      },
      {
        "text": "=LARGE(C2:C20, 2)",
        "correct": true
      },
      {
        "text": "=TOP(C2:C20, 2)",
        "correct": false
      },
      {
        "text": "=HIGH(C2:C20, 2)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "LARGE(array, k) returns the k-th largest value. LARGE(range, 2) finds the 2nd highest.",
      "gu": "LARGE(C2:C20, 2) થી લિસ્ટમાંથી બીજા નંબરનો સૌથી મોટો નંબર મળે છે.",
      "hi": "LARGE(array, k) k-वां सबसे बड़ा मान लौटाता है।"
    }
  },
  {
    "id": 18,
    "section": 2,
    "domain": "Statistical",
    "question": {
      "en": "Which formula finds the 3rd lowest price in a price list (B2:B50)?",
      "gu": "કિંમતની યાદીમાંથી ત્રીજા નંબરની સૌથી ઓછી કિંમત (3rd Smallest) શોધવા શું વપરાય છે?",
      "hi": "मूल्य सूची में से तीसरा सबसे कम मूल्य (3rd Lowest) खोजने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=MIN(B2:B50, 3)",
        "correct": false
      },
      {
        "text": "=SMALL(B2:B50, 3)",
        "correct": true
      },
      {
        "text": "=LOW(B2:B50, 3)",
        "correct": false
      },
      {
        "text": "=BOTTOM(B2:B50, 3)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "SMALL(array, k) returns the k-th smallest value in a data set.",
      "gu": "SMALL(B2:B50, 3) થી યાદીમાંથી ત્રીજા નંબરની સૌથી નાની સંખ્યા મળે છે.",
      "hi": "SMALL(array, k) सबसे छोटे मानों के क्रम में k-वां मान देता है।"
    }
  },
  {
    "id": 19,
    "section": 2,
    "domain": "Math & Calculations",
    "question": {
      "en": "Which formula calculates the remainder after dividing 25 by 4 in Excel?",
      "gu": "૨૫ ને ૪ વડે ભાગતા બાકી વધતી શેષ (Remainder) શોધવા એક્સેલમાં કયું ફોર્મુલા વપરાય છે?",
      "hi": "25 को 4 से भाग देने पर शेषफल (Remainder) निकालने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=REMAINDER(25, 4)",
        "correct": false
      },
      {
        "text": "=MOD(25, 4)",
        "correct": true
      },
      {
        "text": "=DIV(25, 4)",
        "correct": false
      },
      {
        "text": "=REST(25, 4)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=MOD(number, divisor) returns the remainder after division. MOD(25, 4) = 1.",
      "gu": "=MOD(25, 4) ભાગાકાર પછી વધતી શેષ (1) આપે છે.",
      "hi": "=MOD(25, 4) भागफल का शेष (1) देता है।"
    }
  },
  {
    "id": 20,
    "section": 2,
    "domain": "Statistical",
    "question": {
      "en": "Which formula calculates the average marks while ignoring students who scored 0?",
      "gu": "૦ (શૂન્ય) માર્ક્સ વાળા વિદ્યાર્થીઓને બાદ કરીને બાકીના માર્ક્સની સરેરાશ શોધવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "0 अंक वाले छात्रों को छोड़कर बाकी छात्रों का औसत निकालने के लिए कौन सा फ़ॉर्मूला सही है?"
    },
    "options": [
      {
        "text": "=AVERAGE(B2:B20)",
        "correct": false
      },
      {
        "text": "=AVERAGEIF(B2:B20, \">0\")",
        "correct": true
      },
      {
        "text": "=AVGSUM(B2:B20)",
        "correct": false
      },
      {
        "text": "=IF(B2:B20>0, AVERAGE(B2:B20))",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=AVERAGEIF(B2:B20, '>0') averages only cells with values strictly greater than 0.",
      "gu": "AVERAGEIF(B2:B20, '>0') શૂન્ય સિવાયના માત્ર ધન નંબરોની જ સરેરાશ ગણે છે.",
      "hi": "AVERAGEIF(B2:B20, '>0') केवल 0 से अधिक मानों का औसत निकालता है।"
    }
  },
  {
    "id": 21,
    "section": 3,
    "domain": "Logical",
    "question": {
      "en": "What will the formula =IF(A1>=35, 'Pass', 'Fail') return if A1 contains 40?",
      "gu": "જો સેલ A1 માં 40 હોય, તો =IF(A1>=35, 'Pass', 'Fail') નું પરિણામ શું આવશે?",
      "hi": "यदि सेल A1 में 40 है, तो =IF(A1>=35, 'Pass', 'Fail') का परिणाम क्या होगा?"
    },
    "options": [
      {
        "text": "Fail",
        "correct": false
      },
      {
        "text": "Pass",
        "correct": true
      },
      {
        "text": "TRUE",
        "correct": false
      },
      {
        "text": "Error",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Since 40 is greater than or equal to 35, the true condition 'Pass' is returned.",
      "gu": "૪૦ એ ૩૫ કરતા મોટા હોવાથી શરત સાચી પડે છે અને 'Pass' પરિણામ મળે છે.",
      "hi": "चूंकि 40 >= 35 सत्य है, इसलिए 'Pass' मिलेगा।"
    }
  },
  {
    "id": 22,
    "section": 3,
    "domain": "Logical",
    "question": {
      "en": "Which modern function tests multiple conditions without nesting messy IF statements inside each other?",
      "gu": "એકબીજાની અંદર અનેક IF (Nested IF) લખવાની ઝંઝટ વગર સરળતાથી ગ્રેડ કે શરતો નક્કી કરવા કયું નવું ફંકશન વપરાય છે?",
      "hi": "नेस्टेड IF की जटिलता के बिना कई शर्तों की जांच करने के लिए कौन सा आधुनिक फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=MULTI_IF()",
        "correct": false
      },
      {
        "text": "=IFS()",
        "correct": true
      },
      {
        "text": "=CHECK()",
        "correct": false
      },
      {
        "text": "=CONDITIONS()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=IFS(condition1, value1, condition2, value2, ...) evaluates multiple conditions cleanly in order.",
      "gu": "IFS ફોર્મુલામાં કૌંસની ગૂંચવણ વગર ક્રમશઃ અનેક શરતો લખી શકાય છે.",
      "hi": "IFS फ़ंक्शन बिना नेस्टिंग के कई शर्तों को सीधे जांचता है।"
    }
  },
  {
    "id": 23,
    "section": 3,
    "domain": "Logical",
    "question": {
      "en": "Which formula returns TRUE only if BOTH conditions (Age >= 18 AND Salary >= 25000) are met?",
      "gu": "જ્યારે ઉંમર >= 18 અને પગાર >= 25000 બંને શરતો એકસાથે સાચી હોય ત્યારે જ TRUE આપવા કયું ફોર્મુલા વપરાય?",
      "hi": "जब उम्र >= 18 और वेतन >= 25000 दोनों एक साथ सच हों तभी TRUE पाने के लिए क्या उपयोग होता है?"
    },
    "options": [
      {
        "text": "=OR(Age>=18, Salary>=25000)",
        "correct": false
      },
      {
        "text": "=AND(Age>=18, Salary>=25000)",
        "correct": true
      },
      {
        "text": "=BOTH(Age>=18, Salary>=25000)",
        "correct": false
      },
      {
        "text": "=IFALL(Age>=18, Salary>=25000)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "AND function returns TRUE only when all supplied logical tests evaluate to TRUE.",
      "gu": "AND ફંકશનમાં આપેલી તમામ શરતો સાચી પડે તો જ TRUE જવાબ મળે છે.",
      "hi": "AND फ़ंक्शन तभी TRUE देता है जब उसकी सभी शर्तें सत्य हों।"
    }
  },
  {
    "id": 24,
    "section": 3,
    "domain": "Logical",
    "question": {
      "en": "Which formula returns TRUE if EITHER of the conditions is met (City = 'Ahmedabad' OR City = 'Surat')?",
      "gu": "બેમાંથી કોઈપણ એક શરત સાચી પડે ત્યારે TRUE આપવા કયું ફંકશન વપરાય છે?",
      "hi": "यदि दोनों में से कोई भी एक शर्त पूरी हो तो TRUE देने के लिए कौन सा फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=AND()",
        "correct": false
      },
      {
        "text": "=OR()",
        "correct": true
      },
      {
        "text": "=EITHER()",
        "correct": false
      },
      {
        "text": "=ANY()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "OR returns TRUE if any one of its arguments evaluates to TRUE.",
      "gu": "OR ફંકશનમાં કોઈપણ એક શરત સાચી પડે તો પણ પરિણામ TRUE મળે છે.",
      "hi": "OR फ़ंक्शन में कोई भी एक शर्त सही होने पर TRUE मिलता है।"
    }
  },
  {
    "id": 25,
    "section": 3,
    "domain": "Lookup & Reference",
    "question": {
      "en": "In VLOOKUP, what argument must you provide at the end for an EXACT match?",
      "gu": "VLOOKUP માં ચોક્કસ (Exact Match) પરિણામ મેળવવા છેલ્લે કઈ કિંમત આપવી ફરજિયાત છે?",
      "hi": "VLOOKUP में सटीक मिलान (Exact Match) के लिए अंत में कौन सा मान दिया जाता है?"
    },
    "options": [
      {
        "text": "TRUE or 1",
        "correct": false
      },
      {
        "text": "FALSE or 0",
        "correct": true
      },
      {
        "text": "EXACT",
        "correct": false
      },
      {
        "text": "Null",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Providing FALSE or 0 ensures an exact match lookup; TRUE or omitting it performs an approximate match.",
      "gu": "છેલ્લે FALSE અથવા 0 લખવાથી કમ્પ્યુટર હૂબહૂ એ જ શબ્દ કે નંબર શોધે છે.",
      "hi": "FALSE या 0 सटीक मिलान सुनिश्चित करता है।"
    }
  },
  {
    "id": 26,
    "section": 3,
    "domain": "Lookup & Reference",
    "question": {
      "en": "What major advantage does INDEX & MATCH have over traditional VLOOKUP?",
      "gu": "પરંપરાગત VLOOKUP કરતા INDEX & MATCH વાપરવાનો સૌથી મોટો ફાયદો શું છે?",
      "hi": "पारंपरिक VLOOKUP की तुलना में INDEX & MATCH का सबसे बड़ा लाभ क्या है?"
    },
    "options": [
      {
        "text": "It only works on numbers",
        "correct": false
      },
      {
        "text": "It can lookup values to the left and does not break when columns are inserted",
        "correct": true
      },
      {
        "text": "It requires less memory than SUM",
        "correct": false
      },
      {
        "text": "It automatically saves the workbook",
        "correct": false
      }
    ],
    "explanation": {
      "en": "INDEX & MATCH can look up to the left of the search column and is immune to column insertions.",
      "gu": "INDEX & MATCH ડાબી બાજુ પણ જોઈ શકે છે અને નવી કોલમ ઉમેરવાથી ફોર્મુલા તૂટતું નથી.",
      "hi": "INDEX & MATCH बाईं ओर देख सकता है और कॉलम जोड़ने पर भी नहीं टूटता।"
    }
  },
  {
    "id": 27,
    "section": 3,
    "domain": "Lookup & Reference",
    "question": {
      "en": "In XLOOKUP, how do you search from bottom to top (last match first)?",
      "gu": "XLOOKUP માં છેલ્લેથી પહેલો રેકોર્ડ શોધવા (Search last-to-first) કયો સર્ચ મોડ વપરાય છે?",
      "hi": "XLOOKUP में नीचे से ऊपर (अंतिम प्रविष्टि पहले) खोजने के लिए कौन सा सर्च मोड दिया जाता है?"
    },
    "options": [
      {
        "text": "Search mode = 1",
        "correct": false
      },
      {
        "text": "Search mode = -1",
        "correct": true
      },
      {
        "text": "Search mode = 2",
        "correct": false
      },
      {
        "text": "Search mode = 'BOTTOM'",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Setting [search_mode] to -1 tells XLOOKUP to search starting from the last item to the first.",
      "gu": "સર્ચ મોડ -1 આપવાથી XLOOKUP ટેબલના તળિયેથી ઉપરની તરફ શોધે છે.",
      "hi": "सर्च मोड -1 देने से XLOOKUP नीचे से ऊपर की ओर खोज करता है।"
    }
  },
  {
    "id": 28,
    "section": 3,
    "domain": "Lookup & Reference",
    "question": {
      "en": "Which XLOOKUP parameter allows providing a friendly message if the lookup value is not found?",
      "gu": "જો ડેટા ન મળે તો એરરના બદલે કસ્ટમ મેસેજ દર્શાવવા XLOOKUP નું કયું આર્ગ્યુમેન્ટ વપરાય છે?",
      "hi": "यदि डेटा न मिले तो एरर की जगह कस्टम संदेश दिखाने के लिए XLOOKUP का कौन सा तर्क उपयोग होता है?"
    },
    "options": [
      {
        "text": "if_error",
        "correct": false
      },
      {
        "text": "if_not_found",
        "correct": true
      },
      {
        "text": "missing_text",
        "correct": false
      },
      {
        "text": "not_available",
        "correct": false
      }
    ],
    "explanation": {
      "en": "XLOOKUP has a built-in [if_not_found] argument, replacing the need for wrapping in IFERROR.",
      "gu": "XLOOKUP(lookup, in_range, return_range, [if_not_found]) માં જો ડેટા ન મળે તો સીધો મેસેજ બતાવી શકાય છે.",
      "hi": "[if_not_found] तर्क से बिना IFERROR के सीधा संदेश दिखाया जा सकता है।"
    }
  },
  {
    "id": 29,
    "section": 3,
    "domain": "Lookup & Reference",
    "question": {
      "en": "Which formula searches for a value horizontally in the top row and returns a value in the same column?",
      "gu": "જ્યારે ડેટા આડો (Horizontal Row) ગોઠવાયેલો હોય ત્યારે લુકઅપ કરવા કયું ફંકશન વપરાય છે?",
      "hi": "जब डेटा क्षैतिज (Horizontal Rows) में हो, तो लुकअप के लिए कौन सा फ़ंक्शन उपयोग होता है?"
    },
    "options": [
      {
        "text": "=VLOOKUP()",
        "correct": false
      },
      {
        "text": "=HLOOKUP()",
        "correct": true
      },
      {
        "text": "=ROWLOOKUP()",
        "correct": false
      },
      {
        "text": "=HORIZ()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "HLOOKUP searches horizontally across rows and returns data from the specified row index.",
      "gu": "HLOOKUP એ આડી રો માં ડેટા શોધવા માટે વપરાય છે.",
      "hi": "HLOOKUP क्षैतिज पंक्तियों में खोज करने के लिए उपयोग किया जाता है।"
    }
  },
  {
    "id": 30,
    "section": 3,
    "domain": "Lookup & Reference",
    "question": {
      "en": "Which function converts a text string like 'Sheet2!A1' into a live clickable cell reference?",
      "gu": "ટેક્સ્ટ તરીકે લખેલા સેલ એડ્રેસને જીવંત સેલ રેફરન્સમાં બદલવા કયું ફંકશન વપરાય છે?",
      "hi": "टेक्स्ट के रूप में लिखे सेल एड्रेस को वास्तविक सेल रेफरेंस में बदलने के लिए कौन सा फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=CONVERT()",
        "correct": false
      },
      {
        "text": "=INDIRECT()",
        "correct": true
      },
      {
        "text": "=REF()",
        "correct": false
      },
      {
        "text": "=POINTER()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "INDIRECT takes a text string and interprets it as an actual valid cell reference.",
      "gu": "INDIRECT ફંકશન ટેક્સ્ટમાં લખેલા સેલ એડ્રેસમાંથી વાસ્તવિક ડેટા ફેચ કરે છે.",
      "hi": "INDIRECT टेक्स्ट स्ट्रिंग को मान्य सेल रेफरेंस में बदलता है।"
    }
  },
  {
    "id": 31,
    "section": 4,
    "domain": "Dates & Calculations",
    "question": {
      "en": "Which formula calculates completed age in years between birthdate (B2) and today?",
      "gu": "જન્મતારીખ (B2) પરથી આજની તારીખ સુધીની પૂર્ણ ઉંમર (વર્ષોમાં) શોધવા કયું ફોર્મુલા સાચું છે?",
      "hi": "जन्मतिथि (B2) से आज तक की पूरी उम्र (वर्षों में) निकालने के लिए सही फ़ॉर्मूला कौन सा है?"
    },
    "options": [
      {
        "text": "=AGE(B2, TODAY())",
        "correct": false
      },
      {
        "text": "=DATEDIF(B2, TODAY(), \"Y\")",
        "correct": true
      },
      {
        "text": "=YEAR(B2) - YEAR(TODAY())",
        "correct": false
      },
      {
        "text": "=COUNTDAYS(B2, \"Y\")",
        "correct": false
      }
    ],
    "explanation": {
      "en": "DATEDIF with unit \"Y\" calculates completed years between start and end date accurately.",
      "gu": "DATEDIF(શરૂ_તારીખ, અંત_તારીખ, \"Y\") પૂર્ણ થયેલા વર્ષોની સાચી ઉંમર ગણે છે.",
      "hi": "DATEDIF(B2, TODAY(), \"Y\") पूर्ण वर्षों की सटीक आयु की गणना करता है।"
    }
  },
  {
    "id": 32,
    "section": 4,
    "domain": "Dates & Time",
    "question": {
      "en": "Which formula inserts the current date which updates automatically every time the workbook is opened?",
      "gu": "દરરોજ આપોઆપ અપડેટ થતી આજની તાજી તારીખ મેળવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "वर्कबुक खोलने पर स्वतः अपडेट होने वाली आज की ताज़ा तारीख के लिए कौन सा फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=DATE()",
        "correct": false
      },
      {
        "text": "=TODAY()",
        "correct": true
      },
      {
        "text": "=CURRENTDATE()",
        "correct": false
      },
      {
        "text": "=DAY()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=TODAY() returns the current system date and recalculates dynamically.",
      "gu": "=TODAY() ફોર્મુલા કમ્પ્યુટરની સિસ્ટમ મુજબ આજની લાઈવ તારીખ આપે છે.",
      "hi": "=TODAY() वर्तमान प्रणाली की तारीख लौटाता है।"
    }
  },
  {
    "id": 33,
    "section": 4,
    "domain": "Dates & Calculations",
    "question": {
      "en": "Which formula calculates a due date exactly 3 months after the invoice date in cell A2?",
      "gu": "ઇન્વોઇસ તારીખ (A2) થી બરાબર ૩ મહિના પછીની પાકતી તારીખ (Due Date) શોધવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "बिल की तारीख (A2) से ठीक 3 महीने बाद की देय तारीख निकालने के लिए क्या उपयोग होता है?"
    },
    "options": [
      {
        "text": "=A2 + 90",
        "correct": false
      },
      {
        "text": "=EDATE(A2, 3)",
        "correct": true
      },
      {
        "text": "=MONTH(A2) + 3",
        "correct": false
      },
      {
        "text": "=DATEMOVE(A2, 3)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "EDATE(start_date, months) adds or subtracts exact calendar months regardless of leap years or 30/31 days.",
      "gu": "=EDATE(A2, 3) દિવસોની ગડમથલ વગર બરાબર ૩ મહિના પછીની સચોટ તારીખ આપે છે.",
      "hi": "=EDATE(A2, 3) ठीक 3 महीने बाद की सही तारीख निकालता है।"
    }
  },
  {
    "id": 34,
    "section": 4,
    "domain": "Dates & Calculations",
    "question": {
      "en": "Which formula returns the exact last day of the current month for a date in A2?",
      "gu": "કોઈપણ તારીખ (A2) ના મહિનાનો છેલ્લો દિવસ (Last Day of Month) શોધવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "किसी तारीख (A2) के महीने का अंतिम दिन ज्ञात करने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=LASTDAY(A2)",
        "correct": false
      },
      {
        "text": "=EOMONTH(A2, 0)",
        "correct": true
      },
      {
        "text": "=ENDOFMONTH(A2)",
        "correct": false
      },
      {
        "text": "=MONTHEND(A2)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=EOMONTH(A2, 0) returns the last day of the month for the date in A2 (e.g. 28, 29, 30, or 31).",
      "gu": "=EOMONTH(A2, 0) તે મહિનાની છેલ્લી તારીખ (૨૮, ૨૯, ૩૦ કે ૩૧) શોધી આપે છે.",
      "hi": "=EOMONTH(A2, 0) महीने की अंतिम तारीख लौटाता है।"
    }
  },
  {
    "id": 35,
    "section": 4,
    "domain": "Dates & Calculations",
    "question": {
      "en": "Which formula calculates the completion date after 10 working days, excluding Saturdays, Sundays and holidays?",
      "gu": "શનિ-રવિ અને તહેવારોની રજાઓ બાદ કરી ૧૦ કામકાજના દિવસો (Working Days) પછીની તારીખ શોધવા શું વપરાય છે?",
      "hi": "शनिवार, रविवार और छुट्टियों को छोड़कर 10 कार्य दिवसों के बाद की तारीख के लिए कौन सा फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=A2 + 10",
        "correct": false
      },
      {
        "text": "=WORKDAY(A2, 10, Holidays)",
        "correct": true
      },
      {
        "text": "=DAYS360(A2, 10)",
        "correct": false
      },
      {
        "text": "=BUSINESSDAYS(A2, 10)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "WORKDAY automatically skips weekends and optional holiday dates to find the future working day.",
      "gu": "=WORKDAY(શરૂ_તારીખ, દિવસો, રજાઓ) રજાઓ બાદ કરીને સાચી ઓફિસ તારીખ આપે છે.",
      "hi": "WORKDAY सप्ताहांत और छुट्टियों को छोड़कर अगली कार्य तिथि देता है।"
    }
  },
  {
    "id": 36,
    "section": 4,
    "domain": "Text & String",
    "question": {
      "en": "How do you combine First Name in A2 and Last Name in B2 with a space in between?",
      "gu": "સેલ A2 નું પ્રથમ નામ અને B2 ની અટક વચ્ચે સ્પેસ રાખીને એકસાથે જોડવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "A2 में नाम और B2 में उपनाम को बीच में स्पेस देकर एक साथ जोड़ने के लिए क्या उपयोग होगा?"
    },
    "options": [
      {
        "text": "=A2 + B2",
        "correct": false
      },
      {
        "text": "=A2 & \" \" & B2",
        "correct": true
      },
      {
        "text": "=MERGE(A2, B2)",
        "correct": false
      },
      {
        "text": "=COMBINE(A2, \" \", B2)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "The ampersand (&) operator concatenates strings. =A2 & \" \" & B2 joins with a space.",
      "gu": "એમ્પરસેન્ડ (&) અથવા TEXTJOIN દ્વારા બે લખાણોને સ્પેસ સાથે જોડી શકાય છે.",
      "hi": "& ऑपरेटर या TEXTJOIN से दो टेक्स्ट को आसानी से जोड़ा जाता है।"
    }
  },
  {
    "id": 37,
    "section": 4,
    "domain": "Text & String",
    "question": {
      "en": "Which formula extracts the first 4 characters from the left side of text in cell A1?",
      "gu": "સેલ A1 માં લખેલા ટેક્સ્ટમાંથી ડાબી બાજુના પ્રથમ ૪ અક્ષરો અલગ તારવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "सेल A1 के टेक्स्ट में से बाईं ओर के पहले 4 अक्षर निकालने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=START(A1, 4)",
        "correct": false
      },
      {
        "text": "=LEFT(A1, 4)",
        "correct": true
      },
      {
        "text": "=FIRST(A1, 4)",
        "correct": false
      },
      {
        "text": "=SUBSTRING(A1, 4)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=LEFT(text, num_chars) returns the specified number of characters from the start of a text string.",
      "gu": "=LEFT(A1, 4) લખાણની શરૂઆતમાંથી ડાબી બાજુથી ૪ અક્ષરો કાપી આપે છે.",
      "hi": "=LEFT(A1, 4) टेक्स्ट की शुरुआत से 4 अक्षर निकालता है।"
    }
  },
  {
    "id": 38,
    "section": 4,
    "domain": "Text & String",
    "question": {
      "en": "Which formula extracts 3 characters starting from the 5th character of text in A1?",
      "gu": "સેલ A1 ના લખાણમાંથી ૫મા અક્ષરથી શરૂ કરીને વચ્ચેના ૩ અક્ષરો ખેંચવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "A1 के टेक्स्ट में 5वें अक्षर से शुरू करके बीच के 3 अक्षर निकालने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=CENTER(A1, 5, 3)",
        "correct": false
      },
      {
        "text": "=MID(A1, 5, 3)",
        "correct": true
      },
      {
        "text": "=BETWEEN(A1, 5, 3)",
        "correct": false
      },
      {
        "text": "=SLICE(A1, 5, 3)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=MID(text, start_num, num_chars) extracts characters from the middle of a string.",
      "gu": "=MID(A1, 5, 3) લખાણની વચ્ચેથી નક્કી કરેલા સ્થાન પરથી અક્ષરો અલગ કરે છે.",
      "hi": "=MID(A1, 5, 3) टेक्स्ट के बीच से निश्चित अक्षर निकालता है।"
    }
  },
  {
    "id": 39,
    "section": 4,
    "domain": "Text & String",
    "question": {
      "en": "Which modern Excel 365 formula splits text by comma or space across columns automatically?",
      "gu": "કોમા કે સ્પેસથી છૂટા પડેલા લખાણને અલગ અલગ કોલમમાં વહેંચી નાખવા એક્સેલ 365 નું કયું ફોર્મુલા વપરાય છે?",
      "hi": "कॉमा या स्पेस से अलग टेक्स्ट को अलग-अलग कॉलम में स्वचालित रूप से विभाजित करने वाला फॉर्मूला कौन सा है?"
    },
    "options": [
      {
        "text": "=SPLIT_COLUMN()",
        "correct": false
      },
      {
        "text": "=TEXTSPLIT(A2, ',')",
        "correct": true
      },
      {
        "text": "=PARSETXT(A2)",
        "correct": false
      },
      {
        "text": "=DIVIDETEXT(A2)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=TEXTSPLIT splits text strings by using column and row delimiters without Text to Columns wizard.",
      "gu": "TEXTSPLIT એ આધુનિક ફોર્મુલા છે જે લખાણને તરત જ અલગ અલગ સેલમાં સ્પિલ (Spill) કરી દે છે.",
      "hi": "TEXTSPLIT फ़ंक्शन आधुनिक एक्सेल में टेक्स्ट को आसानी से विभाजित करता है।"
    }
  },
  {
    "id": 40,
    "section": 4,
    "domain": "Text & String",
    "question": {
      "en": "Which formula cleans messy text by removing unwanted extra spaces between words and at ends?",
      "gu": "લખાણની આગળ, પાછળ કે શબ્દો વચ્ચે રહેલી વધારાની બિનજરૂરી સ્પેસ હટાવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "शब्दों के आगे, पीछे और बीच की अतिरिक्त खाली जगह (Spaces) हटाने के लिए कौन सा फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=CLEANSPACE()",
        "correct": false
      },
      {
        "text": "=TRIM()",
        "correct": true
      },
      {
        "text": "=COMPACT()",
        "correct": false
      },
      {
        "text": "=REMOVESPACE()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=TRIM(text) removes all irregular spaces from text except for single spaces between words.",
      "gu": "=TRIM() ફંકશન શબ્દો વચ્ચે ફક્ત એક સિંગલ સ્પેસ રાખીને બાકીની તમામ વધારાની જગ્યા સાફ કરે છે.",
      "hi": "=TRIM() शब्दों के बीच केवल एक स्पेस छोड़कर बाकी अतिरिक्त स्पेस हटा देता है।"
    }
  },
  {
    "id": 41,
    "section": 5,
    "domain": "Dynamic Arrays",
    "question": {
      "en": "Which formula extracts an automatic list of distinct values with all duplicates removed?",
      "gu": "કોઈપણ યાદીમાંથી ડુપ્લીકેટ નામ આપોઆપ હટાવીને માત્ર યુનિક લિસ્ટ બનાવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "किसी सूची में से डुप्लीकेट हटाकर केवल अद्वितीय (Unique) मान निकालने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=DISTINCT()",
        "correct": false
      },
      {
        "text": "=UNIQUE()",
        "correct": true
      },
      {
        "text": "=NODUPLICATES()",
        "correct": false
      },
      {
        "text": "=SINGLES()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=UNIQUE(range) returns unique distinct values from a range or array automatically.",
      "gu": "=UNIQUE(રેન્જ) ડુપ્લીકેટ એન્ટ્રીઓ આપમેળે દૂર કરીને માત્ર એક-એક અસલ નામ દર્શાવે છે.",
      "hi": "=UNIQUE(range) डुप्लीकेट मानों को हटाकर केवल विशिष्ट सूची देता है।"
    }
  },
  {
    "id": 42,
    "section": 5,
    "domain": "Dynamic Arrays",
    "question": {
      "en": "Which formula filters data dynamically based on criteria without needing Copy-Paste or Filter dropdowns?",
      "gu": "કોપી-પેસ્ટ કર્યા વગર માત્ર ચોક્કસ શરત વાળો ડેટા આપોઆપ ફિલ્ટર કરી નવી જગ્યાએ લાવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "कॉपी-पेस्ट किए बिना केवल विशिष्ट शर्त वाले डेटा को डायनामिक रूप से अलग करने के लिए क्या उपयोग होता है?"
    },
    "options": [
      {
        "text": "=AUTOEXTRACT()",
        "correct": false
      },
      {
        "text": "=FILTER()",
        "correct": true
      },
      {
        "text": "=QUERY()",
        "correct": false
      },
      {
        "text": "=EXTRACT()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=FILTER(array, include, [if_empty]) dynamically filters an array based on a boolean criteria.",
      "gu": "=FILTER(એરે, શરત) જ્યારે પણ મુખ્ય ડેટા બદલાય ત્યારે આપોઆપ પરિણામ પણ અપડેટ કરે છે.",
      "hi": "=FILTER(array, include) दिए गए मानदंडों के आधार पर डेटा को गतिशील रूप से फ़िल्टर करता है।"
    }
  },
  {
    "id": 43,
    "section": 5,
    "domain": "Dynamic Arrays",
    "question": {
      "en": "Which formula automatically sorts a table by sales column in descending order (highest to lowest)?",
      "gu": "વેચાણની કોલમ મુજબ સૌથી વધુથી સૌથી ઓછા ક્રમમાં ઓટોમેટિક સોર્ટ કરવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "बिक्री के आधार पर उच्चतम से निम्नतम क्रम में तालिका को स्वतः क्रमबद्ध करने के लिए कौन सा फ़ॉर्मूला है?"
    },
    "options": [
      {
        "text": "=ORDER(A2:B10, -1)",
        "correct": false
      },
      {
        "text": "=SORT(A2:B10, 2, -1)",
        "correct": true
      },
      {
        "text": "=ARRANGE(A2:B10, 'DESC')",
        "correct": false
      },
      {
        "text": "=RANKDATA(A2:B10)",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=SORT(array, [sort_index], [sort_order]) with sort_order = -1 sorts in descending order.",
      "gu": "=SORT(A2:B10, 2, -1) માં -1 આપવાથી ડિસેન્ડિંગ (ઉતરતા ક્રમમાં) સોર્ટ થાય છે.",
      "hi": "=SORT(array, index, -1) डेटा को अवरोही (Descending) क्रम में व्यवस्थित करता है।"
    }
  },
  {
    "id": 44,
    "section": 5,
    "domain": "Dynamic Arrays",
    "question": {
      "en": "Which modern function vertically stacks multiple tables or ranges into a single combined master table?",
      "gu": "અલગ અલગ શાખા કે મહિનાના ટેબલોને એકબીજાની નીચે જોડીને એક માસ્ટર ટેબલ બનાવવા કયું ફંકશન વપરાય છે?",
      "hi": "कई टेबलों को एक के नीचे एक जोड़कर एक मुख्य मास्टर टेबल बनाने के लिए कौन सा आधुनिक फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=APPEND()",
        "correct": false
      },
      {
        "text": "=VSTACK()",
        "correct": true
      },
      {
        "text": "=STACKDOWN()",
        "correct": false
      },
      {
        "text": "=UNION()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=VSTACK vertically combines arrays, while =HSTACK combines them horizontally.",
      "gu": "=VSTACK(ટેબલ૧, ટેબલ૨, ...) તમામ ટેબલોને એકબીજા નીચે જોડી દે છે.",
      "hi": "=VSTACK कई टेबलों को लंबवत रूप से एक साथ जोड़ता है।"
    }
  },
  {
    "id": 45,
    "section": 5,
    "domain": "Dynamic Arrays & Performance",
    "question": {
      "en": "Which modern function allows defining local variables inside a formula to boost calculation speed by 2x?",
      "gu": "ફોર્મુલાની અંદર વેરિએબલ બનાવીને લાંબી ગણતરીઓને સરળ અને બમણી ઝડપી બનાવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "फ़ॉर्मूले के अंदर वेरिएबल बनाकर गणना को तेज़ और समझने में आसान बनाने के लिए कौन सा फ़ंक्शन है?"
    },
    "options": [
      {
        "text": "=VAR()",
        "correct": false
      },
      {
        "text": "=LET()",
        "correct": true
      },
      {
        "text": "=DEFINE()",
        "correct": false
      },
      {
        "text": "=SET()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=LET(name, value, calculation) assigns names to calculation results, preventing repetitive computations.",
      "gu": "=LET() દ્વારા ગણતરીને નામ આપી શકાય છે જેથી એક્સેલ વારંવાર ગણતરી કર્યા વગર ફાસ્ટ કામ કરે છે.",
      "hi": "=LET() गणनाओं को नाम देकर वर्कबुक की गति को तेज़ करता है।"
    }
  },
  {
    "id": 46,
    "section": 5,
    "domain": "Errors & Diagnostics",
    "question": {
      "en": "Which function wraps a formula to replace ugly errors like #N/A or #DIV/0! with friendly text like 'Not Found'?",
      "gu": "#N/A કે #DIV/0! જેવી એરર છુપાવીને તેના બદલે 'Not Found' જેવો સુંદર મેસેજ દર્શાવવા કયું ફોર્મુલા વપરાય છે?",
      "hi": "#N/A या #DIV/0! जैसी एरर की जगह 'Not Found' जैसा साफ संदेश दिखाने के लिए कौन सा फ़ंक्शन उपयोग होता है?"
    },
    "options": [
      {
        "text": "=ERRORFIX()",
        "correct": false
      },
      {
        "text": "=IFERROR()",
        "correct": true
      },
      {
        "text": "=CATCH()",
        "correct": false
      },
      {
        "text": "=SAFEVALUE()",
        "correct": false
      }
    ],
    "explanation": {
      "en": "=IFERROR(value, value_if_error) traps any Excel error and returns a clean alternative value.",
      "gu": "=IFERROR(ફોર્મુલા, 'મેસેજ') જો ફોર્મુલામાં કોઈ ભૂલ આવે તો એરરના બદલે આપણો મેસેજ બતાવે છે.",
      "hi": "=IFERROR() किसी भी प्रकार की एरर आने पर वैकल्पिक मान प्रस्तुत करता है।"
    }
  },
  {
    "id": 47,
    "section": 5,
    "domain": "Errors & Diagnostics",
    "question": {
      "en": "What does the ##### display error in a cell usually signify?",
      "gu": "એક્સેલના સેલમાં ##### દેખાય તો તેનો વાસ્તવિક અર્થ શું થાય છે?",
      "hi": "सेल में ##### दिखाई देने का सामान्यतः क्या अर्थ होता है?"
    },
    "options": [
      {
        "text": "Formula syntax is corrupted",
        "correct": false
      },
      {
        "text": "Column width is too narrow to display the number or date",
        "correct": true
      },
      {
        "text": "Divided by zero",
        "correct": false
      },
      {
        "text": "The sheet is password protected",
        "correct": false
      }
    ],
    "explanation": {
      "en": "##### means the column is simply not wide enough to fit the number or formatted date. Double-click column border to fix.",
      "gu": "કોલમની પહોળાઈ ઓછી હોવાને કારણે નંબર કે તારીખ સમાઈ શકતી નથી. કોલમ પહોળી કરવાથી ઉકેલ આવી જાય છે.",
      "hi": "कॉलम की चौड़ाई कम होने से संख्या समा नहीं पाती। कॉलम चौड़ा करने से यह ठीक हो जाता है।"
    }
  },
  {
    "id": 48,
    "section": 5,
    "domain": "Errors & Diagnostics",
    "question": {
      "en": "What causes the #REF! error in Excel?",
      "gu": "એક્સેલમાં #REF! એરર આવવાનું મુખ્ય કારણ શું હોય છે?",
      "hi": "एक्सेल में #REF! एरर आने का मुख्य कारण क्या होता है?"
    },
    "options": [
      {
        "text": "Spelling mistake in function name",
        "correct": false
      },
      {
        "text": "A referenced cell, column, or sheet was deleted",
        "correct": true
      },
      {
        "text": "Text divided by number",
        "correct": false
      },
      {
        "text": "Number too large",
        "correct": false
      }
    ],
    "explanation": {
      "en": "#REF! occurs when a cell reference is invalid, usually because referenced cells or columns were deleted.",
      "gu": "ફોર્મુલામાં જે સેલ કે કોલમનો સંદર્ભ આપેલો હતો તેને ડિલીટ કરી દેવામાં આવતા #REF! એરર આવે છે.",
      "hi": "फॉर्मूले में संदर्भित सेल या कॉलम डिलीट हो जाने पर #REF! एरर आती है।"
    }
  },
  {
    "id": 49,
    "section": 5,
    "domain": "Shortcuts & Productivity",
    "question": {
      "en": "Which magic keyboard shortcut triggers Flash Fill to automatically detect patterns and extract data?",
      "gu": "પેટર્ન ઓળખીને ડેટા ઓટોમેટિક અલગ કરવા કે જોડવા ફ્લેશ ફિલ (Flash Fill) ની જાદુઈ શોર્ટકટ કઈ છે?",
      "hi": "पैटर्न पहचानकर स्वतः डेटा भरने या अलग करने के लिए फ्लैश फिल (Flash Fill) का शॉर्टकट क्या है?"
    },
    "options": [
      {
        "text": "Ctrl + F",
        "correct": false
      },
      {
        "text": "Ctrl + E",
        "correct": true
      },
      {
        "text": "Ctrl + Shift + F",
        "correct": false
      },
      {
        "text": "Alt + F4",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Ctrl + E triggers Flash Fill, instantly completing patterns like splitting names or extracting phone numbers.",
      "gu": "Ctrl + E દબાવવાથી ફ્લેશ ફિલ સક્રિય થાય છે અને આખી કોલમમાં પેટર્ન મુજબ ડેટા ભરાઈ જાય છે.",
      "hi": "Ctrl + E दबाने से फ्लैश फिल चालू होता है और सेकंडों में डेटा पैटर्न अनुसार भर जाता है।"
    }
  },
  {
    "id": 50,
    "section": 5,
    "domain": "Shortcuts & Productivity",
    "question": {
      "en": "Which keyboard shortcut converts a normal raw data range into an official Excel Table with filter headers?",
      "gu": "સાદા ડેટાને ફિલ્ટર અને બેન્ડેડ રો વાળા ઓફિશિયલ એક્સેલ ટેબલમાં ફેરવવા કઈ શોર્ટકટ વપરાય છે?",
      "hi": "सामान्य डेटा को फ़िल्टर और स्टाइल युक्त आधिकारिक एक्सेल टेबल में बदलने का शॉर्टकट क्या है?"
    },
    "options": [
      {
        "text": "Ctrl + Shift + T",
        "correct": false
      },
      {
        "text": "Ctrl + T (or Ctrl + L)",
        "correct": true
      },
      {
        "text": "Alt + T",
        "correct": false
      },
      {
        "text": "Ctrl + B",
        "correct": false
      }
    ],
    "explanation": {
      "en": "Ctrl + T (or Ctrl + L) instantly converts a data range into a structured Excel Table.",
      "gu": "Ctrl + T દબાવવાથી સાદો ડેટા સ્માર્ટ એક્સેલ ટેબલમાં રૂપાંતરિત થાય છે.",
      "hi": "Ctrl + T दबाने से सामान्य डेटा तुरंत संरचित एक्सेल टेबल में बदल जाता है।"
    }
  }
];

/**
 * =========================================================================
 * 1. PRACTICE QUIZ ENGINE (10 Dynamic Randomized Questions for Quick Training)
 * =========================================================================
 */
const QuizEngine = {
  currentQuestions: [],
  currentIndex: 0,
  userAnswers: {},
  quizFinished: false,

  initQuiz() {
    this.currentIndex = 0;
    this.userAnswers = {};
    this.quizFinished = false;

    // Pick 10 fresh randomized questions from the full bank
    const shuffledBank = shuffleArray(EXCEL_QUESTION_BANK);
    this.currentQuestions = shuffledBank.slice(0, 10).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  },

  renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    if (!this.currentQuestions || this.currentQuestions.length === 0) {
      this.initQuiz();
    }

    if (this.quizFinished) {
      this.finishQuiz();
      return;
    }

    const lang = I18N.currentLang;
    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const selectedOpt = this.userAnswers[this.currentIndex];
    const isAnswered = selectedOpt !== undefined;

    let html = `
      <div class="quiz-card bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md max-w-2xl mx-auto">
        <!-- Progress Bar and Counter -->
        <div class="flex items-center justify-between mb-4 border-b border-border pb-3">
          <span class="badge badge-category">
            ${I18N.t('quizProgress') || 'Question'} ${this.currentIndex + 1} of ${total}
          </span>
          <span class="text-xs font-bold text-accent">⚡ ${q.domain}</span>
        </div>

        <div class="w-full bg-card-subtle rounded-full h-2 mb-6 border border-border overflow-hidden">
          <div class="bg-accent h-2 rounded-full transition-all duration-300" style="width: ${((this.currentIndex + 1) / total) * 100}%;"></div>
        </div>

        <!-- Question Title -->
        <h3 class="text-lg md:text-xl font-bold mb-6 text-main">
          ${q.question[lang] || q.question.en}
        </h3>

        <!-- 4 Options -->
        <div class="space-y-3 mb-6">
          ${q.options.map((opt, optIdx) => {
            let btnClass = "quiz-option-btn";
            if (isAnswered) {
              if (opt.correct) btnClass += " correct";
              else if (selectedOpt === optIdx) btnClass += " incorrect";
            }
            return `
              <button class="${btnClass}" 
                      ${isAnswered ? 'disabled' : ''} 
                      onclick="QuizEngine.selectOption(${optIdx})">
                <span class="option-marker">${String.fromCharCode(65 + optIdx)}</span>
                <span class="option-text">${opt.text}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Explanation box when answered -->
        ${isAnswered ? `
          <div class="p-4 rounded-xl mb-6 bg-card-subtle border border-border text-sm">
            <h4 class="font-bold text-accent mb-1">💡 ${I18N.t('explanationLabel') || 'Explanation'}:</h4>
            <p class="text-main">${q.explanation[lang] || q.explanation.en}</p>
          </div>
        ` : ''}

        <!-- Next / Prev Controls -->
        <div class="flex items-center justify-between pt-4 border-t border-border">
          <button class="btn btn-secondary" 
                  ${this.currentIndex === 0 ? 'disabled' : ''} 
                  onclick="QuizEngine.prevQuestion()">
            ← ${I18N.t('prevQuestion')}
          </button>

          ${this.currentIndex < total - 1 ? `
            <button class="btn btn-primary" onclick="QuizEngine.nextQuestion()">
              ${I18N.t('nextQuestion')} →
            </button>
          ` : `
            <button class="btn btn-primary font-bold" onclick="QuizEngine.finishQuiz()">
              🏁 ${I18N.t('finishQuiz')}
            </button>
          `}
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  selectOption(optIdx) {
    if (this.userAnswers[this.currentIndex] !== undefined) return;
    this.userAnswers[this.currentIndex] = optIdx;
    this.renderQuiz();
  },

  nextQuestion() {
    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuiz();
    }
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuiz();
    }
  },

  finishQuiz() {
    this.quizFinished = true;
    const container = document.getElementById('quizContainer');
    if (!container) return;

    let score = 0;
    this.currentQuestions.forEach((q, idx) => {
      const selected = this.userAnswers[idx];
      if (selected !== undefined && q.options[selected] && q.options[selected].correct) {
        score++;
      }
    });

    const total = this.currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const lang = I18N.currentLang;

    let feedback = "";
    if (percentage >= 80) {
      feedback = lang === 'gu' ? "અદ્ભુત! તમે એક્સેલમાં એક્સપર્ટ છો!" : (lang === 'hi' ? "शानदार! आप एक्सेल में निपुण हैं!" : "Outstanding! You are an Excel Pro!");
    } else if (percentage >= 50) {
      feedback = lang === 'gu' ? "ખૂબ સરસ! થોડી વધુ પ્રેક્ટિસથી તમે માસ્ટર બની જશો!" : (lang === 'hi' ? "बहुत अच्छा! थोड़े और अभ्यास से आप मास्टर बन जाएंगे!" : "Great job! A little more practice and you'll master it!");
    } else {
      feedback = lang === 'gu' ? "ફોર્મુલા અને શોર્ટકટ્સ ફરીથી વાંચો અને ફરી પ્રયાસ કરો!" : (lang === 'hi' ? "फॉर्मूले और शॉर्टकट्स दोबारा पढ़ें और पुनः प्रयास करें!" : "Review the formulas and shortcuts and try again!");
    }

    container.innerHTML = `
      <div class="quiz-result-card text-center p-8 bg-card rounded-2xl border border-border shadow-xl max-w-xl mx-auto">
        <div class="result-trophy text-6xl mb-4">🏆</div>
        <h2 class="text-2xl font-bold mb-2">${I18N.t('quizScoreTitle')}</h2>
        <div class="text-5xl font-extrabold text-accent my-4">${score} / ${total}</div>
        <div class="text-lg text-muted mb-6 font-semibold">${percentage}% • ${feedback}</div>
        <div class="flex items-center justify-center gap-3 flex-wrap">
          <button class="btn btn-secondary px-6 py-3 font-bold" onclick="QuizEngine.retakeQuiz()">
            🔄 ${I18N.t('retakeQuiz')} (૧૦ નવા પ્રશ્નો)
          </button>
          <button class="btn btn-primary px-6 py-3 font-bold" onclick="App.switchTab('exam')">
            ⏱️ ૫૦ પ્રશ્નોની લાઈવ પરીક્ષા આપો →
          </button>
        </div>
      </div>
    `;
  },

  retakeQuiz() {
    this.initQuiz();
    this.renderQuiz();
  }
};

/**
 * =========================================================================
 * 2. LIVE CERTIFICATION EXAM ENGINE (50 Questions, 5 Sections of 10, 50-Min Timer)
 * =========================================================================
 */
const LiveExamEngine = {
  examActive: false,
  currentIndex: 0,
  currentSectionId: 1,
  questions: [],
  answers: {},
  timeRemainingSeconds: 3000, // 50 minutes (3000 seconds)
  timerInterval: null,
  examSubmitted: false,
  score: 0,

  startExam() {
    this.examActive = true;
    this.examSubmitted = false;
    this.currentIndex = 0;
    this.currentSectionId = 1;
    this.answers = {};
    this.timeRemainingSeconds = 3000; // 50 mins

    // Load full 50 questions across 5 sections with shuffled options
    this.questions = EXCEL_QUESTION_BANK.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    // Start 50-minute countdown timer
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeRemainingSeconds--;
      this.updateTimerDisplay();

      if (this.timeRemainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.submitExam(true);
      }
    }, 1000);

    this.renderExamInterface();
  },

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  updateTimerDisplay() {
    const timerEl = document.getElementById('examTimerClock');
    if (timerEl) {
      timerEl.innerText = this.formatTime(this.timeRemainingSeconds);
      if (this.timeRemainingSeconds <= 120) {
        timerEl.classList.add('timer-warning');
      }
    }
  },

  getSectionAnsweredCount(sectionId) {
    const sec = EXCEL_EXAM_SECTIONS.find(s => s.id === sectionId);
    if (!sec) return 0;
    let count = 0;
    for (let i = sec.range[0]; i <= sec.range[1]; i++) {
      if (this.answers[i] !== undefined) count++;
    }
    return count;
  },

  renderExamInterface() {
    const container = document.getElementById('examContainer');
    if (!container) return;

    if (!this.examActive) {
      this.renderExamLobby(container);
      return;
    }

    const lang = I18N.currentLang;
    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const selectedOpt = this.answers[this.currentIndex];
    const activeSec = EXCEL_EXAM_SECTIONS.find(s => s.id === this.currentSectionId) || EXCEL_EXAM_SECTIONS[0];
    const answeredTotal = Object.keys(this.answers).length;

    let html = `
      <div class="live-exam-wrapper max-w-5xl mx-auto">
        <!-- Top Exam Header: Status & Live Clock -->
        <div class="exam-status-bar bg-card p-4 rounded-2xl border border-border shadow-md flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <span class="text-xs uppercase font-bold text-accent block">Official Certification Exam • 50 Questions (5 Sections)</span>
            <h3 class="text-base font-extrabold text-main">Participant Live Assessment</h3>
          </div>

          <div class="flex items-center gap-4">
            <div class="text-xs font-bold text-muted hidden sm:block">
              Answered: <strong class="text-accent">${answeredTotal}/50</strong>
            </div>

            <div class="exam-clock-box bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-mono font-bold text-lg">
              <span>⏱️</span>
              <span id="examTimerClock">${this.formatTime(this.timeRemainingSeconds)}</span>
            </div>

            <button class="btn btn-primary btn-sm font-bold" onclick="LiveExamEngine.confirmSubmit()">
              🏁 ${I18N.t('examSubmitBtn')} (${answeredTotal}/50)
            </button>
          </div>
        </div>

        <!-- 5 Sections Navigation Tab Bar -->
        <div class="exam-section-tabs-bar flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          ${EXCEL_EXAM_SECTIONS.map(sec => {
            const isCurrentSec = sec.id === this.currentSectionId;
            const secAnswered = this.getSectionAnsweredCount(sec.id);
            return `
              <button class="exam-section-tab ${isCurrentSec ? 'active' : ''}" 
                      onclick="LiveExamEngine.switchSection(${sec.id})">
                <span class="sec-title">${sec.shortTitle[lang] || sec.shortTitle.en}</span>
                <span class="sec-badge ${secAnswered === 10 ? 'complete' : ''}">${secAnswered}/10 ✓</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Main Question Box (3 cols) -->
          <div class="lg:col-span-3 bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md">
            <div class="flex items-center justify-between mb-4 border-b border-border pb-3 flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="badge badge-category">Question ${this.currentIndex + 1} of ${total}</span>
                <span class="text-xs font-bold text-accent">${activeSec.title[lang] || activeSec.title.en}</span>
              </div>
              <span class="text-xs font-bold text-muted">Domain: ${q.domain}</span>
            </div>

            <h3 class="text-lg md:text-xl font-bold mb-6 text-main">
              ${q.question[lang] || q.question.en}
            </h3>

            <div class="space-y-3 mb-8">
              ${q.options.map((opt, optIdx) => `
                <button class="quiz-option-btn ${selectedOpt === optIdx ? 'correct' : ''}" 
                        onclick="LiveExamEngine.selectAnswer(${optIdx})">
                  <span class="option-marker">${String.fromCharCode(65 + optIdx)}</span>
                  <span class="option-text">${opt.text}</span>
                </button>
              `).join('')}
            </div>

            <!-- In-Question Navigation -->
            <div class="flex items-center justify-between pt-4 border-t border-border flex-wrap gap-2">
              <button class="btn btn-secondary btn-sm font-semibold" 
                      ${this.currentIndex === 0 ? 'disabled' : ''} 
                      onclick="LiveExamEngine.jumpToQuestion(${this.currentIndex - 1})">
                ← Previous Question
              </button>

              <div class="flex items-center gap-2">
                ${this.currentSectionId < 5 ? `
                  <button class="btn btn-secondary btn-sm" onclick="LiveExamEngine.switchSection(${this.currentSectionId + 1})">
                    Next Section ⏩
                  </button>
                ` : ''}

                <button class="btn btn-primary btn-sm font-semibold" 
                        ${this.currentIndex === total - 1 ? 'disabled' : ''} 
                        onclick="LiveExamEngine.jumpToQuestion(${this.currentIndex + 1})">
                  Next Question →
                </button>
              </div>
            </div>
          </div>

          <!-- Question Navigator Palette (1 col) -->
          <div class="bg-card p-4 rounded-2xl border border-border shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xs uppercase font-bold text-muted">Question Palette (૫૦ પ્રશ્નો):</h4>
              <span class="text-xs font-bold text-accent">${answeredTotal}/50</span>
            </div>

            <!-- 5 Section Groups in Palette -->
            <div class="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              ${EXCEL_EXAM_SECTIONS.map(sec => {
                const isSecActive = sec.id === this.currentSectionId;
                return `
                  <div class="p-2 rounded-xl ${isSecActive ? 'bg-highlight border border-green-500/40' : 'bg-card-subtle border border-border'}">
                    <div class="flex items-center justify-between text-xs font-bold text-muted mb-2">
                      <span class="${isSecActive ? 'text-accent' : ''}">${sec.shortTitle[lang] || sec.shortTitle.en}</span>
                      <span>${this.getSectionAnsweredCount(sec.id)}/10</span>
                    </div>
                    <div class="grid grid-cols-5 gap-1.5">
                      ${Array.from({ length: 10 }, (_, i) => {
                        const qIdx = sec.range[0] + i;
                        const isAnswered = this.answers[qIdx] !== undefined;
                        const isCurrent = this.currentIndex === qIdx;
                        let btnClass = "exam-palette-btn";
                        if (isCurrent) btnClass += " active";
                        else if (isAnswered) btnClass += " answered";
                        return `
                          <button class="${btnClass}" onclick="LiveExamEngine.jumpToQuestion(${qIdx})">
                            ${qIdx + 1}
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="text-xs space-y-1.5 text-muted border-t border-border pt-3 mt-3">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded bg-emerald-600 inline-block"></span> Answered
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded border border-border bg-card-subtle inline-block"></span> Unanswered
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  renderExamLobby(container) {
    const lang = I18N.currentLang;
    const courseDone = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();
    const courseProgress = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0;
    const completedModCount = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.completedModules.length : 0;

    container.innerHTML = `
      <div class="exam-lobby-card max-w-2xl mx-auto bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg text-center">
        <div class="text-6xl mb-4">⏱️</div>
        <h2 class="text-2xl md:text-3xl font-extrabold mb-2">${I18N.t('examTitle')}</h2>
        <p class="text-muted text-sm mb-6">${I18N.t('examSubtitle')}</p>

        <!-- Structured 5 Sections Overview Card -->
        <div class="text-left bg-card-subtle p-5 rounded-xl border border-border mb-6 space-y-3 text-sm">
          <h4 class="font-bold text-accent mb-1">📜 ${I18N.t('examInstructions')}</h4>
          <div class="space-y-1 text-xs text-muted">
            <p>• <strong>૫૦ પ્રશ્નો (૫ સેક્શન):</strong> દરેક સેક્શનમાં ૧૦ વિષયવાર પ્રશ્નો રહેશે.</p>
            <p>• <strong>૫૦:૦૦ મિનિટ સમય:</strong> લાઈવ ટાઈમર ચાલશે. સમય પૂર્ણ થતાં પરીક્ષા ઓટો-સબમિટ થશે.</p>
            <p>• <strong>પાસિંગ માર્ક્સ: ૭૦% (૩૫/૫૦ ગુણ):</strong> સર્ટિફિકેટ મેળવવા ઓછામાં ઓછા ૩૫ પ્રશ્નો સાચા હોવા જરૂરી છે.</p>
            <p>• <strong>કોર્સ પ્રગતિ:</strong> ${courseProgress}% (${completedModCount}/7 મોડ્યુલ્સ પૂર્ણ).</p>
          </div>

          <div class="pt-2 border-t border-border">
            <h5 class="font-bold text-xs uppercase text-main mb-2">📋 પરીક્ષાના ૫ સેક્શન્સ:</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-main">
              ${EXCEL_EXAM_SECTIONS.map(s => `
                <div class="p-2 rounded bg-card border border-border">
                  ${s.title[lang] || s.title.en}
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <button class="btn btn-primary px-8 py-3.5 text-lg font-bold w-full shadow-lg" onclick="LiveExamEngine.startExam()">
          ${I18N.t('examStartBtn')}
        </button>
      </div>
    `;
  },

  switchSection(sectionId) {
    this.currentSectionId = sectionId;
    const sec = EXCEL_EXAM_SECTIONS.find(s => s.id === sectionId);
    if (sec) {
      this.currentIndex = sec.range[0];
    }
    this.renderExamInterface();
  },

  selectAnswer(optIdx) {
    this.answers[this.currentIndex] = optIdx;
    this.renderExamInterface();
  },

  jumpToQuestion(idx) {
    if (idx >= 0 && idx < this.questions.length) {
      this.currentIndex = idx;
      // update currentSectionId based on question index
      const sec = EXCEL_EXAM_SECTIONS.find(s => idx >= s.range[0] && idx <= s.range[1]);
      if (sec) this.currentSectionId = sec.id;
      this.renderExamInterface();
    }
  },

  confirmSubmit() {
    const answeredCount = Object.keys(this.answers).length;
    const total = this.questions.length;
    const lang = I18N.currentLang;
    const msg = lang === 'gu' 
      ? `તમે ૫૦ માંથી ${answeredCount} પ્રશ્નોના જવાબો આપ્યા છે. શું તમે ખરેખર પરીક્ષા સબમિટ કરવા માંગો છો?`
      : (lang === 'hi' 
          ? `आपने 50 में से ${answeredCount} प्रश्नों के उत्तर दिए हैं। क्या आप परीक्षा सबमिट करना चाहते हैं?`
          : `You have answered ${answeredCount} of ${total} questions. Are you sure you want to submit?`);

    if (confirm(msg)) {
      this.submitExam(false);
    }
  },

  submitExam(timedOut) {
    clearInterval(this.timerInterval);
    this.examActive = false;
    this.examSubmitted = true;

    // Calculate overall and section-wise scores
    let correctCount = 0;
    const sectionScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    this.questions.forEach((q, idx) => {
      const selected = this.answers[idx];
      if (selected !== undefined && q.options[selected] && q.options[selected].correct) {
        correctCount++;
        if (q.section && sectionScores[q.section] !== undefined) {
          sectionScores[q.section]++;
        }
      }
    });

    this.score = correctCount;
    const total = this.questions.length; // 50
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= 70; // 35 / 50 is 70%
    const lang = I18N.currentLang;

    // Save exam passed status in localStorage
    if (passed) {
      localStorage.setItem('excel_master_exam_passed', 'true');
      localStorage.setItem('excel_master_exam_score', percentage);
    }

    const container = document.getElementById('examContainer');
    if (!container) return;

    const courseDone = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();
    const canUnlockCert = passed && courseDone;

    container.innerHTML = `
      <div class="exam-result-card max-w-2xl mx-auto bg-card p-6 md:p-8 rounded-2xl border border-border shadow-xl text-center">
        <div class="text-6xl mb-3">${passed ? '🎉' : '⚠️'}</div>
        <h2 class="text-2xl md:text-3xl font-extrabold mb-1">${passed ? 'EXAM PASSED!' : 'EXAM FAILED'}</h2>
        <p class="text-sm text-muted mb-4">${passed ? I18N.t('examPassedMsg') : I18N.t('examFailedMsg')}</p>

        <!-- Big Score Display -->
        <div class="text-5xl font-extrabold ${passed ? 'text-accent' : 'text-red-500'} my-2">
          ${correctCount} / ${total}
        </div>
        <div class="text-base font-bold text-muted mb-6">Score: ${percentage}% (Passing: 70% • 35/50)</div>

        <!-- Section-wise Performance Breakdown -->
        <div class="bg-card-subtle p-4 rounded-xl border border-border mb-6 text-left">
          <h4 class="font-bold text-sm text-accent mb-3">📊 સેક્શન-વાર પરિણામ (Section Performance Breakdown):</h4>
          <div class="space-y-2">
            ${EXCEL_EXAM_SECTIONS.map(s => {
              const secScore = sectionScores[s.id] || 0;
              const secPct = Math.round((secScore / 10) * 100);
              return `
                <div>
                  <div class="flex items-center justify-between text-xs font-semibold mb-1">
                    <span>${s.title[lang] || s.title.en}</span>
                    <span class="font-mono font-bold ${secScore >= 7 ? 'text-green-600' : 'text-amber-600'}">
                      ${secScore}/10 (${secPct}%)
                    </span>
                  </div>
                  <div class="w-full bg-card rounded-full h-2 overflow-hidden border border-border">
                    <div class="${secScore >= 7 ? 'bg-accent' : 'bg-amber-500'} h-2 rounded-full" style="width: ${secPct}%;"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Certification Eligibility Status Box -->
        <div class="p-4 rounded-xl border mb-6 text-left text-xs space-y-2.5 ${canUnlockCert ? 'bg-highlight border-green-500' : 'bg-card-subtle border-border'}">
          <h4 class="font-bold text-sm text-main">🎓 સર્ટિફિકેટ પાત્રતા ચકાસણી:</h4>
          <div class="flex items-center justify-between">
            <span>૧. એક્સેલ ઓનલાઇન કોર્સ પૂર્ણ (૧૦૦%):</span>
            <span class="font-bold ${courseDone ? 'text-green-600' : 'text-amber-600'}">
              ${courseDone ? '✓ પૂર્ણ થયેલ' : '✗ બાકી (' + (typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0) + '%)'}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span>૨. લાઈવ ૫૦-પ્રશ્નો પરીક્ષા પાસ (૭૦%+):</span>
            <span class="font-bold ${passed ? 'text-green-600' : 'text-red-600'}">
              ${passed ? '✓ પાસ થયેલ (' + percentage + '%)' : '✗ નાપાસ (' + percentage + '%)'}
            </span>
          </div>
        </div>

        <div class="flex items-center justify-center gap-3 flex-wrap">
          <button class="btn btn-secondary" onclick="LiveExamEngine.startExam()">
            🔄 Retake Live Exam (૫૦ પ્રશ્નો)
          </button>
          ${canUnlockCert ? `
            <button class="btn btn-primary font-bold px-6" onclick="App.switchTab('certificate')">
              🎓 Claim & Download Certificate →
            </button>
          ` : `
            <button class="btn btn-secondary font-bold" onclick="App.switchTab('course')">
              📚 Go to Course Modules →
            </button>
          `}
        </div>
      </div>
    `;
  }
};
