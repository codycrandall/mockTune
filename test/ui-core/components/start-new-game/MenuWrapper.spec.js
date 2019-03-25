import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import MenuWrapper from 'Components/start-new-game/MenuWrapper';
import MenuCollapsed from 'Components/start-new-game/MenuCollapsed';
import MenuExpanded from 'Components/start-new-game/MenuExpanded';

describe('<MenuWrapper />', () => {
	let menuWrapper;

	beforeEach(() => {
		menuWrapper = mount(<MenuWrapper/>);
	});

	afterEach(() => {
		menuWrapper.unmount();
	});

	it('should initially render MenuCollapsed', () => {
		assertMenuIsClosed();
	});

	it('should switch isMenuExpanded when clicked', () => {
		menuWrapper.find(MenuCollapsed).simulate('click');

		assertMenuIsOpen();

		menuWrapper.find(MenuExpanded).simulate('click');

		assertMenuIsClosed();
	});

	function assertMenuIsOpen() {
		expect(menuWrapper.find(MenuExpanded)).lengthOf(1);
		expect(menuWrapper.find(MenuCollapsed)).lengthOf(0);
	}

	function assertMenuIsClosed() {
		expect(menuWrapper.find(MenuExpanded)).lengthOf(0);
		expect(menuWrapper.find(MenuCollapsed)).lengthOf(1);
	}
});
