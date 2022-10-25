# Angular e2e test with Cypress

## version

- Angular: 14.2.0
- Cypress: 10.10.0

## Set up

```
 npm i cypress --save-dev
 npm run start
 npm run cypress open (  npx cypress open)
```

configure e-2-e enviroment step by step folloing the wizard

## Cypress Custom Commands

- add type info in cypress/support/index.ts
- add command declaration in cypress/support/commands.ts
  ![command](/screenshots/custom-command.png)

## Test navigation between pages

- main commands: cy.visit(..), cy.get(..),cy.go(..), cy.location("pathname").should("eq","..")

  ![navigation](/screenshots/navigation.png)

## Unit Test

- use Karma + Jasmine

```
ng test
```
