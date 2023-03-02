import drawHome from './home';
import drawMenu from './menu';
import drawContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Warehouse Pizza";

    header.appendChild(title);
    header.appendChild(createNavigation());

    return header;
}

function createNavigation() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home"
    homeBtn.classList.add('navBtn');
    homeBtn.addEventListener('click', (e) => {
        setActiveButton(e.target);
        drawHome();
    })

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('navBtn');
    menuBtn.addEventListener('click', (e) => {
        setActiveButton(e.target);
        drawMenu();
    })

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.classList.add('navBtn');
    contactBtn.addEventListener('click', (e) => {
        setActiveButton(e.target);
        drawContact();
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

function setActiveButton(target) {
    const buttons = document.getElementsByClassName('navBtn');
    Array.from(buttons).forEach( button => {
        button.classList.remove('active');
    });
    target.classList.add('active');
}

function createWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    drawHome();
}

export default createWebsite;