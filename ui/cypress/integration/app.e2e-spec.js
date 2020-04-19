describe('Main app test', () => {
  beforeEach(() => {
    cy.setup()
  })

  it('Disclaimer text', () => {
    cy.get('.page-content > p').should('contain', `This an ALPHA application for demo purposes only. It's has been reviewed by any medical professionals.`)
    cy.setNavigatorLanguage('es-CL')
    if (navigator.language === 'pt-BR') {
      // TODO - Add proper intl string
      cy.get('.page-content > p').should('contain', `This an ALPHA application for demo purposes only. It's has been reviewed by any medical professionals.`)
    }
  })

  it('Start assessment button', () => {
    cy.get('[label="Start Assessment"]').click()
    cy.url().should('include', '/assess/page-1');
  })
})
