/// <reference types="cypress"/>

describe('Reqres API Testing - Register Successful', () => {
    const apiKey = 'reqres-free-v1';

    it('POST api/register (should return 200)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
                'x-api-key': apiKey,
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },

            body: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200); // Created
            expect(response.body).to.have.property('id', 4); // id baru dibuat
            expect(response.body).to.have.property('token').and.to.be.a('string'); // timestamp dibuat
        });
    });
});
