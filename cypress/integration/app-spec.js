import { start } from "repl";

describe('Intro screen', () => {
	it('should click the Start new button and toggle the caret', () => {
		cy.visit('http://localhost:8080');

		const startNewGame = cy.get('.start-new-game');
		const caretMinified = cy.get('start-new-dropdown-minified');
		
		startNewGame.contains(caretMinified);
		startNewGame.click();
		const caretExpanded = cy.get('start-new-dropdown-expanded');
		startNewGame.contains(caretMinified);
		caretExpanded.click();
		caretMinified.click();
	});
});
