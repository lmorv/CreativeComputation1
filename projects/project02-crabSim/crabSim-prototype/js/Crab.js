class Crab {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 5;
    // acceleration:
    this.ax = 0;
    this.ay = 0;
    // if grid-based acceleration will represent how fast the crab moves from tile to tile when an input remains pressed
    this.acceleration = 2;
    // properties to load 3d models into: not sure if these shpuld have their own class with a display function
    headModel = undefined;
    carapaceModel = undefined;
    abdomenModel = undefined;
    limbPackModel = undefined; // do I need a separate property for every limb?
  }
}

handleInput() {
  //movement controlls
}

move() {
  this.ax += this.acceleration;
  this.ay += this.acceleration;

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
}