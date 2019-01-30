import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/ui-core/App';
import StartNewGame from '../../src/ui-core/components/StartNewGame';

describe('<App/>', () => {
	it('should contain a start new game button', () => {
		const wrapper = mount(<App />);

		expect(wrapper.contains(<StartNewGame />)).eql(true);
	});
});
