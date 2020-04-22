Cypress.Commands.add('setup', () => {
  cy.visit('localhost:4200/welcome', { failOnStatusCode: false });
});

Cypress.Commands.add('setNavigatorLanguage', (language = 'en') => {
  cy.visit('', {
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', {
        get: cy.stub().returns(language).as('language')
      })
    }
  })
});
