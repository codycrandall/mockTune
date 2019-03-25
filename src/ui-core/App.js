import React, {useState	} from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import CreateCharacterMenu from './components/start-new-game/CreateCharacterMenu';
import {PlayerStore} from '../../src/ui-core/stores/player';

export default function App() {

	const [nameContext, setNameContext] = useState('');

	return (
		<React.StrictMode>
			<PlayerStore.Provider value={nameContext}>
				<div className={'wrapper'}>
					< CreateCharacterMenu
						setNameContext={setNameContext}
					/>
				</div>
			</PlayerStore.Provider>
		</React.StrictMode>
	);
}
