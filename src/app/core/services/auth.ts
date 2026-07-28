import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:3000/api/auth';
  private tokenKey = 'portfolio_admin_token';

  isLoggedIn = signal<boolean>(this.hasToken());

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((res) => {
        if (res.success && res.data && res.data.token) {
          this.setToken(res.data.token);
        }
      })
    );
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/admin/login']);
  }

  setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
      this.isLoggedIn.set(true);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
      this.isLoggedIn.set(false);
    }
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }
}
