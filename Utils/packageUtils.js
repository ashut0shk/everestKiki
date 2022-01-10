exports.sortPackages = function (packages) {
  return packages.sort((a, b) => a.weight > b.weight && 1 || -1)
}

exports.sortvehicles = function (vehicles) {
  return vehicles.sort((a, b) => a.nextDeliveryTime < b.nextDeliveryTime && 1 || -1)
}