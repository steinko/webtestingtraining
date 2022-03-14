it("should enter John in the Name field", () => {
	
         cy.visit(Cypress.env('HOST'))
         cy.findByLabelText('Name:').type('John')
         cy.findByText("Submit").click()
         cy.on('window:alert', (message) => {
                expect(message).toBe('A name was submitted: John')
         })
         cy.on('window:confirm', () => true);
         cy.findAllByDisplayValue('John').should('exist')

})
