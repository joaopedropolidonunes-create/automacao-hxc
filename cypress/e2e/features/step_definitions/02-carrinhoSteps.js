import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página inicial", () => {
  cy.visit("https://www.automationexercise.com");
});

When("busco por um produto", () => {
  cy.contains("Products").click();

  cy.get('#search_product')
    .should('be.visible')
    .type("Tshirt");

  cy.get('#submit_search').click();

  cy.contains("Searched Products").should("be.visible");
});

When("adiciono o produto buscado ao carrinho", () => {
  cy.contains("Add to cart").first().click();
  cy.contains("View Cart").click();
});

Then("o produto deve aparecer no carrinho", () => {
  cy.get(".cart_description").should("be.visible");
});