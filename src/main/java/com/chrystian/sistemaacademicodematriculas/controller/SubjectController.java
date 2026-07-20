package com.chrystian.sistemaacademicodematriculas.controller;

import com.chrystian.sistemaacademicodematriculas.contract.SubjectService;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/subjects")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService service;

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
        return ResponseEntity.ok(service.update(id, subject));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}