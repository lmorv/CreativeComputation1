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

  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    reset();
  }

  ellipse(circle.x, circle.y, circle.size);

  // parallels(100, 300, 6, 3, 70, 5);
  parallels(70, 250, 27, 2, 400, 15);
  // parallels(200, 200, 70, 6, 50, 8);
  // parallels(350, 400, 8, 0.5, 200, 10);
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