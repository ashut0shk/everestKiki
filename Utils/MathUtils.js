class MathUtils{

	roundoff(floatingVal) {
		return parseFloat(Math.Floor(parseFloat(floatingVal)*parseFloat(100)) / 100);
	}
}

module.exports = MathUtils;