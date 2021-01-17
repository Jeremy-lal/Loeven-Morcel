const next = document.getElementById('next');
const wheel = document.getElementById('wheel');
const slides = document.getElementsByClassName('slide');
const counterCarousel = document.getElementsByClassName('counterCarousel');

let currentSlide = 0;
let rotationWheel = 0;

counterCarousel[currentSlide].style.backgroundColor = 'black';


function changeSlide() {
    currentSlide++;
    rotationWheel += 45;
    const translateValue = -currentSlide * 100;

    wheel.style.transform = `rotateZ(${rotationWheel}deg)`;

    for (let i = 0; i < 5; i++) {
        slides[i].style.transition = 'all 1s linear';
        slides[i].style.transform = `translate(${translateValue > -100 ? -100 : translateValue}%)`;
    }

    for (let i = 0; i < 4; i++) {
        counterCarousel[i].style.backgroundColor = 'grey';
    }
    
    
    setTimeout(() => {

        if (currentSlide >= 4) {
            currentSlide = 0;
            for (let i = 0; i < 5; i++) {
                slides[i].style.transition = 'none';
                slides[i].style.transform = `translate(0)`;
            }
        }

        if (currentSlide < 4) {
            counterCarousel[currentSlide].style.backgroundColor = 'black';
        }
    }, 1000);
}

next.addEventListener('click', () => {
    changeSlide();
});

wheel.addEventListener('click', () => {
    changeSlide();
});