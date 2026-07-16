package com.chrystian.sistemaacademicodematriculas.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.UUID;

@Entity
@Table(name = "student")
@Getter
@Setter
@NoArgsConstructor
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Student)) return false;
        Student other = (Student) o;
        return id != null && id.equals(other.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}