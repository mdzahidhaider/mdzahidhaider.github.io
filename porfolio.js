document.getElementById('resume-button-1').addEventListener("click",()=>{
  console.log("OPENinig.....")
  window.open("https://drive.google.com/file/d/1LAbM0M6p6gAnPcrRtr3NTB6E1IlI2fpY/view?usp=share_link", "_blank");
})

document.getElementById('resume-link-1').addEventListener("click",()=>{
  console.log("OPENinig.....")
  window.open("https://drive.google.com/file/d/1LAbM0M6p6gAnPcrRtr3NTB6E1IlI2fpY/view?usp=share_link", "_blank");
})

document.getElementById('resume-button-2').addEventListener("click",()=>{
  console.log("OPENinig.....")
  window.open("https://drive.google.com/file/d/1LAbM0M6p6gAnPcrRtr3NTB6E1IlI2fpY/view?usp=share_link", "_blank");
})

function resume(){
  window.open("https://drive.google.com/file/d/1LAbM0M6p6gAnPcrRtr3NTB6E1IlI2fpY/view?usp=share_link", "_blank");
}
    var sidemeu = document.getElementById("sidemenu")
    function openmenu() {
      sidemeu.style.right = "20%";

    }
    function closemenu() {
      sidemeu.style.right = "-200px";

    }


const burger = document.querySelector(".sidemenu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const scrollUp = document.querySelector("#scroll-up");

// scroll to top functionality




scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});



// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
// burger.addEventListener("click", () => {
//     ul.classList.toggle("show");
//   });
// Close hamburger menu when a link is clicked

// Select nav links
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

// import { AwesomeButtonShare } from "react-awesome-button";

// const Buttons = () => {
//   return (
//     <><AwesomeButtonShare type="github" href="https://github.com/username">GitHub</AwesomeButtonShare><AwesomeButtonShare type="linkedin" href="https://linkedin.com/username">LinkedIn</AwesomeButtonShare><AwesomeButtonShare type="instagram" href="https://linkedin.com/username">Instagram</AwesomeButtonShare></>
//   );
// }
// GitHub
// Instagram

// LinkedIn