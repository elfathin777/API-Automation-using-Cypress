/// <reference types="cypress"/>

describe('Reqres API Testing - List Users', () => {
    const apiKey = 'reqres-free-v1';

    it('GET api/users?page=2 (should return 200)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        })
        .then((response) => { 
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
        });
    });
});
