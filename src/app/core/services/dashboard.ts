import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  // URL to match the backend admin dashboard route
  private apiUrl = 'http://localhost:3000/api/admin/dashboard';

  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
