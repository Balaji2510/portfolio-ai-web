import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { DataTable, TableColumn } from '../../../../shared/components/data-table/data-table';

@Component({
  selector: 'app-skills-list',
  standalone: true,
  imports: [DataTable],
  templateUrl: './skills-list.html'
})
export class SkillsList implements OnInit {
  private crudService = inject(CrudService);
  private router = inject(Router);

  data = signal<any[]>([]);
  loading = signal<boolean>(true);

  columns: TableColumn[] = [
    { key: 'name', label: 'Skill Name' },
    { key: 'category', label: 'Category', type: 'badge' },
    { key: 'level', label: 'Level (%)' },
    { key: 'status', label: 'Status', type: 'badge' }
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('skills').subscribe({
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
    this.router.navigate(['/admin/skills/new']);
  }

  onEdit(item: any) {
    this.router.navigate(['/admin/skills', item.id]);
  }

  onDelete(item: any) {
    this.crudService.delete('skills', item.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => console.error(err)
    });
  }
}
