
  const hero = document.querySelector('.hero');

  const images = [
    "images/backgroundImage1.jpg",
    "images/backgroundImage2.jpg",
    "images/backgroundImage3.jpg",
    "images/backgroundImage4.jpg"

  ];

  let index = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  // Initial load
  changeBackground();

  // Change every 5 seconds
  setInterval(changeBackground, 5000);



const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // show popup
  popup.style.display = "flex";

  // reset form
  form.reset();
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
