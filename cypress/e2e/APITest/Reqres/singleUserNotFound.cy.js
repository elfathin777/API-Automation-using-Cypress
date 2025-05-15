/// <reference types="cypress"/>

describe('Reqres API Testing - Single User Not Found', () => {
    const apiKey = 'reqres-free-v1';

    it('GET api/users/23 (should return 404)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.deep.equal({});
        });
    });
});
