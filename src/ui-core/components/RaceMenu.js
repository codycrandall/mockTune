import React from 'react';
import PropTypes from 'prop-types';

export default function RaceMenu(props) {
	RaceMenu.propTypes = {
		playerCar: PropTypes.array,
		playerName: PropTypes.string
	};

	return <div>{props.playerName}- {props.playerCar.model}</div>;
}
