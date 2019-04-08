import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import startTimer from './useNewTimedIncrementor';
import '../sass/components/RaceCar.scss';

export default function RaceCar(props) {
	RaceCar.propTypes = {
		car: PropTypes.object,
		name: PropTypes.string,
		raceStarted: PropTypes.bool
	};

	let amountMoved = 0;

	const { car, name, raceStarted } = props;

	const powerToWeightRatio = car.horsepower / car['curb-weight'];

	if (raceStarted) {
		amountMoved = powerToWeightRatio * startTimer() * 2;
	}


	return (
		<div className={'racer'}>
			<div>
				{name}- {car.model}
			</div>
			<FontAwesomeIcon
				icon={faCarSide}
				size={'sm'}
				style={{
					paddingLeft: `${amountMoved}px`,
					color: 'white'
				}}
			/>
		</div>
	);
}
