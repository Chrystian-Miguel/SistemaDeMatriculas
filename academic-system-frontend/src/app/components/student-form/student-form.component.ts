import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private studentService = inject(StudentService);

  form = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    academicRegistry: ['', Validators.required]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentService.getStudents().subscribe(students => {
        const student = students.find((item) => item.id === id);
        if (student) {
          this.form.patchValue(student);
          this.form.get('academicRegistry')?.disable();
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const studentFormValue = this.form.getRawValue();
      if (studentFormValue.id) {
        const updateRequest = {
          name: studentFormValue.name ?? '',
          email: studentFormValue.email ?? ''
        };
        this.studentService.updateStudent(studentFormValue.id, updateRequest).subscribe(() => {
          this.router.navigate(['/students']);
        });
      } else {
        const { id, ...studentToCreate } = studentFormValue;
        const createRequest = {
          name: studentToCreate.name ?? '',
          email: studentToCreate.email ?? '',
          academicRegistry: studentToCreate.academicRegistry ?? '',
        };
        this.studentService.createStudent(createRequest).subscribe(() => {
          this.router.navigate(['/students']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/students']);
  }

  get title(): string {
    return this.form.get('id')?.value ? 'Edit Student' : 'New Student';
  }
}
