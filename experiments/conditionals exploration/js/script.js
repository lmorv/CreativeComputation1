/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let angle = 0;

/**
Description of preload
*/
function preload() {

}
/**
Description of setup
*/
function setup() {
  createCanvas(400, 400);
}

/**
Description of draw()
*/
function draw() {
  // Note we don't fill the background
  // No stroke because it's pretty
  noStroke();
  // Calculate the current sine of our angle and map it to a
  // shape between 100 and 255
  let shade = map(sin(angle), -1, 1, 100, 255);
  // Set the fill to the shade
  fill(shade);
  // Draw a circle at the mouse position
  ellipse(mouseX, mouseY, 20);
  // Increase the angle so the sine function returns a different
  // value next time
  angle += 0.2;

}
