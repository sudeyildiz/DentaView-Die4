package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.example.backend.util.ContentDeserializer;

@Entity
public class Section {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // content: kann ein String oder Array sein
    @ElementCollection
    @CollectionTable(
            name = "section_content",
            joinColumns = @JoinColumn(name = "section_id")
    )
    @Column(name = "line", length = 2000)
    @JsonDeserialize(using = ContentDeserializer.class)
    private List<String> content;

    // subsections: Unterabschnitte
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "section_id")
    private List<Subsection> subsections;

    // items: optionales Feld (z. B. Aufzählungen)
    @ElementCollection
    @CollectionTable(
            name = "section_items",
            joinColumns = @JoinColumn(name = "section_id")
    )
    @Column(name = "item", length = 2000)
    private List<String> items;

    public Section() {}

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

    public List<Subsection> getSubsections() {
        return subsections;
    }

    public void setSubsections(List<Subsection> subsections) {
        this.subsections = subsections;
    }

    public List<String> getItems() {
        return items;
    }

    public void setItems(List<String> items) {
        this.items = items;
    }
}
