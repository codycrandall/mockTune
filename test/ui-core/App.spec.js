import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/ui-core/App';
import MenuWrapper from '../../src/ui-core/components/start-new-game/MenuWrapper';

describe('<App/>', () => {
	it('should contain a menu wrapper', () => {
		const wrapper = mount(<App />);

		expect(wrapper.find(MenuWrapper).prop('setNameContext')).to.be.a('function');
		wrapper.unmount();
	});
});
