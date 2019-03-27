import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/RaceCar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';


export default function RaceCar(props) {
	RaceCar.propTypes = {
		car: PropTypes.object,
		name: PropTypes.string
	};

	const { car, name } = props;
	return (
		<div className={'racer'}>
			<div>{name}- {car.model}</div>
			<FontAwesomeIcon icon={faCarSide} size={'sm'} className={'car-icon'}/>
		</div>
	);
}
