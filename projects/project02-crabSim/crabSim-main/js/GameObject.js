class GameObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // true/false properties to be overriten within specific subclasses:
    this.isConsumable = false;
    this.isDestructible = false;
    this.isWall = false;
    this.isMush = false;
    // size and specific properties handled by subclasses
  }

  dispay() {
    // handled by subclasses
  }
}