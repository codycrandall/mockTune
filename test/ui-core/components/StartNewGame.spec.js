import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import StartNewGame from '../../../src/ui-core/components/StartNewGame';

describe('<StartNewGame />', () => {
	let startNewGame;

	beforeEach(() => {
		startNewGame = mount(<StartNewGame />);
	});

	afterEach(() => {
		startNewGame.unmount();
	});

	it('should render the button text', () => {
		expect(startNewGame.text()).eql('Start New Game');
	});

	it('should initially render a closed chevron', () => {
		const fontAwesome = startNewGame.find(FontAwesomeIcon);
		
		expect(fontAwesome.prop('icon')).eql(faChevronDown);
	})
});
