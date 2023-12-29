//every 3 secs, force a click on input "carousel-dot"
const radioInputs = document.querySelectorAll(".carousel-dot");
let activeCarouselIndex = 0;

function autoShowSlides() {
  activeCarouselIndex = (activeCarouselIndex + 1) % 3;
  radioInputs[activeCarouselIndex].click();

  setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
}

setTimeout(autoShowSlides, 3000);
