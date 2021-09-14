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
  x: 0,
  y: 250,
  size: 150,
  speed: 2
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
  circle.x += circle.speed;
  ellipse(circle.x, circle.y, circle.size);

  // circleX += circleSpeed;
  // ellipse(circleX, circleY, circleSize);

  console.log(`circleY: ${circle.y}, circleX: ${circle.x}, circleSize: ${circle.size}, circleSpeed: ${circle.speed}`);
}
