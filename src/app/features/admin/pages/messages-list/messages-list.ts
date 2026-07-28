import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './messages-list.html'
})
export class MessagesList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'name', label: 'Sender Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'subject', label: 'Subject', type: 'badge' },
    { key: 'createdAt', label: 'Date Received', type: 'date' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    // Assuming the endpoint is 'contact' and it returns a list of messages for GET
    this.crudService.getAll('contact').subscribe({
      next: (res) => {
        if(res.success) {
          this.data.set(res.data.docs || res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/messages', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('contact', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
