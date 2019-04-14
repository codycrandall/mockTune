import React from 'React';
import { mount } from 'enzyme';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import sinon from 'sinon';

import RaceCar from 'Components/RaceCar';
import { expectWrapperHasIcon } from '../../utilities/test-utilities';

describe('RaceCar', () => {
	let expectedCar, expectedName;

	beforeEach(() => {
		expectedCar = chance.car();
		expectedName = chance.name();
	});

	it('should render a racecar icon', () => {
		const raceCar = render();

		expectWrapperHasIcon(raceCar, faCarSide);
	});

	it('should set amountMoved based off car specs + time', () => {
		expectedCar.horsepower = 1;
		expectedCar['curb-weight'] = 1;
		const clock = sinon.useFakeTimers();
		const raceCar = render({ raceStarted: true });
		
		clock.tick(10);
		raceCar.update();

		// expect(raceCar.prop('style').left).eql('10px');
	});

	function render(overrides) {
		const props = {
			name: expectedName,
			car: expectedCar,
			raceStarted: false
		};

		return mount(<RaceCar {...props} {...overrides} />).childAt(0);
	}
});
