const MathUtils = require("../Utils/MathUtils.js");
class Vehicle {

  constructor(id, maxSpeed, maxLoad) {
    this.id = parseInt(id);
    this.maxSpeed = parseFloat(maxSpeed);
    this.maxLoad = parseFloat(maxLoad);
    this.nextDeliveryTime = parseFloat(0);
  }

  setId(id){
    this.id = id;
  }
  getid(){
    return this.id;
  }
  setMaxSpeed(speed){
    this.maxSpeed = speed;
  }
  getMaxSpeed(){
    return this.maxSpeed;
  }
  setMaxLoad(load){
    this.maxLoad = load;
  }
  getMaxLoad(){
    return this.maxLoad;
  }

  setNextDeliveryTime(time){
    this.nextDeliveryTime = MathUtils.roundoff(parseFloat(2) * time);
  }

  toString(){
    return `${this.nextDeliveryTime}`;
  }

}
module.exports = Vehicle;