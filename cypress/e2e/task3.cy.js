///<reference types="cypress"/>

describe('task3', () => {
  it('sign in page', () => {
    cy.visit('https://demo.productionready.io/#/login');
    // select sign in page title
    cy.get('h1');

    // select link to switch to registeration form
    cy.contains('a', 'Need an account?');

    // select email input
    cy.get('input[type=email]');

    // select password input
    cy.get('input[type=password]');

    // select sign in button
    cy.get('fieldset').contains('Sign in'); // other way cy.get('fieldset').find('.btn')
  });

  it('main blog page', () => {
    cy.visit('https://demo.productionready.io/');

    //select homepage logo
    cy.get('.navbar-brand');

    //select home link in the navbar
    cy.get('ul[show-authed=false] .nav-item:first-child>.nav-link');

    //select sign up link in the navbar
    cy.get('.nav-item').find('.nav-link').contains('Sign up');

    //select homepage title
    cy.contains('h1', 'conduit');

    //select homepage subtitle
    cy.get('.banner p');

    //select popular tags
    cy.contains('Popular Tags');

    //select codebaseShow tag
    cy.contains('.tag-list>a', 'codebaseShow');

    //select deserunt tag
    cy.get('.tag-list>a').last();

    //select global feed link
    cy.get('.nav-link.active').contains('Global Feed');

    //select favorite button
    cy.get('article-preview:first-child favorite-btn');

    //select read more button
    cy.contains('span', 'Read more...');
  });
});
