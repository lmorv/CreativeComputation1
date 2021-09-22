/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
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
  circle.vx = circle.speed;
}

/**
Description of draw()
*/
function draw() {
  background(0);

  circle.x += +circle.vx;
  circle.y += +circle.vy;

  ellispse(circe.x, circle.y, circle.size);
}