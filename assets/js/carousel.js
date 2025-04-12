document.addEventListener("DOMContentLoaded", () => {
  const logosSlide = document.querySelector('.logos-slide');
  const logos = logosSlide.querySelectorAll('img');
  
  const clonedLogos = Array.from(logos).map(logo => logo.cloneNode(true));
  logosSlide.append(...clonedLogos);

  let currentPosition = 0;
  let isPaused = false;

  function animateLogos() {
    const logoWidth = logos[0].offsetWidth + 80;

    function moveLogos() {
      if (!isPaused) {
        currentPosition -= 1;
        logosSlide.style.transform = `translateX(${currentPosition}px)`;

        if (Math.abs(currentPosition) >= logoWidth * logos.length) {
          currentPosition = 0;
        }
      }

      requestAnimationFrame(moveLogos);
    }

    moveLogos();
  }


  logosSlide.addEventListener("mouseenter", () => {
    isPaused = true;
  });


  logosSlide.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  animateLogos();
});
