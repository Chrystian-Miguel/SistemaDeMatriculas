package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.dto.StudentCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.StudentUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.model.Student;
import com.chrystian.sistemaacademicodematriculas.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> list() {
        return repository.findAll();
    }

    @Transactional
    public Student create(StudentCreateRequestDTO studentDTO) {

        repository.findByEmail(studentDTO.email()).ifPresent(s -> {
            throw new BusinessException("Email already in use.");
        });
        repository.findByAcademicRegistry(studentDTO.academicRegistry()).ifPresent(s -> {
            throw new BusinessException("Academic Registry already in use.");
        });

        Student newStudent = new Student();
        newStudent.setName(studentDTO.name());
        newStudent.setEmail(studentDTO.email());
        newStudent.setAcademicRegistry(studentDTO.academicRegistry());
        return repository.save(newStudent);
    }

    @Transactional
    public Student update(UUID id, StudentUpdateRequestDTO studentDTO) {
        Student student = repository.findById(id)
                .orElseThrow(() -> new BusinessException("Student with the provided ID not found."));

        // Optional: Add validation to check if the new email is already in use by another student
        repository.findByEmail(studentDTO.email()).ifPresent(s -> {
            if (!s.getId().equals(id)) {
                throw new BusinessException("Email already in use by another student.");
            }
        });

        student.setName(studentDTO.name());
        student.setEmail(studentDTO.email());

        return repository.save(student);
    }

    public void delete(UUID id) {
        // Optional: Add validation to check if student exists before deleting
        if (!repository.existsById(id)) {
            throw new BusinessException("Student with the provided ID not found.");
        }
        repository.deleteById(id);
    }
}