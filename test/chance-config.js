var Chance = require('chance');
var chance = new Chance();

module.exports = chance;

chance.mixin({
	car: () => ({
		make: chance.string(),
		model: chance.string(),
		year: chance.natural(),
		trim: chance.string(),
		horsepower: chance.floating({ min: 1 }),
		'curb-weight': chance.floating({ min: 1 }),
		price: chance.dollar(),
		reliablility: chance.normal()
	})
});
