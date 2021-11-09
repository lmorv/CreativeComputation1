class School extends GameObject {
  constructor(model) {
    super(x, y);
    this.isConsumable: true;
    this.isDestructible: true;
    this.isMush: false;

    this.model: model;
  }

  diaplay() {
    super.dispay();

    // diaplay a school
  }
}