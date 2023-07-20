const today = {month: 'long', day: 'numeric', year: 'numeric'};

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=6029cdcec6e4ff661fe81b24b74ac429";
fetch(apiURL)
.then((response) => response.json())
.then((jsonObject) => {
  document.querySelector('#temp').textContent = jsonObject.current.temp;
  const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`; 
  const desc = jsonObject.current.weather.description;
  document.querySelector('#weather-icon').setAttribute('src', iconsrc);
  document.querySelector('#weather-icon').setAttribute('alt', desc);
  document.querySelector('#weatherDesc').textContent= desc; 
})

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
    picture.setAttribute("alt", `${fruit.name} Temple`);
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