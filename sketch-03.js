const canvasSketch = require('canvas-sketch');
const Agent = require('./js/agent');
const random = require('canvas-sketch-util/random')
const utils = require('./js/utils');

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

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for (let j = i+1; j < agents.length; j++) {
        const other = agents[j];

        context.beginPath();
        context.lineWidth = 15/utils.calculatePythagorianDistance(agent, other);
        // context.lineWidth = math.maprange(lineWidth(dist, 0, 200, 12, 1))
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }
      
    }

    agents.forEach(agent => {

      agent.update();
      agent.draw(context, width, height);

      agent.bounce(width, height);
    });
  };
};

canvasSketch(sketch, settings);


