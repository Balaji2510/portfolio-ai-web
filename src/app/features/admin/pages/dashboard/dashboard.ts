import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { DashboardService } from '../../../../core/services/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit, OnDestroy {
  private dashboardService = inject(DashboardService);
  
  dashboardData = signal<any>(null);
  loading = signal<boolean>(true);
  private pollInterval: any;

  ngOnInit() {
    this.fetchData();
    // Poll every 10 seconds for real-time updates
    this.pollInterval = setInterval(() => {
      this.fetchData(false);
    }, 10000);
  }

  ngOnDestroy() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  private fetchData(showLoading = true) {
    if (showLoading) this.loading.set(true);
    
    this.dashboardService.getDashboardData().subscribe({
      next: (res) => {
        if (res.success) {
          this.dashboardData.set(res.data);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching dashboard data:', err);
        this.loading.set(false);
      }
    });
  }
}
