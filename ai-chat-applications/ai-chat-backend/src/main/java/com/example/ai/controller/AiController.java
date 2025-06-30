package com.example.ai.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api")
public class AiController {

    @PostMapping("/ask")
    public ResponseEntity<Map<String, String>> askAI(@RequestBody Map<String, String> body) {
        String message = body.get("message");

        // Call your AI API (Copilot/OpenAI) here via RestTemplate or WebClient
        String aiResponse = callCopilot(message);

        Map<String, String> result = new HashMap<>();
        result.put("reply", aiResponse);
        return ResponseEntity.ok(result);
    }

    private String callCopilot(String prompt) {
        // TODO: Call external Copilot/OpenAI API
        return "This is a dummy reply to: " + prompt;
    }
}
