// This script.js is modified from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

let slideIndex = 0;
showSlides();
console.log(showSlides());

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel__item");
  let dots = document.getElementsByClassName("carousel-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" checked", "");
  }
  // slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " checked";
  console.log(dots.className);

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
