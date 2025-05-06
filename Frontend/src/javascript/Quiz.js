import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [correctCount, setCorrectCount] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch quiz data from the JSON file
        fetch('/json/quiz.json')
            .then(response => response.json())
            .then(data => {
                console.log("Geladene Fragen:", data.questions); // Debugging
                setQuestions(data.questions);
            })
            .catch(error => console.error('Fehler beim Laden der Quiz-Daten:', error));
    }, []);

    const handleAnswerChange = (questionId, selectedAnswer) => {
        if (!questionId) {
            console.error("Fehler: Frage-ID ist undefined");
            return;
        }
        console.log("Frage-ID:", questionId, "Ausgewählte Antwort:", selectedAnswer); // Debugging
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedAnswer,
        }));
    };

    const handleSaveAnswers = async () => {
        const username = "exampleUser"; // Replace with dynamic username if available
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
                                    name={`q${question.id}`} // ← wichtig: so werden alle Optionen zu EINER Frage gruppiert
                                    value={option}
                                    onChange={() => {
                                        if (!question.id) {
                                            console.warn("Frage ohne ID:", question);
                                        }
                                        handleAnswerChange(question.id, option);
                                    }}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
            </form>
            <button type="button" onClick={handleSaveAnswers}>
                Antworten speichern
            </button>
            {message && <p>{message}</p>}
            {correctCount !== null && <p>Korrekte Antworten: {correctCount}</p>}
        </div>
    );
};

export default Quiz;
