/************************************
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
************************************/

"use strict";
let bg = {
  r: 0,
  g: 0,
  b: 0
};

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthRate: 1,
  fill: 255,
  alpha: 200,
  speed: 1
};

let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.75,
  fill: 255,
  alpha: 200,
  speed: -1
};

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
noStroke();
}

/**
Description of draw()
*/
function draw() {
  // background
  background(bg.r, bg.g, bg.b);
  bg.r = bg.r + 1;
  bg.r = map(circle1.size, 100, width, 0, 255);
  bg.b = map(circle2.size, 75, width*0.75, 255, 0); // cant use operations on object propertieties inside map? ex: map(circle2.size, 75, circle1.size*0.75, 255, 0)

  // left circle
  circle1.x += + circle1.speed;
  circle1.x = constrain(circle1.x, 0, width/2);
  circle1.size += + circle1.growthRate;
  circle1.size = constrain(circle1.size, 0, height)
  fill(circle1.fill, circle1.alpha);
  ellipse(circle1.x, circle1.y, circle1.size);

  // right circle
  circle2.x += + circle2.speed;
  circle2.x = constrain(circle2.x, width/2, 500);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(circle2.fill, circle2.alpha);
  ellipse(circle2.x, circle2.y, circle2.size);

}
