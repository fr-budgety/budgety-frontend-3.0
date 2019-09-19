describe('Registration', () => {
  it('successfully goes to registration page', () => {
    cy.visit('http://localhost:3000/auth/register');
    cy.contains('Sign up');
  })
});
