it("should enter John in the Name field", () => {
	
         cy.visit(Cypress.env('HOST'))
         const nameField=cy.findByLabelText('Name:')
         nameField.type('John')
         cy.findByText("Submit").click()
        // cy.contains('John')

})
