import { Component, OnInit, inject, signal } from '@angular/core';
import { CrudService } from '../../../../core/services/crud.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  private crudService = inject(CrudService);

  settings = signal<any>(null);

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
      }
    });
  }
}
