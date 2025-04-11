import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    @Column(length = 4000)
    private String content;
    
    @ElementCollection
    private List<String> items = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "section_id")
    private List<Subsection> subsections = new ArrayList<>();
    
    @ManyToOne
    private Article article;
    
    // Getters and Setters
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

    public List<Subsection> getSubsections() {
        return subsections;
    }

    public void setSubsections(List<Subsection> subsections) {
        this.subsections = subsections;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}