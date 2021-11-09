/**
Crab Simulator
Leonardo Morales

This is a crab simulator! It simulates crabs to the highest degree of sofistication. Specifically, coconut crabs.
*/

"use strict";

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
// define max number of each size of walls:
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
  createCanvas(1920, 1080);

}


/**
Description of draw()
*/
function draw() {
  background(0);

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
  // call crab move() method, and all relevant dispay, and behavioural/ conditional game object methods
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