/**
Dodge em!
Leonardo Morales

A  game about avoiding the virus covid 19 (represented by a red circle), with an interesting background animation. Covid gets faster every time it spawns!
*/

"use strict";

let rect1 = {
  x: 0,
  y: 0,
  angle: 0,
  speed: 0.01,
  size: 120,
};

let rect2 = {
  x: 0,
  y: 0,
  angle: 0,
  speed: 0.01,
  size: 120,
};

let covid19 = {
  x: 0,
  y: 255,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  image: undefined,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let player = {
  x: 250,
  y: 250,
  size: 100,
  fill: 0,
  vx: 0, // v stands for velocity
  vy: 0,
  ax: 0, // a stands for acceleration
  ay: 0,
  maxSpeed: 10,
  acceleration: 2,
  image: undefined,
};

let target = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  image: undefined,
};

let numStatic = 100;

/**
Description of preload
*/
function preload() {
  covid19.image = loadImage('assets/images/bug.png');
  player.image = loadImage('assets/images/sphere.png');
  target.image = loadImage('assets/images/target.png');
}
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCursor();
  covid19.y = random(0, height);
  noStroke();
}
/**
Description of draw()
*/
function draw() {
  background(0, 0, 15);
  backgroundFX(); // background FX

  covid19Movement(); // covid 19 movement
  covidOffscreen(); //check for covid offscreen status
  drawCovid(); // draw covid 19

  checkFailState(); // check for covid and player overlap

  playerMovement(); // Player movement with acceletation
  drawPlayer(); // draw player

  // drawTarget();
  // targetMovement();
}

function covid19Movement() {
  // covid base movement:
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;
  covid19.vx = covid19.speed;

  // handle conditional movement based on player's y position
  let currentSpeed = covid19.speed;
  if (player.y > covid19.y) {
    covid19.vy = currentSpeed + 0.1;
  } else if (player.y < covid19.y) {
    covid19.vy = -currentSpeed - 0.1;
  }
}

function covidOffscreen() {

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
    covid19.speed += 1; // Increase covid's speed every time it respawns
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

function playerMovement() {
  // handle player movement acording to mouse possition
  // using acceleration, later used to calculate speed.
  // Left and Right:
  if (mouseX > player.x) {
    player.ax = player.acceleration;
  } else if (mouseX < player.x) {
    player.ax = -player.acceleration;
  }
  // Up and Down:
  if (mouseY > player.y) {
    player.ay = player.acceleration;
  } else if (mouseY < player.y) {
    player.ay = -player.acceleration;
  }

  // update velocity based on acceleration
  //Left & right:
  player.vx += player.ax;
  player.vx = constrain(player.vx, -player.maxSpeed, player.maxSpeed); // contrain to a maximum speed
  // Up & Down:
  player.vy += player.ay;
  player.vy = constrain(player.vy, -player.maxSpeed, player.maxSpeed);

  // update player position based on velocity
  player.x += +player.vx;
  player.y += +player.vy;

  // draw the ellipse again

  ellipse(player.x, player.y, player.size);
}

function drawPlayer() {
  push();
  imageMode(CENTER);
  fill(player.fill);
  image(player.image, player.x, player.y, player.size + 20, player.size + 20)
  pop();
}

function backgroundFX() {
  // elongated rectandles static VFX:
  bgStaticFX();
  // rotating squares vfx:
  rectsVFX();
}

function rectsVFX() {
  // move rects in oposite directions
  rect1.angle += rect1.speed;
  rect2.angle += -rect2.speed;
  fill(25, 110, 100, 200);

  // draw rectangle 1
  push();
  rectMode(CENTER);
  translate(width / 2, height / 2, 0)
  rotate(rect1.angle);
  scale(4);
  rect(rect1.x, rect1.y, rect1.size);
  pop();

  // draw rectangle 2
  push();
  rectMode(CENTER);
  translate(width / 2, height / 2)
  rotate(rect2.angle);
  scale(4);
  rect(rect2.x, rect2.y, rect1.size);
  pop();
}

function bgStaticFX() {
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let xSize = random(10, 40);
    let ySize = random(10, 200);
    push();
    fill(50, 200, 150, 100);
    rect(x, y, xSize, ySize);
    pop();
  }
}