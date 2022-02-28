const Agent = require('./agent');

function calculatePythagorianDistance(agent1, agent2) {
  return Math.sqrt((agent1.pos.x-agent2.pos.x)**2 +(agent1.pos.y-agent2.pos.y)**2)
}

module.exports = {
  calculatePythagorianDistance,
}