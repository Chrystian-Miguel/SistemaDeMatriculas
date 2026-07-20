package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.contract.CourseService;
import com.chrystian.sistemaacademicodematriculas.dto.CourseCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.CourseUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.DuplicateResourceException;
import com.chrystian.sistemaacademicodematriculas.exception.ResourceNotFoundException;
import com.chrystian.sistemaacademicodematriculas.model.Course;
import com.chrystian.sistemaacademicodematriculas.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Course> list() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public Course create(CourseCreateRequestDTO courseDTO) {
        repository.findByName(courseDTO.name()).ifPresent(c -> {
            throw new DuplicateResourceException("Course with name '" + courseDTO.name() + "' already exists.");
        });

        Course newCourse = new Course();
        newCourse.setName(courseDTO.name());
        newCourse.setDescription(courseDTO.description());
        return repository.save(newCourse);
    }

    @Override
    @Transactional
    public Course update(UUID id, CourseUpdateRequestDTO courseDTO) {
        Course course = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course with the provided ID not found."));

        repository.findByName(courseDTO.name()).ifPresent(c -> {
            if (!c.getId().equals(id)) {
                throw new DuplicateResourceException("Course with name '" + courseDTO.name() + "' already exists.");
            }
        });

        course.setName(courseDTO.name());
        course.setDescription(courseDTO.description());

        return repository.save(course);
    }

    @Override
    @Transactional
    public void delete(UUID id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Course with the provided ID not found.");
        }
        repository.deleteById(id);
    }
}