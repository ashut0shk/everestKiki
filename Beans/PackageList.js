const Package = require("./Package.js");
const MathUtils = require("../Utils/MathUtils.js");

class PackageList {

  constructor(){
    this.packages = [];
    this.formattedPackages = [];
  }

  newPackage(obj){
    let pkg = new Package(...obj)
    this.packages.push(pkg)
    return this.packages;
  }

  getAllPackages(){
    return this.packages;
  }

  getNumberOfPackages(){
      return this.packages.length;
  }

  swap(index1, index2){
    let tmpVal = this.packages[index2];
    this.packages[index2] = this.packages[index1];
    this.packages[index1] = tmpVal;
  }

  getLess(index1, index2){
    return this.packages[index1].weight < this.packages[index2].weight;
  }

  getTotalWeight(){
    return this.packages.reduce((totalWeight, pkg) => pkg.weight + totalWeight, 0);
  }

  setDeliveryTimeForPackages(maxSpeed, additionalTime) {
    for(let i= 0; i< this.getNumberOfPackages; i++){
      this.packages[i].deliveryTime = MathUtils.roundoff(additionalTime + parseFloat(this.packages[i].distance)/parseFloat(maxSpeed));
    }
  }

  GetTotalDeliveryTime() {
    let deliveryTime = parseFloat(0);
    for(let i= 0; i< this.getNumberOfPackages; i++){
      if(deliveryTime < this.packages[i].deliveryTime){
        deliveryTime = this.packages[i].deliveryTime;
      }
    }
    return deliveryTime;
  }

  containsPackage(pkg){
    return !!this.packages.some(e => e.id === pkg.id);
  }

  calculateDeliveryCost(){
    for(let i= 0; i< this.getNumberOfPackages; i++){
      this.packages[i].getDeliveryCost();
    }
  }
  convertToPackages(){
    this.formattedPackages = this.packages.map(pkg => pkg.toTimeString());
    return this.formattedPackages;
  }
}

module.exports = PackageList;