describe('Ejemplo',function(){
    it('Visita Demo QA',function(){
        cy.visit('https://demoqa.com')
        cy.contains('Elements').should('be.visible')
    })
})