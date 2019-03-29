import React from 'React';
import { mount } from 'enzyme';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

import RaceCar from 'Components/RaceCar';
import { expectWrapperHasIcon } from '../../utilities/test-utilities';

describe('RaceCar', () => {
	let raceCarWrapper, props, expectedCar, expectedName;

	beforeEach(() => {
		expectedCar = chance.car();
		expectedName = chance.name();

		props = {
			name: expectedName,
			car: expectedCar
		};

		raceCarWrapper = mount(<RaceCar {...props} />);
	});

	afterEach(() => {
		raceCarWrapper.unmount();
	});

	it('should render racer info before the car icon', () => {
		const raceCar= raceCarWrapper.childAt(0);
		
		expect(raceCar.childAt(0).text()).eql(
			`${expectedName}- ${expectedCar.model}`
		);
		
		expectWrapperHasIcon(raceCar.childAt(1), faCarSide);
	});
});
