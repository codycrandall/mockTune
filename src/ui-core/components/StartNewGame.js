import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function StartNewGame() {
	return (<div className={'start-new-game'}>Start New Game<FontAwesomeIcon icon={faChevronDown} /></div>);
}
