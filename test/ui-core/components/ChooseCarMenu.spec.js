import React from 'react';
import { mount } from 'enzyme';

import ChooseCarMenu from 'Components/ChooseCarMenu';
import Cars from '../../../src/ui-core/constants/cars';

describe('<ChooseCarMenu/>', () => {
	let cars, chooseCarMenu;

	

	beforeEach(() => {
		chooseCarMenu = mount(<ChooseCarMenu/>);
		cars = chooseCarMenu.find('div').children();
	});

	after(() => {
		chooseCarMenu.unmount();
	});
	it('should render a list of cars', () => {
		const carListLength = Cars.length;

		expect(cars).lengthOf(carListLength);
	});
});
