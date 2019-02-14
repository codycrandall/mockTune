import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
export default function MenuCollapsed(props) {
	MenuCollapsed.propTypes = {
		setMenuExpanded: PropTypes.func
	};

	return (
		<div onClick={() => props.setMenuExpanded(true)}>
			Start New Game
			<FontAwesomeIcon
				icon={faChevronDown}
				size={'xs'}
				className={`chevron`}
			/>
		</div>
	);
}
