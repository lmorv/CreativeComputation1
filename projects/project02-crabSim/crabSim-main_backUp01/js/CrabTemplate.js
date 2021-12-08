class CrabTemplte {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = width / 3; // a third of the screen in the crab template view. size will need to vary in the crab editor screen so it might be better to add this property in the sub classes instead.
    this.height = height;
  }

  handleInput() {
    // handle UI interactions. Do I need a mouse pressed function in this class?
  }

  display() {
    // handled by subclasses.
  }
}