document.addEventListener("DOMContentLoaded", () => {
  const logosSlide = document.querySelectorAll('.logos-slide');
  console.log(logosSlide.length);

  logosSlide.forEach(element => {
    const logos = element.querySelectorAll('img');
  
    const clonedLogos = Array.from(logos).map(logo => logo.cloneNode(true));
    element.append(...clonedLogos);
  
    let currentPosition = 0;
  
    function animateLogos() {
      const logoWidth = logos[0].offsetWidth + 80;
  
      function moveLogos() {
        currentPosition -= 1;
        element.style.transform = `translateX(${currentPosition}px)`;
  
        if (Math.abs(currentPosition) >= logoWidth * logos.length) {
          currentPosition = 0;
        }
  
        requestAnimationFrame(moveLogos);
      }
  
      moveLogos();
    }
    animateLogos();
  });


});
