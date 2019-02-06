import React, { Component } from 'react';

import './sass/App.scss';
import StartNewGame from './components/StartNewGame';

class App extends Component {
	render() {
		return (
			<div className={'wrapper'}>
				<StartNewGame />
			</div>
		);
	}
}
export default App;
