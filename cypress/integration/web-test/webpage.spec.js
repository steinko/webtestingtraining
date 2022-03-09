it("should enter John in the Name field", () => {
         cy.visit( 'https://alphabookstore.shop')
         cy.get("[placeholder*='Enter your name']").type('John')
})