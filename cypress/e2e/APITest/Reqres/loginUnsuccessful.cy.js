/// <reference types="cypress"/>

describe('Reqres API Testing - Login Unsuccessful', () => {
    const apiKey = 'reqres-free-v1';

    it('POST api/login (should return 400)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: {
                'x-api-key': apiKey,
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },

            body: {
                "email": "peter@klaven"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });
});
