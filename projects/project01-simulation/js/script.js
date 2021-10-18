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
let angle = 0; // layer rotate andgle
let faces = [];
let cube = createRubuksCube();
let cubies = [];

// assign faces to face positions
let facePos1 = faces[0];
let facePos2 = faces[1];
let facePos3 = faces[2];
let facePos4 = faces[3];
let facePos5 = faces[4];
let facePos6 = faces[5];
let facePos7 = faces[6];
let facePos8 = faces[7];
let facePos9 = faces[8];
let facePos10 = faces[9];
let facePos11 = faces[10];
let facePos12 = faces[11];
let facePos13 = faces[12];
let facePos14 = faces[13];
let facePos15 = faces[14];
let facePos16 = faces[15];
let facePos17 = faces[16];
let facePos18 = faces[17];
let facePos19 = faces[18];
let facePos20 = faces[19];
let facePos21 = faces[20];
let facePos22 = faces[21];
let facePos23 = faces[22];
let facePos24 = faces[23];

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

  //How do I use these?
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

function createRubuksCube() {
  let cube = {
    upLeftBack: createFace(0, 0, -50, 100, 100, 10, 255, 0, 0),
  };
  return cube;
}

// Create cubie contruct to store face configs??
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

  displayCube(cube);
  // displayCubies();
  // rotateUPlyr();
  // rotateDOWNlyr();
  // rotateRIGHTlyr();
  // rotateLEFTlyr();
  // rotateFRONTlyr();
  // rotateBACKlyr();
  displayUser();

  //USER CUBE movemnet & user-driven behaviour:
  // userBehaviour();

}

function rotateTOPlyr(cube) {
  push()
  cube.upLeftBack.
  pop()
}

function displayCube(cube) {
  push();
  translate(cube.upLeftBack.x, cube.upLeftBack.y, cube.upLeftBack.z);
  fill(cube.upLeftBack.r, cube.upLeftBack.g, cube.upLeftBack.b);
  box(cube.upLeftBack.width, cube.upLeftBack.height, cube.upLeftBack.depth);
  pop();
}

function rotateUPlyr() {
  //Rotate UP layer cubies
  angle += radians(0.6) // update andgle by an amount
  push();
  rotateY(angle);
  // UP layer:
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE3();
  displayCUBIE4();
  pop();
}

function rotateRIGHTlyr() {
  push();
  rotateX(frameCount * 0.03);
  // RIGHT layer:
  displayCUBIE2();
  displayCUBIE4();
  displayCUBIE6();
  displayCUBIE8();
  pop();
}

function rotateDOWNlyr() {
  push();
  rotateY(frameCount * -0.03);
  //DOWN layer:
  displayCUBIE5();
  displayCUBIE6();
  displayCUBIE7();
  displayCUBIE8();
  pop();
}

function rotateLEFTlyr() {
  push();
  rotateX(frameCount * -0.03);
  displayCUBIE1();
  displayCUBIE3();
  displayCUBIE5();
  displayCUBIE7();
  pop();
}

function rotateFRONTlyr() {

  push();
  rotateZ(frameCount * 0.03);
  //FRONT layer
  displayCUBIE3();
  displayCUBIE4();
  displayCUBIE7();
  displayCUBIE8();
  pop();
}

function rotateBACKlyr() {
  push();
  rotateZ(frameCount * -0.03);
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE5();
  displayCUBIE6();
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
  displayFace(facePos1); // diaplay face curretly on global facePosition variable
  displayFace(facePos2);
  displayFace(facePos3);
  pop();
}

function displayCUBIE2() {
  push();
  translate(cubieOffset, -cubieOffset, -cubieOffset)
  displayFace(facePos4);
  displayFace(facePos5);
  displayFace(facePos6);
  pop();
}

function displayCUBIE3() {
  push();
  translate(-cubieOffset, -cubieOffset, cubieOffset)
  displayFace(facePos7);
  displayFace(facePos8);
  displayFace(facePos9);
  pop();
}

function displayCUBIE4() {
  push();
  translate(cubieOffset, -cubieOffset, cubieOffset)
  displayFace(facePos10);
  displayFace(facePos11);
  displayFace(facePos12);
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