import React, { useState } from 'react';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    const answers = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "b",
        q6: "a",  // Neue Frage 1
        q7: "b",  // Neue Frage 2
        q8: "a",  // Neue Frage 3
        q9: "a",  // Neue Frage 4
        q10: "b", // Neue Frage 5
    };

    const questions = [
        {
            question: "Wie sollte die Zahnbürste bei der Anwendung der Bass-Methode gehalten werden?",
            options: ["Senkrecht zum Zahnfleisch", "In einem Winkel von 45 Grad zum Zahnfleisch", "Parallel zum Zahnfleisch"],
            correctAnswer: "In einem Winkel von 45 Grad zum Zahnfleisch"
        },
        {
            question: "Welcher Inhaltsstoff in Zahnpasta unterstützt die Remineralisierung des Zahnschmelzes und schützt vor Karies?",
            options: ["Fluorid", "Zink", "Hydroxylapatit"],
            correctAnswer: "Fluorid"
        },
        {
            question: "Welche Methode ist besonders geeignet, um Zahnzwischenräume zu reinigen?",
            options: ["Zahnseide", "Zahncreme", "Zahnbürste"],
            correctAnswer: "Zahnseide"
        },
        {
            question: "Welche Lebensmittel stärken den Zahnschmelz und neutralisieren Säuren?",
            options: ["Käse und Milchprodukte", "Zuckerhaltige Snacks", "Chips"],
            correctAnswer: "Käse und Milchprodukte"
        },
        {
            question: "Wie oft wird eine professionelle Zahnreinigung (PZR) empfohlen?",
            options: ["Alle 3 Monate", "Alle 6 Monate", "Einmal im Jahr"],
            correctAnswer: "Alle 6 Monate"
        },
        // Neue Fragen basierend auf dem Text
        {
            question: "Welche Schicht des Zahns ist die härteste Substanz im menschlichen Körper?",
            options: ["Zahnschmelz", "Dentin", "Zahnmark"],
            correctAnswer: "Zahnschmelz"
        },
        {
            question: "Welcher Teil des Zahns verankert den Zahn im Kieferknochen?",
            options: ["Wurzel", "Krone", "Zahnhals"],
            correctAnswer: "Wurzel"
        },
        {
            question: "Welche Zahnart ist ideal zum Reißen und Zerkleinern von Nahrung?",
            options: ["Eckzähne", "Schneidezähne", "Backenzähne"],
            correctAnswer: "Eckzähne"
        },
        {
            question: "Wie nennt man die äußere Schicht eines Zahns, die den Zahn vor Abnutzung schützt?",
            options: ["Zahnschmelz", "Dentin", "Zahnmark"],
            correctAnswer: "Zahnschmelz"
        },
        {
            question: "Was ist der Zahnhals?",
            options: ["Der Übergang zwischen Krone und Wurzel", "Der sichtbare Teil des Zahns", "Der innere Teil des Zahns"],
            correctAnswer: "Der Übergang zwischen Krone und Wurzel"
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        let currentScore = 0;
        let incorrects = [];

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const selectedAnswer = document.querySelector(`input[name="q${i + 1}"]:checked`);
            if (selectedAnswer) {
                const isCorrect = selectedAnswer.value === answers[`q${i + 1}`];
                if (isCorrect) {
                    currentScore++;
                } else {
                    incorrects.push({
                        question: question.question,
                        selectedAnswer: selectedAnswer.nextSibling.textContent.trim(),
                        correctAnswer: question.correctAnswer
                    });
                }
            }
        }

        setScore(currentScore);
        setIncorrectAnswers(incorrects);
        setShowResult(true);
    };

    return (
        <div>
            <h2>Quiz zur Zahngesundheit & Zahnanatomie</h2>
            <form id="quiz-form" onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        {question.options.map((option, i) => (
                            <label key={i}>
                                <input type="radio" name={`q${index + 1}`} value={String.fromCharCode(97 + i)} /> {option}
                            </label>
                        ))}
                    </div>
                ))}

                <button type="submit">Ergebnisse anzeigen</button>
            </form>

            {showResult && (
                <div id="result">
                    <p>Sie haben {score} von {questions.length} Fragen richtig beantwortet.</p>
                    {incorrectAnswers.length > 0 && (
                        <div>
                            <h3>Falsche Antworten:</h3>
                            <ul>
                                {incorrectAnswers.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.question}</strong><br />
                                        Richtige Antwort: {item.correctAnswer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
