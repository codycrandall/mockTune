import React, { useState } from 'react';

import '../../sass/components/MenuWrapper.scss';
import MenuCollapsed from './MenuCollapsed';
import MenuExpanded from './MenuExpanded';

export default function MenuWrapper() {
	const [isMenuExpanded, setMenuExpanded] = useState(false);

	return (
		<div className={'start-new-game'}>

			{!isMenuExpanded && <MenuCollapsed setMenuExpanded={setMenuExpanded} />}
			{isMenuExpanded && <MenuExpanded setMenuExpanded={setMenuExpanded} />}
		</div>
	);
}