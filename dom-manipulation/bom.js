const input = document.querySelector("#favchap");
const button1 = document.querySelector("#addButton");
const list = document.querySelector(".list");

button1.addEventListener("click", () => {
  let favchap = input.value;
  const liAdd = document.createElement("li");
  const bomAdd = document.createElement("span");
  const dbAdd = document.createElement("button");

  list.appendChild(bomAdd);
  bomAdd.innerHTML = favchap;
  list.appendChild(dbAdd);
  dbAdd.innerHTML = "X";
  // dbAdd.setAttribute
  list.appendChild(liAdd);
  enter.value = " ";

  dbAdd.addEventListener("click", () => {
    list.removeChild(bomAdd);
    list.removeChild(dbAdd);
    list.removeChild(liAdd);
  });
});
input.focus();
