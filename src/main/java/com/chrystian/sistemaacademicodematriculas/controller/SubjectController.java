package com.chrystian.sistemaacademicodematriculas.controller;

import com.chrystian.sistemaacademicodematriculas.dto.SubjectCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import com.chrystian.sistemaacademicodematriculas.service.SubjectService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/subjects")
@CrossOrigin(origins = "*")
public class SubjectController {

    private final SubjectService service;

    public SubjectController(SubjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<SubjectResponseDTO> list() {
        return service.list();
    }

    @PostMapping
    public ResponseEntity<SubjectResponseDTO> create(@Valid @RequestBody SubjectCreateRequestDTO subjectDTO) {
        return ResponseEntity.ok(service.create(subjectDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subject> update(@PathVariable UUID id, @Valid @RequestBody SubjectUpdateRequestDTO subject) {
        // TODO: This should also be updated to use a DTO
        return ResponseEntity.ok(service.update(id, subject));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}