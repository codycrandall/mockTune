import React, {useState	} from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import CreateCharacterMenu from './components/start-new-game/CreateCharacterMenu';
import {PlayerStore} from '../../src/ui-core/stores/player';
import ChooseCarMenu from './components/ChooseCarMenu';

export default function App() {

	const [nameContext, setNameContext] = useState('');
	const [carContext, setCarContext] = useState('');


	return (
		<React.StrictMode>
			<PlayerStore.Provider value={nameContext}>
				<div className={'wrapper'}>
					{!nameContext && < CreateCharacterMenu
						setNameContext={setNameContext}
					/>}
					{nameContext && <ChooseCarMenu setCarContext={setCarContext}/>}
				</div>
			</PlayerStore.Provider>
		</React.StrictMode>
	);
}
