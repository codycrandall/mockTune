import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput(props) {
	
	TextInput.propTypes = {
		placeholder: PropTypes.string
	}
	const {placeholder} = props;

	return <input type={'text'} placeholder={placeholder} />;
}
