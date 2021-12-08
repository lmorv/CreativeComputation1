class Template03 extends CrabTemplte {
  constructor(x, y, defaultImage, highlightImage) {
    super(x, y, defaultImage, highlightImage);
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