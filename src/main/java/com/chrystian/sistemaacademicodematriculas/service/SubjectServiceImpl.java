package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.contract.SubjectService;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.DuplicateResourceException;
import com.chrystian.sistemaacademicodematriculas.exception.ResourceNotFoundException;
import com.chrystian.sistemaacademicodematriculas.model.Course;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import com.chrystian.sistemaacademicodematriculas.repository.CourseRepository;
import com.chrystian.sistemaacademicodematriculas.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final CourseRepository courseRepository;

    @Override
    @Transactional(readOnly = true)
    public List<SubjectResponseDTO> list() {
        return subjectRepository.findAllSubjectsWithCourse();
    }

    @Override
    @Transactional
    public SubjectResponseDTO create(SubjectCreateRequestDTO subjectDTO) {
        subjectRepository.findByName(subjectDTO.getName()).ifPresent(s -> {
            throw new DuplicateResourceException("Subject with name '" + subjectDTO.getName() + "' already exists.");
        });

        Course course = courseRepository.findById(subjectDTO.getCourseId())
                .orElseThrow(() -> new ResourceNotFoundException("Course with the provided ID not found."));

        Subject newSubject = buildSubject(subjectDTO, course);
        Subject savedSubject = subjectRepository.save(newSubject);

        return toSubjectResponseDTO(savedSubject);
    }

    private Subject buildSubject(SubjectCreateRequestDTO dto, Course course) {
        Subject subject = new Subject();
        subject.setName(dto.getName());
        subject.setClassHours(dto.getClassHours());
        subject.setCourse(course);
        return subject;
    }

    private SubjectResponseDTO toSubjectResponseDTO(Subject subject) {
        return new SubjectResponseDTO(
                subject.getId(),
                subject.getName(),
                subject.getClassHours(),
                subject.getCourse().getId(),
                subject.getCourse().getName()
        );
    }

    @Override
    @Transactional
    public Subject update(UUID id, SubjectUpdateRequestDTO subjectUpdateDTO) {
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Subject with the provided ID not found."));

        subjectRepository.findByName(subjectUpdateDTO.name()).ifPresent(s -> {
            if (!s.getId().equals(id)) {
                throw new DuplicateResourceException("Subject with name '" + subjectUpdateDTO.name() + "' already exists.");
            }
        });

        Course course = courseRepository.findById(subjectUpdateDTO.courseId())
                .orElseThrow(() -> new ResourceNotFoundException("Course with the provided ID not found."));

        subject.setName(subjectUpdateDTO.name());
        subject.setClassHours(subjectUpdateDTO.classHours());
        subject.setCourse(course);

        return subjectRepository.save(subject);
    }

    @Override
    @Transactional
    public void delete(UUID id) {
        if (!subjectRepository.existsById(id)) {
            throw new ResourceNotFoundException("Subject with the provided ID not found.");
        }
        subjectRepository.deleteById(id);
    }
}