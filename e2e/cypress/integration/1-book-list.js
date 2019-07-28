describe("Reedsy Frontend Challenge - Book list UI tests", () => {

  beforeEach(() => {
    // BASE_URL defined in ./e2e/cypress.json
    cy.visit("/");
  });

  context("UI elements check", () => {
    // UI elements check
    it("Should display a list of books (title, author, synopsis, rating, cover, upvote/upvoted button and text)", () => {
      cy.get("[data-cy='book-list-item']").each($bookListItem => {
        // Book title should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-title']")
          .should("exist")
          .and("not.be.empty");
        // Book author should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-author']")
          .should("exist")
          .and("not.be.empty");
        // Book synopsis should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-synopsis']")
          .should("exist")
          .and("not.be.empty");
        // Book rating should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-rating']")
          .should("exist")
          .and("not.be.empty");
        // Book cover should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-cover']")
          .should("exist");
        // Book upvote/upvoted button should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-upvoted-button']")
          .should("exist")
          .and("not.be.empty");
        // Book upvoted counter should exist and not be empty
        cy.wrap($bookListItem)
          .find("[data-cy='book-upvoted-text']")
          .should("exist")
          .and("not.be.empty");
      });
    });

    it("Should display a search box", () => {
      cy.get("[data-cy='search-box']")
        .should("exist");
    });

    it("Should display book pagination to the bottom", () => {
      cy.get("[data-cy='pagination']")
        .should("exist");
      cy.get("[data-cy='pagination-prev-link'], [data-cy='pagination-next-link']")
        .should("exist");
       cy.get("[data-cy='pagination-page-link']")
        .should("have.length.at.least", 1);
    });

  });

  context("UI interactions", () => {
    // Changing pages
    it("Book list to book details page clicking on book title", () => {
      // Go to the book details page
      cy.get("[data-cy='book-title'] a").eq(0).click();
      // Check if we are in the book details page
      cy.url().should("contain", "books/");
    });

    it("Book list to book details page clicking on book cover", () => {
      // Go to the book details page
      cy.get("[data-cy='book-cover']").eq(0).click();
      // Check if we are in the book details page
      cy.url().should("contain", "books/");
    });

    // Book list pagination: next page
    it("Pagination: going to next page hitting next page number link", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Should be in first page
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "1");
        // Should contain first book element
        cy.get("[data-cy='book-title']").should("contain", "1.");
        // Click on next link
        cy.get("[data-cy='pagination-page-link']").eq(1).click();
        // Verify
        // (should NOT contain first book element anymore)
        cy.get("[data-cy='book-title']").should("not.contain", "1.");
        // (should be on second page)
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "2");
      });
    });

    it("Pagination: going to next page hitting \"next\" link", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Should be in first page
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "1");
        // Should contain first book element
        cy.get("[data-cy='book-title']").should("contain", "1.");
        // Click on next link
        cy.get("[data-cy='pagination-next-link']").click();
        // Verify
        // (should NOT contain first book element anymore)
        cy.get("[data-cy='book-title']").should("not.contain", "1.");
        // (should be on second page)
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "2");
      });
    });

    // Book list pagination: prev page
    it("Pagination: going to prev page hitting prev page number link", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Should be on second page
        cy.get("[data-cy='pagination-page-link']").eq(1).click();
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "2");
        // Should NOT contain first book element
        cy.get("[data-cy='book-title']").should("not.contain", "1.");
        // Click on first page link
        cy.get("[data-cy='pagination-page-link']").eq(0).click();
        // Verify
        // (should contain first book element)
        cy.get("[data-cy='book-title']").should("contain", "1.");
        // (should be on first page)
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "1");
      });
    });

    it("Pagination: going to prev page hitting \"prev\" link", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Should be on second page
        cy.get("[data-cy='pagination-page-link']").eq(1).click();
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "2");
        // Should NOT contain first book element
        cy.get("[data-cy='book-title']").should("not.contain", "1.");
        // Click on "prev" page link
        cy.get("[data-cy='pagination-prev-link']").click();
        // Verify
        // (should contain first book element)
        cy.get("[data-cy='book-title']").should("contain", "1.");
        // (should be on first page)
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "1");
      });
    });

    it("Pagination: going to another page hitting non-adjacent next page number link", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Should be in first page
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "1");
        // Should contain first book element
        cy.get("[data-cy='book-title']").should("contain", "1.");
        // Click on third page link
        cy.get("[data-cy='pagination-page-link']").eq(2).click();
        // Verify
        // (should NOT contain first book element anymore)
        cy.get("[data-cy='book-title']").should("not.contain", "1.");
        // (should be on third page)
        cy.get("[data-cy='pagination-page-link'].active").should("contain", "3");
      });
    });

    // Book list search box
    it("Search box: find a book by matching a word with its title", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Type in search box
        cy.get("[data-cy='search-box'] input").click().type("Divine Comedy");
        cy.get("[data-cy='book-title']")
          .should("have.length", 1)
          .and("contain", "Divine Comedy");
      });
    });

    it("Search box: find a book by matching a word with its synopsis", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Type in search box
        cy.get("[data-cy='search-box'] input").click().type("In the Divine Comedy");
        cy.get("[data-cy='book-title']")
          .should("have.length", 1)
          .and("contain", "Divine Comedy");
      });
    });

    // Book list search box
    it("Search box: find a book when pagination is active (not first page)", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Click on third page link
        cy.get("[data-cy='pagination-page-link']").eq(2).click();
        // Type in search box
        cy.get("[data-cy='search-box'] input").click().type("In the Divine Comedy");
        cy.get("[data-cy='book-title']")
          .should("have.length", 1)
          .and("contain", "Divine Comedy");
      });
    });

    it("Search box: showing not found text when no match", () => {
      // Wait for data to be fully loaded
      cy.get(".v-spinner").should("not.exist").then(() => {
        // Type in search box
        cy.get("[data-cy='search-box'] input").click().type("The Matrix");
        cy.get("[data-cy='book-title']")
          .should("not.exist");
        cy.get("[data-cy='not-found-text']")
          .should("exist");
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
