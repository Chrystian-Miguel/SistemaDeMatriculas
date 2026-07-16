package com.chrystian.sistemaacademicodematriculas.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public record EnrollmentResponseDTO(
        String studentName,
        String classSectionCode,
        String status,
        @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
        LocalDateTime enrollmentDate
) {
}