/**
 * Excel Master - Smart Formula Assistant / Generator
 * Generates custom Excel formulas based on user scenario selections.
 */

const FormulaGenerator = {
  presets: [
    {
      id: "gst",
      title: {
        en: "Calculate GST / Tax Amount",
        gu: "જીએસટી (GST) અથવા ટેક્સની રકમ ગણવી",
        hi: "जीएसटी (GST) या टैक्स राशि की गणना करना"
      },
      fields: [
        { id: "amountCell", label: { en: "Amount Cell (e.g. B2)", gu: "મૂળ રકમ વાળો સેલ (દા.ત. B2)", hi: "मूल राशि वाला सेल (उदा. B2)" }, default: "B2" },
        { id: "rate", label: { en: "GST Rate % (e.g. 18)", gu: "જીએસટી ટકાવારી % (દા.ત. 18)", hi: "जीएसटी दर % (उदा. 18)" }, default: "18" }
      ],
      generate: (vals) => ({
        formula: `=ROUND(${vals.amountCell} * ${vals.rate}%, 2)`,
        totalFormula: `=${vals.amountCell} + ROUND(${vals.amountCell} * ${vals.rate}%, 2)`,
        explain: {
          en: `Multiplies cell ${vals.amountCell} by ${vals.rate}% and rounds to 2 decimal places.`,
          gu: `સેલ ${vals.amountCell} ની રકમને ${vals.rate}% વડે ગુણીને ૨ પોઈન્ટ સુધી રાઉન્ડ ફિગર કરે છે.`,
          hi: `सेल ${vals.amountCell} को ${vals.rate}% से गुणा करके २ दशमलव तक राउंड ऑफ करता है।`
        }
      })
    },
    {
      id: "passfail",
      title: {
        en: "Pass / Fail or Target Met Condition",
        gu: "પાસ / નાપાસ અથવા ટાર્ગેટ પૂર્ણ થયો કે નહીં",
        hi: "पास / फेल या लक्ष्य पूरा हुआ या नहीं की शर्त"
      },
      fields: [
        { id: "scoreCell", label: { en: "Score/Sales Cell (e.g. C2)", gu: "માર્ક્સ કે સેલ્સ વાળો સેલ (દા.ત. C2)", hi: "अंक या बिक्री वाला सेल (उदा. C2)" }, default: "C2" },
        { id: "minVal", label: { en: "Threshold / Passing Mark (e.g. 35)", gu: "પાસિંગ માર્ક્સ / લઘુત્તમ માપદંડ (દા.ત. 35)", hi: "उत्तीर्ण अंक / सीमा (उदा. 35)" }, default: "35" }
      ],
      generate: (vals) => ({
        formula: `=IF(${vals.scoreCell}>=${vals.minVal}, "Pass", "Fail")`,
        explain: {
          en: `If ${vals.scoreCell} is greater than or equal to ${vals.minVal}, returns 'Pass', otherwise 'Fail'.`,
          gu: `જો ${vals.scoreCell} માં કિંમત ${vals.minVal} કે તેથી વધુ હશે તો 'Pass', નહીંતર 'Fail' દર્શાવશે.`,
          hi: `यदि ${vals.scoreCell} का मान ${vals.minVal} या अधिक है तो 'Pass', अन्यथा 'Fail' दिखेगा।`
        }
      })
    },
    {
      id: "emi",
      title: {
        en: "Calculate Monthly Loan EMI",
        gu: "માસિક લોન હપ્તો (EMI) ગણવો",
        hi: "मासिक लोन किस्त (EMI) निकालना"
      },
      fields: [
        { id: "loan", label: { en: "Loan Amount (₹)", gu: "કુલ લોનની રકમ (₹)", hi: "लोन की कुल राशि (₹)" }, default: "500000" },
        { id: "rate", label: { en: "Annual Interest % (e.g. 9.5)", gu: "વાર્ષિક વ્યાજ દર % (દા.ત. 9.5)", hi: "वार्षिक ब्याज दर % (उदा. 9.5)" }, default: "9.5" },
        { id: "tenure", label: { en: "Tenure in Years (e.g. 5)", gu: "સમયગાળો (વર્ષમાં)", hi: "अवधि (वर्षों में)" }, default: "5" }
      ],
      generate: (vals) => ({
        formula: `=PMT(${vals.rate}%/12, ${vals.tenure}*12, -${vals.loan})`,
        explain: {
          en: `Calculates exact monthly EMI based on ${vals.rate}% annual interest divided by 12, across ${vals.tenure} years.`,
          gu: `વાર્ષિક ${vals.rate}% વ્યાજને ૧૨ વડે ભાગીને ${vals.tenure} વર્ષ (મહિના) માટે ચોક્કસ માસિક હપ્તો ગણે છે.`,
          hi: `वार्षिक ${vals.rate}% ब्याज दर को 12 से भाग देकर ${vals.tenure} वर्षों के लिए मासिक ईएमआई निकालता है।`
        }
      })
    },
    {
      id: "age",
      title: {
        en: "Calculate Exact Age from Birthdate",
        gu: "જન્મતારીખ પરથી ચોક્કસ ઉંમર (વર્ષમાં)",
        hi: "जन्मतिथि से सटीक उम्र (वर्षों में) निकालना"
      },
      fields: [
        { id: "dobCell", label: { en: "Date of Birth Cell (e.g. B2)", gu: "જન્મતારીખ વાળો સેલ (દા.ત. B2)", hi: "जन्मतिथि वाला सेल (उदा. B2)" }, default: "B2" }
      ],
      generate: (vals) => ({
        formula: `=DATEDIF(${vals.dobCell}, TODAY(), "Y")`,
        detailedFormula: `=DATEDIF(${vals.dobCell}, TODAY(), "Y") & " Yrs, " & DATEDIF(${vals.dobCell}, TODAY(), "YM") & " Mos"`,
        explain: {
          en: `Calculates exact completed years between date in ${vals.dobCell} and today's date.`,
          gu: `સેલ ${vals.dobCell} માં રહેલી જન્મતારીખ અને આજની તારીખ વચ્ચે પૂર્ણ થયેલા વર્ષો ગણે છે.`,
          hi: `सेल ${vals.dobCell} की जन्मतिथि और आज की तारीख के बीच पूरे हुए वर्षों की गणना करता है।`
        }
      })
    },
    {
      id: "lookup",
      title: {
        en: "Search Value by ID (XLOOKUP)",
        gu: "કોડ / ID પરથી વિગત શોધવી (XLOOKUP)",
        hi: "आईडी / कोड से जानकारी खोजना (XLOOKUP)"
      },
      fields: [
        { id: "searchId", label: { en: "Search Value Cell (e.g. F2)", gu: "તમે જે ID શોધો છો તે સેલ (દા.ત. F2)", hi: "सर्च आईडी वाला सेल (उदा. F2)" }, default: "F2" },
        { id: "idRange", label: { en: "ID Column Range (e.g. A2:A100)", gu: "ID ની આખી કોલમ (દા.ત. A2:A100)", hi: "आईडी का कॉलम (उदा. A2:A100)" }, default: "A2:A100" },
        { id: "resRange", label: { en: "Result Column Range (e.g. D2:D100)", gu: "પરિણામની કોલમ (દા.ત. D2:D100)", hi: "परिणाम वाला कॉलम (उदा. D2:D100)" }, default: "D2:D100" }
      ],
      generate: (vals) => ({
        formula: `=XLOOKUP(${vals.searchId}, ${vals.idRange}, ${vals.resRange}, "Not Found")`,
        explain: {
          en: `Searches for ID in ${vals.idRange} and returns matching value from ${vals.resRange}. If not found, shows "Not Found".`,
          gu: `${vals.idRange} માં ID શોધીને તેની સામે ${vals.resRange} માંથી જવાબ લાવે છે. જો ન મળે તો "Not Found" બતાવે છે.`,
          hi: `${vals.idRange} में आईडी खोजकर ${vals.resRange} से परिणाम लाता है।`
        }
      })
    }
  ],

  renderGenerator() {
    const container = document.getElementById('generatorContainer');
    if (!container) return;

    const lang = I18N.currentLang;

    let html = `
      <div class="generator-card">
        <!-- Natural Language AI Search Box -->
        <div class="mb-6 p-4 bg-card-subtle rounded-xl border border-border">
          <label class="font-bold mb-2 block text-sm text-accent">
            🤖 Smart Natural Language Query (કુદરતી ભાષામાં પૂછો):
          </label>
          <div class="flex gap-2">
            <input type="text" 
                   id="naturalLanguageQueryInput" 
                   class="form-control" 
                   placeholder="${I18N.t('askAiPrompt')}" 
                   onkeydown="if(event.key==='Enter') FormulaGenerator.processNaturalQuery()" />
            <button class="btn btn-primary" onclick="FormulaGenerator.processNaturalQuery()">
              ${I18N.t('aiSearchBtn')}
            </button>
          </div>
          <div id="aiSuggestionResult" class="mt-3 hidden p-3 bg-highlight rounded-lg text-sm font-semibold"></div>
        </div>

        <div class="text-xs uppercase font-bold text-muted text-center my-3">─── OR CHOOSE PRESET (અથવા નીચેથી પસંદ કરો) ───</div>

        <div class="form-group mb-4">
          <label class="font-bold mb-2 block text-sm">
            ${I18N.t('genSelectPrompt')}
          </label>
          <select id="genPresetSelect" class="form-control" onchange="FormulaGenerator.onPresetChange(this.value)">
            ${this.presets.map((p, i) => `
              <option value="${p.id}">${p.title[lang] || p.title.en}</option>
            `).join('')}
          </select>
        </div>

        <div id="genFieldsContainer" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"></div>

        <button class="btn btn-primary w-full py-3 text-lg font-bold" onclick="FormulaGenerator.executeGeneration()">
          ⚡ ${I18N.t('genResultBtn')}
        </button>

        <div id="genOutputCard" class="mt-6 hidden">
          <div class="generated-formula-box">
            <span class="text-xs uppercase font-bold tracking-wider text-muted block mb-1">
              ${I18N.t('formulaAppliedLabel')}
            </span>
            <div class="flex items-center justify-between gap-2">
              <code id="genResultFormula" class="text-xl font-mono font-bold text-accent"></code>
              <button class="btn btn-secondary btn-sm" onclick="FormulaGenerator.copyGenerated()">
                📋 ${I18N.t('copyFormula')}
              </button>
            </div>
          </div>
          <div class="mt-3 p-3 bg-card-subtle rounded-lg text-sm" id="genResultExplanation"></div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.renderFields(this.presets[0].id);
  },

  onPresetChange(presetId) {
    this.renderFields(presetId);
    const outputCard = document.getElementById('genOutputCard');
    if (outputCard) outputCard.classList.add('hidden');
  },

  renderFields(presetId) {
    const preset = this.presets.find(p => p.id === presetId) || this.presets[0];
    const container = document.getElementById('genFieldsContainer');
    if (!container) return;

    const lang = I18N.currentLang;
    container.innerHTML = preset.fields.map(f => `
      <div class="form-field">
        <label class="block text-xs font-semibold mb-1 text-muted">
          ${f.label[lang] || f.label.en}
        </label>
        <input type="text" id="gen_input_${f.id}" class="form-control" value="${f.default}" />
      </div>
    `).join('');
  },

  executeGeneration() {
    const select = document.getElementById('genPresetSelect');
    const presetId = select ? select.value : this.presets[0].id;
    const preset = this.presets.find(p => p.id === presetId);
    if (!preset) return;

    const values = {};
    preset.fields.forEach(f => {
      const el = document.getElementById(`gen_input_${f.id}`);
      values[f.id] = el ? el.value.trim() : f.default;
    });

    const res = preset.generate(values);
    const outputCard = document.getElementById('genOutputCard');
    const codeEl = document.getElementById('genResultFormula');
    const explainEl = document.getElementById('genResultExplanation');

    if (codeEl) codeEl.innerText = res.formula;
    if (explainEl) {
      const lang = I18N.currentLang;
      explainEl.innerHTML = `<strong>💡 ${I18N.t('genExplanation')}</strong> ${res.explain[lang] || res.explain.en}`;
    }
    if (outputCard) outputCard.classList.remove('hidden');
  },

  copyGenerated() {
    const codeEl = document.getElementById('genResultFormula');
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.innerText).then(() => {
        App.showToast(I18N.t('copied'));
      });
    }
  },

  /**
   * Process Natural Language Queries in Gujarati, Hindi, or English
   */
  processNaturalQuery() {
    const input = document.getElementById('naturalLanguageQueryInput');
    const resultBox = document.getElementById('aiSuggestionResult');
    if (!input || !resultBox) return;

    const query = input.value.toLowerCase().trim();
    if (!query) return;

    let matched = null;

    // Pattern matching rules for Gujarati, Hindi, and English
    if (query.includes('gst') || query.includes('ટેક્સ') || query.includes('ટેકસ') || query.includes('tax') || query.includes('tax')) {
      matched = {
        name: "GST Calculation",
        formula: "=ROUND(B2 * 18%, 2)",
        explain: "18% GST calculation on cell B2 rounded off to 2 decimals."
      };
    } else if (query.includes('જોડ') || query.includes('નામ') || query.includes('merge') || query.includes('join') || query.includes('मिला')) {
      matched = {
        name: "Merge Text / Names (TEXTJOIN)",
        formula: '=TEXTJOIN(" ", TRUE, A2, B2)',
        explain: "Merges first and last name with space and skips empty cells."
      };
    } else if (query.includes('ઉંમર') || query.includes('age') || query.includes('જન્મ') || query.includes('उम्र')) {
      matched = {
        name: "Calculate Age (DATEDIF)",
        formula: '=DATEDIF(B2, TODAY(), "Y")',
        explain: "Calculates exact age in completed years between birthdate in B2 and today."
      };
    } else if (query.includes('પાસ') || query.includes('pass') || query.includes('fail') || query.includes('રિઝલ્ટ') || query.includes('फेल')) {
      matched = {
        name: "Pass or Fail Condition (IF)",
        formula: '=IF(B2>=35, "Pass", "Fail")',
        explain: "Checks if marks are >= 35, shows 'Pass' or 'Fail'."
      };
    } else if (query.includes('મોટો') || query.includes('સૌથી વધુ') || query.includes('highest') || query.includes('max') || query.includes('अधिकतम')) {
      matched = {
        name: "Find Highest Number (MAX)",
        formula: '=MAX(B2:B100)',
        explain: "Finds the largest value in range B2:B100."
      };
    } else if (query.includes('પગાર') || query.includes('શોધ') || query.includes('search') || query.includes('vlookup') || query.includes('xlookup') || query.includes('खोज')) {
      matched = {
        name: "Modern Lookup (XLOOKUP)",
        formula: '=XLOOKUP(F2, A2:A100, D2:D100, "Not Found")',
        explain: "Finds ID in A2:A100 and returns salary from D2:D100."
      };
    } else if (query.includes('સ્પેસ') || query.includes('space') || query.includes('સાફ') || query.includes('clean') || query.includes('अतिरिक्त')) {
      matched = {
        name: "Clean Extra Spaces (TRIM)",
        formula: '=TRIM(A2)',
        explain: "Removes extra leading, trailing, and middle spaces."
      };
    } else if (query.includes('યુનિક') || query.includes('ડુપ્લીકેટ') || query.includes('unique') || query.includes('duplicate')) {
      matched = {
        name: "Remove Duplicates (UNIQUE)",
        formula: '=UNIQUE(A2:A100)',
        explain: "Extracts an automatic list of unique values without duplicates."
      };
    } else if (query.includes('દિવસ') || query.includes('કામ') || query.includes('working') || query.includes('days') || query.includes('कार्य')) {
      matched = {
        name: "Working Days (NETWORKDAYS)",
        formula: '=NETWORKDAYS(A2, B2, Holidays!A1:A10)',
        explain: "Counts working days excluding weekends and official holidays."
      };
    } else {
      matched = {
        name: "Dynamic Array Filter (FILTER)",
        formula: '=FILTER(A2:D50, B2:B50="Gujarat", "No Records")',
        explain: "Filters all matching records dynamically."
      };
    }

    resultBox.innerHTML = `
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div>
          <span class="text-xs text-muted font-bold block">💡 Suggested Formula (${matched.name}):</span>
          <code class="text-base font-bold text-accent">${matched.formula}</code>
          <p class="text-xs text-muted mt-1">${matched.explain}</p>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="App.copyText('${matched.formula}')">
          📋 Copy
        </button>
      </div>
    `;
    resultBox.classList.remove('hidden');
  }
};

