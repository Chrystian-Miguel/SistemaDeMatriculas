import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, catchError, Observable, of } from 'rxjs';

import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  templateUrl: './subject-list.html',
  styleUrls: ['./subject-list.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ]
})
export class SubjectListComponent implements OnInit {

  subjects$: Observable<Subject[]> | null = null;
  displayedColumns = ['name', 'classHours', 'courseName', 'actions'];
  searchTerm = '';
  allSubjects: Subject[] = [];

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private errorService: ErrorService
  ) {
    this.refresh();
  }

  refresh() {
    this.subjects$ = this.subjectService.list()
      .pipe(
        catchError(() => of([]))
      );

    this.subjects$?.subscribe((subjects) => {
      this.allSubjects = subjects;
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(subject: Subject) {
    this.router.navigate(['edit', subject.id], { relativeTo: this.route });
  }

  onDelete(subject: Subject) {
    this.subjectService.remove(subject.id).pipe(
      catchError(() => {
        this.errorService.showCustomError("It is not possible to delete subjects that are linked to a course.");
        return EMPTY;
      })
    ).subscribe(() => {
      this.refresh();
      this.snackBar.open('Subject removed successfully!', 'X', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
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
