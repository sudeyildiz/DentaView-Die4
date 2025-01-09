/// <reference types="cypress" />

describe('Quiz App End-to-End Test', () => {
    beforeEach(() => {
        // Besuche die Seite und warte, bis sie geladen ist
        cy.visit('http://localhost:58645/Quiz', { timeout: 20000 }); // Passe die URL an, falls nötig
    });

    it('should load the quiz and display questions', () => {
        // Überprüfe, ob das Quiz korrekt geladen wurde
        cy.contains('h2', 'Quiz zur Zahngesundheit & Zahnanatomie', { timeout: 10000 }).should('exist');
        cy.get('form#quiz-form').should('exist');
        cy.get('form#quiz-form div').should('have.length', 10); // Überprüft, ob 10 Fragen angezeigt werden
    });

    it('should allow answering questions and display results', () => {
        // Überprüfen, ob das Formular vorhanden ist
        cy.get('form#quiz-form', { timeout: 10000 }).should('exist');

        // Beantworte jede Frage
        cy.get('input[name="q1"][value="b"]').should('exist').check();
        cy.get('input[name="q2"][value="a"]').check();
        cy.get('input[name="q3"][value="a"]').check();
        cy.get('input[name="q4"][value="a"]').check();
        cy.get('input[name="q5"][value="b"]').check();
        cy.get('input[name="q6"][value="a"]').check();
        cy.get('input[name="q7"][value="b"]').check();
        cy.get('input[name="q8"][value="a"]').check();
        cy.get('input[name="q9"][value="a"]').check();
        cy.get('input[name="q10"][value="b"]').check();

        // Sende das Formular ab
        cy.get('form#quiz-form').submit();

        // Überprüfe das Ergebnis
        cy.get('#result', { timeout: 10000 }).should('exist');
        cy.get('#result p').should('contain', 'Sie haben 10 von 10 Fragen richtig beantwortet.');
    });
});
