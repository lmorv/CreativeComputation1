/**
Looking for love
Leonardo Morales

A simulation of how love (or the lack of it) works in real life.
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

let state = `title`; // states: title, simulation, love, sadness

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
  circle1.y = height / 2;
  circle2.y = height / 2;

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

  if (state === 'title') {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `love`) {
    love();
  } else if (state === `sadness`) {
    sadness();
  }
}


function title() {
  push();
  textSize(65);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width / 2, height / 2);
  pop();
}

function simulation() {
  moveLovers();
  checkSadness(); // offscreen condition
  checkLove(); // overlap condition
  displayLovers();
}

function love() {
  push();
  textSize(65);
  fill(250, 100, 120);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(65);
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`SADNESS :'(`, width / 2, height / 2);
  pop();
}

function moveLovers() {
  // move circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkSadness() {
  if (loverOffscreen(circle1) || loverOffscreen(circle2)) {
    // sad ending
    state = `sadness`;
  }
}

function checkLove() {
  // check for lovers overlapping
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    // love ending
    state = `love`;
  }
}

function displayLovers() {
  //draw circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function loverOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    setupCircles();
  } else if (state === `sadness`) {
    state = `title`;
  } else if (state === `love`) {
    state = `title`;
  }
}