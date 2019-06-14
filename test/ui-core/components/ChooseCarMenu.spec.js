import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ChooseCarMenu from 'Components/ChooseCarMenu';
import Cars from '../../../src/ui-core/constants/cars';

describe('<ChooseCarMenu/>', () => {
	let chooseCarMenu, props;

	beforeEach(() => {
		props = {
			player: {
				bankBalance: chance.natural({ max: 100000 }),
				car: chance.car()
			},
			setShowPopup: sinon.stub()
		};
		chooseCarMenu = mount(<MemoryRouter><ChooseCarMenu {...props} /></MemoryRouter>);
	});

	after(() => {
		chooseCarMenu.unmount();
	});
	it('should render a list of cars with props', () => {
		const carListLength = Cars.length;
		const carList = chooseCarMenu.find('.car-list');
		expect(carList.children()).lengthOf(carListLength);
	});

	it('should render with a bank balance', () => {
		const bankBalance = chooseCarMenu.find('.bank-balance');

		expect(bankBalance.text()).eql(`Current Bank Balance: $${props.player.bankBalance}`);
	});

	it('should include a close button', () => {
		expect(chooseCarMenu.find('a.close').text()).eql('Close')
		expect(chooseCarMenu.find('a.close').prop('href')).eql('/')
	});
});
