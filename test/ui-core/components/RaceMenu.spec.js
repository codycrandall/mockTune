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
		startRace;

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

	it('should render with a car belonging to a player', () => {
		expect(raceMenu.find('.player').text()).eql(
			`${expectedPlayerName}- ${expectedPlayerCar.model}`
		);
	});

	it('should render a car belonging to an opponent', () => {
		expect(raceMenu.find('.opponent').text()).eql(
			`${expectedOpponentName}- ${expectedOpponentCar.model}`
		);
	});

	it('should include a "start race" button', () => {
		expect(startRace.text()).eql('Start Race');
		expect(startRace.prop('onClick')).to.be.a('function');
	});

	it('should render the finish line, then the player, then the opponent, then the start/stop race button', () => {
		expect(getClassNameForChild(0)).eql('player');
		expect(getClassNameForChild(1)).eql('opponent');
		expect(getClassNameForChild(2)).eql('start-race');
	});

	it('should trigger the start to the race', () => {
		expect(raceMenu.find('.player').prop('raceStarted')).eql(false);
		expect(raceMenu.find('.opponent').prop('raceStarted')).eql(false);
		startRace.simulate('click');
		expect(raceMenu.find('.player').prop('raceStarted')).eql(true);
		expect(raceMenu.find('.opponent').prop('raceStarted')).eql(true);
	});

	function getClassNameForChild(childIndex) {
		return raceMenu
			.find('.race-menu')
			.childAt(childIndex)
			.prop('className');
	}
});
