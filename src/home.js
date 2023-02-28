function createHome() {
    const div = document.createElement('div');
    div.classList.add('home');

    div.appendChild(createParagraph("Real Italian Pizza"));
    div.appendChild(createParagraph("Come and enjoy the unique taste of dishes prepared by the hands of the chef and his team. Friendly service, genuine Italian atmosphere and delicious wines guarantee you a pleasant time spent in Sapori Italiani - with an Italian."))
    div.appendChild(createParagraph("Since 2003"));

    return div;
};

function createParagraph(textContent) {
    const p = document.createElement('p');
    p.textContent = textContent;
    return p;
}

export default createHome;