package com.chrystian.sistemaacademicodematriculas.controller;


import com.chrystian.sistemaacademicodematriculas.dto.EnrollmentResponseDTO;
import com.chrystian.sistemaacademicodematriculas.model.Enrollment;
import com.chrystian.sistemaacademicodematriculas.service.EnrollmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/enrollments")
@CrossOrigin(origins = "*")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @PostMapping("/request")
    public ResponseEntity<EnrollmentResponseDTO> requestEnrollment(@RequestParam UUID studentId, @RequestParam UUID classSectionId) {
        return ResponseEntity.ok(enrollmentService.requestEnrollment(studentId, classSectionId));
    }

    @PutMapping("/{id}/confirm")
    public ResponseEntity<Enrollment> confirm(@PathVariable UUID id) {
        return ResponseEntity.ok(enrollmentService.confirmEnrollment(id));
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<Enrollment> cancel(@PathVariable UUID id) {
        return ResponseEntity.ok(enrollmentService.cancelEnrollment(id));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Enrollment>> listByStudent(@PathVariable UUID studentId) {
        return ResponseEntity.ok(enrollmentService.listByStudent(studentId));
    }

    @GetMapping("/class-section/{classSectionId}")
    public ResponseEntity<List<Enrollment>> listByClassSection(@PathVariable UUID classSectionId) {
        return ResponseEntity.ok(enrollmentService.listByClassSection(classSectionId));
    }
}