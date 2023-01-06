import initializeHome from './home'
import initializeContact from './contact'
import patty from './assets/images/patties.jpeg'
import pretty from './assets/images/pretty.jpeg'
import nasty from './assets/images/nasty.jpeg'

function generateMenu(){
    let contentDiv = document.getElementById('content');
    let header = document.createElement('h1');
    header.innerText = 'KRUSTY MENU';

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

    let button3 = document.createElement('button');
    button3.innerText = 'Contact';
    button3.addEventListener('click', () => {
        document.body.innerHTML = `<div id="content"></div>`;
        initializeContact();
    });
    


    buttonHold.appendChild(button1);
    buttonHold.appendChild(button2);
    buttonHold.appendChild(button3);

    contentDiv.appendChild(header);
    contentDiv.appendChild(buttonHold);
}

function generateContent() {
    let main = document.createElement('main');
    main.id = 'main';

    let homeContent1 = document.createElement('div');
    let img1 = document.createElement('img');
    img1.src = patty;
    img1.classList = 'image'

    let homeContent2 = document.createElement('div');
    let img2 = document.createElement('img');
    img2.src = pretty
    img2.classList = 'image'

    let homeContent3 = document.createElement('div');
    let img3 = document.createElement('img');
    img3.src = nasty
    img3.classList = 'image'
    

    homeContent1.classList = 'content';
    homeContent1.id = 'content1'
    homeContent2.classList = 'content';
    homeContent2.id = 'content2'
    homeContent3.classList = 'content';
    homeContent3.id = 'content3'

    homeContent1.innerHTML = `<h3 class="desc">Krabby Patty &nbsp; &nbsp; &nbsp;
    20 Crustaceans</h3>`
    homeContent2.innerHTML = `<h3 class="desc2">Pretty Patties &nbsp; &nbsp; 
    &nbsp; &nbsp; &nbsp; 50 Crustaceans</h3>`
    homeContent3.innerHTML = `<h3 class="desc3">Secret Krabby Patty &nbsp; &nbsp; 
    &nbsp; &nbsp; &nbsp; 200 Crustaceans</h3>`



    homeContent1.appendChild(img1);
    homeContent2.appendChild(img2);
    homeContent3.appendChild(img3);
    main.appendChild(homeContent1);
    main.appendChild(homeContent2);
    main.appendChild(homeContent3);

    document.body.appendChild(main);
    document.getElementById('main').style.flexDirection = 'column'
    document.getElementById('main').style.border = '2px solid white'
    document.getElementById('main').style.marginLeft = '200px'
    document.getElementById('main').style.marginRight = '200px'
    document.getElementById('main').style.marginBottom = '20px'
    document.getElementById('main').style.backgroundImage = `repeating-linear-gradient(
        -0deg,
        gray,
        gray 20px,
        black 20px,
        black 40px
    )`;
}

function initializeMenu(){
    generateMenu();
    generateContent();
}

export default initializeMenu
