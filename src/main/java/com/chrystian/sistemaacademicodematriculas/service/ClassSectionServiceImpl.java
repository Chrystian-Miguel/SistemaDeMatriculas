package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.contract.ClassSectionService;
import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.exception.ValidationException;
import com.chrystian.sistemaacademicodematriculas.exception.ResourceNotFoundException;
import com.chrystian.sistemaacademicodematriculas.model.ClassSection;
import com.chrystian.sistemaacademicodematriculas.model.ClassSectionStatus;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import com.chrystian.sistemaacademicodematriculas.repository.ClassSectionRepository;
import com.chrystian.sistemaacademicodematriculas.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClassSectionServiceImpl implements ClassSectionService {

    private final ClassSectionRepository repository;
    private final SubjectRepository subjectRepository;

    @Override
    @Transactional(readOnly = true)
    public List<ClassSection> list() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public ClassSection create(ClassSectionCreateRequestDTO classSectionDTO) {
        validateUniqueness(classSectionDTO.code(), null);

        Subject subject = subjectRepository.findById(classSectionDTO.subjectId())
                .orElseThrow(() -> new ResourceNotFoundException("Subject with the provided ID not found."));

        ClassSection newClassSection = buildClassSection(classSectionDTO, subject);

        return repository.save(newClassSection);
    }

    private ClassSection buildClassSection(ClassSectionCreateRequestDTO dto, Subject subject) {
        ClassSection classSection = new ClassSection();
        classSection.setCode(dto.code());
        classSection.setTotalSlots(dto.totalSlots());
        classSection.setAvailableSlots(dto.totalSlots());
        classSection.setSubject(subject);

        ClassSectionStatus status = (dto.status() != null) ? dto.status() : ClassSectionStatus.OPEN;
        classSection.setStatus(status);

        return classSection;
    }

    @Override
    @Transactional
    public ClassSection update(UUID id, ClassSectionUpdateRequestDTO classSectionDTO) {
        ClassSection classSection = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ClassSection with the provided ID not found."));

        validateUniqueness(classSectionDTO.code(), id);

        int occupiedSlots = classSection.getTotalSlots() - classSection.getAvailableSlots();
        if (classSectionDTO.totalSlots() < occupiedSlots) {
            throw new BusinessException("Total slots cannot be less than the number of enrolled students (" + occupiedSlots + ").");
        }

        classSection.setCode(classSectionDTO.code());
        classSection.setTotalSlots(classSectionDTO.totalSlots());
        classSection.setStatus(classSectionDTO.status());

        classSection.setAvailableSlots(classSectionDTO.totalSlots() - occupiedSlots);

        return repository.save(classSection);
    }

    private void validateUniqueness(String code, UUID currentId) {
        Map<String, String> errors = new HashMap<>();
        repository.findByCode(code).ifPresent(c -> {
            if (currentId == null || !c.getId().equals(currentId)) {
                errors.put("code", "ClassSection with code '" + code + "' already exists.");
            }
        });

        if (!errors.isEmpty()) {
            throw new ValidationException(errors);
        }
    }

    @Override
    @Transactional
    public void delete(UUID id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("ClassSection with the provided ID not found.");
        }
        repository.deleteById(id);
    }
}