import React from 'react';
import PropTypes from 'prop-types';

export default function CarListItem(props) {
	CarListItem.propTypes = {
		car: PropTypes.object,
		setCar: PropTypes.func
	};

	const { car, setCar} = props;


	return (
		<span className={'car'} onClick={() =>setCar(car)}>
			<div className={'model-info'}>
				{car.year} {car.make} {car.model} {car.trim}
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
		</span>
	);
}
