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

  constructor(
    @Inject(ENV_CONFIG_TOKEN) config: IEnvironmentConfig,
    private http: HttpClient
  ) {
    this.apiUrl = config.baseUrl;
  }

  // Get all items
  getAll<T>(projectUrl: string, path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${projectUrl}/${path}`);
  }

  // Method to fetch data as text
  getText(projectUrl: string, path: string): Observable<string> {
    return this.http.get(`${this.apiUrl}/${projectUrl}/${path}`, { responseType: 'text' }) as Observable<string>;
  }

  // Create a new item
  create<T>(projectUrl: string, path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${projectUrl}/${path}`, body);
  }

  // Update an existing item
  update<T>(projectUrl: string, path: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${projectUrl}/${path}`, body);
  }

  delete<T>(projectUrl: string, path: string, options?: { params?: { [key: string]: string } }): Observable<T> {
    let httpParams = new HttpParams();
    if (options?.params) {
      for (const [key, value] of Object.entries(options.params)) {
        httpParams = httpParams.append(key, value);
      }
    }
    return this.http.delete<T>(`${this.apiUrl}/${projectUrl}/${path}`, { params: httpParams });
  }
}
