import { expect } from 'chai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function assertFontAwesomeIcon(wrapper, icon) {
	const fontAwesome = wrapper.find(FontAwesomeIcon);

	expect(fontAwesome.prop('icon')).eql(icon);
}


module.exports = {
	assertFontAwesomeIcon
}