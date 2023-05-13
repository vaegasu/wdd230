// Current Date
let date = document.getElementById("currentDate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date.innerHTML = fulldate;
