// ==========================================
// PROJECTS DATA & RENDERING
// ==========================================

const projects = [
  {
    id: 1,
    title: "AP Dashboard: Turning Data into Decisions",
    subtitle: "Real-time intelligence from 150+ vendors processing $12M+ annually",
    category: "Business Intelligence",
    impact: "$68K+ total impact (60-day ROI)",
    metrics: [
      { label: "Dashboard ROI", value: "60 days", icon: "⏱" },
      { label: "DPO Improvement", value: "42 → 28 days (-33%)", icon: "📉" },
      { label: "Time Saved", value: "15+ hrs/month", icon: "⏰" },
      { label: "Forecasting Improvement", value: "+18%", icon: "📈" }
    ],
    highlights: [
      "Connected Sage 50/300 and Stampli into unified ecosystem",
      "Built 12+ interactive KPI widgets with drill-down capabilities",
      "Automated daily refresh with 99.8% accuracy",
      "Extended to 5 operational stakeholders (vs 3 original)",
      "Became single source of truth for AP decisions"
    ],
    challenges: [
      "Multi-source data integration complexity",
      "Ensuring data quality across systems",
      "User adoption of new dashboard"
    ],
    solutions: [
      "Used Power Query for automated data cleansing",
      "Built validation rules into refresh logic",
      "Provided comprehensive user training and documentation"
    ],
    technologies: ["Power BI", "Excel Power Query", "Power Pivot", "Sage 50/300", "Stampli"],
    timeline: "6 weeks (March - April 2023)",
    role: "Senior AP Specialist | Project Lead",
    team: "Solo project with stakeholder collaboration",
    company: "TDI Golf & XGD Systems",
    deliverables: [
      "Live Power BI Dashboard with 12+ widgets",
      "Automated Data Pipeline with daily refresh",
      "Executive Training Package",
      "Documentation Library"
    ],
    testimonialId: "project-1"
  },

  {
    id: 2,
    title: "Invoice Automation: From Manual Chaos to Intelligent Processing",
    subtitle: "AI-powered system processing 650+ invoices monthly",
    category: "Process Automation",
    impact: "$38K annual savings achieved in 8 months",
    metrics: [
      { label: "Speed Improvement", value: "52% faster", icon: "🚀" },
      { label: "Processing Time", value: "8.5 → 4.1 days", icon: "⏱" },
      { label: "Manual Work Reduction", value: "45% less time", icon: "🤖" },
      { label: "Accuracy Improvement", value: "94% → 99.8%", icon: "✓" }
    ],
    highlights: [
      "Stampli AI OCR for automatic invoice data extraction",
      "Smart 3-way matching with Sage 300 integration",
      "Mobile-friendly approval workflows",
      "Vendor self-service portal",
      "Complete audit trail visibility",
      "Zero late payments since go-live",
      "Zero duplicate payments (system catches them)"
    ],
    challenges: [
      "Change management and user resistance",
      "Vendor format variations (200+ formats)",
      "Sage 300 API integration complexity"
    ],
    solutions: [
      "Involved team in vendor selection for buy-in",
      "Prioritized high-volume vendors for AI training",
      "Built manual override workflows for edge cases",
      "Collaborated with IT for custom API endpoints"
    ],
    technologies: ["Stampli", "Sage 300", "OCR", "Machine Learning", "Mobile Apps"],
    timeline: "5 months (October 2022 - March 2023)",
    role: "Implementation Lead | Senior AP Specialist",
    team: "3-person finance team + IT collaboration",
    deliverables: [
      "Fully Configured Stampli Platform",
      "AP Policy Manual (35 pages)",
      "Training Materials (videos, guides)",
      "Performance Tracking Dashboard",
      "Vendor Communication Portal"
    ],
    testimonialId: "project-2"
  },

  {
    id: 3,
    title: "Audit Recovery: The Forensic Audit That Paid for Itself",
    subtitle: "Systematic detective work uncovering hidden money and fraud",
    category: "Compliance & Controls",
    impact: "$46.5K identified | $34.5K recovered (74% recovery rate)",
    metrics: [
      { label: "Recovered", value: "$34.5K", icon: "💰" },
      { label: "Prevented Fraud", value: "$12K", icon: "🛡" },
      { label: "Error Reduction", value: "95% improvement", icon: "✓" },
      { label: "Audit Findings", value: "Zero (3 years)", icon: "🏆" }
    ],
    highlights: [
      "Identified $18.2K in duplicate payments",
      "Corrected $11.5K in pricing errors",
      "Reclaimed $4.8K in unearned discounts",
      "Prevented $12K fraudulent payment",
      "Built multi-layered control framework",
      "Implemented enhanced vendor verification",
      "Created fraud risk scorecard"
    ],
    challenges: [
      "Analyzing 9,400+ transactions efficiently",
      "Vendor resistance to recovery efforts",
      "Internal pushback on new controls"
    ],
    solutions: [
      "Used Pareto Principle and automated flagging (90% efficiency gain)",
      "Provided complete documentation and offered credit applications",
      "Quantified value of controls and automated where possible"
    ],
    technologies: ["Excel VBA", "Advanced Formulas", "Data Reconciliation", "Fraud Detection"],
    timeline: "18 months (8 weeks implementation + ongoing monitoring)",
    role: "Financial Controls Lead | Senior AP Specialist",
    team: "Solo effort with cross-functional support",
    deliverables: [
      "Duplicate Payment Detection Scripts",
      "Enhanced Vendor Verification Checklist",
      "Internal Controls Documentation",
      "Fraud Risk Assessment Reports",
      "AP Policy Manual"
    ],
    testimonialId: "project-3"
  },

  {
    id: 4,
    title: "ERP Migration: The Cloud Transformation Nobody Noticed",
    subtitle: "Moving 15,000+ transactions to cloud without breaking anything",
    category: "Systems Implementation",
    impact: "Zero downtime | $20K+ annual savings",
    metrics: [
      { label: "Data Loss", value: "0%", icon: "✓" },
      { label: "Business Downtime", value: "0 hours", icon: "✓" },
      { label: "Month-End Close", value: "2.5 days faster", icon: "⚡" },
      { label: "User Satisfaction", value: "95%", icon: "😊" }
    ],
    highlights: [
      "Sage 300 to Sage Intacct migration completed on schedule",
      "15,000+ historical transactions migrated with 100% accuracy",
      "40% improvement in invoice coding accuracy",
      "Real-time reporting vs overnight batch jobs",
      "Remote access enabled for distributed teams",
      "100% data integrity (reconciled to the penny)",
      "95% user satisfaction (vs 68% with old system)"
    ],
    challenges: [
      "47 invoices with orphaned PO links discovered in testing",
      "Senior manager resistance to new system",
      "Stampli API integration hiccup during go-live"
    ],
    solutions: [
      "Built cleanup script and paused migration for 1-week fix",
      "Personalized training focusing on pain points solved",
      "Activated manual fallback workflow (CSV export/import)"
    ],
    technologies: ["Sage 300", "Sage Intacct", "Cloud Infrastructure", "API Integration", "ETL"],
    timeline: "14 weeks (June - September 2023)",
    role: "AP Module Implementation Lead | Data Migration Specialist",
    team: "Finance (3), IT (2), Sage consultants (2)",
    deliverables: [
      "Fully Configured Sage Intacct Environment",
      "Migration Project Plan (14-week timeline)",
      "Data Validation Reports (100% accuracy)",
      "Training Library (role-based videos)",
      "System Documentation"
    ],
    testimonialId: "project-4"
  },

  {
    id: 5,
    title: "SOX Compliance Framework: Building Trust Through Verification",
    subtitle: "Zero audit findings for 3 consecutive years",
    category: "Compliance & Controls",
    impact: "Zero audit findings | 35% error reduction | $8K audit fee savings",
    metrics: [
      { label: "Audit Findings", value: "0 (3 years)", icon: "🏆" },
      { label: "Error Reduction", value: "35%", icon: "📉" },
      { label: "Audit Fee Savings", value: "$8K/year", icon: "💰" },
      { label: "Processing Errors", value: "-95%", icon: "✓" }
    ],
    highlights: [
      "Mapped end-to-end AP processes using COSO framework",
      "Developed 40-page AP policy manual",
      "Implemented segregation of duties",
      "Created quarterly control self-assessment program",
      "Built fraud risk detection protocols",
      "Established vendor verification requirements",
      "Zero 'findings' status maintained since implementation"
    ],
    challenges: [
      "Designing controls without slowing processes",
      "Gaining user adoption for new procedures",
      "Documenting complex AP workflows"
    ],
    solutions: [
      "Automated controls where possible (minimal user intervention)",
      "Showed cost-benefit analysis to secure buy-in",
      "Used visual process mapping for clarity"
    ],
    technologies: ["COSO Framework", "Excel Documentation", "Control Testing", "Process Mapping"],
    timeline: "Ongoing (2022-2024)",
    role: "AP Module Lead | Senior AP Specialist",
    team: "Finance team + External auditors",
    deliverables: [
      "COSO-Compliant Process Documentation",
      "Internal Control Manual (40 pages)",
      "Risk Assessment Framework",
      "Control Testing Protocols",
      "Audit Support Documentation"
    ],
    testimonialId: "project-5"
  },

  {
    id: 6,
    title: "Strategic Vendor Negotiations: Building Win-Win Partnerships",
    subtitle: "Optimizing payment terms with 150+ vendors",
    category: "Vendor Management",
    impact: "$8.4K annual savings | 97% satisfaction rate",
    metrics: [
      { label: "Annual Savings", value: "$8.4K", icon: "💰" },
      { label: "Vendor Satisfaction", value: "98%", icon: "😊" },
      { label: "Response Time", value: "Same-day (97%)", icon: "⚡" },
      { label: "Dispute Reduction", value: "40%", icon: "📉" }
    ],
    highlights: [
      "Analyzed payment trends in Power BI for negotiation data",
      "Negotiated 2%/Net 10 terms with top 15 vendors ($420K spend)",
      "Launched vendor self-service portal for invoice tracking",
      "Established same-day response SLA (97% compliance)",
      "Built vendor relationship scorecard",
      "Reduced vendor disputes by 40%",
      "Improved cash flow optimization through early payments"
    ],
    challenges: [
      "Managing 150+ vendor relationships effectively",
      "Balancing cash flow with payment terms",
      "Building trust for better negotiations"
    ],
    solutions: [
      "Used data-driven insights for vendor discussions",
      "Offered flexible payment options",
      "Implemented vendor portal for transparency"
    ],
    technologies: ["Power BI", "Vendor Portal", "Excel Dashboards", "Communication Tools"],
    timeline: "Ongoing (2021-Present)",
    role: "Vendor Relations Lead | Senior AP Specialist",
    team: "AP team + Finance leadership",
    deliverables: [
      "Vendor Relationship Dashboard",
      "Payment Term Negotiation Framework",
      "Vendor Self-Service Portal",
      "Vendor Scorecard System",
      "Communication Templates"
    ],
    testimonialId: "project-6"
  },

  {
    id: 7,
    title: "Spend Control: From 45% to 12% Non-PO Invoices",
    subtitle: "Tightening spend control through workflow automation",
    category: "Process Optimization",
    impact: "73% improvement in spend control | $22K cost reduction",
    metrics: [
      { label: "Non-PO Reduction", value: "45% → 12%", icon: "📉" },
      { label: "Control Improvement", value: "73%", icon: "🎯" },
      { label: "Cost Savings", value: "$22K (6 months)", icon: "💰" },
      { label: "PO Approval Speed", value: "35% faster", icon: "⚡" }
    ],
    highlights: [
      "Partnered with Procurement for automated PO tracking",
      "Configured approval workflows with budget validation",
      "Trained 12 staff on requisition → PO → invoice matching",
      "Built exception handling for true non-PO scenarios",
      "Reduced unauthorized spending significantly",
      "Improved month-end accrual accuracy by 50%",
      "Created audit trail for all non-PO exceptions"
    ],
    challenges: [
      "High percentage of non-PO invoices (45%)",
      "Staff resistance to new workflows",
      "Handling legitimate non-PO exceptions"
    ],
    solutions: [
      "Involved users in system design process",
      "Created exception approval procedures",
      "Provided comprehensive training"
    ],
    technologies: ["Sage ERP", "Workflow Automation", "Budget Management", "Excel Tracking"],
    timeline: "4 months (ongoing)",
    role: "Spend Control Lead | Senior AP Specialist",
    team: "Finance + Procurement collaboration",
    deliverables: [
      "Automated PO Tracking System",
      "Approval Workflow Configuration",
      "Staff Training Materials",
      "Exception Handling Procedures",
      "Monthly Spend Reports"
    ],
    testimonialId: "project-7"
  },

  {
    id: 8,
    title: "Month-End Close Automation: Half the Time, Better Results",
    subtitle: "Automating reconciliation for 12 GL accounts",
    category: "Financial Operations",
    impact: "50% time savings | $500 variance tolerance maintained",
    metrics: [
      { label: "Time Savings", value: "8 → 4 hours/month", icon: "⏰" },
      { label: "Variance Tolerance", value: "$500", icon: "✓" },
      { label: "Accrual Accuracy", value: "95%+", icon: "📊" },
      { label: "Post-Close Adjustments", value: "-60%", icon: "📉" }
    ],
    highlights: [
      "Built automated Excel templates with Power Query linking",
      "Developed standardized accrual models ($80K-$120K range)",
      "Created variance analysis dashboard with drill-down",
      "Established month-end checklist with timing checkpoints",
      "Reduced post-close adjustments by 60%",
      "Maintained $500 variance tolerance (down from $2K+)",
      "Improved forecasting accuracy through spend trend insights"
    ],
    challenges: [
      "Handling complex accrual calculations",
      "Ensuring consistent month-end procedures",
      "Managing variance tolerance"
    ],
    solutions: [
      "Created reusable templates for consistency",
      "Built validation rules into spreadsheets",
      "Established checklist for process adherence"
    ],
    technologies: ["Excel Power Query", "VBA Scripting", "Automated Reconciliation", "Dashboard Design"],
    timeline: "Ongoing (2021-Present)",
    role: "GL Reconciliation Lead | Senior AP Specialist",
    team: "Finance team",
    deliverables: [
      "Automated Reconciliation Templates",
      "Accrual Calculation Models",
      "Variance Analysis Dashboard",
      "Month-End Checklist",
      "Process Documentation"
    ],
    testimonialId: "project-8"
  }
];

// ==========================================
// PROJECT RENDERING
// ==========================================

function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <div class="project-card card stagger-item animate-fade-in-up" data-project-id="${project.id}">
      <div class="project-header">
        <div>
          <h3>${project.title}</h3>
          <p class="text-accent" style="margin-bottom: var(--spacing-md);">${project.subtitle}</p>
        </div>
        <span class="badge badge-primary">${project.category}</span>
      </div>

      <div class="project-quick-metrics">
        <div class="quick-metric">
          <span class="metric-icon">📊</span>
          <span class="metric-text">${project.impact}</span>
        </div>
      </div>

      <button class="btn btn-secondary" onclick="openProjectModal(${project.id})" style="width: 100%; margin-top: var(--spacing-lg);">
        View Full Case Study
      </button>
    </div>
  `).join('');

  window.staggerElements('.project-card');
}

// ==========================================
// PROJECT MODAL
// ==========================================

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.id = `modal-${projectId}`;
  modal.innerHTML = generateProjectModalContent(project);
  document.body.appendChild(modal);

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);

  // Close button
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  });

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  });
}

function generateProjectModalContent(project) {
  return `
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="close-modal">✕</button>

        <div class="modal-header">
          <h2>${project.title}</h2>
          <p class="text-accent">${project.subtitle}</p>
        </div>

        <!-- Impact Metrics -->
        <div class="modal-section">
          <h3>Impact</h3>
          <div class="metrics-grid">
            ${project.metrics.map(m => `
              <div class="metric-card">
                <div class="metric-icon">${m.icon}</div>
                <div class="metric-value">${m.value}</div>
                <div class="metric-label">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Key Highlights -->
        <div class="modal-section">
          <h3>Key Highlights</h3>
          <ul class="highlights-list">
            ${project.highlights.map(h => `<li>✓ ${h}</li>`).join('')}
          </ul>
        </div>

        <!-- Challenges & Solutions -->
        <div class="modal-section">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg);">
            <div>
              <h4>Challenges Faced</h4>
              <ul>
                ${project.challenges.map(c => `<li>• ${c}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h4>Solutions Implemented</h4>
              <ul>
                ${project.solutions.map(s => `<li>✓ ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Technologies -->
        <div class="modal-section">
          <h3>Technologies Used</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${project.technologies.map(t => `<span class="badge badge-accent">${t}</span>`).join('')}
          </div>
        </div>

        <!-- Project Details -->
        <div class="modal-section">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg);">
            <div>
              <p><strong>Timeline:</strong> ${project.timeline}</p>
              <p><strong>Role:</strong> ${project.role}</p>
            </div>
            <div>
              <p><strong>Team:</strong> ${project.team}</p>
            </div>
          </div>
        </div>

        <!-- Deliverables -->
        <div class="modal-section">
          <h3>Deliverables</h3>
          <ul>
            ${project.deliverables.map(d => `<li>✅ ${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Initialize projects on page load
// Commenting out to prevent duplication - projects-page.js handles rendering
// document.addEventListener('DOMContentLoaded', renderProjects);

console.log('✓ Projects data loaded');
