const slider = document.getElementById("backgroundSlider");

const images = [
    "Images/backgroundImage1.png",
    "Images/backgroundImage2.jpg",
    "Images/backgroundImage3.jpg"
];

let index = 0;

// Initial background
slider.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
    slider.style.opacity = 0;  // fade out

    setTimeout(() => {
        index = (index + 1) % images.length;
        slider.style.backgroundImage = `url(${images[index]})`;
        slider.style.opacity = 1; // fade in
    }, 200); // wait half of transition time
}, 4000);  // how long each image stays



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
