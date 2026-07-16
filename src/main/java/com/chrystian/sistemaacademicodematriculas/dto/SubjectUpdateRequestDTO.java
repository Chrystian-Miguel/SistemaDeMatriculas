package com.chrystian.sistemaacademicodematriculas.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record SubjectUpdateRequestDTO(


        @NotBlank(message = "Subject name is required.")
        String name,

        @NotNull(message = "Class hours are required.")
        @Min(value = 1, message = "Class hours must be at least 1.")
        Integer classHours,

        @NotNull(message = "Course ID is required.")
        UUID courseId
) {
}