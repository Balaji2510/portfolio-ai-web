import { Component, OnInit, inject, signal } from '@angular/core';
import { CrudService } from '../../../../core/services/crud.service';
import { SkeletonLoader } from '../../../../shared/components/skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-hero',
  imports: [SkeletonLoader],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private crudService = inject(CrudService);

  settings = signal<any>(null);
  isLoading = signal<boolean>(true);

   readonly stats = [
    {
      value: '3+',
      label: 'Years Experience'
    },
    {
      value: '3+',
      label: 'Projects'
    },
    {
      value: '10+',
      label: 'Technologies'
    },
    {
      value: '100%',
      label: 'Passion'
    }
  ];

  ngOnInit() {
    this.crudService.getAll('settings').subscribe({
      next: (res) => {
        if(res.success && res.data) {
          this.settings.set(res.data);
          // dynamically update stats if needed
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
}
