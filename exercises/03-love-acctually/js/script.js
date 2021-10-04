/**
Space mining remote navigator
Leonardo Morales

A space mining simulation of navigating among fast moving rock debries,
and tame mineral ore deposit asteroids.
*/

"use strict";


// let starship = {



let ore = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
}

let rock = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
}

let state = `title`; // states: title, simulation, uncharted, colission, profit

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
  setupGameObjects(); // maybe needs to be in draw. rename to reset?
}

function setupGameObjects() {
  // Display circles some distance from each other << change to random positions
  ore.x = width / 3;
  rock.x = 2 * width / 3;
  ore.y = height / 2;
  rock.y = height / 2;

  // move ore and rocks in a random directions
  ore.vx = random(-ore.speed, ore.speed);
  ore.vy = random(-ore.speed, ore.speed);
  rock.vx = random(-rock.speed, rock.speed);
  rock.vy = random(-rock.speed, rock.speed);
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
  moveAsteroids();
  checkSadness(); // offscreen condition
  checkLove(); // overlap condition
  displayAsteroids();
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

function checkSadness() {
  if (loverOffscreen(ore) || loverOffscreen(rock)) {
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

function displayAsteroids() {
  //draw circles
  ellipse(ore.x, ore.y, ore.size);
  ellipse(rock.x, rock.y, rock.size);
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
    setupGameObjects();
  } else if (state === `sadness`) {
    state = `title`;
  } else if (state === `love`) {
    state = `title`;
  }
}