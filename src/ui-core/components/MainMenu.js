import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import '../sass/components/MainMenu.scss';
import VehicleInfo from './VehicleInfo';

export default function MainMenu(props) {
	const { player } = props;

	return (
		<div className={'main-menu'}>
			<div className={'main-menu-text'}>MAIN MENU</div>
			{renderPlayerInfo()}
			<div className={'main-menu-buttons'}>
				<Link className={'change-name'} to='/ChangeNameMenu'>Change Name</Link>
				<Link className={'link-to-car-menu'} to='/ChooseCarMenu'>Open Garage</Link>
				{renderRaceMenu()}
			</div>
		</div>
	);

	function renderPlayerInfo() {
		return (
			<Fragment>
				<div className={'bank-balance'}>Bank Balance: ${player.bankBalance}</div>
				<div className={'player-name'}>Player Name: {player.name}</div>
				<div className={'player-garage'}>Player's Garage: {player.car && <VehicleInfo car={player.car} />}</div>
			</Fragment>
		);
	}

	function renderRaceMenu() {
		return (
			<div className={'go-to-race-menu'}>
				{player.car && <Link to='/RaceMenu' >Go To Race Menu</Link>}

				{!player.car && 'Go To Race Menu\n(Requires a vehicle from the garage)'}
			</div>
		);
	}

}
