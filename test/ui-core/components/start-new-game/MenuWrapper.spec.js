import React from 'react';
import { mount } from 'enzyme';
import {expect} from 'chai';

import MenuWrapper from '../../../../src/ui-core/components/start-new-game/MenuWrapper';
import MenuCollapsed from '../../../../src/ui-core/components/start-new-game/MenuCollapsed';
import MenuExpanded from '../../../../src/ui-core/components/start-new-game/MenuExpanded';

describe('<MenuWrapper />', () => {
	let menuWrapper;

	beforeEach(() => {
		menuWrapper = mount(<MenuWrapper />);
	});

	afterEach(() => {
		menuWrapper.unmount();
	});

	it('should initially render MenuCollapsed', () => {
		expect(menuWrapper.find(MenuCollapsed)).lengthOf(1);
		expect(menuWrapper.find(MenuExpanded)).lengthOf(0);
	});

	it('should render switch isMenuExpanded when clicked', () => {	
		menuWrapper.find(MenuCollapsed).simulate('click');

		expect(menuWrapper.find(MenuExpanded)).lengthOf(1);
		expect(menuWrapper.find(MenuCollapsed)).lengthOf(0);
		
		menuWrapper.find(MenuExpanded).simulate('click');
		
		expect(menuWrapper.find(MenuExpanded)).lengthOf(0);
		expect(menuWrapper.find(MenuCollapsed)).lengthOf(1);
	});


});
