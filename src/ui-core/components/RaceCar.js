import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import startTimer from './useNewTimedIncrementor';
import '../sass/components/RaceCar.scss';

export default function RaceCar(props) {
	RaceCar.propTypes = {
		car: PropTypes.object,
		competitor: PropTypes.string,
		raceInProgress: PropTypes.bool,
		setRaceInProgress: PropTypes.func,
		setWinner: PropTypes.func,
		finishLineCoordinates: PropTypes.number
	};

	let amountMoved= 0;

	const {
		car,
		raceInProgress,
		setRaceInProgress,
		setWinner,
		competitor
	} = props;

	const powerToWeightRatio = car.horsepower / car['curb-weight'];

	if (raceInProgress) {
		amountMoved = powerToWeightRatio * startTimer();
		if (amountMoved >= props.finishLineCoordinates) {
			setWinner(competitor);
			setRaceInProgress(false);
		}
	} else {
		amountMoved = 0;
	}

	return (
		<FontAwesomeIcon
			className={'racer'}
			icon={faCarSide}
			size={'sm'}
			style={{
				left: `${amountMoved}px`
			}}
		/>
	);
}
