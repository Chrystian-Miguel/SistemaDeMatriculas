import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Enrollment } from '../../models/enrollment.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-enrollment-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  templateUrl: './enrollment-list.html',
  styleUrl: './enrollment-list.scss',
})
export class EnrollmentListComponent implements OnInit {
  displayedColumns: string[] = ['student', 'classSection', 'status', 'enrollmentDate', 'actions'];
  searchTerm = '';
  allEnrollments: Enrollment[] = [];
  filteredEnrollments: Enrollment[] = [];
  isLoading = true;

  private enrollmentService = inject(EnrollmentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadEnrollments();
  }

  loadEnrollments(): void {
    this.isLoading = true;
    this.enrollmentService
      .getEnrollments()
      .pipe(catchError(() => of([])))
      .subscribe((enrollments) => {
        this.allEnrollments = enrollments;
        this.filterEnrollments();
        this.isLoading = false;
        this.cdr.detectChanges();
      });
  }

  confirmEnrollment(id: string): void {
    this.enrollmentService.confirmEnrollment(id).subscribe(() => {
      this.loadEnrollments();
    });
  }

  deleteEnrollment(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: 'Are you sure you want to delete this enrollment?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.enrollmentService.deleteEnrollment(id).subscribe(() => {
          this.loadEnrollments();
        });
      }
    });
  }

  cancelEnrollment(id: string): void {
    this.enrollmentService.cancelEnrollmentStatus(id).subscribe(() => {
      this.loadEnrollments();
    });
  }

  onAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  filterEnrollments(): void {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.filteredEnrollments = this.allEnrollments;
      return;
    }

    this.filteredEnrollments = this.allEnrollments.filter((enrollment) => {
      const studentName = enrollment.student?.name?.toLowerCase() ?? '';
      const classSectionLabel =
        `${enrollment.classSection?.subject?.name ?? ''} ${
          enrollment.classSection?.code ?? ''
        }`.toLowerCase();
      const status = enrollment.status?.toLowerCase() ?? '';
      return (
        studentName.includes(term) ||
        classSectionLabel.includes(term) ||
        status.includes(term)
      );
    });
  }
}
