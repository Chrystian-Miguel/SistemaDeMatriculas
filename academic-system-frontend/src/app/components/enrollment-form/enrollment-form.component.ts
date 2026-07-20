import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';

import { ClassSection } from '../../models/class-section.model';
import { Student } from '../../models/student.model';
import { ClassSectionService } from '../../services/class-section.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatAutocompleteModule,
  ],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.scss'],
})
export class EnrollmentFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private enrollmentService = inject(EnrollmentService);
  private studentService = inject(StudentService);
  private classSectionService = inject(ClassSectionService);
  private snackBar = inject(MatSnackBar);

  students: Student[] = [];
  classSections: ClassSection[] = [];

  studentControl = new FormControl<string | Student>('');
  classSectionControl = new FormControl<string | ClassSection>('');

  filteredStudents!: Observable<Student[]>;
  filteredClassSections!: Observable<ClassSection[]>;

  form = this.fb.group({
    studentId: ['', Validators.required],
    classSectionId: ['', Validators.required],
  });

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      this.filteredStudents = this.studentControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filterStudents(name) : this.students.slice();
        })
      );
    });

    this.classSectionService.getClassSections().subscribe((classSections) => {
      this.classSections = classSections.filter((section) => section.availableSlots > 0);
      this.filteredClassSections = this.classSectionControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : value?.subject.name;
          return name ? this._filterClassSections(name) : this.classSections.slice();
        })
      );
    });
  }

  private _filterStudents(value: string): Student[] {
    const filterValue = value.toLowerCase();
    return this.students.filter((student) =>
      `${student.name} ${student.academicRegistry}`.toLowerCase().includes(filterValue)
    );
  }

  private _filterClassSections(value: string): ClassSection[] {
    const filterValue = value.toLowerCase();
    return this.classSections.filter((section) =>
      `${section.code} ${section.subject?.name ?? ''}`.toLowerCase().includes(filterValue)
    );
  }

  displayStudent(student: Student): string {
    return student && student.name ? `${student.name} (${student.academicRegistry})` : '';
  }

  displayClassSection(classSection: ClassSection): string {
    return classSection && classSection.subject
      ? `${classSection.subject.name} - ${classSection.code}`
      : '';
  }

  onStudentSelected(student: Student): void {
    this.form.patchValue({ studentId: student.id });
  }

  onClassSectionSelected(classSection: ClassSection): void {
    this.form.patchValue({ classSectionId: classSection.id });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { studentId, classSectionId } = this.form.value;

      if (!studentId || !classSectionId) {
        this.snackBar.open('Please choose a student and a class section.', 'Close', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        return;
      }

      this.enrollmentService.requestEnrollment(studentId, classSectionId).subscribe({
        next: () => {
          this.snackBar.open('Enrollment requested successfully!', 'Close', {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/enrollments']);
        },
        error: (error) => {
          console.error('Enrollment request failed', error);
          this.snackBar.open(
            'Unable to create the enrollment. Check the selected values and try again.',
            'Close',
            {
              duration: 4000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );
        },
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/enrollments']);
  }
}
