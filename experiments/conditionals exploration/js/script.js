/********************************
Conditionals
Leonardo Morales

Experimenting with conditionals, yaaaaaay!
*********************************/

"use strict";

let caterpillar = {
  x: 5,
  y: 250,
  segmentSize: 20,
}
/**
 preload
*/
function preload() {

}
/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
}

/**
Description of draw()
*/
function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100);
  // while loop:
  // let x = caterpillar.x;
  // let numSegments = 20;
  // let segmentsDrawn = 0;
  //
  // while (segmentsDrawn < numSegments) {
  //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //   x = x + 18;
  //   segmentsDrawn++;

  // for loop
  let x = caterpillar.x;
  let numSegments = 10

  for (let i = 0; i < numSegments; i++) {
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 20;
  }

}