/**
Crab Simulator
Leonardo Morales

This is a crab simulator! It simulates crabs to the highest degree of sofistication. Specifically, coconut crabs.
*/

"use strict";

// the grid terrain:
let grid = []; // grid also ends up containing game objects to define their possition and display them.
// number of rows and columns:

let cols = 10; // possible values are  10, 14,18,22,26,30,34,38,42,... (increases by a factor of 4)
let rows = 8; // possible values are 8, 10, 12,14,16,18,20,22,24 (increases by a factor of 2)

// starting dimesions of the grid:
let colsStart = 10;
let rowsStart = 8;
// Maximum dimesions of the grid:
let colsMax = 42;
let rowsMax = 24;
//size of the grid's squares
let unit = 30;

let state = `templateSelect` // possible states are 'templateSelect', `confirmSelection`, `simulation`, `endScreen`, `simulationDestoyed`

let crab; // The player object

// The crab templates for the crab selection screen:
let template01;
let template02;
let template03;

let crabTemplates = []; // store the 3 starting crab templates to be displayed in the start screen of the crab construction flow

let qBits = []; // starts off empty
let critQBits = 25; // number of  corrupted q-bits that break the simulation

// How often to add a new qBit (in frames)
let addQBitInterval = 1 * 60; // one qBit per second
// timer will count down to 0  in draw to dtermine when to add a new q bit to the qbits array
let timer = addQBitInterval;

// Font variable declaration:
let fontBlackMatrix;
// Image variable declaration
let template01Img;
let template01ImgHighlight;
let template02Img;
let template02ImgHighlight;
let template03Img;
let template03ImgHighlight;

/**
preload() loads the game assets into variables for later use.
*/
function preload() {
  // fonts:
  fontBlackMatrix = loadFont('assets/fonts/LLBlackMatrix.ttf');
  // Images:
  template01Img = loadImage(`assets/images/crabTemplate01.png`);
  template01ImgHighlight = loadImage(`assets/images/crabTemplate01-highlight.png`);
  template02Img = loadImage(`assets/images/crabTemplate02.png`);
  template02ImgHighlight = loadImage(`assets/images/crabTemplate02-highlight.png`);
  template03Img = loadImage(`assets/images/crabTemplate03.png`);
  template03ImgHighlight = loadImage(`assets/images/crabTemplate03-highlight.png`);

}

/**
setup() creates game objects out of classes,creates the all-encompasing canvas, and sets up global settings
*/
function setup() {
  // Global settings:
  textFont(fontBlackMatrix, 40);
  createCanvas(1500, 800, WEBGL);
  noStroke();
  // set up crab:
  createCrab();
  // position game objects on the grid:
  spawnGameObjects();

  // create crab templates:
  createTemplate01();
  createTemplate02();
  createTemplate03();
}

function createCrab() {
  let x = cols / 2 * unit;
  let y = rows / 2 * unit;
  crab = new Crab(x, y);
}

function spawnGameObjects() {
  // Go through the grid's rows
  for (let r = 0; r < rows; r++) {
    // Go through all the columns in this row
    for (let c = 0; c < cols; c++) {
      let element = undefined;
      let p = random(); // generates a `probability value` to be checked against decimal number thresholds
      // Choose a random item and add it to this grid position:
      if (p < 0.25) {
        element = new Building(c * unit, r * unit);

      } else if (p > 0.25 & p < 0.5) {
        element = new Car(c * unit, r * unit);

      } else if (p > 0.5 & p < 0.75) {
        element = new Person(c * unit, r * unit);

      } else {
        element = new Empty(c * unit, r * unit);
      }
      // Add the newly created element to the to the grid array
      grid.push(element);
    }
  }
}

function createTemplate01() {
  let x = 0;
  let y = 0;
  template01 = new Template01(x, y, template01Img, template01ImgHighlight);
}

function createTemplate02() {
  let x = 0;
  let y = 0;
  template02 = new Template02(x, y, template02Img, template02ImgHighlight);
}

function createTemplate03() {
  let x = 0;
  let y = 0;
  template03 = new Template03(x, y, template03Img, template03ImgHighlight);
}
/**
draw()
*/
function draw() {
  // orbitControl(); // orbit control for debug pourpuses
  background(0, 50, 60);
  angleMode(DEGREES);

  if (state === `templateSelect`) {
    templateSelect();
  } else if (state === `confirmSelection`) {
    confirmSelection();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `modelView`) {
    modelView();
  } else if (state === `instructions`) {
    instructions();
  } else if (state === `endScreen`) {
    endScreen();
  } else if (`simulationDestoyed`) {
    simulationDestroyed();
  }
}

function templateSelect() {
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

function menuSelectionUI() {
  // Display the crab templates
  template02.display();
  template03.display();
  template01.display();
  // check overlap for UI behavior
  template01.checkOverlap();
  template02.checkOverlap();
  template03.checkOverlap();
}

function confirmSelection() {
  // display `confirm crab selection` message, check for mouse pess to transition to gameplay
  let titleY = -height / 4;
  let titleX = -width / 4;
  // UI behaviour:
  confirmationUI();
  // Display confirmation text
  push();
  textAlign(CENTER, CENTER);
  fill(0, 200, 100);
  textFont(fontBlackMatrix, 80);
  text(`Confirm Crab Construct selection`, 0, titleY - 100);
  textSize(60);
  text(`Continue`, 0, -10);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textFont(fontBlackMatrix, 40);
  fill(245, 99, 66);
  text(`WARNING: Quantum corruption detected.`, 0, titleY + 20);
  text(`Consume corrupted q-bits to avoid simulation failure.`, 0, titleY + 65)
  pop();

  push();
  textAlign(CENTER);
  textFont(fontBlackMatrix, 40);
  fill(173, 217, 204);
  text(`Simulation controls:`, titleX - 150, -titleY - 70);
  textAlign(LEFT);
  text(`Use [UP] & [DOWN] arrow keys or [W] & [S] to move forward and back.`, titleX - 200, -titleY);
  text(`Use [LEFT] & [RIGHT] arrow keys or [A] & [D] to steer.`, titleX - 200, -titleY + 80);
  text(`Turn civilization into mush.`, titleX - 200, -titleY + 160);
  pop();
}

function confirmationUI() {
  let rectHeight = 75;
  let rectX = 0;
  let rectY = 0;
  // Tranform mouse coordinates to 3D space:
  let mouseY3D = mouseY - height / 2;
  let mouseX3D = mouseX - width / 2;
  // display UI rectangle
  rectMode(CENTER);
  rect(rectX, rectY, width, rectHeight);
  // UI behavior
  if (mouseY3D < rectY - rectHeight || mouseY3D > rectY + rectHeight) {
    fill(0, 35, 45);
  } else {
    fill(150, 200, 130);
  };
  // console.log(`mouseY:${mouseY}`);
}

function simulation() {
  rotateX(20); // Global world rotation to achive 3/4 top down view.
  translate(-cols / 2 * unit, -rows / 2 * unit); // center the grid in 3d space
  // Call crab methods, and all relevant dispay, and behavioural/ conditional game object methods
  // handle crab controls and move it:
  crab.handleInput();
  crab.move();
  // display the crab:
  crab.display();
  // display the grid:
  gridDisplay();
  // add q-bits over time:
  spawnQBits();
  // check q-bit and crab overlap:
  destroyQBit();
  // display the q-bits present in the q-bit array:
  displayQBits();
  // check if all game objects are mush:
  checkCityDestroyed();
  // check if corrupted q-bit levels are above the allowed threshold
  checkCorruption();

}

function gridDisplay() {
  // Go through all the rows and columns
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Draw a square so we can see the grid space
      push();
      rectMode(CENTER, CENTER);
      stroke(255);
      noFill();
      rect(c * unit, r * unit, unit, unit);
      pop();
      // display the game objects if they are not destroyed
      let i = c + r * cols; // convert from grid coordinates to array index position
      let element = grid[i];

      crab.checkOverlap(element);
      if (!element.isMush) {
        element.display();
      }
    }
  }
}

function spawnQBits() {
  let confineWidth = (unit * cols);
  let confineHeight = (unit * rows);

  timer -= 1 // update timer by counting down one frame
  // check if the timer reaches 0
  if (timer <= 0) {
    // generate a random possition:
    let x = random(-confineWidth / 8, confineWidth + confineWidth / 8);
    let y = random(-confineHeight / 8, confineHeight + confineHeight / 8);
    let rotationSpeed = random(6, 12);
    // create a q-bit at that position
    let qBit = new QBit(x, y, rotationSpeed);
    // push the qBit into the qBits array
    qBits.push(qBit);
    //reset timer:
    timer = addQBitInterval;
    console.log(`qBits.lenght:${qBits.length}`);
  }
}

function destroyQBit() {
  for (let i = qBits.length - 1; i >= 0; i--) {
    let qBit = qBits[i];
    crab.checkOverlap(qBit);
    if (qBit.isMush) {
      qBits.splice(i, 1); // remove that q-bit from the array
    }
  }
}

function displayQBits() {
  for (let i = 0; i < qBits.length; i++) {
    let qBit = qBits[i];
    if (!qBit.isMush) {
      qBit.display();
    }
  }
}

function checkCityDestroyed() {
  let notMushed = grid.filter(element => element.isMush === false); // Returns an array with all the game objects whose isMush propperty is false.
  if (notMushed.length === 0) {
    state = `endScreen`;
  }
}

function checkCorruption() {
  if (qBits.length >= critQBits) {
    state = `simulationDestoyed`
  }
}

function endScreen() {
  // Menu Element possitioning variables
  let titleY = -height / 4;
  push();
  textAlign(CENTER, CENTER);
  fill(0, 200, 100);
  textFont(fontBlackMatrix, 80);
  text(`Everything is mush!`, 0, titleY);
  textSize(35);
  text(`City obliterated.`, 0, titleY - 100)
  textSize(40);
  text(`Press [ENTER] to continue testing current crab.`, 0, titleY + 150);
  text(`Press [ESC] to select a different crab.`, 0, titleY + 220);
  pop();

}

function simulationDestroyed() {
  // display `simulation destroyed` message if corrupted q-bits reach the breaking threshold. Condition checked during simulation()
  // UI rectangle display:
  confirmationUI();
  let titleY = -height / 4; // Menu Element possitioning variable
  //Display simulation destroyed text
  push();
  textAlign(CENTER, CENTER);
  fill(0, 200, 100);
  textFont(fontBlackMatrix, 80);
  text(`Simulation destroyed!`, 0, titleY);
  textSize(40);
  text(`corrupted q-bit presece has reached critical levels`, 0, titleY + 100);
  textSize(50);
  text(`Create another crab`, 0, -10);
  pop();
}

// Flow controlls
function mousePressed() {
  if (state === `templateSelect`) {
    state = `confirmSelection`;
  } else if (state === `confirmSelection`) {
    state = `simulation`;
  } else if (state === `simulationDestoyed`) {
    // Prepare for gamestate reset:
    resetGridDimensions();
    // remove q-bits and gameobjects from their arrays and reset the simulation:
    spliceGridElements();
    spliceQBits();
    spawnGameObjects();
    createCrab();
    state = `templateSelect`;
  }
}

function keyPressed() {

  if (keyCode === ESCAPE && state === `confirmSelection`) {
    state = `templateSelect`;
  } else if (keyCode === ENTER && state === `endScreen`) {
    // Increase Grid dimetions:
    cols += 4;
    rows += 2;
    // remove q-bits and gameobjects from their arrays:
    spliceGridElements();
    spliceQBits();
    spawnGameObjects(); // set up the game objects
    createCrab();
    state = `simulation`;
  } else if (keyCode === ESCAPE && state === `endScreen`) {
    // Prepare for gamestate reset:
    resetGridDimensions();
    // remove q-bits and gameobjects from their arrays:
    spliceGridElements();
    spliceQBits();
    spawnGameObjects(); // set up the game objects
    createCrab();
    state = 'templateSelect'
  }
}

function spliceGridElements() {
  for (let i = grid.length - 1; i >= 0; i--) {
    grid.splice(i, 1); // remove that game object from the array
  }
}

function spliceQBits() {
  for (let i = qBits.length - 1; i >= 0; i--) {
    qBits.splice(i, 1); // remove that game object from the array
  }
}

function resetGridDimensions() {
  cols = colsStart;
  rows = rowsStart;
}