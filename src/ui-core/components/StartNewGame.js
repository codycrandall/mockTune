import React, { useState } from 'react';

import '../sass/components/StartNewGame.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TextInput from './TextInput';

export default function StartNewGame() {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	return (
		<div className={'start-new-game'}>
			<div
				className={'start-new-text'}
				onClick={() => setMenuExpanded(!isMenuExpanded)}
			>
				Start New Game
				<FontAwesomeIcon
					icon={isMenuExpanded ? faChevronUp : faChevronDown}
					size={'xs'}
					className={`chevron`}
				/>
			</div>
			{isMenuExpanded && <TextInput placeholder={'Player Name'} />}
		</div>
	);
}
