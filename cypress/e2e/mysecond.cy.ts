/// <reference types="cypress" />

describe('force login and navigate', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('login and navigate', () => {
    cy.visit('http://localhost:4200/cards');
    cy.getByData('logout').should('exist');
    cy.getByData('logout').click();
    cy.location('pathname').should('eq', '/login');
    cy.getByData('login').click();
    cy.location('pathname').should('eq', '/cards');
  });

  it('logout and navigate', () => {
    cy.visit('http://localhost:4200/cards');
    cy.getByData('logout').should('exist');
    cy.getByData('logout').click();
    cy.visit('http://localhost:4200/cards');
  });

  it('cy.request() - make a XHR request', () => {
    const BACKEND_URL = 'https://bakend-jennifer.herokuapp.com/api/products';

    cy.request(BACKEND_URL).should((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('length');
      expect(res.body).property('length').to.equal(11);
    });
  });

});
