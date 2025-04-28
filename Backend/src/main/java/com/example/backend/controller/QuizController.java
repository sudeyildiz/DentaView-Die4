// src/main/java/com/example/backend/controller/QuizController.java
package com.example.backend.controller;

import com.example.backend.entity.Quiz;
import com.example.backend.repository.QuizRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {
    private final QuizRepository repo;

    public QuizController(QuizRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Quiz> list() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> get(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Quiz create(@RequestBody Quiz quiz) {
        return repo.save(quiz);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}