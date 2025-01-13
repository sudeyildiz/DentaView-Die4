describe('Application Load Test', () => {
    it('should load the application successfully', () => {
        // Visit the application on localhost
        cy.visit('http://localhost:3000'); // Adjust the port if necessary

        // Check if the main element of the application exists
        cy.get('body').should('exist');
    });
});