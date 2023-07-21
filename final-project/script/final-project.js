const today = {month: 'long', day: 'numeric', year: 'numeric'};

// weather api //

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

// fruit-cards //

const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const cards = document.querySelector(".fruit-cards");
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const temples = jsonObject['fruit'];
        temples.forEach(displayFruit);
    });

function displayTemples(fruit){
    let card= document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let picture = document.createElement('img');

    h2.innerHTML= `${fruit.genus}`;
    p1.innerHTML= `Name: ${fruit.name}`;
    p2.innerHTML = `Family: ${fruit.family}`;
    p3.innerHTML = `Order: ${fruit.order}`;
    p4.innerHTML = `Nutritions: ${fruit.nutritions}`

    
    picture.setAttribute("src", fruit.picture);
    picture.setAttribute("alt", `${fruit.name}`);
    picture.setAttribute("loading", "lazy");
    card.setAttribute("class", "fruit-cards");

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(picture);

    cards.appendChild(card);
}

// google maps //

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(33.6558, 117.8002),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

// Current Year 
const currentYear = new Date();
document.querySelector("#currentYear").textContent= currentYear.getFullYear();

// Last Modified
var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("#lastModified").innerHTML = "Last Updated: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("#lastModified").innerHTML = "Last Updated: "+
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