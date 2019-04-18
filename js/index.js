const wholeBody = document.querySelector('body');
const navHeader = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('.nav-link');
const foot = document.querySelector('.footer');
const footText = document.querySelector('.footer p');

//mouseover (opacityChanger)
const imgs = document.querySelectorAll('img');
imgs.forEach(function(img) {
    img.addEventListener('mouseover', function() {
        img.style.opacity = 0.7;
    });
    img.addEventListener('mouseout', function() {
        img.style.opacity = 1;
    });
});

//keydown (colorChanger toggle)
wholeBody.addEventListener('keydown', function colorChanger(event) {
    //Night Mode
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
    //reset colors
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
    //Christmas Mode
    if (event.key === 'c') {
        navHeader.style.background = '#00FF00';
        navHeader.style.color = 'crimson';
        navLinks.forEach(function(linkItem) {
            linkItem.style.color = 'crimson';
        });
        wholeBody.style.background = '#00FF00';
        wholeBody.style.color = 'crimson';
        foot.style.background = '#00FF00';
        footText.style.color = 'crimson';
    }
});



//under construction prompt
//Uses preventDefault() to stop the href while letting
//the prompt still display.
navLinks[0].addEventListener('click', function(event) {
    event.preventDefault();
});
navLinks[1].addEventListener('click', function(event) {
    event.preventDefault();
    alert('Sorry, this page is under construction!');
});
navLinks[2].addEventListener('click', function(event) {
    event.preventDefault();
    alert('Sorry, this page is under construction!');
});
navLinks[3].addEventListener('click', function(event) {
    event.preventDefault();
    alert('Sorry, this page is under construction!');
});

