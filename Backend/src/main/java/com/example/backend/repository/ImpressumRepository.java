package com.example.backend.repository;

import com.example.backend.entity.Impressum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImpressumRepository extends JpaRepository<Impressum, Long> {
}