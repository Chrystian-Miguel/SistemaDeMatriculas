package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.model.ClassSection;
import com.chrystian.sistemaacademicodematriculas.repository.ClassSectionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ClassSectionService {

    private final ClassSectionRepository repository;

    public ClassSectionService(ClassSectionRepository repository) {
        this.repository = repository;
    }

    public List<ClassSection> list() {
        return repository.findAll();
    }

    public ClassSection create(ClassSection classSection) {
        return repository.save(classSection);
    }

    public ClassSection update(UUID id, ClassSection classSection) {
        // TODO: Add validation to check if the class section exists
        return repository.save(classSection);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}