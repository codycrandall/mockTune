import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';


import MainMenu from 'Components/MainMenu';

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

		expect(mainMenu.find('.player-garage').text()).eql('Player\'s Garage: ');
	});

	it('should list a car in the garage if it exists', () => {
		const overrides = { player: { car: chance.car() } };
		const { car } = overrides.player;

		const mainMenu = render(overrides);

		expect(mainMenu.find('.player-garage').text()).eql(`Player\'s Garage: ${car.year} ${car.make} ${car.model} ${car.trim}`);
	});

	it('should include a change name menu', () => {
		expectLinkToMenu('/ChangeNameMenu', 'Change Name');
	});

	it('should include a button that links to the choose car menu', () => {
		expectLinkToMenu('/ChooseCarMenu', 'Open Garage');
	});

	describe('race menu button', () => {
		it('should include a button that links to the start race menu', () => {
			expectLinkToMenu('/RaceMenu', 'Go To Race Menu');
		});

		it('should be disabled when the player has not selected a car', () => {
			const overrides = { player: {} };

			mainMenu = render(overrides);

			expect(mainMenu.find('.go-to-race-menu').text()).eql('Go To Race Menu\n(Requires a vehicle from the garage)');
		});
	});

	function expectLinkToMenu(expectedRoute, expectedTitle) {
		const link = mainMenu.find(`a[href="${expectedRoute}"]`);
		expect(link.text()).eql(expectedTitle);
	}

	function render(overrides = {}) {
		return mount(<MemoryRouter><MainMenu {...props} {...overrides} /></MemoryRouter>);
	}
});
