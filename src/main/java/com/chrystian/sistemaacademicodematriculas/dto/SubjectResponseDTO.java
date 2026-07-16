package com.chrystian.sistemaacademicodematriculas.dto;

import com.chrystian.sistemaacademicodematriculas.model.Subject;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class SubjectResponseDTO {

    private UUID id;
    private String name;
    private Integer classHours;
    private UUID courseId;
    private String courseName;


    public SubjectResponseDTO(UUID id, String name, Integer classHours, UUID courseId, String courseName) {
        this.id = id;
        this.name = name;
        this.classHours = classHours;
        this.courseId = courseId;
        this.courseName = courseName;
    }


}