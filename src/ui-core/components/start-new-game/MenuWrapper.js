import React, { useState } from 'react';

import '../../sass/components/start-new-game/MenuWrapper.scss';
import MenuCollapsed from './MenuCollapsed';
import MenuExpanded from './MenuExpanded';

export default function MenuWrapper() {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	return (
		<div className={'start-new-game'} onClick={() => setMenuExpanded(!isMenuExpanded)}>
			{!isMenuExpanded && <MenuCollapsed />}
			{isMenuExpanded && <MenuExpanded  />}
		</div>
	);
}