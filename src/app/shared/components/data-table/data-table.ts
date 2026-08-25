import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoader } from '../skeleton-loader/skeleton-loader';

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'image' | 'date' | 'badge' | 'icon';
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, SkeletonLoader],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTable {
  @Input() title = 'Data Table';
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() loading = false;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onAdd = new EventEmitter<void>();

  editItem(item: any) {
    this.onEdit.emit(item);
  }

  deleteItem(item: any) {
    if(confirm('Are you sure you want to delete this item?')) {
      this.onDelete.emit(item);
    }
  }

  addNew() {
    this.onAdd.emit();
  }
}
