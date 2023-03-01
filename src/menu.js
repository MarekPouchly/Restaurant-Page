function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createCard("Corn", "Tomato sauce, Mozzarella, Ham, Corn")
    );

    menu.appendChild(
        createCard("Ham", "Tomato sauce, Mozzarella, Ham")
    );

    menu.appendChild(
        createCard("Hawai", "Tomato sauce, Mozzarella, Ham, Pineapple")
    );

    menu.appendChild(
        createCard("Mushroom", "Tomato sauce, Mozzarella, Ham, Mushroom")
    );

    menu.appendChild(
        createCard("Pepperoni", "Tomato sauce, Mozzarella, Salami, Pepper, Onion, Pepperoni")
    );

    menu.appendChild(
        createCard("Quattro-Formaggi", "Tomato sauce, Mozzarella, Salami, Pepper, Onion, Pepperoni")
    );

    return menu;
};

function createCard(pizza, desc) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('pizza-img');
    img.src = `./images/pizzas/${pizza.toLowerCase()}.jpg`;

    const title = document.createElement('h2');
    title.classList.add('pizza-title');
    title.textContent = createTitle(pizza);

    const description = document.createElement('p');
    description.classList.add('pizza-description');
    description.textContent = desc;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

function createTitle(title) {
    if ( ! title.includes('-') ) {
        return title;
    } else {
        return title.replace(/-/g, ' ');
    }
}

function drawMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());

    return main;
}

export default drawMenu;