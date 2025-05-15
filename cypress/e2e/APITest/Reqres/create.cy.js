/// <reference types="cypress"/>

describe('Reqres API Testing - Create', () => {
    const apiKey = 'reqres-free-v1';

    it('POST Create (should return 201)', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                'x-api-key': apiKey,
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },

            body: {
                name: "morpheus",
                job: "leader"
            }
            
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'morpheus');
            expect(response.body).to.have.property('job', 'leader');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
        });
    });
});
