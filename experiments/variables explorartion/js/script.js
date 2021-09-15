/**************************
Variables Exploration
Leonardo Morales

Experimenting with variables
**************************/
"use strict";

// Variable declarations
let backgroundShade = 0;

// let circleX = 0;
// let circleY = 225;
// let circleSize = 200;
// let circleSpeed = 2;

let circle = {
  x: 250,
  y: 250,
  size: 150,
  speed: 2,
  fill: 0,
  count: 0
};

/********
Description of preload
*********/
function preload() {

}

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

  circle.count = circle.count + 0.25;
  circle.speed = random(-5, 5);
  circle.x = random(125, height-125);
  circle.y = random(125, height-125);
  circle.size = sin(circle.count) * 160;

  circle.fill = random(0, 255);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

  let randomNumber = random();

console.log(`randomNumber: ${randomNumber}`);
}
