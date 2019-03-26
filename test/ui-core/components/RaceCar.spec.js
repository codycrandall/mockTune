import React from 'React';
import RaceCar from 'Components/RaceCar';
import { mount } from 'enzyme';

describe('RaceCar', () => {
	let opponent, props, expectedCar, expectedName;

	beforeEach(() => {
		expectedCar = chance.car();
		expectedName = chance.name();

		props = {
			name: expectedName,
			car: expectedCar
		};

		opponent = mount(<RaceCar {...props} />);
	});
	it('should render an opponent', () => {
		expect(opponent.text()).eql(`${expectedName}- ${expectedCar.model}`);
	});
});
