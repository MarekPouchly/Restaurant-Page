import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const content = document.getElementById("content");

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Warehouse Pizzeria";

    header.appendChild(title);
    header.appendChild(createNavigation());

    return header;
}

function createNavigation() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home"
    homeBtn.classList.add('navBtn');
    homeBtn.addEventListener('click', () => {
        const main = document.getElementById('main');
        main.textContent = "";
        main.appendChild(createHome());
    })

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('navBtn');
    menuBtn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        const main = document.getElementById('main');
        main.textContent = "";
        main.appendChild(createMenu());
    })

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.classList.add('navBtn');
    contactBtn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        const main = document.getElementById('main');
        main.textContent = "";
        main.appendChild(createContact());
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn); 

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');


    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const p = document.createElement('p');
    p.textContent = "Copyright © 2023 Pouchlý Marek";

    footer.appendChild(p)

    return footer;
}

content.appendChild(createHeader());
content.appendChild(createMain());
content.appendChild(createFooter());