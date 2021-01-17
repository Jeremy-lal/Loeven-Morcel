alert('This website is a reproduction of https://www.loevenmorcel.com/. I change some things.');

document.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	const img1 = document.getElementById('img1');

  const valueZoom = (100 + scroll/150)/100;
  if (valueZoom <= 1.1) {
    	img1.style.transform = `scale(${valueZoom})`
  }
});




const shape = document.getElementById('shape');
const shapeDetector = document.getElementById('shapeDetector');

shapeDetector.addEventListener('mouseenter', () => {
    shape.style.height = "350px";
    shape.style.width = "40vw";
    shape.style.backgroundImage = "none";
    shape.style.backgroundColor = "black";
    shape.style.borderRadius = "600px 600px 0 0";
});

shapeDetector.addEventListener('mouseleave', () => {
    shape.style.height = "500px";
    shape.style.width = "30vw";
    shape.style.backgroundImage = "linear-gradient(180deg, #d3cdc3 10%, #ece9e3)";
});






