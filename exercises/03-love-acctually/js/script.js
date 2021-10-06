/**
Space mining remote navigator
Leonardo Morales

A space mining simulation of navigating among fast moving rock debries,
and tame mineral ore deposit asteroids.
*/

"use strict";


let starship = {
  x: 0,
  y: 0,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
}

let ore = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
}

let rock = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
}

let state = `title`; // states: title, simulation, uncharted, colision, profit
let fontAlagard;
let fontPhazed;
/**
Description of preload
*/
function preload() {
  fontAlagard = loadFont('assets/fonts/alagard.ttf');
  fontPhazed = loadFont('assets/fonts/Phazed-Regular.otf');
}

/**
Description of setup
*/
function setup() {
  createCanvas(900, 600);
  setupGameObjects(); // maybe needs to be in draw. rename to reset?
}

function setupGameObjects() {
  // Display circles some distance from each other << change to random positions
  starship.x = width / 2;
  starship.y = height / 2;

  ore.x = width / 3;
  ore.y = height / 2;

  rock.y = height / 2;
  rock.x = 2 * width / 3;

  // move ore and rocks in a random directions
  ore.vx = random(-ore.speed, ore.speed);
  ore.vy = random(-ore.speed, ore.speed);
  rock.vx = random(-rock.speed, rock.speed);
  rock.vy = random(-rock.speed, rock.speed);
}

/*
 draw()
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
  textFont(fontAlagard, 100);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width / 2, height / 2);
  pop();
}

function simulation() {
  moveAsteroids();
  moveStarship();
  // checkSadness(); // offscreen condition
  // checkLove(); // overlap condition
  displayGameobjects();
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

function moveAsteroids() {
  // move circles
  ore.x = ore.x + ore.vx;
  ore.y = ore.y + ore.vy;

  rock.x = rock.x + rock.vx;
  rock.y = rock.y + rock.vy;
}

function moveStarship() {
  // horizontal movement
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    starship.vx += -starship.speed;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    starship.vx += starship.speed;
  } else {
    starship.vx = 0;
  }
  //vertical movement
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    starship.vy += -starship.speed;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    starship.vy += starship.speed;
  } else {
    starship.vy = 0;
  }

  starship.x += starship.vx
  starship.y += starship.vy
}

function checkSadness() {
  if (assetOffscreen(ore) || assetOffscreen(starship)) {
    // sad ending
    state = `sadness`;
  }
}

function checkLove() {
  // check for lovers overlapping
  let d = dist(ore.x, ore.y, rock.x, rock.y);
  if (d < ore.size / 2 + rock.size / 2) {
    // love ending
    state = `love`;
  }
}

function displayGameobjects() {
  // draw player starship
  ellipse(starship.x, starship.y, starship.size)
  //draw asteroids
  push();
  fill(200, 180, 50);
  ellipse(ore.x, ore.y, ore.size);
  pop();

  push();
  fill(200, 20, 50);
  ellipse(rock.x, rock.y, rock.size);
  pop();
}

function assetOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    setupGameObjects();
  } else if (state === `sadness`) {
    state = `title`;
  } else if (state === `love`) {
    state = `title`;
  }
}