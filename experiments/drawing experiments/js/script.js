/**
Drawing experiments
Leo Morales

experimention with shapes and colors
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
function setup(){

  createCanvas(500, 500);

  background(127, 255, 300);

  point(250, 250);

  rectMode(CENTER);
  fill(220, 0, 200, 100)  //set the color of the rectangles
  noStroke()
  rect(250, 250, 250, 250);
  rect(250, 250, 220, 220);
  rect(250, 250, 100, 100);

  line(0, 0, 500, 500);
  line(500, 0, 0, 500);

  fill(255, 127, 80, 100)  //set the color of the elipses
  stroke(255, 255, 0) // fill & stroke instructions override the previous fill & stroke instructions

  ellipseMode(CORNER);
  ellipse(250, 250, 100, 100);
  ellipse(250, 250, 80, 80);
  ellipse(250, 250, 60, 60);
  ellipse(250, 250, 60, 60);
  ellipse(250, 250, 40, 40);
  ellipse(250, 250, 40, 40);
}


/**
Description of draw()
*/
function draw() {

}
