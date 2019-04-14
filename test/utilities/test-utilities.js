import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function expectWrapperHasIcon(wrapper, icon) {
	const fontAwesome = wrapper.find(FontAwesomeIcon);

	expect(fontAwesome.prop('icon')).eql(icon);
}

export function enterText(input, inputValue) {
	const event = { target: { value: inputValue } };

	input.simulate('change', event);
}
