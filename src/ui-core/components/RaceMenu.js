import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../ui-core/sass/components/RaceMenu.scss';

import RaceCar from './RaceCar';
import newOpponent from '../utilities/opponent-creator';

export default function RaceMenu(props) {
	RaceMenu.propTypes = {
		playerCar: PropTypes.object,
		playerName: PropTypes.string
	};
	const { playerCar, playerName } = props;
	const [raceStarted, setRaceStarted] = useState(false);

	function renderUser() {
		return (
			<RaceCar
				className={'player'}
				name={playerName}
				car={playerCar}
				raceStarted={raceStarted}
			/>
		);
	}
	function renderOpponent() {
		return (
			<RaceCar
				className={'opponent'}
				name={newOpponent.name}
				car={newOpponent.car}
				raceStarted={raceStarted}
			/>
		);
	}

	return (
		<div className={'race-menu'}>
			{}
			{renderUser()}
			{renderOpponent()}
			<div className={'start-race'} onClick={() => setRaceStarted(!raceStarted)}>
				Start Race
			</div>
		</div>
	);
}
