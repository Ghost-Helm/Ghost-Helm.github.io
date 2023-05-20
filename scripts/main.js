let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bocchi.gif') {
      myImage.setAttribute('src', 'images/yamata.gif');
    } else {
      myImage.setAttribute('src', 'images/bocchi.gif');
    }
}
