package com.chrystian.sistemaacademicodematriculas.contract;

import com.chrystian.sistemaacademicodematriculas.dto.EnrollmentResponseDTO;
import com.chrystian.sistemaacademicodematriculas.model.Enrollment;

import java.util.List;
import java.util.UUID;

public interface EnrollmentService {
    EnrollmentResponseDTO requestEnrollment(UUID studentId, UUID classSectionId);
    Enrollment confirmEnrollment(UUID enrollmentId);
    Enrollment cancelEnrollment(UUID enrollmentId);
    void deleteEnrollment(UUID enrollmentId);
    List<Enrollment> listByStudent(UUID studentId);
    List<Enrollment> listByClassSection(UUID classSectionId);
    List<Enrollment> listAll();
}