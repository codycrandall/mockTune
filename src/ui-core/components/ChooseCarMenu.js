import React from 'react';
import PropTypes from 'prop-types';
import cars from '../constants/cars';
import '../sass/components/ChooseCarMenu.scss';
import Car from './Car';

export default function ChooseCarMenu(props) {
	ChooseCarMenu.propTypes = {
		setCar: PropTypes.func
	};

	return (
		<div>
			{cars.map((car, key) => (
				<Car car={car} key={key} setCar={props.setCar} />
			))}
		</div>
	);
}
