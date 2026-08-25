import { Component, OnInit, signal, inject } from '@angular/core';
import { Statistic } from '../../../../core/models';
import { CrudService } from '../../../../core/services/crud.service';
import { SkeletonLoader } from '../../../../shared/components/skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-statistics',
  imports: [SkeletonLoader],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics implements OnInit {
  private crudService = inject(CrudService);

  statistics = signal<Statistic[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit() {
    this.crudService.getAll('statistics').subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.statistics.set(res.data);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
}
