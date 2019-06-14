import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../sass/components/ChangeName.scss';
import TextInput from './TextInput';
import StyledButton from './StyledButton';

export default function ChangeName(props) {
	const [inputValue, setInputValue] = useState('');

	ChangeName.propTypes = {
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};

	function setName() {
		if (inputValue && inputValue.trim(' ') !== '') {
			props.setPlayer(Object.assign({}, props.player, { name: inputValue }));
		}
	}

	function renderCloseLink(children) {
		return (
			<Link to='/'>{children}</Link>
		)
	}

	return (
		<div className={'change-name-menu'}>
			<TextInput
				placeholder={props.player.name || 'Player Name'}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			{renderCloseLink(
				<StyledButton onClick={setName()}>Save</StyledButton>
			)}
			<StyledButton>{renderCloseLink('Close without saving')}</StyledButton>
		</div >
	);
}
