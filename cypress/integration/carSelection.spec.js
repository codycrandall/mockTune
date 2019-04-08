import { createCharacter } from '../support/createCharacter';

describe('car selection menu', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('should allow for car selection then take the player to the race menu', () => {
		createCharacter();

		cy.get('.car').first().click();
		cy.get('.race-menu').should('exist');
	});
});