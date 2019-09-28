import { INPUT_ERRORS } from '../../../src/utils/const/const.messages'

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

  it('shows Google OAuth button', () => {
    cy.get('[data-test="google-oauth"]')
  })


  it('gives error if the email has not a correct format', () => {
    const emails = { wrongEmailOne: 'abc', wrongEmailTwo: 'abc@abc' }

    // email is required
    cy.get('form').contains('Sign in').click()
    cy.get('.EmailFormGroup').contains(INPUT_ERRORS.required)

    // email must be an email
    cy.get('[data-test=email]').type(emails.wrongEmailOne)
    cy.get('form').contains('Sign in').click()
    cy.get('.EmailFormGroup').contains(INPUT_ERRORS.notAnEmail)

    // email must be an email
    cy.get('[data-test=email]').type(emails.wrongEmailTwo)
    cy.get('form').contains('Sign in').click()
    cy.get('.EmailFormGroup').contains(INPUT_ERRORS.notAnEmail)
  })

  it('redirects to the dashboard page if the login is correct', () => {
  })

  it('redirects to the dashboard page if user already a session cookie', () => {
  })

  it('gives error if username is incorrect', () => {
  })

  it('gives error if password is incorrect', () => {
  })

});
