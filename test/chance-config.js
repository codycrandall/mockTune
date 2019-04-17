var Chance = require('chance');
var chance = new Chance();

module.exports = chance;

chance.mixin({
	car: (overrides= {}) => ({
		make: chance.word(),
		model: chance.word(),
		year: chance.natural(),
		trim: chance.string(),
		horsepower: chance.floating({ min: 1 }),
		'curb-weight': chance.floating({ min: 1 }),
		price: chance.natural(),
		vin:0, reliability:  chance.normal(),
		...overrides
	})
});
