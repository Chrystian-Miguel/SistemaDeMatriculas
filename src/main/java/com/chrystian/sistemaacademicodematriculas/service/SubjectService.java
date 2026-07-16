package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.dto.SubjectCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.model.Course;
import com.chrystian.sistemaacademicodematriculas.model.Subject;
import com.chrystian.sistemaacademicodematriculas.repository.CourseRepository;
import com.chrystian.sistemaacademicodematriculas.repository.SubjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class SubjectService {

    private final SubjectRepository subjectRepository;
    private final CourseRepository courseRepository;

    public SubjectService(SubjectRepository subjectRepository, CourseRepository courseRepository) {
        this.subjectRepository = subjectRepository;
        this.courseRepository = courseRepository;
    }

    public List<SubjectResponseDTO> list() {
        return subjectRepository.findAllSubjectsWithCourse();
    }

    @Transactional
    public SubjectResponseDTO create(SubjectCreateRequestDTO subjectDTO) {

        System.out.println(subjectDTO.getCourseId());
        Course course = courseRepository.findById(subjectDTO.getCourseId())
                .orElseThrow(() -> new BusinessException("Course with the provided ID not found."));

        Subject newSubject = new Subject();
        newSubject.setName(subjectDTO.getName());
        newSubject.setClassHours(subjectDTO.getClassHours());
        newSubject.setCourse(course);

        Subject savedSubject = subjectRepository.save(newSubject);

        return new SubjectResponseDTO(savedSubject.getId(), savedSubject.getName(), savedSubject.getClassHours(), course.getId(), course.getName());
    }

    @Transactional
    public Subject update(UUID id, SubjectUpdateRequestDTO subjectUpdateDTO) {
        Subject subject = subjectRepository.findById(id)
                .orElseThrow(() -> new BusinessException("Subject with the provided ID not found."));

        Course course = courseRepository.findById(subjectUpdateDTO.courseId())
                .orElseThrow(() -> new BusinessException("Course with the provided ID not found."));

        subject.setName(subjectUpdateDTO.name());
        subject.setClassHours(subjectUpdateDTO.classHours());
        subject.setCourse(course);

        return subjectRepository.save(subject);
    }

    public void delete(UUID id) {
        subjectRepository.deleteById(id);
    }
}