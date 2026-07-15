package com.chrystian.sistemaacademicodematriculas.service;


import com.chrystian.sistemaacademicodematriculas.dto.EnrollmentResponseDTO;
import com.chrystian.sistemaacademicodematriculas.exception.BusinessException;
import com.chrystian.sistemaacademicodematriculas.model.*;
import com.chrystian.sistemaacademicodematriculas.repository.ClassSectionRepository;
import com.chrystian.sistemaacademicodematriculas.repository.EnrollmentRepository;
import com.chrystian.sistemaacademicodematriculas.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class EnrollmentService {

    private final EnrollmentRepository enrollmentRepository;
    private final StudentRepository studentRepository;
    private final ClassSectionRepository classSectionRepository;

    public EnrollmentService(EnrollmentRepository enrollmentRepository,
                             StudentRepository studentRepository,
                             ClassSectionRepository classSectionRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.studentRepository = studentRepository;
        this.classSectionRepository = classSectionRepository;
    }

    @Transactional
    public EnrollmentResponseDTO requestEnrollment(UUID studentId, UUID classSectionId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new BusinessException("Student not found."));
        ClassSection classSection = classSectionRepository.findById(classSectionId)
                .orElseThrow(() -> new BusinessException("Class section not found."));

        if (enrollmentRepository.existsByStudentIdAndClassSectionId(student.getId(), classSection.getId())) {
            throw new BusinessException("The student is already registered in this class section.");
        }

        if (classSection.getStatus() != ClassSectionStatus.OPEN) {
            throw new BusinessException("Cannot request enrollment: class section is closed.");
        }

        if (classSection.getAvailableSlots() <= 0) {
            throw new BusinessException("Cannot request enrollment: no available slots left.");
        }

        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student);
        enrollment.setClassSection(classSection);
        enrollment.setStatus(EnrollmentStatus.PENDING);

        Enrollment savedEnrollment = enrollmentRepository.save(enrollment);

        return new EnrollmentResponseDTO(
                savedEnrollment.getStudent().getName(),
                savedEnrollment.getClassSection().getCode(),
                savedEnrollment.getStatus().toString(),
                savedEnrollment.getEnrollmentDate()
        );
    }

    @Transactional
    public Enrollment confirmEnrollment(UUID enrollmentId) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new BusinessException("Enrollment not found."));

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

    @Transactional
    public Enrollment cancelEnrollment(UUID enrollmentId) {
        Enrollment enrollment = enrollmentRepository.findById(enrollmentId)
                .orElseThrow(() -> new BusinessException("Enrollment not found."));

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

    public List<Enrollment> listByStudent(UUID studentId) {
        return enrollmentRepository.findByStudentId(studentId);
    }

    public List<Enrollment> listByClassSection(UUID classSectionId) {
        return enrollmentRepository.findByClassSectionId(classSectionId);
    }
}