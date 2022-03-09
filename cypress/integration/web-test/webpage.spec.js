it("should enter John in the Name field", () => {
         cy.visit( 'https://alphabookstore.shop/contact')
         cy.findAllByLabelText('Name').type('John')
         //cy.findAllByText('John')
})

