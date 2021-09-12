/**************************
Variables Exploration
Leonardo Morales

Experimenting with variables
**************************/
"use strict";

// Variable declarations
let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 150;

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

}

/**
Description of draw()
*/
function draw() {
  background(backgroundShade);
  ellipse(circleX, circleY, circleSize);


}
