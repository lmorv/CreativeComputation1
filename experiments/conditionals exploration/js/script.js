/********************************
Conditionals
Leonardo Morales

Experimenting with conditionals, yaaaaaay!
*********************************/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 0,
}

let circle = {
  x: 250,
  y: 250,
  size: 100,
};

function preload() {

}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(bg.r, bg.g, bg.b);
  push();
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY)
  pop();

  push();
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  pop();
}


function mouseWheel() {
  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}