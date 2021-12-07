class Template01 extends CrabTemplte {
  constructor(x, y) {
    super(x, y);
    this.image = undefined;
    this.fill = color(0, 50, 60);
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
    if (mouseX < 500) {
      this.fill = this.higlight;
    } else {
      this.fill = color(0, 50, 60);
    }
  }
}