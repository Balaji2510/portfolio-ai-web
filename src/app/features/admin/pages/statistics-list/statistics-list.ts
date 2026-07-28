import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-statistics-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './statistics-list.html'
})
export class StatisticsList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'icon', label: 'Icon', type: 'icon' },
    { key: 'title', label: 'Title' },
    { key: 'value', label: 'Value' },
    { key: 'description', label: 'Description' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('statistics').subscribe({
      next: (res) => {
        if(res.success) {
          this.data.set(res.data.docs || res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onAdd() {
    this.router.navigate(['/admin/statistics/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/statistics', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('statistics', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
