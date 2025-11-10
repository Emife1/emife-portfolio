// ==========================================
// TESTIMONIALS DATA & RENDERING
// ==========================================

const testimonials = [
  {
    id: "project-1",
    name: "M. Chen",
    title: "CFO",
    company: "TDI Golf & XGD Systems",
    image: "👨‍💼",
    quote: "Victoria's AP Dashboard transformed how we manage $12M in annual spend. Within 60 days, we had real-time visibility into cash flow and vendor concentration risk that previously took weeks to compile. The dashboard paid for itself immediately, but the real value is in the decision-making—we went from reactive to proactive. She made financial data accessible to stakeholders who previously had no visibility. That's strategic.",
    context: "AP Dashboard Project - 60-Day ROI"
  },
  {
    id: "project-2",
    name: "S. Mitchell",
    title: "AP Operations Lead",
    company: "TDI Golf & XGD Systems",
    image: "👩‍💼",
    quote: "Before Stampli automation, I was spending 40% of my day on manual invoice entry. Victoria didn't just implement software—she redesigned our entire workflow. Now I analyze vendor trends, negotiate better terms, and work strategically. Our processing time dropped from 8.5 to 4.1 days, and vendor satisfaction increased. Late payments? Zero since go-live. That's a complete transformation of the AP function.",
    context: "Invoice Automation - 52% Faster Processing"
  },
  {
    id: "project-3",
    name: "D. Erikson",
    title: "External Auditor",
    company: "Accounting Firm",
    image: "👨‍💼",
    quote: "In my 20+ years auditing companies, few have internal controls this robust and effective. Victoria built a SOX-compliant framework that actually prevents issues rather than catching them after-the-fact. Zero audit findings for three consecutive years—that's exceptional. What impressed me most: her controls are *used and understood* by the team, not just documented. That's the hallmark of professional financial management.",
    context: "SOX Compliance & Fraud Prevention"
  },
  {
    id: "project-4",
    name: "J. Park",
    title: "IT Operations Manager",
    company: "TDI Golf & XGD Systems",
    image: "👩‍💼",
    quote: "The Sage 300 to Sage Intacct migration was flawless. Victoria came with a comprehensive risk mitigation plan—contingencies for every scenario. When we hit technical issues during testing, she didn't panic; she fixed them methodically. Zero downtime during go-live, 100% data integrity across 15,000+ transactions. She also trained our finance team so thoroughly that adoption was smooth. That's enterprise-level project management.",
    context: "ERP Migration - Zero Downtime"
  },
  {
    id: "project-5",
    name: "R. Thompson",
    title: "Director of Operations",
    company: "TDI Golf & XGD Systems",
    image: "👨‍💼",
    quote: "Victoria's internal controls framework became the model for our entire organization. She balanced compliance rigor with operational efficiency—something most people struggle with. Her control design prevents problems without creating bureaucracy. Every single control has documented business rationale. Her fraud detection system caught a $12K attempted vendor impersonation that would have cost us significantly. That's the value of professional controls.",
    context: "Financial Controls Framework"
  },
  {
    id: "project-6",
    name: "L. Montenegro",
    title: "Vendor Relations Manager",
    company: "Industry Peer",
    image: "👩‍💼",
    quote: "Victoria's vendor management approach is fundamentally different from typical AP specialists. She builds relationships, not just processes transactions. Her self-service vendor portal reduced inquiry resolution time from 3+ days to same-day for 97% of cases. Vendors appreciate the professionalism and transparency. The result? Better payment terms, stronger partnerships, and 40% fewer disputes. That's strategic vendor management.",
    context: "Vendor Relations & Negotiations"
  },
  {
    id: "project-7",
    name: "K. Morrison",
    title: "Procurement Specialist",
    company: "TDI Golf & XGD Systems",
    image: "👨‍💼",
    quote: "Victoria transformed our spend control from non-existent (45% non-PO invoices!) to professional (12% non-PO). What impressed me: she did this without creating frustration. She involved vendors, trained staff, and built clear processes. The system now has visibility into 73% more spending, better budget control, and zero compliance violations. That's how you implement controls—with buy-in, not resistance.",
    context: "Spend Control - 73% Improvement"
  },
  {
    id: "project-8",
    name: "A. Castro",
    title: "Controller",
    company: "TDI Golf & XGD Systems",
    image: "👩‍💼",
    quote: "Victoria cut our month-end close time in half through automation—but the real achievement is the quality improvement. Her reconciliation processes are so thorough we actually *catch more errors faster* now. Variance tolerance decreased while speed increased. Post-close adjustments dropped 60%. She bridges accounting expertise with technical skills seamlessly. That's invaluable in today's finance operations.",
    context: "Month-End Close Automation - 50% Savings"
  }
];

// ==========================================
// TESTIMONIALS RENDERING
// ==========================================

function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  container.innerHTML = testimonials.map((testimonial, index) => `
    <div class="testimonial-card stagger-item animate-fade-in-up" style="animation-delay: ${index * 100}ms;">
      <div class="testimonial-header">
        <div class="testimonial-avatar">${testimonial.image}</div>
        <div class="testimonial-info">
          <h4 style="margin: 0;">${testimonial.name}</h4>
          <p style="margin: 0; color: var(--primary-accent); font-size: 0.9rem;">${testimonial.title}</p>
          <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;">${testimonial.company}</p>
        </div>
      </div>

      <p class="testimonial-quote">"${testimonial.quote}"</p>

      <div class="testimonial-context">
        <span class="badge" style="background: rgba(255,255,255,0.2); color: var(--neutral-white);">${testimonial.context}</span>
      </div>
    </div>
  `).join('');

  window.staggerElements('.testimonial-card');
}

// Initialize testimonials on page load
document.addEventListener('DOMContentLoaded', renderTestimonials);

console.log('✓ Testimonials initialized');
