// Current Date
let date = document.getElementById("#currentDate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date.innerHTML = fulldate;

// Current Year 
const yearCurrent = new Date();
document.querySelector("#yearCurrent").textContent= yearCurrent.getFullYear();

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