///<reference types="cypress"/>

describe('task4', () => {
  it('Add a medium size purple shirt to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.wait(2000);
    cy.get('#search').type('Shirt');
    cy.wait(2000);
    cy.get('.action.search').click();
    cy.get('.product-item:first-child div[option-id="168"]').click();
    cy.get('.product-item:first-child .swatch-option.color:last-child').click();
    cy.get('.product-item:first-child .tocart').click({ force: true });
    cy.wait(3000);
    cy.get('.action.showcart').click();
    cy.get('.details-qty.qty label+input').clear().type(3);
    cy.get('.details-qty.qty button').contains('Update').click();
    //cy.get('#top-cart-btn-checkout').click();
  });
});
