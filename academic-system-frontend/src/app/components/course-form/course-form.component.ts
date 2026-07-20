import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ],
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  courseId: string | null = null;

  private courseService = inject(CourseService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.isEditMode = true;
      this.courseService.getCourses().subscribe((courses) => {
        const course = courses.find((item) => item.id === this.courseId);
        if (course) {
          this.form.patchValue({
            name: course.name,
            description: course.description ?? '',
          });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const payload = this.form.value;

    if (this.isEditMode && this.courseId) {
      this.courseService.updateCourse(this.courseId, payload).subscribe(() => {
        this.router.navigate(['/courses']);
      });
      return;
    }

    this.courseService.createCourse(payload).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
