import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ENV_CONFIG_TOKEN,
  IEnvironmentConfig,
} from '../http-config/env-config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string;
  private projectUrl = '/todo';

  constructor(
    @Inject(ENV_CONFIG_TOKEN) config: IEnvironmentConfig,
    private http: HttpClient
  ) {
    this.apiUrl = config.baseUrl + this.projectUrl;
  }

  // Get all items
  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }

  // Get a single item by ID
  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }

  // Create a new item
  create<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body);
  }

  // Update an existing item
  update<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}`, body);
  }

  delete<T>(path: string, options?: { params?: { [key: string]: string } }): Observable<T> {
    let httpParams = new HttpParams();
    if (options?.params) {
      for (const [key, value] of Object.entries(options.params)) {
        httpParams = httpParams.append(key, value);
      }
    }
    return this.http.delete<T>(`${this.apiUrl}/${path}`, { params: httpParams });
  }
}
