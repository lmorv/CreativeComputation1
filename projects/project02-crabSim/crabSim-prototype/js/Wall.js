class Wall extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable = false;
    this.isDestructible = false;
    this.isMush = false;
    this.isWall = true;

    this.model = model;
  }

  diaplay() {
    super.dispay();

    // diaplay a wall
  }
}