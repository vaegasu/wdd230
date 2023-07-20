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

const requestURL = "https://raw.githubusercontent.com/emrmason/wdd230/main/templeinn/data/temples.json";
const cards = document.querySelector(".temple-cards");
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temple){
    let card= document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let picture = document.createElement('img');

    h2.innerHTML= `${temple.name}`;
    p1.innerHTML= `Address: ${temple.address}`;
    p2.innerHTML = `Phone: ${temple.telephone}`;
    p3.innerHTML = `Hours: ${temple.hours}`;
    p4.innerHTML = `Services: ${temple.services}`

    
    picture.setAttribute("src", temple.picture);
    picture.setAttribute("alt", `${temple.name} Temple`);
    picture.setAttribute("loading", "lazy");
    card.setAttribute("class", "temple-cards");

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(picture);

    cards.appendChild(card);
}

