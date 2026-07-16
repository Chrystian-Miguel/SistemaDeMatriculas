package com.chrystian.sistemaacademicodematriculas.dto;

import jakarta.validation.constraints.NotBlank;

public record CourseUpdateRequestDTO(
        @NotBlank(message = "Course name is required.")
        String name,
        String description
) {
}