// src/main/java/com/example/backend/controller/QuestionController.java
package com.example.backend.controller;

import com.example.backend.entity.Question;
import com.example.backend.repository.QuestionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    private final QuestionRepository repo;

    public QuestionController(QuestionRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Question> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> getById(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Question create(@RequestBody Question question) {
        return repo.save(question);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Question> update(@PathVariable Long id,
                                           @RequestBody Question input) {
        return repo.findById(id)
                .map(existing -> {
                    existing.setQuestion(input.getQuestion());
                    existing.setCorrectAnswer(input.getCorrectAnswer());
                    existing.setOptions(input.getOptions());
                    return ResponseEntity.ok(repo.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}