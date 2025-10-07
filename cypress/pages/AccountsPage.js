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
}

export default new AccountsPage()