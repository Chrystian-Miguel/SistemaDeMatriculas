package com.chrystian.sistemaacademicodematriculas.contract;

import com.chrystian.sistemaacademicodematriculas.dto.SubjectCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectResponseDTO;
import com.chrystian.sistemaacademicodematriculas.dto.SubjectUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.Subject;

import java.util.List;
import java.util.UUID;

public interface SubjectService {
    List<SubjectResponseDTO> list();
    SubjectResponseDTO create(SubjectCreateRequestDTO subjectDTO);
    Subject update(UUID id, SubjectUpdateRequestDTO subject);
    void delete(UUID id);
}