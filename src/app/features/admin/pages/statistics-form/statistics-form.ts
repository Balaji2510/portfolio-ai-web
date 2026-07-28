import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CrudService } from '../../../../core/services/crud.service';

@Component({
  selector: 'app-statistics-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './statistics-form.html',
  styleUrl: './statistics-form.scss'
})
export class StatisticsForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form: FormGroup;
  isEdit = false;
  itemId = '';
  loading = false;

  constructor() {
    this.form = this.fb.group({
      icon: ['', Validators.required],
      title: ['', Validators.required],
      value: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    if (this.itemId && this.itemId !== 'new') {
      this.isEdit = true;
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.crudService.getById('statistics', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          this.form.patchValue(res.data);
        }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.loading = true;
    const request = this.isEdit
      ? this.crudService.update('statistics', this.itemId, this.form.value)
      : this.crudService.create('statistics', this.form.value);

    request.subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/admin/statistics']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/statistics']);
  }
}
