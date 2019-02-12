import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput(props) {
	
	TextInput.propTypes = {
		placeholder: PropTypes.string,
		value: PropTypes.string
	}
	const {placeholder, value} = props;

	return <input type={'text'} placeholder={placeholder} value={value}/>;
}
