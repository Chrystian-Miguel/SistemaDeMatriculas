package com.chrystian.sistemaacademicodematriculas.contract;

import com.chrystian.sistemaacademicodematriculas.dto.StudentCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.StudentUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Student;

import java.util.List;
import java.util.UUID;

public interface StudentService {
    List<Student> list();
    Student create(StudentCreateRequestDTO studentDTO);
    Student update(UUID id, StudentUpdateRequestDTO studentDTO);
    void delete(UUID id);
}