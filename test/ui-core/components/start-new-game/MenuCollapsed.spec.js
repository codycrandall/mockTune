import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuCollapsed from '../../../../src/ui-core/components/start-new-game/MenuCollapsed';
import {assertFontAwesomeIcon} from '../../../utilities/test-utilities';

describe('<MenuCollapsed />', () => {
	let menuCollapsed;
	
	beforeEach(() => {
		menuCollapsed = mount(<MenuCollapsed />);
	});

	afterEach(() => {
		menuCollapsed.unmount();
	});

	it('should render the button with text', () => {
		expect(menuCollapsed.text()).eql('Start New Game');
	});

	it('should render a closed chevron', () => {
		assertFontAwesomeIcon(menuCollapsed, faChevronDown);
	});
});
