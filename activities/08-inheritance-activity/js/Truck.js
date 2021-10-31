class Truck extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 100;
    this.heght = 20;
    this.speed = 2;
  }


  display() {
    super.display();
    push();
    rectMode(CENTER);
    fill(200);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}