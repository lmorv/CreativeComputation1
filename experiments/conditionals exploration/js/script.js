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
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.35,
  maxSpeed: 6
};

function preload() {

}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(bg.r, bg.g, bg.b);

  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  } else {
    circle.ax = circle.acceleration;
  }

  if (mouseY < circle.y) {
    circle.ay = -circle.acceleration;
  } else {
    circle.ay = circle.acceleration;
  }

  circle.vx = circle.vx + circle.ax;
  circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
  circle.vy = circle.vy + circle.ay;
  circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

  //move the circle
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  push();
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  pop();


  // cross hairs
  push();
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY)
  pop();

}

// change bg colcor with the mouse wheel
function mouseWheel() {
  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);
}