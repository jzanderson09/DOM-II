const wholeBody = document.querySelector('body');
const navHeader = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('.nav-link');
const foot = document.querySelector('.footer');
const footText = document.querySelector('.footer p');

//mouseover
const imgs = document.querySelectorAll('img');
imgs.forEach(function(img) {
    img.addEventListener('mouseover', function() {
        img.style.opacity = 0.7;
    });
    img.addEventListener('mouseout', function() {
        img.style.opacity = 1;
    });
});

//keydown
wholeBody.addEventListener('keydown', function nightMode(event) {
    if (event.key === 'n') {
        navHeader.style.background = 'black';
        navHeader.style.color = 'white';
        navLinks.forEach(function(linkItem) {
            linkItem.style.color = 'white';
    });
        wholeBody.style.background = 'black';
        wholeBody.style.color = 'white';
        foot.style.background = 'black';
        footText.style.color = 'white';
    };
    if (event.key === 'r') {
        navHeader.style.background = 'white';
        navHeader.style.color = '#212529';
        navLinks.forEach(function(linkItem) {
            linkItem.style.color = '#212529';
        });
        wholeBody.style.background = 'white';
        wholeBody.style.color = '#212529';
        foot.style.background = '#FFEBCD';
        footText.style.color = '#212529';
    };
});

//dblclick
wholeBody.addEventListener('click', function(event) {
    console.log(event.target);
})