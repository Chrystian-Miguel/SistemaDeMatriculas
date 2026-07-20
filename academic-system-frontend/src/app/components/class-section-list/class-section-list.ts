import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ClassSection } from '../../models/class-section.model';
import { ClassSectionService } from '../../services/class-section.service';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-class-section-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: './class-section-list.html',
  styleUrl: './class-section-list.scss',
})
export class ClassSectionList {
  classSections$: Observable<ClassSection[]> = of([]);
  displayedColumns: string[] = ['code', 'subject', 'status', 'totalSlots', 'availableSlots', 'actions'];
  searchTerm = '';
  allClassSections: ClassSection[] = [];

  private classSectionService = inject(ClassSectionService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);

  constructor() {
    this.refresh();
  }

  refresh() {
    this.classSections$ = this.classSectionService.getClassSections().pipe(
      catchError(() => {
        this.onError('Error loading class sections.');
        return of([]);
      })
    );

    this.classSections$?.subscribe((sections) => {
      this.allClassSections = sections;
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(classSection: ClassSection) {
    this.router.navigate(['edit', classSection.id], { relativeTo: this.route });
  }

  deleteClassSection(id: string) {
    this.classSectionService.deleteClassSection(id).subscribe(() => {
      this.refresh();
    });
  }

  get filteredClassSections(): ClassSection[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.allClassSections;
    }

    return this.allClassSections.filter((section) => {
      const code = section.code?.toLowerCase() ?? '';
      const subjectName = section.subject?.name?.toLowerCase() ?? '';
      const status = section.status?.toLowerCase() ?? '';
      const availableSlots = section.availableSlots?.toString() ?? '';
      return code.includes(term) || subjectName.includes(term) || status.includes(term) || availableSlots.includes(term);
    });
  }
}
