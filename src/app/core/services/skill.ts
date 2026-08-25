import { environment } from '../../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/skills`;

  getSkills(page = 1, limit = 100): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }
}
