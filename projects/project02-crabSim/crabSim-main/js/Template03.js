class Template03 extends CrabTemplte {
  constructor(x, y, defaultImage, highlightImage) {
    super(x, y);
    this.image = defaultImage;
    this.defaultImage = defaultImage;
    this.highlightImage = highlightImage;
    this.fill = color(0, 70, 80);
    this.higlight = color(0, 90, 100);
  }

  display() {
    super.display();
    // Display the template image
    imageMode(CENTER);
    image(this.image, this.x, this.y, width, height);
  }

  checkOverlap() {
    if (mouseX > 1000) {
      this.image = this.highlightImage;
    } else {
      this.image = this.defaultImage;
    }
  }
}