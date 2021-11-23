class School extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable = true;
    this.isDestructible = true;
    this.isMush = false;

    this.model = model;
  }

  display() {
    super.display();

    // display a school

    push();
    fill(10, 10, 180);
    translate(x, y, this.size / 2);
    box(this.size);
    pop();
  }
}