// ==========================================
// FORMS & CONTACT HANDLING
// ==========================================

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !subject || !message) {
      showFormStatus('Please fill in all fields.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }
    
    // Simulate form submission
    showFormStatus('Sending message...', 'info');
    
    setTimeout(() => {
      // In production, this would send to a backend
      console.log('Form submitted:', { name, email, subject, message });
      
      // Show success message
      showFormStatus('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
      
      // Clear message after 5 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }, 1500);
  });
}

// Form status message
function showFormStatus(message, type = 'info') {
  if (!formStatus) return;
  
  formStatus.textContent = message;
  formStatus.style.display = 'block';
  formStatus.className = '';
  
  switch(type) {
    case 'success':
      formStatus.style.color = 'var(--success)';
      formStatus.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
      break;
    case 'error':
      formStatus.style.color = 'var(--error)';
      formStatus.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
      break;
    case 'info':
      formStatus.style.color = 'var(--primary-blue)';
      formStatus.style.backgroundColor = 'rgba(30, 64, 175, 0.1)';
      break;
  }
  
  formStatus.style.padding = 'var(--spacing-md)';
  formStatus.style.borderRadius = '0.5rem';
  formStatus.style.marginTop = 'var(--spacing-md)';
}

// Email validation
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ==========================================
// RESUME DOWNLOAD
// ==========================================

const downloadPdfBtn = document.getElementById('downloadPdf');
const downloadVisualBtn = document.getElementById('downloadVisual');

if (downloadPdfBtn) {
  downloadPdfBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generatePDFResume();
  });
}

if (downloadVisualBtn) {
  downloadVisualBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateVisualResume();
  });
}

// Generate PDF Resume
function generatePDFResume() {
  // Create a new window with resume content
  const resumeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Victoria Emife - Resume</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          max-width: 850px;
          margin: 0 auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        header {
          border-bottom: 2px solid #1e40af;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        h1 {
          margin: 0 0 5px 0;
          color: #0f172a;
        }
        .subtitle {
          color: #1e40af;
          font-weight: bold;
          margin: 0;
        }
        .contact-info {
          display: flex;
          justify-content: space-around;
          font-size: 0.9em;
          margin-top: 10px;
        }
        h2 {
          background: #0f172a;
          color: white;
          padding: 8px 12px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        h3 {
          margin: 15px 0 5px 0;
          color: #1e40af;
        }
        .job-title {
          font-weight: bold;
          color: #1e40af;
        }
        .company {
          font-weight: bold;
        }
        .date {
          color: #666;
          font-size: 0.9em;
        }
        ul {
          margin: 8px 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 4px;
        }
        .badge {
          display: inline-block;
          background: #e5e7eb;
          padding: 3px 8px;
          margin: 2px;
          border-radius: 12px;
          font-size: 0.85em;
        }
        .competencies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Victoria Emife</h1>
        <p class="subtitle">Account Payable Specialist | Process Automation & Financial Controls</p>
        <div class="contact-info">
          <div>+1 437 557 0071</div>
          <div>orisaseemife@yahoo.com</div>
          <div>linkedin.com/in/olufunke-data-analyst</div>
        </div>
      </header>

      <h2>PROFESSIONAL SUMMARY</h2>
      <p>Strategic AP professional with 3+ years managing high-volume operations processing $12M+ annually across 150+ vendor relationships. Proven expertise in ERP optimization, invoice automation, and financial controls that reduced processing costs by 35% while maintaining 99.8% accuracy. Spearheaded automation initiatives saving $38K annually and recovered $34.5K in duplicate payments through systematic audits. Zero audit findings across 3 consecutive external audits.</p>

      <h2>PROFESSIONAL EXPERIENCE</h2>
      
      <h3><span class="job-title">Accounts Payable Specialist</span></h3>
      <p><span class="company">TDI Golf & XGD Systems</span> | <span class="date">October 2021 – Present</span></p>
              <ul>
                <li>Spearheaded Stampli AI implementation reducing manual processing time 45% and saving $38K annually</li>
                <li>Redesigned AP workflow eliminating 8 bottlenecks; decreased Days Payable Outstanding from 42 to 28 days</li>
                <li>Built comprehensive AP policy manual and internal controls framework adopted company-wide</li>
                <li>Process 650+ monthly invoices ($1M+ value) with 99.8% accuracy rate</li>
                <li>Identified and recovered $34,500 in duplicate payments through systematic reconciliation</li>
                <li>Served as primary AP contact for external auditors; zero findings in 3 consecutive years</li>
              </ul>      <h2>CORE COMPETENCIES</h2>
      <p>
        <strong>Accounting Operations:</strong> Full-Cycle AP/AR | GL Reconciliation | Month-End Close | Accrual Accounting
      </p>
      <p>
        <strong>ERP & Systems:</strong> Sage 50/300/Intacct | QuickBooks | Xero | Bill.com | Stampli
      </p>
      <p>
        <strong>Process & Controls:</strong> SOX Compliance | Internal Controls | Fraud Detection | Workflow Automation
      </p>
      <p>
        <strong>Analytics:</strong> Advanced Excel | Power BI | Power Query | Financial Modeling | VBA
      </p>

      <h2>CERTIFICATIONS</h2>
      <ul>
        <li><strong>Certified Bookkeeper (CB)</strong> – Canadian Bookkeepers Association (June 2024)</li>
        <li><strong>Certified Accounts Payable Associate (CAPA)</strong> – Institute of Finance & Management (February 2024)</li>
        <li><strong>QuickBooks Online Certified User</strong> – Intuit (November 2023)</li>
        <li><strong>Advanced Excel for Finance Professionals</strong> – Corporate Finance Institute (2023)</li>
      </ul>

      <h2>EDUCATION</h2>
      <p><strong>Bachelor of Public Administration</strong><br/>Kogi State University, Anyigba | Graduated September 2014 | GPA: 3.7/4.0</p>
    </body>
    </html>
  `;
  
  const blob = new Blob([resumeContent], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Victoria_Emife_Resume.pdf';
  a.click();
  window.URL.revokeObjectURL(url);
}

// Generate Visual Resume (HTML)
function generateVisualResume() {
  const resumeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Victoria Emife - Modern Resume</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 950px;
          margin: 0 auto;
          background: white;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          border-radius: 12px;
          overflow: hidden;
        }
        header {
          background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
          color: white;
          padding: 40px;
          text-align: center;
        }
        h1 { font-size: 2.5em; margin-bottom: 10px; }
        .subtitle { font-size: 1.2em; opacity: 0.9; }
        .contact {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
          font-size: 0.95em;
        }
        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          padding: 40px;
        }
        .section h2 {
          background: #0ea5e9;
          color: white;
          padding: 10px 15px;
          margin-bottom: 15px;
          border-radius: 4px;
        }
        .job {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
        }
        .job:last-child { border-bottom: none; }
        .job-title { color: #1e40af; font-weight: bold; }
        .company { font-weight: bold; color: #0ea5e9; }
        .date { color: #666; font-size: 0.9em; }
        .metrics {
          background: #f0f9ff;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .metric {
          font-size: 1.3em;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 5px;
        }
        .metric-label { color: #666; font-size: 0.9em; }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .skill { background: #e5e7eb; padding: 8px 12px; border-radius: 20px; font-size: 0.9em; }
        ul { padding-left: 20px; line-height: 1.8; }
        li { margin-bottom: 6px; }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1>Victoria Emife</h1>
          <p class="subtitle">Accounts Payable Specialist | Process Automation & Financial Controls</p>
          <div class="contact">
            <div>📞 +1 437 557 0071</div>
            <div>📧 orisaseemife@yahoo.com</div>
            <div>💼 linkedin.com/in/olufunke-data-analyst</div>
          </div>
        </header>

        <div class="content">
          <!-- Left Column -->
          <div>
            <div class="section">
              <h2>Key Impact Metrics</h2>
              <div class="metrics">
                <div class="metric">$100K+</div>
                <div class="metric-label">Total Value Created</div>
              </div>
              <div class="metrics">
                <div class="metric">52%</div>
                <div class="metric-label">Faster Processing</div>
              </div>
              <div class="metrics">
                <div class="metric">99.8%</div>
                <div class="metric-label">Accuracy Rate</div>
              </div>
              <div class="metrics">
                <div class="metric">0</div>
                <div class="metric-label">Audit Findings (3 yrs)</div>
              </div>
            </div>

            <div class="section">
              <h2>Experience</h2>
              <div class="job">
                <div class="job-title">AP Specialist</div>
                <div class="company">TDI Golf & XGD Systems</div>
                <div class="date">Oct 2021 – Present (Promoted Mar 2023)</div>
                <ul>
                  <li>Led AI invoice automation reducing costs 45%</li>
                  <li>Recovered \$34.5K through forensic audits</li>
                  <li>Built SOX compliance framework</li>
                  <li>Manage \$12M+ annual spend</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div>
            <div class="section">
              <h2>Core Competencies</h2>
              <div class="skills-grid">
                <span class="skill">Full-Cycle AP</span>
                <span class="skill">Sage Intacct</span>
                <span class="skill">Power BI</span>
                <span class="skill">SOX Compliance</span>
                <span class="skill">Process Automation</span>
                <span class="skill">Fraud Detection</span>
                <span class="skill">GL Reconciliation</span>
                <span class="skill">Excel/VBA</span>
              </div>
            </div>

            <div class="section">
              <h2>Certifications</h2>
              <ul>
                <li>🏆 Certified Bookkeeper (CB) - 2024</li>
                <li>📊 Certified AP Associate (CAPA) - 2024</li>
                <li>💻 QuickBooks Online Certified - 2023</li>
                <li>📈 Advanced Excel for Finance - 2023</li>
              </ul>
            </div>

            <div class="section">
              <h2>Education</h2>
              <p><strong>Bachelor of Public Administration</strong><br/>Kogi State University, Nigeria<br/>Graduated 2014 | GPA: 3.7/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  const blob = new Blob([resumeContent], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Victoria_Emife_Resume_Modern.html';
  a.click();
  window.URL.revokeObjectURL(url);
}

console.log('✓ Forms initialized');
