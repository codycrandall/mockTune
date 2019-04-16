import Chance from 'chance';
const chance = new Chance();

export function createCharacter(name = null) {
	const menuCollapsed = '.chevron-down';
	name = name ? name : chance.name();
	
	cy.get(menuCollapsed).click();
	cy.get('input').type(name);
	cy.get('button')
		.contains('GO')
		.click();
}
