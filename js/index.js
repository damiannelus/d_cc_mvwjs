let canvas = document.getElementById('animatedCanvas');
let context = canvas.getContext('2d');

// CONSTS
const BIGRECTSIZE = 40;
const SMALLRECTSIZE = 15;

context.fillStyle = 'blue';

function init() {
  window.requestAnimationFrame(drawCanvas(true))
}

function drawCanvas(isLive) {
  context.clearRect(0,0,600,600);
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      drawElement(context, 10 + i*50, 10 + j*50);
    }
  }
  if (isLive) {
    setTimeout(()=> {
      window.requestAnimationFrame(drawCanvas);
    }, 1000)
  }
}
''

function drawElement(context, posX, posY) {
  let smallRectSize = Math.floor(Math.random() * (SMALLRECTSIZE + 10 - SMALLRECTSIZE + 6) + SMALLRECTSIZE - 5)
  context.lineWidth = 2;
  context.beginPath();
  context.rect(
    posX + (BIGRECTSIZE - smallRectSize) / 2,
    posY + (BIGRECTSIZE - smallRectSize) / 2,
    smallRectSize,
    smallRectSize);
  context.rect(
    posX,
    posY,
    BIGRECTSIZE,
    BIGRECTSIZE);
  context.stroke();
}

init();