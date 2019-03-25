import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/ui-core/App';
import CreateCharacterMenu from 'Components/start-new-game/CreateCharacterMenu';
import ChooseCar from 'Components/ChooseCar'

describe('<App/>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<App />);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('should initially render a create character menu', () => {
		expect(
			wrapper.find(CreateCharacterMenu).prop('setNameContext')
		).to.be.a('function');

		expect(wrapper.find(ChooseCar)).lengthOf(0);		
	});

	it('should render a choose car menu if name exists', () => {
		
	});
});
