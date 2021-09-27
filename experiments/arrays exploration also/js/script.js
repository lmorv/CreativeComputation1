/**
Fortune Teller experiment
Leonardo Morales

This is an experiment involving stings of letters aranged into words that pedict the actual future.
*/

"use strict";


let soliloquy = [
  `To be, or not to be`,
  `That is the question.`,
  `Whether 'tis nobler in the mind`,
  `To suffer the slings and arrows`,
  `Of outrageous fortune`,
  `Or to take arms`,
  `Against a sea of sorrows`,
  `And by opposing end them.`
];

let circle = {
  x: 0,
  y: 0,
  size: 50,
  trail: [],
  trailSize: 20,
}

let currentIndex = 0;

let barkSFX;

let barkRates = [1.5, 1.7, 2.75, 2.5, 2.75, 3];

function preload() {
  barkSFX = loadSound('assets/sounds/bark.wav');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}


function draw() {
  background(0);
  text(soliloquy[currentIndex], width / 2, height / 2);

  circle.x = mouseX;
  circle.y = mouseY;

  for (let i = 0; i < circle.trail.length; i++) {
    let position = circle.trail[i];
    ellipse(position.x, position.y, circle.size);
  }

  ellipse(circle.x, circle.y, circle.size);

  let newTrailPosition = {
    x: circle.x,
    y: circle.y
  };
  circle.trail.push(newTrailPosition);

  if (circle.trail.length > circle.trailSize) {
    circle.trail.shift();
  };
}


function mousePressed() {
  currentIndex = currentIndex + 1;
  if (currentIndex === soliloquy.length) {
    currentIndex = 0;
  }

  let randomRate = random(barkRates);

  barkSFX.rate(randomRate);
  barkSFX.play();
}