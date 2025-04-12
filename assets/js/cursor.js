document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-glow');
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    const hoverTargets = document.querySelectorAll('.hover-text');
  
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.opacity = '0'; 
      });
  
      el.addEventListener('mouseleave', () => {
        cursor.style.opacity = '1'; 
      });
    });
  });
  