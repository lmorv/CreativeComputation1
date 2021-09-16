/**************************
Variables Exploration
Leonardo Morales

Experimenting with variables
**************************/
"use strict";

// Variable declarations
let backgroundShade = 0;

// flickering circle
let circle1 = {
  x: 250,
  y: 250,
  size: 150,
  speed: 2,
  fill: 0,
  count: 0
};

// moving circle
let circle2 = {
  x: 0,
  y: 250,
  size: 150,
  speed: 0.5,
  fill: 255
};

/********
Description of preload
*********/
function preload() {}

/************
Description of setup
************/
function setup() {
  createCanvas(500, 500);
}

/**********
Description of draw()
**********/
function draw() {
  background(backgroundShade);

  // flickering circle
  push();
  circle1.count = circle1.count + .0025;
  circle1.speed = random(-5, 5);
  circle1.x = random(125, height - 125);
  circle1.y = random(125, height - 125);
  circle1.size = sin(circle1.count) * 160;

  circle1.fill = random(0, 255);
  fill(circle1.fill);
  // Draw an ellipse using circle1
  ellipse(circle1.x, circle1.y, circle1.size);
  pop();

  // moving circle
  push();
  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x, 0, width) // prevent the circle from exiting the canvas

  circle2.size = map(mouseY, height, 0, 100, 500) // mapped circle size to mouse Y position

  circle2.fill = map(circle2.x, 125, width, 0, 255) // maped shade to circle's X possition

  stroke(255);
  fill(circle2.fill);
  ellipse(circle2.x, circle2.y, circle2.size);
  pop();

  // local variable declaration, just for debuging example
  let randomNumber = random();
  // print the value of a variabe like so:
  console.log(`randomNumber: ${randomNumber}`);
}
