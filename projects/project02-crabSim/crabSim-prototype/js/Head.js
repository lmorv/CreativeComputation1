class Head extends Crab {
  constructor() {
    // 3d model's pivot point should be at the origin(0,0,0) for possitioning to work as a subclass of Crab
    super(x, y);
    this.model: undefined;
    this.angle: 0; // use an agle for rotation?
  }

  handleInput() {
    // handle user input while on the modelView screen. Should this be here?
  }

  dispay() {
    super.dispay(); // call Crab's diplay function just in case there's something there

    // display the chosen head model model or a box for now. maybe I need a bunch of if statements here?
  }
}