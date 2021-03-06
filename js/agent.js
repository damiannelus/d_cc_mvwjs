const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math')
const Vector = require('./vector');
const utils = require('./utils');
class Agent {
  constructor(x,y) {
    this.pos = new Vector(x,y);
    this.vel = new Vector(random.range(-1,1), random.range(-1,1));
    this.radius = random.range(4,12);
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context, width, height) {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 3;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.strokeStyle = 
      utils.rgb2hex(200, 
        (this.pos.x/width)*255, 
        (this.pos.y/height)*255);
    context.fill();
    context.stroke();

    context.restore();
  }

  drawNoiseColors(context, index, frame) {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 3;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    const n = random.noise2D(index, index + frame * 10, 0.01);
    const r = math.mapRange(random.noise2D(0, index + frame * 10, 0.001), -1, 1, 0, 255);
    const g = math.mapRange(random.noise2D(125, index + frame * 10, 0.001), -1, 1, 0, 255);
    const b = math.mapRange(random.noise2D(255, index + frame * 10, 0.001), -1, 1, 0, 255);
    context.strokeStyle = 
      utils.rgb2hex(r,g,b);
    context.fill();
    context.stroke();

    context.restore();
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }
}

module.exports = Agent;