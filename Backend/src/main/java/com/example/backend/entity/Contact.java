package com.example.backend.entity;

import jakarta.persistence.Embeddable;

@Embeddable
public class Contact {

    private String email;

    public Contact() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
