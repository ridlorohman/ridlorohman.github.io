const slideImages = document.querySelectorAll('.slide-image');
const slideIndicators = document.querySelectorAll('.slide-indicator');

let currentSlide = 0;

function showSlide(slideIndex) {
  slideImages.forEach((image, index) => {
    if (index === slideIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

  slideIndicators.forEach((indicator, index) => {
    if (index === slideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slideImages.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds