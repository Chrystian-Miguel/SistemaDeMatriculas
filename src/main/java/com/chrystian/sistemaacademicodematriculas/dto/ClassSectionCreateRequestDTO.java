package com.chrystian.sistemaacademicodematriculas.dto;

import com.chrystian.sistemaacademicodematriculas.model.ClassSectionStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record ClassSectionCreateRequestDTO(
        @NotBlank(message = "Class code is required.")
        String code,

        @NotNull(message = "Total slots quantity is required.")
        @Min(value = 1, message = "Class section must offer at least 1 slot.")
        Integer totalSlots,

        @NotNull(message = "Subject ID is required.")
        UUID subjectId,

        ClassSectionStatus status
) {
}