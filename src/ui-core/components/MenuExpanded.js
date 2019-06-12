import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import '../sass/components/start-new-game/MenuExpanded.scss';
import TextInput from './TextInput';

export default function MenuExpanded(props) {
	const [inputValue, setInputValue] = useState('');

	MenuExpanded.propTypes = {
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};

	function handleClick(event) {
		event.stopPropagation();

		if (inputValue && inputValue.trim(' ') !== '') {
			props.setPlayer(Object.assign({}, props.player, { name: inputValue }));
		}
	}

	return (
		<div>
			<TextInput
				placeholder={props.player.name || 'Player Name'}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<FontAwesomeIcon
				icon={faChevronUp}
				size={'xs'}
				className={`chevron-up`}
			/>
			<button
				onClick={event => {
					handleClick(event);
				}}
			>
				Set Name
			</button>
		</div>
	);
}
