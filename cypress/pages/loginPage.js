class LoginPage {
    visitPage(){
        cy.visit('https://www.saucedemo.com/')
    }

    typeUsername(username){
        cy.get('#user-name').type(username)
    }

    typePassword(password){
        cy.get('#password').type(password)
    }

    loginBtn(){
        cy.get('#login-button').click()
    }
}

export default new LoginPage()