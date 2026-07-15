package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.model.Course;
import com.chrystian.sistemaacademicodematriculas.repository.CourseRepository;
import org.springframework.stereotype.Service;

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

    public Course create(Course course) {
        return repository.save(course);
    }

    public Course update(UUID id, Course course) {
        // TODO: Add validation to check if the course exists
        return repository.save(course);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}