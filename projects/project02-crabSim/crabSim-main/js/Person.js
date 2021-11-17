class Person extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable = true;
    this.isDestructible = true;
    this.isMush = false;

    this.model = model;
  }

  display() {
    super.display();

    // display a person
    push();
    fill(200, 10, 150);
    translate(x, y, this.size / 2);
    box(this.size);
    pop();

  }
}