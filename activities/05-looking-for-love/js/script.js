/**
Looking for love
Leonardo Morales

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
}

let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
}

let state = title; // states: title, simulation, love, sadness

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
  setupCircles();
}

function setupCircles() {
  // Display circles some distance from each other
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

  // move circles in a random direction
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

/**
Description of draw()
*/
function draw() {
  background(0);

  simulation();
}

function simulation() {
  moveLovers();
  checkSadness(); // offscreen condition
  checkLove(); // overlap condition
  displayLovers();
}

function moveLovers() {
  // move circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkSadness() {
  if (loversOffscreen()) {
    // sad ending
  }
}

function checkLove() {
  // check for lovers overlapping
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y, );
  if (d < circle1.size / 2 + circle2.size / 2) {
    // love ending
  }
}

function displayLovers() {
  //draw circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function loversOffscreen() {
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    return true;
  } else {
    return false;
  }
}