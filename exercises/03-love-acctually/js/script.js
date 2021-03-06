/**
Space mining remote navigator
Leonardo Morales

A space mining simulation of navigating among fast moving rock debries,
and mineral ore deposit asteroids.
*/

"use strict";


let starship = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  ax: 0,
  vx: 0,
  acceleration: 0.07,
  maxSpeed: 6,
  image: undefined,
}

let ore = {
  x: 0,
  y: 250,
  size: 60,
  vx: 0,
  vy: 0,
  ax: 0,
  av: 0,
  maxSpeed: 5,
  aBurst: 0.5, // acceleration burst for random direction change
  acceleration: 0.07,
  angle: 0,
  orbitSpeed: 0.08,
  image: undefined,
}

let rock = {
  x: 0,
  y: 250,
  size: 65,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  maxSpeed: 5,
  aBurst: 0.5, // acceleration burst for random direction change
  acceleration: 0.07,
  angle: 0,
  orbitSpeed: 0.08,
  image: undefined,
}

let state = `title`; // states: title, simulation, uncharted, impact, profit
let fontAlagard;
let fontPhazed;
/**
 preload loads our images and fonts (only fontAlagard works)
*/
function preload() {
  fontAlagard = loadFont('assets/fonts/alagard.ttf');
  fontPhazed = loadFont('assets/fonts/Phazed-Regular.otf');

  starship.image = loadImage(`assets/images/starship.png`);
  rock.image = loadImage(`assets/images/rock.png`);
  ore.image = loadImage(`assets/images/ore.png`);
}
/**
setup positions game objects, sets relative canvas size and defines global settings
*/
function setup() {
  createCanvas(windowWidth - 200, windowHeight - 100);
  setupGameObjects(); // maybe needs to be in draw. rename to reset?
  textFont(fontAlagard, 80);
  noStroke();
  imageMode(CENTER);
}

function setupGameObjects() {
  // position game objects
  starship.x = width / 4;
  starship.y = height / 4;

  ore.x = width / 2;
  ore.y = height / 2;

  rock.y = height / 2;
  rock.x = 2 * width / 3;

  // reset starship velocity
  starship.vx = 0;
  starship.vy = 0;

  // move ore and rock in a random directions
  ore.ax = random(-ore.acceleration, ore.acceleration);
  ore.ay = random(-ore.acceleration, ore.acceleration);
  rock.ax = random(-rock.acceleration, rock.acceleration);
  rock.ay = random(-rock.acceleration, rock.acceleration);
}

/*
 draw() contains the program's high level state machine
*/
function draw() {
  background(30);

  if (state === 'title') {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `profit`) {
    profit();
  } else if (state === `oreOORange`) {
    oreOORange();
  } else if (state === `starshipOORange`) {
    starshipOORange();
  } else if (state === `impact`) {
    impact();
  }
}


function title() {
  // Horizontal band behaviour
  fakeUI();
  // Text
  push();
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Interstellar Mining Ops.`, width / 2, height / 3);
  textSize(60);
  text(`-- Collect Ore. Avoid Rock. --`, width / 2, height / 2);
  textSize(30);
  text(`// Use ARROWS or WASD keys to move. `, width / 2, 2 * height / 3);
  pop();

}

function profit() {
  // Horizontal band behaviour
  fakeUI();
  // Text
  push();
  fill(250, 100, 120);
  textAlign(CENTER, CENTER);
  text(`Ore successfully collected!`, width / 2, height / 3);
  textSize(55);
  text(`-- Deploy another starship. --`, width / 2, height / 2);
  pop();
}

function oreOORange() {
  // Horizontal band behaviour
  fakeUI();
  // Text
  push();
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`Ore out of radar's range.`, width / 2, height / 3);
  textSize(55);
  text(`-- Deploy another starship. --`, width / 2, height / 2);
  pop();
}

function starshipOORange() {
  // Horizontal band behaviour
  fakeUI();
  // Text
  push();
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`Starship out of radar's range.`, width / 2, height / 3);
  textSize(55);
  text(`-- Deploy another vessel. --`, width / 2, height / 2);
  pop();
}

function impact() {
  // Horizontal band behaviour
  fakeUI();
  // Text
  push();
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`Starship destroyed.`, width / 2, height / 3);
  textSize(55);
  text(`-- Deploy another vessel. --`, width / 2, height / 2);
  pop();
}

function fakeUI() {
  let rectHeight = 75;
  let rectX = width / 2;
  let rectY = height / 2;

  rectMode(CENTER);
  rect(rectX, rectY, width, rectHeight);
  if (mouseY < rectY - 0.5 * rectHeight || mouseY > rectY + 0.5 * rectHeight) {
    fill(255, 255, 255);
  } else {
    fill(200, 200, 130);
  };
}

function simulation() {
  radarTargets(); // Grid lines folloing STARSHIP & ORE

  displaceAsteroids(); // ROCK & ORE displacement
  displayGameobjects(); // draws shapes & rotates ROCK & ORE
  moveStarship(); // player movement

  checkUncharted(); // offscreen conditions, ORE & STARSHIP
  checkProfit(); // success condition, ORE
  checkImpact(); // loss condition, ROCK
}

function radarTargets() {
  // variables used to create a barely perceptible movement offset.
  let shipXNEG = starship.x - 40; // nevative horizontal offset
  let shipXPOS = starship.x + 40; // positive horizontal offset
  let shipYNEG = starship.y - 40; // nevative vertical offset
  let shipYPOS = starship.y + 40; // positive vertical offset

  // Starship target lines
  push();
  stroke(0, 100, 100);
  //VERTICAL lines:
  line(shipXNEG - starship.vx, 0, shipXNEG - starship.vx, height);
  line(shipXPOS - starship.vx, 0, shipXPOS - starship.vx, height);
  // HORIZONTAL lines:
  line(0, shipYNEG - starship.vy, width, shipYNEG - starship.vy);
  line(0, shipYPOS - starship.vy, width, shipYPOS - starship.vy);
  pop();
  // Ore target lines:
  push();
  stroke(0, 100, 200);
  line(ore.x - 20, 0, ore.x - 20, height);
  line(ore.x + 20, 0, ore.x + 20, height);
  line(0, ore.y - 20, width, ore.y - 20);
  line(0, ore.y + 20, width, ore.y + 20);
  pop();
}

function displaceAsteroids() {
  // move circles
  let change = random(); // random number for direction variation

  // change asteroid direction based on probality, using a burst in acceleration
  if (change < 0.07) {
    //ORE:
    ore.ax = random(-ore.aBurst, ore.aBurst);
    ore.ay = random(-ore.aBurst, ore.aBurst);

    //ROCK
    rock.ax = random(-rock.aBurst, rock.aBurst);
    rock.ay = random(-rock.aBurst, rock.aBurst);
  }

  // update velocity based on acceleration
  //ORE:
  ore.vx += ore.ax;
  ore.vx = constrain(ore.vx, -ore.maxSpeed, ore.maxSpeed);
  ore.vy += ore.ay;
  ore.vy = constrain(ore.vy, -ore.maxSpeed, ore.maxSpeed);
  //ROCK
  rock.vx += rock.ax;
  rock.vx = constrain(rock.vx, -rock.maxSpeed, rock.maxSpeed);
  rock.vy += rock.ay;
  rock.vy = constrain(rock.vy, -rock.maxSpeed, rock.maxSpeed);

  // update position based on velocity
  //ORE
  ore.x += ore.vx;
  ore.y += ore.vy;
  //Rock
  rock.x += rock.vx;
  rock.y += rock.vy;

}

function moveStarship() {
  // horizontal movement
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    starship.ax += -starship.acceleration;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    starship.ax += starship.acceleration;
  } else {
    starship.ax = 0;
  }

  //vertical movement
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    starship.ay += -starship.acceleration;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    starship.ay += starship.acceleration;
  } else {
    starship.ay = 0;
  }

  // update velocity based on acceleration
  starship.vx += starship.ax;
  starship.vx = constrain(starship.vx, -starship.maxSpeed, starship.maxSpeed);
  starship.vy += starship.ay;
  starship.vy = constrain(starship.vy, -starship.maxSpeed, starship.maxSpeed);

  // update position based on velocity
  starship.x += starship.vx
  starship.y += starship.vy

}

function checkUncharted() {
  // out of radar's range endings
  if (assetOffscreen(ore)) {
    state = `oreOORange`;
  } else if (assetOffscreen(starship)) {
    state = `starshipOORange`
  };
}

function checkProfit() {
  // check for overlap
  let d = dist(ore.x, ore.y, starship.x, starship.y);
  if (d < ore.size / 2 + starship.size / 2) {
    // success ending
    state = `profit`;
  }
}

function checkImpact() {
  let d = dist(rock.x, rock.y, starship.x, starship.y);
  if (d < rock.size / 2 + starship.size / 2) {
    // loss ending
    state = `impact`;
  }
}

function displayGameobjects() {
  // draw player starship
  push();
  fill(50, 100, 250, 20);
  ellipse(starship.x, starship.y, starship.size);
  image(starship.image, starship.x, starship.y, starship.size + 15, starship.size + 15);
  pop();

  // update angle to rotate circles
  ore.angle += ore.orbitSpeed;
  rock.angle += -rock.orbitSpeed;

  //draw asteroids
  //ORE:
  push();
  fill(200, 180, 50, 20);
  translate(ore.x, ore.y); // rotation pivot
  rotate(ore.angle);
  ellipse(100, 0, ore.size);
  image(ore.image, 100, 0, ore.size + 12, ore.size + 12);
  rotate(-rock.angle);
  ellipse(50, 0, 25);
  image(ore.image, 50, 0, 35, 35);
  pop();
  //ROCK:
  push();
  fill(200, 20, 50, 20);
  translate(rock.x, rock.y); // rotation pivot
  rotate(rock.angle);
  ellipse(100, 0, rock.size);
  image(rock.image, 100, 0, rock.size + 12, rock.size + 12);
  rotate(-rock.angle);
  ellipse(50, 0, 25);
  image(rock.image, 50, 0, 35, 35);
  pop();
}

// Lower level check used in checkUncharted()
function assetOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

// UI controlls
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    setupGameObjects();
  } else if (state === `oreOORange`) {
    state = `title`;
  } else if (state === 'starshipOORange') {
    state = `title`;
  } else if (state === `profit`) {
    state = `title`;
  } else if (state === `impact`) {
    state = `title`;
  }
}