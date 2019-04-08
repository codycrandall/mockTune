import Chance from 'chance';
const chance = new Chance();

export function createCharacter() {
	const menuCollapsed = '.chevron-down';
	
	cy.get(menuCollapsed).click();
	cy.get('input').type(chance.word());
	cy.get('button')
		.contains('GO')
		.click();
}
