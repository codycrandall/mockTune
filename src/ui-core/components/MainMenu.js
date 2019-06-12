import React from 'react';
import { Link } from "react-router-dom";

import '../sass/components/start-new-game/MainMenu.scss';
import VehicleInfo from './VehicleInfo';

export default function MainMenu(props) {
	const { player} = props;

	const carIsNeeded = player.car ? '' : '\n(Requires a vehicle from the garage)'

	return (
		<div className={'main-menu'}>
			<div className={'main-menu-text'}>MAIN MENU</div>
			<div className={'bank-balance'}>Bank Balance: ${player.bankBalance}</div>
			<div className={'player-name'}>Player Name: {player.name}</div>
			<div className={'player-garage'}>Player's Garage: {player.car && <VehicleInfo car={player.car} />}</div>
			<div className={'main-menu-buttons'}>
				<Link to='/ChangeNameMenu'>Change Name</Link>
				<Link className={'link-to-car-menu'} to='/ChooseCarMenu'>Open Garage</Link>
				<Link to='/RaceMenu'>
					<div>Go To Race Menu</div>
					<div>{carIsNeeded}</div>
				</Link>
			</div>
		</div>
	);
}
