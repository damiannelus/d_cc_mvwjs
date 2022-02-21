const canvasSketch = require('canvas-sketch');


const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const getSecond = () => {
  const d = new Date(); 
  return d.getSeconds();
}

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = `black`;

    const cx = width * 0.5;
    const cy = height * 0.5;

    
    const h = height * 0.1;
    let x,y;

    const num = 60;
    const radius = width * 0.2;
    const second = getSecond();
    console.log('second :>> ', second);
    
    for (let index = 0; index < num; index++) {
      const slice = degToRad(360 / num);
      const angle = slice * index;
      const radialDistance = 1 - Math.abs(index - second)/num;
      // console.log('index :>> ', index);
      // console.log('Math.abs(index - getSecond()) :>> ', Math.abs(index - getSecond()));
      // console.log(radialDistance);

      if (index == second) {
        context.fillStyle = `red`;
      } else {
        context.fillStyle = `black`;
      }

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);

      context.beginPath();
      const w = width * radialDistance * 0.001;
      context.rect(-w * 0.5, - h * 0.5, w,h)
      context.fill();

      context.restore();
      
    }

  };
};

canvasSketch(sketch, settings);
