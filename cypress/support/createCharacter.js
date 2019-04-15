export function createCharacter(name) {
	const menuCollapsed = '.chevron-down';

	cy.get(menuCollapsed).click();
	cy.get('input').type(name);
	cy.get('button')
		.contains('GO')
		.click();
}
