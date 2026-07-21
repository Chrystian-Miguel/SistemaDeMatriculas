import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { catchError, Observable, of } from 'rxjs';
import { ClassSectionService } from '../../services/class-section.service';
import { SubjectService } from '../../services/subject.service';
import { SubjectResponseDTO } from '../../models/subject.model';
import { ClassSectionStatus } from '../../models/class-section.model';
import { ClassSectionCreateRequestDTO, ClassSectionUpdateRequestDTO } from '../../models/dtos/class-section.dto';

@Component({
  selector: 'app-class-section-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule
  ],
  templateUrl: './class-section-form.component.html',
  styleUrls: ['./class-section-form.component.scss']
})
export class ClassSectionFormComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  classSectionId: string | null = null;
  subjects$!: Observable<SubjectResponseDTO[]>;
  statuses: ClassSectionStatus[] = ['OPEN', 'CLOSED'];

  private classSectionService = inject(ClassSectionService);
  private subjectService = inject(SubjectService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      code: ['', Validators.required],
      totalSlots: ['', [Validators.required, Validators.min(1)]],
      subjectId: ['', Validators.required],
      status: [{ value: '', disabled: true }, Validators.required]
    });
  }

  ngOnInit(): void {
    this.subjects$ = this.subjectService.list();
    this.classSectionId = this.route.snapshot.paramMap.get('id');

    if (this.classSectionId) {
      this.isEditMode = true;
      this.form.controls['status'].enable();

      this.classSectionService.getClassSections().pipe(
        catchError(() => of([]))
      ).subscribe((sections) => {
        const section = sections.find((item) => item.id === this.classSectionId);
        if (section) {
          this.form.patchValue({
            code: section.code,
            totalSlots: section.totalSlots,
            subjectId: section.subject?.id,
            status: section.status,
          });
        }
      });
      return;
    }

    this.subjects$ = this.subjectService.list();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      if (this.isEditMode && this.classSectionId) {
        const updateDto: ClassSectionUpdateRequestDTO = {
          code: formValue.code ?? '',
          totalSlots: Number(formValue.totalSlots ?? 0),
          status: formValue.status ?? 'OPEN'
        };
        this.classSectionService.updateClassSection(this.classSectionId, updateDto)
          .subscribe(() => this.router.navigate(['/class-sections']));
      } else {
        const createDto: ClassSectionCreateRequestDTO = {
          code: formValue.code ?? '',
          totalSlots: Number(formValue.totalSlots ?? 0),
          subjectId: formValue.subjectId ?? '',
          status: 'OPEN'
        };
        this.classSectionService.createClassSection(createDto)
          .subscribe(() => this.router.navigate(['/class-sections']));
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/class-sections']);
  }
}
