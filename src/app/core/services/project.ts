import { environment } from '../../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/projects`;

  getProjects(page = 1, limit = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  getProjectById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
