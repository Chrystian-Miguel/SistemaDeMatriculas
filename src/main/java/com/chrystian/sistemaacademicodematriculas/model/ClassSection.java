package com.chrystian.sistemaacademicodematriculas.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.UUID;

@Entity
@Table(name = "class_section")
@Getter
@Setter
@NoArgsConstructor
public class ClassSection {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @JdbcTypeCode(SqlTypes.VARCHAR)
    private UUID id;

    @NotBlank(message = "Class code is required.")
    @Column(nullable = false, unique = true, length = 20)
    private String code;

    @NotNull(message = "Total slots quantity is required.")
    @Min(value = 1, message = "Class section must offer at least 1 slot.")
    @Column(name = "total_slots", nullable = false)
    private Integer totalSlots;

    @NotNull(message = "Available slots quantity is required.")
    @Column(name = "available_slots", nullable = false)
    private Integer availableSlots;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ClassSectionStatus status = ClassSectionStatus.OPEN;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClassSection)) return false;
        ClassSection other = (ClassSection) o;
        return id != null && id.equals(other.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}