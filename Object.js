class Vehicle {
    constructor(name, make, model){
        this.name = name;
        this.make = make;
        this.model = model;
    }
    toString() {
        return this.name;
    }
}

let car = new Vehicle("Car", "Nissan", "XTerra");
console.log(car.toString());

let VehicleHandler = {
    dealer: "Temecula Valley",
    toString: function() {
        return this.dealer;
    }
}

console.log(VehicleHandler.toString());

let OceansideVehicleHandler = Object.create(VehicleHandler);
OceansideVehicleHandler.dealer = "Oside";

console.log(VehicleHandler.toString());
console.log(OceansideVehicleHandler.toString());