package com.example.backend.service;

import com.example.backend.entity.Question;
import com.example.backend.entity.Quiz;
import com.example.backend.repository.QuizRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

@Component
public class QuizDataLoader {

    private final QuizRepository quizRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    // ✅ Anpassung: quiz.json liegt direkt unter resources, nicht in /data
    @Value("classpath:quiz.json")
    private Resource quizJson;

    public QuizDataLoader(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @PostConstruct
    public void loadQuizData() {
        try (InputStream is = quizJson.getInputStream()) {

            // Lade die Fragen aus der JSON-Datei (mit "questions"-Array)
            Map<String, List<Question>> quizMap = objectMapper.readValue(is, new TypeReference<>() {});
            List<Question> questions = quizMap.get("questions");

            // Neues Quiz-Objekt
            Quiz quiz = new Quiz();
            quiz.setId(null);
            quiz.setTitle("Zahnwissen");

            for (Question question : questions) {
                question.setId(null);            // Wichtig für persist
                question.setQuiz(quiz);          // Beziehung setzen
            }

            quiz.setQuestions(questions);

            quizRepository.save(quiz);
            System.out.println("✅ Quiz mit Fragen erfolgreich geladen.");

        } catch (Exception e) {
            System.err.println("❌ Fehler beim Laden der Quizdaten: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
