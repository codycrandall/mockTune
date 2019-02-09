import React, { useState } from 'react';

import '../sass/components/StartNewGame.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function StartNewGame() {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	return (
		<div
			className={'start-new-game'}
			onClick={() => setMenuExpanded(!isMenuExpanded)}
		>
			Start New Game
			<FontAwesomeIcon
				icon={isMenuExpanded ? faChevronUp : faChevronDown}
				size={'xs'}
				className={`chevron`}
			/>
		</div>
	);
}
