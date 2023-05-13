const datefield = document.querySelector("time");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

datefield.textContent = fulldate;