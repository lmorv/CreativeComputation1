/**
Functions
Leonardo Morales

These are explorations on the subect of function creation. I will not go into furthe detail at the moment.
*/

"use strict";

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0
}

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

  let hotCelsius = toCelsius(100);
  console.log(`100 dagees Farenheit is ${hotCelsius} degrees Celsius.`);

  let coldCelsius = toCelsius(10);
  console.log(`10 dagees Farenheit is ${coldCelsius} degrees Celsius.`);

  reset();
}

/**
Description of draw()
*/
function draw() {
  background(0);

  move();
  checkOffscreen();
  display();

  parallels(70, 250, 27, 2, 400, 15); // parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) << takes these args

}

function move() {
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

function reset() {
  circle.x = 250;
  circle.y = 250;
  circle.vx = random(-10, 10);
  circle.vy = random(-10, 10);
}

function checkOffscreen() {
  if (circleIsOffscreen()) {
    reset();
  }
}

function circleIsOffscreen() {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function display() {
  ellipse(circle.x, circle.y, circle.size);
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

function toCelsius(farenheit) {
  let celsius = (farenheit - 32) * 5 / 9;
  return celsius;
}