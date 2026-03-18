import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("envio um GET para API publica", () => {
  cy.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts"
  }).as("response");
});

Then("o retorno deve ser 200", () => {
  cy.get("@response").then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.not.be.empty;
  });
});