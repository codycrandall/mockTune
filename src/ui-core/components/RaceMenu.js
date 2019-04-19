import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../ui-core/sass/components/RaceMenu.scss';

import RaceCar from './RaceCar';
import opponent from '../utilities/opponent-creator';

export default function RaceMenu(props) {
	RaceMenu.propTypes = {
		player: PropTypes.object
	};

	const { player } = props;
	const [raceInProgress, setRaceInProgress] = useState(false);
	const [finishLineCoordinates, setFinishLineCoordinates] = useState(null);
	const [winner, setWinner] = useState(null);

	function renderCompetitor(competitor, car) {
		return (
			<div className={'competitor'}>
				<RaceCar
					car={car}
					competitor={competitor}
					setRaceInProgress={setRaceInProgress}
					raceInProgress={raceInProgress}
					finishLineCoordinates={finishLineCoordinates}
					setWinner={setWinner}
				/>
				{renderCompetitorInfo(competitor, car)}
			</div>
		);
	}

	function renderCompetitorInfo(competitor, car) {
		return (
			<div>
				{competitor}- {car.make} {car.model}
			</div>
		);
	}

	function handleStartRace() {
		setRaceInProgress(true);
		setWinner(null);
	}

	return (
		<div className={'race-menu'}>
			<div className={'start-line'}>
				<div className={'start-race'} onClick={handleStartRace}>
					Start Race
				</div>
				<div className={'competitors'}>
					{renderCompetitor(player.name, player.car)}
					{renderCompetitor(opponent.name, opponent.car)}
				</div>
			</div>
			<div className={'winner-text'}>{winner && `winner- ${winner}`}</div>
			<div
				className={'finish-line'}
				ref={el => {
					if (!el) return;
					setFinishLineCoordinates(el.getBoundingClientRect().x);
				}}
			>
				Finish
			</div>
		</div>
	);
}
