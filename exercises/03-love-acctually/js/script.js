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
  ax: 0,
  vx: 0,
  acceleration: 0.07,
  maxSpeed: 6,
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
  aBurst: 0.5,
  acceleration: 0.07,
  angle: 0,
  orbitSpeed: 0.08,
}

let rock = {
  x: 0,
  y: 250,
  size: 65,
  vx: 0,
  vy: 0,
  speed: 3,
  angle: 0,
  orbitSpeed: 0.08,
}

let state = `title`; // states: title, simulation, uncharted, impact, profit
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
  createCanvas(windowWidth - 100, windowHeight - 100);
  setupGameObjects(); // maybe needs to be in draw. rename to reset?
  textFont(fontAlagard, 80);
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

  // move ore and rocks in a random directions
  ore.ax = random(-ore.acceleration, ore.acceleration);
  ore.ay = random(-ore.acceleration, ore.acceleration);
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
  push();
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Interstellar Mining Ops`, width / 2, height / 3);
  textSize(50);
  text(`// Colect Ore, avoid Rock`, width / 2, height / 2);
  pop();

}

function simulation() {
  displaceAsteroids(); // ROCK & ORE displacement
  displayGameobjects(); // draws shapes & rotates ROCK & ORE

  moveStarship(); // player movement

  checkUncharted(); // offscreen condition, ORE & STARSHIP
  checkProfit(); // success condition, ORE
  checkImpact(); // loss condition, ROCK
}

function profit() {
  push();
  fill(250, 100, 120);
  textAlign(CENTER, CENTER);
  text(`Ore successfully collected!`, width / 2, height / 3);
  textSize(65);
  text(`// Deploy another starship.`, width / 2, height / 2);
  pop();
}

function oreOORange() {
  push();
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`Ore out of radar's range.`, width / 2, height / 3);
  textSize(60);
  text(`// Deploy another starship.`, width / 2, height / 2);
  pop();
}

function starshipOORange() {
  push();
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`Starship out of radar's range.`, width / 2, height / 3);
  textSize(50);
  text(`// Deploy another vessel.`, width / 2, height / 2);
  pop();
}

function impact() {
  push();
  fill(100, 100, 250);
  textAlign(CENTER, CENTER);
  text(`Starship destroyed.`, width / 2, height / 3);
  textSize(50);
  text(`// Deploy another vessel.`, width / 2, height / 2);
  pop();
}

function displaceAsteroids() {
  // move circles
  let change = random(); // random number for direction variation

  // change asteroid direction based on probality:
  if (change < 0.07) {
    //ORE:
    ore.ax = random(-ore.aBurst, ore.aBurst);
    ore.ay = random(-ore.aBurst, ore.aBurst);

    //ROCK
    rock.vx = random(-rock.speed, rock.speed);
    rock.vy = random(-rock.speed, rock.speed);

  }
  // update velocity based on acceleration
  //ORE:
  ore.vx += ore.ax;
  ore.vx = constrain(ore.vx, -ore.maxSpeed, ore.maxSpeed)
  ore.vy += ore.ay;
  ore.vy = constrain(ore.vy, -ore.maxSpeed, ore.maxSpeed)

  // update position based on velocity
  ore.x += ore.vx;
  ore.y += ore.vy;

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

  //DEBUG:
  console.log(`starship.vx:${starship.vx}`, `starship.vy: ${starship.vy}`);
}

function checkUncharted() {
  if (assetOffscreen(ore)) {
    // sad ending
    state = `oreOORange`;
  } else if (assetOffscreen(starship)) {
    state = `starshipOORange`
  };
}

function checkProfit() {
  // check for lovers overlapping
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
  ellipse(starship.x, starship.y, starship.size)

  // update angle to rotate circles
  ore.angle += ore.orbitSpeed;
  rock.angle += -rock.orbitSpeed;

  //draw asteroids
  push();
  fill(200, 180, 50);
  translate(ore.x, ore.y); // rotation pivot
  rotate(ore.angle);
  ellipse(0, 0, 10);
  ellipse(100, 0, ore.size);
  pop();

  push();
  fill(200, 20, 50);
  translate(rock.x, rock.y); // rotation pivot
  rotate(rock.angle);
  ellipse(0, 0, 10);
  ellipse(100, 0, rock.size);
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