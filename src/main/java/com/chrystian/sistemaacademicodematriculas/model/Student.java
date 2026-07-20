package com.chrystian.sistemaacademicodematriculas.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.UUID;

@Entity
@Table(name = "student")
@Getter
@Setter
@NoArgsConstructor
@ToString(of = {"id", "name", "academicRegistry"})
@EqualsAndHashCode(of = "id")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private UUID id;

    @NotBlank(message = "Student name is required.")
    @Column(nullable = false, length = 100)
    private String name;

    @NotBlank(message = "Email is required.")
    @Email(message = "Provided email format is invalid.")
    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @NotBlank(message = "Academic registry (AR) is required.")
    @Column(name = "academic_registry", nullable = false, unique = true, length = 20)
    private String academicRegistry;
}