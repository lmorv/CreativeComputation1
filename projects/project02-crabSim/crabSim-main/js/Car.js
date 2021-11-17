class Car extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable = true;
    this.isDestructible = true;
    this.isMush = false;
    this.size = unit;
    this.model = model;
  }

  display() {
    super.display();

    // display a car
    push();
    fill(200, 0, 0);
    translate(x, y, this.size / 2);
    box(this.size);
    pop();
  }
}