import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctCount, setCorrectCount] = useState(null);
    const [message, setMessage] = useState("");
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    useEffect(() => {
        // Quizdaten laden
        fetch('/json/quiz.json')
            .then(response => response.json())
            .then(data => {
                console.log("Geladene Fragen:", data.questions);
                setQuestions(data.questions);
            })
            .catch(error => console.error('Fehler beim Laden der Quiz-Daten:', error));
    }, []);

    const handleAnswerChange = (questionId, selectedAnswer) => {
        if (!questionId) {
            console.error("Fehler: Frage-ID ist undefined");
            return;
        }
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedAnswer,
        }));
    };

    const handleSaveAnswers = async () => {
        const username = "exampleUser"; // Optional dynamisch machen
        const answersToSave = Object.entries(userAnswers).map(([questionId, selectedAnswer]) => ({
            questionId: parseInt(questionId, 10),
            selectedAnswer,
            username,
        }));

        try {
            const response = await fetch('http://localhost:8080/api/user-answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answersToSave),
            });

            if (response.ok) {
                const correctCount = await response.json();
                setCorrectCount(correctCount);
                setMessage("Antworten erfolgreich gespeichert!");

                // Falsche Antworten identifizieren
                const incorrect = questions
                    .filter(q => userAnswers[q.id] !== q.correctAnswer)
                    .map(q => ({
                        question: q.question,
                        userAnswer: userAnswers[q.id],
                        correctAnswer: q.correctAnswer
                    }));
                setIncorrectAnswers(incorrect);
            } else {
                const errorMessage = await response.text();
                console.error("Fehler beim Speichern der Antworten:", errorMessage);
                setMessage("Fehler beim Speichern der Antworten: " + errorMessage);
            }
        } catch (error) {
            console.error("Netzwerkfehler:", error);
            setMessage("Netzwerkfehler: " + error.message);
        }
    };

    if (questions.length === 0) {
        return <div>Lade Quiz-Daten...</div>;
    }

    return (
        <div>
            <h2>Quiz</h2>
            <form>
                {questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.question}</p>
                        {question.options.map((option) => (
                            <label key={`${question.id}-${option}`}>
                                <input
                                    type="radio"
                                    name={`q${question.id}`} // Corrected variable interpolation
                                    value={option}
                                    onChange={() => handleAnswerChange(question.id, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
            </form>
            <button
                type="button"
                onClick={handleSaveAnswers}
                style={{
                    backgroundColor: '#ff66b2',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff3385'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff66b2'}
            >
                Antworten speichern
            </button>

            {message && <p>{message}</p>}
            {correctCount !== null && <p>Korrekte Antworten: {correctCount}</p>}

            {incorrectAnswers.length > 0 && (
                <div>
                    <h3>Falsche Antworten:</h3>
                    <ul>
                        {incorrectAnswers.map((item, index) => (
                            <li key={index} style={{ marginBottom: '10px' }}>
                                <strong>Frage:</strong> {item.question}<br />
                                <span style={{ color: 'red' }}><strong>Deine Antwort:</strong> {item.userAnswer || "Keine Antwort"}</span><br />
                                <span style={{ color: 'green' }}><strong>Richtige Antwort:</strong> {item.correctAnswer}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;