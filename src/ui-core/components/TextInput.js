import React from 'react';
import PropTypes from 'prop-types';
import '../sass/components/TextInput.scss';

export default function TextInput(props) {

	const{ placeholder, inputValue, setInputValue } = props;

	TextInput.propTypes = {
		placeholder: PropTypes.string,
		inputValue: PropTypes.string,
		setInputValue: PropTypes.func
	};

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
