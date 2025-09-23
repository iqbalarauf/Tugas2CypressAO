// Iqbal Abdul Rauf

describe('API Testing with Cypress', () => {
    let token, bookingId;
    let bookingData;

    const username = Cypress.env('username');
    const password = Cypress.env('password');

    it('POST - Create Auth', () => {
        cy.request('POST', '/auth', {
            username: username,
            password: password,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            expect(response.body.token).to.not.be.null
            token = response.body.token;
        })
    })
    it('POST - Create Booking', () => {
        cy.fixture('BookingData.json').then((data) => {
            bookingData = data;
            cy.request({
                method: 'POST',
                url: '/booking',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: bookingData
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('bookingid')
                expect(response.body.booking.firstname).to.eq(bookingData.firstname);
                bookingId = response.body.bookingid;
            })
        });
    });
    it('GET - Get Booking', () => {
        cy.request('GET', `/booking/${bookingId}`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.firstname).to.eq(bookingData.firstname);
            expect(response.body.lastname).to.eq(bookingData.lastname);
        })
    });
    it('DELETE - Delete Booking', () => {
        cy.request({
            method: 'DELETE',
            url: `/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    });
});