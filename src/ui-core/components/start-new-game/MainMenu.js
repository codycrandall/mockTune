import React, { useState } from 'react';

import '../../sass/components/start-new-game/MainMenu.scss';
import ChangeNameMenu from './ChangeNameMenu';
import ChooseCarMenu from '../ChooseCarMenu';
import RaceMenu from '../RaceMenu';
import VehicleInfo from '../VehicleInfo';

export default function MainMenu(props) {
	const { player, setPlayer } = props;
	const [showGarage, setShowGarage] = useState(false);

	return (
		<React.Fragment>
			{showGarage && <ChooseCarMenu player={player} setPlayer={setPlayer} setShowGarage={setShowGarage} />}
			{!showGarage && <div className={'main-menu'}>
				<div className={'main-menu-text'}>MAIN MENU</div>
				<div className={'bank-balance'}>Bank Balance: ${player.bankBalance}</div>
				<div className={'player-name'}>Player Name: {player.name}</div>
				{player.car && <div className={'player-garage'}>Player's Garage: <VehicleInfo car={player.car} /></div>}
				<div className={'main-menu-buttons'}>
					<ChangeNameMenu player={player} setPlayer={setPlayer} />
					<div className={'link-to-car-menu'} onClick={() => setShowGarage(true)}>Open Garage</div>
					<div className={'go-to-race-menu'} disabled={!player.car} >Go To Race Menu</div>
				</div>
			</div>}
		</React.Fragment >
	);
}
