import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../sass/components/start-new-game/ChangeNameMenu.scss';
import MenuExpanded from './MenuExpanded';

export default function ChangeNameMenu(props) {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	ChangeNameMenu.propTypes = {
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};

	return (
		<div
			className={'change-player-name'}
			onClick={() => setMenuExpanded(!isMenuExpanded)}
		>
			{!isMenuExpanded && 'Set Player Name'}
			{isMenuExpanded && (
				<MenuExpanded setPlayer={props.setPlayer} player={props.player} />
			)}
		</div>
	);
}
