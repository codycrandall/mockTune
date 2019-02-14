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

	it('should display a closed chevron by default', () => {
		assertFontAwesomeIcon(menuWrapper, faChevronDown);
	});
});
