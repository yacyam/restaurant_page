import initializeHome from './home'
function generateMenu(){
    let contentDiv = document.getElementById('content');
    let header = document.createElement('h1');
    header.innerText = 'Menu';

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


    buttonHold.appendChild(button1);
    buttonHold.appendChild(button2);
    buttonHold.appendChild(button3);

    contentDiv.appendChild(header);
    contentDiv.appendChild(buttonHold);
}

function initializeMenu(){
    generateMenu();
}

export default initializeMenu
