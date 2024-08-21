import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apiService: ApiService) {}

  getAllItems(): Observable<string[]> {
    return this.apiService.getAll<string[]>('all');
  }
}
