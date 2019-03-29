import React from 'react';
import { mount } from 'enzyme';

import {enterText} from '../../utilities/test-utilities';
import TextInput from 'Components/TextInput'

describe('<TextInput />', () => {
	let props, textInput;
	
	beforeEach(() => {
		props = {
			setInputValue: sinon.stub(),
			placeholder : chance.word()
		}
		textInput = mount(<TextInput {...props} />);
	});

	after(() => {
		textInput.unmount();
	});

	it('should render with props', () => {
		const input = textInput.childAt(0);
		expect(input.prop('placeholder')).eql(props.placeholder);
		expect(input.prop('type')).eql('text');
	});

	it('should not collapse after clicking on the input field', () => {
		textInput.simulate('click');
		expect(textInput).lengthOf(1);
	});

	it('should call setInputValue with text input', () => {
		const expectedText = chance.word();
		enterText(textInput, expectedText);
		
		expect(props.setInputValue).calledOnce;
		expect(props.setInputValue).calledWith(expectedText);
	})
});
