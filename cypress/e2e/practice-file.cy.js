///<reference types="cypress"/>

describe('practice', () => {
  it('Add a medium size purple shirt to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('#search').type('Shirt');
    cy.wait(2000);
    cy.get('.action.search').click();
    cy.get('.product-item:first-child div[option-id="168"]').click();
    cy.get('.product-item:first-child .swatch-option.color:last-child').click();
    cy.get('.product-item:first-child form[data-role="tocart-form"]').submit();
    cy.wait(3000);
    cy.get('.action.showcart').click();
    cy.get('.block-minicart .details-qty.qty label+input').clear().type(3);
    //cy.get('#top-cart-btn-checkout').click();
  });
});