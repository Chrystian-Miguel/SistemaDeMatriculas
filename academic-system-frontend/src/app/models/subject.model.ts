import { Course } from './course.model';

export interface Subject {
  id: string;
  name: string;
  classHours: number;
  course: Course;
}

export interface SubjectResponseDTO {
  id: string;
  name: string;
  classHours: number;
  courseId: string;
  courseName: string;
}
