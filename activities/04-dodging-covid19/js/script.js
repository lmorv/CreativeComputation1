/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let rect1 = {
  x: 0,
  y: 0,
  angle: 0,
  speed: 0.01,
}

let rect2 = {
  x: 0,
  y: 0,
  angle: 0,
  speed: 0.01,
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
  background(127);



  // back ground FX
  // draw rectangle 1
  push();
  noStroke();
  fill(255, 110, 50);
  rectMode(CENTER);
  translate(width / 2, height / 2)
  rotate(rect1.angle);
  scale(4);
  rect(rect1.x, rect1.y, 100, 100);
  pop();
  // draw rectangle 2
  push();
  noStroke();
  fill(255, 110, 50);
  rectMode(CENTER);
  translate(width / 2, height / 2)
  rotate(rect2.angle);
  scale(4);
  rect(rect2.x, rect2.y, 100, 100);
  pop();
  // move rects in oposite directions
  rect1.angle += rect1.speed;
  rect2.angle += -rect2.speed;

}