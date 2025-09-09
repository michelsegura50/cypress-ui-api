class LoginPage {
    visit(){
        cy.visit('https://example.cypress.io/commands/actions')
    }

    typeUsername(username){
        cy.get('#username').type(username)
    }

    typePassword(password){
        cy.get('#password').type(password)
    }

    submit(){
        cy.get('form').submit()
    }
}

export default new LoginPage()