/**************************
Variables Exploration
Leonardo Morales

Experimenting with variables
**************************/
"use strict";

// Variable declarations
let circleSize;

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
  circleSize = 100;
}

/**
Description of draw()
*/
function draw() {
  background(0);
  ellipse(250, 250, circleSize);


}
