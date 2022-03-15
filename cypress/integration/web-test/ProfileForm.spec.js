it.skip("should toggel display and hide of details", () => {
	
         cy.visit(Cypress.env('HOST'))
         
         cy.findByText('Hide Details').click()

         expect(cy.findByText("Display Details")).toBeInTheDocument()
         expect(cy.findByText("Hide Details")).not.toBeInTheDocument()

         cy.findByText("Display Details").click()

         expect(cy.findByText("Display Details")).not.toBeInTheDocument();
         expect(cy.findByText("Hide Details")).toBeInTheDocument()
         
})
