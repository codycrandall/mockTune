import React from 'React';
import { mount } from 'enzyme';

import RaceMenu from 'Components/RaceMenu'
import newOpponent from '../../../src/ui-core/utilities/opponent-creator';

describe('RaceMenu', () => {
	let raceMenu,
		props,
		expectedPlayerCar,
		expectedOpponentCar,
		expectedPlayerName,
		expectedOpponentName;

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
});
