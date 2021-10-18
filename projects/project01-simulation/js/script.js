/**
Simulation
Leonardo Morales

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
// proxy cubes for color storage during rotations
let proxyCube1 = {
  dim: 40,
  tx: 0,
  ty: 40,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};
let proxyCube2 = {
  dim: 40,
  tx: 40,
  ty: 0,
  tz: 0,
  fill: {
    r: 0,
    g: 0,
    b: 0
  }
};
let proxyCube3 = {
  dim: 40,
  tx: -40,
  ty: 0,
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

let cubieOffset = 60; // offset from world origin used to translate cubies
let faceOffset = 55; // face offset from center of cubie
let rotationSpeed = 0.15; // Layer rotation speed
let delay = rotationSpeed * 100;
let faces = []; // array of faces, populated in updateFaces() at draw()

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
}
/**
Description of draw()
*/
function draw() {
  background(10, 70, 70);
  orbitControl(10, 10, 0.3);
  updateFaces();

  //display GAME OBJECTS:
  if (keyIsDown(81)) {
    rotateUPlyr();
  } else if (keyIsDown(87)) {
    rotateRIGHTlyr();
  } else if (keyIsDown(69)) {
    rotateDOWNlyr();
  } else if (keyIsDown(82)) {
    rotateLEFTlyr();
  } else if (keyIsDown(84)) {
    rotateFRONTlyr();
  } else if (keyIsDown(89)) {
    rotateBACKlyr();
  } else {
    displayCube();
  }

  displayProxyCubes();

}

function rotateUPlyr() {
  push();
  rotateY(frameCount * rotationSpeed); // Rotate UP layer cubies
  displayUPlyr();
  pop();
  displayDOWNlyr(); // static layer

  // update face colors:
  delay -= 1;

  if (delay < 0) {
    //RIGHT-TOP-BACK_BACK into proxyCube1
    proxyCube1.fill.r = face4color.r;
    proxyCube1.fill.g = face4color.g;
    proxyCube1.fill.b = face4color.b;

    //LEFT-TOP-BACK_BACK into proxyCube2
    proxyCube2.fill.r = face2color.r;
    proxyCube2.fill.g = face2color.g;
    proxyCube2.fill.b = face2color.b;

    //RIGHT-TOP-BACK_RIGHT into LEFT-TOP-BACK_BACK
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
    face1color.b = proxyCube1.fill.b;

    face7color.r = proxyCube2.fill.r;
    face7color.g = proxyCube2.fill.g;
    face7color.b = proxyCube2.fill.b;

    //UP side rotation
    proxyCube3.fill.r = face3color.r;
    proxyCube3.fill.g = face3color.g;
    proxyCube3.fill.b = face3color.b;

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
    face0color.b = proxyCube3.fill.b;

    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}

function rotateDOWNlyr() {
  push();
  rotateY(frameCount * -rotationSpeed); // roate DOWN layer:
  displayDOWNlyr();
  pop();
  displayUPlyr(); // static UP layer
}

function rotateRIGHTlyr() {
  push();
  rotateX(frameCount * -rotationSpeed); // Rotate RIGHT layer cubies
  displayRIGHTlyr();
  pop();
  displayLEFTlyr(); // static left layer

  delay -= 1;
  if (delay < 0) {
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
    face3color.b = proxyCube2.fill.b;

    face9color.r = proxyCube1.fill.r;
    face9color.g = proxyCube1.fill.g;
    face9color.b = proxyCube1.fill.b;

    //RIGHT side rotation
    proxyCube3.fill.r = face5color.r;
    proxyCube3.fill.g = face5color.g;
    proxyCube3.fill.b = face5color.b;

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
    face10color.b = proxyCube3.fill.b;

    delay = rotationSpeed * 100; // reset 'rotation' delay
  };
}



function rotateLEFTlyr() {
  push();
  rotateX(frameCount * -rotationSpeed); // rotate LEFT layer
  displayLEFTlyr();
  pop();
  displayRIGHTlyr();
}

function rotateFRONTlyr() {
  push();
  rotateZ(frameCount * rotationSpeed); // rotate FRONT layer
  displayFRONTlyr();
  pop();
  displayBACKlyr(); // static BACK layer

}

function rotateBACKlyr() {
  push();
  rotateZ(frameCount * -rotationSpeed); // rotate BACK layer
  displayBACKlyr();
  pop();
  displayFRONTlyr(); // static FRONT layer
}

function displayCube() {
  // display whole cube
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
  faces[8] = createFace(0, 0, 50, 100, 100, 10, face8color.r, face8color.g, face8color.b); // orange
  // CUBIE4 faces: (yellow - blue - orange)
  faces[9] = createFace(0, -faceOffset, 0, 100, 10, 100, face9color.r, face9color.g, face9color.b); // yellow
  faces[10] = createFace(faceOffset, 0, 0, 10, 100, 100, face10color.r, face10color.g, face10color.b); // blue
  faces[11] = createFace(0, 0, faceOffset, 100, 100, 10, face11color.r, face11color.g, face11color.b); // orange

  // CUBIE5 faces: (white - green - red)
  faces[12] = createFace(0, 50, 0, 100, 10, 100, face12color.r, face12color.g, face12color.b); // white
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
  translate(proxyCube1.tx, proxyCube1.ty); // move this box to mouse possition
  box(proxyCube1.dim);
  pop();

  push();
  fill(proxyCube2.fill.r, proxyCube2.fill.g, proxyCube2.fill.b);
  translate(proxyCube2.tx, proxyCube2.ty); // move this box to mouse possition
  box(proxyCube2.dim);
  pop();

  push();
  fill(proxyCube3.fill.r, proxyCube3.fill.g, proxyCube3.fill.b);
  translate(proxyCube3.tx, proxyCube3.ty); // move this box to mouse possition
  box(proxyCube3.dim);
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