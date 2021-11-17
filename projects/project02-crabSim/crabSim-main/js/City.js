class City extends GameObject {
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

    // diaplay a city

    push();
    fill(100, 100, 100);
    translate(x, y, this.size / 2);
    box(this.size);
    pop();
  }
}