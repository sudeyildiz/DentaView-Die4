// src/main/java/com/example/backend/controller/ImpressumController.java
package com.example.backend.controller;

import com.example.backend.entity.Impressum;
import com.example.backend.repository.ImpressumRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/impressum")
public class ImpressumController {
    private final ImpressumRepository repo;

    public ImpressumController(ImpressumRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Impressum> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Impressum create(@RequestBody Impressum imp) {
        return repo.save(imp);
    }
}