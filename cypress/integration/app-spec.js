describe("Intro screen", () => {
	it("should render the Start New button", () => {
		cy.visit("http://localhost:8080");

		cy.get(".start-new-game").click();
	});
});
