import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  ENV_CONFIG_TOKEN,
  IEnvironmentConfig,
} from '../../../../../common/http-config/env-config';
import { NotFoundError } from '../../../../../common/http-errors/not-found.error';
import { BadRequestError } from '../../../../../common/http-errors/bad-request.error';
import { UnauthorizedError } from '../../../../../common/http-errors/unauthorised.error';
import { UnknownError } from '../../../../../common/http-errors/unknown.error';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string;
  private projectUrl = '/todo';
  private resourceName!: string;

  constructor(
    @Inject(ENV_CONFIG_TOKEN) config: IEnvironmentConfig,
    private http: HttpClient
  ) {
    this.apiUrl = config.baseUrl + this.projectUrl;
  }

  getAll<T>(path: string): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${path}`)
      .pipe(catchError((error: any) => this.handleError(error)));
  }

  private handleError(error: Response): Observable<never> {
    if (error.status === 404)
      throw throwError(() => new NotFoundError(error, this.resourceName));

    if (error.status === 401)
      throw throwError(() => new UnauthorizedError(error, this.resourceName));

    if (error.status === 400)
      throw throwError(() => new BadRequestError(error, this.resourceName));

    throw throwError(() => new UnknownError(error, this.resourceName));
  }
}
