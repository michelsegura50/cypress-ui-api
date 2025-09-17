class BookingService{
    getBooking(id){
        return cy.request(`https://restful-booker.herokuapp.com/booking/${id}`)
    }

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

}

export default new BookingService()