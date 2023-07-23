// --- weather api --- //

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6029cdcec6e4ff661fe81b24b74ac429";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    document.querySelector("#temp").textContent = jsonObject.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
    const desc = jsonObject.weather[0].description;
    // desc = desc.split(' ').map(capitalize).join(' ');
    const windspeed = jsonObject.wind.speed;
    document.querySelector("#weather-icon").setAttribute("src", iconsrc);
    document.querySelector("#weather-icon").setAttribute("alt", desc);
    document.querySelector("#weatherDesc").textContent = desc;
    document.querySelector("#speed").textContent = windspeed;

    let t = jsonObject.main.temp;
    let wc = "";

    if (t <= 50 && windspeed > 3) {
      wc = parseFloat(
        35.74 +
          0.6215 * t -
          35.75 * Math.pow(windspeed, 0.16) +
          0.4275 * t * Math.pow(windspeed, 0.16)
      ).toFixed(2);
      document.getElementById("chill").innerHTML = `${wc} &#176;F`;
    } else {
      document.getElementById("chill").innerHTML = "N/A";
    }
  });

const api_key = "30dab8ad616006464c6fcefabccd5254";
const cityId = 5604473;
const imgURL = "https://openweathermap.org/img/w/";
const rnd = (n, d) => {
  return Math.round(n * 10 ** d) / 10 ** d;
};

fetch(
  "https://api.openweathermap.org/data/2.5/weather?id=" +
    cityId +
    "&units=imperial&appid=" +
    api_key
)
  .then((res) => {
    return res.json();
  })
  .then((jsonData) => {
    document.querySelector(".summary .currently").innerHTML =
      jsonData.weather[0].main +
      " <span>" +
      rnd(jsonData.main.temp, 1) +
      "</span>&deg;F";
    document.querySelector(".summary .temperature").textContent = rnd(
      jsonData.main.temp_max,
      1
    );
    document.querySelector(".summary .humidity").textContent =
      jsonData.main.humidity + "%";
    document.querySelector(".summary .wind-speed").textContent =
      jsonData.wind.speed;

    let t = parseFloat(document.querySelector(".currently span").innerHTML);
    let s = parseFloat(document.querySelector(".wind-speed").innerHTML);
    let chillFactor =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16);
    if (t <= 50.0 && s > 3.0) {
      document.querySelector(".wind-chill").innerHTML = rnd(chillFactor, 1);
    } else {
      document.querySelector(".colored.chill").innerHTML = "N/A";
    }
  });

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?id=" +
    cityId +
    "&units=imperial&appid=" +
    api_key
)
  .then((res) => {
    return res.json();
  })
  .then((jsonData) => {
    jsonData.list
      .filter((item) => item["dt_txt"].includes("18:00:00"))
      .forEach((elem, index) => {
        document.querySelector(
          "#day" + (index + 1) + " + .weather-icon"
        ).innerHTML = "<img src='" + imgURL + elem.weather[0].icon + ".png'>";
        document.querySelector("#day" + (index + 1) + " ~ span").innerHTML =
          rnd(elem.main.temp, 1) + "&deg;F";
      });
  });

// --- fruit-cards --- //

const requestURL =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
  const response = await fetch(url);
  const data = await response.json();
  displayFruits(data.fruits);
}

async function displayFruits(fruits) {
  const cards = document.querySelector("fruit-cards");

  fruits.forEach((fruit) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    h2.innerHTML = `${fruit.name}`;
    p1.innerHTML = `Name: ${fruit.name}`;
    p2.innerHTML = `Family: ${fruit.family}`;
    p3.innerHTML = `Order: ${fruit.order}`;
    p4.innerHTML = `Nutritions: ${fruit.nutritions}`;

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);

    cards.appendChild(card);
  });
}
getFruitData();

// --- information display --- //

function showInput() {
  document.getElementById("display").innerHTML =
    document.getElementById("user_input").value;
}

// --- google maps --- //

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(33.6558, 117.8002),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// --- lazy load --- //

const images = document.querySelectorAll("[data-src]");

function preLoadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preLoadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

// --- 5-day weather forecast --- //

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var today = new Date().getDay();
for (let i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML =
    days[(today + i) % days.length];
}

// --- event display order --- //

const input = document.getElementById("checkbox");

const button = document.getElementById("button");

const list = document.getElementById("fruits");

button.addEventListener("click", function() {
    let inputLen = input.value;
    if (inputLen.length > 0)
    {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        li.innerHTML = inputLen;
        deleteBtn.textContent = "❌";
        li.appendChild(deleteBtn);
        list.appendChild(li);

        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
        });
        input.value = "";
        input.focus();
    }
});









