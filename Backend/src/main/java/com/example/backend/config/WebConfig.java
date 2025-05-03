package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Erlaubt CORS für alle Endpunkte
                        .allowedOrigins("http://localhost:3000") // Erlaubt Anfragen vom Frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Erlaubte HTTP-Methoden
                        .allowedHeaders("*") // Erlaubt alle Header
                        .allowCredentials(true); // Erlaubt Cookies/Anmeldeinformationen
            }
        };
    }
}