package com.example.backend.controller;

import com.example.backend.dto.UserAnswerDTO;
import com.example.backend.entity.Question;
import com.example.backend.entity.UserAnswer;
import com.example.backend.repository.QuestionRepository;
import com.example.backend.repository.UserAnswerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user-answers")
public class UserAnswerController {

    private final UserAnswerRepository userAnswerRepository;
    private final QuestionRepository questionRepository;

    public UserAnswerController(UserAnswerRepository userAnswerRepository, QuestionRepository questionRepository) {
        this.userAnswerRepository = userAnswerRepository;
        this.questionRepository = questionRepository;
    }

    @PostMapping
    public ResponseEntity<?> submitAnswer(@RequestBody UserAnswerDTO dto) {
        Question question = questionRepository.findById(dto.getQuestionId())
                .orElseThrow(() -> new RuntimeException("Frage nicht gefunden"));

        boolean isCorrect = question.getCorrectAnswer().equalsIgnoreCase(dto.getSelectedAnswer());

        UserAnswer userAnswer = new UserAnswer();
        userAnswer.setUsername(dto.getUsername());
        userAnswer.setQuestion(question);
        userAnswer.setQuiz(question.getQuiz());
        userAnswer.setSelectedAnswer(dto.getSelectedAnswer());
        userAnswer.setCorrect(isCorrect);

        userAnswerRepository.save(userAnswer);

        return ResponseEntity.ok("Antwort gespeichert.");
    }
}
