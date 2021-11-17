class Wall extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.size = unit; // use the size of a grid suare
    this.isConsumable = false;
    this.isDestructible = false;
    this.isMush = false;
    this.isWall = true;

    this.model = undefined;
  }

  display() {
    super.display();

    // display a wall
    push();
    stroke(150, 150, 150);
    fill(0, 0, 200);
    translate(this.x, this.y, this.size / 2);
    box(this.size);
    pop();

  };

  checkCrabOverlap() {

  };
}