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
        cy.get('tr').each(($row, index) => {
            cy.get('td').should('include', newAccount)
        })
    }
}

export default new AccountsPage()