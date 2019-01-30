import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import StartNewGame from '../../../src/ui-core/components/StartNewGame';

describe('<StartNewGame />', () => {
	it('should render the button text', () => {
		const startNewGame = mount(<StartNewGame />);
		expect(startNewGame.text()).eql('Start New Game');
	});
});
