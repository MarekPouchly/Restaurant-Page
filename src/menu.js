function createMenu() {
    const div = document.createElement('div');
    div.classList.add('menu');
    
    const card = document.createElement('div');
    card.classList.add('card');

    return div;
};

export default createMenu;