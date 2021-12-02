/**
Crab Simulator
Leonardo Morales

This is a crab simulator! It simulates crabs to the highest degree of sofistication. Specifically, coconut crabs.
*/

"use strict";

// the grid terrain:
let grid = []; // grid also ends up containing game objects to define their possition and display them.
// number of rows and columns:
let cols = 10; // max value is 40
let rows = 8; // max value is 22
//size of the grid's squares
let unit = 30;

let state = `simulation` // possible states are 'templateSlect', `crabEditor`, `confirmSelection`, `simulation`,`modelView`, `instructions`, `endScreen`, `simulationDestoyed`

let crab; // The player object

let crabTemplates = []; // store the 3 starting crab templates to be displayed in the start screen of the crab construction flow

let qBits = []; // starts off empty
let critQBits = 164; // number of  corrupted q-bits that break the simulation

// How often to add a new qBit (in frames)
let addQBitInterval = 1 * 60; // one qBit per second
// timer will count down to 0  in draw to dtermine when to add a new q bit to the qbits array
let timer = addQBitInterval;

// Font variables:
let fontBlackMatrix;

/**
preload() loads the game assets into variables for later use.
*/
function preload() {

  fontBlackMatrix = loadFont('assets/fonts/LLBlackMatrix.ttf');

}


/**
setup() creates game objects out of classes,creates the all-encompasing canvas, and sets up global settings
*/
function setup() {
  // Global settings
  textFont(fontBlackMatrix, 40);
  createCanvas(1500, 844, WEBGL);
  noStroke();

  // set up crab:
  spawnCrab();
  // position game objects on the grid:
  spawnGameObjects();
}

function spawnCrab() {
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

/**
draw()
*/
function draw() {
  // orbitControl(); // orbit control for debug pourpuses
  background(0, 50, 60);
  angleMode(DEGREES);

  if (state === `templateSlect`) {
    templateSlect();
  } else if (state === `crabEditor`) {
    crabEditor();
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

function templateSlect() {
  //call the diplay method for the template select screen
}

function crabEditor() {
  // display the selected crab template, check mouse position,allow user to edit head, carapace, and abdomen.
}

function confirmSelection() {
  // display `confirm crab selection` message, check for mouse pess to transition to gameplay
}

function simulation() {
  rotateX(20); // Global world rotation to achive 3/4 top down view.
  translate(-cols / 2 * unit, -rows / 2 * unit); // center the grid in 3d space
  // Call crab methods, and all relevant dispay, and behavioural/ conditional game object methods

  // handle crab controls and move it:
  crab.handleInput();
  crab.move();

  // display crab:
  crab.display();

  // display the grid:
  gridDisplay();

  // add q-bits over time:
  spawnQBits();


  // check q-bit and crab overlap:
  for (let i = qBits.length - 1; i >= 0; i--) {
    let qBit = qBits[i];
    crab.checkOverlap(qBit);
    if (qBit.isMush) {
      qBits.splice(i, 1); // remove that q-bit from the array
    }
  }

  // display the q-bits present in the q-bit array:
  for (let i = 0; i < qBits.length; i++) {
    let qBit = qBits[i];
    if (!qBit.isMush) {
      qBit.display();
    }
  }


  // check if all game objects are mush:
  let notMushed = grid.filter(element => element.isMush === false); // Returns an array with all the game objects whose isMush propperty is false.
  console.log(`notMushed.length:${notMushed.length}`);

  if (notMushed.length === 0) {
    console.log(`Everything is mush!`);
    state = `endScreen`;
  }

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
  timer -= 1 // update timer by counting down one frame
  // check if the timer reaches 0
  if (timer <= 0) {
    // generate a random possition:
    let x = random(-100, width - 200);
    let y = random(-100, height - 200);
    let rotationSpeed = random(6, 12);
    // create a q-bit at that position
    let qBit = new QBit(x, y, rotationSpeed);
    // push the qBit into the qBits array
    qBits.push(qBit);
    //reset timer:
    timer = addQBitInterval;
    // console.log(`qBits.lenght:${qBits.length}`);
  }
}

function modelView() {
  // call display method for full screen model view
}

function instructions() {
  // display instructions and controlls screen
}

function endScreen() {
  push();
  textAlign(CENTER, CENTER);
  fill(0, 200, 100);
  textFont(fontBlackMatrix, 80);
  text(`Everything is mush!`, 0, 0);
  pop();
}

function simulationDestroyed() {
  // display `simulation destroyed` message if corrupted q-bits reach the breaking threshold. Condition checked during simulation()
}


// Flow controlls
function mousePressed() {
  if (state === `endScreen`) {
    state = `simulation`;
    // Prepare for gamestate reset:
    // remove q-bits and gameobjects from their arrays:
    for (let i = grid.length - 1; i >= 0; i--) {
      grid.splice(i, 1); // remove that game object from the array
    }
    for (let i = qBits.length - 1; i >= 0; i--) {
      qBits.splice(i, 1); // remove that game object from the array
    }
    spawnGameObjects(); // set up the game objects
  }

  // else if (state === `templateSlect`) {
  //   state = `crabEditor`;
  // } else if (state === 'crabEditor') {
  //   state = `confirmSelection`;
  // } else if (state === `confirmSelection`) {
  //   state = `simulation`;
  // } else if (state === `simulationDestoyed`) {
  //   state = `templateSlect`;
  // }
}