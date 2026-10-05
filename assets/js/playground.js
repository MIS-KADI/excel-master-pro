/**
 * Excel Master - Interactive Live Spreadsheet Playground
 * Real-time formula evaluator, editable grid cells, preset business templates.
 */

const ExcelPlayground = {
  activeCell: { col: 'C', row: 7 },
  selectedTemplate: 'sales',

  templates: {
    sales: {
      title: { en: "Monthly Sales Report", gu: "માસિક વેચાણ રિપોર્ટ", hi: "मासिक बिक्री रिपोर्ट" },
      cols: ["A", "B", "C", "D"],
      headers: {
        en: ["Salesperson", "Region", "Sales Amount", "Status"],
        gu: ["સેલ્સમેન", "વિસ્તાર", "વેચાણ રકમ (₹)", "સ્થિતિ"],
        hi: ["विक्रेता", "क्षेत्र", "बिक्री राशि (₹)", "स्थिति"]
      },
      data: [
        ["Rajesh Patel", "North", 45000, '=IF(C2>=40000,"Target Met","Pending")'],
        ["Priya Sharma", "West", 62000, '=IF(C3>=40000,"Target Met","Pending")'],
        ["Amit Verma", "North", 28000, '=IF(C4>=40000,"Target Met","Pending")'],
        ["Sneha Joshi", "South", 54000, '=IF(C5>=40000,"Target Met","Pending")'],
        ["Vikas Mehta", "West", 38000, '=IF(C6>=40000,"Target Met","Pending")']
      ],
      defaultFormula: "=SUM(C2:C6)"
    },
    marks: {
      title: { en: "Student Marksheet", gu: "વિદ્યાર્થી ગુણપત્રક", hi: "छात्र अंकतालिका" },
      cols: ["A", "B", "C", "D"],
      headers: {
        en: ["Roll No", "Student Name", "Marks (Out of 100)", "Result"],
        gu: ["રોલ નં.", "વિદ્યાર્થીનું નામ", "ગુણ (૧૦૦ માંથી)", "પરિણામ"],
        hi: ["रोल नं.", "छात्र का नाम", "अंक (100 में से)", "परिणाम"]
      },
      data: [
        ["101", "Aakash Dave", 82, '=IF(C2>=35,"Pass","Fail")'],
        ["102", "Bhavik Shah", 29, '=IF(C3>=35,"Pass","Fail")'],
        ["103", "Charmi Patel", 74, '=IF(C4>=35,"Pass","Fail")'],
        ["104", "Deepak Soni", 91, '=IF(C5>=35,"Pass","Fail")'],
        ["105", "Ekta Mehta", 33, '=IF(C6>=35,"Pass","Fail")']
      ],
      defaultFormula: "=AVERAGE(C2:C6)"
    },
    expense: {
      title: { en: "Office Expense Sheet", gu: "ઓફિસ ખર્ચ હિસાબ", hi: "कार्यालय खर्च शीट" },
      cols: ["A", "B", "C", "D"],
      headers: {
        en: ["Expense Item", "Category", "Amount (₹)", "Approved"],
        gu: ["ખર્ચ વિગત", "કેટેગરી", "રકમ (₹)", "મંજૂરી"],
        hi: ["खर्च विवरण", "श्रेणी", "राशि (₹)", "स्वीकृति"]
      },
      data: [
        ["Office Rent", "Facility", 35000, "Yes"],
        ["Electricity Bill", "Utilities", 7800, "Yes"],
        ["Internet Fiber", "Utilities", 2400, "Yes"],
        ["Stationery & Tea", "Pantry", 4500, "Yes"],
        ["Printer Cartridges", "Supplies", 3200, "Yes"]
      ],
      defaultFormula: "=SUM(C2:C6)"
    },
    staff: {
      title: { en: "Employee Salary List", gu: "કર્મચારી પગાર યાદી", hi: "कर्मचारी वेतन सूची" },
      cols: ["A", "B", "C", "D"],
      headers: {
        en: ["Emp Name", "Department", "Basic Salary (₹)", "Bonus (10%)"],
        gu: ["કર્મચારી નામ", "વિભાગ", "મૂળ પગાર (₹)", "બોનસ (10%)"],
        hi: ["कर्मचारी नाम", "विभाग", "मूल वेतन (₹)", "बोनस (10%)"]
      },
      data: [
        ["Karan Joshi", "Finance", 50000, "=C2*0.1"],
        ["Meera Bhatt", "Tech", 75000, "=C3*0.1"],
        ["Nitin Trivedi", "Sales", 42000, "=C4*0.1"],
        ["Pooja Panchal", "HR", 48000, "=C5*0.1"],
        ["Ramesh Vyas", "Admin", 32000, "=C6*0.1"]
      ],
      defaultFormula: "=MAX(C2:C6)"
    }
  },

  // State data for currently rendered grid
  gridState: [],

  /**
   * Initialize or switch template
   */
  loadTemplate(templateKey) {
    if (!this.templates[templateKey]) templateKey = 'sales';
    this.selectedTemplate = templateKey;
    const tmpl = this.templates[templateKey];

    // Clone data into gridState
    this.gridState = tmpl.data.map(row => [...row]);
    this.renderPlayground();
    this.setFormulaBar(tmpl.defaultFormula);
    this.evaluateCurrentFormula();
  },

  /**
   * Set formula bar text
   */
  setFormulaBar(formula) {
    const input = document.getElementById('playgroundFormulaInput');
    if (input) input.value = formula;
  },

  /**
   * Render the interactive spreadsheet UI
   */
  renderPlayground() {
    const container = document.getElementById('playgroundGridContainer');
    if (!container) return;

    const tmpl = this.templates[this.selectedTemplate];
    const lang = I18N.currentLang;
    const headers = tmpl.headers[lang] || tmpl.headers.en;

    let html = `
      <div class="excel-sheet-wrapper">
        <table class="excel-sheet-table" id="interactiveSheet">
          <thead>
            <tr>
              <th class="excel-corner-cell"></th>
              ${tmpl.cols.map(c => `<th class="excel-col-header">${c}</th>`).join('')}
            </tr>
            <tr class="excel-th-row">
              <th class="excel-row-num">1</th>
              ${headers.map((h, idx) => `
                <th class="excel-header-label" data-col="${tmpl.cols[idx]}" data-row="1">
                  ${h}
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
    `;

    this.gridState.forEach((rowValues, rIdx) => {
      const rowNum = rIdx + 2; // Data rows start at 2
      html += `<tr><td class="excel-row-num">${rowNum}</td>`;

      rowValues.forEach((cellVal, cIdx) => {
        const colLetter = tmpl.cols[cIdx];
        const cellCoord = `${colLetter}${rowNum}`;
        const displayVal = this.getDisplayValueOfCell(cellVal, rIdx, cIdx);

        html += `
          <td class="excel-cell" 
              contenteditable="true" 
              data-col="${colLetter}" 
              data-row="${rowNum}" 
              data-raw="${this.escapeHtml(String(cellVal))}"
              id="cell-${cellCoord}">
            ${displayVal}
          </td>
        `;
      });

      html += `</tr>`;
    });

    // Summary calculation row
    const targetRowNum = this.gridState.length + 2;
    html += `
            <tr class="excel-total-row">
              <td class="excel-row-num">${targetRowNum}</td>
              <td class="excel-cell font-bold text-muted">${lang === 'gu' ? 'કુલ / ગણતરી' : (lang === 'hi' ? 'कुल / गणना' : 'Result')}</td>
              <td class="excel-cell"></td>
              <td class="excel-cell excel-highlight-result font-bold" id="cell-C${targetRowNum}" data-col="C" data-row="${targetRowNum}">
                --
              </td>
              <td class="excel-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;
    this.attachCellListeners();
  },

  /**
   * Attach edit & focus listeners to cells
   */
  attachCellListeners() {
    const cells = document.querySelectorAll('.excel-cell[contenteditable="true"]');
    cells.forEach(cell => {
      cell.addEventListener('focus', (e) => {
        const raw = e.target.getAttribute('data-raw');
        e.target.innerText = raw;
        const col = e.target.getAttribute('data-col');
        const row = e.target.getAttribute('data-row');
        this.updateActiveCellDisplay(`${col}${row}`);
      });

      cell.addEventListener('blur', (e) => {
        const colLetter = e.target.getAttribute('data-col');
        const rowNum = parseInt(e.target.getAttribute('data-row'), 10);
        const tmpl = this.templates[this.selectedTemplate];
        const cIdx = tmpl.cols.indexOf(colLetter);
        const rIdx = rowNum - 2;

        let newVal = e.target.innerText.trim();
        if (!isNaN(newVal) && newVal !== "") {
          newVal = Number(newVal);
        }

        e.target.setAttribute('data-raw', newVal);
        this.gridState[rIdx][cIdx] = newVal;

        e.target.innerText = this.getDisplayValueOfCell(newVal, rIdx, cIdx);
        this.evaluateCurrentFormula();
      });

      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.target.blur();
        }
      });
    });
  },

  updateActiveCellDisplay(coord) {
    const badge = document.getElementById('activeCellBadge');
    if (badge) badge.innerText = coord;
  },

  getDisplayValueOfCell(val, rIdx, cIdx) {
    if (typeof val === 'string' && val.startsWith('=')) {
      return this.evaluateExpression(val, rIdx);
    }
    if (typeof val === 'number') {
      return val.toLocaleString('en-IN');
    }
    return val;
  },

  /**
   * Evaluate a simple inline formula like =IF(C2>=40000,"Target Met","Pending") or =C2*0.1
   */
  evaluateExpression(expr, currentRowIdx) {
    try {
      const cleanExpr = expr.substring(1).trim();

      // IF statement: IF(C2>=40000,"Pass","Fail")
      if (cleanExpr.toUpperCase().startsWith('IF(')) {
        const inner = cleanExpr.substring(3, cleanExpr.length - 1);
        const parts = inner.split(',').map(s => s.trim());
        if (parts.length >= 3) {
          const condition = parts[0];
          const trueVal = parts[1].replace(/['"]/g, '');
          const falseVal = parts[2].replace(/['"]/g, '');

          // Resolve cell reference in condition (e.g., C2 or C3)
          const condEvaluated = this.resolveCondition(condition);
          return condEvaluated ? trueVal : falseVal;
        }
      }

      // Multiplication like C2*0.1
      if (cleanExpr.includes('*')) {
        const parts = cleanExpr.split('*');
        const num1 = this.resolveValue(parts[0].trim());
        const num2 = parseFloat(parts[1].trim());
        const res = num1 * num2;
        return isNaN(res) ? "#VALUE!" : "₹ " + res.toLocaleString('en-IN');
      }

      return expr;
    } catch (err) {
      return "#ERROR!";
    }
  },

  resolveCondition(cond) {
    const match = cond.match(/([A-Z]\d+)\s*(>=|<=|>|<|==|=)\s*(.*)/i);
    if (!match) return false;
    const cellCoord = match[1].toUpperCase();
    const op = match[2];
    const threshold = parseFloat(match[3]);

    const val = this.getCellValueByCoord(cellCoord);
    const num = parseFloat(val);
    if (isNaN(num)) return false;

    if (op === '>=' || op === '=>') return num >= threshold;
    if (op === '<=' || op === '=<') return num <= threshold;
    if (op === '>') return num > threshold;
    if (op === '<') return num < threshold;
    if (op === '=' || op === '==') return num === threshold;
    return false;
  },

  resolveValue(token) {
    if (/^[A-Z]\d+$/i.test(token)) {
      const val = this.getCellValueByCoord(token.toUpperCase());
      return parseFloat(val) || 0;
    }
    return parseFloat(token) || 0;
  },

  getCellValueByCoord(coord) {
    const col = coord.charAt(0);
    const row = parseInt(coord.substring(1), 10);
    const tmpl = this.templates[this.selectedTemplate];
    const cIdx = tmpl.cols.indexOf(col);
    const rIdx = row - 2;
    if (this.gridState[rIdx] && this.gridState[rIdx][cIdx] !== undefined) {
      return this.gridState[rIdx][cIdx];
    }
    return 0;
  },

  /**
   * Main Evaluator for Formula Bar (=SUM, =AVERAGE, =MAX, =MIN, =COUNT, etc.)
   */
  evaluateCurrentFormula() {
    const input = document.getElementById('playgroundFormulaInput');
    const resultBox = document.getElementById('playgroundOutputBadge');
    if (!input || !resultBox) return;

    const rawFormula = input.value.trim();
    if (!rawFormula.startsWith('=')) {
      resultBox.innerText = rawFormula;
      this.updateTotalRow(rawFormula);
      return;
    }

    const formula = rawFormula.substring(1).trim().toUpperCase();
    let result = "";

    try {
      // Handle =SUM(C2:C6)
      if (formula.startsWith('SUM(')) {
        const range = formula.match(/SUM\(([A-Z]\d+:[A-Z]\d+)\)/);
        if (range) {
          const numbers = this.getRangeValues(range[1]);
          const total = numbers.reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0);
          result = total.toLocaleString('en-IN');
        } else {
          result = "#REF!";
        }
      }
      // Handle =AVERAGE(C2:C6)
      else if (formula.startsWith('AVERAGE(')) {
        const range = formula.match(/AVERAGE\(([A-Z]\d+:[A-Z]\d+)\)/);
        if (range) {
          const numbers = this.getRangeValues(range[1]);
          const validNums = numbers.map(n => parseFloat(n)).filter(n => !isNaN(n));
          if (validNums.length === 0) {
            result = "#DIV/0!";
          } else {
            const avg = validNums.reduce((a, b) => a + b, 0) / validNums.length;
            result = avg.toFixed(2);
          }
        }
      }
      // Handle =MAX(C2:C6)
      else if (formula.startsWith('MAX(')) {
        const range = formula.match(/MAX\(([A-Z]\d+:[A-Z]\d+)\)/);
        if (range) {
          const numbers = this.getRangeValues(range[1]).map(n => parseFloat(n)).filter(n => !isNaN(n));
          result = numbers.length ? Math.max(...numbers).toLocaleString('en-IN') : 0;
        }
      }
      // Handle =MIN(C2:C6)
      else if (formula.startsWith('MIN(')) {
        const range = formula.match(/MIN\(([A-Z]\d+:[A-Z]\d+)\)/);
        if (range) {
          const numbers = this.getRangeValues(range[1]).map(n => parseFloat(n)).filter(n => !isNaN(n));
          result = numbers.length ? Math.min(...numbers).toLocaleString('en-IN') : 0;
        }
      }
      // Handle =COUNT(C2:C6)
      else if (formula.startsWith('COUNT(')) {
        const range = formula.match(/COUNT\(([A-Z]\d+:[A-Z]\d+)\)/);
        if (range) {
          const numbers = this.getRangeValues(range[1]).map(n => parseFloat(n)).filter(n => !isNaN(n));
          result = numbers.length;
        }
      }
      // Handle =COUNTA(A2:A6)
      else if (formula.startsWith('COUNTA(')) {
        const range = formula.match(/COUNTA\(([A-Z]\d+:[A-Z]\d+)\)/);
        if (range) {
          const vals = this.getRangeValues(range[1]);
          result = vals.filter(v => v !== "" && v !== null && v !== undefined).length;
        }
      }
      // Handle =ROUND(number, digits)
      else if (formula.startsWith('ROUND(')) {
        const match = formula.match(/ROUND\((.*),(\d+)\)/);
        if (match) {
          const val = this.resolveValue(match[1]);
          const digits = parseInt(match[2], 10);
          result = val.toFixed(digits);
        }
      }
      else {
        result = "Computed: " + formula;
      }

      resultBox.innerText = result;
      this.updateTotalRow(result);
    } catch (e) {
      resultBox.innerText = "#ERROR!";
    }
  },

  updateTotalRow(val) {
    const targetRowNum = this.gridState.length + 2;
    const targetCell = document.getElementById(`cell-C${targetRowNum}`);
    if (targetCell) {
      targetCell.innerText = val;
    }
  },

  /**
   * Get array of values from a range e.g. "C2:C6"
   */
  getRangeValues(rangeStr) {
    const [start, end] = rangeStr.split(':');
    const startCol = start.charAt(0);
    const startRow = parseInt(start.substring(1), 10);
    const endCol = end.charAt(0);
    const endRow = parseInt(end.substring(1), 10);

    const values = [];
    const tmpl = this.templates[this.selectedTemplate];
    const cIdx = tmpl.cols.indexOf(startCol);

    for (let r = startRow; r <= endRow; r++) {
      const rIdx = r - 2;
      if (this.gridState[rIdx] && this.gridState[rIdx][cIdx] !== undefined) {
        values.push(this.gridState[rIdx][cIdx]);
      }
    }
    return values;
  },

  /**
   * Interactive Formula Step-by-Step Evaluator
   * Breaks down formulas into intermediate calculation stages
   */
  openEvaluatorModal(formula) {
    const modalBackdrop = document.getElementById('formulaModal');
    const modalBody = document.getElementById('modalBody');
    if (!modalBackdrop || !modalBody) return;

    formula = formula || document.getElementById('playgroundFormulaInput').value.trim();
    if (!formula) formula = "=SUM(C2:C6)";

    const clean = formula.startsWith('=') ? formula.substring(1) : formula;
    const steps = this.generateEvaluationSteps(clean);

    let html = `
      <div class="flex items-center justify-between border-b border-border pb-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🔍</span>
          <h3 class="text-xl font-extrabold text-accent">Formula Evaluation Inspector</h3>
        </div>
      </div>

      <div class="mb-4 p-3 bg-card-subtle rounded-xl border border-border">
        <span class="text-xs uppercase font-bold text-muted block mb-1">Target Expression:</span>
        <code class="text-lg font-mono font-bold text-accent">${this.escapeHtml(formula)}</code>
      </div>

      <div class="steps-timeline">
        ${steps.map((s, idx) => `
          <div class="step-item">
            <span class="step-badge">${idx + 1}</span>
            <div>
              <strong class="text-xs uppercase text-muted block">${s.title}</strong>
              <div class="text-sm font-semibold font-mono mt-1">${s.calc}</div>
              <p class="text-xs text-muted mt-1">${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="mt-4 p-3 bg-highlight rounded-xl border border-border flex items-center justify-between">
        <span class="text-sm font-bold text-accent">Final Computed Value:</span>
        <span class="badge badge-beginner text-base">${steps[steps.length - 1].output}</span>
      </div>
    `;

    modalBody.innerHTML = html;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  generateEvaluationSteps(expr) {
    const upper = expr.toUpperCase();
    const steps = [];

    if (upper.startsWith('SUM(')) {
      const match = upper.match(/SUM\(([A-Z]\d+:[A-Z]\d+)\)/);
      const range = match ? match[1] : "C2:C6";
      const values = this.getRangeValues(range);
      const sum = values.reduce((a, b) => a + (parseFloat(b) || 0), 0);

      steps.push({
        title: "Step 1: Cell Range Resolution",
        calc: `Resolving ${range} -> [${values.join(', ')}]`,
        desc: "Excel extracts numeric values from the referenced cells.",
        output: `[${values.join(', ')}]`
      });
      steps.push({
        title: "Step 2: Arithmetic Addition",
        calc: values.join(' + ') + ` = ${sum.toLocaleString('en-IN')}`,
        desc: "Adds each individual value together.",
        output: sum.toLocaleString('en-IN')
      });
    } else if (upper.startsWith('AVERAGE(')) {
      const match = upper.match(/AVERAGE\(([A-Z]\d+:[A-Z]\d+)\)/);
      const range = match ? match[1] : "C2:C6";
      const values = this.getRangeValues(range).map(n => parseFloat(n)).filter(n => !isNaN(n));
      const sum = values.reduce((a, b) => a + b, 0);
      const avg = (sum / values.length).toFixed(2);

      steps.push({
        title: "Step 1: Fetch Range Numbers",
        calc: `${range} -> [${values.join(', ')}] (Count: ${values.length})`,
        desc: "Fetches all valid numbers from the range.",
        output: `Count: ${values.length}`
      });
      steps.push({
        title: "Step 2: Divide Total by Count",
        calc: `${sum} ÷ ${values.length} = ${avg}`,
        desc: "Computes the arithmetic mean.",
        output: avg
      });
    } else if (upper.startsWith('IF(')) {
      steps.push({
        title: "Step 1: Condition Assessment",
        calc: "Evaluating logical test: C2 >= 40000",
        desc: "Fetches value of C2 (45,000) and compares to threshold 40,000.",
        output: "TRUE"
      });
      steps.push({
        title: "Step 2: Branch Execution",
        calc: "Branch TRUE selected -> 'Target Met'",
        desc: "Since condition evaluated to TRUE, Excel selects the second argument.",
        output: "Target Met"
      });
    } else {
      steps.push({
        title: "Step 1: Parse Function",
        calc: expr,
        desc: "Evaluates standard function arguments.",
        output: "Success"
      });
    }

    return steps;
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

