const canvasSketch = require('canvas-sketch');
const Agent = require('./js/agent');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ],
  animation: true
};

const sketch = ({ context, width, height }) => {
  const agents = [];

  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height)
    
    agents.push(new Agent(x,y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {

      agent.update();
      agent.draw(context);

      agent.bounce(width, height);
    });
  };
};

canvasSketch(sketch, settings);


