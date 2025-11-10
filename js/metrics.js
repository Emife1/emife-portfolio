// Animated Metrics Counters
document.addEventListener('DOMContentLoaded', function() {
  const metrics = document.querySelectorAll('.metric-value');
  let animated = false;

  function animateMetrics() {
    if (animated) return;
    
    metrics.forEach(metric => {
      const target = parseInt(metric.dataset.target);
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      
      function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(target * progress);
        
        // Format number with commas
        metric.textContent = current.toLocaleString();
        
        // Add currency or percentage suffix
        if (metric.textContent.startsWith('$') === false && target > 100) {
          if (target === 52 || target === 99) {
            metric.textContent = current + '%';
          } else if (target === 34500) {
            metric.textContent = '$' + current.toLocaleString();
          } else if (target === 150) {
            metric.textContent = current + '+';
          }
        }
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      
      update();
    });
    
    animated = true;
  }

  // Trigger animation when metrics section comes into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetrics();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const metricsSection = document.querySelector('.metrics');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
});
