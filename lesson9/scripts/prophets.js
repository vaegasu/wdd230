const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}
        
async function displayProphets(prophets) {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let order = document.createElement("order");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let h5 = document.createElement("h5");
        let portrait = document.createElement("img");
        let h6 = document.createElement("h4");

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        order.innerHTML = `Prophet #${prophet.order}`;
        h3.innerHTML = `Date-of-Birth: ${prophet.birthdate}`;
        h4.innerHTML = `Place-of-Birth: ${prophet.birthplace}`;
        h5.innerHTML = `Prophet Years: ${prophet.length}`;
        h6.textContent = 'Death: ' + prophet.death;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}, Prophet ${prophet.order}`);
        portrait.setAttribute("loading", "lazy");

        card.appendChild(h2);
        card.appendChild(order);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(h5);
        card.appendChild(portrait);
        card.appendChild(h6);

        cards.appendChild(card);
    })
}
getProphetData();