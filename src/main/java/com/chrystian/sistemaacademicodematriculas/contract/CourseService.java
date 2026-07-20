package com.chrystian.sistemaacademicodematriculas.contract;

import com.chrystian.sistemaacademicodematriculas.dto.CourseCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.CourseUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Course;

import java.util.List;
import java.util.UUID;

public interface CourseService {
    List<Course> list();
    Course create(CourseCreateRequestDTO courseDTO);
    Course update(UUID id, CourseUpdateRequestDTO courseDTO);
    void delete(UUID id);
}