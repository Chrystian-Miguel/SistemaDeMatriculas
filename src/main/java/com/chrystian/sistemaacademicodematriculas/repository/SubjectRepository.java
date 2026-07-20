package com.chrystian.sistemaacademicodematriculas.repository;

import com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, UUID> {

    Optional<Subject> findByName(String name);

    @Query("SELECT new com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO(s.id, s.name, s.classHours, c.id, c.name) " +
           "FROM Subject s LEFT JOIN s.course c")
    List<SubjectResponseDTO> findAllSubjectsWithCourse();
}