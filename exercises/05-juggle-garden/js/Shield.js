class Shield {
  constructor(w, h, x) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = height / 2;
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }


}