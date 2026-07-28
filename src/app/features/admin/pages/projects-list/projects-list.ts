import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './projects-list.html'
})
export class ProjectsList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'title', label: 'Project Title' },
    { key: 'status', label: 'Status', type: 'badge' },
    { key: 'thumbnail', label: 'Thumbnail', type: 'image' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('projects').subscribe({
      next: (res) => {
        if(res.success) {
          this.data.set(res.data.docs || res.data); // Support pagination or raw array
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onAdd() {
    this.router.navigate(['/admin/projects/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/projects', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('projects', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
