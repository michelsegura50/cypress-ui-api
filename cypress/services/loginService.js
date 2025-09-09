class BookingService{
    getBooking(id){
        return cy.request(`https://restful-booker.herokuapp.com/booking/${id}`)
    }
}

export default new BookingService()