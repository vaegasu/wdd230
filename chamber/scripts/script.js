// Current Date
let date = document.getElementById("currentDate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date.innerHTML = fulldate;

// Current Year 
const currentYear = new Date();
document.querySelector("#currentYear").textContent= currentYear.getFullYear();

// Last Modified
var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("lastModified").innerHTML = "Last Updated: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("lastModified").innerHTML = "Last Updated: "+
        temp+" am"
}

function scrollDown(elem) {
    if (elem.scrollTop < 100) {
        document.querySelector('#scroll-down').className = "up"
    }
    else {
        document.querySelector('#scroll-down').className = ""
    }
}

// Hamburger Button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("navButton").classList.toggle("open");
}

const x = document.getElementById("navButton")
x.onclick = toggleMenu;

// Meet & Greet Banner for Monday/Tuesday
if (now.getDay() < 3 && now.getDay() > 0){
    document.getElementById("meetAndGreet").classList.toggle("activeBanner");
}

// lazy load //
const images = document.querySelectorAll("[data-src]");

function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }
    
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            return;
        }
        else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

// Weather API //

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5810988&units=imperial&appid=6029cdcec6e4ff661fe81b24b74ac429";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    document.querySelector('#temp').textContent = jsonObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`; 
    const desc = jsonObject.weather[0].description;
    // desc = desc.split(' ').map(capitalize).join(' ');
    const windspeed = jsonObject.wind.speed;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('#weatherDesc').textContent= desc; 
    document.querySelector('#speed').textContent = windspeed;

    let t = jsonObject.main.temp;   
    let wc = '';

      if (t <= 50 && windspeed > 3) {
        wc = parseFloat(35.74 + (0.6215 * t) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 * t * Math.pow(windspeed,0.16))).toFixed(2);
        document.getElementById('chill').innerHTML = `${wc} &#176;F`;
      }
      else {
        document.getElementById('chill').innerHTML= 'N/A';
        }
  });

// function capitalize(word) {
//     return `${word.charAt(0).toUpperCase}${word.slice(1)}`;
// }

const listV = document.querySelector('.list');
const tileV = document.querySelector('.tile');

tileV.addEventListener('click', () => {dir-cards.classList.toggle('list')}, false);
listV.addEventListener('click', ()=> {dir-cards.classList.toggle('tile')}, false); 
