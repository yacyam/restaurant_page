import logo from './assets/images/krustykrab.jpeg';
import clean from './assets/images/clean.jpeg';
import initializeMenu from './menu';

function generateHome() {
    /*
    let image = document.createElement('img');
    image.classList = 'image'
    image.src = "bubbles.jpeg"
    console.log(image);
    */
    let contentDiv = document.getElementById('content');
    let header = document.createElement('h1');
    header.innerText = 'KRUSTY KRAB';

    let buttonHold = document.createElement('div');
    buttonHold.classList = 'buttons';

    let button1 = document.createElement('button');
    button1.innerText = 'Home';
 
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

function generateBody() {
    let main = document.createElement('main');
    let homeContent = document.createElement('div');
    let homeImage = document.createElement('img');
    homeContent.classList = 'mainContent';
    homeContent.innerHTML = `<p>Here at our finest establishment, 
    we will serve you the most delicious and wonderful krabby patties that you could ever want.  
    Mr. Krabs has been in this industry for 20 crustacean years, ready to deliver the secret formula
    only he has discovered. The tasty, delicious, menu offers a wide selection.<p>`;

    homeImage.classList = 'image';
    homeImage.src = logo;
    
    let homeContent2 = document.createElement('div');
    let homeImage2 = document.createElement('img');
    homeContent2.classList = 'mainContent';
    homeContent2.innerHTML = `<p>We have the cleanest work space, and our workers are
    treated with the upmost respect and dignity, with around the clock cleaning
    and fresh work spaces!<p>`;

    homeImage2.classList = 'image';
    homeImage2.src = clean;

    homeContent.appendChild(homeImage);
    homeContent2.appendChild(homeImage2);
    
    main.appendChild(homeContent);
    main.appendChild(homeContent2);

    document.body.appendChild(main);
}

function initializeHome() {
    generateHome();
    generateBody();
}


export default initializeHome