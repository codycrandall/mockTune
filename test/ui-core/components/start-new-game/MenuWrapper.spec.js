import React from 'react';
import { mount } from 'enzyme';

import MenuWrapper from '../../../../src/ui-core/components/start-new-game/MenuWrapper';
import {assertFontAwesomeIcon} from '../../../utilities/test-utilities';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
