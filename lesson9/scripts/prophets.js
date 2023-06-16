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
        let h3 = document.createElement("h3");
        let portrait = document.createElement("img");
        let h4 = document.createElement("h4");

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        h3.innerHTML = `DOB: ${prophet.birthdate}, Place of Birth: ${prophet.birthplace}`;
        h4.textContent = 'Died: ' + prophet.death;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}, Prophet ${prophet.order}`);
        portrait.setAttribute("loading", "lazy");

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(portrait);
        card.appendChild(h4);

        cards.appendChild(card);
    })
}
getProphetData();