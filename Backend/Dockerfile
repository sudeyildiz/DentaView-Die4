# Backend/Dockerfile
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B  # Pre-download dependencies to speed up builds
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Kopiere die JSON-Dateien ins Image
COPY src/main/resources/*.json /app/classes/
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]