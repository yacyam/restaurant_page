function generateHome() {
    let contentDiv = document.getElementById('content');
    let header = document.createElement('h1');
    header.innerText = 'Fancilicious';
    console.log(header);
    contentDiv.appendChild(header);
    console.log('generated');
}

export default generateHome;