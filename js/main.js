// ==========================================
// VICTORIA EMIFE - PORTFOLIO
// Main JavaScript - Navigation, Header, Utils
// ==========================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      const navMenu = document.getElementById('navMenu');
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Resume button functionality
document.addEventListener('DOMContentLoaded', function() {
  const resumeButtons = document.querySelectorAll('#resumeBtn');
  
  resumeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close any existing dropdown
      const existingDropdown = document.querySelector('.resume-dropdown');
      if (existingDropdown) {
        existingDropdown.remove();
        return;
      }
      
      // Determine base path based on current location
      const currentPath = window.location.pathname;
      const isInPages = currentPath.includes('/pages/');
      const basePath = isInPages ? '../' : '';
      
      // Create dropdown menu
      const dropdown = document.createElement('div');
      dropdown.className = 'resume-dropdown';
      dropdown.innerHTML = `
        <div style="position: fixed; top: 70px; right: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; min-width: 220px; overflow: hidden;">
          <a href="${basePath}resume.html" target="_blank" style="display: block; padding: 12px 16px; color: #2c3e50; text-decoration: none; border-bottom: 1px solid #ecf0f1; transition: background 0.2s;">
            📄 Professional Resume
          </a>
          <a href="${basePath}resume-visual.html" target="_blank" style="display: block; padding: 12px 16px; color: #2c3e50; text-decoration: none; transition: background 0.2s;">
            🎨 Visual Resume
          </a>
        </div>
      `;
      
      document.body.appendChild(dropdown);
      
      // Add hover effects
      const links = dropdown.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          link.style.background = '#f0f4f8';
        });
        link.addEventListener('mouseleave', () => {
          link.style.background = 'white';
        });
      });
      
      // Remove dropdown when clicking elsewhere
      const closeDropdown = (e) => {
        if (!e.target.closest('#resumeBtn') && !e.target.closest('.resume-dropdown')) {
          const menu = document.querySelector('.resume-dropdown');
          if (menu) menu.remove();
          document.removeEventListener('click', closeDropdown);
        }
      };
      
      setTimeout(() => {
        document.addEventListener('click', closeDropdown);
      }, 100);
    });
  });
});

// ==========================================
// ANIMATED COUNTERS
// ==========================================

function animateCounters() {
  const counters = document.querySelectorAll('[data-target]');
  const speed = 2000; // Animation duration in ms

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    let current = 0;
    const increment = target / (speed / 16); // 60fps

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        const displayValue = Math.floor(current);
        counter.textContent = prefix + displayValue.toLocaleString() + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = prefix + target.toLocaleString() + suffix;
      }
    };

    // Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(counter);
  });
}

// Initialize counters
document.addEventListener('DOMContentLoaded', animateCounters);

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      
      // Add appropriate animation class based on data attribute
      const animationType = element.getAttribute('data-animation');
      if (animationType) {
        element.classList.add(`animate-${animationType}`);
      }
      
      observer.unobserve(element);
    }
  });
}, observerOptions);

// Observe all elements with animation attributes
document.querySelectorAll('[data-animation]').forEach(el => {
  observer.observe(el);
});

// ==========================================
// UTILITIES
// ==========================================

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Show success feedback
    alert('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// Format currency
function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Format percentage
function formatPercentage(value) {
  return value.toFixed(1) + '%';
}

// Format large numbers
function formatLargeNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Get month name
function getMonthName(monthIndex) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
}

// Log initialization
console.log('✓ Portfolio initialized - Victoria Emife');
