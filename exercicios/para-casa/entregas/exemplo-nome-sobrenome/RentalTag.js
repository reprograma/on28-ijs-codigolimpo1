class RentalTag {
	#name;
	#baseCost;
	#daysThreshold; // the number of days after which the costPerDay is applied
	#costPerDay;

	constructor(name, baseCost, daysThreshold, costPerDay) {
		this.#name = name;
		this.#baseCost = baseCost;
		this.#daysThreshold = daysThreshold;
		this.#costPerDay = costPerDay;
	}

	get name() { return this.#name; }
	get baseCost() { return this.#baseCost; }
    get daysThreshold() { return this.#daysThreshold; } 
	get costPerDay() { return this.#costPerDay; }
}

module.exports = RentalTag;