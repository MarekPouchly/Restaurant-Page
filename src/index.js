const content = document.getElementById("content");

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('restaurant-name');
    title.textContent = "Pizzeria";

    header.appendChild(title);
    header.appendChild(createNavigation());

    return header;
}

function createNavigation() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home"
    homeBtn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    })

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    })

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

content.appendChild(createHeader());