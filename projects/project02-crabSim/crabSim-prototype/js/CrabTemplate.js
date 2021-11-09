class CrabTemplte {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = width / 3; // a third of the screen in the crab template view. size will need to vary in the crab editor screen so it might be better to add this property in the sub classes instead.

  }

  handleInput() {
    // handle UI interactions. Do I need a mouse pressed function in this class?
  }

  display() {
    // handled ny subclasses.
  }

}