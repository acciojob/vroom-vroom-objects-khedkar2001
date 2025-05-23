// Car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with current context and pass make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
// Set the constructor property correctly
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
