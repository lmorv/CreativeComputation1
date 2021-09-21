/**
Functions
Leonardo Morales

These are explorations on the subect of function creation. I will not go into furthe detail at the moment.
*/

"use strict";



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

  parallels(100, 300, 6, 3, 70, 5);
  parallels(70, 250, 20, 2, 400, 15);
  parallels(200, 200, 70, 6, 50, 8);
  parallels(350, 400, 8, 0.5, 200, 10);
}

function parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
  for (let i = 0; i < numLines; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x, y, lineWidth, lineHeight);
    x = x + lineSpacing;
  }
}