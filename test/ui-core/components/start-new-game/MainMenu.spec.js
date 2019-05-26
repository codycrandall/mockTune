import React from 'react';
import { mount } from 'enzyme';

import MainMenu from 'Components/start-new-game/MainMenu';
import ChangeNameMenu from 'Components/start-new-game/ChangeNameMenu';
import ChooseCarMenu from 'Components/ChooseCarMenu';

describe('<MainMenu />', () => {
	let mainMenu, props;

	beforeEach(() => {
		props = {
			player: {
				bankBalance: chance.natural({ max: 100000 }),
				name: chance.name(),
				car: chance.car()
			},
			setPlayer: sinon.stub()
		};

		mainMenu = render();
	});

	afterEach(() => {
		mainMenu.unmount();
	});

	it('should render the the main menu text', () => {
		expect(mainMenu.find('.main-menu-text').text()).eql('MAIN MENU');
	});

	it('should include a player name', () => {
		expect(mainMenu.find('.player-name').text()).eql(`Player Name: ${props.player.name}`)
	});

	it('should include a bank balance', () => {
		const bankBalance = mainMenu.find('.bank-balance');

		expect(bankBalance.text()).eql(`Bank Balance: $${props.player.bankBalance}`);
	});

	it('should list no cars for the players garage', () => {
		const overrides = { player: {} };

		const mainMenu = render(overrides);

		expect(mainMenu.find('.player-garage')).lengthOf(0);
	});

	it('should list a car in the garage if it exists', () => {
		const overrides = { player: { car: chance.car() } };
		const { car } = overrides.player;

		const mainMenu = render(overrides);

		expect(mainMenu.find('.player-garage').text()).eql(`Player\'s Garage: ${car.year} ${car.make} ${car.model} ${car.trim}`);
	});

	it('should include a change name menu', () => {
		expectMenuToContain(ChangeNameMenu);
		expectPlayerPropToBePresent(ChangeNameMenu);
		expectSetPlayerPropToBePresent(ChangeNameMenu);

	});

	it('should include a button that links to the choose car menu', () => {
		expectMenuToContain('.link-to-car-menu');
	});

	it('should initially not render the garage', () => {
		expect(mainMenu.find(ChooseCarMenu)).lengthOf(0);
	});

	it('should render the garage after the "open garage" button has been clicked', () => {
		mainMenu.find('.link-to-car-menu').simulate('click');
		expectMenuToContain(ChooseCarMenu);
	})

	it('should not render the main menu if the open garage menu has been clicked', () => {
		mainMenu.find('.link-to-car-menu').simulate('click');
		expect(mainMenu.find('.main-menu')).lengthOf(0);
	});

	describe('race menu button', () => {
		it('should include a button that links to the start race menu', () => {
			expect(mainMenu.find('.go-to-race-menu').text()).eql('Go To Race Menu')
		});

		it('should be disabled when the player has not selected a car', () => {
			const overrides = { player: {} };

			const mainMenu = render(overrides);

			expect(mainMenu.find('.go-to-race-menu').prop('disabled')).eql(true);
		});

		it('should not be disabled when the player has selected a car', () => {
			const overrides = { player: { car: chance.string() } };

			mainMenu = render(overrides);

			expect(mainMenu.find('.go-to-race-menu').prop('disabled')).eql(false);
		});
	});

	function render(overrides = {}) {
		return mount(<MainMenu {...props} {...overrides} />);
	}

	function expectPlayerPropToBePresent(wrapper) {
		const component = mainMenu.find(wrapper);
		expect(component.prop('player')).to.be.a('Object');
	}

	function expectSetPlayerPropToBePresent(wrapper) {
		const component = mainMenu.find(wrapper);
		expect(component.prop('setPlayer')).to.be.a('Function');
	}

	function expectMenuToContain(target) {
		expect(mainMenu.find(target)).lengthOf(1);
	}
});
