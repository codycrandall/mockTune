import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../../sass/components/start-new-game/MenuCollapsed.scss';

export default function MenuCollapsed() {

	return (
		<div className={'menu-collapsed'}>
			<FontAwesomeIcon
				icon={faChevronDown}
				size={'xs'}
				className={`chevron-down`}
			/>
			Start New Game
		</div>
	);
}
