/**************************
Variables Exploration
Leonardo Morales

Experimenting with variables
**************************/
"use strict";

// Variable declarations
let backgroundShade = 0;

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
}
