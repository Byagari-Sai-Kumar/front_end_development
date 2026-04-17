const subscribeImage = require('./assets/subscribe_image.jpg');
const subscribeImageTwo = require('./assets/new-image.webp');

var imageElement = document.getElementById('image-container');
var imageElementTwo = document.getElementById('image-container-two');
const buttonElement = document.getElementById('subscribe-button');
var paraElement = document.getElementById('subscribe-para');

buttonElement.addEventListener('click', () => {
    imageElement.src = subscribeImage;
    imageElementTwo.src = subscribeImageTwo;
    paraElement.textContent = 'Thank you for subscribing!!'
})