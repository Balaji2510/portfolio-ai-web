import { environment } from '../../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/experience`;

  getExperiences(page = 1, limit = 20): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }
}
