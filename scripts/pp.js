document.addEventListener("DOMContentLoaded", () => {
 
let year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent= currentYear;
document.querySelector("#year").innerHTML = new Date().getFullYear();
    
document.getElementById("#updated").innerHTML = new Date()
  });