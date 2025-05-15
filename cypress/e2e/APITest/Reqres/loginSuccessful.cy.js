/// <reference types="cypress"/>

describe('Reqres API Testing - Login Successful', () => {
    const apiKey = 'reqres-free-v1';

    it('POST api/login (should return 200)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: {
                'x-api-key': apiKey,
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },

            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token').and.to.be.a('string');
        });
    });
});
