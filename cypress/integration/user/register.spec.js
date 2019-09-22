import { INPUT_ERRORS } from '../../../src/utils/const/const.messages'

describe('/auth/register', () => {
  beforeEach(() => {
    cy.visit('/auth/register')
  })

  it('greets with signup message', () => {
    cy.get('#WelcomeMessage').contains('Sign up')
  })

  // Registration form
  it('links to the privacy policy', () => {
    cy.contains('Privacy Policy').should('have.attr', 'href', '/privacy-policy')
  })

  it('requires an email of type email', () => {
    const emails = { wrongEmailOne: 'abc', wrongEmailTwo: 'abc@abc' }

    // email is required
    cy.get('form').contains('Create account').click()
    cy.get('.EmailFormGroup').contains(INPUT_ERRORS.required)

    // email must be an email
    cy.get('[data-test=email]').type(emails.wrongEmailOne)
    cy.get('form').contains('Create account').click()
    cy.get('.EmailFormGroup').contains(INPUT_ERRORS.notAnEmail)

    // email must be an email
    cy.get('[data-test=email]').type(emails.wrongEmailTwo)
    cy.get('form').contains('Create account').click()
    cy.get('.EmailFormGroup').contains(INPUT_ERRORS.notAnEmail)
  })

  it('requires a password between 8 and 16 charcters', () => {
    const passwords = { shortPassword: 'abc', longPassword: 'dfnaosdjfasooirwewtwwert' }
    // Password is required
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.required)

    // Password must be between 8 and 16 characters
    cy.get('[data-test=password]').type(passwords.shortPassword)
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.wrongLenght)

    cy.get('[data-test=password]').type(passwords.longPassword)
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.wrongLenght)
  })

  it('requires a strong password', () => {
    const passwords = {
      pwdLowercase: 'password',
      pwdUppercase: 'PASSWORD',
      pwdSymbol: 'passworD!',
      pwdNumber: 'passw0rD'
    }
    // Try a lowercase password
    cy.get('[data-test=password]').type(passwords.pwdLowercase)
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.passwordStrenghtLetters)

    // Try an uppercase password
    cy.get('[data-test=password]').clear().type(passwords.pwdUppercase)
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.passwordStrenghtLetters)

    // Try a password without a number
    cy.get('[data-test=password]').clear().type(passwords.pwdSymbol)
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.passwordStrenghtNumbers)

    // Try a password without a symbol
    cy.get('[data-test=password]').clear().type(passwords.pwdSymbol)
    cy.get('form').contains('Create account').click()
    cy.get('.PasswordFormGroup').contains(INPUT_ERRORS.passwordStrenghtNumbers)
  })

  it('changes the password meter based on the password strength', () => {
    const passwords = {
      strengthWeak: 'Lampone',
      strengthFair: 'Lampone0',
      strengthGood: 'Lampone01',
      strengthStrong: 'Lampone01!!'
    }
    // Test weak password
    cy.get('[data-test=password]').type(passwords.strengthWeak)
    cy.get('[data-test=password-meter]').contains('Weak')

    // Test fair password
    cy.get('[data-test=password]').clear().type(passwords.strengthFair)
    cy.get('[data-test=password-meter]').contains('Fair')

    // Test good password
    cy.get('[data-test=password]').clear().type(passwords.strengthGood)
    cy.get('[data-test=password-meter]').contains('Good')

    // Test strong password
    cy.get('[data-test=password]').clear().type(passwords.strengthStrong)
    cy.get('[data-test=password-meter]').contains('Strong')

  })

  it('requires a confirmation password', () => {
    // Confirmation password is required
    cy.get('form').contains('Create account').click()
    cy.get('.ConfirmPasswordFormGroup').contains(INPUT_ERRORS.required)
  })

  it('requires that password and confirmation are matching', () => {
    const passwords = { password: 'LampOn2!!', confirmPassword: 'Lamp0n' }

    cy.get('[data-test=password]').type(passwords.password)
    cy.get('[data-test=confirmPassword]').type(passwords.confirmPassword)
    cy.get('form').contains('Create account').click()
    cy.get('.ConfirmPasswordFormGroup').contains(INPUT_ERRORS.passwordMustMatch)

  })

  it('gives no error if all conditions are met', () => {
    const credentials = {
      email: 'user@email.com',
      password: 'LampOn2!!',
      confirmPassword: 'LampOn2!!'
    }

    // Type data inside form
    cy.get('[data-test=email]').type(credentials.email)
    cy.get('[data-test=password]').type(credentials.password)
    cy.get('[data-test=confirmPassword]').type(credentials.confirmPassword)
    cy.get('form').contains('Create account').click()

    // There should be no errors
    cy.get('.error-message').should('have.length', 0)
  })

});

/**
 * @todo: Signup with google, test api, privacy policy, password strength
 */
