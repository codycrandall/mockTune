import React from 'react';
import PropTypes from 'prop-types';

export default function RaceCar(props) {
	RaceCar.propTypes = {
		car: PropTypes.object,
		name: PropTypes.string
	};

	const { car, name } = props;
	return (
		<div>
			{name}- {car.model}
		</div>
	);
}
