import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import MenuExpanded from 'Components/start-new-game/MenuExpanded';
import TextInput from 'Components/TextInput';
import {assertFontAwesomeIcon} from '../../../utilities/test-utilities';

describe('<MenuExpanded />', () => {
	let newGameMenu;

	beforeEach(() => {
		newGameMenu = mount(<MenuExpanded />);
	});

	afterEach(() => {
		newGameMenu.unmount();
	});

	it('should render an open chevron', () => {
		assertFontAwesomeIcon(newGameMenu, faChevronUp);
	});

	it('should render a text input with the text "Player Name"', () => {
		const textInput = newGameMenu.find(TextInput);

		expect(textInput.prop('placeholder')).eql('Player Name');
	});

	it('should render a "GO" button', () => {
		const goButton = newGameMenu.find('button');
		expect(goButton.text()).eql("GO"); 
	});
	
});
