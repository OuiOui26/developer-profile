window.onload = function() {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  nextBtn.addEventListener('click', () => {
    const totalItems = track.children.length;
    const itemsPerView = 3;
    if (currentIndex < totalItems - itemsPerView) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }

    track.style.transform = `translateX(-${currentIndex * 33.33}%)`; 
  });

  prevBtn.addEventListener('click', () => {
    const totalItems = track.children.length;
    const itemsPerView = 3;

    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - itemsPerView; 
    }

    track.style.transform = `translateX(-${currentIndex * 33.33}%)`; 
  });
};
