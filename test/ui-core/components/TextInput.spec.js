import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Chance from 'chance';

import TextInput from '../../../src/ui-core/components/TextInput'

describe('<TextInput />', () => {
	let props, textInput;
	const chance = new Chance; 
	
	beforeEach(() => {
		props = {
			placeholder : chance.word()
		}
		textInput = mount(<TextInput {...props} />);
	});
	it('should render with a placeholder', () => {
		const input = textInput.childAt(0);
		expect(input.prop('placeholder')).eql(props.placeholder);
	})

	it('should add input values to the state', () => {
		const expectedValue = chance.word();
		const event = { target: { value: expectedValue } };
		
		textInput.simulate('change', event);
		
		const inputValue = textInput.childAt( 0 ).prop( 'value' );

		expect(inputValue).eql(expectedValue);
	})
});
