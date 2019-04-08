import React from 'React';
import { mount } from 'enzyme';

import RaceMenu from 'Components/RaceMenu';
import newOpponent from '../../../src/ui-core/utilities/opponent-creator';

describe('RaceMenu', () => {
	let raceMenu,
		props,
		expectedPlayerCar,
		expectedOpponentCar,
		expectedPlayerName,
		expectedOpponentName,
		startRace,
		startLine;

	beforeEach(() => {
		expectedPlayerCar = chance.car();
		expectedPlayerName = chance.name();
		expectedOpponentCar = newOpponent.car;
		expectedOpponentName = newOpponent.name;

		props = {
			playerCar: expectedPlayerCar,
			playerName: expectedPlayerName
		};

		raceMenu = mount(<RaceMenu {...props} />);
		startRace = raceMenu.find('.start-race');
	});

	afterEach(() => {
		raceMenu.unmount();
	});

	it('should render with a car belonging to a player and opponent', () => {
		const startLine = raceMenu.find('.start-line');

		expect(startLine.childAt(1).text()).eql(
			`${expectedPlayerName}- ${expectedPlayerCar.model}`
		);
		expect(startLine.childAt(2).text()).eql(
			`${expectedOpponentName}- ${expectedOpponentCar.model}`
		);
	});

	it('should include a "start race" button', () => {
		expect(startRace.text()).eql('Start Race');
		expect(startRace.prop('onClick')).to.be.a('function');
	});

	it('should include a finish line', () => {
		expect(raceMenu.find('.finish-line').text()).eql('Finish');
	});

	it('should render the start line then the finish line', () => {
		expect(getClassNameForChild(raceMenu, 0)).eql('start-line');
		expect(getClassNameForChild(raceMenu, 1)).eql('finish-line');
	});

	it('should trigger the start to the race', () => {
		expectRaceStarted(false);

		startRace.simulate('click');

		expectRaceStarted(true);
	});

	it('should have the race end when a car gets to the finish line', () => {
		
	})

	function getClassNameForChild(menu, childIndex) {
		return menu
			.find('.race-menu')
			.childAt(childIndex)
			.prop('className');
	}

	function expectRaceStarted(bool) {
		const startLine = raceMenu.find('.start-line');
		expect(startLine.childAt(1).prop('raceStarted')).eql(bool) 
		expect(startLine.childAt(2).prop('raceStarted')).eql(bool) 
	}
});
