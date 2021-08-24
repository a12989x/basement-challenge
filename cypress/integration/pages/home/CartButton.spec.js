/// <reference types="cypress" />

describe("Cart", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-test-id='cart-button']").as("cartButton");
  });

  it("should open modal when cart button is clicked", () => {
    cy.get("@cartButton").click();
    cy.get("[data-test-id='cart-modal']").should("be.visible");
  });

  it("should close modal when close button is clicked", () => {
    cy.get("@cartButton").click();
    cy.contains("button", "→ Close").click();
  });

  it("should cart number increment when a product is clicked", () => {
    cy.get("@cartButton");
    cy.get("#products-home section:first button").click();
    cy.get("@cartButton").should("contain.text", "Cart (1)");
    cy.get("#products-home section:last button").click();
    cy.get("@cartButton").should("contain.text", "Cart (2)");
  });
});
