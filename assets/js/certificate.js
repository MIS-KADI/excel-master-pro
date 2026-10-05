/**
 * Excel Master - Canvas Certificate Generator & Official Gated Verification
 * Unlocks ONLY when:
 * 1. Participant completes 100% of all 7 online course modules.
 * 2. Participant passes the 10-question timed Live Exam with at least 70% score.
 */

const CertificateGenerator = {
  certId: localStorage.getItem('excel_master_cert_id') || ('EMP-' + Math.floor(100000 + Math.random() * 900000)),

  /**
   * Evaluates if user meets both certification requirements
   */
  isEligible() {
    const courseDone = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();
    const examPassed = localStorage.getItem('excel_master_exam_passed') === 'true';
    return courseDone && examPassed;
  },

  /**
   * Main render method for the Certificate Tab
   */
  renderCertificatePage(container) {
    if (!container) return;
    const lang = I18N.currentLang;
    const eligible = this.isEligible();
    const courseProgress = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.getProgress() : 0;
    const courseCompletedCount = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.completedModules.length : 0;
    const courseTotalCount = typeof EXCEL_COURSE !== 'undefined' ? EXCEL_COURSE.modules.length : 7;
    const courseDone = typeof EXCEL_COURSE !== 'undefined' && EXCEL_COURSE.isCourseFinished();
    const examPassed = localStorage.getItem('excel_master_exam_passed') === 'true';
    const examScore = localStorage.getItem('excel_master_exam_score') || '0';

    if (!eligible) {
      // Locked State UI
      container.innerHTML = `
        <div class="section-header text-center max-w-2xl mx-auto mb-6">
          <h2 class="section-title">🔒 ${I18N.t('tabCertificate')}</h2>
          <p class="section-subtitle">${I18N.t('unlockCertReq')}</p>
        </div>

        <div class="max-w-2xl mx-auto bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg">
          <div class="text-center mb-6">
            <div class="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-4xl mb-4 border border-amber-300 dark:border-amber-800">
              🔒
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-main mb-2">
              સર્ટિફિકેટ મેળવવા માટે નીચેની બે શરતો પૂર્ણ કરવી ફરજિયાત છે
            </h3>
            <p class="text-xs text-muted">
              (Certificate is locked until course completion and exam verification are passed)
            </p>
          </div>

          <!-- Requirements Verification Checklist -->
          <div class="space-y-4 mb-8">
            <!-- Step 1: Online Course Modules -->
            <div class="p-4 rounded-xl border flex items-center justify-between flex-wrap gap-4 ${courseDone ? 'bg-highlight border-green-500' : 'bg-card-subtle border-border'}">
              <div class="flex items-center gap-3">
                <span class="text-2xl">${courseDone ? '✅' : '⏳'}</span>
                <div>
                  <h4 class="font-bold text-sm text-main">૧. એક્સેલ ઓનલાઇન કોર્સ પૂર્ણ કરો (૭ મોડ્યુલ્સ)</h4>
                  <p class="text-xs text-muted">
                    પ્રગતિ: <strong>${courseProgress}%</strong> (${courseCompletedCount}/${courseTotalCount} મોડ્યુલ્સ પૂર્ણ)
                  </p>
                </div>
              </div>
              <div>
                ${courseDone ? `
                  <span class="badge badge-beginner">✓ પૂર્ણ થયેલ</span>
                ` : `
                  <button class="btn btn-primary btn-sm font-bold" onclick="App.switchTab('course')">
                    📚 કોર્સ મોડ્યુલ્સ જુઓ →
                  </button>
                `}
              </div>
            </div>

            <!-- Step 2: Live Exam -->
            <div class="p-4 rounded-xl border flex items-center justify-between flex-wrap gap-4 ${examPassed ? 'bg-highlight border-green-500' : 'bg-card-subtle border-border'}">
              <div class="flex items-center gap-3">
                <span class="text-2xl">${examPassed ? '✅' : '⏳'}</span>
                <div>
                  <h4 class="font-bold text-sm text-main">૨. લાઈવ ૫૦-પ્રશ્નો સર્ટિફિકેશન પરીક્ષા પાસ કરો (૭૦%+ એટલે કે ૩૫/૫૦ ગુણ)</h4>
                  <p class="text-xs text-muted">
                    સ્થિતિ: ${examPassed ? `<strong>પાસ થયેલ (સ્કોર: ${examScore}%)</strong>` : 'હજુ પરીક્ષા આપેલ નથી કે પાસ થયેલ નથી'}
                  </p>
                </div>
              </div>
              <div>
                ${examPassed ? `
                  <span class="badge badge-beginner">✓ પરીક્ષા પાસ</span>
                ` : `
                  <button class="btn btn-primary btn-sm font-bold" onclick="App.switchTab('exam')">
                    ⏱️ લાઈવ પરીક્ષા શરૂ કરો →
                  </button>
                `}
              </div>
            </div>
          </div>

          <div class="text-center p-4 bg-card-subtle rounded-xl border border-border text-xs text-muted">
            💡 <em>બંને શરતો પૂર્ણ થતાં જ અહીં તમારું નામ લખીને અધિકૃત ગોલ્ડ-સીલ સર્ટિફિકેટ તરત ડાઉનલોડ કરવાનો વિકલ્પ ખુલી જશે.</em>
          </div>
        </div>
      `;
      return;
    }

    // Unlocked State UI: Participant has completed both criteria!
    localStorage.setItem('excel_master_cert_id', this.certId);

    container.innerHTML = `
      <div class="section-header text-center max-w-2xl mx-auto mb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 text-xs font-bold mb-3 border border-green-300 dark:border-green-800">
          ✓ All Verification Criteria Passed • Official Candidate
        </div>
        <h2 class="section-title">🎓 ${I18N.t('certTitle')}</h2>
        <p class="section-subtitle">${I18N.t('certSubtitle')}</p>
      </div>

      <div class="max-w-4xl mx-auto bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg text-center mb-6">
        <!-- Verification summary box -->
        <div class="mb-6 p-4 rounded-xl bg-highlight border border-green-500/40 flex items-center justify-between flex-wrap gap-4 text-left">
          <div>
            <span class="text-xs uppercase font-bold text-accent block">Credential Verification</span>
            <span class="text-sm font-bold text-main">Certificate ID: ${this.certId}</span>
          </div>
          <div class="text-xs text-muted flex gap-4">
            <span>Course: <strong>100% Completed</strong> ✓</span>
            <span>Live Exam: <strong>${examScore}% Score</strong> ✓</span>
          </div>
        </div>

        <!-- Name Input -->
        <div class="max-w-md mx-auto mb-6">
          <label class="block text-sm font-bold text-muted mb-2">${I18N.t('certNamePrompt')}</label>
          <div class="flex gap-2">
            <input type="text" id="certCandidateName" class="form-control" placeholder="તમારું પૂરું નામ લખો..." value="Rajesh Patel" />
            <button class="btn btn-primary font-bold" onclick="CertificateGenerator.drawCertificate(document.getElementById('certCandidateName').value)">
              Generate
            </button>
          </div>
        </div>

        <!-- Canvas Container -->
        <div class="overflow-x-auto border border-border rounded-xl shadow-inner p-2 bg-slate-100 dark:bg-slate-900 mb-6">
          <canvas id="certCanvas" style="max-width: 100%; height: auto; border-radius: 8px;"></canvas>
        </div>

        <div class="flex items-center justify-center gap-4 flex-wrap">
          <button class="btn btn-primary px-8 py-3 text-lg font-bold" onclick="CertificateGenerator.downloadPNG()">
            💾 ${I18N.t('certDownloadBtn')}
          </button>
          <button class="btn btn-secondary px-6 py-3 font-bold" onclick="window.print()">
            🖨️ Print Certificate
          </button>
        </div>
      </div>
    `;

    setTimeout(() => {
      const nameInput = document.getElementById('certCandidateName');
      this.drawCertificate(nameInput ? nameInput.value : "Rajesh Patel");
    }, 50);
  },

  drawCertificate(name) {
    const canvas = document.getElementById('certCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 1200;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    // Background Gradient (Elegant Cream to Soft White)
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, "#ffffff");
    bgGrad.addColorStop(1, "#f8fafc");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Outer Deep Green Border
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#107c41";
    ctx.strokeRect(25, 25, width - 50, height - 50);

    // Inner Thin Gold/Green Border
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#b45309";
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Corner Ornaments
    ctx.fillStyle = "#107c41";
    ctx.fillRect(35, 35, 24, 24);
    ctx.fillRect(width - 59, 35, 24, 24);
    ctx.fillRect(35, height - 59, 24, 24);
    ctx.fillRect(width - 59, height - 59, 24, 24);

    // Certificate Header Text
    ctx.textAlign = "center";
    ctx.fillStyle = "#107c41";
    ctx.font = "bold 24px 'Segoe UI', Arial, sans-serif";
    ctx.fillText("EXCEL MASTER PRO • GLOBAL PROFICIENCY ASSESSMENT", width / 2, 115);

    ctx.fillStyle = "#0f172a";
    ctx.font = "800 46px 'Segoe UI', Arial, sans-serif";
    ctx.fillText("CERTIFICATE OF EXCELLENCE", width / 2, 175);

    ctx.fillStyle = "#64748b";
    ctx.font = "italic 22px 'Segoe UI', Georgia, serif";
    ctx.fillText("This is officially awarded to", width / 2, 235);

    // Student / Professional Name (Large, Bold, Elegant)
    ctx.fillStyle = "#0f5c30";
    ctx.font = "bold 54px 'Segoe UI', Georgia, serif";
    ctx.fillText(name || "Excel Pro Candidate", width / 2, 315);

    // Underline below name
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 320, 340);
    ctx.lineTo(width / 2 + 320, 340);
    ctx.stroke();

    // Achievement description
    ctx.fillStyle = "#334155";
    ctx.font = "20px 'Segoe UI', sans-serif";
    ctx.fillText("for demonstrating verified mastery of Microsoft Excel Formulas, Functions,", width / 2, 390);
    ctx.fillText("Dynamic Arrays, Data Analysis, and passing the Official Live Certification Assessment.", width / 2, 425);

    // Verification ID banner
    ctx.fillStyle = "#64748b";
    ctx.font = "bold 14px 'Segoe UI', monospace";
    ctx.fillText(`VERIFICATION ID: ${this.certId}  •  GRADE: DISTINCTION (VERIFIED)`, width / 2, 475);

    // Date & Signature sections
    const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    
    // Left: Date
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 18px 'Segoe UI', sans-serif";
    ctx.fillText(today, 280, 565);
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(180, 580);
    ctx.lineTo(380, 580);
    ctx.stroke();
    ctx.fillStyle = "#64748b";
    ctx.font = "15px 'Segoe UI', sans-serif";
    ctx.fillText("Date of Certification", 280, 608);

    // Right: Signature
    ctx.fillStyle = "#107c41";
    ctx.font = "italic bold 28px 'Brush Script MT', cursive, sans-serif";
    ctx.fillText("Excel Master Academic Board", 920, 565);
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(800, 580);
    ctx.lineTo(1040, 580);
    ctx.stroke();
    ctx.fillStyle = "#64748b";
    ctx.font = "15px 'Segoe UI', sans-serif";
    ctx.fillText("Authorized Verification", 920, 608);

    // Center Gold Seal
    ctx.beginPath();
    ctx.arc(width / 2, 580, 54, 0, Math.PI * 2);
    ctx.fillStyle = "#f59e0b";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#d97706";
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 18px 'Segoe UI', sans-serif";
    ctx.fillText("★ CERTIFIED ★", width / 2, 574);
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.fillText("EXCEL PRO", width / 2, 596);
  },

  downloadPNG() {
    const canvas = document.getElementById('certCanvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `Excel_Master_Pro_Certificate_${this.certId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    App.showToast("Certificate downloaded successfully!");
  }
};
