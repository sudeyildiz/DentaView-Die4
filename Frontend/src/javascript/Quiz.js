import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('/json/quiz.json')
            .then(response => response.json())
            .then(data => setQuestions(data.questions))
            .catch(error => console.error('Fehler beim Laden der Quiz-Daten:', error));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let currentScore = 0;
        let incorrects = [];

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const selectedAnswerInput = document.querySelector(`input[name="q${i + 1}"]:checked`);

            if (selectedAnswerInput) {
                const selectedAnswer = selectedAnswerInput.value;
                const isCorrect = selectedAnswer === question.correctAnswer;

                // Zähle Punkte
                if (isCorrect) {
                    currentScore++;
                } else {
                    incorrects.push({
                        question: question.question,
                        selectedAnswer: selectedAnswerInput.nextSibling.textContent.trim(),
                        correctAnswer: question.correctAnswer
                    });
                }

                // ✅ API-Aufruf: Antwort an Backend senden
                try {
                    await fetch("http://localhost:8080/api/user-answers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            questionId: question.id,              // ← muss im Backend existieren
                            selectedAnswer: selectedAnswer,
                            username: "klara"                      // ← später dynamisch
                        }),
                    });
                } catch (err) {
                    console.error(`Fehler beim Speichern der Antwort zu Frage ${question.id}:`, err);
                }
            }
        }

        setScore(currentScore);
        setIncorrectAnswers(incorrects);
        setShowResult(true);
    };

    if (questions.length === 0) {
        return <div>Lade Quiz-Daten...</div>;
    }

    return (
        <div>
            <h2>Quiz zur Zahngesundheit & Zahnanatomie</h2>
            <form id="quiz-form" onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        {question.options.map((option, i) => (
                            <label key={i}>
                                <input type="radio" name={`q${index + 1}`} value={option} /> {option}
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
