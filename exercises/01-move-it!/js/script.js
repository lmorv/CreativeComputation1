/**
Moving Cubes!
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

/**
preload does nothing.
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(700, 700, WEBGL);
}

/**
Description of draw()
*/
function draw() {
  background(10, 70, 70);
  // calculate mouse x and y in 3d coordinates:
  let mouseY3D = mouseY - height / 2;
  let mouseX3D = mouseX - height / 2;

  // global rotation on 0, 0, 0
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);


  // CUBE 1:
  push()
  fill(cube1.fill.r, cube1.fill.g, cube1.fill.b);
  translate(cube1.tx, cube1.ty, cube1.tz); // transate cube to the LEFT
  // rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1); // rotate on 'local' axis after having translated the matrix
  box(cube1.dim);
  pop();

  // CUBE 2:
  push();
  fill(cube2.fill.r, cube2.fill.g, cube2.fill.b);
  translate(cube2.tx, cube2.ty, cube2.tz); // transate cube to the RIGHT
  // rotateX(frameCount * 0.1);
  rotateX(frameCount * 0.1); // rotate on 'local' axis after having translated the matrix
  // rotateY(frameCount * 0.1);
  box(cube2.dim);
  pop();

  //USER CUBE display:
  push();
  fill(userCube.fill.r, userCube.fill.g, userCube.fill.b);
  translate(userCube.tx, userCube.ty); // move this box to mouse possition
  box(userCube.dim);
  pop();

  //USER CUBE movemnet:
  userCube.tx = mouseX3D;
  userCube.ty = mouseY3D;
  // constrain user cube translate to canvas (fixed) dimentions
  userCube.ty = constrain(userCube.ty, -310, 310);
  userCube.tx = constrain(userCube.tx, -310, 310);


  // handle scalar tranformations:
  cube1.dim = map(mouseY3D, 0, height / 2, 0, mouseY - height / 2);
  cube2.dim = map(mouseX3D, 0, width / 2, 0, mouseX - width / 2);
  // constrain cube dimentions:
  cube1.dim = constrain(cube1.dim, 40, 300);
  cube2.dim = constrain(cube2.dim, 40, 300);

  //handle USER CUBE color variation
  // Map red chanel to vertical mouse:
  if (mouseY3D > 0) {
    userCube.fill.r = map(mouseY3D, 0, 350, 0, 255);
  } else {
    userCube.fill.r = map(mouseY3D, 0, -350, 0, 255);
  };
  // Map blue chanel to horizontal mouse:
  if (mouseX3D > 0) {
    userCube.fill.b = map(mouseX3D, 0, 350, 0, 255);
  } else {
    userCube.fill.b = map(mouseX3D, 0, -350, 0, 255);
  };

  //DEBUG:
  console.log(`userCube.fill.r:${userCube.fill.r}`);
  console.log(`mouseY3D:${mouseY3D}`);
}