const input = document.getElementById("favchap");

const button = document.getElementById("button");

const list = document.getElementById("list");

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
