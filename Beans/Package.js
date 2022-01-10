
const Offers = require("../Utils/Offers.js");
const CONSTS = require("../Utils/Constants.js");

class Package {

  constructor(baseDeliveryCost, id, weight, distance, offer = "ZERO") {
    //from input
    this.id = id;
    this.weight = parseInt(weight);
    this.distance = parseInt(distance);
    this.offer = Offers.hasOwnProperty(offer.toUpperCase()) ? offer.toUpperCase() : "ZERO";
    this.baseDeliveryCost = parseInt(baseDeliveryCost);
    this.discountFactor = CONSTS.ONE;

    //from derivation
    this.cost = this.getCost();
    this.deliveryCost = this.getDeliveryCost();
    this.discount = parseFloat(this.cost - this.deliveryCost).toFixed(2);
    this.deliveryTime = parseFloat(CONSTS.ZERO);
  }

  setDeliveryCost(deliveryCost){
    this.deliveryCost = deliveryCost;
  }

  setDiscountFactor(discountFactor){
    this.discountFactor = discountFactor;
  }

  setCost(cost){
    this.cost = cost;
  }

  setDiscount(discount){
    this.discount = discount;
  }

  getBaseDeliveryCost(){
    return this.baseDeliveryCost;
  }

  getWeight(){
    return this.weight;
  }

  getDistance(){
    return this.distance;
  }

  getDeliveryCost (){
      let applicableOffer = Offers[this.offer];
      if(this.isDiscountApplicable(applicableOffer)) {
          this.setDiscountFactor(parseFloat(applicableOffer.value));
      }
      return parseFloat(this.getCost() * this.getDiscountFactor()).toFixed(2);
  }

  getCost(){
    return parseFloat(this.getBaseDeliveryCost()
          + (this.getWeight() * 10)
          + (this.getDistance() * 5));
  }

  getDiscountFactor(){
    return this.discountFactor;
  }

  getDiscount(){
    return this.discount;
  }

  isDiscountApplicable(applicableOffer){
    return this.weight <= applicableOffer.maxWeight
          && this.weight >= applicableOffer.minWeight
          && this.distance <= applicableOffer.maxDistance
          && this.distance >= applicableOffer.minDistance;
  }

  toString(){
    return `${this.id} ${this.discount} ${this.deliveryCost}`;
  }

  toTimeString(){
    return `${this.id} ${this.discount} ${this.deliveryCost} ${this.deliveryTime}`;
  }

  toArray(){
    return [this.baseDeliveryCost, this.id, this.weight, this.distance, this.offer];
  }
}

module.exports = Package;