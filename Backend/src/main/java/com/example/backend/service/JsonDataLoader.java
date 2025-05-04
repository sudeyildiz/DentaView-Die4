package com.example.backend.service;

import com.example.backend.entity.Beitrag;
import com.example.backend.repository.BeitragRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;

@Component
public class JsonDataLoader {

    private final BeitragRepository beitragRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    // JSON-Dateien im Backend unter: src/main/resources/
    @Value("classpath:Beitrag1.json")
    private Resource beitrag1;

    @Value("classpath:Beitrag2.json")
    private Resource beitrag2;

    public JsonDataLoader(BeitragRepository beitragRepository) {
        this.beitragRepository = beitragRepository;
    }

    @PostConstruct
    public void loadJsonData() {
        try {
            loadBeitraege(beitrag1);
            loadBeitraege(beitrag2);
            System.out.println("✅ JSON-Daten erfolgreich geladen und gespeichert.");
        } catch (Exception e) {
            System.err.println("❌ Fehler beim Laden der JSON-Daten: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private void loadBeitraege(Resource resource) throws IOException {
        try (InputStream is = resource.getInputStream()) {
            System.out.println("📄 Lade Datei: " + resource.getFilename());
            Beitrag beitrag = objectMapper.readValue(is, new TypeReference<Beitrag>() {});
            beitragRepository.save(beitrag);
        }
    }
}
