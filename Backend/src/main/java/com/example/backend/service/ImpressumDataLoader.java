package com.example.backend.service;

import com.example.backend.entity.Impressum;
import com.example.backend.repository.ImpressumRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;

@Component
public class ImpressumDataLoader {

    private final ImpressumRepository impressumRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("classpath:impressum.json")
    private Resource impressumJson;

    public ImpressumDataLoader(ImpressumRepository impressumRepository) {
        this.impressumRepository = impressumRepository;
    }

    @PostConstruct
    public void loadImpressum() {
        try (InputStream is = impressumJson.getInputStream()) {
            Impressum impressum = objectMapper.readValue(is, Impressum.class);
            impressumRepository.save(impressum);
            System.out.println("✅ Impressum erfolgreich geladen.");
        } catch (IOException e) {
            System.err.println("❌ Fehler beim Laden des Impressums: " + e.getMessage());
        }
    }
}
