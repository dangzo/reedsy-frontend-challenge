describe("Reedsy Frontend Challenge - Book details UI tests", () => {

  beforeEach(() => {
    // Book fixture in ./e2e/cypress/fixtures/
    cy.fixture("book-details").then($book => {
      // BASE_URL defined in ./e2e/cypress.json
      cy.visit(`/books/${$book.slug}`);
    });
  });

  context("URL structure check", () => {

    it("Should display book slug in the URL", () => {
      cy.fixture("book-details").then($book => {
        cy.url()
          .should("contain", `/books/${$book.slug}`);
      });
    });

  });

  context("UI elements check", () => {
    // UI elements check
    it("Should display book title", () => {
      cy.fixture("book-details").then($book => {
        cy.get("[data-cy='book-title']")
          .should("contain", $book.title);
      });
    });

    it("Should display book cover", () => {
      cy.fixture("book-details").then($book => {
        cy.get("[data-cy='book-cover']")
          .invoke("attr", "src")
          .should("contain", $book.cover);
      });
    });

    it("Should display book upvoted or upvote link", () => {
      cy.fixture("book-details").then($book => {
        cy.get("[data-cy='book-upvoted-text']")
          .should("contain", `Upvoted ${$book.upvotes} times`);
        cy.get("[data-cy='book-upvoted-button']")
          .should("contain", `Upvote`);
      });
    });

    it("Should display book synopsis", () => {
      cy.fixture("book-details").then($book => {
        cy.get("[data-cy='book-synopsis'] p")
          .should("contain", $book.synopsis);
      });
    });

    it("Should display book rating", () => {
      cy.fixture("book-details").then($book => {
        cy.get("[data-cy='book-rating']")
          .should("contain", `${$book.rating}/10`);
      });
    });

    // Comments section
    it("Should display a list of comments", () => {
      cy.fixture("book-details").then($book => {
        cy.get("[data-cy='book-comment']")
          .should("exist")
          .and("have.length.at.least", 1);
      });
    });
  });

  context("Server offline", () => {

    it("Should display not found text if server is offline", () => {
      // Stubbing the GET request and force 404
      cy.server({
        method: "GET",
        delay: 1000,
        force404: true,
        response: {}
      });

      cy.get("[data-cy='not-found-text']")
        .should("exist");
    });

  });

});
