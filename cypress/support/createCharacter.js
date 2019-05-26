import Chance from 'chance';
const chance = new Chance();

export function createCharacter(name = null) {
	const mainMenu = '.chevron-down';
	name = name ? name : chance.name();

	cy.get(mainMenu).click();
	cy.get('input').type(name);
	cy.get('button')
		.contains('GO')
		.click();
}
