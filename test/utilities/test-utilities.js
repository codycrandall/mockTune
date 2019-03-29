import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function expectWrapperHasIcon(wrapper, icon) {
	const fontAwesome = wrapper.find(FontAwesomeIcon);

	expect(fontAwesome.prop('icon')).eql(icon);
}

function enterText(input, inputValue) {
	const event = { target: { value: inputValue } };

	input.simulate('change', event);
}

module.exports = {
	enterText,
	expectWrapperHasIcon
};
