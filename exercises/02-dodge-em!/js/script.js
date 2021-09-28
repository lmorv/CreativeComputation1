/**
Dodgy bug!
Leonardo Morales

A game about avoiding a big ol' bug from ruining your beautiful bug program. The bug veers towards your program, which you move around by directing it with the target, and it gets faster every time it respawns.
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

let bug = {
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
  maxSpeed: 15,
  acceleration: 2,
  image: undefined,
};

let target = {
  x: 250,
  y: 250,
  size: 90,
  vx: 0,
  vy: 0,
  image: undefined,
};

let numStatic = 100;

let nopeLoop = false;
/**
preload images
*/
function preload() {
  bug.image = loadImage('assets/images/bug.png');
  player.image = loadImage('assets/images/sphere.png');
  target.image = loadImage('assets/images/target.png');
}
/**
setup global settings
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  bug.y = random(0, height);
  noStroke();
  imageMode(CENTER);
}
/**
Description of draw()
*/
function draw() {
  background(0, 0, 15);
  backgroundFX(); // background FX

  bugMovement(); // covid 19 movement
  bugOffscreen(); //check for bug offscreen status
  drawBug(); // draw the pesky bug

  checkFailState(); // check for covid and player overlap

  playerMovement(); // Player movement with acceletation
  drawPlayer(); // draw player

  // drawTarget();
  image(target.image, target.x, target.y, target.size + 20, target.size);
  // targetMovement();
  target.x = mouseX;
  target.y = mouseY;
}

function bugMovement() {
  // covid base movement:
  bug.x += bug.vx;
  bug.y += bug.vy;
  bug.vx = bug.speed;

  // handle conditional movement based on player's y position
  let currentSpeed = bug.speed;
  if (player.y > bug.y) {
    bug.vy = currentSpeed + 0.1;
  } else if (player.y < bug.y) {
    bug.vy = -currentSpeed - 0.1;
  }
}

function bugOffscreen() {

  if (bug.x > width) {
    bug.x = 0;
    bug.y = random(0, height);
    bug.speed += 1; // Increase bug's speed every time it respawns
    bug.speed = constrain(bug.speed, 0, 66); // constrain the speed to 30
  }
}

function checkFailState() {
  let d = dist(player.x, player.y, bug.x, bug.y)
  if (d < player.size / 2 + bug.size / 2) {
    cursor(); // display cursor before stopping the simulation
    noLoop(); // your program is now broken! refresh manualy.
  }
}

function drawBug() {
  push();
  noStroke();
  fill(bug.fill.r, bug.fill.g, bug.fill.b, 100);
  ellipse(bug.x, bug.y, bug.size);
  image(bug.image, bug.x, bug.y, bug.size + 50, bug.size + 30)
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
  fill(10, 90, 80, 200);

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