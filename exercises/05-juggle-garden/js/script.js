/**
Juggling Simulation
Leonardo Morales

Plan:
- press spacebar to add 3 paddles slighthly above the user controlled one. << disapearing period and cooldown on this avility.
- create a ball cannon in the middle of the user paddle ( reaserch directional orientation and pushing to an array on mouse press).
- make balls bounce off walls and ceiling.
- add evil ball newtralization on contact with cannon-fired balls.
- add fail and win conditions (Win: all balls neutralized, fail: more than 3 balls pass through)

*/

"use strict";

let gravityForce = 0.0025;

let paddles[];
let maxNumPaddles = 4;
let balls = [];
let numBalls = 10;


// Description of preload

function preload() {

}

// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
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
}