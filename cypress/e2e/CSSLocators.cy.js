describe("CSSLocators", () => {
	it("csslocators", () => {
		cy.visit("https://automationexercise.com/");
		cy.get(".card_travel").click();
		cy.get("[name='search']").type("Tshirt");
		cy.get("#submit_search").click();
		cy.get(".title").contains("Searched Products");
	});
});
