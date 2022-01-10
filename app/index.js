//sample input

//100 4
// PKG1 5 5 OFR001
// PKG2 15 5 OFR002
// PKG3 10 100 OFR003
// PKG4 13 9

const readline = require('readline');

const Package = require("../Beans/Package.js");
const Vehicle = require("../Beans/Vehicle.js");
const VehicleList = require("../Beans/VehicleList.js");

const timeEstimation = require('./timeEstimation.js'),

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let isFirst = true, lines = [];

lineReader.on('line', function(line) {
  let lineStr = line.toString().trim();
  if (lineStr.length) {
      lines.push(lineStr);
  } else {
      packageInfo = init(lines);
      lineReader.close();
      // lineReader.removeAllListeners()
  }
}).on('close', function() {
    packageInfo.forEach(pkg => console.log(pkg.toString()));
});

const init = function (lines) {

  let packages = [], baseDeliveryCost  = 0, countPackages = 0, vehicleList = new VehicleList(), vehicles = [];
  if(isFirst){
    isFirst = false;
    let firstLine = lines.shift();
    [baseDeliveryCost, countPackages] = firstLine.split(" ").map(it => parseInt(it.trim()));
  }


  if(countPackages + 1 === lines.length){ //vehicle information is provided
    let [countVehicles, maxSpeed, maxCarriageWeight] = lines.pop().split(" ").map(it => parseInt(it.trim()));
    vehicles = vehicleList.newVehicle(countVehicles, maxSpeed, maxCarriageWeight);
  }

  for (var i = 0; i < countPackages; i++) {
    let [pkgId, pkgWeight, pkgDistance, pkgOffer] = lines[i].split(" ").map(strVal => strVal.trim());
    let thisPackage = new Package(baseDeliveryCost, pkgId, pkgWeight, pkgDistance, pkgOffer);
    packages.push(thisPackage);
  }

  if (!vehicles.length){
    //problem statement 1
    return packages;

  }else {
    //problem statement 2
    return timeEstimation.calculate(packages, vehicles);
  }

}
