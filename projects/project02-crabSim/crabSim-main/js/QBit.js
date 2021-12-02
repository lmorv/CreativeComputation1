class QBit {
  constructor(x, y, rotationSpeed) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.fill = 0;
    this.rotationSpeed = rotationSpeed;
    this.isMush = false;
  }

  // check corruption level in the main script

  display() {
    // display a rotating black box.
    push();
    translate(this.x, this.y);
    rotateY(frameCount * this.rotationSpeed);
    rotateX(frameCount * this.rotationSpeed);
    fill(this.fill);
    stroke(10);
    box(this.size);
    pop();
  }
}