class Template02 extends CrabTemplte {
  constructor(x, y) {
    super(x, y);
    this.image = undefined;
    this.fill = color(0, 60, 70);
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
    // let mouseX3D = mouseX - width / 2;
    if (mouseX > 500 && mouseX < 1000) {
      this.fill = this.higlight;

    } else {
      this.fill = color(0, 60, 70);

    }
  }
}