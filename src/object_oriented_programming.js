// define blueprint of a car

class Car {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineOn = false;
  }
  // a method is a part of a class that defines a behavior or action that the class can perform
  startEngine(){
    this.engineOn = true;
    console.log(`The engine of the ${this.make} ${this.model} is now on.`);
  }

  displayInfo(){
    console.log(`Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// create an instance of a class

const myCar= new Car("Honda", "Accord", 2018);

console.log(myCar);

myCar.startEngine()

const myCar2= new Car("Toyota", "Camry", 2019);
myCar2.displayInfo()
myCar2.startEngine()

