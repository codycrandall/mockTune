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
				name={playerName}
				car={playerCar}
				raceStarted={raceStarted}
			/>
		);
	}
	function renderOpponent() {
		return (
			<RaceCar
				name={newOpponent.name}
				car={newOpponent.car}
				raceStarted={raceStarted}
			/>
		);
	}

	return (
		<div className={'race-menu'}>
			<div className={'start-line'}>
				<div
					className={'start-race'}
					onClick={() => setRaceStarted(!raceStarted)}
				>
					Start Race
				</div>
				{renderUser()}
				{renderOpponent()}
			</div>
			<div className={'finish-line'}>Finish</div>
		</div>
	);
}
