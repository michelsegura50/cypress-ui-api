import bookingService from "../../services/bookingService"

describe('Restful-booker E2E', function(){

    beforeEach(()=>{
        cy.fixture('booking').as('booking')
    })

    it('loginAPI', function(){
        const user = this.booking.usuarioAPI

        bookingService.loginAPI(user.username,user.password).then((resp)=>{
            expect(resp.status).to.eq(200)
            Cypress.env('token',resp.body.token)
        })
    })
})