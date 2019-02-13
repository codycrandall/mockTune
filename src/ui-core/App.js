import React, { Component } from 'react';

import './sass/App.scss';
import MenuWrapper from './components/start-new-game/MenuWrapper';

class App extends Component {
	render() {
		return (
			<div className={'wrapper'}>
				<MenuWrapper />
			</div>
		);
	}
}
export default App;
