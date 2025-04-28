// src/main/java/com/example/backend/controller/SubsectionController.java
package com.example.backend.controller;

import com.example.backend.entity.Subsection;
import com.example.backend.repository.SubsectionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subsections")
public class SubsectionController {
    private final SubsectionRepository repo;

    public SubsectionController(SubsectionRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Subsection> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subsection> getById(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Subsection create(@RequestBody Subsection subsection) {
        return repo.save(subsection);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subsection> update(@PathVariable Long id,
                                             @RequestBody Subsection input) {
        return repo.findById(id)
                .map(existing -> {
                    existing.setTitle(input.getTitle());
                    existing.setContent(input.getContent());
                    existing.setItems(input.getItems());
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