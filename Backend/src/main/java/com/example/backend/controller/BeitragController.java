package com.example.backend.controller;

import com.example.backend.entity.Beitrag;
import com.example.backend.repository.BeitragRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.backend.entity.Section;

import java.util.List;

@RestController
@RequestMapping("/api/beitraege")
public class BeitragController {

    private final BeitragRepository repo;

    public BeitragController(BeitragRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Beitrag> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beitrag> getById(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Beitrag create(@RequestBody Beitrag beitrag) {
        return repo.save(beitrag);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Beitrag> update(@PathVariable Long id,
                                          @RequestBody Beitrag input) {
        return repo.findById(id)
                .map(existing -> {
                    existing.setTitle(input.getTitle());
                    existing.setDescription(input.getDescription());
                    existing.setSections(input.getSections());
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