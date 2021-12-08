class Crab {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.turnAngle = -90;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    //Unused propeties to load 3d models for crab parts
    this.headModel = undefined;
    this.carapaceModel = undefined;
    this.abdomenModel = undefined;
    this.limbPack = undefined; // do I need a separate property for every limb
  }

  // handleInput() takes care of movement controlls:
  handleInput() {
    // left/right movement:
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.turnAngle -= 4;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.turnAngle += 4;
    } else {
      this.vx = 0;
    }
    // Up/down movement:
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.speed = 5;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.speed = -5;
    } else {
      this.speed = 0;
    }
  }

  move() {
    let vx = this.speed * cos(this.turnAngle);
    let vy = this.speed * sin(this.turnAngle);

    this.x += vx;
    this.y += vy;
  }

  checkOverlap(object) {
    // check ovelap condition against a game object
    let d = dist(this.x, this.y, object.x, object.y); // calculate distance to object

    if (d < this.size / 2 + object.size / 2) {
      object.isMush = true;
    }
  }

  display() {
    // display one or many boxes for now. OR crab part classes inheriting from this one could handle their own displaying
    push();
    fill(0, 200, 180);
    translate(this.x, this.y, this.size / 2);
    rotateZ(this.turnAngle);
    box(this.size + 30, this.size, this.size - 25); // a box representing our crab
    // the pincers:
    fill(120, 10, 40);
    push();
    translate(this.size, -25, 0);
    rotateZ(45);
    box(20);
    pop();

    push();
    translate(this.size, 25, 0);
    rotateZ(45);
    box(20);
    pop();

    pop();
  }
}