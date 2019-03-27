import React from 'React';
import { mount } from 'enzyme';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

import RaceCar from 'Components/RaceCar';
import {expectWrapperHasIcon} from '../../utilities/test-utilities';

describe('RaceCar', () => {
	let raceCar, props, expectedCar, expectedName;

	beforeEach(() => {
		expectedCar = chance.car();
		expectedName = chance.name();

		props = {
			name: expectedName,
			car: expectedCar
		};

		raceCar = mount(<RaceCar {...props} />).find('.racer');
	});

	it('should render racer info before the car icon', () => {
		expect(raceCar.childAt(0).text()).eql(`${expectedName}- ${expectedCar.model}`);
		expectWrapperHasIcon(raceCar.childAt(1), faCarSide);
	})
});
