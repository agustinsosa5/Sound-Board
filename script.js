const aplauso = document.getElementById("aplausos");
const boo = document.getElementById("boo");
const asombro = document.getElementById("asombro");
const tada = document.getElementById("tada");
const victoria = document.getElementById("victoria");
const error = document.getElementById("error");

const audioAplauso = new Audio("sounds/applause.mp3");
const audioBoo = new Audio("sounds/boo.mp3");
const audioAsombro = new Audio("sounds/gasp.mp3");
const audioTada = new Audio("sounds/tada.mp3");
const audioVictoria = new Audio("sounds/victory.mp3");
const audioError = new Audio("sounds/wrong.mp3");

aplauso.addEventListener("click", () => {
  audioAplauso.play();
});

boo.addEventListener("click", () => {
  audioBoo.play();
});

asombro.addEventListener("click", () => {
  audioAsombro.play();
});

tada.addEventListener("click", () => {
  audioTada.play();
});

victoria.addEventListener("click", () => {
  audioVictoria.play();
});

error.addEventListener("click", () => {
  audioError.play();
});
