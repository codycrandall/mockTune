import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Chance from 'chance';

import TextInput from '../../../src/ui-core/components/TextInput'

describe.only('<TextInput />', () => {
	it('should render with a placeholder', () => {
		const chance = new Chance; 
		
		const props = {
			placeholder : chance.paragraph()
		}
		const textInput = mount(<TextInput {...props} />).childAt(0);

		expect(textInput.prop('placeholder')).eql(props.placeholder);
	})
});
