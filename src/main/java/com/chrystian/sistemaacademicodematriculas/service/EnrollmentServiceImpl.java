package com.chrystian.sistemaacademicodematriculas.service;

import com.chrystian.sistemaacademicodematriculas.contract.EnrollmentService;
import com.chrystian.sistemaacademicodematriculas.dto.EnrollmentResponseDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.exception.DuplicateResourceException;
import com.chrystian.sistemaacademicodematriculas.exception.ResourceNotFoundException;
import com.chrystian.sistemaacademicodematriculas.model.*;
import com.chrystian.sistemaacademicodematriculas.repository.ClassSectionRepository;
import com.chrystian.sistemaacademicodematriculas.repository.EnrollmentRepository;
import com.chrystian.sistemaacademicodematriculas.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EnrollmentServiceImpl implements EnrollmentService {

    private final EnrollmentRepository enrollmentRepository;
    private final StudentRepository studentRepository;
    private final ClassSectionRepository classSectionRepository;

    @Override
    @Transactional
    public EnrollmentResponseDTO requestEnrollment(UUID studentId, UUID classSectionId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found."));
        ClassSection classSection = classSectionRepository.findById(classSectionId)
                .orElseThrow(() -> new ResourceNotFoundException("Class section not found."));

        if (enrollmentRepository.existsByStudentIdAndClassSectionId(student.getId(), classSection.getId())) {
            throw new DuplicateResourceException("The student is already registered in this class section.");
        }

        if (classSection.getStatus() != ClassSectionStatus.OPEN) {
            throw new BusinessException("Cannot request enrollment: class section is closed.");
        }

        if (classSection.getAvailableSlots() <= 0) {
            throw new BusinessException("Cannot request enrollment: no available slots left.");
        }

        Enrollment newEnrollment = buildEnrollment(student, classSection);
        Enrollment savedEnrollment = enrollmentRepository.save(newEnrollment);

        return toEnrollmentResponseDTO(savedEnrollment);
    }

    private Enrollment buildEnrollment(Student student, ClassSection classSection) {
        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student);
        enrollment.setClassSection(classSection);
        enrollment.setStatus(EnrollmentStatus.PENDING);
        return enrollment;
    }

    private EnrollmentResponseDTO toEnrollmentResponseDTO(Enrollment enrollment) {
        return new EnrollmentResponseDTO(
                enrollment.getStudent().getName(),
                enrollment.getClassSection().getCode(),
                enrollment.getStatus().toString(),
                enrollment.getEnrollmentDate()
        );
    }

    @Override
    @Transactional
    public Enrollment confirmEnrollment(UUID enrollmentId) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Enrollment not found."));

        if (enrollment.getStatus() == EnrollmentStatus.CONFIRMED) {
            return enrollment;
        }

        ClassSection classSection = enrollment.getClassSection();

        if (classSection.getAvailableSlots() <= 0) {
            throw new BusinessException("Cannot confirm: class section has reached capacity.");
        }

        classSection.setAvailableSlots(classSection.getAvailableSlots() - 1);
        classSectionRepository.save(classSection);

        enrollment.setStatus(EnrollmentStatus.CONFIRMED);
        return enrollmentRepository.save(enrollment);
    }

    @Override
    @Transactional
    public Enrollment cancelEnrollment(UUID enrollmentId) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Enrollment not found."));

        if (enrollment.getStatus() == EnrollmentStatus.CANCELLED) {
            return enrollment;
        }

        if (enrollment.getStatus() == EnrollmentStatus.CONFIRMED) {
            ClassSection classSection = enrollment.getClassSection();
            classSection.setAvailableSlots(classSection.getAvailableSlots() + 1);
            classSectionRepository.save(classSection);
        }

        enrollment.setStatus(EnrollmentStatus.CANCELLED);
        return enrollmentRepository.save(enrollment);
    }

    @Override
    @Transactional
    public void deleteEnrollment(UUID enrollmentId) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Enrollment not found."));

        if (enrollment.getStatus() == EnrollmentStatus.CONFIRMED) {
            ClassSection classSection = enrollment.getClassSection();
            classSection.setAvailableSlots(classSection.getAvailableSlots() + 1);
            classSectionRepository.save(classSection);
        }

        enrollmentRepository.delete(enrollment);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Enrollment> listByStudent(UUID studentId) {
        return enrollmentRepository.findByStudentId(studentId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Enrollment> listByClassSection(UUID classSectionId) {
        return enrollmentRepository.findByClassSectionId(classSectionId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Enrollment> listAll() {
        return enrollmentRepository.findAll();
    }
}