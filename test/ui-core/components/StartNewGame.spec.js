import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';

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

	it('should render a font awesome closed icon', () => {
		const fontAwesome = startNewGame.find(FontAwesomeIcon);
		
		expect(fontAwesome).lengthOf(1);
	})
});
