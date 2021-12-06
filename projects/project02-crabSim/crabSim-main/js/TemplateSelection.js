class TemplateSlection {
  constructor(x, y) {
    this.x;
    this.y;
  }

  display() {
    let rectHeight = 75;
    let rectX = width / 2;
    let rectY = height / 2;

    rectMode(CENTER);
    rect(rectX, rectY, width, rectHeight);
    if (mouseY < rectY - 0.5 * rectHeight || mouseY > rectY + 0.5 * rectHeight) {
      fill(255, 255, 255);
    } else {
      fill(200, 200, 130);
    };

  }
}