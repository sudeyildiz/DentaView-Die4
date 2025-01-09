describe('ThreeDModel Component', () => {
    beforeEach(() => {
        // Visit the page that renders the ThreeDModel component
        cy.visit('http://localhost:58645/model'); // Adjust the path according to your app
    });

    it('should load and render the 3D model correctly', () => {
        // Check if the canvas element exists
        cy.get('canvas').should('exist');

        // Create a stub for the GLTFLoader
        cy.window().then((win) => {
            const originalLoad = win.THREE.GLTFLoader.prototype.load;
            cy.stub(win.THREE.GLTFLoader.prototype, 'load').callsFake((url, onLoad, onProgress, onError) => {
                const fakeScene = new win.THREE.Scene();
                onLoad({ scene: fakeScene });
                originalLoad.call(this, url, onLoad, onProgress, onError);
            });
        });

        // The model should be loaded and added to the scene
        cy.window().then((win) => {
            cy.stub(console, 'log').as('progressLogger');
        });

        // Check if progress logs are displayed
        cy.get('@progressLogger').should('be.called');

        // Wait to ensure the model is displayed
        cy.wait(2000); // Adjust based on app performance

        // Check if the model is rendered
        cy.get('canvas').then(($canvas) => {
            const canvas = $canvas[0];
            const glContext = canvas.getContext('webgl');
            expect(glContext).to.not.be.null;
        });
    });
});