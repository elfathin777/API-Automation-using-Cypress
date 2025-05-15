/// <reference types="cypress"/>

describe('Reqres API Testing - Update Using PATCH', () => {
    const apiKey = 'reqres-free-v1';

    it('PATCH api/users/2 (should return 200)', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': apiKey,
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },

            body: {
                name: "morpheus",
                job: "zion resident"
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'morpheus');
            expect(response.body).to.have.property('job', 'zion resident');
            expect(response.body).to.have.property('updatedAt');
        });
    });
});
