describe('My First Test', () => {
  it('Is a work in progress..', () => {
    cy.visit('https://example.cypress.io')

    cy.get('h1').should('have.text', 'Kitchen Sink')
    
    cy.visit('https://example.cypress.io/commands/querying')

    cy.get('#query-btn').should('contain', 'Button').click()

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email').type('immaculateleila202@gmail.com')

  })
})