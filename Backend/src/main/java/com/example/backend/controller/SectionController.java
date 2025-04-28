// src/main/java/com/example/backend/controller/SectionController.java
package com.example.backend.controller;

import com.example.backend.entity.Section;
import com.example.backend.repository.SectionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sections")
public class SectionController {
    private final SectionRepository repo;

    public SectionController(SectionRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Section> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Section> getById(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Section create(@RequestBody Section section) {
        return repo.save(section);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Section> update(@PathVariable Long id,
                                          @RequestBody Section input) {
        return repo.findById(id)
                .map(existing -> {
                    existing.setTitle(input.getTitle());
                    existing.setContent(input.getContent());
                    existing.setSubsections(input.getSubsections());
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