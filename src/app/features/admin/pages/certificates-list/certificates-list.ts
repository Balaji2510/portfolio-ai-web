import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-certificates-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './certificates-list.html'
})
export class CertificatesList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'title', label: 'Certificate Name' },
    { key: 'provider', label: 'Provider' },
    { key: 'issueDate', label: 'Issue Date', type: 'date' },
    { key: 'status', label: 'Status', type: 'badge' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('certificates').subscribe({
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
    this.router.navigate(['/admin/certificates/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/certificates', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('certificates', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
