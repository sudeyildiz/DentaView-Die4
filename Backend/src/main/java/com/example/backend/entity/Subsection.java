package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Subsection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String content;

    @ElementCollection
    @CollectionTable(
            name = "subsection_items",
            joinColumns = @JoinColumn(name = "subsection_id")
    )
    @Column(name = "item")
    private List<String> items;

    public Subsection() {}

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<String> getItems() {
        return items;
    }

    public void setItems(List<String> items) {
        this.items = items;
    }
}