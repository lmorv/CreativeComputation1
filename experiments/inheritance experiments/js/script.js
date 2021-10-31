/**
Inheritance experiments
Leonardo Morales

Following along with some experiments showcasing the concept of inheritance!
*/

"use strict";

let cars = [];
let numCars = 5;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    cars.push(car);
  }
}


/**
Description of draw()
*/
function draw() {
  background(0);

  for (let i; i < cars.length; i++) {
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }
}