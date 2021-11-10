class Carapace {
  constructor(x, y) {
    // 3d model's pivot point should be at the origin(0,0,0) for possitioning to work as a subclass of Crab
    this.x = x;
    this.y = y;
    this.model = undefined;
    this.angle = 0; // use an agle for rotation?
  }

  handleInput() {
    // handle user input while on the modelView screen. Should this be here?
  }

  dispay() {


    // display the chosen carapace model model or a box for now. maybe I need a bunch of if statements here?
  }
}