import { Component, signal, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CrudService } from './core/services/crud.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('portfolio-ai-web');
  
  private crudService = inject(CrudService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Track page views on every navigation
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        // Exclude admin routes from being counted as public portfolio views
        if (!this.router.url.includes('/admin')) {
          this.crudService.trackAnalytics('portfolioViews');
        }
      });

      // Track unique visitor using localStorage flag
      const hasVisited = localStorage.getItem('portfolio_has_visited');
      if (!hasVisited) {
        this.crudService.trackAnalytics('uniqueVisitors');
        localStorage.setItem('portfolio_has_visited', 'true');
      }
    }
  }
}
