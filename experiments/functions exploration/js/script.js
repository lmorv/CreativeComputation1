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

let hello = {
  string: `Hello, world!`,
  x: 0,
  y: 0,
  vx: 5,
  vy: 5,
}

let bg = 0;
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
  background(bg);

  // display & move text (check typography in p5 guide)

  hello.x += +hello.vx;
  hello.y += +hello.vy;

  push();
  textAlign(CENTER, CENTER);
  textSize(70);
  textStyle(BOLD);

  fill(200, 20, 200);
  stroke(50, 200, 50);
  strokeWeight(4);

  text(hello.string, hello.x, hello.y);
  pop();


  // key text experiments
  push();
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(255);
  text(keyCode, width / 2, height / 2);
  pop();


  // move circle
  move();
  checkOffscreen();
  display();

  // press the "a" key to diplay extra parallels
  if (keyIsDown(65)) {
    parallels(18, 350, 27, 2, 400, 15);
    parallels(197, 25, 27, 2, 400, 15);
  }

  parallels(70, 250, 27, 2, 400, 15); // parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) << takes these args

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    bg += +10;
    bg = constrain(bg, 0, 255);
  } else if (keyCode === DOWN_ARROW) {
    bg = bg - 10;
    bg = constrain(bg, 0, 255);
  }
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