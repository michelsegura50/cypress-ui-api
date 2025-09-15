import loginPage from '../../pages/loginPage'

describe('Login', function(){

    beforeEach(()=>{
        loginPage.visitPage()
    })

    it('Login exitoso', function(){
        //Validacion login
        loginPage.typeUsername('standard_user')
        loginPage.typePassword('secret_sauce')
        loginPage.loginBtn()

        //Validacion de pantalla de inventario
        let url = 'https://www.saucedemo.com/inventory.html'
        cy.url(url).should('eq','https://www.saucedemo.com/inventory.html')
    })

    it('Login con campos vacios', function(){
        loginPage.loginBtn()
        cy.get('h3').should('contain','Epic sadface: Username is required')
    })

    it('Login con campos erroneos', function(){
        loginPage.typeUsername('standard_user')
        loginPage.typePassword('123')
        loginPage.loginBtn()
        cy.get('h3').should('contain','Epic sadface: Username and password do not match any user in this service')
    })

})