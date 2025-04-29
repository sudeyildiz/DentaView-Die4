package com.example.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.backend.entity.Beitrag;
import com.example.backend.entity.Quiz;
import com.example.backend.entity.Impressum;
import com.example.backend.repository.BeitragRepository;
import com.example.backend.repository.QuizRepository;
import com.example.backend.repository.ImpressumRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import java.io.InputStream;

//@Component
public class JsonDataLoader {

    private static final Logger log = LoggerFactory.getLogger(JsonDataLoader.class);

    private final BeitragRepository beitragRepo;
    private final QuizRepository quizRepo;
    private final ImpressumRepository impRepo;
    private final ObjectMapper mapper = new ObjectMapper();

    public JsonDataLoader(BeitragRepository beitragRepo,
                          QuizRepository quizRepo,
                          ImpressumRepository impRepo) {
        this.beitragRepo = beitragRepo;
        this.quizRepo = quizRepo;
        this.impRepo = impRepo;
    }

    @PostConstruct
    public void loadData() {
        log.info("🔄 Starte JSON-Ladeprozess…");
        try {
            // Beitrag1
            try (InputStream is1 = new ClassPathResource("Beitrag1.json").getInputStream()) {
                Beitrag b1 = mapper.readValue(is1, Beitrag.class);
                beitragRepo.save(b1);
            }

            // Beitrag2
            try (InputStream is2 = new ClassPathResource("Beitrag2.json").getInputStream()) {
                Beitrag b2 = mapper.readValue(is2, Beitrag.class);
                beitragRepo.save(b2);
            }

            log.info("✅ Beiträge gespeichert: {}", beitragRepo.count());

            // Quiz
            try (InputStream isQuiz = new ClassPathResource("quiz.json").getInputStream()) {
                Quiz q = mapper.readValue(isQuiz, Quiz.class);
                quizRepo.save(q);
            }

            log.info("✅ Quiz gespeichert: {}", quizRepo.count());

            // Impressum
            try (InputStream isImp = new ClassPathResource("Impressum.json").getInputStream()) {
                Impressum i = mapper.readValue(isImp, Impressum.class);
                impRepo.save(i);
            }

            log.info("✅ Impressum gespeichert: {}", impRepo.count());

            log.info("🎉 JSON-Ladeprozess abgeschlossen!");
        } catch (Exception e) {
            log.error("❌ Fehler beim Laden der JSON-Daten – ladeprozess abgebrochen, Server bleibt aber up.", e);
        }
    }
}
