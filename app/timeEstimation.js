const Package = require("../Beans/Package.js");
const PackageList = require("../Beans/PackageList.js");
const Vehicle = require("../Beans/Vehicle.js");
const PackageUtils = require("../Utils/packageUtils.js");

exports.calculate = function (packages, vehicles){
  let allPackages = PackageUtils.sortPackages(packages);

  let packageGroups = getPackagesGroups(vehicles.maxLoad, allPackages);
  let index = 0;
  while (true) {
    if (packageGroups.length === index {
      break;
    }
    for (let vIndex = 0; vIndex < vehicles.length; vIndex++) {
      packageGroups[index].setDeliveryTimeForPackages(vehicles[vIndex].maxSpeed, vehicles[vIndex].nextDeliveryTime);
      vehicles[vIndex].setNextDeliveryTime(packageGroups[index].GetTotalDeliveryTime())
      index++;
    }
    vehicles = PackageUtils.sortvehicles(vehicles);
  }

  return packageGroups.ConvertToPackages();
}

//this returns packageList
const getPackagesGroups = function (maxLoad, allPackages){
  let retVal = new PackageList();

  return retVal;
}