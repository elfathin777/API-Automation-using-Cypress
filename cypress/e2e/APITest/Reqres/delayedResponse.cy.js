/// <reference types="cypress"/>

describe('Reqres API Testing - Delayed Response', () => {
    const apiKey = 'reqres-free-v1';

    it('GET /api/users?delay=3 (should return 200)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('page', 1);
            expect(response.body).to.have.property('per_page', 6);
            expect(response.body).to.have.property('total', 12);
            expect(response.body).to.have.property('total_pages', 2);
            expect(response.body.data).to.be.an('array').with.length(6);
            expect(response.body.support).to.have.property('url').and.to.include('contentcaddy.io');
        });
    });
});
