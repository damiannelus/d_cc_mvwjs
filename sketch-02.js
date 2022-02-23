const canvasSketch = require('canvas-sketch');
const ClockFace = require('./js/clockFace');


const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const getSecond = () => {
  const d = new Date();
  return d.getSeconds();
}

const getMinute = () => {
  const d = new Date();
  return d.getMinutes();
}

const getHour = () => {
  const d = new Date();
  return d.getHours();
}

const settings = {
  dimensions: [1080, 1080],
  animate : true
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // context.fillStyle = `black`;

    const numSeconds = 60;
    const numMinutes = 60;
    const numHours = 12;
    // seconds
    const namclockFaceSeconds = new ClockFace(
      width * 0.5, //cx
      height * 0.5, //cy
      height * 0.1, //tickHeight
      width * 0.001, //tickWidth
      width * 0.25, //radius
      getSecond(), //tick
      numSeconds //tickers
    );
    drawClock(
      namclockFaceSeconds,
      context)

    // minutes
    const namclockFaceMinutes = new ClockFace(
      width * 0.5, //cx
      height * 0.5, //cy
      height * 0.1, //tickHeight
      width * 0.001, //tickWidth
      width * 0.15, //radius
      getMinute(), //tick
      numMinutes //tickers
    );
    drawClock(
      namclockFaceMinutes,
      context)

    // // hours
    const namclockFaceHours = new ClockFace(
      width * 0.5, //cx
      height * 0.5, //cy
      height * 0.1, //tickHeight
      width * 0.0005, //tickWidth
      width * 0.05, //radius
      getHour()%numHours, //tick
      numHours //tickers
    );
    drawClock(
      namclockFaceHours,
      context)
  };
};

canvasSketch(sketch, settings);

function drawClock(clockFace, context) {
  let x, y;
  const slice = degToRad(360 / clockFace.tickers);
  const tickSin = Math.sin(slice*clockFace.tick);
  const tickCos = Math.cos(slice*clockFace.tick);
  for (let index = 0; index < clockFace.tickers; index++) {
    const angle = slice * index;
    const indexSin = Math.sin(slice*index);
    const indexCos = Math.cos(slice*index);
    const radialDistance = 2 - Math.sqrt(
      Math.abs(indexSin-tickSin)**2 + Math.abs(indexCos-tickCos)**2
    )

    x = clockFace.cx + clockFace.radius * Math.sin(angle);
    y = clockFace.cy - clockFace.radius * Math.cos(angle);
    context.save();
    if (index == clockFace.tick) {
      context.fillStyle = `red`;
    } else {
      context.fillStyle = `black`;
    }
    context.translate(x, y);
    context.rotate(angle);

    context.beginPath();
    let w = clockFace.tickWidth * radialDistance;
    context.rect(-w * 0.5, - clockFace.tickHeight * 0.5, w, clockFace.tickHeight)
    context.fill();

    context.restore();

    setTimeout(()=> {
      window.requestAnimationFrame(sketch);
    }, 1000)

  }
}
