package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.model.Student;
import com.chrystian.sistemaacademicodematriculas.repository.StudentRepository;
import org.springframework.stereotype.Service;

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

    public Student create(Student student) {
        return repository.save(student);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}