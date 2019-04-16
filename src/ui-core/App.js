import React, { useState } from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import CreateCharacterMenu from './components/start-new-game/CreateCharacterMenu';
import ChooseCarMenu from './components/ChooseCarMenu';
import RaceMenu from './components/RaceMenu';

export default function App() {
	const [player, setPlayer] = useState({bankBalance: 2000});

	return (
		<React.StrictMode>
			<div className={'wrapper'}>
				{!player.car && !player.name && <CreateCharacterMenu setPlayer={setPlayer} />}
				{!player.car && player.name && <ChooseCarMenu setPlayer={setPlayer} player={player}/>}
				{player.car && <RaceMenu playerCar={player.car} player={player} />}
			</div>
		</React.StrictMode>
	);
}
