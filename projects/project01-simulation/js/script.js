/**
Simulation
Leonardo Morales

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let cube1 = {
  dim: 100, // cube dimentions
  tx: -80, //tanslate x, and so on ...
  ty: 0,
  tz: 0,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};
let cube2 = {
  dim: 100, // cube dimentions
  tx: 80, //tanslate x, and so on ...
  ty: 0,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 255
  }
};

let userCube = {
  dim: 50,
  tx: 0,
  ty: 0,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};

let face1;
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
  face1 = createFace(0, 0, 0, 100, 100, 10);
}

/**
Description of draw()
*/

function createFace(x, y, z, width, height, depth) {
  let face = {
    x: x,
    y: y,
    z: z,
    width: width,
    height: height,
    depth: depth,
  };
  return face;
}

function draw() {
  background(10, 70, 70);
  orbitControl();
  // global rotation on 0, 0, 0
  // globalRotation();

  //display GAME OBJECTS:

  displayFace(face1);

  // displayCubes();
  displayUser();

  //USER CUBE movemnet & user-driven behaviour:
  // userBehaviour();

}

function displayFace(face) {
  push();
  translate(face.x, face.y, face.z);
  box(face.width, face.height, face.depth);
  pop();
}

function globalRotation() {
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}

function displayCubes() {
  //display CUBE 1:
  push()
  fill(cube1.fill.r, cube1.fill.g, cube1.fill.b);
  translate(cube1.tx, cube1.ty, cube1.tz); // transate cube to the LEFT
  // rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1); // rotate on 'local' axis after having translated the matrix
  box(cube1.dim);
  pop();

  //display CUBE 2:
  push();
  fill(cube2.fill.r, cube2.fill.g, cube2.fill.b);
  translate(cube2.tx, cube2.ty, cube2.tz); // transate cube to the RIGHT
  // rotateX(frameCount * 0.1);
  rotateX(frameCount * 0.1); // rotate on 'local' axis after having translated the matrix
  // rotateY(frameCount * 0.1);
  box(cube2.dim);
  pop();
}

function displayUser() {
  // calculate mouse x and y in 3d coordinates:
  let mouseY3D = mouseY - height / 2;
  let mouseX3D = mouseX - height / 2;
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

  // constrain user cube translate to canvas (fixed) dimentions
  userCube.ty = constrain(userCube.ty, -310, 310);
  userCube.tx = constrain(userCube.tx, -310, 310);

  // handle scalar tranformations:
  cube2.dim = map(threeDMouseX(), 0, width / 2, 0, mouseX - width / 2);
  cube1.dim = map(threeDMouseY(), 0, height / 2, 0, mouseY - height / 2);
  // constrain cube dimentions:
  cube1.dim = constrain(cube1.dim, 40, 300);
  cube2.dim = constrain(cube2.dim, 40, 300);

  //handle USER CUBE color variation
  // Map red chanel to vertical mouse:
  if (threeDMouseY() > 0) {
    userCube.fill.r = map(threeDMouseY(), 0, 350, 0, 255);
  } else {
    userCube.fill.r = map(threeDMouseY(), 0, -350, 0, 255);
  };
  // Map blue chanel to horizontal mouse:
  if (threeDMouseX() > 0) {
    userCube.fill.b = map(threeDMouseX(), 0, 350, 0, 255);
  } else {
    userCube.fill.b = map(threeDMouseX(), 0, -350, 0, 255);
  };

  //DEBUG:
  console.log(`userCube.fill.r:${userCube.fill.r}`);
  console.log(`mouseY3D:${threeDMouseY()}`);
}

function threeDMouseX(x) {
  // calculate mouse x and y in 3d coordinates:
  x = mouseX - height / 2;
  return x;
}

function threeDMouseY(y) {
  y = mouseY - height / 2;
  return y;
}