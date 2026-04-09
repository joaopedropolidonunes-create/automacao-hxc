/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    // 1. Visita o arquivo local (o caminho relativo indicado no exercício)
    cy.visit('./src/index.html')

    // 2. Verifica se o título da aplicação é o esperado
    // cy.title() pega o título da aba e .should() faz a validação (o Assert)
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})