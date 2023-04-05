describe("Testing Yutube", () => {
	it("Search", () => {
		cy.visit("https://youtube.com");
		cy.get(".yt-spec-touch-feedback-shape--touch-response-inverse").click({
			multiple: true,
		});
		cy.wait(4000);
		cy.get("input#search").type("Web Dev Simplified");
		cy.get("#search-icon-legacy").click();
		cy.get("#subscribers").contains("@WebDevSimplified");
	});
});
