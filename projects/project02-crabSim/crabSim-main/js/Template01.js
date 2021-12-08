class Template01 extends CrabTemplte {
  constructor(x, y, defaultImage, highlightImage) {
    super(x, y);
    this.image = defaultImage;
    this.defaultImage = defaultImage;
    this.highlightImage = highlightImage;
    this.fill = color(0, 50, 60);
    this.highlight = color(0, 90, 100);
  }

  display() {
    super.display();

    rectMode(CENTER);
    fill(this.fill);
    rect(this.x - 500, this.y, this.width, this.height);
    // Display the template image
    imageMode(CENTER);
    image(this.image, this.x, this.y, width, height);
  }

  checkOverlap() {
    if (mouseX < 500) {
      this.fill = this.highlight;
      this.image = this.highlightImage;
    } else {
      this.fill = color(0, 50, 60);
      this.image = this.defaultImage;
    }
  }
}