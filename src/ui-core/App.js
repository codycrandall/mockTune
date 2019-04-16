import React, { useState } from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import CreateCharacterMenu from './components/start-new-game/CreateCharacterMenu';
import ChooseCarMenu from './components/ChooseCarMenu';
import RaceMenu from './components/RaceMenu';

export default function App() {
	const [player, setPlayer] = useState({bankBalance: 2000});
	const [car, setCar] = useState('');

	return (
		<React.StrictMode>
			<div className={'wrapper'}>
				{!car && !player.name && <CreateCharacterMenu setPlayer={setPlayer} />}
				{!car && player.name && <ChooseCarMenu setCar={setCar} />}
				{car && <RaceMenu playerCar={car} player={player} />}
			</div>
		</React.StrictMode>
	);
}
