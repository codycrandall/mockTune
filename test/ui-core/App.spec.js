import React from 'react';
import { mount } from 'enzyme';

import App from 'Src/App';
import MainMenu from 'Src/ui-core/components/start-new-game/MainMenu';

describe('<App/>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<App />);
	});

	after(() => {
		wrapper.unmount();
	});

	it('should render a menu and pass the player hook', () => {
		const mainMenu = wrapper.find(MainMenu);
		expect(mainMenu).lengthOf(1);
		expect(mainMenu.prop('player')).to.be.a('Object');
		expect(mainMenu.prop('setPlayer')).to.be.a('Function');
	});
});