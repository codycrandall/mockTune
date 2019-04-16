import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../sass/components/start-new-game/CreateCharacterMenu.scss';
import MenuCollapsed from './MenuCollapsed';
import MenuExpanded from './MenuExpanded';

export default function CreateCharacterMenu(props) {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	CreateCharacterMenu.propTypes = {
		setPlayer: PropTypes.func,
	};

	return (
		<div
			className={'start-new-game'}
			onClick={() => setMenuExpanded(!isMenuExpanded)}
		>
			{!isMenuExpanded && <MenuCollapsed />}
			{isMenuExpanded && (
				<MenuExpanded setPlayer={props.setPlayer} />
			)}
		</div>
	);
}
