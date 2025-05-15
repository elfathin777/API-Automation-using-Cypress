/// <reference types="cypress"/>

describe('Reqres API Testing - List Resource', () => {
    const apiKey = 'reqres-free-v1';

    it('GET api/unknown (should return 200)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
        });
    });
});
