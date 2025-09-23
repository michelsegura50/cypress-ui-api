class BookingService{

    loginAPI(username,password){
        return cy.request({
            method: 'POST',
            url:'https://restful-booker.herokuapp.com/auth',
            headers:{
                'Content-Type': 'application/json'
            },
            body:{
                username : username,
                password : password
            }
        })
    }

    createBooking(booking){
        return cy.request({
            method: 'POST',
            url:'https://restful-booker.herokuapp.com/booking',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: booking
        })
    }

    getBooking(id){
        return cy.request(`https://restful-booker.herokuapp.com/booking/${id}`)
    }

    updateBooking(id,bookingUpdated){
        return cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${id}`,
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie' : `token=${Cypress.env('token')}` 
            },
            body: bookingUpdated
        })
    }

    deleteBooking(id){
        return cy.request({
            method: 'DELETE',
            url: `https://restful-booker.herokuapp.com/booking/${id}`,
            headers:{
                'Content-Type': 'application/json',
                'Cookie' : `token=${Cypress.env('token')}` 
            }
        })
    }

}

export default new BookingService()