/**
Functions
Leonardo Morales

These are explorations on the subect of function creation. I will not go into furthe detail at the moment.
*/

"use strict";

let circle = {
  x: 0,
  y: 220,
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
  move();
  wrap();
  displayShape();
}

function mousePressed() {
  reset();
}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function displayShape() {
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.size);
}

function reset() {
  circle.x = 0;
  circle.vx = circle.vx + 1;
  circle.vy = circle.vy + 0.25;
  circle.size = circle.size + 5;
}