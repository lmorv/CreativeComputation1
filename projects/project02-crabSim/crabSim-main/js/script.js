/**
Crab Simulator
Leonardo Morales

This is a crab simulator! It simulates crabs to the highest degree of sofistication. Specifically, coconut crabs.
*/

"use strict";

// the grid terrain:
let grid = [];
// number of rows and columns:
let cols = 40;
let rows = 22;
//size of the grid's squares
let unit = 30;



let state = `simulation` // possible states are 'templateSlect', `crabEditor`, `confirmSelection`, `simulation`,`modelView`, `instructions`, `endScreen`, `simulationDestoyed`

let crab; // The player object

let crabTemplates = []; // store the 3 starting crab templates to be displayed in the start screen of the crab construction flow
let consumables = []; // store all the consumables in this array (persons, schools, cars, and cities)
// define the max number of each consumable item:
let numPeople = 6; // probably too many of all of them lol
let numSchools = 6;
let numCars = 6;
let numCities = 4;

let walls = []; // store walls of all sizes (large, medium, small) in here.
// dSefine max number of each size of walls:
let numWalls = 50;

let empty = ``; // an empty space.
let numEmpty = 400; // total number of empty spaces.

let empties = []; // to store our empty spaces.

let allGameObjects = []; //

// difrent sized walls unused
let numSmallWall = 5;
let numMedWall = 5;
let numLargeWall = 5;

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
  let x = 0;
  let y = 0;
  crab = new Crab(x, y);

  // set up walls:
  for (let i = 0; i < numWalls; i++) {
    // define random grid-space x and y position of the walls
    let x = random(0, cols);
    let y = random(0, rows);
    let wall = new Wall(x, y);
    walls.push(wall);
  }
  // set up empty spaces:
  for (let i = 0; i < numEmpty; i++) {
    empties.push(empty);
  }

  // push game objects into common array:
  allGameObjects.push(walls);
  allGameObjects.push(empties);

  // position game objects in the grid:
  // Go through the grid's rows
  for (let r = 0; r < rows; r++) {
    // For each row add an empty array to represent the row
    grid.push([]);
    // Go through all the columns in this row
    for (let c = 0; c < cols; c++) {
      // Choose a random item to add at this position
      //
      let gameObject = random(allGameObjects);
      // Add it to the row
      grid[r].push(gameObject);
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

  // handle crab controls and move it:
  crab.handleInput();
  crab.move();
  // display crab:
  crab.display();

  // center the grid in 3d space
  translate(-cols / 2 * unit, -rows / 2 * unit);
  // diplay the grid:
  // Go through all the rows and columns
  for (let r = 0; r < cols; r++) {
    for (let c = 0; c < rows; c++) {

      // Get the game object at this position
      // let gameObject = grid[r][c];

      // Draw a square so we can see the grid space
      push();
      stroke(255);
      noFill();
      rect(r * unit, c * unit, unit, unit);
      pop();

    }
  }
  // display the game objects:
  for (let i = 0; i < allGameObjects.length; i++) {
    let gameObject = allGameObjects[i];
    gameObject.display();
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