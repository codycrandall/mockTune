describe('MenuWrapper', () => {
	it('should be able to expand Menu Collapsed by clicking start new game', () => {
		cy.visit("http://localhost:8080/");
		cy.get('.menu-collapsed').click();
		cy.get('button').contains('GO').should('exist');
	});
}); 