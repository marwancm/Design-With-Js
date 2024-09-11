// Toggle Setting Box Open
document.querySelector(".fa-gear").onclick = () => {
  document.querySelector(".settings-box").classList.toggle("open")
}





//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Images
let imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",]


setInterval (() => {
  //Get Random Number
  let randomNumber = Math.floor(Math.random() * imagesArray.length)

  //Change Background Images Url
  landingPage.style.background = 'url("images/' + imagesArray[randomNumber] + '")'


}, 3000);

