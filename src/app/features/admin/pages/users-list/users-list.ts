import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './users-list.html'
})
export class UsersList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', type: 'badge' },
    { key: 'isActive', label: 'Status', type: 'badge' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    // Note: Users API is /admin/users, not just /users
    this.crudService.getAll('admin/users').subscribe({
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
    // Actually, backend auth.routes.ts has POST /auth/register for creating users. 
    // We'll just route to the form which will do a PUT if editing.
    this.router.navigate(['/admin/users/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/users', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('admin/users', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
