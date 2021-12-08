class TemplateSelect extends State {
  constructor() {
    super();
  }

  update() {
    menuSelectionUI(); // UI behaviour:

    let titleY = -height / 4;
    let titleX = -width / 4;

    push();
    rectMode(CENTER);
    fill(0, 255, 255, 100);
    rect(titleX - 80, titleY - 140, 600, 45);
    pop();

    push();
    textAlign(CENTER, CENTER);
    fill(0, 40, 20);
    textFont(fontBlackMatrix, 40);
    text(`// Select Crab Construct`, titleX - 80, titleY - 145);
    pop();
  }
}