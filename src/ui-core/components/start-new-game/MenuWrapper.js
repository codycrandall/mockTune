import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../sass/components/start-new-game/MenuWrapper.scss';
import MenuCollapsed from './MenuCollapsed';
import MenuExpanded from './MenuExpanded';

export default function MenuWrapper(props) {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	MenuWrapper.propTypes = {
		setNameContext: PropTypes.func,
	};

	return (
		<div
			className={'start-new-game'}
			onClick={() => setMenuExpanded(!isMenuExpanded)}
		>
			{!isMenuExpanded && <MenuCollapsed />}
			{isMenuExpanded && (
				<MenuExpanded setNameContext={props.setNameContext} />
			)}
		</div>
	);
}
