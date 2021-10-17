/**
Simulation
Leonardo Morales

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let userCube = {
  dim: 40,
  tx: 0,
  ty: 0,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};

let cubieOffset = 70; // offset from origin used to translate cubies
let faces = [];
let cubies = [];

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
  setupFaces();

  cubies[0] = createCubie(undefined, undefined, undefined);
  cubies[1] = createCubie(undefined, undefined, undefined);
  cubies[2] = createCubie(undefined, undefined, undefined);
  cubies[3] = createCubie(undefined, undefined, undefined);
  cubies[4] = createCubie(undefined, undefined, undefined);
  cubies[5] = createCubie(undefined, undefined, undefined);
  cubies[6] = createCubie(undefined, undefined, undefined);
  cubies[7] = createCubie(undefined, undefined, undefined);
}

function setupFaces() {
  // CUBIE1 faces: (yellow - green - red)
  faces[0] = createFace(0, -50, 0, 100, 10, 100, 255, 255, 0); // yellow
  faces[1] = createFace(-50, 0, 0, 10, 100, 100, 0, 255, 0); // green
  faces[2] = createFace(0, 0, -50, 100, 100, 10, 255, 0, 0); // red
  // CUBIE2 faces: (yellow - red - blue)
  faces[3] = createFace(0, -50, 0, 100, 10, 100, 255, 255, 0); // yellow
  faces[4] = createFace(0, 0, -50, 100, 100, 10, 255, 0, 0); // red
  faces[5] = createFace(50, 0, 0, 10, 100, 100, 0, 0, 255); // blue
  // CUBIE3 faces: (yellow - green - orange)
  faces[6] = createFace(0, -50, 0, 100, 10, 100, 255, 255, 0); // yellow
  faces[7] = createFace(-50, 0, 0, 10, 100, 100, 0, 255, 0); // green
  faces[8] = createFace(0, 0, 50, 100, 100, 10, 245, 100, 60); // orange
  // CUBIE4 faces: (yellow - blue - orange)
  faces[9] = createFace(0, -50, 0, 100, 10, 100, 255, 255, 0); // yellow
  faces[10] = createFace(50, 0, 0, 10, 100, 100, 0, 0, 255); // blue
  faces[11] = createFace(0, 0, 50, 100, 100, 10, 245, 100, 60); // orange

  // CUBIE5 faces: (white - green - red)
  faces[12] = createFace(0, 50, 0, 100, 10, 100, 255, 255, 255); // white
  faces[13] = createFace(-50, 0, 0, 10, 100, 100, 0, 255, 0); // green
  faces[14] = createFace(0, 0, -50, 100, 100, 10, 255, 0, 0); // red
  // CUBIE6 faces: (white - red - blue)
  faces[15] = createFace(0, 50, 0, 100, 10, 100, 255, 255, 255); // white
  faces[16] = createFace(0, 0, -50, 100, 100, 10, 255, 0, 0); // red
  faces[17] = createFace(50, 0, 0, 10, 100, 100, 0, 0, 255); // blue
  // CUBIE7 faces: (white - green - orange)
  faces[18] = createFace(0, 50, 0, 100, 10, 100, 255, 255, 255); // white
  faces[19] = createFace(-50, 0, 0, 10, 100, 100, 0, 255, 0); // green
  faces[20] = createFace(0, 0, 50, 100, 100, 10, 245, 100, 60); // orange
  // CUBIE6 faces: (white - blue - orange)
  faces[21] = createFace(0, 50, 0, 100, 10, 100, 255, 255, 255); // white
  faces[22] = createFace(50, 0, 0, 10, 100, 100, 0, 0, 255); // blue
  faces[23] = createFace(0, 0, 50, 100, 100, 10, 245, 100, 60); // orange
}

/**
Description of draw()
*/

function createFace(x, y, z, width, height, depth, r, g, b) {
  let face = {
    x: x,
    y: y,
    z: z,
    width: width,
    height: height,
    depth: depth,
    r: r,
    g: g,
    b: b,
  };
  return face;
}

function createCubie(x, y, z) {
  let cubie = {
    x: x,
    y: y,
    z: z,
  };
  return cubie;
};


function draw() {
  background(10, 70, 70);
  orbitControl(10, 10, .3);

  //display GAME OBJECTS:

  displayCubies();
  rotateUPlyr();
  rotateRIGHTlyr();
  displayUser();

  //USER CUBE movemnet & user-driven behaviour:
  // userBehaviour();

}


function rotateUPlyr() {
  //Rotate TOP layer cubies
  push();
  rotateY(frameCount * 0.03);
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE3();
  displayCUBIE4();
  pop();
}

function rotateRIGHTlyr() {
  push();
  rotateX(frameCount * 0.03);
  displayCUBIE2();
  displayCUBIE4();
  displayCUBIE6();
  displayCUBIE8();
  pop();
}

function displayFace(face) {
  push();
  translate(face.x, face.y, face.z);
  fill(face.r, face.g, face.b);
  box(face.width, face.height, face.depth);
  pop();
}


function displayCubies() {
  //UP layer:
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE3();
  displayCUBIE4();

  //DOWN layer:
  displayCUBIE5();
  displayCUBIE6();
  displayCUBIE7();
  displayCUBIE8();
}

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

function displayUser() {
  //USER CUBE display:
  push();
  fill(userCube.fill.r, userCube.fill.g, userCube.fill.b);
  translate(userCube.tx, userCube.ty); // move this box to mouse possition
  box(userCube.dim);
  pop();
}

function userBehaviour() {
  // move user cube to mouse position
  userCube.tx = threeDMouseX();
  userCube.ty = threeDMouseY();
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