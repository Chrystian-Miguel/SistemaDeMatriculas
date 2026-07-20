import { Student } from './student.model';
import { ClassSection } from './class-section.model';

export type EnrollmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED';

export interface Enrollment {
  id: string;
  student: Student;
  classSection: ClassSection;
  status: EnrollmentStatus;
  enrollmentDate: string;
}

export interface EnrollmentResponseDTO {
  studentName: string;
  classSectionCode: string;
  status: EnrollmentStatus;
  enrollmentDate: string;
}
