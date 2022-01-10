const CONSTS = require("./Constants.js")

const Offers = {
    ZERO: {
        minDistance: 0,
        maxDistance: Number.MAX_SAFE_INTEGER,
        minWeight: 0,
        maxWeight: Number.MAX_SAFE_INTEGER,
        value: ((CONSTS.HUNDRED - 0) / CONSTS.HUNDRED)
    },
    OFR001 : {
        minDistance: 0,
        maxDistance: 200,
        minWeight: 70,
        maxWeight: 200,
        value: ((CONSTS.HUNDRED - 10) / CONSTS.HUNDRED)
    },
    OFR002 : {
        minDistance: 50,
        maxDistance: 150,
        minWeight: 100,
        maxWeight: 250,
        value: ((CONSTS.HUNDRED - 7) / 100)
    },
    OFR003 : {
        minDistance: 50,
        maxDistance: 250,
        minWeight: 10,
        maxWeight: 150,
        value: ((CONSTS.HUNDRED - 5) / 100)
    }
};

module.exports = Offers;