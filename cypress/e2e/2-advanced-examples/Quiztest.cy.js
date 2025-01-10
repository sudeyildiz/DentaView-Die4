describe('Quiz Component Tests', () => {
    beforeEach(() => {
        // Besuche die Seite mit der Quiz-Komponente
        cy.visit('http://localhost:62824/Quiz');
    });

    it('should load the quiz questions correctly', () => {
        // Überprüfen, ob die Überschrift geladen ist
        cy.contains('Quiz zur Zahngesundheit & Zahnanatomie').should('exist');

        // Überprüfen, ob alle Fragen geladen sind
        cy.fixture('quiz.json').then((quiz) => {
            cy.get('form#quiz-form div').should('have.length', quiz.questions.length);
        });
    });

    it('should allow selecting answers for each question', () => {
        // Wähle eine Antwort für jede Frage
        cy.get('form#quiz-form div').each(($question) => {
            cy.wrap($question)
                .find('input[type="radio"]')
                .first()
                .check();
        });
    });

    it('should calculate the score and display results correctly', () => {
        // Wähle eine Antwort für jede Frage
        cy.get('form#quiz-form div').each(($question) => {
            cy.wrap($question)
                .find('input[type="radio"]')
                .first()
                .check();
        });

        // Sende das Formular ab
        cy.get('form#quiz-form').submit();

        // Überprüfe, ob das Ergebnis angezeigt wird
        cy.get('#result').should('exist');
        cy.get('#result p').contains('Sie haben').should('exist');

        // Überprüfe, ob falsche Antworten angezeigt werden, falls vorhanden
        cy.get('#result h3').contains('Falsche Antworten').should('exist');
    });

    it('should display the correct score when all answers are correct', () => {
        // Lade die Fragen aus der JSON-Datei
        cy.fixture('quiz.json').then((quiz) => {
            quiz.questions.forEach((question, index) => {
                cy.get(`input[name="q${index + 1}"]`)
                    .filter(`[value="${question.correctAnswer}"]`)
                    .check();
            });
        });

        // Sende das Formular ab
        cy.get('form#quiz-form').submit();

        // Überprüfen, ob die Punktzahl korrekt ist
        cy.fixture('quiz.json').then((quiz) => {
            cy.get('#result p').contains(`Sie haben ${quiz.questions.length} von ${quiz.questions.length} Fragen richtig beantwortet.`).should('exist');
        });
    });
});
