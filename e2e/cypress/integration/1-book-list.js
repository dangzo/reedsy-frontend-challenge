describe("Reedsy Frontend Challenge - Book list UI tests", () => {

  beforeEach(() => {
    // BASE_URL defined in ./e2e/cypress.json
    cy.visit("/");
  });

  context("UI elements check", () => {
    // UI elements check
    it("Should display a list of books (title, author, text, rating, cover, upvote/upvoted link and text)", () => {});
    it("Should display a search box", () => {});
    it("Should display book pagination to the bottom", () => {});
  });

  context("UI interactions", () => {
    // Changing pages
    it("Book list to book details page clicking on book title", () => {});
    it("Book list to book details page clicking on book cover", () => {});

    // Book list upvote link
    it("Upvote link: click should do nothing", () => {});

    // Book list pagination: next page
    it("Pagination: going to next page hitting next page number link", () => {});
    it("Pagination: going to next page hitting \"next\" link", () => {});
    it("Pagination: going to next page hitting non-adjacent next page number link", () => {});

    // Book list pagination: prev page
    it("Pagination: going to prev page hitting prev page number link", () => {});
    it("Pagination: going to prev page hitting \"prev\" link", () => {});
    it("Pagination: going to prev page hitting non-adjacent prev page number link", () => {});

    // Book list pagination: prev page
    it("Pagination: going to prev page hitting prev page number link", () => {});
    it("Pagination: going to prev page hitting \"prev\" link", () => {});
    it("Pagination: going to prev page hitting non-adjacent prev page number link", () => {});

    // Book list search box
    it("Search box: find a book by matching a word with its title", () => {});
    it("Search box: find a book by matching a word with its synopsis", () => {});
    it("Search box: showing no found text when no match", () => {});
  });

});
