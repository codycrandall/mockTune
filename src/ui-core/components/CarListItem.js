import React from 'react';
import PropTypes from 'prop-types';

export default function CarListItem(props) {
	CarListItem.propTypes = {
		car: PropTypes.object,
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};

	const { car, setPlayer, player } = props;

	return (
		<span className={'car'} onClick={() => handleOnClick()}>
			<div className={'model-info'}>
				{car.year} {car.make} {car.model} {car.trim}
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
		</span>
	);

	function handleOnClick() {
		const updatedBankBalance = player.bankBalance - car.price;
		if (updatedBankBalance >= 0) {
			setPlayer({ car: car, bankBalance: updatedBankBalance });
		}
	}
}
