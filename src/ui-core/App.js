import React, { useState } from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import CreateCharacterMenu from './components/start-new-game/CreateCharacterMenu';
import ChooseCarMenu from './components/ChooseCarMenu';
import RaceMenu from './components/RaceMenu';

export default function App() {
	const [player, setPlayer] = useState(null);
	const [car, setCar] = useState('');

	return (
		<React.StrictMode>
			<div className={'wrapper'}>
				{!car && !player && <CreateCharacterMenu setPlayer={setPlayer} />}
				{!car && player && <ChooseCarMenu setCar={setCar} />}
				{car && <RaceMenu playerCar={car} player={player} />}
			</div>
		</React.StrictMode>
	);
}
