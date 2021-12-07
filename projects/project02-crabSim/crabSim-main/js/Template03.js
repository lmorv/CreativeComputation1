class Template03 extends CrabTemplte {
  constructor(x, y) {
    super(x, y);
    this.image = undefined;
    this.fill = color(0, 70, 80);
    this.higlight = color(0, 90, 100);
  }

  display() {
    super.display();

    rectMode(CENTER);
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);

    // this.image = image;
    // Display the template image
  }

  checkOverlap() {
    if (mouseX > 1000) {
      this.fill = this.higlight;

    } else {
      this.fill = color(0, 70, 80);
    }
  }
}