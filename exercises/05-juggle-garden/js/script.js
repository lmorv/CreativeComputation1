/**
Juggling Simulation
Leonardo Morales

Plan:
- press spacebar to add 4 shields slighthly above the user controlled paddle. << disapearing period and cooldown on this avility.
- create a ball cannon in the middle of the user paddle ( reaserch directional orientation and pushing to an array on mouse press).
- make balls bounce off walls and ceiling.
- add evil ball newtralization on contact with cannon-fired balls.
- add fail and win conditions (Win: all balls neutralized, fail: more than 3 balls pass through)

*/

"use strict";

let gravityForce = 0.0025;

let paddle;
let balls = [];
let numBalls = 10;
let shields = [];
let numShields = 4;


// Description of preload

function preload() {

}

// Description of setup

function setup() {
  createCanvas(950, windowHeight);

  paddle = new Paddle(300, 20);

  // Create the enemy balls (bombs?)
  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  // Create the force shields
  for (let i = 0; i < numShields; i++) {
    let w = 100;
    let h = 20;
    let x = 200;
    let spacing = 300;
    let shield = new Shield(w, h, x);
    shields.push(shield);
    x = x + spacing;
  }
}

// Description of draw()
function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

  for (let i = 0; i < shields.length; i++) {
    let shield = shields[i];
    shield.display();
  }
}

function mousePressed() {
  // Shoot a ball from the center of the paddle
}

// Spawn shields on spacebar press
function keyPressed() {
  if (keyCode === 32) {
    for (let i = 0; i < shields.length; i++) {
      let shield = shields[i];
      shield.display();
    }
  }
}