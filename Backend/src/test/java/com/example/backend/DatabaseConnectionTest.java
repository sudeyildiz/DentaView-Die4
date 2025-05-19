package com.example.backend;
import com.example.backend.BackendApplication;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import javax.sql.DataSource;
import java.sql.Connection;
import static org.junit.jupiter.api.Assertions.assertNotNull;
@SpringBootTest(classes = com.example.backend.BackendApplication.class)
public class DatabaseConnectionTest {
    @Autowired
    private DataSource dataSource;
    @Test
    void testDatabaseConnection() throws Exception {
        assertNotNull(dataSource, "DataSource sollte nicht null sein");

        try (Connection connection = dataSource.getConnection()) {
            assertNotNull(connection, "Die Verbindung zur Datenbank sollte erfolgreich sein");
            System.out.println("Datenbankverbindung erfolgreich: " + connection.getMetaData().getURL());
        }
    }
}