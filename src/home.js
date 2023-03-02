function createHome() {
    const div = document.createElement('div');
    div.classList.add('home');

    const heading = document.createElement('h1');
    heading.textContent = "Pizza and authentic Italian pasta";

    div.appendChild(createParagraph("PERFECT AND TASTY"));
    div.appendChild(heading);
    div.appendChild(createParagraph("Since 2003"));

    return div;
};

function createParagraph(textContent) {
    const p = document.createElement('p');
    p.textContent = textContent;
    return p;
}

function drawHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());

    return main;
}

export default drawHome;