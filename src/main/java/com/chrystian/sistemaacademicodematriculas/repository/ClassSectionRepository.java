package com.chrystian.sistemaacademicodematriculas.repository;

import com.chrystian.sistemaacademicodematriculas.model.ClassSection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClassSectionRepository extends JpaRepository<ClassSection, UUID> {
    Optional<ClassSection> findByCode(String code);
}