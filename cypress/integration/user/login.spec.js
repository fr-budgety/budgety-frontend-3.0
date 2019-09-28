describe('/auth/login', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
  })

  it('shows login page at "/" path ', () => {
    cy.visit('/auth/login')
    cy.get('#SignInMessage').contains('sign in')
  })

  it('greets with signin message', () => {
    cy.get('#SignInMessage').contains('sign in')
  })

  it('let you go to register page if you have not an account', () => {
    cy.get('[data-test="login-link"]').click()
    cy.url().should('include', '/auth/register')
  })

  it.skip('gives error if the email has not a correct format', () => {
  })

  it.skip('redirects to the dashboard page if the login is correct', () => {
  })

  it.skip('redirects to the dashboard page if user already a session cookie', () => {
  })

  it.skip('gives error if username is incorrect', () => {
  })

  it.skip('gives error if password is incorrect', () => {
  })

});
