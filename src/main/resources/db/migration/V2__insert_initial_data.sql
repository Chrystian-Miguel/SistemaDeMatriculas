-- Initial Courses
INSERT INTO course (id, name, description)
VALUES ('e1111111-2222-3333-4444-555555555555', 'Full Stack Junior Development',
        'Intensive training on Java, Spring Boot, and Frontend technologies.'),
       ('e2222222-2222-3333-4444-555555555555', 'Software Engineering',
        'Bachelor program focused on software architecture and foundations.');

-- Initial Students
INSERT INTO student (id, name, email, academic_registry)
VALUES ('a1111111-2222-3333-4444-555555555555', 'Ana Silva', 'ana.silva@email.com', 'AR2026001'),
       ('a2222222-2222-3333-4444-555555555555', 'Bruno Santos', 'bruno.santos@email.com', 'AR2026002'),
       ('a3333333-2222-3333-4444-555555555555', 'Carlos Oliveira', 'carlos.oliveira@email.com', 'AR2026003');

-- Initial Subjects
INSERT INTO subject (id, name, class_hours, course_id)
VALUES ('d1111111-2222-3333-4444-555555555555', 'Algorithms and Logic', 80, 'e1111111-2222-3333-4444-555555555555'),
       ('d2222222-2222-3333-4444-555555555555', 'Web Development with Spring Boot', 120,
        'e1111111-2222-3333-4444-555555555555');

-- Initial Class Sections (Turmas)
INSERT INTO class_section (id, code, total_slots, available_slots, status, subject_id)
VALUES ('t1111111-2222-3333-4444-555555555555', 'CLASS-2026-ALG-A', 30, 29, 'OPEN',
        'd1111111-2222-3333-4444-555555555555'),
       ('t2222222-2222-3333-4444-555555555555', 'CLASS-2026-WEB-B', 2, 2, 'OPEN',
        'd2222222-2222-3333-4444-555555555555'),
       ('t3333333-2222-3333-4444-555555555555', 'CLASS-2026-WEB-CLOSED', 20, 20, 'CLOSED',
        'd2222222-2222-3333-4444-555555555555');

-- Initial Enrollments
INSERT INTO enrollment (id, student_id, class_section_id, status)
VALUES ('m1111111-2222-3333-4444-555555555555', 'a1111111-2222-3333-4444-555555555555',
        't1111111-2222-3333-4444-555555555555', 'CONFIRMED'),
       ('m2222222-2222-3333-4444-555555555555', 'a2222222-2222-3333-4444-555555555555',
        't2222222-2222-3333-4444-555555555555', 'PENDING');