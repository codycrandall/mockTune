import React, { useState } from 'react';

import '../sass/components/StartNewGame.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TextInput from './TextInput';

export default function StartNewGame() {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	function renderStartNewGameText() {
		return <div className={`start-new-text-${isMenuExpanded}`}>Start New Game</div>;
	}

	return (
		<div className={'start-new-game-menu'}>
			<div
				className={'start-new-game'}
				onClick={() => setMenuExpanded(!isMenuExpanded)}
			>
				{!isMenuExpanded && renderStartNewGameText()}
				<FontAwesomeIcon
					icon={isMenuExpanded ? faChevronUp : faChevronDown}
					size={'xs'}
					className={`chevron`}
				/>
			</div>
			{isMenuExpanded && <TextInput placeholder={'Player Name'} />}
			{isMenuExpanded && renderStartNewGameText()}
		</div>
	);
}
