async function getBusinessDirectory() {
    const response = await fetch("json/data.json");
    const data = await response.json();
    displayBusinessDirectory(data.business);
}

async function displayBusinessDirectory(business) {
    const cards = document.querySelector(".directoryCards");

    business.forEach ((business) => {
        let card= document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let logo = document.createElement('img');

        h2.innerHTML= `${business.name}`;
        p1.innerHTML = `${business.membership}`
        p2.innerHTML= `Address: ${business.address}`;
        p3.innerHTML = `Phone: ${business.phonenumber}`;
        p4.innerHTML = `Web: ${business.website}`;
    
        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", `${business.name} Logo`);
        logo.setAttribute("loading", "lazy");
        card.setAttribute("class", "dirMembers");

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4)
        card.appendChild(logo);
    
        cards.appendChild(card);
    })
}
getBusinessDirectory();

const tile = document.querySelector(".tile");
const list = document.querySelector(".list");