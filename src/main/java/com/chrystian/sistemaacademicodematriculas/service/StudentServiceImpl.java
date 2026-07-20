package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.contract.StudentService;
import com.chrystian.sistemaacademicodematriculas.dto.StudentCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.StudentUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.ValidationException;
import com.chrystian.sistemaacademicodematriculas.exception.ResourceNotFoundException;
import com.chrystian.sistemaacademicodematriculas.model.Student;
import com.chrystian.sistemaacademicodematriculas.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Student> list() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public Student create(StudentCreateRequestDTO studentDTO) {
        validateUniqueness(studentDTO.name(), studentDTO.email(), studentDTO.academicRegistry(), null);

        Student newStudent = new Student();
        newStudent.setName(studentDTO.name());
        newStudent.setEmail(studentDTO.email());
        newStudent.setAcademicRegistry(studentDTO.academicRegistry());
        return repository.save(newStudent);
    }

    @Override
    @Transactional
    public Student update(UUID id, StudentUpdateRequestDTO studentDTO) {
        Student student = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student with the provided ID not found."));

        validateUniqueness(studentDTO.name(), studentDTO.email(), student.getAcademicRegistry(), id);

        student.setName(studentDTO.name());
        student.setEmail(studentDTO.email());

        return repository.save(student);
    }

    private void validateUniqueness(String name, String email, String academicRegistry, UUID currentId) {
        Map<String, String> errors = new HashMap<>();

        checkAndAddError(repository.findByName(name), "name", "Name already in use.", currentId, errors);
        checkAndAddError(repository.findByEmail(email), "email", "Email already in use.", currentId, errors);
        checkAndAddError(repository.findByAcademicRegistry(academicRegistry), "academicRegistry", "Academic Registry already in use.", currentId, errors);

        if (!errors.isEmpty()) {
            throw new ValidationException(errors);
        }
    }

    private void checkAndAddError(Optional<Student> student, String field, String message, UUID currentId, Map<String, String> errors) {
        student.ifPresent(s -> {
            if (currentId == null || !s.getId().equals(currentId)) {
                errors.put(field, message);
            }
        });
    }

    @Override
    @Transactional
    public void delete(UUID id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Student with the provided ID not found.");
        }
        repository.deleteById(id);
    }
}