class Template02 extends CrabTemplte {
  constructor(x, y) {
    super(x, y);
    this.image = undefined;
    this.fill = color(0, 60, 70);
  }

  display() {
    super.display();

    rectMode(CENTER);
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);

    // this.image = image;
    // Display the template image
  }
}