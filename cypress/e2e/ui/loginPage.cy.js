import loginPage from '../../pages/loginPage'

describe('Login',function(){
    it('Login exitoso',function(){
        //Validacion login
        loginPage.visitPage()
        loginPage.typeUsername('standard_user')
        loginPage.typePassword('secret_sauce')
        loginPage.loginBtn()

        //Validacion de pantalla de inventario
        let url = 'https://www.saucedemo.com/inventory.html'
        cy.url(url).should('eq','https://www.saucedemo.com/inventory.html')
    })
})