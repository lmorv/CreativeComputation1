class CrabTemplte {
  constructor(x, y, defaultImage, highlightImage) {
    this.x = x;
    this.y = y;
    this.image = defaultImage;
    this.defaultImage = defaultImage;
    this.highlightImage = highlightImage;
  }

  display() {
    // handled by sub-classes.
  }
}