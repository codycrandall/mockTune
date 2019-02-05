import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import StartNewGame from '../../../src/ui-core/components/StartNewGame';

describe('<StartNewGame />', () => {
	it('should render the button text', () => {
		const startNewGame = mount(<StartNewGame />);
		expect(startNewGame.text()).eql('Start New Game');
	});

	it.only('should render a font awesome closed icon', () => {
		const fontAwesome = mount(<StartNewGame />).find('.fa-chevron-down');
		expect(fontAwesome.length).eql(1);
	})
});
