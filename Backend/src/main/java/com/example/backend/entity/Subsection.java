package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.example.backend.util.ContentDeserializer;

@Entity
public class Subsection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // content kann entweder ein einzelner String oder ein Array sein
    @ElementCollection
    @CollectionTable(
            name = "subsection_content",
            joinColumns = @JoinColumn(name = "subsection_id")
    )
    @Column(name = "line", length = 2000)
    @JsonDeserialize(using = ContentDeserializer.class)
    private List<String> content;

    // optionale Liste von Items (z. B. bei Aufzählungen)
    @ElementCollection
    @CollectionTable(
            name = "subsection_items",
            joinColumns = @JoinColumn(name = "subsection_id")
    )
    @Column(name = "item", length = 2000)
    private List<String> items;

    public Subsection() {}

    // Getter & Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getContent() {
        return content;
    }

    public void setContent(List<String> content) {
        this.content = content;
    }

    public List<String> getItems() {
        return items;
    }

    public void setItems(List<String> items) {
        this.items = items;
    }
}
