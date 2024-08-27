import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BadRequestError } from '../http-errors/bad-request.error';
import { UnauthorizedError } from '../http-errors/unauthorised.error';
import { UnknownError } from '../http-errors/unknown.error';
import { NotFoundError } from '../http-errors/not-found.error';
import { AppError } from '../http-errors/app.error';

@Injectable({
  providedIn: 'root',
})
export class ApiErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {   
      console.log('inside', error)     
        let customError: AppError;
        switch (error.status) {
          case 404:
            customError = new NotFoundError(error, 'Resource');
            break;
          case 401:
            customError = new UnauthorizedError(error, 'Resource');
            break;
          case 400:
            customError = new BadRequestError(error, 'Resource');
            break;
          default:
            customError = new UnknownError(error, 'Resource');
        }
        return throwError(() => customError);
      })
    );
  }
}
