import initializeHome from "./home";
import initializeMenu from "./menu";
import logo from './assets/images/map.jpeg';

function generateContact(){
    let contentDiv = document.getElementById('content');
    let header = document.createElement('h1');
    header.innerText = 'KRUSTY CONTACT';

    let buttonHold = document.createElement('div');
    buttonHold.classList = 'buttons';

    let button1 = document.createElement('button');
    button1.innerText = 'Home';
    button1.addEventListener('click', () => {
        document.body.innerHTML = `<div id="content"></div>`;
        initializeHome();
    });

    let button2 = document.createElement('button');
    button2.innerText = 'Menu';
    button2.addEventListener('click', () => {
        document.body.innerHTML = `<div id="content"></div>`;
        initializeMenu();
    });

    let button3 = document.createElement('button');
    button3.innerText = 'Contact';

    buttonHold.appendChild(button1);
    buttonHold.appendChild(button2);
    buttonHold.appendChild(button3);

    contentDiv.appendChild(header);
    contentDiv.appendChild(buttonHold);
}

function generateBody(){
    let main = document.createElement('main');
    let homeContent = document.createElement('div');
    let homeImage = document.createElement('img');
    homeContent.classList = 'mainContent';
    homeContent.innerHTML = `<p>Contact Info: <br><br> Number: 123 - 45 - 678 (Reservation) <br>
    Number: 123 - 27 - 674 (Customer Service) <br><br> Location: <p>`;

    homeImage.classList = 'image';
    homeImage.src = logo;
    


    homeContent.appendChild(homeImage);
    
    main.appendChild(homeContent);

    document.body.appendChild(main);
}

function initializeContact(){
    generateContact();
    generateBody();
}

export default initializeContact