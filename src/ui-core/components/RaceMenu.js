import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../ui-core/sass/components/RaceMenu.scss';

import RaceCar from './RaceCar';
import opponent from '../utilities/opponent-creator';

export default function RaceMenu(props) {
	RaceMenu.propTypes = {
		playerCar: PropTypes.object,
		playerName: PropTypes.string
	};
	const { playerCar, playerName } = props;
	const [raceStarted, setRaceStarted] = useState(false);

	function renderCompetitor(competitor, car) {
		return (
			<div className={'competitor'}>
				<RaceCar car={car} raceStarted={raceStarted}/>
				{renderCompetitorInfo(competitor, car)}
			</div>
		);
	}

	function renderCompetitorInfo(competitor , car) {
		return (
			<div>
				{competitor}- {car.model}
			</div>
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
				{renderCompetitor(playerName, playerCar)}
				{renderCompetitor(opponent.name, opponent.car)}
			</div>
			<div className={'finish-line'}>Finish</div>
		</div>
	);
}
