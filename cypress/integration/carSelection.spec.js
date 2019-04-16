import { createCharacter } from '../support/createCharacter';
import selectFirstCar from '../support/selectFirstCar';

describe('car selection menu', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('should allow for car selection then take the player to the race menu', () => {
		createCharacter();

		selectFirstCar();
		
		cy.get('.race-menu').should('exist');
	});
});