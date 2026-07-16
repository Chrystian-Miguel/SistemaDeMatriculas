package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.dto.CourseCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.CourseUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.model.Course;
import com.chrystian.sistemaacademicodematriculas.repository.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class CourseService {

    private final CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }

    public List<Course> list() {
        return repository.findAll();
    }

    @Transactional
    public Course create(CourseCreateRequestDTO courseDTO) {
        Course newCourse = new Course();
        newCourse.setName(courseDTO.name());
        newCourse.setDescription(courseDTO.description());
        return repository.save(newCourse);
    }

    @Transactional
    public Course update(UUID id, CourseUpdateRequestDTO courseDTO) {
        Course course = repository.findById(id)
                .orElseThrow(() -> new BusinessException("Course with the provided ID not found."));

        course.setName(courseDTO.name());
        course.setDescription(courseDTO.description());

        return repository.save(course);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}