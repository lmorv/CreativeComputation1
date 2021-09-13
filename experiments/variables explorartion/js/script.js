/**************************
Variables Exploration
Leonardo Morales

Experimenting with variables
**************************/
"use strict";

// Variable declarations
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 150;
let circleSpeed = 2;
let circleAcceleration = 0.5;

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(800, 500);

}

/**
Description of draw()
*/
function draw() {
  background(backgroundShade);
  circleX += circleSpeed;
  circleSpeed += circleAcceleration;
  ellipse(circleX, circleY, circleSize);

}
