package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Impressum {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projektteam;
    private String address;
    private String kontaktTitle;
    private String dsgvoTitle;
    private String dsgvoText;

    @ElementCollection
    @CollectionTable(name = "impressum_contacts", joinColumns = @JoinColumn(name = "impressum_id"))
    private List<Contact> contacts;

    @ElementCollection
    @CollectionTable(name = "impressum_links", joinColumns = @JoinColumn(name = "impressum_id"))
    private List<Link> links;

    public Impressum() {}

    // Getter & Setter

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getProjektteam() { return projektteam; }
    public void setProjektteam(String projektteam) { this.projektteam = projektteam; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getKontaktTitle() { return kontaktTitle; }
    public void setKontaktTitle(String kontaktTitle) { this.kontaktTitle = kontaktTitle; }

    public String getDsgvoTitle() { return dsgvoTitle; }
    public void setDsgvoTitle(String dsgvoTitle) { this.dsgvoTitle = dsgvoTitle; }

    public String getDsgvoText() { return dsgvoText; }
    public void setDsgvoText(String dsgvoText) { this.dsgvoText = dsgvoText; }

    public List<Contact> getContacts() { return contacts; }
    public void setContacts(List<Contact> contacts) { this.contacts = contacts; }

    public List<Link> getLinks() { return links; }
    public void setLinks(List<Link> links) { this.links = links; }
}
