/**
 * Excel Master - Practice Workbooks (.csv) Generator & Exporter
 * Generates pre-populated, real-world practical datasets for practice in Excel.
 */

const PracticeExporter = {
  datasets: [
    {
      id: "sales-master",
      title: {
        en: "Retail Sales & Commission Ledger (25+ Rows)",
        gu: "વેચાણ અને કમિશન લેજર શીટ (૨૫+ રેકોર્ડ્સ)",
        hi: "बिक्री और कमीशन लेजर शीट (25+ रिकॉर्ड)"
      },
      practiceGoal: {
        en: "Practice SUMIFS, AVERAGEIF, VLOOKUP, and XLOOKUP by calculating regional totals and sales commissions.",
        gu: "વિસ્તાર મુજબ વેચાણ અને કમિશન ગણવા માટે SUMIFS, AVERAGEIF અને XLOOKUP ની પ્રેક્ટિસ માટે.",
        hi: "क्षेत्रवार बिक्री और कमीशन निकालने के लिए SUMIFS और XLOOKUP के अभ्यास हेतु।"
      },
      filename: "Excel_Practice_Sales_Ledger.csv",
      generateCSV: () => {
        return [
          "Invoice_No,Date,Salesperson,Region,Product,Units_Sold,Unit_Price,Total_Revenue,Commission_Status",
          "INV-1001,2026-01-05,Rajesh Patel,North,Laptop,5,45000,225000,Target Met",
          "INV-1002,2026-01-06,Priya Sharma,West,Wireless Mouse,40,450,18000,Pending",
          "INV-1003,2026-01-08,Amit Verma,North,Mechanical Keyboard,15,1850,27750,Target Met",
          "INV-1004,2026-01-10,Sneha Joshi,South,Monitor 24 inch,8,12500,100000,Target Met",
          "INV-1005,2026-01-12,Vikas Mehta,West,USB-C Hub,25,1200,30000,Pending",
          "INV-1006,2026-01-15,Karan Joshi,East,Laptop Stand,30,750,22500,Pending",
          "INV-1007,2026-01-18,Rajesh Patel,North,Noise Cancelling Headset,6,3400,20400,Pending",
          "INV-1008,2026-01-20,Meena Desai,South,Laptop,10,48000,480000,Target Met",
          "INV-1009,2026-01-22,Chirag Modi,West,SSD 1TB,12,6200,74400,Target Met",
          "INV-1010,2026-01-25,Priya Sharma,West,Laptop,7,45000,315000,Target Met"
        ].join('\n');
      }
    },
    {
      id: "student-marksheet",
      title: {
        en: "Student Exam Marksheet & Grade Assessment",
        gu: "વિદ્યાર્થી પરીક્ષા પરિણામ અને ગ્રેડિંગ શીટ",
        hi: "छात्र परीक्षा अंकतालिका और ग्रेडिंग शीट"
      },
      practiceGoal: {
        en: "Practice SUM, AVERAGE, IF, IFS, RANK, MAX, and MIN for class results.",
        gu: "સરવાળો, સરેરાશ, પાસ-નાપાસ IF, ગ્રેડિંગ IFS અને રેન્ક શોધવાની પ્રેક્ટિસ માટે.",
        hi: "जोड़, औसत, पास-फेल IF और ग्रेडिंग IFS के अभ्यास हेतु।"
      },
      filename: "Excel_Practice_Student_Marksheet.csv",
      generateCSV: () => {
        return [
          "Roll_No,Student_Name,Gender,Maths_100,Science_100,English_100,Total_Marks,Percentage,Result_Status,Grade",
          "101,Aakash Dave,Male,85,92,78,255,85.00,Pass,A",
          "102,Bhavik Shah,Male,32,45,28,105,35.00,Fail,Fail",
          "103,Charmi Patel,Female,74,88,91,253,84.33,Pass,A",
          "104,Deepak Soni,Male,95,96,92,283,94.33,Pass,A+",
          "105,Ekta Mehta,Female,55,62,48,165,55.00,Pass,C",
          "106,Farhan Khan,Male,68,71,65,204,68.00,Pass,B",
          "107,Gauri Trivedi,Female,82,79,84,245,81.67,Pass,A",
          "108,Hardik Joshi,Male,29,35,42,106,35.33,Fail,Fail"
        ].join('\n');
      }
    },
    {
      id: "payroll-ledger",
      title: {
        en: "Monthly Employee Payroll & Attendance Register",
        gu: "કર્મચારી પગાર અને હાજરી પત્રક (Payroll Register)",
        hi: "कर्मचारी वेतन और उपस्थिति रजिस्टर"
      },
      practiceGoal: {
        en: "Practice DATEDIF for age/experience, NETWORKDAYS for payable days, and PMT for loans.",
        gu: "ઉંમર અને અનુભવ માટે DATEDIF, કામકાજના દિવસો માટે NETWORKDAYS અને પ્રોવિડન્ટ ફંડ ગણતરી.",
        hi: "उम्र के लिए DATEDIF और कार्य दिवसों के लिए NETWORKDAYS के अभ्यास हेतु।"
      },
      filename: "Excel_Practice_Payroll_Register.csv",
      generateCSV: () => {
        return [
          "Emp_ID,Name,DOB,Date_Of_Joining,Department,Basic_Salary,Days_Present,HRA_40_Pct,PF_12_Pct,Net_Payable",
          "EMP001,Rajesh Patel,1990-05-14,2018-04-01,Sales,45000,26,18000,5400,57600",
          "EMP002,Priya Sharma,1994-08-22,2020-02-15,Finance,62000,25,24800,7440,79360",
          "EMP003,Amit Verma,1988-11-03,2016-07-10,IT Support,52000,24,20800,6240,66560",
          "EMP004,Sneha Joshi,1996-03-30,2021-09-01,Marketing,48000,26,19200,5760,61440",
          "EMP005,Vikas Mehta,1985-12-19,2015-01-05,HR,55000,25,22000,6600,70400"
        ].join('\n');
      }
    }
  ],

  download(datasetId) {
    const ds = this.datasets.find(d => d.id === datasetId);
    if (!ds) return;

    const csvContent = "\uFEFF" + ds.generateCSV(); // Add BOM for Excel UTF-8 support
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = ds.filename;
    link.click();
    URL.revokeObjectURL(url);

    App.showToast("Practice sheet downloaded!");
  }
};
