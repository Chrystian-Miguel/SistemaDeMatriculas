import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  templateUrl: './subject-list.html',
  styleUrl: './subject-list.scss',
})
export class SubjectList {
  subjects$: Observable<Subject[]> | null = null;
  readonly displayedColumns = ['name', 'classHours', 'courseName', 'actions'];
  searchTerm = '';
  allSubjects: Subject[] = [];

  private subjectService = inject(SubjectService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.refresh();
  }

  refresh() {
    this.subjects$ = this.subjectService.list().pipe(
      catchError(() => of([]))
    );

    this.subjects$?.subscribe((subjects) => {
      this.allSubjects = subjects;
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(subject: Subject) {
    this.router.navigate(['edit', subject.id], { relativeTo: this.route });
  }

  onDelete(subject: Subject) {
    this.subjectService.remove(subject.id).subscribe(() => {
      this.refresh();
      this.snackBar.open('Subject removed successfully!', 'X', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }

  get filteredSubjects(): Subject[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.allSubjects;
    }

    return this.allSubjects.filter((subject) => {
      const subjectName = subject.name?.toLowerCase() ?? '';
      const courseName = subject.courseName?.toLowerCase() ?? '';
      return subjectName.includes(term) || courseName.includes(term);
    });
  }
}
