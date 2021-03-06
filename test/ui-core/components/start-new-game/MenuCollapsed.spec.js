import React from 'react';
import { mount } from 'enzyme';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuCollapsed from '../../../../src/ui-core/components/start-new-game/MenuCollapsed';
import {expectWrapperHasIcon} from '../../../utilities/test-utilities';

describe('<MenuCollapsed />', () => {
	let menuCollapsed;
	
	beforeEach(() => {
		menuCollapsed = mount(<MenuCollapsed />);
	});

	after(() => {
		menuCollapsed.unmount();
	});

	it('should include a down chevron', () => {
		expectWrapperHasIcon(menuCollapsed, faChevronDown);
	});

	it('should render the button with text', () => {
		expect(menuCollapsed.text()).eql('Start New Game');
	});
});
