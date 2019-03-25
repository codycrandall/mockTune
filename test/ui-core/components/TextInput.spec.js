import chai, { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Chance from 'chance';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import TextInput from 'Components/TextInput'

describe('<TextInput />', () => {
	let props, textInput;
	const chance = new Chance; 
	
	beforeEach(() => {
		props = {
			setInputValue: sinon.stub(),
			placeholder : chance.word()
		}
		textInput = mount(<TextInput {...props} />);
	});

	afterEach(() => {
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
		const event = { target: { value: expectedText } };

		textInput.simulate('change', event);

		expect(props.setInputValue).calledOnce;
		expect(props.setInputValue).calledWith(expectedText);
	})
});
