class GameObject {
  constructor() {
    this.x = x;
    this.y = y;

    // true/false properties to be overriten or entirely placed within specific subclasses:
    this.isConsumable: undefined;
    this.isDestructible: undefined;
    this.isWall: undefined;
    this.isMush: undefined;
    // size and specific properties handled by subclasses

  }



  dispay() {
    // handled by subclasses
  }
}