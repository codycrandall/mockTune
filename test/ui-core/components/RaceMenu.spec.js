import React from 'React';
import RaceMenu from 'Components/RaceMenu';
import { mount } from 'enzyme';

describe('RaceMenu', () => {
	it('should render with a car', () => {
		const playerName = chance.name();
		const expectedCar = chance.car();
		const raceMenu = mount(
			<RaceMenu playerCar={expectedCar} playerName={playerName} />
		);

		expect(raceMenu.text()).eql(`${playerName}- ${expectedCar.model}`);
	});
});
