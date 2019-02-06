import React from 'react';

import '../sass/components/StartNewGame.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function StartNewGame() {
	return (
		<div className={'start-new-game'}>
			Start New Game
			<FontAwesomeIcon icon={faChevronDown} size={'xs'} className={'fa-down'} />
		</div>
	);
}
