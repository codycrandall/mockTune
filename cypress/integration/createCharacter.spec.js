import { createCharacter } from '../support/createCharacter';

describe('CreateCharacter', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});
	
	it('should toggle the start new game menu', () => {
		const menuExpanded = '.chevron-up';
		const menuCollapsed = '.chevron-down';
		
		cy.get(menuCollapsed).click();
		cy.get('button').contains('GO').should('exist');

		cy.get(menuExpanded).click();
		cy.contains('Start New Game');
	});

	it('should create a new character then take the character to the car selection menu', () => {
		createCharacter();

		cy.get('span.car').should('exist');
	});
}); 