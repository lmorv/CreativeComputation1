class EndPoint extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable = false;
    this.isDestructible = false;
    this.isMush = false;
    this.isWall = False;

    this.model = model;
  }

  display() {
    super.display();

    // display a wall
    push();
    fill(0, 200, 0);
    translate(x, y, this.size / 2);
    box(this.size);
    pop();

  }
}