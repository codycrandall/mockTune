import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../sass/components/CarListItem.scss';
import VehicleInfo from './VehicleInfo';

export default function CarListItem(props) {
	CarListItem.propTypes = {
		car: PropTypes.object,
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};

	const [boldText, setBoldText] = useState('');
	let disabledCursor = '';
	let makeBold = '';
	let carExistsInGarage;
	const { car, setPlayer, player } = props;
	const updatedBankBalance = player.bankBalance - car.price;

	const updatedBalanceIsPositive = updatedBankBalance >= 0;

	if (player.car && car.make === player.car.make) {
		carExistsInGarage = true;
	}

	if (!updatedBalanceIsPositive || carExistsInGarage) {
		disabledCursor = ' disabled'
	}

	return (
		<span
			className={`car${disabledCursor}`}
			onClick={() => handleClick()}
		>
			<div className={'model-info'}>
				<VehicleInfo car={car} />
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
			{carExistsInGarage && <div className={`purchased${boldText}`}>already purchased</div>}
			{!updatedBalanceIsPositive && <div className={'too-expensive'}>can't afford this car</div>}
		</span>
	);
	function handleClick() {
		if (updatedBalanceIsPositive && !carExistsInGarage) {
			setPlayer(Object.assign({}, player, { car: car, bankBalance: updatedBankBalance }));

		}
		else if (carExistsInGarage) {

			setBoldText(' bold');
		}
	}
}
