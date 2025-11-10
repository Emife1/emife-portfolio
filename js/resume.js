// Resume Download Functionality
document.addEventListener('DOMContentLoaded', function() {
  const resumeButtons = document.querySelectorAll('#resumeBtn');
  
  resumeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create a dropdown menu for resume options
      const existingDropdown = document.querySelector('.resume-dropdown');
      if (existingDropdown) {
        existingDropdown.remove();
        return;
      }
      
      const dropdown = document.createElement('div');
      dropdown.className = 'resume-dropdown';
      dropdown.innerHTML = `
        <div style="position: fixed; top: 70px; right: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; min-width: 220px; overflow: hidden;">
          <a href="${getResumePath('resume.html')}" target="_blank" style="display: block; padding: 12px 16px; color: #2c3e50; text-decoration: none; border-bottom: 1px solid #ecf0f1; transition: background 0.2s;">
            📄 Professional Resume
          </a>
          <a href="${getResumePath('resume-visual.html')}" target="_blank" style="display: block; padding: 12px 16px; color: #2c3e50; text-decoration: none; transition: background 0.2s;">
            🎨 Visual Resume
          </a>
        </div>
      `;
      
      // Add hover effects via CSS
      const style = document.createElement('style');
      style.textContent = `
        .resume-dropdown a:hover {
          background: #f0f4f8;
        }
      `;
      document.head.appendChild(style);
      
      document.body.appendChild(dropdown);
      
      // Remove dropdown when clicking elsewhere
      document.addEventListener('click', function closeDropdown(e) {
        if (!e.target.closest('#resumeBtn') && !e.target.closest('.resume-dropdown')) {
          const menu = document.querySelector('.resume-dropdown');
          if (menu) menu.remove();
          document.removeEventListener('click', closeDropdown);
        }
      });
    });
  });
});

function getResumePath(filename) {
  const currentPath = window.location.pathname;
  
  // If we're on a page in the pages/ directory
  if (currentPath.includes('/pages/')) {
    return '../' + filename;
  }
  
  // If we're on the root index
  return filename;
}
