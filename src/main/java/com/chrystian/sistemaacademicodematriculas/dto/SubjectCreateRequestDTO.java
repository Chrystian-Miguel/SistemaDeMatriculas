package com.chrystian.sistemaacademicodematriculas.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class SubjectCreateRequestDTO {

    @NotBlank(message = "O nome da disciplina é obrigatório.")
    private String name;

    @NotNull(message = "A carga horária é obrigatória.")
    @Min(value = 1, message = "A carga horária deve ser de no mínimo 1 hora.")
    private Integer classHours;

    @NotNull(message = "O ID do curso é obrigatório.")
    private UUID courseId;
}