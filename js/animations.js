// ==========================================
// ANIMATIONS & TRANSITIONS
// ==========================================

// Scroll-triggered fade-in animations
const revealElements = () => {
  const reveals = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-down, .animate-slide-in-left, .animate-slide-in-right');
  
  reveals.forEach(element => {
    const windowTop = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowTop - 50) {
      element.style.opacity = '1';
    }
  });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Stagger animation helper
function staggerElements(selector, delay = 100) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * delay}ms`;
  });
}

// Hover effects for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Button ripple effect
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', createRipple);
});

// Number animation
function animateNumber(element, target, duration = 2000) {
  let current = 0;
  const start = Date.now();
  
  function update() {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    current = Math.floor(target * progress);
    element.textContent = current.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }
  
  requestAnimationFrame(update);
}

// Parallax scroll effect
function parallaxScroll() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  const scrolled = window.pageYOffset;
  
  parallaxElements.forEach(element => {
    const elementOffset = element.offsetTop;
    const parallaxSpeed = element.getAttribute('data-parallax') || 0.5;
    
    element.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  });
}

window.addEventListener('scroll', parallaxScroll);

// Tab switching with animation
function setupTabs(tabsContainer) {
  const tabs = tabsContainer.querySelectorAll('.tab');
  const contents = tabsContainer.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      // Add active class
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      const content = tabsContainer.querySelector(`#${tabId}`);
      if (content) {
        content.classList.add('active');
      }
    });
  });
}

// Initialize tabs on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tabs]').forEach(setupTabs);
});

// Fade in on scroll
const fadeInOnScroll = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      observer.unobserve(entry.target);
    }
  });
};

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

// Export functions for use in other files
window.staggerElements = staggerElements;
window.animateNumber = animateNumber;
window.setupTabs = setupTabs;