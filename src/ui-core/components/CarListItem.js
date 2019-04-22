import React from 'react';
import PropTypes from 'prop-types';
import '../sass/components/CarListItem.scss';

export default function CarListItem(props) {
	CarListItem.propTypes = {
		car: PropTypes.object,
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};
	let disabledCursor = '';
	const { car, setPlayer, player } = props;
	const updatedBankBalance = player.bankBalance - car.price;
	
	const updatedBalanceIsPositive = updatedBankBalance >= 0;
	
	if(!updatedBalanceIsPositive) {
		disabledCursor = ' disabled'
	}

	return (
		<span
			className={`car${disabledCursor}`}
			onClick={() => handleClick()}
		>
			<div className={'model-info'}>
				{car.year} {car.make} {car.model} {car.trim}
			</div>
			<div>horsepower: {car.horsepower}</div>
			<div>curb weight: {car['curb-weight']}</div>
			<div>cost: {car.price}</div>
		</span>
	);

	function handleClick() {
		if (updatedBalanceIsPositive) {
			setPlayer(Object.assign({}, player, {car: car, bankBalance: updatedBankBalance }));
		
		}
	}
}
