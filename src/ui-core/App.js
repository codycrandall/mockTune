import React, {useState	} from 'react';

import './sass/App.scss';
import './sass/style-baseline.scss';
import MenuWrapper from './components/start-new-game/MenuWrapper';
import {PlayerStore} from '../../src/ui-core/stores/player';

export default function App() {

	const [nameContext, setNameContext] = useState('');

	return (
		<React.StrictMode>
			<PlayerStore.Provider value={nameContext}>
				<div className={'wrapper'}>
					<MenuWrapper
						setNameContext={setNameContext}
					/>
				</div>
			</PlayerStore.Provider>
		</React.StrictMode>
	);
}
