import React from 'react';
import PropTypes from 'prop-types';

export default function Car(props) {
	Car.propTypes = {
		car: PropTypes.object,
		key: PropTypes.number,
		setCarContext: PropTypes.func
	};

	const { car, key, setCarContext} = props;


	return (
		<span key={key} className={'car'} onClick={() =>setCarContext(car)}>
			<div className={'model-info'}>
				{car.year} {car.make} {car.model} {car.trim}
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
		</span>
	);
}
