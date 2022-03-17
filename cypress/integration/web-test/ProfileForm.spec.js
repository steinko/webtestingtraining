it.skip("should toggel display and hide of details", () => {
	
         cy.visit(Cypress.env('HOST'))

         cy.contains(/This is my 5th/).should('exist')
         cy.findByText('Hide Details').click()
         cy.not(/This is my 5th/)

         cy.findByText("Display Details").shouild('exist')
         cy.findByText("Hide Details").shouild('not.exist')

         cy.findByText("Display Details").click()
         cy.contains(/This is my 5th/).should('exist')

         cy.findByText("Display Details").should('nor.exist')
         cy.findByText("Hide Details").shouild('exist')
         
})
