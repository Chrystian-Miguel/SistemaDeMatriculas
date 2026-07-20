package com.chrystian.sistemaacademicodematriculas.contract;

import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionCreateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.dto.ClassSectionUpdateRequestDTO;
import com.chrystian.sistemaacademicodematriculas.model.ClassSection;

import java.util.List;
import java.util.UUID;

public interface ClassSectionService {
    List<ClassSection> list();

    ClassSection create(ClassSectionCreateRequestDTO classSectionDTO);

    ClassSection update(UUID id, ClassSectionUpdateRequestDTO classSectionDTO);

    void delete(UUID id);
}