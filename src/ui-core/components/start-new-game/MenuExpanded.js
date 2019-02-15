import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import '../../sass/components/start-new-game/MenuExpanded.scss';
import TextInput from '../TextInput';

export default function MenuExpanded(props) {
	MenuExpanded.propTypes = {
		setMenuExpanded: PropTypes.func
	};

	return (
		<div onClick={() => props.setMenuExpanded(false)}>
			<TextInput placeholder={'Player Name'} />
			<FontAwesomeIcon
				icon={faChevronUp}
				size={'xs'}
				className={`chevron`}
			/>
			<button
				onClick={event => {
					event.stopPropagation();
				}}
			>
				GO
			</button>
		</div>
	);
}
