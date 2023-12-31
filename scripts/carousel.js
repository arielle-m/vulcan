//every 3 secs, force a click on input "carousel-dot"
const radioInputs = document.querySelectorAll(".carousel-dot");
const labels = document.querySelectorAll(".carousel__nav label");

const CAROUSEL_DELAY = 3000;

let activeCarouselIndex = 0;
let timeoutID;
setTimeout(autoShowSlides, CAROUSEL_DELAY);

function autoShowSlides() {
  activeCarouselIndex++;
  // console.log(activeCarouselIndex);
  radioInputs[activeCarouselIndex].click();

  if (activeCarouselIndex === radioInputs.length - 1) {
    activeCarouselIndex = -1;
  }

  // Change image every 3 seconds
  timeoutID = setTimeout(autoShowSlides, CAROUSEL_DELAY);
}

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", function () {
    clearTimeout(timeoutID);
    activeCarouselIndex = i;
    if (activeCarouselIndex === radioInputs.length - 1) {
      activeCarouselIndex = -1;
    }

    timeoutID = setTimeout(autoShowSlides, CAROUSEL_DELAY);
  });
}
