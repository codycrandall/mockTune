import React from 'react';

class PlayerStore {
	name = 'Billy Bob';
	updateName = ((newName) => {
		this.name = newName
	});
}

export default React.createContext(new PlayerStore());