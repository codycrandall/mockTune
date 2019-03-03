import { observable, action } from 'mobx';

export default class playerStore {
	@observable playerName = 'billy bob';

	@action.bound
	updatePlayerName(name) {
		this.playerName = name;
	}
}
