const Vehicle = require("./Vehicle.js");
const MathUtils = require("../Utils/MathUtils.js");

class VehicleList {

  constructor() {
    this.vehicles = [];
  }

  newVehicles(vehicleCount, vehicleMaxSpeed, vehicleMaxLoad) {
    for (let index = 0; index < vehicleCount; index++) {
      this.vehicles.push(new Vehicle(i, vehicleMaxSpeed, vehicleMaxLoad));
    }
    return this.vehicles;
  }

}