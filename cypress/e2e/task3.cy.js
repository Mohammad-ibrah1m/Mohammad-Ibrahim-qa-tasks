///<reference types="cypress"/>

describe('task3', () => {
  it('sign in page', () => {
    cy.visit('https://demo.productionready.io/#/login');
    // check sign in page title
    cy.get('h1');

    // check link to switch to registeration form
    cy.contains('a', 'Need an account?');

    // check email input
    cy.get('input[type=email]');

    // check password input
    cy.get('input[type=password]');

    // check sign in button
    cy.get('fieldset').contains('Sign in'); // other way cy.get('fieldset').find('.btn')
  });
});
