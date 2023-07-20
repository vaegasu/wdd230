const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&units=imperial&appid=6029cdcec6e4ff661fe81b24b74ac429";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    document.querySelector('#current-temp').textContent = jsonObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`; 
    const desc = jsonObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;  
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc; 
  });