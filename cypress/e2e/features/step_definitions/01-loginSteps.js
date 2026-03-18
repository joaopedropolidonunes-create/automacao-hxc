import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("preencho email e senha válidos", () => {
  cy.get('input[data-qa="login-email"]').type("teste2024@teste.com.br");
  cy.get('input[data-qa="login-password"]').type("teste");
});

When("clico no botão de login", () => {
  cy.get('button[data-qa="login-button"]').click();
});

Then("devo ser autenticado com sucesso", () => {
  cy.contains("Logged in as").should("be.visible");
});