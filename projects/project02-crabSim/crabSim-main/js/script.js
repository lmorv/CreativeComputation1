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

let walls = []; // store walls in here.
// define max number of walls:
let numWalls = 10;


let empties = []; // to store our empty spaces.

let allGameObjects = []; //

let numEndPoints = 1; // there's only one endpoint for now but it might be cool to add multiple.

let qBits = [];
// define the number of  corrupted q-bits that break the simulation
let critQBits = 164;

/**
preload() loads the game assets into variables for later use.
*/
function preload() {

}


/**
setup() creates all game object out of classes, and creates the all-important all-encompasing canvas
*/
function setup() {
  createCanvas(1500, 844, WEBGL);
  noStroke();
  // set up crab:
  let x = cols / 2 * unit;
  let y = rows / 2 * unit;
  crab = new Crab(x, y);

  // set up q-bits

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
        element = new Wall(c * unit, r * unit);
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

  // diplay the grid:
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