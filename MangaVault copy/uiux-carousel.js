// uiux-carousel.js

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  let currentIndex = 0;

  // Populate slides
  for (let i = 1; i <= 20; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = `./tutuImg/${i}.png`;  // ✅ Correct path format
    img.alt = `Tutu Logo Design Presentation ${i}`;
    li.appendChild(img);
    track.appendChild(li);
  }

  const slides = Array.from(track.children);

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  window.addEventListener('resize', updateSlidePosition);

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlidePosition();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
  });

  // Initial position
  updateSlidePosition();
});
