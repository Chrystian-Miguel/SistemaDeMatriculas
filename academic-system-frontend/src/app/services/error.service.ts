import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/shared/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private dialog: MatDialog) { }

  handleError(error: any): void {
    let errorMessage = 'An unexpected error occurred. Please try again later.';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else if (error.error) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (typeof error.error === 'string') {
        errorMessage = error.error;
      } else if (typeof error.error === 'object') {
        const backendError = error.error;
        if (backendError.error && typeof backendError.error === 'string') {
          // Handles format { "error": "message" }
          errorMessage = backendError.error;
        } else if (backendError.message && typeof backendError.message === 'string' && !backendError.message.includes('Exception')) {
            // Handles Spring Boot's default error, but avoids stack traces.
            errorMessage = backendError.message;
        }
        else {
          // Handles format { "field1": "message1", "field2": "message2" }
          const errorMessages = Object.values(backendError).filter(val => typeof val === 'string');
          if (errorMessages.length > 0) {
            errorMessage = errorMessages.join('\n');
          }
        }
      }
    }

    // As a last resort, prevent huge stack traces from being shown in the dialog.
    if (errorMessage.length > 250) {
      console.error("Original error message:", errorMessage);
      errorMessage = 'An unexpected server error occurred.';
    }

    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
      width: '400px'
    });
  }

  showCustomError(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: message,
      width: '400px'
    });
  }
}
