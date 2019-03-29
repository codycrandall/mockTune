import React, { useState } from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import CreateCharacterMenu from './components/start-new-game/CreateCharacterMenu';
import ChooseCarMenu from './components/ChooseCarMenu';
import RaceMenu from './components/RaceMenu';

export default function App() {
	const [name, setName] = useState('');
	const [car, setCar] = useState('');

	return (
		<React.StrictMode>
			<div className={'wrapper'}>
				{!car && !name && <CreateCharacterMenu setName={setName} />}
				{!car && name && <ChooseCarMenu setCar={setCar} />}
				{car && <RaceMenu playerCar={car} playerName={name} />}
			</div>
		</React.StrictMode>
	);
}
