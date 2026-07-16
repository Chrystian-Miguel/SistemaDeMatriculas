package com.chrystian.sistemaacademicodematriculas.controller;

import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.ClassSection;
import com.chrystian.sistemaacademicodematriculas.service.ClassSectionService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/class-sections")
@CrossOrigin(origins = "*")
public class ClassSectionController {

    private final ClassSectionService service;

    public ClassSectionController(ClassSectionService service) {
        this.service = service;
    }

    @GetMapping
    public List<ClassSection> list() {
        return service.list();
    }

    @PostMapping
    public ResponseEntity<ClassSection> create(@Valid @RequestBody ClassSectionCreateRequestDTO classSectionDTO) {
        ClassSection createdClassSection = service.create(classSectionDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdClassSection);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClassSection> update(@PathVariable UUID id, @Valid @RequestBody ClassSectionUpdateRequestDTO classSectionDTO) {
        ClassSection updatedClassSection = service.update(id, classSectionDTO);
        return ResponseEntity.ok(updatedClassSection);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}