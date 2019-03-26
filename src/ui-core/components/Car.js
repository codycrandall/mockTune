import React from 'react';
import PropTypes from 'prop-types';

export default function Car(props) {
	Car.propTypes = {
		car: PropTypes.object,
		key: PropTypes.number,
		setCar: PropTypes.func
	};

	const { car, key, setCar} = props;


	return (
		<span key={key} className={'car'} onClick={() =>setCar(car)}>
			<div className={'model-info'}>
				{car.year} {car.make} {car.model} {car.trim}
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
		</span>
	);
}
