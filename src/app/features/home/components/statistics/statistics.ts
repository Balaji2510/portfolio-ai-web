import { Component, OnInit, signal, inject } from '@angular/core';
import { Statistic } from '../../../../core/models';
import { CrudService } from '../../../../core/services/crud.service';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics implements OnInit {
  private crudService = inject(CrudService);

  statistics = signal<Statistic[]>([]);

  ngOnInit() {
    this.crudService.getAll('statistics').subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.statistics.set(res.data);
        }
      },
      error: () => {}
    });
  }
}
