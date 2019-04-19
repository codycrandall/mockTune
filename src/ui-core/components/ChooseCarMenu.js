import React from 'react';
import PropTypes from 'prop-types';
import cars from '../constants/cars';
import '../sass/components/ChooseCarMenu.scss';
import CarListItem from './CarListItem';

export default function ChooseCarMenu(props) {
	ChooseCarMenu.propTypes = {
		setPlayer: PropTypes.func,
		player: PropTypes.object
	};
	const { player, setPlayer } = props;
	
	return (
		<div className={'choose-car-menu'}>
			<div className={'bank-balance'}>
				Current Bank Balance: ${player.bankBalance}
			</div>
			<div className={'car-list'}>
				{cars.map((car, key) => (
					<CarListItem car={car} key={key} setPlayer={setPlayer} player={player}/>
				))}
			</div>
		</div>
	);
}
