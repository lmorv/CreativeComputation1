class Wall extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.size = unit; // use the size of a grid suare
    this.isConsumable = false;
    this.isDestructible = false;
    this.isMush = false;
    this.isWall = true;

    this.model = model;
  }

  display() {
    super.dispay();

    // diaplay a wall
    push();
    fill(0, 0, 200);
    translate(x, y, this.size / 2);
    box(this.size);
    pop();

  };

  checkCrabOverlap() {

  };
}