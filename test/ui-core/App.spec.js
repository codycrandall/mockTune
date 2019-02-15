import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/ui-core/App';
import MenuWrapper from '../../src/ui-core/components/start-new-game/MenuWrapper';

describe('<App/>', () => {
	it('should contain a start new game button', () => {
		const wrapper = mount(<App />);

		expect(wrapper.contains(<MenuWrapper />)).eql(true);
		
		wrapper.unmount();
	});
});
