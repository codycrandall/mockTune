import React from 'react';
import cars from '../constants/cars';
import '../sass/components/ChooseCarMenu.scss';
import CarList from './CarList';

export default function ChooseCarMenu() {
	return (
		<div>
			{cars.map((car, key) => (
				<CarList car={car} key={key}/>
			))}
		</div>
	);
}
