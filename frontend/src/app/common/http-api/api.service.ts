import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  ENV_CONFIG_TOKEN,
  IEnvironmentConfig,
} from '../http-config/env-config';
import { NotFoundError } from '../http-errors/not-found.error';
import { BadRequestError } from '../http-errors/bad-request.error';
import { UnauthorizedError } from '../http-errors/unauthorised.error';
import { UnknownError } from '../http-errors/unknown.error';

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
      .get<T>(`${this.apiUrl}/${path}`);
  }
}
