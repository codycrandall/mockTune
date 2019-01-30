import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import StartNewGame from '../../../src/ui-core/components/StartNewGame';

describe('<StartNewGame />', () => {
	it.only('should render ', () => {
		const startNewGame = mount(<StartNewGame />);
		console.log(startNewGame.debug());
		expect(startNewGame.contains(<div className="start-new-game" />)).eql(true);
	});
});
