/// <reference types="cypress" />

describe("Product", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("section section section.product:first").as("productItem");
  });

  it("should display the name of the product", () => {
    cy.get("@productItem").find("div p:first").should("contain.text", "Black t-shirt");
  });

  it("should display the price of the product", () => {
    cy.get("@productItem").find("div p:last").should("contain.text", "$ 7.95");
  });

  it("should display the image of the product with alt and src attribute", () => {
    cy.get("@productItem").find("button div img").should("have.attr", "alt");
    cy.get("@productItem").find("button div img").should("have.attr", "src");
  });

  it("should show add to cart text while hover", () => {
    cy.get("@productItem").find("button").trigger("mouseover");
    cy.get("@productItem").find("button p").should("contain.text", "Add to cart");
  });

  it("should show world icon while hover", () => {
    cy.get("@productItem").find("button").trigger("mouseover");
    cy.get("@productItem").find("button div img").should("have.attr", "src");
    cy.get("@productItem").find("button div img").should("have.attr", "alt");
  });
});
