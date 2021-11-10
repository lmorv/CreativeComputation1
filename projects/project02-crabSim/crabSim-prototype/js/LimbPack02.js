// LimbPack01 - 03 classes contain pre defined configurations of limbs. The models of loaded into their corresponding positions

class LimbPack02 extends Crab {
  constructor() {
    // 3d model's pivot point should be at the origin(0,0,0) for possitioning to work as a subclass of Crab
    super(x, y);
    // define the right side limbs:
    this.rBackLeg = undefined;
    this.rMidLeg = undefined;
    this.rFrontLeg = undefined;
    this.rPincer = undefined;
    // define the left side limbs:
    this.lBackLeg = undefined;
    this.lMidLeg = undefined;
    this.lFrontLeg = undefined;
    this.lPincer = undefined;

    this.angle = 0; // use an agle for rotation?
  }


  loadLimbs() {
    // load specific limb models into their places
  }

  handleInput() {
    // handle user input while on the modelView screen. Should this be here?
  }

  dispay() {
    super.dispay(); // call Crab's diplay function just in case there's something there

    // display the chosen limb pack or a box config for now. maybe I need a bunch of if statements here?
  }
}