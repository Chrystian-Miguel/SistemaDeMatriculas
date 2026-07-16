package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.model.ClassSection;
import com.chrystian.sistemaacademicodematriculas.model.ClassSectionStatus;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import com.chrystian.sistemaacademicodematriculas.repository.ClassSectionRepository;
import com.chrystian.sistemaacademicodematriculas.repository.SubjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ClassSectionService {

    private final ClassSectionRepository repository;
    private final SubjectRepository subjectRepository;

    public ClassSectionService(ClassSectionRepository repository, SubjectRepository subjectRepository) {
        this.repository = repository;
        this.subjectRepository = subjectRepository;
    }

    public List<ClassSection> list() {
        return repository.findAll();
    }

    @Transactional
    public ClassSection create(ClassSectionCreateRequestDTO classSectionDTO) {
        Subject subject = subjectRepository.findById(classSectionDTO.subjectId())
                .orElseThrow(() -> new BusinessException("Subject with the provided ID not found."));

        ClassSection newClassSection = new ClassSection();
        newClassSection.setCode(classSectionDTO.code());
        newClassSection.setTotalSlots(classSectionDTO.totalSlots());
        newClassSection.setAvailableSlots(classSectionDTO.totalSlots()); // Initially, available slots are total slots
        newClassSection.setSubject(subject);

        if (classSectionDTO.status() != null) {
            newClassSection.setStatus(classSectionDTO.status());
        } else {
            newClassSection.setStatus(ClassSectionStatus.OPEN); // Default status
        }

        return repository.save(newClassSection);
    }

    @Transactional
    public ClassSection update(UUID id, ClassSectionUpdateRequestDTO classSectionDTO) {
        ClassSection classSection = repository.findById(id)
                .orElseThrow(() -> new BusinessException("ClassSection with the provided ID not found."));

        int occupiedSlots = classSection.getTotalSlots() - classSection.getAvailableSlots();
        if (classSectionDTO.totalSlots() < occupiedSlots) {
            throw new BusinessException("Total slots cannot be less than the number of enrolled students (" + occupiedSlots + ").");
        }

        classSection.setCode(classSectionDTO.code());
        classSection.setTotalSlots(classSectionDTO.totalSlots());
        classSection.setStatus(classSectionDTO.status());
        
        // Recalculate available slots based on the new total
        classSection.setAvailableSlots(classSectionDTO.totalSlots() - occupiedSlots);

        return repository.save(classSection);
    }

    public void delete(UUID id) {
        if (!repository.existsById(id)) {
            throw new BusinessException("ClassSection with the provided ID not found.");
        }
        // TODO: Add validation to prevent deletion if there are enrolled students
        repository.deleteById(id);
    }
}