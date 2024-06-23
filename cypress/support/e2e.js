///<reference types="cypress" />

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.on("uncaught:exception", () => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
