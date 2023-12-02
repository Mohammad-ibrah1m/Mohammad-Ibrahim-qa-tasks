///<reference types="cypress"/>

describe('task5', () => {
  it('check that all fields/buttons in creating an account page are visible', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    cy.get('#firstname').should('be.visible');
    cy.get('#lastname').should('be.visible');
    cy.get('#email_address').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#password-confirmation').should('be.visible');
    cy.get('button.submit').should('be.visible');
  });
});
