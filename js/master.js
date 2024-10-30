// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', mainColors);
  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

if (backgroundLocalItem !== null) {
  document.querySelectorAll(".random-background span").forEach(element => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === 'true') {
    backgroundOption = true;
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    backgroundOption = false;
    document.querySelector(".random-background .no").classList.add("active");
  }
}

// Click On Toggle Settings Gear
document.querySelector(".fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach(li => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    localStorage.setItem("color_option", e.target.dataset.color);
    handleActive(e);
  });
});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach(span => {
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomizeImages();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// Function To Randomize Images
function randomizeImages() {
  if (backgroundOption) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imagesArray.length);
      landingPage.style.backgroundImage = 'url("images/' + imagesArray[randomNumber] + '")';
    }, 3000); // 10-second interval
  }
}

// Helper Function To Manage Active Class
function handleActive(event) {
  event.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}

// Call randomizeImages on page load if backgroundOption is true
if (backgroundOption) {
  randomizeImages();
}
