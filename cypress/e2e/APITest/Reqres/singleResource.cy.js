/// <reference types="cypress"/>

describe('Reqres API Testing - Single Resource', () => {
    it('GET api/unknown (should return 200)', () => {
        cy.request('GET', 'https://reqres.in/api/unknown')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})