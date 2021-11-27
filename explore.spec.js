/// <reference types="cypress" />

const { waitForElement } = require("@testing-library/dom")

describe("Explore search", () => {
    beforeEach(() => {
        cy.visit("https://qa.fractional.art")
    
    })

    it("Should navigate to Explore page once Explore is clicked", () =>{
        cy.get('a[href*="/explore"]').contains('Explore').click({ force: true })
        cy.url().should('include', "/explore")
    })

    it("Should be able to search for certain results", () =>{    
        cy.get('[name=search]').type("!1")
        cy.get('[class=search-icon]').click({ force: true })
        .should('have.value', 'Fractional CryptoPunks !1')
    }

)
})
