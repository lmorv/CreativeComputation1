/**
Variables Exploration
Leonardo Morales

Experimenting with variables
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
  createCanvas(800, 500);
}

/**
Description of draw()
*/
function draw() {
  background(255, 0, 0);
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100);
  rect(mouseX, mouseY, 90, 90);
}
