import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Subsection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String subtitle;
    
    @Column(length = 4000)
    private String content;
    
    @ElementCollection
    private List<String> items = new ArrayList<>();
    
    @ElementCollection
    private List<String> content_list = new ArrayList<>();
    
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
    
    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
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
    
    public List<String> getContentList() {
        return content_list;
    }

    public void setContentList(List<String> contentList) {
        this.content_list = contentList;
    }
}