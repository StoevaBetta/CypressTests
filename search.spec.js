/// <reference types="cypress" />
const { waitForElement, waitFor } = require("@testing-library/dom")

describe("Explore search", () => {
    beforeEach(() => {
        cy.visit("https://qa.fractional.art/")
    
    })

    it("Should be able to search for certain results", () =>{    
        cy.get("input[placeholder='search by curator, collection or asset']").type("!1"), ({ force: true })
        cy.get('[class=search-icon]').click({ force: true })
        cy.contains ('span[class="cursor-pointer text-blue-400 "]', 'Clear search').click({ force: true })
            })
})



