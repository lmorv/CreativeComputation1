class QBit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.fill = 0;
  }

  // spawnQBit() {
  //   // spawn QBits over time
  // }

  // check corruption level here or in the main script
  checkCrabOverlap() {
    // check for colission with crab to remove qbit from array.
  }

  dispay() {
    // display a rotating black box.
    push();
    fill(0);
    stroke(10);
    translate(this.x, this.y);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    box(this.size);
    pop();
  }
}