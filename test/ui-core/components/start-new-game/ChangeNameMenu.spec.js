import React from 'react';
import { mount } from 'enzyme';

import ChangeNameMenu from 'Components/start-new-game/ChangeNameMenu';
import MainMenu from 'Components/start-new-game/MainMenu';
import MenuExpanded from 'Components/start-new-game/MenuExpanded';

describe('<ChangeNameMenu />', () => {
	let changeNameMenu;

	beforeEach(() => {
		changeNameMenu = mount(<ChangeNameMenu />);
	});

	after(() => {
		changeNameMenu.unmount();
	});

	it('', () => {
		
	});

	// it('should initially render MainMenu', () => {
	// 	assertMenuIsClosed();
	// });

	// it('should switch isMenuExpanded when clicked', () => {
	// 	changeNameMenu.find(MainMenu).simulate('click');

	// 	assertMenuIsOpen();

	// 	changeNameMenu.find(MenuExpanded).simulate('click');

	// 	assertMenuIsClosed();
	// });

	// function assertMenuIsOpen() {
	// 	expect(changeNameMenu.find(MenuExpanded)).lengthOf(1);
	// 	expect(changeNameMenu.find(MainMenu)).lengthOf(0);
	// }

	// function assertMenuIsClosed() {
	// 	expect(changeNameMenu.find(MenuExpanded)).lengthOf(0);
	// 	expect(changeNameMenu.find(MainMenu)).lengthOf(1);
	// }
});
