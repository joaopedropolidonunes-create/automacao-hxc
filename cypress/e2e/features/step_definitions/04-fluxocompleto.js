import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// --- INÍCIO: BUSCA E ADIÇÃO ---

Given("que acesso a página inicial", () => {
  cy.visit("https://www.automationexercise.com");
});

When("busco por um produto", () => {
  cy.contains("Products").click();
  cy.get('#search_product').should('be.visible').type("Tshirt");
  cy.get('#submit_search').click();
  cy.contains("Searched Products").should("be.visible");
});

When("adiciono o produto buscado ao carrinho", () => {
  // Força o clique caso o modal de "Added" sobreponha o elemento
  cy.contains("Add to cart").first().click();
  cy.contains("View Cart").click();
});

Then("o produto deve aparecer no carrinho", () => {
  cy.get(".cart_description").should("be.visible");
});

// --- NOVO: TRATAMENTO DO MODAL E LOGIN ---

When("clico em Proceed To Checkout e escolho Register ou Login no modal", () => {
  cy.contains("Proceed To Checkout").click();
  // Clica no link "Register / Login" que aparece dentro do modal branco (imagem bb39c2)
  cy.get('.modal-body a[href="/login"]').click(); 
});

When("preencho email {string} e senha {string} para logar", (email, senha) => {
  cy.get('[data-qa="login-email"]').type("teste2024@teste.com.br");
  cy.get('[data-qa="login-password"]').type("teste");
  cy.get('[data-qa="login-button"]').click();
});

// --- FINALIZAÇÃO: CHECKOUT E PAGAMENTO ---

When("prossigo para o checkout final", () => {
  cy.contains("Proceed To Checkout").click();
  cy.contains("Place Order").click();
});

Then("após compra realizo o checkout com sucesso", () => {
  // Preenchimento dos dados conforme solicitado
  cy.get('[data-qa="name-on-card"]').type("João Pedro");
  cy.get('[data-qa="card-number"]').type("123456");
  cy.get('[data-qa="cvc"]').type("777");
  cy.get('[data-qa="expiry-month"]').type("12");
  cy.get('[data-qa="expiry-year"]').type("2029");
  
  cy.get('[data-qa="pay-button"]').click();
  
  // Validação final e encerramento
  cy.contains("Order Placed!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
});