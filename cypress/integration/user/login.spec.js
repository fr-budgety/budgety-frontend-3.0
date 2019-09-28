describe('/auth/login', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
  })

  it('greets with signin message', () => {
    cy.get('#SignInMessage').contains('sign in')
  })
});
