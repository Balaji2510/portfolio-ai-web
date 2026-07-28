import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api';

  getAll<T>(endpoint: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }

  getById<T>(endpoint: string, id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  create<T>(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, data);
  }

  update<T>(endpoint: string, id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  patch<T>(endpoint: string, id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  delete<T>(endpoint: string, id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  trackAnalytics(event: string) {
    this.http.post<any>(`${this.baseUrl}/analytics/track`, { event }).subscribe({
      next: () => {},
      error: () => {} // silently fail
    });
  }
}
