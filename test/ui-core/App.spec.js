import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/ui-core/App';
import CreateCharacterMenu from 'Components/start-new-game/CreateCharacterMenu';
import TextInput from 'Components/TextInput';
import ChooseCarMenu from 'Components/ChooseCarMenu';
import {enterPlayerName} from '../utilities/test-utilities';

describe('<App/>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<App />);
	});

	after(() => {
		wrapper.unmount();
	});

	it('should initially render a create character menu', () => {
		expect(
			wrapper.find(CreateCharacterMenu).prop('setNameContext')
		).to.be.a('function');

		expect(wrapper.find(ChooseCarMenu)).lengthOf(0);		
		expect(wrapper.find(CreateCharacterMenu)).lengthOf(1);		
	});

	it('should render a choose car menu if name exists', () => {
		wrapper.find('.start-new-game').simulate('click');

		const textInput = wrapper.find(TextInput);
		
		enterPlayerName(textInput, chance.name());

		wrapper.find('button').simulate('click');

		expect(wrapper.find(CreateCharacterMenu)).lengthOf(0)
		expect(wrapper.find(ChooseCarMenu)).lengthOf(1);
	});
});
