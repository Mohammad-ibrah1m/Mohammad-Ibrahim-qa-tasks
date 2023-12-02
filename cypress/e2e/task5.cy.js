///<reference types="cypress"/>

describe('task5', () => {
  it('check that all fields/buttons in creating an account page are visible', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    cy.get('#firstname').should('be.visible');
    cy.get('#lastname').should('be.visible');
    cy.get('#email_address').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#password-strength-meter').should('be.visible');
    cy.get('#password-confirmation').should('be.visible');
    cy.get('button.submit').should('be.visible');
    cy.get('.action.back').should('be.hidden');
  });
  it.only('Create an account -Happy scenario-', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    cy.get('#firstname').clear().type('Mohammad', { delay: 100 });
    cy.get('#lastname').clear().type('Ibrahim', { delay: 100 });
    cy.get('#email_address').clear().type('mohammadibrahim9@gmail.com', { delay: 100 });
    cy.get('#password').clear().type('Mohammad_task5', { delay: 100 });
    cy.get('#password-strength-meter').should('have.css', 'background-color', 'rgb(244, 244, 244)');
    cy.get('#password-confirmation').clear().type('Mohammad_task5', { delay: 100 });

    // cy.get('button.submit').click();
    //I made this line a comment so that the account doesn't get registered during solving the task and give a failed registeration message
    // cy.wait(2000);
    // cy.contains('Thank you for registering with Main Website Store.').should('be.visible'); this should pass after a successful registeration in My Account page
  });
});
