import React, { useState } from 'react';

import '../../sass/components/start-new-game/MainMenu.scss';
import ChangeNameMenu from './ChangeNameMenu';
import ChooseCarMenu from '../ChooseCarMenu';
import RaceMenu from '../RaceMenu';
import VehicleInfo from '../VehicleInfo';

export default function MainMenu(props) {
	const { player, setPlayer } = props;
	const [showPopup, setShowPopup] = useState(false);
	const carIsNeeded = player.car ? '' : '\n(Requires a vehicle from the garage)'
	return (
		<React.Fragment>
			{showPopup === 'choose-car' && <ChooseCarMenu player={player} setPlayer={setPlayer} setShowPopup={setShowPopup} />}
			{showPopup === 'race-menu' && <RaceMenu player={player} setPlayer={setPlayer} setShowPopup={setShowPopup} />}
			{!showPopup && <div className={'main-menu'}>
				<div className={'main-menu-text'}>MAIN MENU</div>
				<div className={'bank-balance'}>Bank Balance: ${player.bankBalance}</div>
				<div className={'player-name'}>Player Name: {player.name}</div>
				{player.car && <div className={'player-garage'}>Player's Garage: <VehicleInfo car={player.car} /></div>}
				<div className={'main-menu-buttons'}>
					<ChangeNameMenu player={player} setPlayer={setPlayer} />
					<div className={'link-to-car-menu'} onClick={() => setShowPopup('choose-car')}>Open Garage</div>
					<div className={'go-to-race-menu'} disabled={!player.car} onClick={() => setShowPopup('race-menu')}>
						<div>Go To Race Menu</div>
						<div>{carIsNeeded}</div>
					</div>
				</div>
			</div>}
		</React.Fragment >
	);
}
