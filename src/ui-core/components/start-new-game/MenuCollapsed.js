import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import '../../sass/components/start-new-game/MenuCollapsed.scss';

export default function MenuCollapsed(props) {
	MenuCollapsed.propTypes = {
		setMenuExpanded: PropTypes.func
	};

	return (
		<div onClick={() => props.setMenuExpanded(true)} className={'menu-collapsed'}>
			<FontAwesomeIcon
				icon={faChevronDown}
				size={'xs'}
				className={`chevron`}
			/>
			Start New Game
		</div>
	);
}
