/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
	// ✨ implement
	const newObj = { ...obj };
	Object.keys(newObj).map(keys => (newObj[keys] = newObj[keys].trim()));
	return newObj;
}

// console.log(trimProperties({ name: '  jane   ' }));

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
	// ✨ implement

	const newObj = { ...obj };
	Object.keys(newObj).map(keys => (newObj[keys] = newObj[keys].trim()));
	return newObj;
}

// console.log(trimPropertiesMutation({ name: '  jane  ' }));
/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of integers
 * @param {number[]} integers - an array of integers
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([2, 1, 7, 3, 14, 7]) // returns 14
 */
function findLargestInteger(integers) {
	// ✨ implement
	let largestInt = 0;
	for (let i = 0; i < integers.length; i++) {
		if (integers[i] > largestInt) {
			largestInt = integers[i];
		}
	}
	return largestInt;
}

// console.log(findLargestInteger([2, 1, 7, 3, 14, 7]));

class Counter {
	/**
	 * [Exercise 4A] Counter creates a counter
	 * @param {number} initialNumber - the initial state of the count
	 */
	constructor(initialNumber) {
		// ✨ initialize whatever properties are needed
		this.count = initialNumber + 1;
	}

	/**
	 * [Exercise 4B] Counter.prototype.countDown counts down to zero
	 * @returns {number} - the next count, does not go below zero
	 *
	 * EXAMPLE
	 * const counter = new Counter(3)
	 * counter.countDown() // returns 3
	 * counter.countDown() // returns 2
	 * counter.countDown() // returns 1
	 * counter.countDown() // returns 0
	 * counter.countDown() // returns 0
	 */
	countDown() {
		// ✨ implement
		this.count--;
		return this.count > 0 ? this.count : 0;
	}
}

// const counter = new Counter(3);
// console.log(counter.countDown());
// console.log(counter.countDown());
// console.log(counter.countDown());
// console.log(counter.countDown());
// console.log(counter.countDown());

class Seasons {
	/**
	 * [Exercise 5A] Seasons creates a seasons object
	 */
	constructor() {
		// ✨ initialize whatever properties are needed
		this.seasons = ['summer', 'fall', 'winter', 'spring'];
		this.i = -1;
	}

	/**
	 * [Exercise 5B] Seasons.prototype.next returns the next season
	 * @returns {string} - the next season starting with "summer"
	 *
	 * EXAMPLE
	 * const seasons = new Seasons()
	 * seasons.next() // returns "summer"
	 * seasons.next() // returns "fall"
	 * seasons.next() // returns "winter"
	 * seasons.next() // returns "spring"
	 * seasons.next() // returns "summer"
	 */
	next() {
		// ✨ implement
		this.i === 3 ? (this.i = 0) : this.i++;
		return this.seasons[this.i];
	}
}

// const seasons = new Seasons();
// console.log(seasons.next()); // returns "summer"
// console.log(seasons.next()); // returns "fall"
// console.log(seasons.next()); // returns "winter"
// console.log(seasons.next()); // returns "spring"
// console.log(seasons.next()); // returns "summer"

class Car {
	/**
	 * [Exercise 6A] Car creates a car object
	 * @param {string} name - the name of the car
	 * @param {number} tankSize - capacity of the gas tank in gallons
	 * @param {number} mpg - miles the car can drive per gallon of gas
	 */
	constructor(name, tankSize, mpg) {
		this.odometer = 0; // car initilizes with zero miles
		this.tank = tankSize; // car initiazes full of gas
		// ✨ initialize whatever other properties are needed
		this.name = name;
		this.mpg = mpg;
		this.capacity = this.tank;
	}

	/**
	 * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
	 * @param {string} distance - the distance we want the car to drive
	 * @returns {number} - the updated odometer value
	 *
	 * EXAMPLE
	 * const focus = new Car('focus', 20, 30)
	 * focus.drive(100) // returns 100
	 * focus.drive(100) // returns 200
	 * focus.drive(100) // returns 300
	 * focus.drive(200) // returns 500
	 * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
	 */
	drive(distance) {
		// ✨ implement

		this.tank = this.tank - distance / this.mpg;
		const MilesInFullTank = this.tank * this.mpg;

		if (this.tank <= 0) {
			return [
				`Odometer: ${
					MilesInFullTank <= -1
						? this.odometer + Math.round(distance % MilesInFullTank)
						: (this.odometer += distance)
				}`,
				`Tank:  ${(this.tank = 0)}`
			];
		} else {
			return [
				`Odometer:  ${(this.odometer += distance)}`,
				'Tank: ' + this.tank,
				`You still have ${Math.round(this.tank * this.mpg)} miles to go`
			];
		}
	}

	/**
	 * [Exercise 6C] Adds gallons to the tank
	 * @param {number} gallons - the gallons of fuel we want to put in the tank
	 * @returns {number} - the miles that can be driven after refueling
	 *
	 * EXAMPLE
	 * const focus = new Car('focus', 20, 30)
	 * focus.drive(600) // returns 600
	 * focus.drive(1) // returns 600 (no distance driven as tank is empty)
	 * focus.refuel(99) // returns 600 (tank only holds 20)
	 */
	refuel(gallons) {
		// ✨ implement

		if (this.tank + gallons > this.capacity) {
			return `Tank: ${(this.tank = this.capacity)}`;
		} else {
			return `Tank: ${(this.tank += gallons)}`;
		}
	}
}

// const focus = new Car('focus', 20, 30);
// console.log(focus.drive(600)); // returns 600
// console.log(focus.drive(1)); // returns 600 (no distance driven as tank is empty)
// console.log(focus.refuel(99)); // returns 600 (tank only holds 20)

// const focus = new Car('focus', 20, 30);
// console.log(focus.drive(100)); // returns 100
// console.log(focus.drive(100)); // returns 200
// console.log(focus.drive(100)); // returns 300
// console.log(focus.drive(200)); // returns 500
// console.log(focus.drive(200)); // returns 600 (ran out of gas after 100 miles)

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
	// ✨ implement
	if (!number || typeof number !== 'number') {
		return 'number must be a number';
	}

	if (number % 2 === 0) {
		return true;
	}

	return false;
}

module.exports = {
	trimProperties,
	trimPropertiesMutation,
	findLargestInteger,
	isEvenNumberAsync,
	Counter,
	Seasons,
	Car
};
