// Projects Page Renderer
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('projectsContainer');
  
  if (container && typeof projects !== 'undefined') {
    projects.forEach((project, index) => {
      // Create a wrapper link
      const projectLink = document.createElement('a');
      projectLink.href = `project-${index + 1}.html`;
      projectLink.className = 'card-link';
      projectLink.style.textDecoration = 'none';
      projectLink.style.color = 'inherit';
      
      const projectCard = document.createElement('div');
      projectCard.className = 'card animate-fade-in-up';
      projectCard.style.borderTop = '4px solid var(--primary-blue)';
      projectCard.style.cursor = 'pointer';
      
      // Format metrics - handle both array and object formats
      const metricsArray = Array.isArray(project.metrics) ? project.metrics : [];
      const metricsHtml = metricsArray
        .map((metric) => `
          <li style="padding-left: 20px; position: relative; margin-bottom: 0.5rem;">
            <span style="position: absolute; left: 0; color: var(--primary-blue); font-weight: bold;">✓</span>
            <strong>${metric.label}:</strong> ${metric.value}
          </li>
        `)
        .join('');
      
      // Format highlights/key results
      const highlightsHtml = (project.highlights || [])
        .map((highlight) => `
          <li style="padding-left: 20px; position: relative; margin-bottom: 0.5rem;">
            <span style="position: absolute; left: 0; color: var(--primary-blue); font-weight: bold;">✓</span>
            ${highlight}
          </li>
        `)
        .join('');
      
      projectCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-md);">
          <div>
            <h4 style="color: var(--primary-blue); margin: 0 0 0.25rem 0;">${project.title}</h4>
            <p style="margin: 0; color: var(--neutral-500); font-size: 0.9rem;">${project.subtitle || ''}</p>
          </div>
          <span style="background: var(--primary-blue); color: white; padding: 0.375rem 0.75rem; border-radius: 0.375rem; font-size: 0.75rem; white-space: nowrap; font-weight: 600;">${project.category}</span>
        </div>
        
        <p style="color: var(--neutral-500); font-size: 0.9rem; margin-bottom: var(--spacing-md);"><strong>Timeline:</strong> ${project.timeline}</p>
        
        <p style="font-size: 0.9rem; font-weight: 600; color: var(--primary-blue); margin-bottom: var(--spacing-sm);">Impact:</p>
        <p style="margin-bottom: var(--spacing-md); font-weight: 600;">${project.impact}</p>
        
        ${metricsHtml ? `<p style="font-size: 0.9rem; font-weight: 600; color: var(--primary-blue); margin-bottom: var(--spacing-sm);">Key Metrics:</p>
        <ul style="list-style: none; padding-left: 0; margin-bottom: var(--spacing-lg);">
          ${metricsHtml}
        </ul>` : ''}
        
        <div style="margin-top: var(--spacing-lg); color: var(--primary-blue); font-weight: 600;">
          View Full Case Study →
        </div>
      `;
      
      projectLink.appendChild(projectCard);
      container.appendChild(projectLink);
    });
  }
});
