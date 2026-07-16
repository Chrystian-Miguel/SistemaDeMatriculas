package com.chrystian.sistemaacademicodematriculas.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record StudentCreateRequestDTO(
        @NotBlank(message = "Student name is required.")
        String name,

        @NotBlank(message = "Email is required.")
        @Email(message = "Provided email format is invalid.")
        String email,

        @NotBlank(message = "Academic registry (AR) is required.")
        String academicRegistry
) {
}