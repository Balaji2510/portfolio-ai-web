import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-loader.html',
  styleUrl: './skeleton-loader.scss',
})
export class SkeletonLoader {
  @Input() type: 'table' | 'card' | 'text' = 'text';
  @Input() rows: number = 1;
  @Input() columns: number = 1;

  getArray(n: number): any[] {
    return Array(n);
  }
}
