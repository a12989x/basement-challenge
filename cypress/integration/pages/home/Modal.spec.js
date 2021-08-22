/// <reference types="cypress" />

describe("Modal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#products-home section:first button").click();
    cy.get("[data-test-id='cart-button']").click();
  });

  it("should increment the quantity of the product when plus sign is clicked", () => {
    cy.get("[data-test-id^=product-modal-] .quantity button:last").click();
    cy.get("[data-test-id^=product-modal-] span").should("contain.text", "2");
  });

  it("should decrement the quantity of the product when minus sign is clicked", () => {
    cy.get("[data-test-id^=product-modal-] .quantity button:first").click();
    cy.get("[data-test-id^=product-modal-] span").should("contain.text", "0");
  });

  it("should increment the quantity one by one of the product when plus sign or minus sign is clicked more times", () => {
    cy.get("[data-test-id^=product-modal-] .quantity button:last").click();
    cy.get("[data-test-id^=product-modal-] span").should("contain.text", "2");
    cy.get("[data-test-id^=product-modal-] .quantity button:last").click();
    cy.get("[data-test-id^=product-modal-] span").should("contain.text", "3");
  });

  it("should stop when quantity of the product is 0 when minus sign is clicked", () => {
    cy.get("[data-test-id^=product-modal-] .quantity button:first").click();
    cy.get("[data-test-id^=product-modal-] span").should("contain.text", "0");
    cy.get("[data-test-id^=product-modal-] .quantity button:first").click();
    cy.get("[data-test-id^=product-modal-] span").should("contain.text", "0");
  });

  it("should change the total according with the quantity of a product", () => {
    cy.get("[data-test-id='total-modal']").should("contain.text", "7.95");
    cy.get("[data-test-id^=product-modal-] .quantity button:last").click();
    cy.get("[data-test-id='total-modal']").should("contain.text", "15.9");

    cy.get("[data-test-id^=product-modal-] .quantity button:first").click();
    cy.get("[data-test-id='total-modal']").should("contain.text", "7.95");
  });
});
