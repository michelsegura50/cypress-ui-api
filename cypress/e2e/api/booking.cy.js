import bookingService from "../../services/bookingService"

describe('Restful-booker E2E', function(){

    beforeEach(()=>{
        cy.fixture('credentials').as('credentials')
        cy.fixture('bookingData').as('bookingData')
        cy.fixture('bookingUpdate').as('bookingUpdate')
    })

    it('loginAPI', function(){
        const user = this.credentials.usuarioAPI

        bookingService.loginAPI(user.username,user.password).then((resp)=>{
            expect(resp.status).to.eq(200)
            Cypress.env('token',resp.body.token)
            cy.log(resp.body.token)
        })
    })
    
    it('createBooking', function(){
        const booking = this.bookingData.bookingData

        bookingService.createBooking(booking).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(resp.body.bookingid)
            expect(resp.body.bookingid).to.eq(resp.body.bookingid)
            expect(resp.body.booking.firstname).to.exist
            Cypress.env('bookingId',resp.body.bookingid)
        })
    })

    it('getBooking', function(){
        bookingService.getBooking(412).then((resp)=>{
            expect(resp.status).to.eq(200)
            expect(resp.body.firstname).to.exist
        })
    })

    it('updateBooking', function(){
        const update = this.bookingUpdate.update

        bookingService.updateBooking(Cypress.env('bookingId'), update).then((resp)=>{
            expect(resp.status).to.eq(200)
            expect(resp.body.firstname).to.exist
        })
    })
    
})