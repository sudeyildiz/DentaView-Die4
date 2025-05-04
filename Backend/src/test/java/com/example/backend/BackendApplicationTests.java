package com.example.backend;

import com.example.backend.BackendApplication;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = BackendApplication.class) // Geben Sie hier die Hauptanwendungsklasse an
public class BackendApplicationTests {

	@Test
	void contextLoads() {
		// Testet, ob der Spring Application Context korrekt geladen wird
	}
}
