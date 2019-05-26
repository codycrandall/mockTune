import React from 'react';
import { mount } from 'enzyme';

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
			setShowGarage: sinon.stub()
		};
		chooseCarMenu = mount(<ChooseCarMenu {...props} />);
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
		expect(chooseCarMenu.find('.close').text()).eql('Close')
	});

	it('should call setShowGarage to false when close button is called', () => {
		chooseCarMenu.find('.close').simulate('click');
		expect(props.setShowGarage).calledOnce;
		expect(props.setShowGarage).calledWith(false);
	})
});
