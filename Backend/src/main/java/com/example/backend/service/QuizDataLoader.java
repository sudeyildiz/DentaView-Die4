package com.example.backend.service;

import com.example.backend.entity.Question;
import com.example.backend.entity.Quiz;
import com.example.backend.repository.QuestionRepository;
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

    @Value("classpath:quiz.json")
    private Resource quizJson;

    public QuizDataLoader(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @PostConstruct
    public void loadQuizData() {
        try (InputStream is = quizJson.getInputStream()) {

            // JSON hat "questions": [...]
            Map<String, List<Question>> quizMap = objectMapper.readValue(is, new TypeReference<>() {});
            List<Question> questions = quizMap.get("questions");

            // Neues Quiz erstellen (z. B. Titel festlegen)
            Quiz quiz = new Quiz();
            quiz.setTitle("Zahnwissen"); // Oder dynamisch, falls aus JSON
            for (Question question : questions) {
                question.setQuiz(quiz); // Setze Beziehung
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
