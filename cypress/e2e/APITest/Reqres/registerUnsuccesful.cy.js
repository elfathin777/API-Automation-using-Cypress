/// <reference types="cypress"/>

describe('Reqres API Testing - Register Unseccessful', () => {
    const apiKey = 'reqres-free-v1';

    it('POST /api/register (should return 400)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                email: "sydney@fife"
            },
            failOnStatusCode: false
            
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });
});
