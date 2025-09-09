describe('API Example Test', function(){
    it('GET Request to public API ', function(){
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('eq',200)
    })
})