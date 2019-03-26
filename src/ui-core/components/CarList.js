import React from 'react';
import PropTypes from 'prop-types';

export default function CarList(props) {
	CarList.propTypes = {
		car: PropTypes.object,
		key: PropTypes.number
	};

	const { car } = props;

	return (
		<span key={props.key} className={'car'}>
			<div className={'model-info'}>
				{car.year} {car.make} {car.model} {car.trim}
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
		</span>
	);
}
