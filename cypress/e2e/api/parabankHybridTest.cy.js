import ParabankService from "../../services/parabankService"

describe('Pruebas hibridas de parabank', function(){

    beforeEach(function(){
        cy.fixture('credentials').as('credentials')
    })

    it('loginAPI', function(){
        const user = this.credentials.usuarioParabank

        ParabankService.loginAPI(user.username,user.password).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(JSON.stringify(resp.body))
            Cypress.env('customerId',resp.body.id)
        })
    })

    it('Cuentas cliente', function(){

        ParabankService.getAccounts(Cypress.env('customerId')).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(JSON.stringify(resp.body))
            Cypress.env('accounts',resp.body)
        })
    })

    it('Crear nueva cuenta', function(){

    })
})