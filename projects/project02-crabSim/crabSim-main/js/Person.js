class Person extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.isConsumable = true;
    this.isDestructible = true;
    this.isMush = false;
    this.size = unit / 3;
    // this.model = model;
  }

  display() {
    super.display();

    // display a person
    push();
    fill(200, 10, 150);
    translate(this.x, this.y, this.size / 2);
    box(this.size);
    pop();
  }
}