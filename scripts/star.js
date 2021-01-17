const starContainers = document.getElementsByClassName('starContainer');
const stars = document.getElementsByClassName('star');

var myIntervalle;
let rotation = 0;


for (let starContainer of starContainers) {

  starContainer.addEventListener('mouseenter', () => {
    myIntervalle = setInterval(() => {
      rotation= rotation +4;
  
      for (let star of stars) {
        star.style.transform = `rotate(${rotation}deg)`;
      }
    }, 100)
  })
  
  starContainer.addEventListener('mouseleave', () => {
    clearInterval(myIntervalle);
  
    for (let star of stars) {
      star.style.transform = `rotateZ(${-rotation}deg)`;
    }
    rotation = 0;
  })
}