//creates a class that takes 3 arguments and contains 2 methods
class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log('Beep.');
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make,model,year);
        this.numWheels = 4
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); 
myFirstCar.honk();    
myFirstCar.numWheels; 

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make,model,year);
        this.numWheels = 2;
    }
    numWheels() {
        console.log(2);
    }
    revEngine() {
        console.log('VROOM!!!');
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.honk();     
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels;  

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }   
}
