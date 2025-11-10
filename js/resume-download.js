// ==========================================
// RESUME DOWNLOAD HANDLER
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  // Professional Resume Download
  const downloadPdf = document.getElementById('downloadPdf');
  if (downloadPdf) {
    downloadPdf.addEventListener('click', function(e) {
      e.preventDefault();
      // Open resume.html in new tab for user to save/print as PDF
      const link = document.createElement('a');
      link.href = document.location.pathname.includes('/pages/') ? '../resume.html' : 'resume.html';
      link.target = '_blank';
      link.click();
    });
  }

  // Visual Resume Download
  const downloadVisual = document.getElementById('downloadVisual');
  if (downloadVisual) {
    downloadVisual.addEventListener('click', function(e) {
      e.preventDefault();
      // Open resume-visual.html in new tab for user to save/print as PDF
      const link = document.createElement('a');
      link.href = document.location.pathname.includes('/pages/') ? '../resume-visual.html' : 'resume-visual.html';
      link.target = '_blank';
      link.click();
    });
  }
});
