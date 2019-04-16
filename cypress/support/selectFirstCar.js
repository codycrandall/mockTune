export default function selectFirstCar() {
	cy.get( '.car' )
		.first()
		.click();
}