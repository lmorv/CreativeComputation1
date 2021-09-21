/**
Functions
Leonardo Morales

These are explorations on the subect of function creation. I will not go into furthe detail at the moment.
*/

"use strict";

let circle = {
  x: 0,
  y: 0,
  size: 100,
  vx: 1,
  vy: 0
}

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
  background(0);

  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);

}