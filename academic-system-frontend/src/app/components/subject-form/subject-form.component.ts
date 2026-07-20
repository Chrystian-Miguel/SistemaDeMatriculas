import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

import { SubjectService } from '../../services/subject.service';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-subject-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss'],
})
export class SubjectFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private subjectService = inject(SubjectService);
  private courseService = inject(CourseService);

  form = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    classHours: [0, [Validators.required, Validators.min(1)]],
    courseId: ['', Validators.required],
  });

  courses: Course[] = [];
  isEditMode = false;

  ngOnInit(): void {
    this.loadCourses();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.subjectService.getSubjects().subscribe((subjects) => {
        const subject = subjects.find((item) => item.id === id);
        if (subject) {
          this.form.patchValue({
            id: subject.id,
            name: subject.name,
            classHours: subject.classHours,
            courseId: subject.courseId,
          });
        }
      });
    }
  }

  private loadCourses(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    const payload = {
      name: value.name ?? '',
      classHours: Number(value.classHours ?? 0),
      courseId: value.courseId ?? '',
    };

    if (this.isEditMode && value.id) {
      this.subjectService.save({ ...payload, id: value.id ?? undefined }).subscribe(() => {
        this.router.navigate(['/subjects']);
      });
      return;
    }

    this.subjectService.save(payload).subscribe(() => {
      this.router.navigate(['/subjects']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/subjects']);
  }

  get title(): string {
    return this.isEditMode ? 'Edit Subject' : 'New Subject';
  }
}
