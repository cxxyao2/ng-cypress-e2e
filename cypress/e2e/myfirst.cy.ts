/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('my app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('displays h2 content', () => {
    cy.get('[data-test]').should('have.text', 'Next Steps');
    cy.getByData('h2').should('have.text', 'Next Steps');
  });

  it('navigate to dashboard', () => {
    cy.visit('http://localhost:4200/cards');
    cy.get('a').eq(0).click({ force: true });
    cy.location('pathname').should('include', 'dashboard');
  });

  it('navigate to detail', () => {
    cy.visit('http://localhost:4200/cards');
    cy.get('[routerLink]').eq(0).click();
    cy.go(-1);
    cy.get('a[id]').eq(0).click();
  });
});
