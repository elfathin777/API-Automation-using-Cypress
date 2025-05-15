/// <reference types="cypress"/>

describe('Reqres API Testing - Single User', () => {
    it('GET api/users/2 (should return 200)', () => {
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})