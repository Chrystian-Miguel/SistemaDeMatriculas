import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students',
    loadComponent: () =>
      import('./components/student-list/student-list.component').then(
        (m) => m.StudentListComponent
      ),
  },
  {
    path: 'students/new',
    loadComponent: () =>
      import('./components/student-form/student-form.component').then(
        (m) => m.StudentFormComponent
      ),
  },
  {
    path: 'students/edit/:id',
    loadComponent: () =>
      import('./components/student-form/student-form.component').then(
        (m) => m.StudentFormComponent
      ),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/course-list/course-list').then(
        (m) => m.CourseList
      ),
  },
  {
    path: 'courses/new',
    loadComponent: () =>
      import('./components/course-form/course-form.component').then(
        (m) => m.CourseFormComponent
      ),
  },
  {
    path: 'courses/edit/:id',
    loadComponent: () =>
      import('./components/course-form/course-form.component').then(
        (m) => m.CourseFormComponent
      ),
  },
  {
    path: 'subjects',
    loadComponent: () =>
      import('./components/subject-list/subject-list.component').then(
        (m) => m.SubjectListComponent
      ),
  },
  {
    path: 'subjects/new',
    loadComponent: () =>
      import('./components/subject-form/subject-form.component').then(
        (m) => m.SubjectFormComponent
      ),
  },
  {
    path: 'subjects/edit/:id',
    loadComponent: () =>
      import('./components/subject-form/subject-form.component').then(
        (m) => m.SubjectFormComponent
      ),
  },
  {
    path: 'class-sections',
    loadComponent: () =>
      import(
        './components/class-section-list/class-section-list'
      ).then((m) => m.ClassSectionList),
  },
  {
    path: 'class-sections/new',
    loadComponent: () =>
      import('./components/class-section-form/class-section-form.component').then(
        (m) => m.ClassSectionFormComponent
      ),
  },
  {
    path: 'class-sections/edit/:id',
    loadComponent: () =>
      import('./components/class-section-form/class-section-form.component').then(
        (m) => m.ClassSectionFormComponent
      ),
  },
  {
    path: 'enrollments',
    loadComponent: () =>
      import(
        './components/enrollment-list/enrollment-list'
      ).then((m) => m.EnrollmentListComponent),
  },
  {
    path: 'enrollments/new',
    loadComponent: () =>
      import('./components/enrollment-form/enrollment-form.component').then(
        (m) => m.EnrollmentFormComponent
      ),
  },
  {
    path: 'enrollments/edit/:id',
    loadComponent: () =>
      import('./components/enrollment-form/enrollment-form.component').then(
        (m) => m.EnrollmentFormComponent
      ),
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];
