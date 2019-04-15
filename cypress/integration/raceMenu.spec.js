import { createCharacter } from '../support/createCharacter';
import Chance from 'chance';
const chance = new Chance();

describe('race menu', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080');
	});

	it('should allow for two players to race', () => {
		const name = chance.name();
		createCharacter(name);

		selectFirstCar();
		
		cy.get('.start-race').click();

		cy.wait(10000);

		cy.get('.winner-text').contains(`winner- ${name}`)
	});
});

function selectFirstCar() {
	cy.get( '.car' )
		.first()
		.click();
}
