import ParabankService from "../../services/parabankService"

describe('Pruebas hibridas de parabank', function(){

    beforeEach(function(){
        cy.fixture('credentials').as('credentials') //Credenciales del login
    })

    it('loginAPI', function(){
        const user = this.credentials.usuarioParabank

        ParabankService.loginAPI(user.username,user.password).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(JSON.stringify(resp.body))
            Cypress.env('customerId',resp.body.id) //Guardamos el id del cleinte ingresado
        })
    })

    it('Cuentas cliente', function(){

        ParabankService.getAccounts(Cypress.env('customerId')).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(JSON.stringify(resp.body))
            Cypress.env('accounts',resp.body) //Guardamos las cuentas del cliente
        })
    })

    it('Crear nueva cuenta', function(){
        const tipoCuenta = [0, 1] //0 = Savings 1 = Checking
        const Cuentas = Cypress.env('accounts') //Cuentas guardadas del cliente
        const fromAccountId = Cuentas[0].id //Usamos la cuenta origen del cliente

        ParabankService.createAccount(Cypress.env('customerId'), fromAccountId,tipoCuenta[1]).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(JSON.stringify(resp.body))
            Cypress.env('newAccountId',resp.body) //Guardamos el id de la nueva cuenta
        })
    })
})