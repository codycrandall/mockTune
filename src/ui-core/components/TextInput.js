import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../sass/components/TextInput.scss';

export default function TextInput(props) {
	const [inputValue, setInputValue] = useState('');

	TextInput.propTypes = {
		placeholder: PropTypes.string
	};
	const { placeholder } = props;

	return (
		<input
			type={'text'}
			placeholder={placeholder}
			value={inputValue}
			onChange={event => setInputValue(event.target.value)}
			onClick={event => {
				event.stopPropagation();
			}}
		/>
	);
}
