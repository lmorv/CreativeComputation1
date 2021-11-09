/**
Crab Simulator
Leonardo Morales

This is a crab simulator! It simulates crabs to the highest degree of sofistication. Specifically, coconut crabs.
*/

"use strict";
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

let state = `simulation` // possible states are 'crabTemplateSlect', `crabEditor`, `confirmSelection`, `simulation`,`model view`, `instructions`, `endScreen`, `simulationDestoyed`


/**
Preload loads the assets into variables for later use
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {

}