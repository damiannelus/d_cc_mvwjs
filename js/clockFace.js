class ClockFace {
  constructor(cx, cy, tickHeight, tickWidth, radius, tick, tickers){
    this.cx = cx;
    this.cy = cy;
    this.tickHeight = tickHeight;
    this.tickWidth = tickWidth;
    this.radius = radius;
    this.tick = tick;
    this.tickers = tickers;
  }
}

module.exports = ClockFace;