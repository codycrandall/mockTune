import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/ui-core/App';
import CreateCharacterMenu from 'Components/start-new-game/CreateCharacterMenu';
import TextInput from 'Components/TextInput';
import ChooseCarMenu from 'Components/ChooseCarMenu';
import {enterText} from '../utilities/test-utilities';
import RaceMenu from 'Components/RaceMenu';

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
			wrapper.find(CreateCharacterMenu).prop('setName')
		).to.be.a('function');

		expect(wrapper.find(ChooseCarMenu)).lengthOf(0);		
		expect(wrapper.find(CreateCharacterMenu)).lengthOf(1);		
	});

	it('should render a choose car menu if name exists', () => {
		wrapper.find('.start-new-game').simulate('click');

		const textInput = wrapper.find(TextInput);
		
		enterText(textInput, chance.name());

		wrapper.find('button').simulate('click');

		expect(wrapper.find(CreateCharacterMenu)).lengthOf(0)
		expect(wrapper.find(ChooseCarMenu)).lengthOf(1);
	});

	it('should render a race menu if a car is chosen', () => {
		wrapper.find('.start-new-game').simulate('click');

		const textInput = wrapper.find(TextInput);
		
		enterText(textInput, chance.name());

		wrapper.find('button').simulate('click');

		wrapper.find('.car').first().simulate('click');

		expect(wrapper.find(RaceMenu)).lengthOf(1);
		expect(wrapper.find(ChooseCarMenu)).lengthOf(0);
	});
});
