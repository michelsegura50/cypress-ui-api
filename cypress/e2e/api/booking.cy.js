import bookingService from "../../services/bookingService"

describe('Restful-booker E2E', function(){
    //Login solo se ejecuta una vez para todos los test y usan su token
    before(function(){
        cy.fixture('credentials').then((credentials)=>{
            const user = credentials.usuarioAPI
            bookingService.loginAPI(user.username,user.password).then((resp)=>{
                expect(resp.status).to.eq(200)
                Cypress.env('token',resp.body.token)
                cy.log(resp.body.token)
            })        
        })
    })
    //Se crea un booking aislado para cada test
    beforeEach(()=>{
        cy.fixture('bookingData').then((data)=>{
            bookingService.createBooking(data.bookingData).then((resp)=>{
            expect(resp.status).to.eq(200)
            cy.log(resp.body.bookingid)
            expect(resp.body.bookingid).to.be.a('number')
            expect(resp.body.booking.firstname).to.eq(data.bookingData.firstname)

            Cypress.env('bookingId',resp.body.bookingid)
            })
        })
    })

    //Se lee el booking creado 
    it('getBooking', function(){
        bookingService.getBooking(Cypress.env('bookingId')).then((resp)=>{
            expect(resp.status).to.eq(200)
            expect(resp.body.firstname).to.exist
        })
    })

    //Se actualiza el booking creado
    it('updateBooking', function(){

        cy.fixture('bookingUpdate').then((update)=>{
            bookingService.updateBooking(Cypress.env('bookingId'), update.update).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body.firstname).to.eq(update.update.firstname)
            })
        })
    })

    //Despues de cada test se borra el booking
    afterEach(()=>{
        it('deleteBooking', function(){
            bookingService.deleteBooking(Cypress.env('bookingId')).then((resp)=>{
                cy.log(Cypress.env('bookingId'))
                expect([200,201]).to.include(resp.status)
                cy.log(`Booking eliminado en afterEach: ${Cypress.env('bookingId')}`)
                
            })
        })
    })    
    
})