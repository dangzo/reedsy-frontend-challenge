describe("Reedsy Frontend Challenge - Book details UI tests", () => {

  beforeEach(() => {
    // BASE_URL defined in ./e2e/cypress.json
    cy.visit("/");
  });

  context("UI elements check", () => {
    // UI elements check
    it("Should display book title", () => {});
    it("Should display book cover", () => {});
    it("Should display book upvoted or upvote link", () => {});
    it("Should display book synopsis", () => {});
    it("Should display book text", () => {});
    it("Should display book rating", () => {});

    // Comments section
    it("Should display a list of comments", () => {});
  });

  context("UI interactions", () => {
    // Book details upvote link
    it("Upvote link: click should do nothing", () => {});

    // Book details reply link
    it("Reply link: click should do nothing", () => {});
  });

});
