CREATE TABLE course
(
    id          VARCHAR(36)  NOT NULL,
    name        VARCHAR(100) NOT NULL,
    description TEXT,
    CONSTRAINT pk_course PRIMARY KEY (id)
) ENGINE=InnoDB;


CREATE TABLE student
(
    id                VARCHAR(36)  NOT NULL,
    name              VARCHAR(100) NOT NULL,
    email             VARCHAR(100) NOT NULL,
    academic_registry VARCHAR(20)  NOT NULL,
    CONSTRAINT pk_student PRIMARY KEY (id),
    CONSTRAINT uk_student_email UNIQUE (email),
    CONSTRAINT uk_student_registry UNIQUE (academic_registry)
) ENGINE=InnoDB;


CREATE TABLE subject
(
    id          VARCHAR(36)  NOT NULL,
    name        VARCHAR(100) NOT NULL,
    class_hours INT          NOT NULL,
    course_id   VARCHAR(36)  NOT NULL,
    CONSTRAINT pk_subject PRIMARY KEY (id),
    CONSTRAINT fk_subject_course FOREIGN KEY (course_id) REFERENCES course (id) ON DELETE CASCADE
) ENGINE=InnoDB;


CREATE TABLE class_section
(
    id              VARCHAR(36) NOT NULL,
    code            VARCHAR(30) NOT NULL,
    total_slots     INT         NOT NULL,
    available_slots INT         NOT NULL,
    status          VARCHAR(20) NOT NULL DEFAULT 'OPEN',
    subject_id      VARCHAR(36) NOT NULL,
    CONSTRAINT pk_class_section PRIMARY KEY (id),
    CONSTRAINT uk_class_section_code UNIQUE (code),
    CONSTRAINT fk_class_section_subject FOREIGN KEY (subject_id) REFERENCES subject (id) ON DELETE RESTRICT,
    CONSTRAINT chk_slots CHECK (available_slots >= 0 AND available_slots <= total_slots)
) ENGINE=InnoDB;


CREATE TABLE enrollment
(
    id               VARCHAR(36) NOT NULL,
    student_id       VARCHAR(36) NOT NULL,
    class_section_id VARCHAR(36) NOT NULL,
    status           VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    enrollment_date  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_enrollment PRIMARY KEY (id),
    CONSTRAINT fk_enrollment_student FOREIGN KEY (student_id) REFERENCES student (id) ON DELETE RESTRICT,
    CONSTRAINT fk_enrollment_class_section FOREIGN KEY (class_section_id) REFERENCES class_section (id) ON DELETE RESTRICT,
    CONSTRAINT uk_student_class_section UNIQUE (student_id, class_section_id)
) ENGINE=InnoDB;