import React from 'react';
import { mount } from 'enzyme';

import CreateCharacterMenu from 'Components/start-new-game/CreateCharacterMenu';
import MenuCollapsed from 'Components/start-new-game/MenuCollapsed';
import MenuExpanded from 'Components/start-new-game/MenuExpanded';

describe('<CreateCharacterMenu />', () => {
	let createCharacterMenu;

	beforeEach(() => {
		createCharacterMenu = mount(<CreateCharacterMenu/>);
	});

	after(() => {
		createCharacterMenu.unmount();
	});

	it('should initially render MenuCollapsed', () => {
		assertMenuIsClosed();
	});

	it('should switch isMenuExpanded when clicked', () => {
		createCharacterMenu.find(MenuCollapsed).simulate('click');

		assertMenuIsOpen();

		createCharacterMenu.find(MenuExpanded).simulate('click');

		assertMenuIsClosed();
	});

	function assertMenuIsOpen() {
		expect(createCharacterMenu.find(MenuExpanded)).lengthOf(1);
		expect(createCharacterMenu.find(MenuCollapsed)).lengthOf(0);
	}

	function assertMenuIsClosed() {
		expect(createCharacterMenu.find(MenuExpanded)).lengthOf(0);
		expect(createCharacterMenu.find(MenuCollapsed)).lengthOf(1);
	}
});
