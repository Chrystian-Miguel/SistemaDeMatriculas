package com.chrystian.sistemaacademicodematriculas.controller;

import com.chrystian.sistemaacademicodematriculas.contract.StudentService;
import com.chrystian.sistemaacademicodematriculas.dto.StudentCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.StudentUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Student;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService service;

    @GetMapping
    public List<Student> list() {
        return service.list();
    }

    @PostMapping
    public ResponseEntity<Student> create(@Valid @RequestBody StudentCreateRequestDTO studentDTO) {
        Student createdStudent = service.create(studentDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@PathVariable UUID id, @Valid @RequestBody StudentUpdateRequestDTO studentDTO) {
        Student updatedStudent = service.update(id, studentDTO);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}