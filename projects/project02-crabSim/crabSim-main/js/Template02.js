class Template02 extends CrabTemplte {
  constructor(x, y, defaultImage, highlightImage) {
    super(x, y);
    this.image = defaultImage;
    this.defaultImage = defaultImage;
    this.highlightImage = highlightImage;
    this.fill = color(0, 60, 70);
    this.higlight = color(0, 90, 100);
  }

  display() {
    super.display();

    rectMode(CENTER);
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);
    // Display the template image
    imageMode(CENTER);
    image(this.image, this.x, this.y, width, height);
  }

  checkOverlap() {
    if (mouseX > 500 && mouseX < 1000) {
      this.fill = this.higlight;
      this.image = this.highlightImage;
    } else {
      this.fill = color(0, 60, 70);
      this.image = this.defaultImage;
    }
  }
}