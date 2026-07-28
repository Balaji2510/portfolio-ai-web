import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './experience-list.html'
})
export class ExperienceList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'company', label: 'Company' },
    { key: 'role', label: 'Role', type: 'badge' },
    { key: 'startDate', label: 'Start Date', type: 'date' },
    { key: 'endDate', label: 'End Date', type: 'date' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('experience').subscribe({
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
    this.router.navigate(['/admin/experience/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/experience', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('experience', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
