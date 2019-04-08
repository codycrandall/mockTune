import { createCharacter } from '../support/createCharacter';

describe('race menu', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('should allow for two players to race', () => {
		createCharacter();

		cy.get('.car')
			.first()
			.click();
		
		cy.get('.start-race').click();
	});
});
