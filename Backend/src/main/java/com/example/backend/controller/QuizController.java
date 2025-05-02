package com.example.backend.controller;

import com.example.backend.entity.Quiz;
import com.example.backend.repository.QuizRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizRepository quizRepository;

    public QuizController(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    // Alle Quizzes abrufen (inkl. Fragen)
    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    // Ein Quiz per ID abrufen
    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable Long id) {
        return quizRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Optional: Neues Quiz inkl. Fragen anlegen (wenn gewünscht)
    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizRepository.save(quiz);
    }
}
