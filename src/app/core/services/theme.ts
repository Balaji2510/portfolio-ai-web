import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  isDark = signal<boolean>(false);

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setDark(true);
    } else {
      this.setDark(false);
    }
  }

  toggle() {
    this.setDark(!this.isDark());
  }

  private setDark(isDark: boolean) {
    this.isDark.set(isDark);
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
