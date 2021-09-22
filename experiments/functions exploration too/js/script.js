/**
More fun with functions
Leonardo Morales

This is a program about life. It features game states, a player controlled circle and an npc circle. Press any key to start.
*/

"use strict";

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let circle2 = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let circle3 = {
  x: 250,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 1,
};

let state = `title`; // Possible states are: title, gameplay, ending

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
  circle.vx = circle.speed;

  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
}

/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `gameplay`) {
    gameplay();
  } else if (state === `ending`) {
    ending();
  }
}

function title() {
  //Title
  fill(255);
  text(`Life.`, width / 2, height / 2);
}

function gameplay() {

  handleInput(); // arrow key movement. playerCircleMove is inside this function

  npcCircle_random();

  endCondition();

  enemyCircle_chase();

  displayObjects();
}

function displayObjects() {
  ellipse(circle.x, circle.y, circle.size); // display player circle
  ellipse(circle2.x, circle2.y, circle2.size); // display npc circle
  push();
  fill(255, 0, 0);
  ellipse(circle3.x, circle3.y, circle3.size); // display enemy circle
  pop();
}

function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    circle.vx = -circle.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    circle.vx = circle.speed;
  } else {
    circle.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    circle.vy = -circle.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    circle.vy = circle.speed;
  } else {
    circle.vy = 0;
  }
  playerCircleMove();
}

function enemyCircle_chase() {
  let dx = circle3.x - circle.x;
  let dy = circle3.y - circle.y;

  if (dx < 0) {
    circle3.vx = circle3.speed;
  } else if (dx > 0) {
    circle3.vx = -circle3.speed;
  }

  if (dy < 0) {
    circle3.vy = circle3.speed;
  } else if (dy > 0) {
    circle3.vy = -circle3.speed;
  }
  // enemy circle movement
  circle3.x += +circle3.vx;
  circle3.y += +circle3.vy;
}

function npcCircle_random() {
  let change = random();
  if (change < 0.1) {
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
  }
  //move npc circle
  circle2.x += +circle2.vx;
  circle2.y += +circle2.vy;
}

function playerCircleMove() {
  circle.x += +circle.vx;
  circle.y += +circle.vy;
}

function endCondition() {
  if (circle.x > width) {
    state = `ending`;
  }
}

function ending() {
  //Ending
  fill(127);
  text(`It's all over.`, width / 2, height / 2);
}

function keyPressed() {
  if (state === `title`) {
    state = `gameplay`;
  }
}