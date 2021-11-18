class Car extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.isConsumable = true;
    this.isDestructible = true;
    this.isMush = false;
    this.size = unit / 2;
    // this.model = model;
  }

  display() {
    super.display();

    // display a car
    push();
    fill(200, 0, 0);
    translate(this.x, this.y, this.size / 2);
    box(this.size);
    pop();
  }
}