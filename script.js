var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById('body');
var random = document.getElementById("random");

setGradient();

function createRandomColor(){
    var random1 = (Math.random() * 0xfffff * 1000000).toString(16);
    var random2 = (Math.random() * 0xfffff * 1000000).toString(16);
    color1.value = '#' + random1.slice(0,6);
    color2.value = '#' + random2.slice(0,6);
    setGradient();
}

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background;
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", createRandomColor);