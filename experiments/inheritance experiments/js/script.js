/**
Inheritance experiments
Leonardo Morales

Following along with some experiments showcasing the concept of inheritance!
*/

"use strict";

let vehicles = [];
let numCars = 10;
let numMotorcycles = 10;
let numSportsCars = 4;
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
  // create the cars
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  // create the motorcycles
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  //create the sports cars
  for (let i = 0; i < numSportsCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let sportsCar = new SportsCar(x, y);
    vehicles.push(sportsCar);
  }
}


/**
Description of draw()
*/
function draw() {
  background(0);

  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }


}