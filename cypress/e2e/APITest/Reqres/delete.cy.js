/// <reference types="cypress"/>

describe('Reqres API Testing - Delete', () => {
    const apiKey = 'reqres-free-v1';

    it('DELETE api/users/2 (should return 204)', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});
