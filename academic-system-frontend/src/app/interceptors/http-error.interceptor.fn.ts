import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';
import { SUPPRESS_GLOBAL_ERROR_HANDLER } from './interceptor.context';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (!req.context.get(SUPPRESS_GLOBAL_ERROR_HANDLER)) {
        errorService.handleError(error);
      }
      return throwError(() => error);
    })
  );
};
