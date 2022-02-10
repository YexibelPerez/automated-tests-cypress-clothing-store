///<reference types="Cypress"/>

describe('Search elements', () => {
    beforeEach(()=>{
        cy.visit('/');
    })

    it('search for elements with multiple results', () => {
        
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('Dress');
            cy.get(index.searchButton).click();
        })

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain', '"Dress"');
        })
    })

    it('search for element with no result', () => {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })

        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })
})