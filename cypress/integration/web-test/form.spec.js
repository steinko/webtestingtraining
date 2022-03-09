it.skip("should enter John in the Name field", () => {
         cy.visit( 'http://localhost:3000')
         cy.get("input").type('John')
         cy.contains('John')
})
