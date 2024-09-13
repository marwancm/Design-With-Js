// check If There's Local Storage Option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
      //Remove Active Class From All Colors List Item
      document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        
              //Add Active Class On Element With Data-Color === Local Storage Item
              if (element.dataset.color === mainColors) {
                //Add Active Class
                element.classList.add("active");
              }
      });

}


//Random Background Option
let backgroundOption = true;

//Varible To Control The Backgrond Intrval
let backgroundInterval;



// Toggle Setting Box Open
document.querySelector(".fa-gear").onclick = () => {
  document.querySelector(".settings-box").classList.toggle("open")
}

//Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");

//Loop On All List Items
colorLi.forEach(li => {
  //Click On Every List Items 
  li.addEventListener("click", (e) => {
    //Set color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    //Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color); 
    //Remove Active Class From All Childeans
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    //Add Active Class On Self
    e.target.classList.add("active");
  });
});

//Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-background span");

//Loop On All Spans
randomBackEl.forEach(span => {

  //Click On Every Span
  span.addEventListener("click", (e) => {
    //Remove Active Class From All Childeans
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    //Add Active Class On Self
    e.target.classList.add("active");
    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomizeTmages();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});


//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
//Get Array Of Images
let imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",];

randomizeTmages = () => {

  if (backgroundOption === true){
    backgroundInterval = setInterval (() => {
      //Get Random Number
      let randomNumber = Math.floor(Math.random() * imagesArray.length)
      //Change Background Images Url
      landingPage.style.background = 'url("images/' + imagesArray[randomNumber] + '")'
    }, 3000);
    
  }
}