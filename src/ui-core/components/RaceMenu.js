import React from 'react';
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

	function renderUser() {
		return <RaceCar className={'player'} name={playerName} car={playerCar} />;
	}
	function renderOpponent() {
		return <RaceCar className={'opponent'} name={newOpponent.name} car={newOpponent.car} />;
	}


	return (
		<div className={'race-menu'}>
			<div> {renderUser()}</div>
			<div>{renderOpponent()}</div>
		</div>
	);
}
