package com.chrystian.sistemaacademicodematriculas.controller;

import com.chrystian.sistemaacademicodematriculas.dto.CourseCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.CourseUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Course;
import com.chrystian.sistemaacademicodematriculas.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "*")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Course> list() {
        return service.list();
    }

    @PostMapping
    public ResponseEntity<Course> create(@Valid @RequestBody CourseCreateRequestDTO courseDTO) {
        Course createdCourse = service.create(courseDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> update(@PathVariable UUID id, @Valid @RequestBody CourseUpdateRequestDTO courseDTO) {
        Course updatedCourse = service.update(id, courseDTO);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}