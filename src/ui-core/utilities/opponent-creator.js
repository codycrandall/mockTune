import Chance from 'chance';
const chance = new Chance();
import cars from '../constants/cars';

const opponent = {
	name: chance.name(),
	car: cars[chance.natural({ min: 0, max: cars.length-1 })]
};

export default opponent;
