/**
Dodge em!
Leonardo Morales

A  game about avoiding the virus covid 19 (represented by a red circle), with an interesting background animation. Covid gets faster every time it spawns!
*/

"use strict";

let rect1 = {
  x: 0,
  y: 0,
  z: 0,
  angle: 0,
  speed: 0.01,
};

let rect2 = {
  x: 0,
  y: 0,
  z: 0,
  angle: 0,
  speed: 0.01,
};

let covid19 = {
  x: 0,
  y: 255,
  z: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let player = {
  x: 250,
  y: 250,
  z: 0,
  size: 100,
  fill: 255
}

let numStatic = 1000;

/**
Description of preload
*/
function preload() {

}
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  covid19.y = random(0, height);
}
/**
Description of draw()
*/
function draw() {
  background(127);

  // background FX
  backgroundFX();

  // covid 19 movement
  covid19Movement();
  //check for covid offscreen status
  covidOffscreen();

  // check for covid and player overlap
  checkFailState();

  // draw covid 19
  drawCovid();

  // Player movement
  player.x = mouseX;
  player.y = mouseY;

  // draw player
  push();
  noStroke();
  fill(player.fill);
  ellipse(player.x, player.y, player.size)
}

function covid19Movement() {
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;
  covid19.vx = covid19.speed;
}

function covidOffscreen() {
  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
    covid19.speed += 1; // Increase covid's speed evry time it respawns
    covid19.speed = constrain(covid19.speed, 0, 66); // constrain the speed to 30
  }
}

function checkFailState() {
  let d = dist(player.x, player.y, covid19.x, covid19.y)
  if (d < player.size / 2 + covid19.size / 2) {
    noLoop();
  }
}

function drawCovid() {
  push();
  noStroke();
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  ellipse(covid19.x, covid19.y, covid19.size);
  pop();
}

function backgroundFX() {
  // move rects in oposite directions
  rect1.angle += rect1.speed;
  rect2.angle += -rect2.speed;

  // draw rectangle 1
  push();
  noStroke();
  fill(255, 110, 50);
  rectMode(CENTER);
  translate(width / 2, height / 2, 0)
  rotate(rect1.angle);
  scale(4);
  rect(rect1.x, rect1.y, 100, 100);
  pop();

  // draw rectangle 2
  push();
  noStroke();
  fill(255, 110, 50);
  rectMode(CENTER);
  translate(width / 2, height / 2)
  rotate(rect2.angle);
  scale(4);
  rect(rect2.x, rect2.y, 100, 100);
  pop();

  // static VFX
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    push();
    stroke(255);
    point(x, y);
    pop();
  }
}