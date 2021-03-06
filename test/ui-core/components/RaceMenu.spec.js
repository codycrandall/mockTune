import React from 'react';
import { mount } from 'enzyme';

import RaceMenu from 'Components/RaceMenu';
import opponent from '../../../src/ui-core/utilities/opponent-creator';

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
		expectedOpponentCar = opponent.car;
		expectedOpponentName = opponent.name;

		props = {
			player: { car: expectedPlayerCar, name: expectedPlayerName }
		};

		raceMenu = mount(<RaceMenu {...props} />);
		startRace = raceMenu.find('.start-race');
	});

	afterEach(() => {
		raceMenu.unmount();
	});

	it('should render with a car belonging to a player and opponent', () => {
		expectCompetitorInfoAtIndex(expectedPlayerName, expectedPlayerCar, 0);
		expectCompetitorInfoAtIndex(
			expectedOpponentName,
			expectedOpponentCar,
			1
		);
	});

	it('should include a "start race" button', () => {
		expect(startRace.text()).eql('Start Race');
		expect(startRace.prop('onClick')).to.be.a('function');
	});

	it('should include a finish line', () => {
		expect(raceMenu.find('.finish-line').text()).eql('Finish');
	});

	it('should render the start line , then the winner text, then the finish line', () => {
		expect(getClassNameForChild(raceMenu, 0)).eql('start-line');
		expect(getClassNameForChild(raceMenu, 1)).eql('winner-text');
		expect(getClassNameForChild(raceMenu, 2)).eql('finish-line');
	});

	it('should trigger the start to the race', () => {
		expectRaceStarted(false);

		startRace.simulate('click');

		expectRaceStarted(true);
	});

	function getClassNameForChild(menu, childIndex) {
		return menu
			.find('.race-menu')
			.childAt(childIndex)
			.prop('className');
	}

	function expectRaceStarted(bool) {
		expect(
			raceMenu
				.find('RaceCar')
				.first()
				.prop('raceInProgress')
		).eql(bool);
	}

	function expectCompetitorInfoAtIndex(expectedName, expectedCar, index) {
		const competitors = raceMenu.find('.competitors');

		expect(competitors.childAt(index).text()).eql(
			`${expectedName}- ${expectedCar.make} ${expectedCar.model}`
		);
	}
});
