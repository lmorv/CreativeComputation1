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

// color declarations
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

let cubieOffset = 70; // offset from origin used to translate cubies
let rotationSpeed = 0.09; // Layer rotation speed
let faces = [];
let cubies = []; // not currently being used

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
  // setupFaces(); // needs to be called in draw in order to update face colors

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
  faces[0] = createFace(0, -50, 0, 100, 10, 100, face0color.r, face0color.g, face0color.b); // yellow
  faces[1] = createFace(-50, 0, 0, 10, 100, 100, face1color.r, face1color.g, face1color.b); // green
  faces[2] = createFace(0, 0, -50, 100, 100, 10, face2color.r, face2color.g, face2color.b); // red
  // CUBIE2 faces: (yellow - red - blue)
  faces[3] = createFace(0, -50, 0, 100, 10, 100, face3color.r, face3color.g, face3color.b); // yellow
  faces[4] = createFace(0, 0, -50, 100, 100, 10, face4color.r, face4color.g, face4color.b); // red
  faces[5] = createFace(50, 0, 0, 10, 100, 100, face5color.r, face5color.g, face5color.b); // blue
  // CUBIE3 faces: (yellow - green - orange)
  faces[6] = createFace(0, -50, 0, 100, 10, 100, face6color.r, face6color.g, face6color.b); // yellow
  faces[7] = createFace(-50, 0, 0, 10, 100, 100, face7color.r, face7color.g, face7color.b); // green
  faces[8] = createFace(0, 0, 50, 100, 100, 10, face8color.r, face8color.g, face8color.b); // orange
  // CUBIE4 faces: (yellow - blue - orange)
  faces[9] = createFace(0, -50, 0, 100, 10, 100, face9color.r, face9color.g, face9color.b); // yellow
  faces[10] = createFace(50, 0, 0, 10, 100, 100, face10color.r, face10color.g, face10color.b); // blue
  faces[11] = createFace(0, 0, 50, 100, 100, 10, face11color.r, face11color.g, face11color.b); // orange

  // CUBIE5 faces: (white - green - red)
  faces[12] = createFace(0, 50, 0, 100, 10, 100, face12color.r, face12color.g, face12color.b); // white
  faces[13] = createFace(-50, 0, 0, 10, 100, 100, face13color.r, face13color.g, face13color.b); // green
  faces[14] = createFace(0, 0, -50, 100, 100, 10, face14color.r, face14color.g, face14color.b); // red
  // CUBIE6 faces: (white - red - blue)
  faces[15] = createFace(0, 50, 0, 100, 10, 100, face15color.r, face15color.g, face15color.b); // white
  faces[16] = createFace(0, 0, -50, 100, 100, 10, face16color.r, face16color.g, face16color.b); // red
  faces[17] = createFace(50, 0, 0, 10, 100, 100, face17color.r, face17color.g, face17color.b); // blue
  // CUBIE7 faces: (white - green - orange)
  faces[18] = createFace(0, 50, 0, 100, 10, 100, face18color.r, face18color.g, face18color.b); // white
  faces[19] = createFace(-50, 0, 0, 10, 100, 100, face19color.r, face19color.g, face19color.b); // green
  faces[20] = createFace(0, 0, 50, 100, 100, 10, face20color.r, face20color.g, face20color.b); // orange
  // CUBIE6 faces: (white - blue - orange)
  faces[21] = createFace(0, 50, 0, 100, 10, 100, face21color.r, face21color.g, face21color.b); // white
  faces[22] = createFace(50, 0, 0, 10, 100, 100, face22color.r, face22color.g, face22color.b); // blue
  faces[23] = createFace(0, 0, 50, 100, 100, 10, face23color.r, face23color.g, face23color.b); // orange
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
    fill: {
      r: r,
      g: g,
      b: b,
    }
  };
  return face;
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
  setupFaces();

  //display GAME OBJECTS:


  if (keyIsDown(81)) {
    rotateUPlyr();
  } else if (keyIsDown(87)) {
    rotateDOWNlyr();
  } else if (keyIsDown(69)) {
    rotateRIGHTlyr();
  } else if (keyIsDown(82)) {
    rotateLEFTlyr();
  } else if (keyIsDown(84)) {
    rotateFRONTlyr();
  } else if (keyIsDown(89)) {
    rotateBACKlyr();
  };
  displayCubies();

  // displayCubies();
  displayUser();

  //USER CUBE movemnet & user-driven behaviour:
  // userBehaviour();

}


function rotateUPlyr() {
  // Rotate UP layer cubies
  push();
  rotateY(frameCount * rotationSpeed);
  // UP layer:
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE3();
  displayCUBIE4();
  pop();
  // update face colors
  face1color.r = face4color.r;
  face1color.g = face4color.g;
  face1color.b = face4color.b;

  face7color.r = face2color.r;
  face7color.g = face2color.g;
  face7color.b = face2color.b;

  face8color.r = face1color.r;
  face8color.g = face1color.g;
  face8color.b = face1color.b;

  face11color.r = face7color.r;
  face11color.g = face7color.g;
  face11color.b = face7color.b;

  face10color.r = face8color.r;
  face10color.g = face8color.g;
  face10color.b = face8color.b;

  face4color.r = face10color.r;
  face4color.g = face10color.g;
  face4color.b = face10color.b;

  face5color.r = face11color.r;
  face5color.g = face11color.g;
  face5color.b = face11color.b;

  face2color.r = face5color.r;
  face2color.g = face5color.g;
  face2color.b = face5color.b;








}

function rotateRIGHTlyr() {
  push();
  rotateX(frameCount * rotationSpeed);
  // RIGHT layer:
  displayCUBIE2();
  displayCUBIE4();
  displayCUBIE6();
  displayCUBIE8();
  pop();
}

function rotateDOWNlyr() {
  push();
  rotateY(frameCount * -rotationSpeed);
  //DOWN layer:
  displayCUBIE5();
  displayCUBIE6();
  displayCUBIE7();
  displayCUBIE8();
  pop();
}

function rotateLEFTlyr() {
  push();
  rotateX(frameCount * -rotationSpeed);
  displayCUBIE1();
  displayCUBIE3();
  displayCUBIE5();
  displayCUBIE7();
  pop();
}

function rotateFRONTlyr() {
  push();
  rotateZ(frameCount * rotationSpeed);
  //FRONT layer
  displayCUBIE3();
  displayCUBIE4();
  displayCUBIE7();
  displayCUBIE8();
  pop();
}

function rotateBACKlyr() {
  push();
  rotateZ(frameCount * -rotationSpeed);
  displayCUBIE1();
  displayCUBIE2();
  displayCUBIE5();
  displayCUBIE6();
  pop();
}

function displayFace(face) {

  push();
  translate(face.x, face.y, face.z);
  fill(face.fill.r, face.fill.g, face.fill.b);
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