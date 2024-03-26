// Menu Scripts //
//////////////////
const menu = document.getElementById("nav-bar");

function toggleMenu() {
    menu.classList.toggle("show");
}

// Slideshow scripts //
///////////////////////
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const slide3 = document.getElementById("slide-3");
const btn1 = document.getElementById('first-slide');
const btn2 = document.getElementById('second-slide');
const btn3 = document.getElementById('third-slide');

const colourDefaultBtn = "#ffffff";
const colourBtn = "#009DDC";

let currSlide = 1;

slide2.style.display = "none";
slide3.style.display = "none";
btn1.style.backgroundColor = colourBtn;

// Reset slide and button to default
function resetSlide() {
    switch (currSlide) {
        case 1:
            slide1.style.display = "none";
            btn1.style.backgroundColor = colourDefaultBtn;
            break;
        case 2:
            slide2.style.display = "none";
            btn2.style.backgroundColor = colourDefaultBtn;
            break;
        default:
            slide3.style.display = "none";
            btn3.style.backgroundColor = colourDefaultBtn;
    }
}

// Switch to first slide
function firstSlide() {
    resetSlide();
    slide1.style.display = "block";
    btn1.style.backgroundColor = colourBtn;
    currSlide = 1;
}

// Switch to second slide
function secondSlide() {
    resetSlide();
    slide2.style.display = "block";
    btn2.style.backgroundColor = colourBtn;
    currSlide = 2;
}

// Switch to third slide
function thirdSlide() {
    resetSlide(currSlide);
    slide3.style.display = "block";
    btn3.style.backgroundColor = colourBtn;
    currSlide = 3;
}

// Interval function that switches slide every 3 seconds
function nextSlide() {
    switch (currSlide) {
        case 1:
            secondSlide();
            break;
        case 2:
            thirdSlide();
            break;
        default:
            firstSlide();
    }
}

// Change slide ever 5 seconds
setInterval(nextSlide, 5000);