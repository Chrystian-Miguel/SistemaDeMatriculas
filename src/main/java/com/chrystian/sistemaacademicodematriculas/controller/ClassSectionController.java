package com.chrystian.sistemaacademicodematriculas.controller;

import com.chrystian.sistemaacademicodematriculas.model.ClassSection;
import com.chrystian.sistemaacademicodematriculas.service.ClassSectionService;
import jakarta.validation.Valid;
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
    public ResponseEntity<ClassSection> create(@Valid @RequestBody ClassSection classSection) {
        return ResponseEntity.ok(service.create(classSection));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClassSection> update(@PathVariable UUID id, @Valid @RequestBody ClassSection classSection) {
        return ResponseEntity.ok(service.update(id, classSection));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}