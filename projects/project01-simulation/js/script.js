/**
Simulation
Leonardo Morales

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let innerCube = {
  dim: 172,
  tx: 0,
  ty: 0,
  tz: 0,
  fill: {
    r: 15,
    g: 5,
    b: 15
  }
};
// proxy cubes for color storage during rotations
let proxyCube1 = {
  dim: 40,
  tx: 190,
  ty: -150,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};
let proxyCube2 = {
  dim: 40,
  tx: 235,
  ty: -150,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};
let proxyCube3 = {
  dim: 40,
  tx: 280,
  ty: -150,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};

// color declarations to initialize face colors
let yellow = {
  r: 255,
  g: 255,
  b: 0,
};
let green = {
  r: 0,
  g: 255,
  b: 0,
};
let red = {
  r: 255,
  g: 0,
  b: 0,
};
let blue = {
  r: 0,
  g: 0,
  b: 255,
};
let orange = {
  r: 245,
  g: 100,
  b: 60,
};
let white = {
  r: 255,
  g: 255,
  b: 255,
}

// face color declarations, to be changed on keyIsPressed events
let face0color = {
  r: yellow.r,
  g: yellow.g,
  b: yellow.b,
};
let face1color = {
  r: green.r,
  g: green.g,
  b: green.b,
};
let face2color = {
  r: red.r,
  g: red.g,
  b: red.b,
};
let face3color = {
  r: yellow.r,
  g: yellow.g,
  b: yellow.b,
};
let face4color = {
  r: red.r,
  g: red.g,
  b: red.b,
};
let face5color = {
  r: blue.r,
  g: blue.g,
  b: blue.b,
};
let face6color = {
  r: yellow.r,
  g: yellow.g,
  b: yellow.b,
};
let face7color = {
  r: green.r,
  g: green.g,
  b: green.b,
};
let face8color = {
  r: orange.r,
  g: orange.g,
  b: orange.b,
};
let face9color = {
  r: yellow.r,
  g: yellow.g,
  b: yellow.b,
};
let face10color = {
  r: blue.r,
  g: blue.g,
  b: blue.b,
};
let face11color = {
  r: orange.r,
  g: orange.g,
  b: orange.b,
};
let face12color = {
  r: white.r,
  g: white.g,
  b: white.b,
};
let face13color = {
  r: green.r,
  g: green.g,
  b: green.b,
};
let face14color = {
  r: red.r,
  g: red.g,
  b: red.b,
};
let face15color = {
  r: white.r,
  g: white.g,
  b: white.b,
};
let face16color = {
  r: red.r,
  g: red.g,
  b: red.b,
};
let face17color = {
  r: blue.r,
  g: blue.g,
  b: blue.b,
};
let face18color = {
  r: white.r,
  g: white.g,
  b: white.b,
};
let face19color = {
  r: green.r,
  g: green.g,
  b: green.b,
};
let face20color = {
  r: orange.r,
  g: orange.g,
  b: orange.b,
};
let face21color = {
  r: white.r,
  g: white.g,
  b: white.b,
};
let face22color = {
  r: blue.r,
  g: blue.g,
  b: blue.b,
};
let face23color = {
  r: orange.r,
  g: orange.g,
  b: orange.b,
};

let state = `title` // possible states are `title`, `controlls`, `simulation`
let cubieOffset = 60; // offset from world origin used to translate cubies
let faceOffset = 60; // face offset from center of cubie
let rotationSpeed = 0.15; // Layer rotation speed
let delay = rotationSpeed * 100;
let faces = []; // array of faces, populated in updateFaces() at draw()

let titleCard;
let controllsCard;

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(1100, 700, WEBGL);
  noStroke();

  titleCard = createGraphics(220, 200);


}
/**
Description of draw()
*/
function draw() {
  background(10, 70, 70);
  // //Initial perspective view:
  // rotateX(radians(-20));
  // rotateY(radians(-20));
  // // default camera:
  // camera(0, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0);

  // //text experiments:
  // push();
  // textAlign(CENTER, CENTER);
  // textSize(width / 3);
  // text(`CUBE!`, 300, 0)
  // pop();

  push();
  translate(270, 0, 0)
  texture(titleCard);
  titleCard.fill(255);
  titleCard.textAlign(CENTER, CENTER);
  titleCard.text(`Instructions`, 50, 50);
  plane(220, 200);
  pop();

  //state = `simulation`
  orbitControl(10, 10, 0.3);
  updateFaces();
  //moveset controls
  if (keyIsDown(81)) { // Q key
    rotateUPlyr();
  } else if (keyIsDown(87)) { // W key
    rotateUPlyr_prime();
  } else if (keyIsDown(69)) { // E key
    rotateDOWNlyr();
  } else if (keyIsDown(82)) { // R key
    rotateDOWNlyr_prime();
  } else if (keyIsDown(65)) { // A key
    rotateRIGHTlyr();
  } else if (keyIsDown(83)) { // S key
    rotateRIGHTlyr_prime();
  } else if (keyIsDown(68)) { // D key
    rotateLEFTlyr();
  } else if (keyIsDown(70)) { // F key
    rotateLEFTlyr_prime();
  } else if (keyIsDown(90)) { // Z key
    rotateFRONTlyr();
  } else if (keyIsDown(88)) { // X key
    rotateFRONTlyr_prime();
  } else if (keyIsDown(67)) { // C key
    rotateBACKlyr();
  } else if (keyIsDown(86)) { // V key
    rotateBACKlyr_prime();
  } else {
    displayCube();
  };

  displayProxyCubes();
}

function rotateUPlyr() {
  push();
  rotateY(frameCount * -rotationSpeed); // Rotate UP layer cubies
  displayUPlyr();
  pop();
  displayDOWNlyr(); // static down layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    UP_MOVE(); // UP layer face color update instructions, clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateUPlyr_prime() {
  push();
  rotateY(frameCount * rotationSpeed); // Rotate UP layer cubies
  displayUPlyr();
  pop();
  displayDOWNlyr(); // static down layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    UPPRIME_MOVE(); // UP layer face color update instructions, counter-clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateDOWNlyr() {
  push();
  rotateY(frameCount * rotationSpeed); // roate DOWN layer:
  displayDOWNlyr();
  pop();
  displayUPlyr(); // static UP layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    DOWN_MOVE(); // DOWN layer face color update instructions, clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateDOWNlyr_prime() {
  push();
  rotateY(frameCount * -rotationSpeed); // roate DOWN layer:
  displayDOWNlyr();
  pop();
  displayUPlyr(); // static UP layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    DOWNPRIME_MOVE(); // DOWN layer face color update instructions, counter-clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateRIGHTlyr() {
  push();
  rotateX(frameCount * rotationSpeed); // Rotate RIGHT layer cubies
  displayRIGHTlyr();
  pop();
  displayLEFTlyr(); // static left layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    RIGHT_MOVE(); // RIGHT layer face color update instructions, clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateRIGHTlyr_prime() {
  push();
  rotateX(frameCount * -rotationSpeed); // Rotate RIGHT layer cubies
  displayRIGHTlyr();
  pop();
  displayLEFTlyr(); // static left layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    RIGHTPRIME_MOVE(); // RIGHT layer face color update instructions, counter-clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateLEFTlyr() {
  push();
  rotateX(frameCount * -rotationSpeed); // rotate LEFT layer
  displayLEFTlyr();
  pop();
  displayRIGHTlyr(); // static right layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    LEFT_MOVE(); // LEFT layer face color update instructions, clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateLEFTlyr_prime() {
  push();
  rotateX(frameCount * rotationSpeed); // rotate LEFT layer
  displayLEFTlyr();
  pop();
  displayRIGHTlyr(); // static right layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    LEFTPRIME_MOVE(); // LEFT layer face color update instructions, counter-clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateFRONTlyr() {
  push();
  rotateZ(frameCount * rotationSpeed); // rotate FRONT layer
  displayFRONTlyr();
  pop();
  displayBACKlyr(); // static BACK layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    FRONT_MOVE(); // FRONT layer face color update instructions, clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateFRONTlyr_prime() {
  push();
  rotateZ(frameCount * -rotationSpeed); // rotate FRONT layer
  displayFRONTlyr();
  pop();
  displayBACKlyr(); // static BACK layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    FRONTPRIME_MOVE(); // FRONT layer face color update instructions, counter-clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateBACKlyr() {
  push();
  rotateZ(frameCount * -rotationSpeed); // rotate BACK layer
  displayBACKlyr();
  pop();
  displayFRONTlyr(); // static FRONT layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    BACK_MOVE(); // BACK layer face color update instructions, clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateBACKlyr_prime() {
  push();
  rotateZ(frameCount * rotationSpeed); // rotate BACK layer
  displayBACKlyr();
  pop();
  displayFRONTlyr(); // static FRONT layer

  // update face colors:
  delay -= 1;
  if (delay < 0) {
    BACKPRIME_MOVE(); // BACK layer face color update instructions, counter-clockwise direction
    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

// Move-set color switch instructions:

function UP_MOVE() { // <<---!
  // UP band rotation
  proxyCube1.fill.r = face4color.r;
  proxyCube1.fill.g = face4color.g;
  proxyCube1.fill.b = face4color.b; //store face 4 in proxyCube1

  proxyCube2.fill.r = face2color.r;
  proxyCube2.fill.g = face2color.g;
  proxyCube2.fill.b = face2color.b; //store face 2 in proxyCube2

  face2color.r = face7color.r;
  face2color.g = face7color.g;
  face2color.b = face7color.b;

  face4color.r = face1color.r;
  face4color.g = face1color.g;
  face4color.b = face1color.b;

  face7color.r = face11color.r;
  face7color.g = face11color.g;
  face7color.b = face11color.b;

  face1color.r = face8color.r;
  face1color.g = face8color.g;
  face1color.b = face8color.b;

  face11color.r = face5color.r;
  face11color.g = face5color.g;
  face11color.b = face5color.b;

  face8color.r = face10color.r;
  face8color.g = face10color.g;
  face8color.b = face10color.b;

  face10color.r = proxyCube1.fill.r;
  face10color.g = proxyCube1.fill.g;
  face10color.b = proxyCube1.fill.b; // place stored face 4 into face 10

  face5color.r = proxyCube2.fill.r;
  face5color.g = proxyCube2.fill.g;
  face5color.b = proxyCube2.fill.b; // place stored face 2 into face 5

  //UP side rotation
  proxyCube3.fill.r = face3color.r;
  proxyCube3.fill.g = face3color.g;
  proxyCube3.fill.b = face3color.b; // store face 3 in proxyCube3

  face3color.r = face0color.r;
  face3color.g = face0color.g;
  face3color.b = face0color.b;

  face0color.r = face6color.r;
  face0color.g = face6color.g;
  face0color.b = face6color.b;

  face6color.r = face9color.r;
  face6color.g = face9color.g;
  face6color.b = face9color.b;

  face9color.r = proxyCube3.fill.r;
  face9color.g = proxyCube3.fill.g;
  face9color.b = proxyCube3.fill.b; // place stored face 3 into face 9
}

function UPPRIME_MOVE() {
  // UP band rotation
  proxyCube1.fill.r = face4color.r;
  proxyCube1.fill.g = face4color.g;
  proxyCube1.fill.b = face4color.b; //store face 4 in proxyCube1

  proxyCube2.fill.r = face2color.r;
  proxyCube2.fill.g = face2color.g;
  proxyCube2.fill.b = face2color.b; //store face 2 in proxyCube2

  face2color.r = face5color.r;
  face2color.g = face5color.g;
  face2color.b = face5color.b;

  face4color.r = face10color.r;
  face4color.g = face10color.g;
  face4color.b = face10color.b;

  face10color.r = face8color.r;
  face10color.g = face8color.g;
  face10color.b = face8color.b;

  face5color.r = face11color.r;
  face5color.g = face11color.g;
  face5color.b = face11color.b;

  face8color.r = face1color.r;
  face8color.g = face1color.g;
  face8color.b = face1color.b;

  face11color.r = face7color.r;
  face11color.g = face7color.g;
  face11color.b = face7color.b;

  face1color.r = proxyCube1.fill.r;
  face1color.g = proxyCube1.fill.g;
  face1color.b = proxyCube1.fill.b; // place stored face 4 into face 1

  face7color.r = proxyCube2.fill.r;
  face7color.g = proxyCube2.fill.g;
  face7color.b = proxyCube2.fill.b; // place stored face 2 into face 7

  //UP side rotation
  proxyCube3.fill.r = face3color.r;
  proxyCube3.fill.g = face3color.g;
  proxyCube3.fill.b = face3color.b; // store face 3 in proxyCube3

  face3color.r = face9color.r;
  face3color.g = face9color.g;
  face3color.b = face9color.b;

  face9color.r = face6color.r;
  face9color.g = face6color.g;
  face9color.b = face6color.b;

  face6color.r = face0color.r;
  face6color.g = face0color.g;
  face6color.b = face0color.b;

  face0color.r = proxyCube3.fill.r;
  face0color.g = proxyCube3.fill.g;
  face0color.b = proxyCube3.fill.b; // place stored face 3 into face 0
}


function DOWN_MOVE() { // <<---!
  // DOWN band rotation
  proxyCube1.fill.r = face14color.r;
  proxyCube1.fill.g = face14color.g;
  proxyCube1.fill.b = face14color.b; // store face 14 in proxyCube1

  proxyCube2.fill.r = face16color.r;
  proxyCube2.fill.g = face16color.g;
  proxyCube2.fill.b = face16color.b; // store face 16 in proxyCube2

  face14color.r = face17color.r;
  face14color.g = face17color.g;
  face14color.b = face17color.b;

  face16color.r = face22color.r;
  face16color.g = face22color.g;
  face16color.b = face22color.b;

  face17color.r = face23color.r;
  face17color.g = face23color.g;
  face17color.b = face23color.b;

  face22color.r = face20color.r;
  face22color.g = face20color.g;
  face22color.b = face20color.b;

  face23color.r = face19color.r;
  face23color.g = face19color.g;
  face23color.b = face19color.b;

  face20color.r = face13color.r;
  face20color.g = face13color.g;
  face20color.b = face13color.b;

  face19color.r = proxyCube1.fill.r;
  face19color.g = proxyCube1.fill.g;
  face19color.b = proxyCube1.fill.b; // place stored face 14 into face 19

  face13color.r = proxyCube2.fill.r;
  face13color.g = proxyCube2.fill.g;
  face13color.b = proxyCube2.fill.b; // place stored face 16 into face 13

  //DOWN side rotation
  proxyCube3.fill.r = face15color.r;
  proxyCube3.fill.g = face15color.g;
  proxyCube3.fill.b = face15color.b; // store face 15 in proxyCube3

  face15color.r = face21color.r;
  face15color.g = face21color.g;
  face15color.b = face21color.b;

  face21color.r = face18color.r;
  face21color.g = face18color.g;
  face21color.b = face18color.b;

  face18color.r = face12color.r;
  face18color.g = face12color.g;
  face18color.b = face12color.b;

  face12color.r = proxyCube3.fill.r;
  face12color.g = proxyCube3.fill.g;
  face12color.b = proxyCube3.fill.b; // place stored face 15 into face 12
}

function DOWNPRIME_MOVE() {
  // DOWN band rotation
  proxyCube1.fill.r = face14color.r;
  proxyCube1.fill.g = face14color.g;
  proxyCube1.fill.b = face14color.b; // store face 14 in proxyCube1

  proxyCube2.fill.r = face16color.r;
  proxyCube2.fill.g = face16color.g;
  proxyCube2.fill.b = face16color.b; // store face 16 in proxyCube2

  face14color.r = face19color.r;
  face14color.g = face19color.g;
  face14color.b = face19color.b;

  face16color.r = face13color.r;
  face16color.g = face13color.g;
  face16color.b = face13color.b;

  face19color.r = face23color.r;
  face19color.g = face23color.g;
  face19color.b = face23color.b;

  face13color.r = face20color.r;
  face13color.g = face20color.g;
  face13color.b = face20color.b;

  face23color.r = face17color.r;
  face23color.g = face17color.g;
  face23color.b = face17color.b;

  face20color.r = face22color.r;
  face20color.g = face22color.g;
  face20color.b = face22color.b;

  face17color.r = proxyCube1.fill.r;
  face17color.g = proxyCube1.fill.g;
  face17color.b = proxyCube1.fill.b; // place stored face 14 into face 17

  face22color.r = proxyCube2.fill.r;
  face22color.g = proxyCube2.fill.g;
  face22color.b = proxyCube2.fill.b; // place stored face 16 into face 22

  //DOWN side rotation
  proxyCube3.fill.r = face15color.r;
  proxyCube3.fill.g = face15color.g;
  proxyCube3.fill.b = face15color.b; // store face 15 in proxyCube3

  face15color.r = face12color.r;
  face15color.g = face12color.g;
  face15color.b = face12color.b;

  face12color.r = face18color.r;
  face12color.g = face18color.g;
  face12color.b = face18color.b;

  face18color.r = face21color.r;
  face18color.g = face21color.g;
  face18color.b = face21color.b;

  face21color.r = proxyCube3.fill.r;
  face21color.g = proxyCube3.fill.g;
  face21color.b = proxyCube3.fill.b; // place stored face 15 into face 21
}

function RIGHT_MOVE() { // <<---!
  proxyCube1.fill.r = face4color.r;
  proxyCube1.fill.g = face4color.g;
  proxyCube1.fill.b = face4color.b; // proxyCube1 now contains face4

  proxyCube2.fill.r = face16color.r;
  proxyCube2.fill.g = face16color.g;
  proxyCube2.fill.b = face16color.b; // proxyCube2 now contains face16

  face4color.r = face9color.r;
  face4color.g = face9color.g;
  face4color.b = face9color.b;

  face16color.r = face3color.r;
  face16color.g = face3color.g;
  face16color.b = face3color.b;

  face9color.r = face23color.r;
  face9color.g = face23color.g;
  face9color.b = face23color.b;

  face3color.r = face11color.r;
  face3color.g = face11color.g;
  face3color.b = face11color.b;

  face23color.r = face15color.r;
  face23color.g = face15color.g;
  face23color.b = face15color.b;

  face11color.r = face21color.r;
  face11color.g = face21color.g;
  face11color.b = face21color.b;

  face21color.r = proxyCube2.fill.r;
  face21color.g = proxyCube2.fill.g;
  face21color.b = proxyCube2.fill.b; // place stored face 16 into face 21

  face15color.r = proxyCube1.fill.r;
  face15color.g = proxyCube1.fill.g;
  face15color.b = proxyCube1.fill.b; // place stored face 4 into face 15

  //RIGHT side rotation
  proxyCube3.fill.r = face5color.r;
  proxyCube3.fill.g = face5color.g;
  proxyCube3.fill.b = face5color.b; // store face 5 in proxyCube3

  face5color.r = face10color.r;
  face5color.g = face10color.g;
  face5color.b = face10color.b;

  face10color.r = face22color.r;
  face10color.g = face22color.g;
  face10color.b = face22color.b;

  face22color.r = face17color.r;
  face22color.g = face17color.g;
  face22color.b = face17color.b;

  face17color.r = proxyCube3.fill.r;
  face17color.g = proxyCube3.fill.g;
  face17color.b = proxyCube3.fill.b; // // place stored face 5 into face 17
}

function RIGHTPRIME_MOVE() {
  proxyCube1.fill.r = face4color.r;
  proxyCube1.fill.g = face4color.g;
  proxyCube1.fill.b = face4color.b; // proxyCube1 now contains face4

  proxyCube2.fill.r = face16color.r;
  proxyCube2.fill.g = face16color.g;
  proxyCube2.fill.b = face16color.b; // proxyCube2 now contains face16

  face4color.r = face15color.r;
  face4color.g = face15color.g;
  face4color.b = face15color.b;

  face16color.r = face21color.r;
  face16color.g = face21color.g;
  face16color.b = face21color.b;

  face15color.r = face23color.r;
  face15color.g = face23color.g;
  face15color.b = face23color.b;

  face21color.r = face11color.r;
  face21color.g = face11color.g;
  face21color.b = face11color.b;

  face23color.r = face9color.r;
  face23color.g = face9color.g;
  face23color.b = face9color.b;

  face11color.r = face3color.r;
  face11color.g = face3color.g;
  face11color.b = face3color.b;

  face3color.r = proxyCube2.fill.r;
  face3color.g = proxyCube2.fill.g;
  face3color.b = proxyCube2.fill.b; // place stored face 16 into face 3

  face9color.r = proxyCube1.fill.r;
  face9color.g = proxyCube1.fill.g;
  face9color.b = proxyCube1.fill.b; // place stored face 4 into face 9

  //RIGHT side rotation
  proxyCube3.fill.r = face5color.r;
  proxyCube3.fill.g = face5color.g;
  proxyCube3.fill.b = face5color.b; // store face 5 in proxyCube3

  face5color.r = face17color.r;
  face5color.g = face17color.g;
  face5color.b = face17color.b;

  face17color.r = face22color.r;
  face17color.g = face22color.g;
  face17color.b = face22color.b;

  face22color.r = face10color.r;
  face22color.g = face10color.g;
  face22color.b = face10color.b;

  face10color.r = proxyCube3.fill.r;
  face10color.g = proxyCube3.fill.g;
  face10color.b = proxyCube3.fill.b; // // place stored face 5 into face 10
}

function LEFT_MOVE() {
  //LEFT band rotation
  proxyCube1.fill.r = face2color.r;
  proxyCube1.fill.g = face2color.g;
  proxyCube1.fill.b = face2color.b; // proxyCube1 now contains face 2

  proxyCube2.fill.r = face14color.r;
  proxyCube2.fill.g = face14color.g;
  proxyCube2.fill.b = face14color.b; // proxyCube2 now contains face 14

  face2color.r = face12color.r;
  face2color.g = face12color.g;
  face2color.b = face12color.b;

  face14color.r = face18color.r;
  face14color.g = face18color.g;
  face14color.b = face18color.b;

  face12color.r = face20color.r;
  face12color.g = face20color.g;
  face12color.b = face20color.b;

  face18color.r = face8color.r;
  face18color.g = face8color.g;
  face18color.b = face8color.b;

  face20color.r = face6color.r;
  face20color.g = face6color.g;
  face20color.b = face6color.b;

  face8color.r = face0color.r;
  face8color.g = face0color.g;
  face8color.b = face0color.b;

  face0color.r = proxyCube2.fill.r;
  face0color.g = proxyCube2.fill.g;
  face0color.b = proxyCube2.fill.b; // place stored face 14 into face 0

  face6color.r = proxyCube1.fill.r;
  face6color.g = proxyCube1.fill.g;
  face6color.b = proxyCube1.fill.b; // place stored face 2 into face 6

  //LEFT side rotation
  proxyCube3.fill.r = face1color.r;
  proxyCube3.fill.g = face1color.g;
  proxyCube3.fill.b = face1color.b; // store face 1 in proxyCube3

  face1color.r = face13color.r;
  face1color.g = face13color.g;
  face1color.b = face13color.b;

  face13color.r = face19color.r;
  face13color.g = face19color.g;
  face13color.b = face19color.b;

  face19color.r = face7color.r;
  face19color.g = face7color.g;
  face19color.b = face7color.b;

  face7color.r = proxyCube3.fill.r;
  face7color.g = proxyCube3.fill.g;
  face7color.b = proxyCube3.fill.b; // place stored face 1 into face 7
}

function LEFTPRIME_MOVE() { // <<---!
  //LEFT band rotation
  proxyCube1.fill.r = face2color.r;
  proxyCube1.fill.g = face2color.g;
  proxyCube1.fill.b = face2color.b; // proxyCube1 now contains face 2

  proxyCube2.fill.r = face14color.r;
  proxyCube2.fill.g = face14color.g;
  proxyCube2.fill.b = face14color.b; // proxyCube2 now contains face 14

  face2color.r = face6color.r;
  face2color.g = face6color.g;
  face2color.b = face6color.b;

  face14color.r = face0color.r;
  face14color.g = face0color.g;
  face14color.b = face0color.b;

  face6color.r = face20color.r;
  face6color.g = face20color.g;
  face6color.b = face20color.b;

  face0color.r = face8color.r;
  face0color.g = face8color.g;
  face0color.b = face8color.b;

  face20color.r = face12color.r;
  face20color.g = face12color.g;
  face20color.b = face12color.b;

  face8color.r = face18color.r;
  face8color.g = face18color.g;
  face8color.b = face18color.b;

  face18color.r = proxyCube2.fill.r;
  face18color.g = proxyCube2.fill.g;
  face18color.b = proxyCube2.fill.b; // place stored face 14 into face 18

  face12color.r = proxyCube1.fill.r;
  face12color.g = proxyCube1.fill.g;
  face12color.b = proxyCube1.fill.b; // place stored face 2 into face 12

  //LEFT side rotation
  proxyCube3.fill.r = face1color.r;
  proxyCube3.fill.g = face1color.g;
  proxyCube3.fill.b = face1color.b; // store face 1 in proxyCube3

  face1color.r = face7color.r;
  face1color.g = face7color.g;
  face1color.b = face7color.b;

  face7color.r = face19color.r;
  face7color.g = face19color.g;
  face7color.b = face19color.b;

  face19color.r = face13color.r;
  face19color.g = face13color.g;
  face19color.b = face13color.b;

  face13color.r = proxyCube3.fill.r;
  face13color.g = proxyCube3.fill.g;
  face13color.b = proxyCube3.fill.b; // place stored face 1 into face 13
}

function FRONT_MOVE() {
  proxyCube1.fill.r = face6color.r;
  proxyCube1.fill.g = face6color.g;
  proxyCube1.fill.b = face6color.b; // proxyCube1 now contains face 6

  proxyCube2.fill.r = face9color.r;
  proxyCube2.fill.g = face9color.g;
  proxyCube2.fill.b = face9color.b; // proxyCube2 now contains face 9

  face6color.r = face19color.r;
  face6color.g = face19color.g;
  face6color.b = face19color.b;

  face9color.r = face7color.r;
  face9color.g = face7color.g;
  face9color.b = face7color.b;

  face19color.r = face21color.r;
  face19color.g = face21color.g;
  face19color.b = face21color.b;

  face7color.r = face18color.r;
  face7color.g = face18color.g;
  face7color.b = face18color.b;

  face21color.r = face10color.r;
  face21color.g = face10color.g;
  face21color.b = face10color.b;

  face18color.r = face22color.r;
  face18color.g = face22color.g;
  face18color.b = face22color.b;

  face22color.r = proxyCube2.fill.r;
  face22color.g = proxyCube2.fill.g;
  face22color.b = proxyCube2.fill.b; // place stored face 9 into face 22

  face10color.r = proxyCube1.fill.r;
  face10color.g = proxyCube1.fill.g;
  face10color.b = proxyCube1.fill.b; // place stored face 6 into face 10

  //FRONT side rotation
  proxyCube3.fill.r = face11color.r;
  proxyCube3.fill.g = face11color.g;
  proxyCube3.fill.b = face11color.b; // store face 11 in proxyCube3

  face11color.r = face8color.r;
  face11color.g = face8color.g;
  face11color.b = face8color.b;

  face8color.r = face20color.r;
  face8color.g = face20color.g;
  face8color.b = face20color.b;

  face20color.r = face23color.r;
  face20color.g = face23color.g;
  face20color.b = face23color.b;

  face23color.r = proxyCube3.fill.r;
  face23color.g = proxyCube3.fill.g;
  face23color.b = proxyCube3.fill.b; // place stored face 11 into face 23
}

function FRONTPRIME_MOVE() { // <<---!
  proxyCube1.fill.r = face6color.r;
  proxyCube1.fill.g = face6color.g;
  proxyCube1.fill.b = face6color.b; // proxyCube1 now contains face 6

  proxyCube2.fill.r = face9color.r;
  proxyCube2.fill.g = face9color.g;
  proxyCube2.fill.b = face9color.b; // proxyCube2 now contains face 9

  face6color.r = face10color.r;
  face6color.g = face10color.g;
  face6color.b = face10color.b;

  face9color.r = face22color.r;
  face9color.g = face22color.g;
  face9color.b = face22color.b;

  face10color.r = face21color.r;
  face10color.g = face21color.g;
  face10color.b = face21color.b;

  face22color.r = face18color.r;
  face22color.g = face18color.g;
  face22color.b = face18color.b;

  face21color.r = face19color.r;
  face21color.g = face19color.g;
  face21color.b = face19color.b;

  face18color.r = face7color.r;
  face18color.g = face7color.g;
  face18color.b = face7color.b;

  face7color.r = proxyCube2.fill.r;
  face7color.g = proxyCube2.fill.g;
  face7color.b = proxyCube2.fill.b; // place stored face 9 into face 7

  face19color.r = proxyCube1.fill.r;
  face19color.g = proxyCube1.fill.g;
  face19color.b = proxyCube1.fill.b; // place stored face 6 into face 19

  //FRONT side rotation
  proxyCube3.fill.r = face11color.r;
  proxyCube3.fill.g = face11color.g;
  proxyCube3.fill.b = face11color.b; // store face 11 in proxyCube3

  face11color.r = face23color.r;
  face11color.g = face23color.g;
  face11color.b = face23color.b;

  face23color.r = face20color.r;
  face23color.g = face20color.g;
  face23color.b = face20color.b;

  face20color.r = face8color.r;
  face20color.g = face8color.g;
  face20color.b = face8color.b;

  face8color.r = proxyCube3.fill.r;
  face8color.g = proxyCube3.fill.g;
  face8color.b = proxyCube3.fill.b; // place stored face 11 into face 8
}

function BACK_MOVE() {
  proxyCube1.fill.r = face3color.r;
  proxyCube1.fill.g = face3color.g;
  proxyCube1.fill.b = face3color.b; // proxyCube1 now contains face 3

  proxyCube2.fill.r = face0color.r;
  proxyCube2.fill.g = face0color.g;
  proxyCube2.fill.b = face0color.b; // proxyCube2 now contains face 0

  face3color.r = face17color.r;
  face3color.g = face17color.g;
  face3color.b = face17color.b;

  face0color.r = face5color.r;
  face0color.g = face5color.g;
  face0color.b = face5color.b;

  face17color.r = face12color.r;
  face17color.g = face12color.g;
  face17color.b = face12color.b;

  face5color.r = face15color.r;
  face5color.g = face15color.g;
  face5color.b = face15color.b;

  face15color.r = face13color.r;
  face15color.g = face13color.g;
  face15color.b = face13color.b;

  face12color.r = face1color.r;
  face12color.g = face1color.g;
  face12color.b = face1color.b;

  face13color.r = proxyCube2.fill.r;
  face13color.g = proxyCube2.fill.g;
  face13color.b = proxyCube2.fill.b; // place stored face 0 into face 13

  face1color.r = proxyCube1.fill.r;
  face1color.g = proxyCube1.fill.g;
  face1color.b = proxyCube1.fill.b; // place stored face 3 into face 1

  //BACK side rotation
  proxyCube3.fill.r = face2color.r;
  proxyCube3.fill.g = face2color.g;
  proxyCube3.fill.b = face2color.b; // store face 2 in proxyCube3

  face2color.r = face4color.r;
  face2color.g = face4color.g;
  face2color.b = face4color.b;

  face4color.r = face16color.r;
  face4color.g = face16color.g;
  face4color.b = face16color.b;

  face16color.r = face14color.r;
  face16color.g = face14color.g;
  face16color.b = face14color.b;

  face14color.r = proxyCube3.fill.r;
  face14color.g = proxyCube3.fill.g;
  face14color.b = proxyCube3.fill.b; // place stored face 2 into face 14
}

function BACKPRIME_MOVE() { // <<---!
  proxyCube1.fill.r = face3color.r;
  proxyCube1.fill.g = face3color.g;
  proxyCube1.fill.b = face3color.b; // proxyCube1 now contains face 3

  proxyCube2.fill.r = face0color.r;
  proxyCube2.fill.g = face0color.g;
  proxyCube2.fill.b = face0color.b; // proxyCube2 now contains face 0

  face3color.r = face1color.r;
  face3color.g = face1color.g;
  face3color.b = face1color.b;

  face0color.r = face13color.r;
  face0color.g = face13color.g;
  face0color.b = face13color.b;

  face1color.r = face12color.r;
  face1color.g = face12color.g;
  face1color.b = face12color.b;

  face13color.r = face15color.r;
  face13color.g = face15color.g;
  face13color.b = face15color.b;

  face15color.r = face5color.r;
  face15color.g = face5color.g;
  face15color.b = face5color.b;

  face12color.r = face17color.r;
  face12color.g = face17color.g;
  face12color.b = face17color.b;

  face5color.r = proxyCube2.fill.r;
  face5color.g = proxyCube2.fill.g;
  face5color.b = proxyCube2.fill.b; // place stored face 0 into face 5

  face17color.r = proxyCube1.fill.r;
  face17color.g = proxyCube1.fill.g;
  face17color.b = proxyCube1.fill.b; // place stored face 3 into face 17

  //BACK side rotation
  proxyCube3.fill.r = face2color.r;
  proxyCube3.fill.g = face2color.g;
  proxyCube3.fill.b = face2color.b; // store face 2 in proxyCube3

  face2color.r = face14color.r;
  face2color.g = face14color.g;
  face2color.b = face14color.b;

  face14color.r = face16color.r;
  face14color.g = face16color.g;
  face14color.b = face16color.b;

  face16color.r = face4color.r;
  face16color.g = face4color.g;
  face16color.b = face4color.b;

  face4color.r = proxyCube3.fill.r;
  face4color.g = proxyCube3.fill.g;
  face4color.b = proxyCube3.fill.b; // place stored face 2 into face 4
}

// display entire cube
function displayCube() {
  displayUPlyr();
  displayDOWNlyr();
}

// Layer display functions:
function displayUPlyr() {
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE3();
  displayCUBIE4();
}

function displayDOWNlyr() {
  displayCUBIE5();
  displayCUBIE6();
  displayCUBIE7();
  displayCUBIE8();
}

function displayRIGHTlyr() {
  displayCUBIE2();
  displayCUBIE4();
  displayCUBIE6();
  displayCUBIE8();
}

function displayLEFTlyr() {
  displayCUBIE1();
  displayCUBIE3();
  displayCUBIE5();
  displayCUBIE7();
}

function displayFRONTlyr() {
  displayCUBIE3();
  displayCUBIE4();
  displayCUBIE7();
  displayCUBIE8();
}

function displayBACKlyr() {
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE5();
  displayCUBIE6();
}

// CUBIE display functions:
function displayCUBIE1() {
  push();
  translate(-cubieOffset, -cubieOffset, -cubieOffset)
  displayFace(faces[0]);
  displayFace(faces[1]);
  displayFace(faces[2]);
  pop();
}

function displayCUBIE2() {
  push();
  translate(cubieOffset, -cubieOffset, -cubieOffset)
  displayFace(faces[3]);
  displayFace(faces[4]);
  displayFace(faces[5]);
  pop();
}

function displayCUBIE3() {
  push();
  translate(-cubieOffset, -cubieOffset, cubieOffset)
  displayFace(faces[6]);
  displayFace(faces[7]);
  displayFace(faces[8]);
  pop();
}

function displayCUBIE4() {
  push();
  translate(cubieOffset, -cubieOffset, cubieOffset)
  displayFace(faces[9]);
  displayFace(faces[10]);
  displayFace(faces[11]);
  pop();
}

function displayCUBIE5() {
  push();
  translate(-cubieOffset, cubieOffset, -cubieOffset)
  displayFace(faces[12]);
  displayFace(faces[13]);
  displayFace(faces[14]);
  pop();
}

function displayCUBIE6() {
  push();
  translate(cubieOffset, cubieOffset, -cubieOffset)
  displayFace(faces[15]);
  displayFace(faces[16]);
  displayFace(faces[17]);
  pop();
}

function displayCUBIE7() {
  push();
  translate(-cubieOffset, cubieOffset, cubieOffset)
  displayFace(faces[18]);
  displayFace(faces[19]);
  displayFace(faces[20]);
  pop();
}

function displayCUBIE8() {
  push();
  translate(cubieOffset, cubieOffset, cubieOffset)
  displayFace(faces[21]);
  displayFace(faces[22]);
  displayFace(faces[23]);
  pop();
}

function updateFaces() {
  // CUBIE1 faces: (yellow - green - red)
  faces[0] = createFace(0, -faceOffset, 0, 100, 10, 100, face0color.r, face0color.g, face0color.b); // yellow
  faces[1] = createFace(-faceOffset, 0, 0, 10, 100, 100, face1color.r, face1color.g, face1color.b); // green
  faces[2] = createFace(0, 0, -faceOffset, 100, 100, 10, face2color.r, face2color.g, face2color.b); // red
  // CUBIE2 faces: (yellow - red - blue)
  faces[3] = createFace(0, -faceOffset, 0, 100, 10, 100, face3color.r, face3color.g, face3color.b); // yellow
  faces[4] = createFace(0, 0, -faceOffset, 100, 100, 10, face4color.r, face4color.g, face4color.b); // red
  faces[5] = createFace(faceOffset, 0, 0, 10, 100, 100, face5color.r, face5color.g, face5color.b); // blue
  // CUBIE3 faces: (yellow - green - orange)
  faces[6] = createFace(0, -faceOffset, 0, 100, 10, 100, face6color.r, face6color.g, face6color.b); // yellow
  faces[7] = createFace(-faceOffset, 0, 0, 10, 100, 100, face7color.r, face7color.g, face7color.b); // green
  faces[8] = createFace(0, 0, faceOffset, 100, 100, 10, face8color.r, face8color.g, face8color.b); // orange
  // CUBIE4 faces: (yellow - blue - orange)
  faces[9] = createFace(0, -faceOffset, 0, 100, 10, 100, face9color.r, face9color.g, face9color.b); // yellow
  faces[10] = createFace(faceOffset, 0, 0, 10, 100, 100, face10color.r, face10color.g, face10color.b); // blue
  faces[11] = createFace(0, 0, faceOffset, 100, 100, 10, face11color.r, face11color.g, face11color.b); // orange

  // CUBIE5 faces: (white - green - red)
  faces[12] = createFace(0, faceOffset, 0, 100, 10, 100, face12color.r, face12color.g, face12color.b); // white
  faces[13] = createFace(-faceOffset, 0, 0, 10, 100, 100, face13color.r, face13color.g, face13color.b); // green
  faces[14] = createFace(0, 0, -faceOffset, 100, 100, 10, face14color.r, face14color.g, face14color.b); // red
  // CUBIE6 faces: (white - red - blue)
  faces[15] = createFace(0, faceOffset, 0, 100, 10, 100, face15color.r, face15color.g, face15color.b); // white
  faces[16] = createFace(0, 0, -faceOffset, 100, 100, 10, face16color.r, face16color.g, face16color.b); // red
  faces[17] = createFace(faceOffset, 0, 0, 10, 100, 100, face17color.r, face17color.g, face17color.b); // blue
  // CUBIE7 faces: (white - green - orange)
  faces[18] = createFace(0, faceOffset, 0, 100, 10, 100, face18color.r, face18color.g, face18color.b); // white
  faces[19] = createFace(-faceOffset, 0, 0, 10, 100, 100, face19color.r, face19color.g, face19color.b); // green
  faces[20] = createFace(0, 0, faceOffset, 100, 100, 10, face20color.r, face20color.g, face20color.b); // orange
  // CUBIE6 faces: (white - blue - orange)
  faces[21] = createFace(0, faceOffset, 0, 100, 10, 100, face21color.r, face21color.g, face21color.b); // white
  faces[22] = createFace(faceOffset, 0, 0, 10, 100, 100, face22color.r, face22color.g, face22color.b); // blue
  faces[23] = createFace(0, 0, faceOffset, 100, 100, 10, face23color.r, face23color.g, face23color.b); // orange
}

function createFace(x, y, z, width, height, depth, r, g, b) {
  let face = {
    x: x,
    y: y,
    z: z,
    width: width,
    height: height,
    depth: depth,
    fill: {
      r: r,
      g: g,
      b: b,
    }
  };
  return face;
}

function displayFace(face) {
  push();
  translate(face.x, face.y, face.z);
  fill(face.fill.r, face.fill.g, face.fill.b);
  box(face.width, face.height, face.depth);
  pop();
}

function displayProxyCubes() {
  //USER CUBE display:
  push();
  fill(proxyCube1.fill.r, proxyCube1.fill.g, proxyCube1.fill.b);
  translate(proxyCube1.tx, proxyCube1.ty);
  box(proxyCube1.dim);
  pop();

  push();
  fill(proxyCube2.fill.r, proxyCube2.fill.g, proxyCube2.fill.b);
  translate(proxyCube2.tx, proxyCube2.ty);
  box(proxyCube2.dim);
  pop();

  push();
  fill(proxyCube3.fill.r, proxyCube3.fill.g, proxyCube3.fill.b);
  translate(proxyCube3.tx, proxyCube3.ty);
  box(proxyCube3.dim);
  pop();

  push();
  fill(innerCube.fill.r, innerCube.fill.g, innerCube.fill.b);
  translate(innerCube.tx, innerCube.ty);
  box(innerCube.dim);
  pop();
}

function threeDMouseX(x) {
  // calculate mouse x and y in 3d coordinates:
  x = mouseX - width / 2;
  return x;
}

function threeDMouseY(y) {
  y = mouseY - height / 2;
  return y;
}