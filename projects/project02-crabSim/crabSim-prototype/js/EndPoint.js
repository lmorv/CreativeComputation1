class EndPoint extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable: false;
    this.isDestructible: false;
    this.isMush: false;
    this.isWall: False;

    this.model: model;
  }

  diaplay() {
    super.dispay();

    // diaplay a wall
  }
}