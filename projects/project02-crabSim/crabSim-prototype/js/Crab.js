class Crab {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.turnAngle = 0;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.maxSpeed = 5;
    // acceleration:
    this.ax = 0;
    this.ay = 0;
    // if grid-based acceleration will represent how fast the crab moves from tile to tile when an input remains pressed
    this.acceleration = 2;

    // properties to load 3d models into: not sure if these shpuld have their own class with a display function
    this.headModel = undefined;
    this.carapaceModel = undefined;
    this.abdomenModel = undefined;
    this.limbPack = undefined; // do I need a separate property for every limb?

    this.pincersEngaged = false; // toggle for pincer control
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
    } else {
      this.speed = 0;
    }
  }

  move() {
    let vx = this.speed * cos(this.turnAngle);
    let vy = this.speed * sin(this.turnAngle);

    this.x += vx;
    this.y += vy;

    //constrain to max speed
  }

  // overlap methods. Maybe I can create a global gameObjectOverlap function that handles all objects and state changes
  checkConsumableOverlap() {
    // check ovelap condition against evry consumable object
    // if onject is mush it should be considered a consumable item
  }

  checkEndPointOverlap() {
    // check for win condition
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