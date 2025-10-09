class AccountsPage {
    visitPage(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    }

    typeUsername(username){
        cy.get('input[name="username"]').type(username)
    }

    typePassword(password){
        cy.get('input[name="password"]').type(password)
    }

    loginBtn(){
        cy.get('input[type="submit"][value = "Log In"]').click()
    }

    validarPagina(){
        cy.get('.title').should('contain','Accounts Overview')
        //URL
        cy.url().should('include','https://parabank.parasoft.com/parabank/overview.htm')
    }

    tableAccounts(newAccount){
        cy.get('tbody tr').each(($row) => {
            cy.wrap($row).find('td').then($cells =>{
                const rowText = $cells.text()
                if(rowText.includes(newAccount)){
                    expect(rowText).to.include(newAccount)
                    cy.log(`Cuenta nueva: ${newAccount} en fila ${rowText}`)
                }
            })
        })
    }
}

export default new AccountsPage()