/// <reference types="cypress" />

describe("Product", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("section section section.product:first").as("productItem");
  });

  it("should show world icon while hover", () => {
    cy.get("@productItem").find("button").trigger("mouseover");
    cy.get("@productItem").find("button div img").should("have.attr", "src");
    cy.get("@productItem").find("button div img").should("have.attr", "alt");
  });
});
