/**
Crab Simulator
Leonardo Morales

This is a crab simulator! It simulates crabs to the highest degree of sofistication. Specifically, coconut crabs.
*/

"use strict";

// the grid terrain:
let grid = []; // grid also ends up containing game objects to define their possition and display them.
// number of rows and columns:
let cols = 40;
let rows = 22;
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

let buildings = []; // store walls in here (currently useless).

let empties = []; // to store our empty spaces(currently useless).

let allGameObjects = []; //(currently useless)


/**
preload() loads the game assets into variables for later use.
*/
function preload() {

}


/**
setup() creates game objects out of classes, and creates the all-important all-encompasing canvas
*/
function setup() {
  createCanvas(1500, 844, WEBGL);
  noStroke();
  // set up crab:
  let x = cols / 2 * unit;
  let y = rows / 2 * unit;
  crab = new Crab(x, y);

  // position game objects on the grid:
  // Go through the grid's rows
  for (let r = 0; r < rows; r++) {
    // For each row add an empty array to represent the row
    grid.push([]);
    // Go through all the columns in this row
    for (let c = 0; c < cols; c++) {
      let element = undefined;
      let p = random(); // generates a `probability value` to be checked against decimal number thresholds
      // Choose a random item and add it to this grid position
      if (p < 0.25) {
        element = new Building(c * unit, r * unit);
      } else if (p > 0.25 & p < 0.5) {
        element = new Car(c * unit, r * unit);
      } else if (p > 0.5 & p < 0.75) {
        element = new Person(c * unit, r * unit);
      } else {
        element = new Empty(c * unit, r * unit);
      }
      // Add it to the row
      grid[r].push(element);
    }
  }
}


/**
Description of draw()
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
    simulationDestoyed();
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
  rotateX(20);
  // call crab methods, and all relevant dispay, and behavioural/ conditional game object methods
  // center the grid in 3d space
  translate(-cols / 2 * unit, -rows / 2 * unit);

  // handle crab controls and move it:
  crab.handleInput();
  crab.move();
  // display crab:
  crab.display();

  // display the grid:
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
      let element = grid[r][c];
      // console.log(`element.x:${element.x}`, `element.y:${element.y}`);
      crab.checkOverlap(element);
      if (!element.isMush) {

        element.display();
      }
    }
  }

  // add q-bits over time:
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
    console.log(`qBits.lenght:${qBits.length}`);
  }

  // check q-bit and crab overlap:
  for (let i = 0; i < qBits.lenghth; i++) {
    let qBit = qBits[i];
    crab.checkOverlap(qBit);
    if (qBit.isMush) {
      qBits.splice(qBit, 1); // remove that q-bit from the array
    }
  }

  // display the q-bits present in the q-bit array:
  for (let i = 0; i < qBits.length; i++) {
    let qBit = qBits[i];
    qBit.display();
  }

}

function modelView() {
  // call display method for full screen model view
}

function instructions() {
  // display instructions and controlls screen
}

function endScreen() {
  // display `simulation successfull` message if crab overlaps the maze endPoint. Overlap is checked in simulation()
}

function simulationDestoyed() {
  // display `simulation destroyed` message if corrupted q-bits reach the breaking threshold. Condition checked during simulation()
}