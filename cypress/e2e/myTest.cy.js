describe("My First Test", () => {
	it("Verify title +", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		cy.title().should("eq", "OrangeHRM");
	});

	it("Verify title -", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		cy.title().should("eq", "123124");
	});
});
