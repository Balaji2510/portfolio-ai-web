import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './blogs-list.html'
})
export class BlogsList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category', type: 'badge' },
    { key: 'views', label: 'Views' },
    { key: 'createdAt', label: 'Created At', type: 'date' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('blogs').subscribe({
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
    this.router.navigate(['/admin/blogs/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/blogs', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('blogs', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
