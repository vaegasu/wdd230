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