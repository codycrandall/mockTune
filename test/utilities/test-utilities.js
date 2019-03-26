import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function assertFontAwesomeIcon(wrapper, icon) {
	const fontAwesome = wrapper.find(FontAwesomeIcon);

	expect(fontAwesome.prop('icon')).eql(icon);
}

function enterPlayerName(input, inputValue) {
	const event = { target: { value: inputValue } };

	input.simulate('change', event);
}

module.exports = {
	enterPlayerName,
	assertFontAwesomeIcon
};
