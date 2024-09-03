import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../common/http-api/api.service';

@Injectable({
  providedIn: 'root',
})
export class GoogleDocService {
  private projectUrl = 'public-doc';
  constructor(private apiService: ApiService) {}

  // Fetch all items
  getDocContent(): Observable<any> {
    return this.apiService.getText(this.projectUrl,`content`);
  }
}
