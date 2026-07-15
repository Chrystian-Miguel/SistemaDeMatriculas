package com.chrystian.sistemaacademicodematriculas.repository;

import com.chrystian.sistemaacademicodematriculas.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, UUID> {
    boolean existsByStudentIdAndClassSectionId(UUID studentId, UUID classSectionId);

    List<Enrollment> findByStudentId(UUID studentId);

    List<Enrollment> findByClassSectionId(UUID classSectionId);
}