function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 +0123 456 789';

    const address = document.createElement('p');
    address.textContent = '🏠 Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, UK'

    const map = document.createElement('iframe');
    map.setAttribute('id', 'map');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1187.6492554059473!2d-2.2893642699140964!3d53.46312498941959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae0cd71ba635%3A0xb583729cbf08cf99!2sSir%20Matt%20Busby%20Way%2C%20Stretford%2C%20Manchester%20M16%200RA%2C%20Spojen%C3%A9%20kr%C3%A1%C4%BEovstvo!5e0!3m2!1ssk!2ssk!4v1677680074910!5m2!1ssk!2ssk')

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(map);

    return contact;
};

function drawContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());

    return main;
}

export default drawContact;