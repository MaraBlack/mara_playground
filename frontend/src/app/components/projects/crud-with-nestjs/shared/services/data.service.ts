import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../../../common/http-api/api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apiService: ApiService) {}

  getAllItems(): Observable<string[]> {
    return this.apiService.getAll<string[]>('all-test');
  }
}
