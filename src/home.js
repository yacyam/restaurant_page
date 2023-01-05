function generateHome() {
    /*
    let image = document.createElement('img');
    image.classList = 'image'
    image.src = "bubbles.jpeg"
    console.log(image);
    */
    let contentDiv = document.getElementById('content');
    let header = document.createElement('h1');
    header.innerText = 'Fancilicious';

    let buttonHold = document.createElement('div');
    buttonHold.classList = 'buttons';

    let button1 = document.createElement('button');
    button1.innerText = 'Home';
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

function generateBody() {
    console.log("hey");
}
export { generateHome, generateBody };