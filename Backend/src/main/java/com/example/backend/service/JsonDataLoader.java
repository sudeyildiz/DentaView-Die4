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

@Component
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
    public void loadData() throws Exception {
        log.info("🔄 Starte JSON-Ladeprozess…");

        // Beitrag1 laden
        InputStream is1 = new ClassPathResource("Beitrag1.json").getInputStream();
        Beitrag beitrag1 = mapper.readValue(is1, Beitrag.class);
        beitragRepo.save(beitrag1);

        // Beitrag2 laden
        InputStream is2 = new ClassPathResource("Beitrag2.json").getInputStream();
        Beitrag beitrag2 = mapper.readValue(is2, Beitrag.class);
        beitragRepo.save(beitrag2);

        log.info("✅ Beiträge geladen und gespeichert: {}", beitragRepo.count());

        // Quiz laden
        InputStream isQuiz = new ClassPathResource("quiz.json").getInputStream();
        Quiz quiz = mapper.readValue(isQuiz, Quiz.class);
        quizRepo.save(quiz);

        log.info("✅ Quiz geladen und gespeichert: {}", quizRepo.count());

        // Impressum laden
        InputStream isImp = new ClassPathResource("Impressum.json").getInputStream();
        Impressum impressum = mapper.readValue(isImp, Impressum.class);
        impRepo.save(impressum);

        log.info("✅ Impressum geladen und gespeichert: {}", impRepo.count());

        log.info("🎉 JSON-Ladeprozess abgeschlossen!");
    }
}
