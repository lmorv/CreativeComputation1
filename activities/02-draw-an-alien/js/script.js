/**
Activity 02 - Alien Drawing
Leo Morales

A very good picture of an alien
*/

"use strict";

let teeth = {
  x: 280,
  y: 385,
  toothSize: 11,
}
/**
Description of preload
*/
function preload() {

}


/**
Draws the face of an Alien
*/
function setup() {
  createCanvas(640, 480);

  background(255, 100, 100);
  noStroke();

  //Draw the body
  push();
  fill(127);
  ellipse(320, 480, 300, 200);
  pop();

  //Draw the head
  push();
  fill(100);
  ellipse(320, 240, 250, 400);
  pop();

  //Draw the eyes
  push();
  fill(0);
  ellipse(250, 240, 80, 240);
  ellipse(390, 240, 80, 240);
  pop();

  //Draw the nostrils
  push();
  fill(0);
  ellipse(300, 350, 10, 10);
  ellipse(340, 350, 10, 10);
  pop();

  //Draw the mouth
  push();
  stroke(50, 50, 200);
  fill(0);
  strokeWeight(5);
  rectMode(CENTER);
  rect(320, 390, 120, 30, 20);
  pop();

  // Draw the teeth
  let x = teeth.x;
  let numTeeth = 10

  for (let i = 0; i < numTeeth; i++) {
    ellipse(x, teeth.y, teeth.toothSize);
    x = x + 9;
  }
}


/**
Description of draw()
*/
function draw() {

}