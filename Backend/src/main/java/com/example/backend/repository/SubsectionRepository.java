package com.example.backend.repository;

import com.example.backend.entity.Subsection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubsectionRepository extends JpaRepository<Subsection, Long> {
}